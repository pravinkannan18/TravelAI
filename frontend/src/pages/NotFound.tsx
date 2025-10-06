import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, MessageCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="text-center space-y-6 p-8">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-gradient">404</h1>
          <h2 className="text-2xl font-semibold text-foreground">Page Not Found</h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Oops! The page you're looking for seems to have vanished into thin air. 
            Let TripGenie guide you back home!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            onClick={() => window.location.href = '/'}
            className="flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Button>
          <Button 
            size="lg"
            variant="outline"
            onClick={() => window.location.href = '/chat'}
            className="flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Try AI Chat
          </Button>
        </div>

        {location.pathname === '/demo-chat' && (
          <div className="mt-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
            <p className="text-sm text-primary">
              Looking for the AI chat? It's now available at <strong>/chat</strong>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotFound;
