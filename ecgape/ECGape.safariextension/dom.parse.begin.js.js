var W = window, D = document, C = console, S = safari;

C.warn('DOM', D.location.href);

C.debug('this? W-D-C-S', [W === this, W, D, C, S]);

C.log('parse begin', D.title);

S.self.tab.dispatchMessage('say', {
    parse: 'begin',
});
