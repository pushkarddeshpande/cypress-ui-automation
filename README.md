/* To Run Cypress Tests via UI Runner with Browser Chrome - headed */

npx cypress open --browser=chrome 

/* To Run Cypress Tests via CLI with Default Browser Electron - headless*/

npx cypress run 

/* To Run Cypress Tests via CLI with Browser Chrome - headless */

npx cypress run --browser=chrome

/* To get allure report - check script in package.json */ 

npm run allure-report 

/* To get mochawesome report - check script in package.json */ 

npm run mochawesome-merge