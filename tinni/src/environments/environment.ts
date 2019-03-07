// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyApUNu6xrQ5adVQXtst0p_5EpIWwPobpmE",
    authDomain: "tinni-app.firebaseapp.com",
    databaseURL: "https://tinni-app.firebaseio.com",
    projectId: "tinni-app",
    storageBucket: "tinni-app.appspot.com",
    messagingSenderId: "31185382387"
  }
};

// <script src="https://www.gstatic.com/firebasejs/5.8.5/firebase.js"></script>
// <script>
//   // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyApUNu6xrQ5adVQXtst0p_5EpIWwPobpmE",
//     authDomain: "tinni-app.firebaseapp.com",
//     databaseURL: "https://tinni-app.firebaseio.com",
//     projectId: "tinni-app",
//     storageBucket: "tinni-app.appspot.com",
//     messagingSenderId: "31185382387"
//   };
//   firebase.initializeApp(config);
// </script>