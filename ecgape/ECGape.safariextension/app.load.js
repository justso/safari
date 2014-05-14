/*jslint es5:true, white:false */
/*globals window,  */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
var DRT = ({
    W: window,
    D: window.document,
    C: window.console,
    S: window.safari,
    L: window.location,
    app: window.safari.application,
    s: window.window.location.search,
    tab: window.safari.self.tab,
    context: null,
    debug: null,
    conf: function (context, debug) {
        this.context = context;
        this.debug = debug;

        this.conf = function inited() {
            this.C.error('already inited');
        };
        if (this.debug) {
            this.C.warn('DRT', this, context, this.L.href);
        }
        return this;
    },
}.conf('EXT', 1));

if (DRT.debug) {
    DRT.C.debug('load', DRT.D.title);
}
