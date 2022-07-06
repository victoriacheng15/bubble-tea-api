# Bubble Tea App

This is an app where users can learn about short history of the bubble tea, submit their favorite combinations. And a leaderboard shows which flvaors are loved by the users. 

I love bubble tea and am also curious to see what flavors others like as well!

> Update: users now can click to add their favorite drinks. :D

## App function

- Users can drag and drop their favorite tea and topping to the box
- Dragged tea and topping will be sent to the database
- The page will check the database to see if the choice:
  - Is existed, the count will increase by 1
  - Is NOT existed, insert/create the new data
- The drag and drop box will check choices contains each type of tea and topping
  - If both choice are teas or toppings, the submit button will not enable (please refer to the gif below)
- Change your mind? You can clear your choices

## Dependencies

```json
"dependencies": {
  "dotenv": "^16.0.1",
  "ejs": "^3.1.8",
  "express": "^4.18.1",
  "mongodb": "^4.7.0"
}
```

```json
"devDependencies": {
  "eslint": "^8.18.0",
  "eslint-config-airbnb-base": "^15.0.0",
  "eslint-plugin-import": "^2.26.0",
  "nodemon": "^1.3.3"
}
```
## Screenshots/gif

<details open>
<summary>Overview</summary>

![chrome_J6mPCpRNO9](https://user-images.githubusercontent.com/35031228/176273667-153f92c3-9498-4926-8bcb-633254713fa6.gif)

</details>

<details>
<summary>The correct way!</summary>

![chrome_GSkpWjKabn](https://user-images.githubusercontent.com/35031228/176273490-272fbf1c-3dc6-404f-b11b-4c81e5a8ec51.gif)

</details>

<details>
<summary>The incorrect way</summary>

![chrome_xtVKmJRRaw](https://user-images.githubusercontent.com/35031228/176273227-57969054-d490-41e6-8234-59bb4617863a.gif)

</details>

## Built With

- Node/Express
- JavaScript 
- MongoDB
- EJS
- CSS

## What I learned

This project helped me to understand how to interact the front-end with the back-end. Users can submit their information to database, in this case, the information will be their favorite type of tea and topping. The page needs to ensure the information is correct before sending to the server. Once the information is submitted, the server will either create or update the data. 

I also learned about drag and drop API. One thing I didn't realize that the drag{somrthing} (e.g. dragenter, dragstart, etc) is click type, which mean it would not work on mobile devices. In order for drag and drop to work on mobile devices, it needs to use touch{something} (e.g. touchstart, touchmove, etc) event listeners for the users to use this app on mobile devices.
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

Please refer to this [guide](https://www.mongodb.com/basics/mongodb-atlas-tutorial) on how to set up MongoDB atlas.

Step 5

```
npm run dev
```


## Thank you!

Thank you for check out this app and repo. 
