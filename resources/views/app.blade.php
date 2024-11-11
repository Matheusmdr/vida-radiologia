<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Vida Radiologia') }}</title>

    <!-- Google Tag Manager -->
    <script>
        (function(w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-W72HW9CC');
    </script>
    <!-- End Google Tag Manager -->

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">

    <meta name="description" content="A Vida Radiologia conta com equipamentos de última geração, uma equipe de colaboradores treinados e um corpo clínico formado por profissionais especializados e altamente capacitados para oferecer um serviço de excelência em exames de imagens.">
    <meta property="og:locale" content="pt_BR" />
    <meta property="og:type" content="website" />
    <meta
        property="og:title"
        content="Vida Radiologia" />
    <meta
        property="og:description"
        content="A Vida Radiologia conta com equipamentos de última geração, uma equipe de colaboradores treinados e um corpo clínico formado por profissionais especializados e altamente capacitados para oferecer um serviço de excelência em exames de imagens." />

    <meta property="og:site_name" content="Vida Radiologia" />
    <meta
        name="twitter:title"
        content="Vida Radiologia" />
    <meta
        name="twitter:description"
        content="A Vida Radiologia conta com equipamentos de última geração, uma equipe de colaboradores treinados e um corpo clínico formado por profissionais especializados e altamente capacitados para oferecer um serviço de excelência em exames de imagens.." />
    <meta name="twitter:card" content="summary" />

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W72HW9CC"
            height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    @inertia
</body>

</html>