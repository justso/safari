/*jslint es5:true, white:false */
/*globals DRT,  */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
if (DRT.debug) {
    DRT.C.debug('main', DRT.D.title);
}

DRT.S.application.addEventListener('message', function (event) {
    if (event.name == 'say') {
        DRT.C.debug('message say', event, JSON.stringify(event.message));
    }
}, true);
