# Next.js Quiz App

A one-page Next.js application for quizzes. Made in React Typescript, features client-side components, API routes within the Next.js client, and utilizes Shadcn/UI, Tailwind CSS, and Radix UI for styling and components. It also employs Axios for API calls and Sonner for displaying toasts.

## Introduction

This project is a one-page application designed for taking quizzes. Users can choose a username, access a list of quizzes, and complete quizzes, with each questions containing 2 to 4 answers.

## Features

- User authentication with username selection.
- Quizzes list.
- Dynamic quiz completion interface.

## Technologies Used

- [Next.js](https://nextjs.org/) - Framework for React
- [Shadcn/UI](https://github.com/shadcn/ui) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Radix UI](https://radix-ui.com/) - Collection of React components
- [Axios](https://axios-http.com/) - HTTP client for browser and Node.js
- [Sonner](https://github.com/example/sonner) - Toast notifications

## Setup

#### 1. Clone the repository.
#### 2. Install dependencies:

   ```npm install``` or ```yarn install```

#### 3. Start the development server:

   ```npm run dev``` or ```yarn dev```

#### 4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

- Choose a username.
- Access the quizzes list.
- Complete a quiz (from 2 to 4 answers per questions).

## Folder Structure

```
quiz/
├── app/
│   ├── api/
│   │   └── quiz/
│   │       └── route.ts
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   ├── pages/
│   ├── providers/
│   └── ...
├── lib/
│   ├── quiz.ts
│   ├── answer.ts
│   └── ...
└── ...
```


## Deployment

Website deployed by [Vercel](https://vercel.com/).

## License

This project is licensed under the [MIT License](LICENSE).
