# back-end
Back End API

[POST] /api/auth/login/register

allows you to register a new user to data base

Data_Object = {
    username: "username",
    password: "password"
}

[POST] /api/auth/login/login

allows you to log in with correct usert credentails

Data_Object = {
    username: "username",
    password: "password"
}

[GET] /api/cook/  (Must have a valid token in the "Authorization" header for ALL /api/cook)

give you all recipies without ingredients or steps

[GET] /api/cook/:id

give you recipe with givin ID with ingredients and steps

[POST] /api/cook/

post a new recipe with steps and ingredients
Data structure for CREATING and UPDATING a new recipe:

Data_Object = {
    name: "Recipe Name",
    category: "Category",
    description: "Description",
    ingredients: ["must", "be", "an", "array"]
    steps: ["is", "also", "an", "array"]
}

[PUT] /api/cook/:id
can change recipe with given RECIPE_ID use data structure above ^^^

[DELETE] /api/cook/:id
can delete reciepe with given ID