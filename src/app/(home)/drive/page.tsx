import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Button } from "~/components/ui/button";
import { MUTATIONS, QUERIES } from "~/server/db/queries";

const DrivePage = async () => {
  const session = await auth();

  if (!session.userId) {
    return redirect("/sign-in");
  }

  const rootFolder = await QUERIES.getRootFolderForUser(session.userId);

  if (!rootFolder) {
    return (
      <form
        action={async () => {
          "use server";
          if (!session.userId) {
            return redirect("/sign-in");
          }

          const rootFolderId = await MUTATIONS.onboardUser(session.userId);
          return redirect(`/f/${rootFolderId}`);
        }}
      >
        <>
          <h1 className="mb-4 bg-gradient-to-r from-gray-200 to-gray-300 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
            Onboarding
          </h1>
          <Button
            variant={`ghost`}
            className="border border-gray-600 bg-neutral-800 text-white transition-colors hover:bg-white hover:text-gray-800"
            type="submit"
          >
            Create new Drive
          </Button>
        </>
      </form>
    );
  }
  return redirect(`/f/${rootFolder.id}`);
};

export default DrivePage;
