import Image from 'next/image';
import ReactImage from './images/React.jpg'
import {Inter} from 'next/font/google';
const inter = Inter({
  subsets:["latin"]
})
const HomePage = () => {
  return (
    <div className="mx-auto w-5xl border-2 border-white p-4">
      <h1 className="text-3xl font-semibold text-center mt-5 mb-5 ">
        Welcome to NextJS Course
      </h1>
      <div className='flex gap-4'>
        <Image src={'/nextJS.jpg'} alt="NextJS" width={200} height={150} className='shadow-sm shadow-cyan-50'/>
        <Image src={ReactImage} alt="ReactJS" width={200} height={150} className='shadow-sm shadow-cyan-50'/>
      </div>
      <h3 className={# Next.js `Font` — Complete Notes & Cheat Sheet

In Next.js, fonts are handled mainly through **`next/font`**. It is not a `<Font />` component like `<Image />`; instead, you import a font and apply the generated class/style to your HTML elements.

Next.js recommends `next/font` because it optimizes fonts and self-hosts the font files as part of the build, avoiding an extra runtime request to a font provider. ([Next.js][1])

---

# 1. Why use `next/font`?

Normally, you might use Google Fonts like:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Inter"
  rel="stylesheet"
/>
```

This requires the browser to make an additional request for the font.

With Next.js:

```jsx
import { Inter } from "next/font/google";
```

Next.js handles the font for you and optimizes it during the build. ([Next.js][1])

### Main benefits

* Font optimization
* Self-hosting
* Better performance
* Reduced layout shift
* No need to manually add Google Fonts `<link>` tags
* Easy integration with App Router
* Supports Google and local fonts

---

# 2. Google Fonts

The most common usage is:

```jsx
import { Inter } from "next/font/google";
```

Then create the font:

```jsx
const inter = Inter({
  subsets: ["latin"],
});
```

Then use it:

```jsx
<body className={inter.className}>
  {children}
</body>
```

---

# 3. Complete Example

Your `app/layout.js`:

```jsx
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
```

Now the entire application uses Inter.

Next.js's official learning material uses essentially this approach in the root layout. ([Next.js][1])

---

# 4. Understanding `subsets`

Example:

```jsx
const inter = Inter({
  subsets: ["latin"],
});
```

`subsets` tells Next.js which character sets your application needs.

For example:

```jsx
subsets: ["latin"]
```

means you need Latin characters.

The exact available subsets depend on the font.

---

# 5. `className`

When you create:

```jsx
const inter = Inter({
  subsets: ["latin"],
});
```

Next.js gives you a generated class through:

```jsx
inter.className
```

Use it:

```jsx
<body className={inter.className}>
```

You can also use it on a specific element:

```jsx
<h1 className={inter.className}>
  Welcome
</h1>
```

---

# 6. Font on the Whole Application

This is the most common approach.

```jsx
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
```

Think:

```text
Root Layout
     ↓
   <body>
     ↓
  Inter font
     ↓
all pages
```

Because the root layout wraps the application's pages, the font can apply throughout the app. ([Next.js][2])

---

# 7. Font for Only One Element

You don't have to apply the font globally.

```jsx
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export default function Page() {
  return (
    <div>
      <h1 className={inter.className}>
        Hello Next.js
      </h1>
    </div>
  );
}
```

Only the `<h1>` uses that font.

---

# 8. Multiple Fonts

You can use more than one font.

For example:

```jsx
import { Inter, Roboto } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});
```

Then:

```jsx
<h1 className={inter.className}>
  Heading
</h1>

<p className={roboto.className}>
  Paragraph
</p>
```

This is useful when you want:

```text
Heading → Font A
Body    → Font B
```

The Next.js learning course demonstrates using a primary font and a secondary font for different UI elements. ([Next.js][1])

---

# 9. Font Weight

Some fonts allow you to specify weights.

Example:

```jsx
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});
```

Meaning:

```text
400 → normal
700 → bold
```

Then:

```jsx
<p className={roboto.className}>
  Normal text
</p>
```

You can still use CSS/Tailwind for styling where appropriate.

---

# 10. Font Style

Some fonts support styles such as:

```text
normal
italic
```

For example, depending on the font:

```jsx
const font = SomeFont({
  subsets: ["latin"],
  style: ["normal", "italic"],
});
```

The available options depend on the font.

---

# 11. Using Fonts with Tailwind

You can combine the generated font class with Tailwind classes.

```jsx
<h1 className={`${inter.className} text-4xl font-bold`}>
  Welcome
</h1>
```

Here:

```text
inter.className
      ↓
font family

text-4xl
      ↓
font size

font-bold
      ↓
font weight
```

---

# 12. Combining Multiple Classes

You can write:

```jsx
<h1 className={`${inter.className} text-3xl font-bold`}>
  Next.js Course
</h1>
```

Or:

```jsx
<body className={`${inter.className} antialiased`}>
  {children}
</body>
```

The official Next.js learning course uses this pattern with `inter.className` and Tailwind's `antialiased` class. ([Next.js][1])

---

# 13. `variable` Fonts

Next.js can also expose a font through a CSS variable.

Example:

```jsx
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
```

Then:

```jsx
<body className={inter.variable}>
  {children}
</body>
```

Now you have:

```css
--font-inter
```

available as a CSS variable.

This approach is especially useful when integrating fonts into a larger CSS/Tailwind design system.

---

# 14. Local Fonts

You aren't limited to Google Fonts.

You can load your own font files using:

```jsx
import localFont from "next/font/local";
```

Example structure:

```text
app/
├── fonts/
│   └── MyFont.woff2
├── layout.js
└── page.js
```

Then:

```jsx
import localFont from "next/font/local";

