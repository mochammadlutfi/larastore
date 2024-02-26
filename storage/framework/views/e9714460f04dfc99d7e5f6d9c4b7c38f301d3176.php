<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
        
        <link rel="shortcut icon" href="/images/favicons/favicon.png">
        <link rel="icon" type="image/png" sizes="192x192" href="/images/favicons/favicon-192x192.png">
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/apple-touch-icon-180x180.png">
        <!-- Scripts -->
        <?php echo app('Tightenco\Ziggy\BladeRouteGenerator')->generate(); ?>
        <?php if(Request::segment(1) == 'admin'): ?>
            <?php echo app('Illuminate\Foundation\Vite')(['resources/js/admin.js','resources/styles/app.scss']); ?>
        <?php else: ?>
            <?php echo app('Illuminate\Foundation\Vite')(['resources/js/app.js','resources/styles/app.scss']); ?>
        <?php endif; ?>
        <?php if (!isset($__inertiaSsrDispatched)) { $__inertiaSsrDispatched = true; $__inertiaSsrResponse = app(\Inertia\Ssr\Gateway::class)->dispatch($page); }  if ($__inertiaSsrResponse) { echo $__inertiaSsrResponse->head; } ?>
        
        <script src="https://app.sandbox.midtrans.com/snap/snap.js" data-client-key="SB-Mid-client-fLkyEMk66va4fTt0"></script>
        
    </head>
    <body class="font-sans antialiased">
        <?php if (!isset($__inertiaSsrDispatched)) { $__inertiaSsrDispatched = true; $__inertiaSsrResponse = app(\Inertia\Ssr\Gateway::class)->dispatch($page); }  if ($__inertiaSsrResponse) { echo $__inertiaSsrResponse->body; } else { ?><div id="app" data-page="<?php echo e(json_encode($page)); ?>"></div><?php } ?>
    </body>
</html>
<?php /**PATH D:\laragon\www\kombet\resources\views/app.blade.php ENDPATH**/ ?>