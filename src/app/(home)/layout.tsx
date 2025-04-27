export default function HomePage(props: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-700 via-gray-600 to-gray-500 p-4 text-white">
      <main className="text-center">{props.children}</main>
      <footer className="mt-16 text-sm text-gray-400">
        © {new Date().getFullYear()} Envoy Drive. All rights reserved.
      </footer>
    </div>
  );
}
