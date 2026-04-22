// קוד שקשור לlib ולפיקסלים
"use client";
import { useEffect } from "react";
import { captureUtms } from "@/lib/utm";

export default function UtmCapture() {
  useEffect(() => {
    captureUtms();
  }, []);

  return null;
}
