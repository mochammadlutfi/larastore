<html>

<head>
    <title>Laporan Retur <?php echo e(\Carbon\Carbon::parse($mulai)->translatedFormat('d m Y')); ?> - <?php echo e(\Carbon\Carbon::parse($selesai)->translatedFormat('d m Y')); ?></title>

    <link rel="stylesheet" href="/css/bootstrap.css">
</head>

<body>
    <div class="container">
        <table width="100%">
            <tr>
                <td width="100px" class="text-center">
                    <img src="/images/logo/logo.png" width="80pt"/>
                </td>
                <td class="text-center">
                    <h1 class="h4 text-center" style="font-size: 20pt;font-weight:bold;">TOKO KOMBET</h1>
                    <p class="mb-0" style="font-size: 14pt;margin-bottom:15px">Mahato, Tambusai Utara, Kab. Rokan Hulu, Riau</p>
                </td>
            </tr>
        </table>
        <hr/>
        <h2 class="h3 text-center" style="font-weight: bold; margin-top:0px">LAPORAN Retur</h2>
        <h2 class="h4 text-center" style="font-weight: bold; margin-top:0px">
            Periode : <?php echo e(\Carbon\Carbon::parse($mulai)->translatedFormat('d F Y')); ?> - <?php echo e(\Carbon\Carbon::parse($selesai)->translatedFormat('d F Y')); ?>

        </h2>
        <h2 class="h4 text-center" style="font-weight: bold; margin-top:0px">
            Status : <?php echo e($status == "" ? "Semua Status" : $status); ?>

        </h2>
        <table class="table v-align-center table-bordered datatable w-100">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nomor</th>
                    <th>Nomor Pesanan</th>
                    <th>Pelanggan</th>
                    <th>Tanggal</th>
                    <th>Jumlah Produk</th>
                    <th>Total Pesanan</th>
                    <?php if($status == 'Semua'): ?>
                    <th>Status</th>
                    <?php endif; ?>
                </tr>
            </thead>
            <tbody>
                <?php
                    $no = 1;
                ?>
                <?php $__currentLoopData = $data; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $a): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <tr>
                        <td><?php echo e($no++); ?></td>
                        <td><?php echo e($a->nomor); ?></td>
                        <td><?php echo e($a->order->nomor); ?></td>
                        <td><?php echo e($a->customer->name); ?></td>
                        <td><?php echo e(\Carbon\Carbon::parse($a->date)->translatedFormat('d F Y')); ?></td>
                        <td><?php echo e($a->lines_count); ?> Produk</td>
                        <td>Rp <?php echo e(number_format($a->order->grand_total,0,',','.')); ?></td>
                        
                        <?php if($status == 'Semua'): ?>
                        <td>
                            <?php if($a->status == 'pending'): ?>
                            Pending
                            <?php elseif($a->status == 'confirm'): ?>
                            Disetujui
                            <?php elseif($a->status == 'reject'): ?>
                            Ditolak
                            <?php endif; ?>
                        </td>
                        <?php endif; ?>
                    </tr>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </tbody>
        </table>
    </div>

</body>

</html><?php /**PATH D:\laragon\www\kombet\resources\views/report/sale/return.blade.php ENDPATH**/ ?>