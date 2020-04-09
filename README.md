# TODO LIST WITH REDUX

## SETUP 
- yarn add redux
- yarn add react-redux (for connecting react with redux together)
- yarn add redux-devtools-extension --dev

## Create UI follow the tasks (Todo list)

- Form
- List
- Other components (Button, input... so on)

## Create architecture follow feature and actions

We need to build an app which can add, remove, delete a task.

### Create feature > Todo > redux (folder)

1. types.js
2. action.js
3. reducers.js

-----

# Define:

## types.js
This is file where we create a variable const for each action (Follow feature).
E.g: ADD_TODO, TOGGLE_TODO, REMOVE_TODO;

## actions.js

(Only what happened NOT HOW the the app's state changes)

1. import type of actions from "types" file
2. Follow (three) action features we have (three) const respectively
3. For each actions we have to follow some rules:
- It always return an object.
- The object has only 2 keys: type & payload(data)

4. The name of functions follow above features (while you read the names you can understand what it will do)
- The name of functions must with in camelCase
- The parameter(s) of function should be (a/an) feature(s)/elements which concern the actions. (sometimes, it is exactly an element in payload, depending on which action it can do)

5. The "type" in the function: 
- It is should write same the name of function but writing in uppercase and having "_"
- It defines which type of the action.
- Each action has a formal data follow above features
E.g: 
- ADD_TODO: has title
- TOGGLE_TODO: has isCompleted
- removeTodo has id (which can select exactly item for acting)

6. the "payload" in functions:
- It is an object
- It contains data which have key, value follow(s) the features which can use in other functions (data)
- Sometimes it have name of keys exactly the parameters of function(s) 

Examples

export const addTodo = title => ({
  type: ADD_TODO,
  payload: {
    id: Math.random(new Date()),
    title
  }
})

## Define reducers
It specify HOW the application's state changes in response to actions sent to the store. 

1. import type of actions from "types" file
2. Always create an initialState which follow rules:
- It have some default value,
- It can contain much data
- Our state as normalized as possible, without any nesting ( ID as a key, use IDs to reference it from other entities, or lists).
3. The reducers are always received 2 params: state & action: 
- state: it's an initial state
- action: it's an object which contains: 

* key: ...?
* payload (follow payload value in action)

# Create and configure store for the apps

1. Create stores.js where is equal lv with file index. 
2. import "createStore" from redux for creating store and "combineReducers" to combine all reducers together from 'react'.
3. import reducers from feature which we defined above.
4. Create const allReducers function which stores all the reducers we have.
5. Create const reducers which use as an object para in the combineReducers (which import from redux) for store all the reducers as an object.

6. import composeWithDevTools from 'redux-devtools-extension'
7. Create stores by createStore(reducers, composeWithDevTools());

--> create store!!!

Refer:  config redux using with react
https://redux.js.org/basics/usage-with-react#passing-the-store

## Create redux dev-tools to tracking store of app

1. Install exntesion for chrome: 
https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd

2. install redux-devtools-extension: to config

- yarn add redux-devtools-extension --dev
https://github.com/zalmoxisus/redux-devtools-extension#13-use-redux-devtools-extension-package-from-npm

## Connect redux with react together
1. Go to Todos feature: src/features/Todo.js
2. import {connect} from 'react-redux' (should install react-redux first)
3. import the action which should use in this components
4. write normal the function concern this action to render UI
5. Create a const mapStatetoProps which have a para state. 
- todoReducers is an object which was stored in the stores.js. In fact, it is reducers function in reducers.js (because export default we can change the name of function)
- Use to get (a) state from store of redux
- always return object.

6. Create an variable mapDispatchToProps:
- use to dispatch an action in redux
- always return object.
- import action into the component

7. use "connect" function (high order function) to connect redux &react

- alway transfer 2 params into mapStateToProps & mapDispatchToprops.
- If one of them doesn't have/ please enter null


8. edit file index, 
import {Provider} from 'react-redux
Provider store={stores}
------

Sau khi xd UI thì mình cần phải định nghĩa các tương tác của người dùng 
==> Tạo ra file types.js để định nghĩa các loại hành động.

Việc truyền Dispatch tương ứng với khi chúng ta định nghĩa action trong file actions
- trong đó sẽ có loại action tương ứng với hành động liên quan
- data được chứa trong payload

==> Như vậy việc tạo actions.js tương ứng với action creator, action dispatch, 

Truyền và thực thi là việc tạo store, connect redux và react.