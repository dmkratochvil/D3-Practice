# pharmerit-vue-starter
Starter app for Vue.js projects with Pharmerit branding used by the following demo apps:

1. [Main GUI Services Site] https://apps.pharmerit.com/home.html
2. [Cost Effectiveness Analysis Demo App] https://apps.pharmerit.com/cea/
3. [Interactive Value Communication Compendia Demo App] https://apps.pharmerit.com/vcc/
4. [Interactive Chart Review Demo App] https://apps.pharmerit.com/mrsa/
5. [Pharmerit Q-TWiST Benchmarking Tool] https://apps.pharmerit.com/qtwist/
6. [Interactive Network Meta-Analysis Demo Tool] http://rapps.pharmerit.com/hivnma/

## Basic Instructions:

1. Clone from Pharmerit Github Account, from command line type: git clone https://github.com/Pharmerit/pharmerit-vue-starter.git
2. From terminal (or command line) within cloned directory, type: npm install to install dependencies included in package.json
3. Unzip bootstrapscss.zip file within cloned directory, then paste and overwrite scss folder in: \node_modules\bootstrap\
3. From terminal (or command line) within cloned directory, type: npm run dev to launch starter app in your default web browser

## Dependencies:

Starter app uses the following dependencies (these are automatically included when completing step 2 above):

* [Vue.js 2.0] https://vuejs.org/v2/guide/ 
* [Vue Router] https://router.vuejs.org/ 
* [Vuex] https://vuex.vuejs.org/ 
* [Bootstrap Vue] https://bootstrap-vue.js.org/ 
* [Bootstrap 4] http://getbootstrap.com 
* [Vue Awesome] https://github.com/Justineo/vue-awesome 
* [Webpack] https://webpack.js.org/ 

## Additional Notes:

* Starter app requires node.js to be installed.
* Vuex store object and Vue router objects are stored are included in main.js, but can be setup as external modules and imported into main.js
* Several utility filters are included in the main.js file for convenient decimal and currency formatting
* Do note remove IE 11 hacks included at top of main.js file
