<a name="custom_anchor_name"></a>

# a clothing store :shirt: :jeans:

## Concepts applied but not limited too

- ### vite + react
- ### tailwind ccs
- ### daisy ui
- ### mobile first development
- ### react router
- ### components based structure
- ### local storage api
- ### custom axios instance
- ### REST api
- ### form data api
- ### pagination
- ### toastify
- ### redux toolkit

---

### _Notes_

- install vite + react with tailwinds css
- install daisy ui
  - npm i -D daisyui@latest @tailwindcss/typography
  - require daisyui AFTER @tailwindcss/typography in tailwind.config.js
- install other dependencies
- create pages folder
  - index.js
- route structure
- error page logic
  - 404 error
  - other errors
- create components folder / index js
  - to speed up workflow and decrease redundant logic
- login page structure
- register page structure
- create custom class for out pages alignment
- add header component
- add navbar component
- add themes toggle
- add nav links component
- add about component
- add hero component with carousel
- add axios custom instance
- add error element so it wont break entire layout
- add landing loader
  - any child components rendered by landing component, has access to loader data, with the use loader data hook
  - this component also can be used on any other page too
- add price formatter
- add single product fetch, destructure, and render
- add select color
- add select qty
- add cart btn
- add products page
- add global loading for better ux
- add filters
  - in react router dom; for inputs, the name attr is important because the backend is looking for the exact value.
  - upon form submission the request is sent back the same page in query string
- we can now use the loader to get those params and pass them into the custom fetch
- also pass down to the inputs as default values so they are not cleared unless reset btn is clicked, which clears the params in the url
- add pagination
- add layout type from locale storage
- add toastify
- add redux toolkit
  - create cart slice
    - for all cart functionality
  - create store
    - entire state for application
    - import cart reducer, fx that modifies state of cart slice
    - key name is needed can be w/e, will be accessed later to control state
  - set up provider in main jsx
    - wrap around app
  - access store value in component
    - useSelector
  - dispatch addItem
  - build add item reducer
    - this reducer updates the cart state when a product is added
- add get cart items from locale storage
- add refactoring to reducers
- add case reducer
- add cart page
- add user slice
- add login logout feature
- add register user action
- add login user action
- add checkout form component
- add checkout page route access restriction
  - by using the loader function
- add checkout form
- add authentication error check
- add orders page request
- add orders list render
