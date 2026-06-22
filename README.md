# میلاد قاسمی — آموزش زبان آلمانی

پروژه Next.js برای سایت آموزش زبان آلمانی میلاد قاسمی.

## تکنولوژی‌ها

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**

## ساختار پروژه

```
src/
├── app/
│   ├── layout.tsx           # Layout اصلی
│   ├── page.tsx             # صفحه اصلی
│   ├── globals.css          # استایل‌های global
│   ├── not-found.tsx        # صفحه 404
│   └── courses/
│       └── [level]/
│           ├── page.tsx     # صفحه دوره
│           └── lessons/
│               └── [lessonId]/
│                   └── page.tsx  # صفحه درس
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   └── ScrollToTop.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── CoursesSection.tsx
│   │   └── BlogSection.tsx
│   ├── course/
│   │   └── CourseCard.tsx
│   └── lesson/
│       ├── LessonClient.tsx
│       ├── YouTubePlayer.tsx
│       ├── PhraseList.tsx
│       ├── GrammarSection.tsx
│       ├── DialogSection.tsx
│       ├── VocabSection.tsx
│       ├── ExerciseSection.tsx
│       └── CommentsSection.tsx
├── data/
│   ├── courses.ts           # داده دوره‌ها
│   └── blog.ts              # داده بلاگ
└── types/
    └── index.ts             # TypeScript types
```

## نصب و راه‌اندازی

```bash
cd miladzaban-next
npm install
npm run dev
```

سایت روی `http://localhost:3000` اجرا میشه.

## صفحات

| صفحه | URL |
|---|---|
| خانه | `/` |
| دوره A1 | `/courses/a1` |
| درس ۱ A1 | `/courses/a1/lessons/1` |
| دوره B1 | `/courses/b1` |

## اضافه کردن درس جدید

در فایل `src/data/courses.ts`، داخل آرایه `lessons` دوره مورد نظر، درس جدید اضافه کن.
