####    Deployment Readiness Tracker    ####

# Databases

    The Deployment Readiness Tracker application's data is stored within the 'deployment_db' database and has four tables: 

    personnel

        The personnel table has the following information:

        id
        name  
        DOD_number
        deployable
        medical_id
        training_id

    medical

        The medical table has the following information:

        id
        status
        checkup due by
        immunization due

    training

        The training table has the following information:

        id
        status
        training_type_id
        date_completed

    training_type

        The training_type table has the following information:

        id
        name
        description

# API

    The API is stored in the following location: Group-4-Project-3/src/app.js

    The API allows the following calls:

    GET "/training"
    GET "/training/:idOrName"
    GET "/medical"
    GET "/medical/:idOrName"
    GET `/${table}/:idOrName`
    GET `/${table}`
    POST "/personnel"
    POST `/${table}`
    PATCH `/${table}/:id`
    DELETE `/${table}/:id`

# Application Features:

    Login Page: The login screen allows the user to simulate logging into the application. No information is stored upon logging in

    Navbar: The Navbar has the following links: 
        Home
        Training
        Medical
        Logout: Navigates the user back to the login page

    Home Page: The home page displays the following features:

        Navbar
        Deployment Readiness Pie Chart
        Deployment Readiness table: All personnel and a "-" icon next to each personnel. Also contains an insert icon as its final value

            Insert: The blue "+" icon at the bottom of the table navigates the user to the "Add Personnel form"
            Delete: The red "-" icon deletes the personnel to the right of the icon. Personnel information is also removed from
                training and medical pages
            Name Column: The name column navigates the user to a Deployment Readiness table of the specific personnel. Presented in card format
            Medical_id column: The Medical_id column navigates the user to the medical page of the specific personnel
            Training_id column: The Training_id column navigates the user to the training page of the specific personnel

    Training Page: The training page displays the following features:

        Navbar
        Training Readiness Pie Chart
        Training table: Displays the training table
        
    Medical Page: The medical page displays the following features:

        Navbar
        Medical Readiness Pie Chart
        Medical table: Displays the medical table
    
    Add Personnel form:

        The "Add Personnel" form allows the user to add a personnel to the Deployment Readiness Tracker table and medical and training tables
        
        The form has the following fields:
            Name: string
            DOD Number: int
            Deployable: Yes/No
            Status: green/red
            Checkup Due By: date
            Immunization: true/false
            Status: green/red
            Training Type: int between 1-20
            Date Completed: date
        
        The "ADD PERSONNEL" button submits data to the API in order to add the data to the database
    
# Available Scripts

In the project directory, you can run:

### `npm start` to start the server. The server runs on port 8080.
### `node view/view_all.js` to view all tables in the deployment_db database. This database runs in a Docker container.
### `node view/view_personnel.js` to view the personnel table in the deployment_db database. This database runs in a Docker container.
### `node view/view_medical.js` to view the medical table in the deployment_db database. This database runs in a Docker container.
### `node view/view_training.js` to view the training table in the deployment_db database. This database runs in a Docker container.
### `node view/view_training_type.js` to view the training type table in the deployment_db database. This database runs in a Docker container.

### `npx knex migrate:rollback` to remove all tables in the deployment_db database.
### `npx knex migrate:latest` to create the tables with the latest schema in the deployment_db database.
### `npx knex seed:run` to use the 'faker' module to plant randomly-generated data within each table in the deployment_db database.

In the project's 'app' directory, you can run:

### `npm start` to start the application. The application runs on port 3000.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

# Credits

    Galen Gant
    David Thach
    Angel Mora
    Allyn Sattler