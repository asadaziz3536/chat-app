# Project Title
Chat App
This is a one page chat application build with Vite, a build tool for modern web development. Vite provides a fast development server with hot module replacement (HMR) and an optimized production build for the best performance.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#Features)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This is a one page chat application build with Vue 3 and Vite using atomic design patterns having chats, people and rooms tab.Each tab contains chat list, a chat message box that contain the chat conversation and the input message field and the user details sidebar that contains user details and a notes input box.

## Features
- Chats Tab
- Rooms Tab
- People Tab
- Searching in the chat users list
- Chat input with Bold,italic text formatting,image upload and add link buttons working
- Chat and user details against each particular user shows on clicking the specific user from the chat list
- vuex state management for various toggling and data mapping

### Prerequisites

- Node.js and npm installed on your machine.

## Installation

1. Clone this repository to your local machine:

``` bash
git clone https://github.com/asadaziz3536/chat-app.git

```

2. Navigate into the project directory:
cd chat-app

3. Install project dependencies using npm
npm install

## Usage

- After installing dependencies, you can run the project locally. Use the following command:
npm run dev



chat-app/
  ├── public/
  │   └── ...
  ├── src/
  │   ├── assets/
  │   ├── components
  |   |     ├──atoms
  |   |     |    ├──ActionDropdown.vue
  |   |     |    ├──AvatarImg.vue
  |   |     |    ├──Badge.vue
  |   |     |    ├──CircledIconBtn.vue
  |   |     |    ├──HeadingOne.vue
  |   |     |    ├──HeadingThree.vue
  |   |     |    ├──HeadingTwo.vue
  |   |     |    ├──IconBtn.vue
  |   |     |    ├──Input.vue
  |   |     |    ├──InputBox.vue
  |   |     |    ├──Label.vue
  |   |     |    ├──Logo.vue
  |   |     |    ├──Paragraph.vue
  |   |     |    ├──RatingStar.vue
  |   |     |    ├──Text.vue
  |   |     ├──molecules
  |   |     |    ├──ChatMessage.vue
  |   |     |    ├──ChatsHeader.vue
  |   |     |    ├──HeaderInnerLeft.vue
  |   |     |    ├──HeaderInnerRight.vue
  |   |     |    ├──Notes.vue
  |   |     |    ├──QueuedUsers.vue
  |   |     |    ├──Rating.vue
  |   |     |    ├──UserDetailBody.vue
  |   |     |    ├──UserDetailHead.vue
  |   |     |    ├──UserListItem.vue
  |   |     ├──organisms
  |   |     |    ├──ChatBox.vue
  |   |     |    ├──ChatsList.vue
  |   |     |    ├──Header.vue
  |   |     |    ├──Tabs.vue
  |   |     |    ├──UserDetailBar.vue
  |   |     ├──templates
  |   |          ├──UserDetailBar.vue
  |   ├── store/
  │   ├── views/
  │   ├── App.vue
  │   └── main.js
  ├── .gitignore
  └── index.html  
  ├── package.json
  └── README.md



