/*jslint es5:true, white:false */
/*globals DRT, W, C */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
DRT.log('finish');

DRT.domsay({
    drt: function () {
        return DRT;
    },
    str: 'finish parse',
});

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function minutes(n) {
    n = 1000 * 60 * n;

    C.debug('RefreshPage in', n);

    return n;
}

W.setTimeout(function () {
    var s, w;

    if (DRT.s && W.top.WinIFrame1) {
        w = W.top.WinIFrame1.Content1;
        s = w.location.search;

        if (DRT.s === s) {
            C.debug('gotcha!', w);
            W.setInterval(function () {
                DRT.say('gotcha!');
                w.location.reload();
            }, minutes(30));
        }
    }
}, 999);

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
