import {about}  from "../templates/about.js";
import { categories } from "../templates/categories.js";
import { index } from "../templates/index.js";
import { missing } from "../templates/404.js";
document.addEventListener("click", (event)=>{
    const {target} = event
    if(!target.matches("a")){
        return;
    }
    
    urlRoute(event)
})
    const urlRoutes = {
        404:{
            template: '/templates/404.html',
            title: '404',
            description: 'This is error page',
            content: missing
        },
        '/':{
            template: '/templates/index.html',
            title:'Home',
            description:'This is the home page',
            content: index
        },
        '/index.html':{
            template: '/templates/index.html',
            title:'Home',
            description:'This is the home page',
            content: index
        },
        '/about':{
            template: '/templates/about.js',
            title:'About us',
            description:'This is about page',
            content : about
        },
        '/categories':{
            template: '/templates/categories.js',
            title:'Categories',
            description:'This is categories page',
            content: categories
        }
    }
const urlRoute = (event) => {
    event.preventDefault();
    window.history.pushState({}, "", event.target.href)
    urlLocationHandler();
}

const urlLocationHandler = () => {
    const location = window.location.pathname // get pathname of location
    if(location.length == 0){
        location = '/'
    }
    const route = urlRoutes[location] || urlRoutes[404]
    const html =  route.content;
    document.getElementById('content').innerHTML = html;
    document.title = route.title
    document.querySelector('meta[name="description"]').setAttribute('content', route.description)
}
window.onpopstate = urlLocationHandler;
window.route = urlRoute;
urlLocationHandler();