const myFont = localFont({
  src: "./fonts/MyFont.woff2",
});
```

Use it:

```jsx
<body className={myFont.className}>
  {children}
</body>
```

---

# 15. Multiple Local Font Files

You can specify multiple files and weights.

Conceptually:

```jsx
const myFont = localFont({
  src: [
    {
      path: "./fonts/MyFont-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/MyFont-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});
```

Then:

```jsx
<body className={myFont.className}>
  {children}
</body>
```

Now the browser can use the appropriate font file according to the requested weight.

---

# 16. Where Should I Put Fonts?

A clean structure is:

```text
app/
├── fonts/
│   ├── MyFont-Regular.woff2
│   └── MyFont-Bold.woff2
│
├── layout.js
├── page.js
└── globals.css
```

You **don't need to put fonts in `public/`** when you're using `next/font/local`.

---

# 17. `next/font/google` vs `next/font/local`

### Google font

```jsx
import { Inter } from "next/font/google";
```

Use when you want a supported Google font.

### Local font

```jsx
import localFont from "next/font/local";
```

Use when you have your own `.woff`, `.woff2`, etc.

---

# 18. Don't Do This

You generally don't need to manually add:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Inter"
  rel="stylesheet"
/>
```

when you're using `next/font`.

Instead:

```jsx
import { Inter } from "next/font/google";
```

Next.js handles the font optimization. ([Next.js][1])

---

# 19. Your Project Example

Based on your project:

```text
app/
├── (users)/
│   ├── blogs/
│   ├── contact/
│   ├── images/
│   ├── services/
│   ├── layout.js
│   └── page.js
│
├── dashboard/
├── globals.css
└── layout.js
```

Put the main font in:

```text
app/layout.js
```

Example:

```jsx
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
```

Now:

```text
app/layout.js
       ↓
     <body>
       ↓
     Inter
       ↓
 ┌─────┼─────────────┐
 ↓     ↓             ↓
users dashboard    other routes
```

---

# 20. Route-Specific Font

You can also apply a font inside your `(users)/layout.js`.

```jsx
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
});

export default function UsersLayout({ children }) {
  return (
    <section className={roboto.className}>
      {children}
    </section>
  );
}
```

Then the font applies to the routes inside that route group.

```text
(users)/
├── layout.js       ← Roboto
├── page.js
├── blogs/
├── contact/
└── services/
```

The route group `(users)` itself does not appear in the URL, but its layout can still wrap those routes.

---

# 21. Why Fonts Can Cause Layout Shift

Imagine the browser initially displays:

```text
System Font
```

Then your custom font loads:

```text
Custom Font
```

The character widths may change.

So:

```text
Before font loads
──────────────────
Hello World
──────────────────

After font loads
────────────────────
Hello World
────────────────────
```

Other elements can move.

This can contribute to **Cumulative Layout Shift (CLS)**.

Next.js's font optimization is designed to help avoid this type of layout problem. ([Next.js][1])

---

# 22. Font Mental Model

Remember:

```text
next/font
    │
    ├── Google font
    │      ↓
    │   next/font/google
    │
    └── Local font
           ↓
        next/font/local
```

Then:

```text
Font
 ↓
font configuration
 ↓
generated class / variable
 ↓
HTML element
 ↓
styled text
```

---

# ⭐ Font Cheat Sheet

### Google Font

```jsx
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});
```

### Apply globally

```jsx
<body className={inter.className}>
  {children}
</body>
```

### Apply to one element

```jsx
<h1 className={inter.className}>
  Hello
</h1>
```

### Font + Tailwind

```jsx
<h1 className={`${inter.className} text-4xl font-bold`}>
  Hello
</h1>
```

### Multiple fonts

```jsx
import { Inter, Roboto } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});
```

### Local font

```jsx
import localFont from "next/font/local";

const myFont = localFont({
  src: "./fonts/MyFont.woff2",
});
```

### CSS variable

```jsx
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
```

---

# 🧠 Interview Questions

### 1. What is `next/font`?

A Next.js font system for loading and optimizing Google and local fonts.

### 2. Why use `next/font`?

For optimized font loading, self-hosting, performance, and reduced layout-shift problems. ([Next.js][1])

### 3. How do you import a Google font?

```jsx
import { Inter } from "next/font/google";
```

### 4. How do you import a local font?

```jsx
import localFont from "next/font/local";
```

### 5. What is `font.className`?

It is the generated class that applies the configured font to an element.

### 6. Can you use multiple fonts?

Yes.

```jsx
const inter = Inter(...);
const roboto = Roboto(...);
```

### 7. Where should a global font usually be applied?

The root `app/layout.js`, usually on `<body>`.

---

# 🔥 Final Revision

```text
Google Font
    ↓
next/font/google

Local Font
    ↓
next/font/local

Create font
    ↓
const inter = Inter({
  subsets: ["latin"]
});

Apply font
    ↓
className={inter.className}

Global font
    ↓
<body className={inter.className}>

Specific element
    ↓
<h1 className={inter.className}>

Tailwind + Font
    ↓
`${inter.className} text-4xl font-bold`

Custom local font
    ↓
localFont({
  src: "./fonts/MyFont.woff2"
})
```

**Core idea:** `next/font` is to **fonts** what `next/image` is to **images**: Next.js provides a built-in optimized way to handle an important asset type. ([Next.js][1])

[1]: https://nextjs.org/learn/dashboard-app/optimizing-fonts-images?utm_source=chatgpt.com "App Router: Optimizing Fonts and Images | Next.js"
[2]: https://nextjs.org/learn/dashboard-app/creating-layouts-and-pages?utm_source=chatgpt.com "App Router: Creating Layouts and Pages | Next.js"
}>want to Learn NextJS</h3>
    </div>
  );
};
export default HomePage;
