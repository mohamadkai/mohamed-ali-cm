import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mentor/Lab — Live Mentorship في Content & Digital Marketing" },
      { name: "description", content: "برنامج لايف عملي ينقلك من كاتب محتوى إلى Marketer استراتيجي. 14 سيشن، 4 مراحل، Portfolio جاهز. أول دفعة بـ 1999 جنيه فقط." },
      { name: "author", content: "Mentor/Lab" },
      { property: "og:title", content: "Mentor/Lab — Live Mentorship في Content & Digital Marketing" },
      { property: "og:description", content: "برنامج لايف عملي ينقلك من كاتب محتوى إلى Marketer استراتيجي. 14 سيشن، 4 مراحل، Portfolio جاهز. أول دفعة بـ 1999 جنيه فقط." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Mentor/Lab — Live Mentorship في Content & Digital Marketing" },
      { name: "twitter:description", content: "برنامج لايف عملي ينقلك من كاتب محتوى إلى Marketer استراتيجي. 14 سيشن، 4 مراحل، Portfolio جاهز. أول دفعة بـ 1999 جنيه فقط." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e1169625-0c38-44a3-9a86-c9c09a32e7ae/id-preview-02448d9b--2c72b0ac-37e0-47a3-9984-365e58c28680.lovable.app-1777376691955.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e1169625-0c38-44a3-9a86-c9c09a32e7ae/id-preview-02448d9b--2c72b0ac-37e0-47a3-9984-365e58c28680.lovable.app-1777376691955.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
