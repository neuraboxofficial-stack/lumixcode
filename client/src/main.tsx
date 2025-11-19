import { createRoot } from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import App from "./App";
import "./index.css";

// Import your Clerk Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// Render app with or without Clerk provider
// If Clerk key is missing, the app will still work but authentication features will be disabled
if (PUBLISHABLE_KEY) {
  createRoot(document.getElementById("root")!).render(
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <App />
    </ClerkProvider>
  );
} else {
  // Run without authentication - landing page will still work
  console.warn("Clerk authentication is not configured. Add VITE_CLERK_PUBLISHABLE_KEY to enable sign-in functionality.");
  createRoot(document.getElementById("root")!).render(
    <App />
  );
}
