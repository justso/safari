C.log('main', D.title);

S.application.addEventListener('message', function (event) {
    if (event.name == 'say') {
        C.debug('message say', event, JSON.stringify(event.message));
    }
}, true);
