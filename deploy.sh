echo "Please enter commit message: "
read input_variable
cd wp-content/themes/barrick-react
npm run build:prod
cd ../../../
git add .
git commit -am "$input_variable"
git push origin master
git push heroku master