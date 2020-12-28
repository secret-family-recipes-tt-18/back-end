const db = require("../../data/dbConfig")


async function findById(id){
    return db('recipes').where({id}).first()
}

async function addRecipe(recipe){
    const newRecipe = {
        name: recipe.body.name,
        category: recipe.body.category,
        description: recipe.body.description,
        user_id: recipe.body.userID
    }
    const [id] = await db("recipes").insert(newRecipe)
    return findById(id)
}

async function addIngredients(ingre){
    const ingredients = ingre.body.ingredients
    const id = ingre.body.recipeID
    const data = ingredients.map(ingredient => {
        return {
            name: ingredient,
            recipe_id: id
        }
    });
    await db("ingredients").insert(data)
    return db("ingredients").where("recipe_id", id)
}

async function addSteps(s){
    const steps = s.body.steps
    const id = s.body.recipeID
    const data = steps.map(step => {
        const d = {
            step: step,
            recipe_id: id
        }
        return d
    })
    await db("steps").insert(data)
    return db("steps").where("recipe_id", id)
}

async function getIngredientsById(id){
    return db("ingredients").where('recipe_id', id).select("name as ingredient")
}

async function getStepsById(id){
    return db("steps").where('recipe_id', id).select("step")
}

async function getRecipeById(id){
    return db("recipes").where({id}).select("name as recipe", "category", "description", "user_id", "id as recipe_ID").first()
}


async function getAllById(id){
    const rec = await getRecipeById(id)
    const steps = await getStepsById(id)
    const ingredients = await getIngredientsById(id)
    return {
        recipe: rec, 
        steps: steps, 
        ingredients: ingredients
    }
}

async function getByID(id){
    return db("recipes as r")
        .join("ingredients as i", "r.id", "i.recipe_id")
        .join("steps as s", "r.id", "s.recipe_id")
        .select("r.name as Recipe", "r.category", "r.description", "s.step", "i.name as ingredients")
        .where('r.id', id)
}

async function getAll(){
    return db("recipes").select("id as recipe_id", "name as recipe", "category", "user_id")
}

async function updateRecipe(changes){
    const param = changes.params.id
    const newChanges = {
        name: changes.body.name,
        category: changes.body.category,
        description: changes.body.description,
        user_id: changes.body.userID
    }
    await db("recipes").where('id', param).update(newChanges)
    const data = await getRecipeById(param)
    return data
}

async function updateIngredients(changes){
    const param = changes.params.id
    const ingredients = changes.body.ingredients
    const data = ingredients.map(ingredient => {
        return {
            name: ingredient,
            recipe_id: param
        }
    })
    await db("ingredients").where("recipe_id", param).del()
    await db("ingredients").insert(data)
    const stuff = await getIngredientsById(param)
    return stuff
}

async function updateSteps(changes){
    const param = changes.params.id
    const steps = changes.body.steps
    const data = steps.map(step => {
        return{
            step: step,
            recipe_id: param
        }
    })
    await db("steps").where("recipe_id", param).del()
    await db("steps").insert(data)
    const stuff = await getStepsById(param)
    return stuff
}

async function deleteById(id){
    await db("recipes").where({id}).del()
    await db("ingredients").where("recipe_id", id).del()
    await db("steps").where("recipe_id", id).del()
    return db("recipes")
}

module.exports = {
addRecipe,
getAllById,
getIngredientsById,
addIngredients,
addSteps,
getByID,
getStepsById,
getRecipeById,
getAll,
updateRecipe,
updateIngredients,
updateSteps,
deleteById
}