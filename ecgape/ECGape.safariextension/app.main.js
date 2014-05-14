/*jslint es5:true, white:false */
/*globals DRT, W */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
DRT.log('main');

DRT.app.addEventListener('message', function (event, etc) {
    var data = event.message;

    if (event.name === 'say') {
        DRT.C.debug(0, data.context + ' says', JSON.stringify(data.object), event);
    }
}, true);
