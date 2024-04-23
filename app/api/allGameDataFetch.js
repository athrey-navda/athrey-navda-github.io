"use server";
import { promises as fs } from "fs";

export default async function Page() {
  try {
    const file = await fs.readFile(
      process.cwd() + "/public/data/gameCount.json",
      "utf8"
    );
    const data = JSON.parse(file);
    console.log(data);
    return data;
  } catch {
    console.error("Error reading game count file:", error);
    return null;
  }
}
