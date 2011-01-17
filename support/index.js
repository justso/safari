var code;
//
function showcode(){
    $('h4.bubble').wrap('<a>').parent().click(loadcode);
}
function loadcode(){
    console.log($(this).children().insertAfter($(this)));
    code = $('#blah').load('ECGape.safariextension/inject.css',cleanup);
}
function cleanup(){
    var txt = code.text()
    ,   reg = {
        a: new RegExp('([^\\w\\s},])\\n\\s*', 'g'),
        b: new RegExp('/\\*.+?\\*/', 'g')
    }
    txt = txt.replace(reg.a,'$1 ');
    txt = txt.replace(reg.b,'');
    code.text('\n\n\n'+txt);
}
//
$(showcode);

