const express = require("express")
const router = express.Router()
const {homePage, historyPage, leaderboardPage, updateOrder} = require("../controllers/allControllers")


router.get("/", homePage);
router.get("/history", historyPage);
router.get("/leaderboard", leaderboardPage);
router.post("/order", updateOrder);

module.exports = router;