# CineScout

INFR3120 – Web and Scripting Programming, Project Part 1 (First Release)

CineScout is a movie and series discovery site. Users can add titles to a shared catalogue and browse them by genre, type, streaming platform and rating.

## Live Site
https://cinescout-4ps6.onrender.com/

## GitHub Repository
https://github.com/mahdeyhussain/INFR3120-FALL-26-PROJECT

## Built With
- Node.js + Express (generated with `express-generator --view=ejs`)
- EJS templating with partials
- MongoDB Atlas + Mongoose
- Bootstrap 5 + Font Awesome (CDN)
- Render (cloud hosting)

## How to Run Locally
1. Clone the repo and run `npm install`
2. Create a `.env` file in the root containing: `MONGO_URI=your-mongodb-connection-string`
3. Run `npm start` and open http://localhost:3000

Note: the real MongoDB connection string is never committed to GitHub. It is stored in a local `.env` file (ignored by `.gitignore`) and as an environment variable on Render.

## Project Structure
- `bin/www` – server startup (uses process.env.PORT for Render)
- `app.js` – Express setup, MongoDB connection, routes
- `models/title.js` – Mongoose schema for movies/series
- `routes/index.js` – home page route and Add Movie routes
- `views/index.ejs` – landing page (hero button + titles table)
- `views/addMovie.ejs` – Add Movie form
- `views/partials/header.ejs` – head section, Bootstrap/Font Awesome, navbar with logo
- `views/partials/footer.ejs` – footer and Bootstrap JS
- `views/partials/titleTable.ejs` – table of all titles
- `public/assets/logo.jpg` – original CineScout team logo
- `public/stylesheets/style.css` – custom styles
- `INFR3120_Project_Part1.docx` – project description and group contributions

---

## Member Contributions and Code Documentation

### Mahdey Hussain – Setup, Database, Data Display and Deployment

**Project setup**
- Created the public GitHub repository and added group members as collaborators
- Generated the project with `express-generator --view=ejs`
- Added `.gitignore` so `node_modules` and `.env` are never uploaded

**Database connection (`app.js`)**
- `require('dotenv').config()` loads `MONGO_URI` from `.env`, keeping the MongoDB password off GitHub
- `mongoose.connect(process.env.MONGO_URI)` connects to MongoDB Atlas and logs "MongoDB connected"

**Title model (`models/title.js`)**
- Mongoose schema with fields: `title`, `type` (Movie/Series), `genre`, `platform` (where to watch), `year`, `rating` (out of 10), `description`
- Exported as the `Title` model, stored in the `titles` collection

**Home route (`routes/index.js` – `GET /`)**
- Uses `await Title.find({})` to load every title from MongoDB
- Passes them to `index.ejs` with `res.render('index', { title: 'CineScout', titles })`
- Errors are passed to Express's error handler with `next(err)`

**Titles table (`views/partials/titleTable.ejs`)**
- Shows "No movies yet" if the list is empty
- Otherwise loops through `titles` with `forEach` and creates one Bootstrap table row per title
- `<% %>` runs JavaScript (the `if` and loop); `<%= %>` safely prints each value

**Deployment**
- Deployed on Render as a Node web service (build: `npm install`, start: `npm start`)
- `MONGO_URI` set as a Render environment variable
- Render redeploys automatically on every push to `main`
- Live at https://cinescout-4ps6.onrender.com/

**Documentation and integration**
- Project description and contribution table (Word document) and this README
- Merged pull requests and resolved merge conflicts between branches

---

### Omair Ahmad – Landing Page, Layout and Logo

**Logo (`public/assets/logo.jpg`)**
- Designed the original CineScout team logo (magnifying glass with a film reel)
- Used in both the navbar and the footer

**Header partial (`views/partials/header.ejs`)**
- Contains the page head: page title, Bootstrap 5 and Font Awesome via CDN, and `style.css`
- Bootstrap dark navbar with the CineScout logo and site name, linking back to the home page
- Shared by every page so the navigation looks the same across the site

**Footer partial (`views/partials/footer.ejs`)**
- Dark footer with the logo and copyright notice
- The year is generated automatically with `new Date().getFullYear()`
- Loads Bootstrap's JavaScript bundle

**Landing page layout (`views/index.ejs`)**
- Builds the home page from partials: header, then main content, then footer
- Uses Bootstrap flex classes (`d-flex flex-column min-vh-100` and `mt-auto`) so the footer always stays at the bottom of the page

**Styling (`public/stylesheets/style.css`)**
- Adjusted the default page padding and fonts to work with the Bootstrap layout

**Packages**
- Added Bootstrap, Font Awesome and nodemon to the project dependencies

---

### Ahmad Ubaid – Add Movie Feature

**Hero button (`views/index.ejs`)**
- "Add Movie" button on the landing page that links to `/movies/add`
- Styled with Bootstrap button classes (`btn btn-primary`)

**Add Movie routes (`routes/index.js`)**
- `GET /movies/add` renders the Add Movie form page
- `POST /movies/add` reads the submitted form data from `req.body`, creates a new `Title` document and saves it to MongoDB with `await`
- After saving, redirects back to the home page so the new movie appears in the titles table right away

**Add Movie form (`views/addMovie.ejs`)**
- Bootstrap form for entering a new movie
- Fields: Movie Title, Genre, Where to Watch, Release Year and Rating (1-10), matching the model fields `title`, `genre`, `platform`, `year` and `rating`
- Includes a Cancel button that returns to the home page

**Testing**
- Tested adding a movie through the form and confirmed it was saved to MongoDB and displayed on the home page

**Version control**
- Built the feature on a separate branch (`ahmad-add-movie`) and submitted it as a pull request

---

## Sources
- Project structure generated with express-generator
- Mongoose schema pattern based on INFR3120 lecture slides (MongoDB)
- Bootstrap 5: https://getbootstrap.com (jsDelivr CDN)
- Font Awesome: https://fontawesome.com (cdnjs CDN)
- - AI assistance (Claude by Anthropic) was used for setup guidance, troubleshooting (MongoDB connection, merge conflicts, deployment) and example code, which was reviewed and adapted by the team