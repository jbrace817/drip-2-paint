"use client"; // src/app/(cms)/admin/page.tsx

export default function Admin() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="/admin/config.yml" type="text/yaml" rel="cms-config-url" />
        <title>Content Manager</title>
        <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
        <script is:inline src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <script is:inline>netlifyIdentity.on('logout', () => location.reload());</script>
        <script>
        if (window.netlifyIdentity) {
          window.netlifyIdentity.on("init", (user) => {
            if (!user) {
              window.netlifyIdentity.on("login", () => {
                document.location.href = "/admin/";
              });
            }
          });
        }
        </script>
        `,
      }}
    />
  );
}
