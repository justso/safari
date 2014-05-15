/*jslint es5:true, white:false */
/*globals DRT, W, C */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
DRT.log('main');

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

DRT.app.addEventListener('message', function (event) {
    var data = event.message;

    if (event.name === 'say') {
        C.debug(0,
            (data.context + ' says'),
            event,
            JSON.stringify(data.object)
            );
    }
}, true);

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
