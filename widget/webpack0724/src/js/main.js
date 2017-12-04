//main.js 

//require("!style-loader!css-loader!./main.css");
//require("../less/main.css");//webpack src/main.js js/bundle.js --module-bind 'css=style-loader!css-loader'


require("../less/main.css");
require("../less/a.less");
require("../less/b.less");


import _ from 'lodash';
import printMe from './Greeter.js';


function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    var img = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    btn.innerHTML = '请点击，看控制台222!';
    btn.onclick = printMe;
    btn.className ='btn';
    img.className ='img1';
    element.classList.add('photo');
    
    element.appendChild(btn);
    element.appendChild(img);
    return element;
}

document.body.appendChild(component());