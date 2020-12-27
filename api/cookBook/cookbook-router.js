const router = require("express").Router()
const { checkRecipe, checkID } = require("../middleware/cookbook-middleware")
const CB = require('./cookbook-model')


router.get("/", async (req, res) => {
    try {
        const rec = await CB.getAll()
        res.status(200).json(rec)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post("/", checkRecipe, async (req, res) => {
    try {    
        req.body.userID = req.decodedToken.subject
        const newR = await CB.addRecipe(req)
        req.body.recipeID = newR.id
        const ing = await CB.addIngredients(req)
        const steps = await CB.addSteps(req)
        res.status(201).json({recipe: newR, ingredients: ing, steps: steps})
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get("/:id", checkID, async (req, res) => {
    try {
        const id = req.params.id
        const data = await CB.getAllById(id)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.put("/:id", checkRecipe, async (req, res) => {
    try {
        req.body.userID = req.decodedToken.subject
        const recipe = await CB.updateRecipe(req)
        const ingredients = await CB.updateIngredients(req)
        const steps = await CB.updateSteps(req)
        res.status(201).json({recipe: recipe, steps: steps, ingredients: ingredients})
    } catch (error) {
        res.status(500).json(error)
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id
        const del = CB.deleteById(id)
        res.status(200).json(del)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router