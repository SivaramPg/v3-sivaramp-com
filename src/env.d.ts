/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare global {
  interface Window {
    plausible?: {
      (eventName: string, options?: { props?: Record<string, unknown>; callback?: () => void }): void;
      q?: unknown[];
    };
  }
}

export {};
