
# Welcome to the Autofill frontend assignment!

Congratulations on coming so far! We are excited about you, and we hope you are too ;)
The assignment allows Autofill to evaluate your technical skills as a front-end developer.

To complete the assessment: 
- Create a branch using the name format [your-name]-brewery-assessment
- Complete the tasks listed below
- When you accomplish the assignment, inform Ilsa by [email](mailto:ilse@autofilltech.com). We will schedule a technical interview after the assignment.


## Notes

- This assessment will test your understanding of the front-end development process and problem-solving skills.
**Note**: this is not an English test; we are not assessing your grammar or fluency - but we will look at how well you communicate ideas about coding and development, as this is an important part of collaborative development.
- Add git comments; it will help us understand your thinking.
- To protect your privacy, we will delete the branch after a day or two after the interview.
- For the design, use your framework of choice (bootstrap, tailwinds, etc..)
- If something is not clear, feel free to ask questions
-  **Don't clone or fork the repo**

## Assignment

*User story*: The visitors of A-team Brewery DB are using the search table to filter and find the brewery they need.

**Acceptance Criteria**:
1. Implement the table design based on the mockup.
2. Update the table by typing in the search field.
3. Show no result message in case the Brewery is not found. 

**Technical Specification**:
1. Use the data from Brewery DB API to fill the table.
2. A link to [mockup](https://www.figma.com/file/zHsVw2RQbNGY9WhdkDp3Gc/A-frontend-assignment-design?node-id=0%3A1) 

**Nice to have**:
1. Clean code
2. React + TypeScript best practices
3. Relevant design patterns
4. Optional: Tests (unit, e2e)

## Getting Started
First, run the development server: 

```bash

npm install

npm run dev

```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. 
You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.
  

### Folder structure

```
│   .eslintrc.json
│   .gitignore
│   next-env.d.ts
│   next.config.js
│   package-lock.json
│   package.json
│   README.md
│   tsconfig.json
│   yarn.lock
│
├───.vscode
│       launch.json
│
├───lib
│   ├───http
│   │       BreweryDBService.ts
│   │       HTTPBaseService.ts
│   │
│   └───search
│           types.ts
│
├───pages
│   │   index.tsx
│   │   _app.tsx
│   │
│   └───api
│       │   hello.ts
│       │
│       └───search
│               index.ts
│               [searchTerm].ts
│
├───public
│       favicon.ico
│       vercel.svg
│
└───styles
        globals.css
        Home.module.css
```

**Note**: .vscode added for your convince so you can debug the nextjs project; you do not necessarily need to use vscode as an IDE.
