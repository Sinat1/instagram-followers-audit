# 📊 Instagram Followers Audit

A web app that shows which accounts you follow **don't follow you back**.

Everything runs entirely in your browser — your Instagram data never leaves your
device, there's no server involved.

🔗 **Live demo:** https://sinat1.github.io/instagram-followers-audit/

## How it works

1. Export your Instagram data archive (via Meta Accounts Center) in JSON format.
2. Drag & drop the `connections` folder into the app or specifically choose it.
3. The app compares your followers and following lists right in the browser and
   shows you accounts that don't follow you back, with links to their profiles.

A step-by-step guide for exporting your data is built right into the app (a
15-step slider) — from opening Accounts Center to downloading the archive in
JSON format.

## Features

- 📁 **Drag & drop** folder upload (including nested directories) or file picker
- 🔍 Compares `following.json` and `followers_1.json`, supporting both old and
  new Instagram export formats (`title`, `string_list_data.value`, or parsing
  the username from `href`)
- 💾 Results are saved to `localStorage` so the list doesn't need to be
  recalculated on page reload
- 🔗 Direct links to the profiles of accounts that don't follow back
- 🧭 Remembers the last viewed account in the list (with auto-scroll to it)
- 🗑️ Button to clear results
- ⬆️ "Back to top" button for long lists
- ⌨️ Keyboard arrow navigation through the guide slides

## Tech stack

- [React](https://react.dev/) 18
- [Create React App](https://create-react-app.dev/) (react-scripts 5)
- [styled-components](https://styled-components.com/) 6 — component styling
- [keen-slider](https://keen-slider.io/) — step-by-step guide slider
- [jszip](https://stuk.github.io/jszip/) — zip archive handling
- ESLint + Prettier — linting and formatting

## Installation & running locally

```bash
git clone https://github.com/Sinat1/instagram-followers-audit.git
cd instagram-followers-audit
npm install
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

## Available scripts

| Command           | Description                                           |
| ----------------- | ----------------------------------------------------- |
| `npm start`       | Runs the app in development mode                      |
| `npm run build`   | Builds the production version into the `build` folder |
| `npm test`        | Runs tests                                            |
| `npm run lint:js` | Runs ESLint on the source code                        |

## How to get your Instagram data

1. Open [Accounts Center](https://accountscenter.instagram.com)
2. Log in to the account you want to check
3. Click "Your information and permissions"
4. Click "Download your information"
5. Choose "Download or transfer information"
6. Choose the account you want to use
7. Click "Some of your information"
8. Scroll down, select "Followers and Following", then click Next
9. Click "Download to Device"
10. Change the date range from "Last Year" to "All Time" and save
11. Change the format from HTML to JSON and save
12. Click "Create Files"
13. Instagram will email you when the download is ready
14. Once you receive the email, download the archive and unzip it
15. Upload the `connections` folder into the app

## Project structure

```
src/
├── components/
│   ├── App/                  # Root component, list comparison logic
│   ├── Header/                # Header
│   ├── Description/            # Project description
│   ├── StepGuide/                # Slider with the data export guide
│   ├── FileUpload/                 # Drag & drop / file picker
│   ├── UnfollowersList/              # List of accounts that don't follow back
│   ├── ToTopBtn/                       # "Back to top" button
│   └── Footer/                          # Footer
├── images/                    # Icons (SVG)
├── index.js
└── index.css
```

## Privacy

The app doesn't use a server and never sends your data anywhere outside your
browser — the comparison happens entirely on the client, and the results are
only saved to your browser's `localStorage`.
