# Installation/Setup
---
(install [Node.js](nodejs.org/enS))
Install Firebase tools:
```
$ npm install -g firebase-tools

```
After installing the Firebase tools, make your way to your
project directory.
Then login to Firebase with:
```
$ firebase login
```
A window will pop up and ask you to login with the google account
connected with the Firebase project.
An error you might experience is being "unable to run login in non-interactive
mode". To fix this error, add the --interactive tag after login command.

Initialize firebase:
```
$ firebase init
```
There will be pop ups, follow the directions. Select the necessary resources
this being: Firestore, Functions, and Hosting.

After this, you will have some new files in your directory.

Go into 'public/index.html' file, we are going to edit some lines.
We are going to remove the features we don't need and add the ones that we do
need. Find the lines with the scripts and add these lines under the first
script and remove the other features.
```
<script defer src="/__/firebase/7.24.0/firebase-functions.js"></script>
<script defer src="/__/firebase/7.24.0/firebase-firestore.js"></script>
```
As a result you should have these three scripts:
```
<script defer src="/__/firebase/7.24.0/firebase-app.js"></script>
<script defer src="/__/firebase/7.24.0/firebase-functions.js"></script>
<script defer src="/__/firebase/7.24.0/firebase-firestore.js"></script>
<script defer src="/__/firebase/init.js"></script>
```
To test if it worked, you can run:
```
$ firebase serve
```
A local server should show and you can paste that in your browser to reveal your
page.
