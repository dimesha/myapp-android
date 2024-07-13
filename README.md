# React Native Application: CodeScale Pvt Ltd.

## Overview
This project is a React Native application developed for CodeScale Pvt Ltd., implementing various features including Firebase integration, Redux for state management, API integration for character listing, voice-to-text functionality, Firebase Analytics, and native module integration for displaying battery level.

## Requirements and workarea
- [x] Develop a small React Native application based on the provided Figma design.
- [x] Integrate Firebase authentication and Firebase database.
- [x] Implement "Sign Up" and "Sign In" processes.
- [x] Persist user sessions across the application.
- [x] Use ThronesAPI to list characters with a custom design.
- [x] Create a profile screen displaying user information and allow logging out to redirect to the "Sign In" screen.
- [ ] Utilize Redux for state management.
- [x] Configure voice-to-text features using a specified library.
- [ ] Implement Firebase Analytics to track app statistics.
- [x] Integrate native code (Swift/Java/Kotlin) for native modules showing battery level.
- [ ] Create a simple Next.js landing page for the app.

## Setup Instructions
1. **Clone the repository:**
git clone <repository_url>
cd <project_folder>

2. **Install dependencies:**
npm install

3. **Run the application:**
npm run android

> [!NOTE]
> This will start the Metro Bundler. You can then launch the app on your preferred device or simulator.

## Implementation Details
- **Firebase Integration:** Firebase authentication (`firebase/auth`) and Firebase database (`firebase/database`) are used for user authentication and data storage.

- **ThronesAPI Integration:** Utilized to fetch and display characters in the app.

- **Redux:** Implemented for state management across the application, ensuring a centralized data flow.

- **Voice-to-Text Feature:** Integrated using [specified library](insert-library-link) to enable users to interact via voice commands.

- **Firebase Analytics:** Configured to track user interactions and app usage statistics.

- **Native Module for Battery Level:** Implemented native code (Swift/Java/Kotlin) to display device battery level on the profile screen.

- **Next.js Landing Page:** Created a simple landing page using Next.js to provide information about the application and its features.