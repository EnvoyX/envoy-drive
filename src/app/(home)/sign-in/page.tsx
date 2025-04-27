import { SignInButton } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-4">
        <div className="mb-4 bg-gradient-to-r from-gray-200 to-gray-300 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
          <h1>Welcome to Envoy Drive</h1>
        </div>
        <p className="mx-auto mb-8 max-w-md text-xl text-white md:text-2xl">
          Please Sign in first to access your files
        </p>
        <div className="cursor-pointer rounded-lg border border-gray-600 bg-neutral-800 p-4 px-4 py-2 text-white transition-colors hover:bg-white hover:text-gray-800">
          <SignInButton forceRedirectUrl={"/drive"} />
        </div>
      </div>
    </>
  );
}
