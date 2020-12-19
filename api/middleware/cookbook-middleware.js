function checkRecipe (req, res, next) {
    if(!req.body.recipeName){
        res.status(401).json("Need a recipe name as recipeName")
    } else if (!req.body.ingredients) {
        res.status(401).json("You need at least one ingredient as ingredients")
    } else if (!req.body.step || !req.body.stepNumber) {
        res.status(401).json("you need a step and step number")
    } else {
        next()
    }
}

module.exports = {checkRecipe}