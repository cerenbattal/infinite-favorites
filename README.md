# Project Title

Infinite-favorites

## Table of Content:

- [About The App](#about-the-app)
- [Technologies](#technologies)
- [Setup](#setup)
- [Available Scripts](#available-scripts)
- [Status](#status)
- [Screenshots](#screenshots)
- [Further development](#further-development)
- [Credits](#credits)
- [License](#license)

## About The App

Infinite-favorites (infinite-fav!) is a basic React app which supports infinite scroll and favoritable items.
Capabilites:
- User can search images by giving keywords.
- Fetching data was made
with Flickr API.
- When user scrolls to the bottom, new images will be loaded. User can favorite any image, by hovering and clicking the image. User can view favorited items on 'Profile' page. - User can also see profile information there.
- App has responsive design.

## Technologies

I used `HTML`, `CSS`, `React`, `React-Router`, `ESLint`, `Prettier`, `React Testing Library`, `Jest`.

## Setup

- download or clone the repository
- run `npm install`
- run `npm start`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run test:coverage`

Launches the test with code coverage.

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

### `npm run lint`

To lint the project

### `npm run lint:fix`

To lint and also fix errors in the project

### `npm run format`

To format the code with prettier

## Status

Project is done.

## Screenshots

### Desktop
![Desktop 1](https://github.com/cerenbattal/infinite-favorites/tree/main/src/assets/screenshots/desktop.png?raw=true)
![Desktop 2](https://github.com/cerenbattal/infinite-favorites/tree/main/src/assets/screenshots/desktop2.png?raw=true)
### Tablet
![ipad](https://github.com/cerenbattal/infinite-favorites/tree/main/src/assets/screenshots/ipad.png?raw=true)
![ipad mini](https://github.com/cerenbattal/infinite-favorites/tree/main/src/assets/screenshots/ipadmini.png?raw=true)
![ipad mini 2](https://github.com/cerenbattal/infinite-favorites/tree/main/src/assets/screenshots/ipadmini2.png?raw=true)
![ipad pro](https://github.com/cerenbattal/infinite-favorites/tree/main/src/assets/screenshots/ipadpro.png?raw=true)
![ipad pro 2](https://github.com/cerenbattal/infinite-favorites/tree/main/src/assets/screenshots/ipadpro2.png?raw=true)
### Mobile
![iPhone 5/SE](https://github.com/cerenbattal/infinite-favorites/tree/main/src/assets/screenshots/iphone5-se.png?raw=true)
![iPhone 6/7/8](https://github.com/cerenbattal/infinite-favorites/tree/main/src/assets/screenshots/iphone6-7-8.png?raw=true)
![iPhone 6/7/8 2](https://github.com/cerenbattal/infinite-favorites/tree/main/src/assets/screenshots/iphone6-7-8-2.png?raw=true)
![iPhone 12 Pro](https://github.com/cerenbattal/infinite-favorites/tree/main/src/assets/screenshots/iPhone12pro.png?raw=true)
![iPhone 12 Pro 2](https://github.com/cerenbattal/infinite-favorites/tree/main/src/assets/screenshots/iPhone12pro-2.png?raw=true)
![iPhone X](https://github.com/cerenbattal/infinite-favorites/tree/main/src/assets/screenshots/iphonex.png?raw=true)

### Custom
![329x1061](https://github.com/cerenbattal/infinite-favorites/tree/main/src/assets/screenshots/custom-329x1061.png?raw=true)
![737x1061](https://github.com/cerenbattal/infinite-favorites/tree/main/src/assets/screenshots/custom-737x1061.png?raw=true)
![1133x1060](https://github.com/cerenbattal/infinite-favorites/tree/main/src/assets/screenshots/custom-1133x1060.png?raw=true)


## Further development

### Ideas:
- Dark/Light theme support with styled components can be added.
- Not Found page can be designed.
- I would add internationalization.
- Redux Toolkit and Redux Persist can be used for state management and to not lose current state on page reload.
- User management system can be added. I have already defined one user - me - and created a Profile page. If I had more time, I would definetely extend users and user management.
- If I had more time, I would try to create a little Figma file and design my components and their states. For example:
  - Define design system colors
  - Hover, active states for buttons and input field
  - Define fonts
  - Illustrate user flows
- If I had more time, I would improve network calls and hover design on image cards.
- If I look to the reference screenshot that you provided me on the github page, it can be seen that all images has the same width and height. When I fetch the images, they are all different width and height and I had to not break the width/height ratio of the images. It is why my image cards are little different with your screenshot.
- Lastly, if I had more time, I would research more ideas about lazy loading images.
## Credits

List of contributors:

- [Ceren Battal](https://www.github.com/cerenbattal)

## License

MIT license @[Ceren Battal](https://www.github.com/cerenbattal)
