# Personal Portfolio — React, Decap CMS Turbo, and Vercel

A responsive portfolio built with React + Vite. Content lives in `content/siteData.json`; the editor is Decap CMS at `/admin/`, using the hosted Decap Turbo GitHub backend. There is no custom admin dashboard and no application database.

## 1. Run locally

Requirements: Node.js 20 or newer and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. The public site can be previewed locally, but Turbo login will work only after you add that exact local origin (including port, e.g. `http://localhost:5173`) to the site's Admin interface URLs in Turbo.

## 2. Connect Decap Turbo

1. Sign in to Decap Turbo at https://decapcms.org/turbo/ .
2. Connect GitHub by installing the Decap Turbo GitHub App for the account that owns your repository.
3. Create a Turbo site and select the exact repository and production branch.
4. Set the config path to `public/admin/config.yml`.
5. Copy the Site ID from the site's Overview page.
6. Replace `REPLACE_WITH_TURBO_SITE_ID` in `public/admin/config.yml`.
7. Add the deployed Vercel origin to the site's **Admin interface URLs** (for example `https://your-project.vercel.app`). The origin must match the URL you use to open `/admin/`. Add your custom domain too if you use it.
8. Invite any additional editors in Turbo. Access is managed through Turbo memberships and roles.
9. Commit and push the changes, then visit `https://your-domain/admin/`.

The standard stable Decap CMS CDN bundle includes the Turbo backends. Do not use a beta bundle or an old pinned beta. See the official [Turbo connection guide](https://decapcms.org/docs/turbo-connecting-a-site/) and [Turbo troubleshooting guide](https://decapcms.org/docs/turbo-troubleshooting-faq/).

**Important:** In Turbo, the repository and branch configured on the site are authoritative. `repo` is intentionally not set in `config.yml`. Keep the Turbo site's config path aligned with the real path `public/admin/config.yml`.

## 3. Content editing

The CMS edits one structured file: `content/siteData.json`. This keeps all portfolio sections together and makes the front end straightforward to maintain. Use `/admin/` to update:
- Profile, headline, contact details, socials, profile image, and résumé
- About section and focus areas
- Experience and highlights
- Education
- Achievements
- Events and event images/links
- Gallery captions, categories, and images

Uploaded images are committed to `public/images/uploads/` and served from `/images/uploads/...`.

## 4. Deploy on Vercel

1. Push this project to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import that repository.
3. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.
4. Deploy. Each commit to the production branch triggers a new deployment.
5. Complete the Turbo setup above using the actual production origin.

The Vercel rewrite keeps the React app working for browser routes while leaving `/admin/` for Decap CMS. Test both the public site and `/admin/` after the first deployment.

## 5. Personalize before launch

The sample content is intentionally generic. Replace “Your Name”, sample experience, education, achievements, events, and contact information in `/admin/` or directly in `content/siteData.json`. Use your own photos and verify that each social URL and résumé link is correct.

## Troubleshooting

- **“origin not allowed” / popup closes:** Add the exact site origin to Turbo's Admin interface URLs, including `https://` and the correct host.
- **Site/repository mismatch:** Change the repository on the Turbo site itself; the backend ignores a local `repo` value by design.
- **Changes saved but site not updated:** A CMS save creates a Git commit; Vercel then needs to finish its deployment. Check the latest Vercel deployment and build logs.
- **Uploads fail:** Check that the GitHub App installation has access to the configured repository and that `public/images/uploads/` is writable through the CMS backend.

## Notes

- The `CMS ↗` link on the site is a convenience shortcut, not a security boundary. Turbo performs authentication and authorization for CMS content access.
- This project does not implement server-side password protection for the entire `/admin/` static page. The content operations are protected by Turbo login and site permissions. If you require the CMS shell itself to be inaccessible before login, add an appropriate Vercel access-control layer.
