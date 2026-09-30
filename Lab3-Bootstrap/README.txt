LAB 3 — IMPLEMENT LAB 2 TASKS USING BOOTSTRAP

HOW TO RUN
1. Extract the entire Lab3-Bootstrap.zip file.
2. Open the Lab3-Bootstrap folder.
3. Double-click index.html, then select any task.
You can also open Q1-timetable.html, Q2-facebook-homepage.html or Q3-portfolio.html directly.
No installation, internet connection or server is required. Keep assets beside the HTML files.
To edit: open the folder in VS Code, edit an HTML/CSS file, save and refresh your browser.

TASK 01: TIMETABLE
Bootstrap: container-xxl, card, badge, table, table-bordered, table-responsive,
text-center, align-middle, spacing utilities, responsive flex utilities.
Retains course names, teachers, rooms and merged laboratory slots from Lab 2.
Corrects the missing empty 04:00–05:00 cell on Wednesday and Thursday.
On narrow screens the table scrolls horizontally without crushing the text.

TASK 02: FACEBOOK-STYLE HOMEPAGE
Bootstrap: navbar, nav/nav-pills, responsive row/column grid, cards, buttons,
form controls, modal, collapse, offcanvas mobile menu and toast.
Retains the original names, stories, gradients, posts, shortcuts, ads and contacts.
Corrects the compose prompt from Rayyan to Insha to match the displayed profile.
Custom CSS provides the original colours, avatars and gradient artwork.

DEMO INTERACTIONS
Click the compose field to open a Bootstrap modal and add a text post.
Like toggles the reaction count; Comment opens a Bootstrap collapse input.
Search filters posts on screens where the search field is displayed.
The mobile menu uses Bootstrap offcanvas. Navigation preview links and Share
show a demo notification. Comment text is not submitted. Other decorative
story/media elements recreate the layout only. No Facebook connection,
login, backend or permanent storage is implemented or required for this UI task.

FILES
index.html                    Task launcher
Q1-timetable.html             Converted task 1
Q2-facebook-homepage.html     Converted task 2
assets/timetable.css          Timetable theme
assets/facebook.css           Homepage theme
assets/facebook.js            Local demonstration interactions
assets/index.css              Launcher theme
assets/vendor/                Original Bootstrap 5.3.3 CSS and JS

BOOTSTRAP SOURCE
https://getbootstrap.com/
https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css
https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js
Bootstrap is MIT licensed; see assets/vendor/LICENSE.txt.

These are the five Lab 2 tasks supplied so far for this conversion.

TASK 03: PERSONAL PORTFOLIO
Open Q3-portfolio.html. The original two-column layout now uses Bootstrap's
row, col-12, col-md-4 and col-md-8 classes. Columns stack below 768px.
Bootstrap also supplies the navigation, cards, badges, buttons, image
responsiveness, spacing utilities and collapsible project details.
The navy/ivory/gold theme is in assets/portfolio.css.
The original photo is included unchanged at assets/images/profile.jpeg.
All eleven projects, both experience entries (including KANDZ Communications),
contact links, skills, education and campus activities are preserved.
Click Project details to expand each description using Bootstrap collapse.
External GitHub, LinkedIn and documentation links need internet access.

TASK 04: ORBIT CUSTOM UI
Open Q4-orbit-focus.html or choose Task 04 from index.html.
Bootstrap provides the container, navbar, responsive row/columns, cards,
button group, buttons, list group, checkbox controls, input group, badges
and progress bar. At widths below 992px the dashboard stacks into one column.
Custom CSS retains the timer ring, orange accent, dark/light colours and motion.

Demonstration steps:
1. Choose Focus (25m), Deep work (50m) or Break (5m).
2. Start, pause, resume and reset the timer.
3. Complete intentions to update the count and Bootstrap progress bar.
4. Add an intention using the form or Enter.
5. Toggle dark/light mode and resize the browser.
6. Complete a timer session to increase the session counter.

Files: Q4-orbit-focus.html, assets/orbit.css, assets/orbit.js.
The date follows your device's local date. Theme preference is saved where
local storage is available. Tasks, the timer and completed sessions reset
on reload. No backend, API key or internet is required.

Short lab explanation:
"I converted my Orbit custom UI to Bootstrap. Its responsive grid arranges
the dashboard cards, while Bootstrap buttons, form controls and progress
components provide the interface. Custom CSS preserves the original visual
theme. JavaScript handles the timer, checklist and light/dark mode switch."

TASK 05: IEEE-STYLE CONFERENCE PAPER
Open Q5-ieee-paper.html or choose Task 05 from index.html.
Bootstrap provides the container, card, author row/columns, table, alert,
buttons, responsive utilities and print visibility. The author grid displays
three authors per row on larger screens and two per row on small phones.
Custom CSS retains Times New Roman, the full-width title, continuous
two-column paper text and US Letter print layout. CSS columns are retained
because paper text must flow from the left column into the right column.

All six author placeholders and all existing abstract, keywords, sections,
figure, equation, table and reference placeholders are preserved.
Edit Q5-ieee-paper.html to replace the placeholder text. Change print styling
and typography in assets/ieee-paper.css.

PRINT / PDF
Use the Print / Save as PDF button, Ctrl+P (Windows), or Cmd+P (Mac).
Choose Letter, portrait orientation and 100% scale. Disable browser headers
and footers and leave the stylesheet's page margins in effect. The toolbar
is hidden in print. Printing restores three authors per row and two body
columns regardless of screen width. Preview all pages before saving; browser
rendering and the amount of edited content can change page breaks.

This is an IEEE-style classroom layout, not an official submission template.
The references are intentionally incomplete examples. For an actual paper,
replace them with verified references and follow the conference's template.
