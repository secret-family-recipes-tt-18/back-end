# Backend
Secret Fanily Recipes

## Documentation
Base URL for deployed API: 

## **Endpoints**

| Method | URL | Description | Requires Token |
|--------|-----|-------------|----------------|
| POST | /api/auth/login/register | register a new user | - |
| POST | /api/auth/login/login | login an existing user| - |
| GET | /api/cook/ | give you all recipies | X |
| GET | /api/cook/:id | gets recipe with givin ID with ingredients and steps | X |
| POST | /api/cook/ | create a new recipe | X |
| PUT | /api/cook/:id | Edit a recipe | X |
| DELETE | /api/cook/:id | delete a reciope | X |

## **Requests**

## [POST] /api/auth/login/register

```
{
    "username": "username",
    "password": "password"
}
```

## [POST] /api/auth/login/login

```
{
    username: "username",
    password: "password"
}
```

## [POST] /api/cook/

```
{
    name: "Recipe Name",
    category: "Category",
    description: "Description",
    ingredients: ["must", "be", "an", "array"]
    steps: ["is", "also", "an", "array"]
}
```

## [PUT] /api/cook/:id

```
{
    name: "Recipe Name",
    category: "Category",
    description: "Description",
    ingredients: ["must", "be", "an", "array"]
    steps: ["is", "also", "an", "array"]
}
```