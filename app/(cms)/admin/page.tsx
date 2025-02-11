"use client";
import { useEffect } from "react";
import Head from "next/head";

// ✅ Define the Netlify Identity User type
interface NetlifyUser {
  id: string;
  email: string;
}

// ✅ Extend the `window` object to include `netlifyIdentity`
declare global {
  interface Window {
    netlifyIdentity?: {
      open: () => void;
      logout: () => void;
      on: (event: string, callback: (user: NetlifyUser | null) => void) => void;
    };
  }
}

const AdminPage: React.FC = () => {
  useEffect(() => {
    // ✅ Ensure Netlify Identity script is loaded before using it
    const identityScript = document.createElement("script");
    identityScript.src =
      "https://identity.netlify.com/v1/netlify-identity-widget.js";
    identityScript.async = true;
    document.body.appendChild(identityScript);

    identityScript.onload = () => {
      if (typeof window !== "undefined" && window.netlifyIdentity) {
        // ✅ Use optional chaining (`?.`) to avoid "possibly undefined" error
        window.netlifyIdentity?.on("init", (user: NetlifyUser | null) => {
          if (!user) {
            window.netlifyIdentity?.on("login", () => {
              document.location.href = "/admin/";
            });
          }
        });

        window.netlifyIdentity?.on("logout", () => location.reload());
      }
    };
  }, []);

  // ✅ Function to open Netlify Identity Widget safely
  const handleLogin = () => {
    if (typeof window !== "undefined" && window.netlifyIdentity) {
      window.netlifyIdentity.open();
    }
  };

  return (
    <>
      <Head>
        <title>Admin Panel</title>
      </Head>
      <main className="container mx-auto py-32">
        <div className="text-center">
          <button
            onClick={handleLogin}
            className="rounded bg-blue-500 px-4 py-2 text-white"
          >
            Login with Netlify Identity
          </button>
        </div>
      </main>
    </>
  );
};

export default AdminPage;
