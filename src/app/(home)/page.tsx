import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Button } from "~/components/ui/button";

export default function HomePage() {
  return (
    <>
      <h1 className="mb-4 bg-gradient-to-r from-gray-200 to-gray-300 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
        Envoy Drive
      </h1>
      <p className="mx-auto mb-8 max-w-md text-xl text-white md:text-2xl">
        Secure, fast, and easy file storage for the modern web
      </p>
      <form
        action={async () => {
          "use server";

          const session = await auth();

          if (!session.userId) {
            return redirect("/sign-in");
          }

          return redirect("/drive");
        }}
      >
        <Button
          size="lg"
          type="submit"
          className="border border-gray-600 bg-neutral-800 text-white transition-colors hover:bg-white hover:text-gray-800"
        >
          Get Started
        </Button>
      </form>
    </>
  );
}
