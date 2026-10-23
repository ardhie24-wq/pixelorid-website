"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

const GA_ID = "G-DEW1HBBZ3Z";
const STORAGE_KEY = "pixelorid_analytics_consent";
const CHANGE_EVENT = "pixelorid-consent-change";

type Choice = "granted" | "denied" | "unset";

function readChoice(): Choice {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    if (value === "granted" || value === "denied") return value;
  } catch {
    // Storage blocked: treat as no choice made.
  }
  return "unset";
}

function subscribe(onChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

function clearAnalyticsCookies() {
  const names = document.cookie
    .split(";")
    .map((c) => c.split("=")[0].trim())
    .filter((n) => n === "_ga" || n.startsWith("_ga_") || n === "_gid" || n.startsWith("_gat"));
  const parts = window.location.hostname.split(".");
  const domains: (string | undefined)[] = [undefined];
  for (let i = 0; i < parts.length - 1; i++) {
    const d = parts.slice(i).join(".");
    domains.push(d);
    domains.push("." + d);
  }
  for (const name of names) {
    for (const domain of domains) {
      document.cookie =
        name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/" + (domain ? "; domain=" + domain : "");
    }
  }
}

function choose(value: "granted" | "denied") {
  const previous = readChoice();
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Storage blocked: nothing to save.
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
  if (value === "denied" && previous === "granted") {
    clearAnalyticsCookies();
    window.location.reload();
  }
}

function resetChoice() {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Storage blocked: nothing to remove.
  }
  clearAnalyticsCookies();
  window.location.reload();
}

export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button type="button" className={className} onClick={resetChoice}>
      Change cookie choice
    </button>
  );
}

export default function AnalyticsConsent() {
  const choice = useSyncExternalStore<Choice | "pending">(subscribe, readChoice, () => "pending");

  return (
    <>
      {choice === "granted" && <GoogleAnalytics gaId={GA_ID} />}
      {choice === "unset" && (
        <div
          role="dialog"
          aria-label="Cookie consent"
          className="fixed inset-x-0 bottom-0 z-[60] border-t border-[#e2e8f0] bg-white px-6 py-4 shadow-[0_-4px_24px_rgba(15,23,42,0.08)]"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-relaxed text-[#475569]">
              We would like to use Google Analytics cookies to understand how our website is used.
              They are only set if you accept. See our{" "}
              <Link href="/privacy" className="font-semibold text-[#16a34a] underline underline-offset-2">
                Privacy Policy
              </Link>
              .
            </p>
            <div className="flex shrink-0 gap-3">
              <button
                type="button"
                onClick={() => choose("denied")}
                className="rounded-lg border border-[#cbd5e1] bg-white px-5 py-2 text-sm font-semibold text-[#0f172a] transition-colors hover:bg-[#f8fafc]"
              >
                Decline
              </button>
              <button
                type="button"
                onClick={() => choose("granted")}
                className="rounded-lg border border-[#16a34a] bg-[#16a34a] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#15803d]"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}