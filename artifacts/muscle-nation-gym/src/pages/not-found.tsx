import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-9xl font-display text-primary">404</h1>
      <p className="mt-4 text-2xl font-condensed uppercase tracking-widest">Page not found</p>
      <Link href="/" className="mt-8">
        <button className="bg-primary text-primary-foreground h-12 px-8 font-condensed uppercase tracking-widest text-lg btn-glow hover:bg-primary/90 transition-colors">
          Return to Base
        </button>
      </Link>
    </div>
  );
}