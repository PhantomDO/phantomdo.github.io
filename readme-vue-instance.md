## Fundamentals: create a Vue Instance
Click to view the [Repository](https://bitbucket.org/fbhood/how-to-vuejs/src/master/2-create-vue-instance/)

Click to view the [YouTube-Video](https://youtu.be/gBJaL7Jqh4w)

Once VueJS is installed, or included via its CDN, we can create a Vue instance, and we do that 
using the `new Vue()` function. This function accepts an object of options.
Reading the documentation you will see the vue instance stored often inside a variable called `vm`,
but we can call it anything we like, I'll call it `app` during this guide.

So now, inside the main.js file we need to create a variable and, store in it the Vue instance like so:
```js
let app = new Vue({
    // all options goes here
})
```
The object we pass to the Vue instance is called options object.
Inside the options object we can add all the options described in the Vue API reference pages to build our application. The options object has properties divided in multiple sections: 
- Data 
- DOM 
- Life Cycle Hooks 
- Assets
- Composition 
- Misc categories 

The first property we need to build our Vue application is used to connect Vue with a root DOM element, then we will need some data options to work with.

Let's start by connection the Vue instance with a root DOM element.

### Options/DOM: Select the root DOM element
Documentation:[https://vuejs.org/v2/api/#Options-DOM]

The Options/DOM API gives us an `el` property that we can use to select an existing DOM element, that Vue will use to mount our application instance. 

The `el` property accepts a string that contains a CSS selector for the element or directly a DOM element.
NOTE: Vue discourages using the body or HTML tags and suggests to use a different element as mounting point.

Let's do it, inside the body of the index.html file we need to put the following code:

```html
    <div id="app">
    </div> 
```
Now we have a root element that we can use to connect the Vue instance.
Back inside the main.js file, let's select this element inside the options object. 
We can now use the `el` property to select the element we created with an id of `app`.

```js
let app = new Vue({
    // all options go here
    el: "#app",
})
```

We now have an element to work with, we can move to the next step and, add to the options object the data object.


### Options/Data: Add the data object (or function when used in a component)
Documentation: [https://vuejs.org/v2/api/#Options-Data]

When a new instance is created it adds all properties found in its data object to the Vue reactivity system. And, when a value in the data object changes, the view will reflect these changes. 
This is at the base of the VueJS reactivity system. 

To explain it let's see a practical example.

#### Create a data object
Inside the main.js file we can create a data property that has an object as its value, like so:
```js

let app = new Vue({
    // all options go here
    el: "#app",
    data: {}
})
```
The data object can be defined directly inside the vue instance like in the code above or, outside the instance like in the code below. 

```js
let dataObject = {}
let app = new Vue({
    // all options go here
    el: "#app",
    data: dataObject
})
```

You can pick the one you like.
#### Add properties to the Data Object
Since VueJs is a JavaScript framework, we need to remember that what we know about JavaScript is still 
valuable here and surely can be used. 
VueJs is just a javascript object that has a number of methods and properties that we can use to simplify 
and speed up our workflow.

Let's add some properties to our data object to see how it works.
```js
// Create a data object
let app = new Vue({
    el:"#app",
    // create a vue instance, add the data property and the dataObject created
    data: {
        alert: "This is an alert message! ",
        projects: [
            {title: "portfolio", languages: ["HTML", "CSS", "VueJS"]},
            {title: "grocery shop", languages: ["HTML", "CSS", "PHP"]},
            {title: "blog", languages: ["HTML", "CSS", "PHP"]},
            {title: "automation script", languages: ["Python"]},
            {title: "eCommerce", languages: ["HTML", "CSS", "PHP"]},
        ];
    }
})
```
With the code above, we simply add two properties to the data object: an `alert` property and a  `projects` property. 
The alert property just a string while the projects property is an array of objects. 
Now that we have some data to work with, let's see how we can access and modify their values.

#### Manipulate properties in the data object
We can access and manipulate the properties of a data object using the variable that contains the Vue instance `app` and then, reference the properties using the dot notation, like that `app.alert`. 

In the browser if we open the console we can see that when we write `app` we get the Vue instance object.
So, like any other object with the dot notation we get its properties and methods.

Let's try this out inside the console:
```js
// Access the alert property in the data object
app.alert // This is an alert message!
// update a data property value
app.alert = "This is a new alert message!" 
app.projects
```
The code above does three simple things:
- the first line access the `alert` property and prints its content "this is an alert message"
- the second line assigns a new value to the `alert` property with the equal operator
- finally the third line returns the value of the projects array. 

We can also access to the entire data object using the following shortcuts $data or _data

Back in the console:
```js
// Access the entrie data object
app.$data // {__ob__: Observer} option 1
app._data // {__ob__: Observer} option 2

```

### Options Data Methods
The Vue instance gives developers access to a number of properties and methods.
Default methods and properties can be accessed using the `$` sign. It is used to differentiate 
Vue defined methods them from those defined by the user.

There are a number of instance methods and properties predefined split into four different categories:
- Instance Properties
- Instance Methods / Data
- Instance Methods / Events
- Instance Methods / life cycle hooks

For instance with the following code we can get the `data` and `options` objects or access the `watch` or the `on` methods. 
```js
app.$data // returns the data object
app.$options // returns the options object
app.$watch() // function that watched for changes on the vue instance
app.$on() // listen for a custom event on the vue instance
```
I won't dive deeper into that since it's out of the scope of this guide, but if you are interested and want to learn more, here is the documentation: [https://vuejs.org/v2/api/#Instance-Properties]

### Life Cycle Hooks
Vue gives to the user access to a series of functions called life cycle hooks. They allow developers to run code at specific stages of the Vue initialization steps.

Inside all life cycle hooks we have access to their `this` variable that points to the vue instance. 
We will see that in the future chapters but for now, this is a short summary of the available hooks and, what they let us do:

- beforeCreate (we can run code before the vue instance is created)
- created (we can run code after the vue instance is created )
- beforeMount (we can run code before our element is mounted to the DOM)
- mounted (run code when the element is mounted to the DOM)
- beforeUpdate (run code before values are updated in the DOM)
- updated (run code after values in the DOM have been updated)
- beforeDestroy (run code before an instance is destroyed)
- destroyed (run code when an instance is destroyed)

During the course we will often use the mounted hook, if you are curious to learn more about this topic,
I suggest you to look at the diagram in the documentation first.
Life cycle Hooks diagram: [https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram]
