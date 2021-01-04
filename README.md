# Backend
Secret Fanily Recipes

## Documentation
Base URL for deployed API: https://tgif-secret-family-recipes-api.herokuapp.com/

## Notes
```
Every time I make a new change the database will reset
Tokens last 24 hours
```

## **Endpoints**

| Method | URL | Description | Requires Token |
|--------|-----|-------------|----------------|
| POST | /api/auth/register | register a new user | - |
| POST | /api/auth/login | login an existing user| - |
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
    ingredients: ["must", "be", "an", "array"],
    steps: ["is", "also", "an", "array"]
}
```

## [PUT] /api/cook/:id

```
{
    name: "Recipe Name",
    category: "Category",
    description: "Description",
    ingredients: ["must", "be", "an", "array"],
    steps: ["is", "also", "an", "array"]
}
```

## **Returns**

## [POST] /api/auth/login/register

```
{
    "id": 9999999,
    "username": "Username",
    "password": "Ha$h3D Pa$$w0Rd"
}
```

## [POST] /api/auth/login/login

```
{
    "message": "welcome, user",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aHk_IjoiSSBob3BlIHlvdSBrbm93IHlvdSB3YXRlZCB5b3VyIHRpbWUiLCJ3ZWxsLi4uIjoiSGF2ZSBhIGdyZWF0IGRheSA6MyJ9.lgPyXRHP0dWZNBkiR3ECocLq-dLJ08ee2B0M4RP6g-I"
}
```

## [GET] /api/cook/
```
{
    "recipe_id": 1,
    "recipe": "Chicken noodle soup",
    "category": "soup",
    "user_id": 1
},
{....},{....},{....}
```

## [GET] /api/cook/:id
```
{
    "recipe": {
        "recipe": "Chicken noodle soup",
        "category": "soup",
        "description": "Some hot yummy soup",
        "user_id": 1,
        "recipe_ID": 1
    },
    "steps": [
        {
            "step": "heat up water"
        },
        {
            "step": "cut veggies"
        },
        {
            "step": "boil everything"
        }
    ],
    "ingredients": [
        {
            "ingredient": "water"
        },
        {
            "ingredient": "carrots"
        },
        {
            "ingredient": "chicken"
        },
        {
            "ingredient": "noodles"
        },
        {
            "ingredient": "seasoning"
        }
    ]
}
```

## [POST] api/cook/:id (in this case id = 1)
```
{
    "recipe": {
        "id": 1,
        "name": "Chicken noodle soup",
        "category": "soup",
        "description": "some hot yummy soup",
        "user_id": 1
    },
    "ingredients": [
        {
            "id": 8,
            "name": "water",
            "recipe_id": 1
        },
        {
            "id": 9,
            "name": "carrots",
            "recipe_id": 1
        },
        {
            "id": 10,
            "name": "chicken",
            "recipe_id": 1
        },
        {
            "id": 11,
            "name": "noodle",
            "recipe_id": 1
        },
        {
            "id": 12,
            "name": "seasoning",
            "recipe_id": 1
        }
    ],
    "steps": [
        {
            "id": 6,
            "step": "heat up water",
            "recipe_id": 1
        },
        {
            "id": 7,
            "step": "cut veggies",
            "recipe_id": 1
        },
        {
            "id": 8,
            "step": "boil everything",
            "recipe_id": 1
        }
    ]
}
```

## [PUT] /api/cook/:id
```
{
    "recipe": {
        "recipe": "Chicken noodle soup",
        "category": "soup",
        "description": "some hot yummy soup",
        "user_id": 1,
        "recipe_ID": 1
    },
    "steps": [
        {
            "step": "heat up water"
        },
        {
            "step": "cut veggies"
        },
        {
            "step": "boil everything"
        }
    ],
    "ingredients": [
        {
            "ingredient": "water"
        },
        {
            "ingredient": "carrots"
        },
        {
            "ingredient": "chicken"
        },
        {
            "ingredient": "noodle"
        },
        {
            "ingredient": "seasoning"
        }
    ]
}
```

## [DELETE] /api/cook/:id
```
{}
```
