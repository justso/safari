/*jslint es5:true, white:false */
/*globals DRT, W */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
DRT.log('finish');

DRT.say({
    drt: function () {
        return DRT;
    },
    str: 'finish parse',
});

function minutes(n) {
    n = 1000 * 60 * n;

    DRT.C.debug('RefreshPage in', n);

    return n;
}

W.setTimeout(function () {
    var s, w;

    if (DRT.s && W.top.WinIFrame1) {
        w = W.top.WinIFrame1.Content1;
        s = w.location.search;

        if (DRT.s === s) {
            DRT.C.debug('gotcha!', w);
            W.setInterval(function () {
                DRT.say('gotcha!');
                w.location.reload();
            }, minutes(30));
        }
    }
}, 999);
