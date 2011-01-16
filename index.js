//
function showcode(){
    $('h4.bubble').wrap('<a>').parent().click(loadcode);
}
function loadcode(){
    $(this).children().insertAfter($(this)); //  unwrap heading

    var Me = $('#blah')
    ,   root = 'Yahpaz.safariextension/inject';

    $('<div>js</div>').appendTo(Me).load(root+'.js');

    $('<hr>').appendTo(Me);

    $('css<div>').appendTo(Me).load(root+'.css',cleanup);
}
function cleanup(){
    var Me = $(this)
    ,   txt = Me.text()
    ,   reg = {
        a: new RegExp('([^\\w\\s},])\\n\\s*', 'g'),
        b: new RegExp('/\\*.+?\\*/', 'g')
    }
    txt = txt.replace(reg.a,'$1 ');
    txt = txt.replace(reg.b,'');
    Me.text('\n\n\n'+txt);
}
//
$(showcode);

