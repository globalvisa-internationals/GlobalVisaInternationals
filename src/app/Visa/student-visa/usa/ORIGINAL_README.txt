USA STUDENT VISA PAGE REDESIGN

Files
- page.jsx: redesigned Next.js App Router page component.
- USAStudentVisa.module.css: responsive CSS module adapted from the earlier student visa redesign.

Integration
1. Copy page.jsx and USAStudentVisa.module.css into the USA student visa route folder (for example, app/visa/student-visa/usa/).
2. Confirm the production URL. The canonical URL is https://www.globalvisainternationals.com/visa/student-visa/usa; update it if your actual route differs.
3. Confirm the existing aliases resolve: @/Components/VisaForm, @/Components/ReviewSchema and @/Components/ReviewCarousel.
4. Confirm /student-visa/USA-student-Visa-ASSISTANCE.webp exists under public/student-visa/. The image is set to height:auto and object-fit:contain to prevent cropping.
5. Test desktop, tablet and mobile layouts; run your project build and validate the page metadata and JSON-LD.
6. Review the FAQ and costs before publication. US visa fees and procedures can change; the page links to official State Department and ICE sources.

Content changes
- Removes duplicated paragraphs, inconsistent third-party branding, invalid HTML structure and stale 2024 cost table.
- Adds responsive sections for requirements, documents, process, costs, study areas, university examples, visa categories and FAQs.
- Keeps the existing VisaForm, ReviewSchema and ReviewCarousel integrations.
- Does not promise visa approval or employment outcomes.

This is a source-code redesign only. It has not been deployed or tested in your production application.
