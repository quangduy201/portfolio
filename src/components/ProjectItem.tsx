"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { FiChevronDown, FiMaximize2 } from "react-icons/fi";

import { Button } from "@/components/shadcnui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/shadcnui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shadcnui/popover";
import { Skeleton } from "@/components/shadcnui/skeleton";
import { Project } from "@/lib/types";

function getProjectVideoUrl(url: string): string | undefined {
  const [path, query = ""] = url.split("?");
  const suffix = query ? `?${query}` : "";

  if (path.toLowerCase().endsWith(".mp4")) return url;
  if (path.toLowerCase().endsWith(".gif")) {
    return `${path.slice(0, -4)}.mp4${suffix}`;
  }
}

export default function ProjectItem({ project }: { project: Project }) {
  const imageUrl = project.links.image.url;
  const videoUrl = getProjectVideoUrl(imageUrl);
  const prefersReducedMotion = useReducedMotion();
  const isAnimatedGif = imageUrl.toLowerCase().split("?")[0].endsWith(".gif");
  const start = new Date(project.startDate);
  const end = new Date(project.endDate);
  const formattedStartDate = `${(start.getMonth() + 1).toString().padStart(2, "0")}/${start.getFullYear()}`;
  const formattedEndDate = `${(end.getMonth() + 1).toString().padStart(2, "0")}/${end.getFullYear()}`;
  const [imageError, setImageError] = useState<boolean>(false);
  const [videoError, setVideoError] = useState<boolean>(false);
  const [isPlayerOpen, setIsPlayerOpen] = useState<boolean>(false);
  const previewRef = useRef<HTMLVideoElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const hasVideo = Boolean(videoUrl) && !videoError;
  const canUseImageFallback = !videoUrl || isAnimatedGif;

  useEffect(() => {
    if (!hasVideo || prefersReducedMotion || !mediaRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = previewRef.current;
        if (!video || isPlayerOpen) return;

        if (entry.isIntersecting) {
          void video.play();
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(mediaRef.current);

    return () => observer.disconnect();
  }, [hasVideo, isPlayerOpen, prefersReducedMotion]);

  useEffect(() => {
    const video = previewRef.current;
    if (!video || prefersReducedMotion) return;

    if (isPlayerOpen) {
      video.pause();
    } else if (mediaRef.current) {
      const rect = mediaRef.current.getBoundingClientRect();
      const visibleHeight =
        Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
      const isMostlyVisible = visibleHeight >= rect.height * 0.5;

      if (isMostlyVisible) void video.play();
    }
  }, [isPlayerOpen, prefersReducedMotion]);

  return (
    <div className={"flex flex-col gap-3 lg:flex-row lg:items-start"}>
      <div
        ref={mediaRef}
        className="relative aspect-video w-full shrink-0 overflow-hidden rounded-lg bg-white/10 lg:w-8/12 xl:w-7/12"
      >
        {imageError || (videoError && !canUseImageFallback) ? (
          <>
            <Skeleton className="relative h-full w-full" />
            <div className="absolute z-50">{project.title}</div>
          </>
        ) : hasVideo ? (
          <>
            <button
              type="button"
              aria-label={`Open ${project.title} video player`}
              className="group absolute inset-0 cursor-zoom-in"
              onClick={() => setIsPlayerOpen(true)}
            >
              <video
                ref={previewRef}
                src={videoUrl}
                aria-label={`${project.title} preview`}
                muted
                loop
                playsInline
                preload="metadata"
                className={`h-full w-full ${
                  project.links.image.platform === "mobile"
                    ? "object-contain"
                    : "object-cover"
                }`}
                onError={() => setVideoError(true)}
              />
              <span className="absolute right-3 bottom-3 rounded-full border border-white/15 bg-black/60 p-2 text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100 group-focus-visible:opacity-100">
                <FiMaximize2 aria-hidden="true" />
              </span>
            </button>

            <Dialog open={isPlayerOpen} onOpenChange={setIsPlayerOpen}>
              <DialogContent aria-label={`${project.title} video player`}>
                <DialogTitle>{project.title} video player</DialogTitle>
                <video
                  src={videoUrl}
                  aria-label={`${project.title} video`}
                  autoPlay
                  controls
                  loop
                  muted
                  playsInline
                  className="max-h-[85vh] w-full bg-black"
                  onError={() => setVideoError(true)}
                />
              </DialogContent>
            </Dialog>
          </>
        ) : (
          <Image
            src={imageUrl}
            alt={project.title}
            fill
            sizes="(min-width: 1280px) 58vw, (min-width: 1024px) 67vw, 100vw"
            unoptimized={isAnimatedGif}
            style={{
              objectFit:
                project.links.image.platform === "mobile" ? "contain" : "cover",
            }}
            onError={() => setImageError(true)}
          />
        )}
      </div>

      <div className="flex w-full flex-col lg:self-stretch">
        <div className="overflow-auto lg:min-h-0 lg:flex-1">
          <h2 className="text-xl font-semibold text-white">{project.title}</h2>
          <p className="text-accent text-base">{project.description}</p>
          <p className="mt-2 text-sm text-white/70">
            {project.technologies.join(", ")}
          </p>
          <p className="text-accent text-sm">
            {formattedStartDate} - {formattedEndDate}
          </p>
        </div>

        <div className="mt-4 flex gap-2">
          {project.links.sources.length === 1 && (
            <Button asChild variant={"outline"}>
              <Link href={project.links.sources[0].url} target="_blank">
                Source
              </Link>
            </Button>
          )}

          {project.links.sources.length > 1 && (
            <Popover>
              <PopoverTrigger asChild>
                <Button variant={"outline"} className="flex gap-2">
                  <span>Sources</span> <FiChevronDown />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="bg-primary flex h-fit w-fit flex-col gap-2">
                {project.links.sources.map((source, index) => (
                  <div
                    key={index}
                    className="border-accent hover:bg-accent rounded-xl border px-2 text-center text-white hover:text-black"
                  >
                    <Link href={source.url} target="_blank">
                      {source.title}
                    </Link>
                  </div>
                ))}
              </PopoverContent>
            </Popover>
          )}

          {project.links.demo && (
            <Button asChild>
              <Link href={project.links.demo} target="_blank">
                Demo
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
