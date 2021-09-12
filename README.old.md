# goit-react-hw-07-phonebook
# goit-react-hw-07-phonebook
1-npx create-react-app . --use-npm 
2-npm install react-router-dom 
3-npm install react-redux 
4-npm install @reduxjs/toolkit
4.1-npm install axios
 4.2-npm install lowdb
npm install json-server --save-dev
5-npm install redux-persist 
5.1-npm i memoizee
5.2-npm install reselect
5.3-npm install -g json-server
5.4- create fieles db.json
6-npm install --save-dev netlify-cli 
7-"predeploy":
 "npm run build",
  "deploy":
   "netlify deploy -p"
8-npx netlify init

9-npm install --save-dev prop-types 
10-npm install --save-dev eslint 
11-npx mrm@2 lint-staged
12-.prettierrc.json 
{ 
    "printWidth": 80,
     "tabWidth": 2,
      "useTabs": false,
       "semi": true,
        "singleQuote": true,
         "trailingComma": "all",
          "bracketSpacing": true,
           "jsxBracketSameLine": false,
            "arrowParens": "avoid",
             "proseWrap": "always" 
             }
13-в настройках искать codeActionsOnSave и вставить "editor.codeActionsOnSave": { "source.fixAll.eslint": true }
14-npm install node-sass --save 
15-npm i react-loader-spinner
15.1-npm i react-content-loader --save

16-.netlify.toml 
[build]
    publish = "build"

[[redirect]]
    from = "/*"
    to = "/index.html"
    status = 200
    
17-npm install modern-normalize 
18-@import 'node_modules/modern-normalize/modern-normalize.css';
19-git status- какие изменения произошли

20-npm run start
20.1-json-server --watch db.json
npm install -g serve
work
21-npm run build 
22-npm run deploy
 Published :)
23-git add *
24-git commit -m "Commit message"
25-git push origin main

https://create-react-app.dev/docs/deployment/#step-2-install-gh-pages-and-add-deploy-to-scripts-in-packagejson