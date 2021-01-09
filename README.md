# Team-4-Project

# PetFlix - Backend
### [Frontend Repo](https://github.com/SFX818/Team-4-frontend)
### [Deployed API](https://petflix.herokuapp.com/)

## Backend Tech Used
* React
* Redux
* Mongoose
* VS Code
* Javascript​
* Notion & Github - for team project management 
* Whimsicle - for wireframes & ODM planning
​
​
## General Approach
Our general approach was to combine our passions and interests as a team to a fun, social media-based app that revolves around our treasured pets. This would allow users to upload pictures of their pets (among other CRUD functionalities) to share with other users. 
​
Additionally, there would be an opportunity for users to add profiles for their own pets to provide more details should other users want to know more about a pet's name, species, breed, and so forth. 
​
The main idea is to implement both a social and personal element to the app. Beyond user and pet profiles, users would have the ability to generate journal entries for their pet's day-to-day and log in milestones for those big pet moments. 

## Installation Instructions
To install the backend, please do the following:
> npm i
>
> npm start
​
## Models 
### Click [here](https://whimsical.com/project-3-erd-V75TJEWCVNyXFmRUZPRj8z) for the object-document mapping.
​
## RESTful Routes
| Name                         | Action (CRUD) | Description                                                                                                                                | Notes    | 
|------------------------------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------|----------| 
| /                            | GET           | Main page with description of the app - landing page                                                                                       | MVP      | 
| /auth/signin                 | GET           | Log-in form                                                                                                                                | MVP      | 
| /auth/signin                 | POST          | Post sign-in form to db                                                                                                                    | MVP      | 
| /auth/signup                 | GET           | Sign up form                                                                                                                               | MVP      | 
| /auth/signup                 | POST          | Post sign-up form to db                                                                                                                    | MVP      | 
| /about                       | GET           | show about me page of the developers + add'l info about the app                                                                            | MVP      | 
| /home                        | GET           | renders timeline with all of users' posts                                                                                                  | MVP      | 
| /home/:post_id/comment       | POST          | form to create a comment                                                                                                                   | MVP      | 
| /home/:post_id               | GET           | renders comment on a specific post                                                                                                         | MVP      | 
| /home/:postId                | DELETE        | deletes a specific post; configured so only users can delete                                                                               | MVP      | 
| /home/:postId                | PUT           | updates a specific post;  configured so only users can update                                                                              | MVP      | 
| /profile                     | GET           | user profile with seperate component for pets                                                                                              | MVP      | 
| /profile/post                | POST          | form page to create a post                                                                                                                 | MVP      | 
| /profile/:postId             | GET           | specific page for a single post                                                                                                            | MVP      | 
| /profile/:petId              | GET           | render the pets from user - points to their specific profile page that will then render journal entries and milestones unique to that pet  | MVP      | 
| /profile/pet                 | POST          | form to add a pet to user profile                                                                                                          | MVP      | 
| /profile/:petId              | PUT           | updates a pet in user profile                                                                                                              | MVP      | 
| /profile/:petId              | DELETE        | deletes a pet in user profile                                                                                                              | MVP (☹️) | 
| /profile/:petId/journal      | POST          | creates a journal entry for a user's pet                                                                                                   | Stretch  | 
| /profile/:petId/:journalId   | PUT           | updates a journal entry for a user's pet                                                                                                   | Stretch  | 
| /profile/:petId/:journalId   | DELETE        | deletes a journal entry for a user's pet                                                                                                   |          | 
| /profile/:petId/milestone    | POST          | creates a milestone event for a user's pet                                                                                                 | Stretch  | 
| /profile/:petId/:milestoneId | PUT           | updates a milestone event for a user's pet                                                                                                 | Stretch  | 
| /profile/:petId/:milestoneId | DELETE        | deletes a milestone event for a user's pet                                                                                                 | Stretch  | 
​
## Major Hurdles & Unsolved Problems 
At first, we had challenges with the slight learning curve of overall github management. 
​
Once we tackled that and got more skilled and familiar, the biggest hurdles were ensuring our routes and controllers were in good form as we did numerous testing and finetuning.