const M = require("../cookBook/cookbook-model")

function checkRecipe (req, res, next) {
    if(!req.body.name){
        res.status(401).json("Need a recipe name as recipeName")
    } else if (!req.body.ingredients) {
        res.status(401).json("You need at least one ingredient as ingredients")
    } else if (!req.body.steps) {
        res.status(401).json("you need some steps")
    } else {
        next()
    }
}

async function checkID(req, res, next){
    try {
        const id = req.params.id
        const users = [await M.getRecipeById(id) || null]
        if(users[0] === null){
          res.status(401).json("did not provide correct id")
        } else {
            next()
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    checkRecipe,
    checkID
}