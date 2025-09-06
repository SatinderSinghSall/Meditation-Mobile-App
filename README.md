<div align="center">
  <br />
    <a href="https://satinder-portfolio.vercel.app/" target="_blank">
      <img src="https://i.postimg.cc/rygDVH1m/React-Native-Git-Hub-Cover.png" alt="Project Banner">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-React_Native-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-expo-black?style=for-the-badge&logoColor=white&logo=expo&color=FD366E" alt="expo" />
    <img src="https://img.shields.io/badge/NativeWind-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="nativewind" />
  </div>

  <h3 align="center">Meditation and Affirmations App</h3>

   <div align="center">
     Build this project with ❤️ by <a href="https://satinder-portfolio.vercel.app/" target="_blank"><b>Satinder Singh Sall</b></a>.
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets](#snippets)
6. 🔗 [Links](#links)
7. 🚀 [More](#more)

## <a name="introduction">🤖 Introduction</a>

Built with React Native to deliver seamless user experiences, this app features a clean design utilizing FlatLists, Linear Gradients, modals, tab bars, icons, and file-based routing with Expo Router.

## <a name="tech-stack">⚙️ Tech Stack</a>

- React Native
- Expo
- NativeWind
- JavaScript
- TypeScript

## <a name="features">🔋 Features</a>

👉 **Onboarding Screen**: Welcome screen with a linear gradient to help users get started with the app.

👉 **Meditation List Screen with Flat List**: A flat list displays previews of various meditations with corresponding images.

👉 **Audio Playing Capability**: Control audio playback and manage a meditation countdown timer.

👉 **Tab Navigation**: Navigate between sections like the Meditation Screen and Affirmations screen with ease using tab navigation.

👉 **Responsiveness**: Smooth performance and adaptability across various devices and screen sizes for a consistent user experience.

and many more, including code architecture and reusability

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

## 📂 Project Structure

# File Tree: Meditation App

Generated on: 9/6/2025, 12:41:56 PM
Root path: `e:\My Projects\Full-Stack Meditation Mobile App\Meditation App`

```
├── 📁 .expo/ 🚫 (auto-hidden)
├── 📁 .git/ 🚫 (auto-hidden)
├── 📁 .vscode/ 🚫 (auto-hidden)
├── 📁 app/
│   ├── 📁 (modal)/
│   │   └── 📄 adjust-meditation-duration.tsx
│   ├── 📁 (tabs)/
│   │   ├── 📁 affirmations/
│   │   │   ├── 📄 [itemId].tsx
│   │   │   ├── 📄 _layout.tsx
│   │   │   └── 📄 index.tsx
│   │   ├── 📄 _layout.tsx
│   │   └── 📄 nature-meditate.tsx
│   ├── 📁 meditate/
│   │   └── 📄 [id].tsx
│   ├── 📄 [...unmatched].tsx
│   ├── 📄 _layout.tsx
│   └── 📄 index.tsx
├── 📁 assets/
│   ├── 📁 affirmation-images/
│   │   ├── 🖼️ California-backyard-1.webp
│   │   ├── 🖼️ California-backyard-2.webp
│   │   ├── 🖼️ California-backyard-3.webp
│   │   ├── 🖼️ California-backyard-4.webp
│   │   ├── 🖼️ Tuscanny-1.webp
│   │   ├── 🖼️ Tuscanny-2.webp
│   │   ├── 🖼️ Tuscanny-3.webp
│   │   ├── 🖼️ Tuscanny-4.webp
│   │   ├── 🖼️ english-countryside-1.webp
│   │   ├── 🖼️ english-countryside-2.webp
│   │   ├── 🖼️ english-countryside-3.webp
│   │   ├── 🖼️ english-countryside-4.webp
│   │   ├── 🖼️ mountain-meditate-1.webp
│   │   ├── 🖼️ mountain-meditate-2.webp
│   │   ├── 🖼️ mountain-meditate-3.webp
│   │   ├── 🖼️ mountain-meditate-4.webp
│   │   ├── 🖼️ night-sky-1.webp
│   │   ├── 🖼️ night-sky-2.webp
│   │   ├── 🖼️ night-sky-3.webp
│   │   ├── 🖼️ night-sky-4.webp
│   │   ├── 🖼️ oregon-1.webp
│   │   ├── 🖼️ oregon-2.webp
│   │   ├── 🖼️ oregon-3.webp
│   │   ├── 🖼️ oregon-4.webp
│   │   ├── 🖼️ relaxing-river-1.webp
│   │   ├── 🖼️ relaxing-river-2.webp
│   │   ├── 🖼️ relaxing-river-3.webp
│   │   └── 🖼️ relaxing-river-4.webp
│   ├── 📁 audio/
│   │   ├── 📄 beach.mp3
│   │   ├── 📄 meditate-under-tree.mp3
│   │   ├── 📄 river.mp3
│   │   ├── 📄 trees.mp3
│   │   ├── 📄 waterfall.mp3
│   │   └── 📄 yosemite-stars.mp3
│   ├── 📁 fonts/
│   │   └── 📄 RobotoMono-Regular.ttf
│   ├── 📁 meditation-images/
│   │   ├── 🖼️ beach.webp
│   │   ├── 🖼️ meditate-under-tree.webp
│   │   ├── 🖼️ river.webp
│   │   ├── 🖼️ trees.webp
│   │   ├── 🖼️ waterfall.webp
│   │   └── 🖼️ yosemite-stars.webp
│   ├── 🖼️ adaptive-icon.png
│   ├── 🖼️ favicon.png
│   ├── 🖼️ icon.png
│   ├── 🖼️ meditation-destress.png
│   ├── 🖼️ meditation-graphic.png
│   ├── 🖼️ simpleMeditationLogo.png
│   └── 🖼️ splash.png
├── 📁 components/
│   ├── 📄 AppGradient.tsx
│   ├── 📄 AppScreen.tsx
│   ├── 📄 Content.tsx
│   ├── 📄 CustomButton.tsx
│   ├── 📄 GuidedAffirmationsGallery.tsx
│   ├── 📄 MeditationPreview.tsx
│   ├── 📄 ProductPreview.tsx
│   └── 📄 SearchInput.tsx
├── 📁 constants/
│   ├── 📁 models/
│   │   └── 📄 AffirmationCategory.ts
│   ├── 📄 Colors.js
│   ├── 📄 MeditationData.ts
│   ├── 📄 affirmation-gallary.ts
│   ├── 📄 affirmation-images.ts
│   └── 📄 meditation-images.ts
├── 📁 context/
│   └── 📄 TimerContext.tsx
├── 📁 node_modules/ 🚫 (auto-hidden)
├── 🚫 .gitignore
├── 📄 App.js
├── 📖 README.md
├── 📄 app.d.ts
├── 📄 app.json
├── 📄 babel.config.js
├── 📄 package-lock.json
├── 📄 package.json
├── 📄 tailwind.config.js
└── 📄 tsconfig.json
```

---

_Generated by FileTree Pro Extension_

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/SatinderSinghSall/Meditation-Mobile-App.git
cd meditation-app
```

**Updating Dependencies**
To ensure your project is using the latest stable versions of Expo and React Native:

Run the Expo upgrade command:

```bash
expo upgrade
```

This will update package.json and install the correct versions of dependencies.

**Installation**

If you did not run, _expo upgrade_, then install the project dependencies manually using npm:

```bash
npm install
```

**Fixing Vulnerabilities**

If you see security vulnerabilities or warnings after running `npm install`, follow these steps:

1. **Check for vulnerabilities**

   ```bash
   npm audit
   ```

2. **Fix vulnerabilities**

   ```bash
   npm audit fix
   ```

**Running the Project**

The --clear flag clears the cache.

```bash
npx expo start --clear
```

**Expo Go**

Download the [Expo Go](https://expo.dev/go) app onto your device, then use it to scan the QR code from Terminal and run.

**iOS Simulator**

Navigate to the [Expo documentation](https://docs.expo.dev/workflow/ios-simulator/) to learn how to install and run your application on an iOS Simulator for local development.

**Android Emulator**

Navigate to the [Expo documentation](https://docs.expo.dev/workflow/android-studio-emulator/) to learn how to install and run your application on an Android Emulator for local development.

## <a name="links">🔗 Links</a>

<a href="https://satinder-portfolio.vercel.app/" target="_blank">
    Satinder Singh Sall
</a>

# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
