import { Link, useLocation } from "wouter";
import { Instagram, Linkedin } from "lucide-react";

export default function Header() {
  const [location] = useLocation();
  
  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl font-semibold text-primary cursor-pointer hover:opacity-80 transition-opacity">
              Jiwoo Park
            </h1>
          </Link>
          
          <nav className="flex items-center space-x-8">
            <Link href="/work">
              <button className={`nav-link font-medium transition-all duration-200 pb-1 ${
                isActive("/work") || location === "/" 
                  ? "text-primary border-b-2 border-primary" 
                  : "text-text-primary hover:text-accent"
              }`}>
                Work
              </button>
            </Link>
            
            <Link href="/blog">
              <button className={`nav-link font-medium transition-all duration-200 pb-1 ${
                isActive("/blog") 
                  ? "text-primary border-b-2 border-primary" 
                  : "text-text-primary hover:text-accent"
              }`}>
                Blog
              </button>
            </Link>
            
            <Link href="/about">
              <button className={`nav-link font-medium transition-all duration-200 pb-1 ${
                isActive("/about") 
                  ? "text-primary border-b-2 border-primary" 
                  : "text-text-primary hover:text-accent"
              }`}>
                About me
              </button>
            </Link>
            
            <div className="flex items-center space-x-4 ml-6">
              <a 
                href="#" 
                className="text-text-secondary hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-text-secondary hover:text-accent transition-colors"
                aria-label="Behance"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
