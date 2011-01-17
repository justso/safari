function Read_Later() {
    alert(this)
    var d = document,
    z = d.createElement('scr' + 'ipt'),
    b = d.body,
    l = d.location;
    try {
        if (!b) throw (0);
        d.title = '(Saving...) ' + d.title;
        z.setAttribute('src', l.protocol + '//www.instapaper.com/j/qdGI5b8ldGaZ?u=' + encodeURIComponent(l.href) + '&t=' + (new Date().getTime()));
        b.appendChild(z);
    }
    catch(e) {
        alert('Please wait until the page has loaded.');
    }
    return 0
}
function f1(){
    console.log('this',this);
    return 0;
}

function f2(){
    console.log('safari',safari);
    return 0;
}

function f3(){
    console.log('this.parent',this.parent);
    return 0;
}

function f4(){
    console.log();
    return 0;
}

function f5(){
    console.log('this.parent.parent',this.parent.parent);
    return 0;
}

function f6(){
    const bars = safari.extension.bars;
    const activeBrowserWindow = safari.application.activeBrowserWindow;
    for (var i = 0; i < bars.length; ++i) {
        var bar = bars[i];
        console.log(bar.identifier)
    }
    return 0;
}