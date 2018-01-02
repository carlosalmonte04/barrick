# Vote Barrick Wordpress App

This app was made using Wordpress, React and Redux.

## Workflow as follows:

1. App component mounts.
2. Starts request to Wordpress API for content (acf - Advanced Custom Fields) -- Content for the entire website comes in this initial and only request.
3. After content is received, it is stored on redux state and dispersed throughout the app by enabling `dataReady` flag on `App` component's state.

## Important keypoints
1. App can be ran three ways.
  Production: http://barrick.herokuapp.com
  Development: http://localhost/barrick
  React Development: http://localhost:<desired port || 3000>

2. React Development has access to hot reload and allows for faster development of the app. However, this environment is limited to the themes scope in Wordpress.
3. Development mode simulates production as close as possible. It still needs to run on a React production bundle. **A production bundle needs to be created for ANY changes to be reflected on the app using http://localhost/barrick**
4. Production is production.

## Requirements:
1. Apache server
2. MySQL
3. PHP
All of the above included in XAMPP (Linux, Apache, MariaDB, PHP and Pearl bundle) which can be downloaded (https://www.apachefriends.org/download.html "here")
4. Node
5. Environment variables needed to connect to database


## To run:
1. Download this repo
2. Place the folder of the repo in your `htdocs` folder created by the XAMPP application (usually found in the root or `/applications/XAMPP/htdocs`)
3. Place environment file `.env.php` (need to ask developer for this file) in root of repo.
4. Start your servers using the XAMPP application
5. In your browser you can navigate to http://localhost/barrick

## To run in React Development:
1. In the repo folder run `sh start_development.sh`.

## Conclusion

Any problems feel free to get in touch

