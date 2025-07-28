# To Do List

This is a project app, created with the MERN stack (MongoDB, Express js, React and Node.js) for creating, saving and editing lists. 

## Main Menu

The Main Menu includes two primary options—Create List and View Your Lists—along with Login/Signup access and an Information button.

<img width="829" height="760" alt="main_menu" src="https://github.com/user-attachments/assets/630fa94c-e93a-499b-af7a-5b0bc93091f9" />

It is mandatory to login/sign up as a user, to be able to create and save a list. Initially, the app was created with a local storage and not with a database and the user could save his information and lists to the browser. But, that was changed, making way to a more flexible approach, where the user could access his lists in any device he chose to. If the user doesn't login / sign up, a prompt will appear when he'll try to access the app components: 

<img width="548" height="607" alt="prompt" src="https://github.com/user-attachments/assets/d1826dfc-c6ab-4dd5-b070-d3d6d247e1c0" />

To Login, the user can simply tap the login button option. There, he will be guided to a modal, where he can either login as a default user, or log in with his personal information (name, email and password).

<img width="1001" height="751" alt="login" src="https://github.com/user-attachments/assets/610dd122-d28a-42fb-9375-28f47f2dc8ad" />

If the user doesn't have an account, he can simply tap on the Sign Up button, where he can create his own account. All passwords in the To-Do-List are securely encrypted, ensuring that your information remains protected and eliminating any risk of unauthorized access.

<img width="747" height="731" alt="signup" src="https://github.com/user-attachments/assets/2b76875b-ee15-407e-8d64-d7a4f239a0e9" />

After the user has successfully logged in / signed up , the login button will display his name, prompting him to access and edit his lists.

<img width="883" height="737" alt="mainmenu_default" src="https://github.com/user-attachments/assets/bef720eb-2d6a-4adc-b7a1-6103447d8f66" />



### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
