# Tailwind Css

---

## Install Tailwind In HTML

- <https://tailwindcss.com/docs/installation>
- Tailwind CLI
- Config `tailwind.config.js` file & Update `content: ["./index.html"],`
- Run :- `$ npx tailwindcss -i ./assets/css/style.css -o ./assets/css/output.css --watch`

## Add Defult Style

- `tailwind.config.js`
- add Custom code in Extend

### Add css in in body

- style.css

```css
@layer base {
body {
  @apply font-body;
}}
```

### add Color

```js
  extend: {
      colors: {
        primary: "#ee0181",
      },
  },
```

### add Font

```js
    extend: {
      fontFamily: {
        "font-inter": ["Inter", "serif"],
      },
    }
```

---

## Project Start

### Navmenu

- প্রথমে ডেস্কটপ মেনু বানাতে হবে
- এর পরে মোবাইল মেনু

```html
<!-- Desktop Menu start-->
<nav class="p-3 flex bg-white justify-between items-center">
  <a href="#" id="brand" class="flex items-center gap-2">
    <img
      class="object-cover max-w-12 max-h-12"
      src="./assets/images/Logo/logo.png"
      alt="logo"
    />
    <span class="text-lg font-medium font-display">ToDesktop</span>
  </a>
  <!-- NavMenu start-->
  <div id="nav-menu" class="lg:flex gap-12 hidden">
    <a href="#" class="font-medium font-body hover:text-primary">Home</a>
    <a href="#" class="font-medium font-body hover:text-primary">Docs</a>
    <a href="#" class="font-medium font-body hover:text-primary">ChangeLog</a>
    <a href="#" class="font-medium font-body hover:text-primary">Blogs</a>
  </div>
  <!-- menu Button -->
  <button
    class="hidden lg:flex md:gap-2 md:items-center border border-gray-200 px-6 py-2 rounded-lg hover:border-gray-600"
  >
    <img src="./assets/images/Logo/Electron Logo.svg" alt="icon" />
    <span>Electron Developers</span>
    <i class="fa-solid fa-arrow-right"></i>
  </button>
  <!-- Desktop Menu End-->
</nav>
```

```html
<!-- MObile MUNU -->
<nav class="p-3 flex bg-white justify-between items-center">
  <!-- Mobile Menu Start -->
  <!-- ***** nav Open icon start***** -->
  <button class="p-2 lg:hidden" onclick="handleMenu()">
    <i class="fa-solid fa-bars text-gray-600"></i>
  </button>
  <!-- ***** nav Open icon end ***** -->
  <!-- ***** nav Menu ***** -->
  <div id="nav-dialog" class="hidden fixed z-10 md:hidden bg-white inset-0 p-3">
    <div id="nav-bar" class="flex justify-between">
      <!-- ///Logo -->
      <a href="#" id="brand" class="flex items-center gap-2">
        <img
          class="object-cover max-w-12 max-h-12"
          src="./assets/images/Logo/logo.png"
          alt="logo"
        />
        <span class="text-lg font-medium font-display">ToDesktop</span>
      </a>
      <!-- ///Navbar Close Start -->
      <button class="p-2 md:hidden" onclick="handleMenu()">
        <i class="fa-solid fa-xmark text-gray-600"></i>
      </button>
    </div>
    <!-- ///Menu -->
    <div class="mt-6">
      <a href="#" class="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg"
        >Home</a
      >
      <a href="#" class="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg"
        >Pricing</a
      >
      <a href="#" class="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg"
        >Changelog</a
      >
      <a href="#" class="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg"
        >Blog</a
      >
      <a href="#" class="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg"
        >Login</a
      >
    </div>
    <!-- ///manu Button -->
    <div class="h-[1px] bg-gray-200"></div>
    <button
      class="mt-6 flex gap-2 items-center border border-gray-200 px-6 py-4 rounded-lg hover:border-gray-600 hover:bg-gray-100"
    >
      <img src="./assets/images/Logo/Electron Logo.svg" alt="icon" />
      <span>Electron Developers</span>
      <i class="fa-solid fa-arrow-right"></i>
    </button>
  </div>
  <!-- ***** nav Menu End ***** -->
  <!-- Mobile Menu End -->
</nav>
<!-- Nav End -->
```

- দুইটা একি নেভের মদ্যে হবে

```js
const navDialog = document.getElementById("nav-dialog");
function handleMenu() {
  navDialog.classList.toggle("hidden");
}
```

<https://youtu.be/mGN9-FPsX9o?si=C2BCjI3-cNPhGlkm>

## Some Class

- `leading`
- `sm : md : xl :`
- `min-h-screen`
- `bg-gradient-to-b from-purple-50 via-orange-50`
- `(-) Nagative Value` -> `পজেটিভ ভ্যেল্যু` দিলে সামনে আসবে `নেগেটিভ ভ্যেল্যু` দিলে পিচনে আসবে।
- `translate-y-2` -> উপর থেকে নিচে নামে
- `-scale-x-100` -> এলিমেন্ট এঙ্গেল ফ্লিপ করতে সাহাজ্য করে
- `text[16px]` -> [] এর মধ্যে কাস্টম ভ্যেলু পাচ করা যায়।
- `border-b border-black border-opacity-30`
