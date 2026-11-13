# Justus Bamert — GitHub Pages website

A simple, framework-free, single-page version of https://www.justusbamert.com/. The home biography, two working papers, four work-in-progress projects, and their external research links were included in the original version. Teaching and Policy sections are appended after Work in Progress, based on the author’s October 2026 CV; the newly provided Google Sites `/teaching-and-policy` URL was not directly retrievable, so those additions should not be treated as a line-by-line transcription of that page. The sticky navigation uses **Home | Research | Teaching | Policy**: Research jumps to `#working-papers` and remains highlighted across Working Papers and Work in Progress. There is also a `research/` redirect to preserve the previous research page's relative route.

## Publish it as your personal GitHub Pages site

1. At [GitHub's new repository page](https://github.com/new), create a **public** repository called **`justusbamert.github.io`** under the `justusbamert` account. (Do not initialize it with a README if you are using the command-line method below.)
2. Upload the **contents** of this folder to the root of the repository using *Add file → Upload files*, or use the Git command-line method below. Commit the files to the `main` branch.
3. In **Settings → Pages**, choose **Deploy from a branch** and select **main** and **/(root)**. Save.
4. Once GitHub finishes deploying, the site will appear at **https://justusbamert.github.io/**. Section URLs end with `#working-papers`, `#work-in-progress`, `#teaching`, and `#policy`.
5. The current Google Sites domain remains unchanged until you deliberately move your DNS/custom domain. You do not need to do that to test this new site.

### Command-line alternative (once the empty repository exists)

```bash
git init
git add .
git commit -m "Add academic website with section navigation"
git branch -M main
git remote add origin https://github.com/justusbamert/justusbamert.github.io.git
git push -u origin main
```

## Teaching and policy content

The teaching entries and policy reports reproduce titles, roles, years, and organizations documented in the provided CV. The first teaching course links to its ETH Zurich course catalog listing, and Edumap links to its verified project homepage. The referenced Google Sites Teaching and Policy page could not be fetched directly, so compare these sections with that page if exact wording or additional links matter.

## Photo and research PDFs

- The `assets/bamert_cv.pdf` file is the CV supplied with this request, served from GitHub Pages.
- Paper and slide links preserve the Dropbox destinations on the current site. They do not need copying into the repository.
- The headshot currently loads from the **original website's Google Sites image URL**, so that it uses the same photograph. If this image ever stops loading because Google changes the URL or blocks embedding, save the original portrait as `assets/profile.jpg` and change the `img src` in `index.html` to `assets/profile.jpg`. An unobtrusive fallback is shown when the remote photo cannot be fetched.
- The overall appearance closely follows the live site's minimal white academic style. Google Sites itself does not expose an exportable pixel-identical HTML/CSS layout, so minor spacing and typography differences may remain.

## Edit content

All text and links are editable directly in `index.html`. Colors, widths, and typography are in `style.css`. The small navigation-highlighting behavior is in `script.js`. No Node.js, build process, or external JavaScript dependencies are needed.

## Local preview

Open `index.html` in a browser, or run `python -m http.server 8000` from this directory and visit `http://localhost:8000`.
