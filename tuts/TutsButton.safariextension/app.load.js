var W = window, D = document, C = console, S = safari;

C.warn('APP', D.location.href);

C.debug('this? W-D-C-S', [W === this, W, D, C, S]);

C.log('load', D.title);
