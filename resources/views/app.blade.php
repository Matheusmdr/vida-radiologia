<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

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
    @inertia
</body>

</html>