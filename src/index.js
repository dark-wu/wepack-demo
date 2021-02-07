import _ from 'loadsh';
import './style.css';
import qrcode from './qrcode.jpg';
// import QRCode from './QRCode.jpg';
import printMe from './print.js';
function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    btn.innerHTML = 'Click me and check the console!!!!';
    btn.onclick = printMe;
    var img = new Image(200, 200);
    img.src = qrcode;
    element.appendChild(img);
    element.appendChild(btn);
    return element;
}
// document.body.appendChild(component());
var element = component();
document.body.appendChild(element);
if (module.hot) {
    module.hot.accept('./print.js', () => {
        console.log('Accepting the updated printMe module!');
        printMe();
        document.body.removeChild(element);
        element = component();
        document.body.appendChild(element);
    })
}