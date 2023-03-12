crtg_rta_clickforce = '';

    (function()
    {
        var bodies = document.getElementsByTagName('body');
        var img = document.createElement('img');
        img.width = 0;
        img.height = 0;
        img.style.display = 'none';
        img.async = true;
        img.src = '//clg.doublemax.net/adserver/criteo/setCookie?crtg_rta_clickforce=';
        if (bodies.length > 0)
            bodies[0].appendChild(img);
    })();
