# 🚀 Trainee Tasks

## Overview

This project is a simple Next.js application that showcases three tasks. First two task is about ui development using figma and third task is about building user and post dashboard

---

## Tech Stack

- **Next.js (App Router)**
- **React**
- **Tailwind CSS**

---

## Project Structure

```
app/
 ├── page.tsx
 ├── journey/
 │    └── page.tsx
 ├── course/
 │    └── page.tsx
 ├── users/
 │    └── [id]/
 │      └── page.tsx
 │    └── page.tsx
 ├── global-not-found.tsx
 ├── loading.tsx
```

---

## Routing

Navigation is handled using Next.js `<Link />`:

```jsx
<Link href="/journey">Task 1</Link>
<Link href="/course">Task 2</Link>
<Link href="/users">Task 3</Link>
```

Each route must have a corresponding folder with a `page.tsx` file.

---

## Getting Started

```bash
npm install
npm run dev
```

Then open:

```
http://localhost:3000
```

---

## Author

Built as part of trainee practice tasks.
