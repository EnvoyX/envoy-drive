import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { PostHogProvider } from "./_providers/posthog-provider";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Envoy Drive",
  description: "Shitty Google Drive clone",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${geist.variable}`}>
        <PostHogProvider>
          <body>
            {children}
            <Toaster />
          </body>
        </PostHogProvider>
      </html>
    </ClerkProvider>
  );
}
