[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Front End Repo
https://github.com/ga-wdi-boston-front-and-center/project-3-front-end

# Tech

* CSS
* HTML5
* jQuery
* Express
* Stripe API
* BOOTSRAP
* JAVASCRIPT


# The Application
Nozama is an e-commerce platform that allows users to purchase products online.

# The Process
The development period lasted from 06/11/2018 until 09/11/2018

Preliminary Work: Planned project on 02/11/2018 as a group completing wireframes, ERDs, and user stories for project. In addition, created an organization on GitHub and added group members, downloaded front end and back end templates from General Assembly for respective repos, and deployed initial commits to both Heroku and GitHub pages.

Day 1 (06/11/2018): The project began by building out a simple full stack application based on planning that was able to handle CRUD on two different resources in order to ensure communication between the front end and back end. To begin with on the back end it was built with two models requiring specific data structures two routes files for all CRUD actions from the front end. To begin with on on the front end, curl scripts were utilized in order to test auth actions on the back end, and then all auth forms, buttons, event listeners, event handlers, API requests, and UI responses were coded out. Auth was tested to ensure communication between front and back end. Forms were then coded out for both product and order resources to allow authorized CRUD action from the front end to the back end. By the end of the day we had a working full stack Express application.

Day 2 (07/11/2018): With a working full stack application in hand, we began refactoring towards the MVP by removing extraneous details. On the front end, we made the product resource read-only (i.e., removed all forms and buttons for product resources except view all products and view one product, since a user on an e-commerce platform is not going to be creating the products that they buy) and adding a product index to the sign in action (i.e., when the user signs in, they are able to immediately see all products for sale), we added and “Add To Cart” button allowing the user to add products to their cart, added a virtual cart which is shown on sign in and actually created when “Add To Cart” is pressed for the first time, added a Handlebars template to serialize out the products in a table with “Add To Cart” buttons in each object, added event handlers, event listeners, API requests, and UI responses for these buttons, ensured “Add To Cart” was working as expected, and began working on the past order index, allowing the user to view all their past orders, and began integrating stripe. On the back end, we made the routes for product read only, and fixed the order routes so that they handle requests sent from the front end.

Day 3 (08/11/2018): This day was spent polishing up unfinished features from day 2, including getting “Add To Cart” actions and “View Past Orders” action to work, adding a “Cancel Order” button was added to allow a user to delete their current order and create a new order, and integrating Stripe for payments in the front and back end

Day 4(09/11/2018): Presentation day


## API Routes

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users.signUp`    |
| POST   | `/sign-in`             | `users.signIn`    |
| DELETE | `/sign-out`            | `users.signOut`   |
| PATCH  | `/change-password`     | `users.changePw`  |
| GET    | `/products`            | `products.index`  |
| POST   | `/products`            | `products.create` |
| GET    | `/products/:id`        | `products.show`   |
| PATCH  | `/products/:id`        | `products.update` |
| GET    | `/orders`              | `orders.index`    |
| POST   | `/orders`              | `orders.create`   |
| GET    | `/orders/:id`          | `orders.show`     |
| PATCH  | `/orders/:id`          | `orders.update`   |
| GET    | `/stripe`              | `stripe.index`    |
| POST   | `/charges`             | `charges.create`  |

# Unsolved Issues
Styling: We want to use bootstrap to enable the user to traverse our application cleaner with tabs and pop up windows with descriptions of the products.


Version 2: We want to be able to search products by their names in a search bar. As well as organize products by categories and remove individual items from the order.
# Entity Relationship Diagram
![Imgur](https://i.imgur.com/fpxF1hW.jpg)
