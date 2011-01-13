var injectOr = function(event) {};

document.addEventListener('beforeload', function(event) { }, true);

safari.self.addEventListener("message", function(event) {
    if (event.name === "injectOr") {
        injectOr(event);
    }
}, true);
