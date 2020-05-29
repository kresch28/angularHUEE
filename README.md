# angularHUEE
Team Members: Matthias Köttritsch & Katharina Resch
build command: ng serve

## Overview
A little web app, that allows you to create and see organigrams with registered users. 

### known issues:
- currently there is not functionality to add children to a node or draw lines between them in the master branch. There exists a line branch, that mostly implements that feature, but there was not enough time to really finish and polish that feature.
- the firebase config is in the main repository. This is due to the fact, that we need the firebase credentials and that is the way it is told in the official firebase docs and I have never learned a way or found a simple solution how credentials are supposed to be handled in production.
- You can drag users out of the bounds, because the drop event ignores those. Also this bug could have been fixed with a little more time to polish, similiar to the lines.

Page on Netlify: 
https://huee-angular.netlify.app
