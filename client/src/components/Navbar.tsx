import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/White_LumixCode_logo-removebg-preview.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <div className="flex items-center">
            <img src={logoImage} alt="LumixCode" className="h-16.5 w-36 object-contain" />
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/#features" className="text-sm font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md">
              Features
            </Link>
            <Link href="/#integrations" className="text-sm font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md">
              Integrations
            </Link>
            <Link href="/#pricing" className="text-sm font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md">
              Pricing
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <SignedOut>
              <Link href="/sign-in">
                <Button variant="ghost" size="sm" data-testid="button-signin">
                  Sign In
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button size="sm" className="animate-glow" data-testid="button-start-free">
                  Start for free
                </Button>
              </Link>
            </SignedOut>
            <SignedIn>
              <UserButton 
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "w-9 h-9"
                  }
                }}
              />
            </SignedIn>
          </div>

          <button
            className="md:hidden p-2 hover-elevate active-elevate-2 rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/#features"
              className="block px-3 py-2 rounded-md hover-elevate active-elevate-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/#integrations"
              className="block px-3 py-2 rounded-md hover-elevate active-elevate-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Integrations
            </Link>
            <Link
              href="/#pricing"
              className="block px-3 py-2 rounded-md hover-elevate active-elevate-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <div className="pt-3 space-y-2 border-t">
              <SignedOut>
                <Link href="/sign-in" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full" data-testid="button-signin-mobile">
                    Sign In
                  </Button>
                </Link>
                <Link href="/sign-up" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full" data-testid="button-start-free-mobile">
                    Start for free
                  </Button>
                </Link>
              </SignedOut>
              <SignedIn>
                <div className="flex items-center justify-center py-2">
                  <UserButton 
                    afterSignOutUrl="/"
                    appearance={{
                      elements: {
                        avatarBox: "w-10 h-10"
                      }
                    }}
                  />
                </div>
              </SignedIn>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
