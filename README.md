# vishalchand.com

Personal portfolio website — terminal-themed, single-page React app deployed on GitHub Pages.

## Branches

- `source-code` — React source code
- `master` — production build served by GitHub Pages

## Prerequisites

- Node.js (v16 recommended for compatibility)
- Yarn or npm

## Development

```bash
git checkout source-code
yarn install

# Required for react-scripts 3.x on newer Node versions
NODE_OPTIONS=--openssl-legacy-provider yarn start
```

Opens at [http://localhost:3000](http://localhost:3000).

## Build & Deploy

```bash
# Build production bundle
NODE_OPTIONS=--openssl-legacy-provider yarn build

# Switch to master, copy build output, push
git checkout master
cp -r build/* .
git add -A
git commit -m "Deploy"
git push origin master

# Switch back
git checkout source-code
```

## Project Structure

```
src/
  components/
    Portfolio.js    — Main single-page layout (Hero, Skills, Experience, Projects, Footer)
    Navigation.js   — Sticky nav with scroll-spy + React Router
    Blog.js         — Blog placeholder (Coming Soon)
  data/
    experience.js   — Work history, education, skills
    projects.js     — Project entries
  index.css         — All styles (terminal theme, dark GitHub colors)
  App.js            — Routes + AlgoFlow banner
public/
  assets/cv.pdf     — Resume
  CNAME             — Custom domain (vishalchand.com)
```

## License

MIT
