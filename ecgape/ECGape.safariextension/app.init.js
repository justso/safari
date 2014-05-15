/*jslint es5:true, white:false */
/*globals window,  */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
var W = window,
    C = W.console,
    DRT = ({
    D: W.document,
    S: W.safari,
    L: W.location,
    app: W.safari.application,
    h: W.window.location.href,
    s: W.window.location.search,
    tab: W.safari.self.tab,
    context: null,
    debug: null,
    title: null,
    conf: function (context, debug) {
        this.context = context;
        this.debug = debug;
        this.title = this.D.title;

        this.conf = function inited() {
            C.error('already inited');
        };
        return this;
    },
    log: function (msg) {
        this.title = this.D.title;

        if (this.debug) {
            C.warn(0, (this.context + ' ' + msg), this, (W === W.top ? 'top' : this.h));
        }
    },
}.conf('[APP]', 1));

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
