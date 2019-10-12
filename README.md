# GoStack Certification - Meetapp

This repository is the submition of the final challenge to GoStack Certification by [Rocketseat](https://rocketseat.com.br/).

This project is a complete system to schedule developers meetings called Meetapp (acronym to Meetup + App).

This system is composed by three applications: back end written in [Node.js](https://nodejs.org/en/), front end written in [ReactJS](https://reactjs.org/) and mobile application (**Android** only, for now) developed in [React Native](https://facebook.github.io/react-native/). In this repository you can found the release `v1.0.0` of each application.

-   [Back end](#Back-end) - according to [Challenge 02](https://github.com/Rocketseat/bootcamp-gostack-desafio-02/blob/master/README.md#desafio-02-iniciando-aplicação) and [Challenge 03](https://github.com/Rocketseat/bootcamp-gostack-desafio-03/blob/master/README.md#desafio-03-continuando-aplicação)

    -   [How to run the back end?](#How-to-run-the-back-end)
    -   [Back end production features](#Back-end-production-features)
    -   [Back end development features](#Back-end-development-features)

-   [Front end](#Front-end) - according to [Challenge 09](https://github.com/Rocketseat/bootcamp-gostack-desafio-09#desafio-09-front-end-do-meetapp)

    -   [How to run the front end?](#How-to-run-the-front-end)
    -   [Front end production features](#Front-end-production-features)
    -   [Front end development features](#Front-end-development-features)

-   [Mobile Application](#Mobile-Application) - according to [Challenge 10](https://github.com/Rocketseat/bootcamp-gostack-desafio-10#desafio-10-mobile-do-meetapp)
    -   [How to run the mobile application?](#How-to-run-the-mobile-application)
    -   [Mobile application production features](#Mobile-application-production-features)
    -   [Mobile application development features](#Mobile-application-development-features)

## Back end

API written in [Node.js](https://nodejs.org/en/). The official repository can be found [here](https://github.com/brunocrocomo/meetapp-backend).

### How to run the back end?

As prerequisite you need to host the `Postgres` and `Redis` databases on your machine. It's recommended to use [Docker](https://www.docker.com/) containers once they're really easy to install and run, as shown below:

#### Postgres

`docker run --name meetapp-database -e POSTGRES_PASSWORD=docker -p 5433:5432 -d postgres`

#### Redis

`docker run --name meetapp-redis -p 6379:6379 -d -t redis:alpine`

Once the containers are up, you just need to:

1. Clone this repository:

```
$ git clone https://github.com/brunocrocomo/gostack-certification-meetapp.git
```

2. Move into `backend` directory:

```
$ cd gostack-certification-meetapp/backend
```

3. Run `yarn` to install the dependencies

```
$ yarn
```

4. Make a copy of the `.env.example` file and rename it to `.env`

5. Set the values of the `.env` file as required

6. Run the ORM migrations:

```
$ yarn sequelize db:migrate
```

7. If you want some random data, run the ORM seeds with the command below. The generated users passwords are all set as `123456`.

```
$ yarn sequelize db:seed:all
```

8. Run `yarn dev` to start the server (at `http://localhost:3333/`):

```
$ yarn dev
```

9. Run `yarn queue` to start the email sending background job:

```
$ yarn queue
```

### Back end production features

-   Web server based on [Express](https://github.com/expressjs/express) with security resources provided by [Express Rate Limit](https://github.com/nfriedly/express-rate-limit) e [Helmet](https://github.com/helmetjs/helmet) libraries.

-   [Postgres](https://www.postgresql.org/) database handled by [Sequelize](https://github.com/sequelize) ORM features.

-   Object schema validation with [Yup](https://github.com/jquense/yup) library.

-   Date and time formatting and validation with [date-fns](https://github.com/date-fns/date-fns) library.

-   Password hashing with [bcryptjs](https://github.com/dcodeIO/bcrypt.js) library.

-   JSON Web Token authentication with [JWT](https://github.com/auth0/node-jsonwebtoken) library.

-   `multipart/form-data` handling with [Multer](https://github.com/expressjs/multer) middleware, allowing image upload to server.

-   Process queues and background jobs handled by [Bee Queue](https://github.com/bee-queue/bee-queue) library with [Redis](https://github.com/antirez/redis) support.

-   E-mail sending feature (using background jobs!) with [Nodemailer](https://nodemailer.com/about/) library.

-   Cache of relevant routes using [Redis](https://github.com/antirez/redis) as support.

-   Error abstractions and pretty reports supported by [Boom](https://github.com/hapijs/boom) and [Youch](https://github.com/poppinss/youch) libraries.

-   Application monitoring and error tracking supported by [Sentry](https://sentry.io/welcome/) services.

-   Single and easy configuration file of the whole backend using environment variables supported by [dotenv](https://github.com/motdotla/dotenv) module.

### Back end development features

-   Code linting and formatting with [ESlint](https://github.com/eslint/eslint), [Prettier](https://github.com/prettier/prettier) and [EditorConfig](https://editorconfig.org/).

-   Source code compiling supported by [Sucrase](https://github.com/alangpierce/sucrase).

-   File changes monitor and application auto-reload supported by [nodemon](https://github.com/remy/nodemon).

-   Random data generator (for seeds creation with Sequelize) supported by [faker.js](https://github.com/marak/Faker.js/).

## Front end

Front end written in [ReactJS](https://reactjs.org/). The official repository can be found [here](https://github.com/brunocrocomo/meetapp-web).

### How to run the front end?

1. Clone this repository (if you haven't yet):

```
$ git clone https://github.com/brunocrocomo/gostack-certification-meetapp.git
```

2. Move into `frontend` directory:

```
$ cd gostack-certification-meetapp/frontend
```

3. Run `yarn` to install the dependencies

```
$ yarn
```

4. Run `yarn start` to start the app (at `http://localhost:3000/`)

```
$ yarn start
```

### Front end production features

-   Form handling and validation support with [Unform](https://github.com/Rocketseat/unform) library.

-   Styled componentization supported by [styled-components](https://github.com/styled-components/styled-components) and [polished](https://github.com/styled-components/polished) libraries.

-   State management and side effects supported by [Redux](https://github.com/reduxjs/redux) and [Redux-Saga](https://github.com/redux-saga/redux-saga).

-   Persist of redux store with [Redux Persist](https://github.com/rt2zz/redux-persist).

-   HTTP requests with [Axios](https://github.com/axios/axios) client.

-   Stylish interfaces powered by [React Icons](https://github.com/react-icons/react-icons) and [React Date Picker](https://github.com/Hacker0x01/react-datepicker/).

-   Stylish notifications powered by [React Toastify](https://github.com/fkhadra/react-toastify).

-   Object schema validation with [Yup](https://github.com/jquense/yup) library.

-   Date and time formatting and validation with [date-fns](https://github.com/date-fns/date-fns) library.

-   History session management with [history](https://github.com/ReactTraining/history) library.

-   Creation of immutable state supported by [Immer](https://github.com/immerjs/immer).

### Front end development features

-   Code linting and formatting with [ESlint](https://github.com/eslint/eslint), [Prettier](https://github.com/prettier/prettier) and [EditorConfig](https://editorconfig.org/).

-   Root import supported by [babel-plugin-root-import](https://github.com/entwicklerstube/babel-plugin-root-import).

-   App inspecting powered by [Reactotron](https://github.com/infinitered/reactotron).

## Mobile Application

Mobile application (**Android** only, for now) written in [React Native](https://facebook.github.io/react-native/). The official repository can be found [here](https://github.com/brunocrocomo/meetapp-mobile).

### How to run the mobile application?

As prerequisite you need to have an Android mobile device connected to your computer or an Android emulator running (such as provided by AVD, Genymotion, etc.).

Also, you will need to follow the instructions of the official React Native docs to setup your environment to get started. The steps required are described at React Native CLI Quickstart section of [this page](https://facebook.github.io/react-native/docs/getting-started) - under your Development OS and Target OS setted as Android.

Once you're ready to go, you just need to:

1. Clone this repository (if you haven't yet):

```
$ git clone https://github.com/brunocrocomo/gostack-certification-meetapp.git
```

2. Move into `mobile` directory:

```
$ cd gostack-certification-meetapp/mobile
```

3. Run `yarn` to install the dependencies

```
$ yarn
```

4. Move into `android/app` directory:

```
$ cd android/app
```

5. Generate the `debug.keystore` file running the following command (alternatively, you can download this file from [this link](https://raw.githubusercontent.com/facebook/react-native/master/template/android/app/debug.keystore) and place inside this folder):

```
keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000
```

6. Move back to the `meetapp-mobile` directory:

```
$ cd ../..
```

7. Adjust the address of the back end changing the value of `baseURL` in `src/services/api.js` file (if needed).

8. Install the application on the device or emulator:

```
$ react-native run-android
```

If you got some build/install errors, it may be a good idea to clear the `gradle` cache running the command below before trying to install the application again:

```
$ cd android

$ ./gradlew clean
```

9. Once the application is installed and you want to run it again, you just need to run the following command:

```
$ react-native start
```

or, if you want to reset the application cache:

```
$ react-native start --reset-cache
```

### Mobile application production features

-   Screens navigation powered by [React Navigation](https://github.com/react-navigation/react-navigation).

-   Styled componentization supported by [styled-components](https://github.com/styled-components/styled-components) and [polished](https://github.com/styled-components/polished) libraries.

-   State management and side effects supported by [Redux](https://github.com/reduxjs/redux) and [Redux-Saga](https://github.com/redux-saga/redux-saga).

-   Persist of redux store with [Redux Persist](https://github.com/rt2zz/redux-persist).

-   HTTP requests with [Axios](https://github.com/axios/axios) client.

-   Stylish interfaces powered by [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons) and [React Native Linear Gradient](https://github.com/react-native-community/react-native-linear-gradient).

-   Stylish notifications powered by [React Native Snackbar](https://github.com/cooperka/react-native-snackbar).

-   Object schema validation with [Yup](https://github.com/jquense/yup) library.

-   Date and time formatting and validation with [date-fns](https://github.com/date-fns/date-fns) library.

-   Creation of immutable state supported by [Immer](https://github.com/immerjs/immer).

### Mobile application development features

-   Code linting and formatting with [ESlint](https://github.com/eslint/eslint), [Prettier](https://github.com/prettier/prettier) and [EditorConfig](https://editorconfig.org/).

-   Root import supported by [babel-plugin-root-import](https://github.com/entwicklerstube/babel-plugin-root-import).

-   App inspecting powered by [Reactotron](https://github.com/infinitered/reactotron).
