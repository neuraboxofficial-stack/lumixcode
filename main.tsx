import { createRoot } from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import App from "./App";
import "./index.css";

// Import your Clerk Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// Graceful fallback when Clerk key is missing
if (!PUBLISHABLE_KEY) {
  createRoot(document.getElementById("root")!).render(
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Configuration Error</h1>
      <p>Missing Clerk Publishable Key. Please add VITE_CLERK_PUBLISHABLE_KEY to your environment variables.</p>
    </div>
  );
} else {
  createRoot(document.getElementById("root")!).render(
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <App />
    </ClerkProvider>
  );
}
