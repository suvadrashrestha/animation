import { Outfit } from "next/font/google";
import "./globals.css";
const outfit = Outfit({ subsets: ["latin"] });

export default function GlobalNotFound() {
  return (
    <html lang="en" className={outfit.className}>
      <body className="bg-gray-100 flex items-center justify-center min-h-screen p-4">
        <div className="text-center max-w-md">
          <h1 className="text-[80px] sm:text-[120px] md:text-[180px] font-extrabold text-black mb-4">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1DA077] text-white font-medium rounded-lg hover:bg-[#159A63] transition"
          >
            Go Back Home
          </a>
        </div>
      </body>
    </html>
  );
}
