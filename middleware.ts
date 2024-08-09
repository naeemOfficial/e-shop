import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  // Define the public routes accessible without authentication
  publicRoutes: ["/", "/sign-in", "/sign-up"],
});

export const config = {
  matcher: [
    // Match all routes except static files and API routes
    "/((?!_next/static|_next/image|favicon.ico).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
