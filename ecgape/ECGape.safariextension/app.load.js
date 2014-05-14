/*jslint es5:true, white:false */
/*globals window,  */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
var W = window,
    DRT = ({
    D: W.document,
    C: W.console,
    S: W.safari,
    L: W.location,
    app: W.safari.application,
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
            this.C.error('already inited');
        };
        return this;
    },
    log: function (x) {
        this.title = this.D.title;

        if (this.debug) {
            this.C.warn(this.context + ' ' + x, this, this.L.href, this.u);
        }
    },
}.conf('[EXT]', 1));
