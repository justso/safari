/*jslint es5:true, white:false */
/*globals DRT, W, C */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
DRT.log('finish');

DRT.domsay({
    str: 'finish parse',
});

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function minutes(n) {
    n = 1000 * 60 * n;
    return n;
}

function getJob1() {
    var w = false;

    if (DRT.s && W.top.WinIFrame1) {
        w = W.top.WinIFrame1.Content1;
    }
    return w;
}

function makeInterval(ctx, fn, n) {
    var t;

    if (!ctx || !ctx.setTimeout) {
        throw new Error('First arg s/b a window context');
    }

    function _start() {
        ctx.setTimeout(fn, 1000);
        t = ctx.setInterval(fn, n);
        return this.stop;
    }

    function _stop() {
        ctx.clearInterval(t);
        t = 0;
        return this.start;
    }

    function _toggle() {
        return t ? this.start() : this.stop();
    }

    return {
        start: _start,
        stop: _stop,
        toggle: _toggle,
    };
}

W.setTimeout(function () {
    var countdown, m, n, t, tick, w;

    w = getJob1();
    m = 3;
    n = 0;
    t = new Date().toLocaleTimeString();

    countdown = function () {
        n = n % m;
        this.document.title = (m - n++) + ':' + t;
    };

    if (w) {
        C.debug('gotcha!', w);

        tick = makeInterval(W.top, countdown, minutes(1));
        tick.start();

        W.setInterval(function () {
            DRT.domsay('gotcha!');

            tick.stop();

            w.location.reload();
        }, minutes(m));

        C.debug('RefreshPage in', minutes(m));
    }

}, 999);

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
