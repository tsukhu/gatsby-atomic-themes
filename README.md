# gatsby-atomic-themes

This project is about exploring the new feature from Gatsby called "Themes". The idea is the explore the possibility to break down the gatsby site creating into the smallest maintainable atomic component or components so that there is a clear separation of concerns from the project configuration to the actual application being built.

## Steps Followed so far

1. Create a base theme using gatsby cli called "core-theme"
2. Create another sub project called "demo-app".

-	Add the dependencies for `gatsby`,`react`,`react-dom`,`core-theme`
- Create a file gatsby-config.js and add `core-theme` as an experimental dependency
