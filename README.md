# TODO LIST WITH REDUX

## SETUP 
- yarn add redux
- yarn add react-redux (for connecting react with redux together)

## Create UI follow the tasks (Todo list)

- Form
- List
- Other components (Button, input... so on)

## Create architecture follow feature and actions

We need to build an app which can add, remove, delete a task.

### Create feature > Todo > redux (folder)

1. action.js 
2. types.js
3. reducers.js

-----

# Define:

## types.js
This is file where we create a variable constat for each action (Follow feature).
E.g: ADD_TODO, TOGGLE_TODO, REMOVE_TODO;

## actions.js

1. import type of actions from "types" file
2. Follow (three) action features we have (three) const respectively
3. For each actions we have to follow some rules:
- It always return an object.
- The object has only 2 keys: type & payload(data)

4. The name of funtions follow above features (while you read the names you can understand what it will do)
- The name of funtions must with in camelCase
- The paragram(s) of funtion should be (a/an) feature(s)/elements which concern the actions. (sometimes, it is exactly an element in payload, depenting on which action it can do)

5. The "type" in the function: 
- It is should write same the name of function but writting in uppercase and having "_"
- It defines which type of the action.
- Each action has a formal data follow above features
E.g: 
- ADD_TODO: has title
- TOGGLE_TODO: has isCompleted
- removeTodo has id (which can select exactly item for acting)

6. the "payload" in functions:
- It is an object
- It contains data which have key, value follow(s) the features which can use in other functions (data)
- Sometimes it have name of keys exactly the paragrams of function(s) 

Examples

export const addTodo = title => ({
  type: ADD_TODO,
  payload: {
    id: Math.random(new Date()),
    title
  }
})

## Define reducers

1. import type of actions from "types" file
2. Always create an initialState which follow rules:
- It have some default value,
- 



