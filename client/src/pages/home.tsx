import { useEffect } from "react";
import { useLocation } from "wouter";

export default function Home() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    // Redirect to work page as the main portfolio view
    setLocation("/work");
  }, [setLocation]);

  return null;
}
