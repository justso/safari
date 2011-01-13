var players = {};

document.addEventListener('beforeload', function(event) { }, true);

var injectOr = function(event) {};

safari.self.addEventListener("message", function(event) {
    if (event.name === "injectOr") {
        injectOr(event);
    }
}, true);
