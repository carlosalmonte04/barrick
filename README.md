# barrick

Project created using Wordpress + React (as template).

* Wordpress serves the template when URL is entered
* React checks URL string and adjusts itself to right state depending on URL location

## Main dependencies

* Apache
* MySQL
* PHP
  _Bundle of the three above can be downloaded (here)[https://www.apachefriends.org/download.html]_
* Node

## Recommended workflow

* With all the dependecies downloaded and working properly. Download repo and save into PHP folder (htdocs).
* `cd` into the project and run `sh start_development.sh` to start the react server.
* Develop on the react project located in `repo_folder/wp_content/themes/barrick-react`

## Troubleshooting

* Fonts on `App.css` do not work in production and cause the app to break. Comment out before deploy/ Comment back in for accurate development.
