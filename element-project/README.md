# element-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

1. css modules

    stylus

        style -> npm install stylus stylus-loader -D

2. vue-router

    vue.use(VueRouter)

        npm install vue-router@0.7.13 -D

3. vue-resource

    npm i vue-resource@1.0.1 -D

    vue.use(VueResource)

        $http.get(url, data).then(response => {// success}, response => {// error})


