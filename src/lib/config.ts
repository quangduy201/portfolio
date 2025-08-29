import { PortfolioConfig } from "@/lib/types";

const JSON_SILO_URL = process.env.JSON_SILO_URL;
const JSON_SILO_KEY = process.env.JSON_SILO_KEY;

export async function fetchPortfolioConfig(): Promise<PortfolioConfig> {
  if (!JSON_SILO_URL || !JSON_SILO_KEY) {
    throw new Error("Missing JSON_SILO_URL or JSON_SILO_KEY. Using fallback config.");
  }

  try {
    const res = await fetch(JSON_SILO_URL, {
      headers: {
        "X-SILO-KEY": JSON_SILO_KEY,
      },
      cache: "default",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch portfolio config, status: ${res.status}`);
    }

    console.log("Fetched portfolio config successfully");

    return await res.json();
  } catch (error) {
    throw new Error(`Error fetching portfolio config: ${error}`)
  }
}

export const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT!;
