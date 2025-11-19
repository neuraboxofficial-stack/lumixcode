import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5">
      <div className="w-full max-w-md p-8">
        <SignIn 
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "shadow-2xl"
            }
          }}
          routing="path"
          path="/sign-in"
          signUpUrl="/sign-up"
          forceRedirectUrl="/founders-forge"
        />
      </div>
    </div>
  );
}
