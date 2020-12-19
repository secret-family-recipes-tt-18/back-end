const router = require("express").Router()
const { checkRecipe } = require("../middleware/cookbook-middleware")
router.post("/", checkRecipe, (req, res) => {

})