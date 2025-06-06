"use client";

import { ChevronRight } from "lucide-react";
import { FileRow, FolderRow } from "./file-row";
import type {
  files_table as files,
  folders_table as folders,
} from "~/server/db/schema";
import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { UploadButton } from "~/utils/uploadthing";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import LoadingSpinnerSVG from "./_components/LoadingSpinner";
export default function DriveContents(props: {
  files: (typeof files.$inferSelect)[];
  folders: (typeof folders.$inferSelect)[];
  parents: (typeof folders.$inferSelect)[];
  currentFolderId: number;
}) {
  const navigate = useRouter();
  return (
    <div className="min-h-screen bg-gray-900 p-8 text-gray-100">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center">
            <Link href={`/f/1`} className="mr-2 text-gray-300 hover:text-white">
              My Drive
            </Link>
            {props.parents.map((folder) => (
              <div key={folder.id} className="flex items-center">
                <ChevronRight className="mx-2 text-gray-500" size={16} />
                <Link
                  href={`/f/${folder.id}`}
                  className="text-gray-300 hover:text-white"
                >
                  {folder.name}
                </Link>
              </div>
            ))}
          </div>
          <header className="flex h-16 items-center justify-end gap-4 p-4">
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
        </div>
        <div className="rounded-lg bg-gray-800 shadow-xl">
          <div className="border-b border-gray-700 px-6 py-4">
            <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-400">
              <div className="col-span-6">Name</div>
              <div className="col-span-2">Type</div>
              <div className="col-span-3">Size</div>
              <div className="col-span-1"></div>
            </div>
          </div>
          <ul>
            {props.folders.map((folder) => (
              <FolderRow key={folder.id} folder={folder} />
            ))}
            {props.files.map((file) => (
              <FileRow key={file.id} file={file} />
            ))}
          </ul>
        </div>

        <UploadButton
          endpoint={`driveUploader`}
          onUploadBegin={() => {
            toast(
              <div className="flex items-center gap-2">
                <LoadingSpinnerSVG />{" "}
                <span className="text-lg">Uploading...</span>
              </div>,
              {
                duration: 100000,
                id: "upload-begin",
              },
            );
          }}
          onUploadError={(error) => {
            toast.dismiss("upload-begin");
            toast.error("Upload failed!");
            console.log(error);
          }}
          onClientUploadComplete={() => {
            navigate.refresh();
            toast.dismiss("upload-begin");
            toast.success("Upload complete!");
          }}
          input={{ folderId: props.currentFolderId }}
        ></UploadButton>
      </div>
    </div>
  );
}
