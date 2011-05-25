var injectOr = function(event) {};

document.addEventListener('beforeload', function(event) { }, true);

safari.self.addEventListener("message", function(event) {
    if (event.name === "injectOr") {
        injectOr(event);
    }
}, true);

window.status = 'Barkode does not do much yet';

window.hiMom = function (){
    alert('hi mom')
}
safari.self.addEventListener("message", function(event) {
    if (event.name === "injectOr") {
        injectOr(event);
    }
}, true);




