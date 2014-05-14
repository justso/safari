/*jslint es5:true, white:false */
/*globals DRT,  */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
DRT.S.self.tab.dispatchMessage('say', {
    parse: DRT.context + ':finish',
});

function DR_check() {
    var s0, s1;
    s0 = DRT.s;

    if (s0) {
        s1 = DRT.W.top.WinIFrame1.Content1.DRT.s;

        if (s0 === s1) {
            DRT.C.debug(s0, DRT.W);
        }
    }
}

DRT.W.setInterval(DR_check, 3333);
