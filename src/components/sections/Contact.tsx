"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "motion/react";
import { toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/shadcnui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/shadcnui/form";
import { Input } from "@/components/shadcnui/input";
import { Textarea } from "@/components/shadcnui/textarea";
import { FORM_ENDPOINT } from "@/lib/config";
import { PortfolioConfig } from "@/lib/types";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.email("Invalid email"),
  subject: z.string().trim().min(1, "Subject is required"),
  message: z.string().trim().min(1, "Message is required"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact({ config }: { config: PortfolioConfig }) {
  const [status, setStatus] = useState<
    "Send" | "Sending..." | "Thank you!" | "Send again"
  >("Send");

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (values: ContactFormValues) => {
    if (status === "Sending..." || status === "Thank you!") return;

    setStatus("Sending...");
    toast.promise(
      fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(values).toString(),
      }),
      {
        loading: "Sending...",
        error: (_) => {
          setStatus("Send again");
          return "Please send again later";
        },
        success: (_) => {
          form.reset();
          setStatus("Thank you!");
          return "Thank you!";
        },
      },
    );
  };

  return (
    <section id={"contact"} className="mx-4 my-10 flex flex-col items-center">
      <h1 className="relative text-xl font-semibold text-accent after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:bg-accent after:content-[''] lg:text-3xl">
        Contact
      </h1>
      <Form {...form}>
        <motion.form
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 1 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onSubmit={form.handleSubmit(onSubmit)}
          className="relative mt-4 flex w-full flex-col gap-4 rounded-xl border border-white/10 bg-white/5 p-6 text-black shadow-lg backdrop-blur-md md:w-5/6 lg:w-2/3 xl:w-1/2"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="email" placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Subject" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea rows={5} placeholder="Message" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {status === "Send again" && (
            <p className="text-sm text-red-500">Please try again later.</p>
          )}

          <Button
            type="submit"
            disabled={status === "Sending..." || status === "Thank you!"}
            className="w-full"
          >
            {status}
          </Button>
        </motion.form>
      </Form>
    </section>
  );
}
