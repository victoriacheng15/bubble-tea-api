# Bubble Tea App

![bubble tea app](./bubble-tea-app.jpg)

This is an app where users can learn about the short history of bubble tea, and submit their favorite combinations. And a leaderboard shows which flavors are loved by the users.

The user should be able to do:

- [x] Can `drag and drop` one of the teas and one of the toppings
- [x] Can `click` one of the teas and one of the toppings
- [x] Submit drink combination to the database
- [x] Clear the drink choice
- [x] View the history of bubble tea
- [x] see the leaderboard of popular drink combinations

[View the site live here](https://bubble-tea.cyclic.app/)

## Tech stack:

![Node](https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248.svg?style=for-the-badge&logo=MongoDB&logoColor=white)

## Screenshots/gif

<details>
<summary>Overview</summary>

![chrome_J6mPCpRNO9](https://user-images.githubusercontent.com/35031228/176273667-153f92c3-9498-4926-8bcb-633254713fa6.gif)

</details>

<hr />

<details>
<summary>The correct way!</summary>

![chrome_GSkpWjKabn](https://user-images.githubusercontent.com/35031228/176273490-272fbf1c-3dc6-404f-b11b-4c81e5a8ec51.gif)

</details>

<hr />

<details>
<summary>The incorrect way</summary>

![chrome_xtVKmJRRaw](https://user-images.githubusercontent.com/35031228/176273227-57969054-d490-41e6-8234-59bb4617863a.gif)

</details>

<hr />

## Installation

Before installing, make sure you have node.js installed on your machine. If it is already installed, follow the steps below.

Step 1

```
git clone git@github.com:victoriacheng15/bubble-tea-api.git
```

Step 2

```
cd bubble-tea-api
```

Step 3

```
npm install
```

Step 4

Please refer to this [guide](https://www.mongodb.com/basics/mongodb-atlas-tutorial) on how to set up the MongoDB atlas.

Step 5

```
npm run dev
```

## What I learned

This project helped me to understand how to interact with the frontend with the backend server. Users can submit their information to the database, in this case, the information will be their favorite type of tea and topping. The page needs to ensure the information is correct before sending it to the server. Once the information is submitted, the server will either create or update the data.

I also learned about drag-and-drop API. One thing I didn't realize is that the drag{somrthing} (e.g. dragenter, dragstart, etc) is click type, which means it would not work on mobile devices. For drag-and-drop API to work on mobile devices, it needs to use touch{something} (e.g. touchstart, touchmove, etc) event listeners for the users to use this app on mobile devices.

## Author

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2.svg?style=for-the-badge&logo=LinkedIn&logoColor=white)](https://www.linkedin.com/in/victoriacheng15/) [![Twitter](https://img.shields.io/badge/Twitter-1DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white)](https://twitter.com/viktoriacheng15)
