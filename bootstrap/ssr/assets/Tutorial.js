import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./ssr.js";
import "@vue/server-renderer";
import "@inertiajs/vue3";
import "@inertiajs/vue3/server";
import "pinia";
import "lodash-unified";
import "@vue/shared";
import "@vueuse/core";
import "@element-plus/icons-vue";
import "@ctrl/tinycolor";
const _sfc_main = {
  components: {},
  props: {
    data: {
      type: Object
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_base_layout = resolveComponent("base-layout");
  _push(ssrRenderComponent(_component_base_layout, mergeProps({ title: "Panduan" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="content content-full"${_scopeId}><div class="block block-rounded block-transparent bg-primary"${_scopeId}><div class="block-content bg-black-25"${_scopeId}><div class="py-3 text-center"${_scopeId}><h1 class="h2 fw-bold text-white mb-2"${_scopeId}>Panduan Pemesanan</h1><h2 class="h5 fw-medium text-white-75"${_scopeId}>Toko Kombet</h2></div></div></div><div class="block block-rounded"${_scopeId}><div class="block-content"${_scopeId}><h3 class="fs-4"${_scopeId}>1. Pendaftaran / Register</h3><ul class="fa-ul"${_scopeId}><li${_scopeId}><i class="fa fa-check fa-li"${_scopeId}></i>Silahkan klik tombol &quot;Daftar&quot; terlebih dahulu untuk memulai register</li><li${_scopeId}><i class="fa fa-check fa-li"${_scopeId}></i>Jika belum memiliki akun, pelanggan harus membuatnya dengan mengklik opsi &quot;Daftar&quot; atau &quot;Buat Akun.&quot;</li><li${_scopeId}><i class="fa fa-check fa-li"${_scopeId}></i>Jika sudah memiliki akun, pelanggan tinggal memasukkan username dan password yang sudah didaftarkan sebelumnya</li></ul><h3 class="fs-4"${_scopeId}>2. Jelajahi Produk</h3><ul class="fa-ul"${_scopeId}><li${_scopeId}><i class="fa fa-check fa-li"${_scopeId}></i>Pelanggan dapat menjelajahi kategori produk atau menggunakan fitur pencarian untuk menemukan barang yang diinginkan</li><li${_scopeId}><i class="fa fa-check fa-li"${_scopeId}></i>Klik pada produk untuk melihat detail, deskripsi, dan harga</li></ul><h3 class="fs-4"${_scopeId}>3. Tambahkan ke Keranjang</h3><ul class="fa-ul"${_scopeId}><li${_scopeId}><i class="fa fa-check fa-li"${_scopeId}></i>Setelah memilih produk, pelanggan dapat menambahkannya ke keranjang belanja dengan mengklik tombol &quot;Tambah ke Keranjang&quot;.</li><li${_scopeId}><i class="fa fa-check fa-li"${_scopeId}></i>Keranjang belanja akan menampilkan ringkasan pesanan, dan pelanggan dapat memilih untuk melanjutkan berbelanja atau menuju checkout.</li></ul><h3 class="fs-4"${_scopeId}>4. Proses Checkout</h3><ul class="fa-ul"${_scopeId}><li${_scopeId}><i class="fa fa-check fa-li"${_scopeId}></i>Pada halaman checkout, pelanggan diminta untuk memeriksa dan memastikan pesanan mereka.</li><li${_scopeId}><i class="fa fa-check fa-li"${_scopeId}></i>Mereka akan diminta untuk mengisi informasi pengiriman, berupa alamat untuk dilakukan pengiriman barang nanti.</li></ul><h3 class="fs-4"${_scopeId}>5. Pembayaran</h3><ul class="fa-ul"${_scopeId}><li${_scopeId}><i class="fa fa-check fa-li"${_scopeId}></i>Pelanggan akan membayar secara via transfer untuk menyelesaikan proses pesanan.</li><li${_scopeId}><i class="fa fa-check fa-li"${_scopeId}></i>Upload bukti pembayaran pada form yang sudah disediakan dan tunggu untuk proses verifikasi.</li></ul><h3 class="fs-4"${_scopeId}>6. Pengerjaan Pesanan</h3><ul class="fa-ul"${_scopeId}><li${_scopeId}><i class="fa fa-check fa-li"${_scopeId}></i>Pesanan akan dikonfirmasi oleh toko setelah pelanggan melunasi pembayaran dan akan langsung diproses.</li><li${_scopeId}><i class="fa fa-check fa-li"${_scopeId}></i>Ketika barang sudah selesai, maka siap untuk dikirimkan</li></ul><h3 class="fs-4"${_scopeId}>7. Lacak Status Pemesanan</h3><ul class="fa-ul"${_scopeId}><li${_scopeId}><i class="fa fa-check fa-li"${_scopeId}></i>Setelah pesanan dikonfirmasi, pelanggan dapat mengklik status pesanan untuk memantau pengiriman.</li><li${_scopeId}><i class="fa fa-check fa-li"${_scopeId}></i>Informasi ini dapat diakses melalui akun pelanggan pada halaman pesanan.</li></ul><h3 class="fs-4"${_scopeId}>8. Lacak Status Pemesanan</h3><ul class="fa-ul"${_scopeId}><li${_scopeId}><i class="fa fa-check fa-li"${_scopeId}></i>Pelanggan harus mengecek pesanan yang telah diantar oleh karyawan toko</li><li${_scopeId}><i class="fa fa-check fa-li"${_scopeId}></i>Setelah pesanan diterima, pelanggan akan diminta untuk melakukan konfirmasi pesanan dengan mengklik tombol “ pesanan telah diterima “</li></ul><h2 class="fs-3 text-center"${_scopeId}>HUBUNGI KAMI</h2><p class="text-center"${_scopeId}>Jika ada hal yang ingin ditanyakan secara langsung terkait pesanan atau kendala dalam pengiriman silahkan hubungi : 082268204595</p></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "content content-full" }, [
            createVNode("div", { class: "block block-rounded block-transparent bg-primary" }, [
              createVNode("div", { class: "block-content bg-black-25" }, [
                createVNode("div", { class: "py-3 text-center" }, [
                  createVNode("h1", { class: "h2 fw-bold text-white mb-2" }, "Panduan Pemesanan"),
                  createVNode("h2", { class: "h5 fw-medium text-white-75" }, "Toko Kombet")
                ])
              ])
            ]),
            createVNode("div", { class: "block block-rounded" }, [
              createVNode("div", { class: "block-content" }, [
                createVNode("h3", { class: "fs-4" }, "1. Pendaftaran / Register"),
                createVNode("ul", { class: "fa-ul" }, [
                  createVNode("li", null, [
                    createVNode("i", { class: "fa fa-check fa-li" }),
                    createTextVNode('Silahkan klik tombol "Daftar" terlebih dahulu untuk memulai register')
                  ]),
                  createVNode("li", null, [
                    createVNode("i", { class: "fa fa-check fa-li" }),
                    createTextVNode('Jika belum memiliki akun, pelanggan harus membuatnya dengan mengklik opsi "Daftar" atau "Buat Akun."')
                  ]),
                  createVNode("li", null, [
                    createVNode("i", { class: "fa fa-check fa-li" }),
                    createTextVNode("Jika sudah memiliki akun, pelanggan tinggal memasukkan username dan password yang sudah didaftarkan sebelumnya")
                  ])
                ]),
                createVNode("h3", { class: "fs-4" }, "2. Jelajahi Produk"),
                createVNode("ul", { class: "fa-ul" }, [
                  createVNode("li", null, [
                    createVNode("i", { class: "fa fa-check fa-li" }),
                    createTextVNode("Pelanggan dapat menjelajahi kategori produk atau menggunakan fitur pencarian untuk menemukan barang yang diinginkan")
                  ]),
                  createVNode("li", null, [
                    createVNode("i", { class: "fa fa-check fa-li" }),
                    createTextVNode("Klik pada produk untuk melihat detail, deskripsi, dan harga")
                  ])
                ]),
                createVNode("h3", { class: "fs-4" }, "3. Tambahkan ke Keranjang"),
                createVNode("ul", { class: "fa-ul" }, [
                  createVNode("li", null, [
                    createVNode("i", { class: "fa fa-check fa-li" }),
                    createTextVNode('Setelah memilih produk, pelanggan dapat menambahkannya ke keranjang belanja dengan mengklik tombol "Tambah ke Keranjang".')
                  ]),
                  createVNode("li", null, [
                    createVNode("i", { class: "fa fa-check fa-li" }),
                    createTextVNode("Keranjang belanja akan menampilkan ringkasan pesanan, dan pelanggan dapat memilih untuk melanjutkan berbelanja atau menuju checkout.")
                  ])
                ]),
                createVNode("h3", { class: "fs-4" }, "4. Proses Checkout"),
                createVNode("ul", { class: "fa-ul" }, [
                  createVNode("li", null, [
                    createVNode("i", { class: "fa fa-check fa-li" }),
                    createTextVNode("Pada halaman checkout, pelanggan diminta untuk memeriksa dan memastikan pesanan mereka.")
                  ]),
                  createVNode("li", null, [
                    createVNode("i", { class: "fa fa-check fa-li" }),
                    createTextVNode("Mereka akan diminta untuk mengisi informasi pengiriman, berupa alamat untuk dilakukan pengiriman barang nanti.")
                  ])
                ]),
                createVNode("h3", { class: "fs-4" }, "5. Pembayaran"),
                createVNode("ul", { class: "fa-ul" }, [
                  createVNode("li", null, [
                    createVNode("i", { class: "fa fa-check fa-li" }),
                    createTextVNode("Pelanggan akan membayar secara via transfer untuk menyelesaikan proses pesanan.")
                  ]),
                  createVNode("li", null, [
                    createVNode("i", { class: "fa fa-check fa-li" }),
                    createTextVNode("Upload bukti pembayaran pada form yang sudah disediakan dan tunggu untuk proses verifikasi.")
                  ])
                ]),
                createVNode("h3", { class: "fs-4" }, "6. Pengerjaan Pesanan"),
                createVNode("ul", { class: "fa-ul" }, [
                  createVNode("li", null, [
                    createVNode("i", { class: "fa fa-check fa-li" }),
                    createTextVNode("Pesanan akan dikonfirmasi oleh toko setelah pelanggan melunasi pembayaran dan akan langsung diproses.")
                  ]),
                  createVNode("li", null, [
                    createVNode("i", { class: "fa fa-check fa-li" }),
                    createTextVNode("Ketika barang sudah selesai, maka siap untuk dikirimkan")
                  ])
                ]),
                createVNode("h3", { class: "fs-4" }, "7. Lacak Status Pemesanan"),
                createVNode("ul", { class: "fa-ul" }, [
                  createVNode("li", null, [
                    createVNode("i", { class: "fa fa-check fa-li" }),
                    createTextVNode("Setelah pesanan dikonfirmasi, pelanggan dapat mengklik status pesanan untuk memantau pengiriman.")
                  ]),
                  createVNode("li", null, [
                    createVNode("i", { class: "fa fa-check fa-li" }),
                    createTextVNode("Informasi ini dapat diakses melalui akun pelanggan pada halaman pesanan.")
                  ])
                ]),
                createVNode("h3", { class: "fs-4" }, "8. Lacak Status Pemesanan"),
                createVNode("ul", { class: "fa-ul" }, [
                  createVNode("li", null, [
                    createVNode("i", { class: "fa fa-check fa-li" }),
                    createTextVNode("Pelanggan harus mengecek pesanan yang telah diantar oleh karyawan toko")
                  ]),
                  createVNode("li", null, [
                    createVNode("i", { class: "fa fa-check fa-li" }),
                    createTextVNode("Setelah pesanan diterima, pelanggan akan diminta untuk melakukan konfirmasi pesanan dengan mengklik tombol “ pesanan telah diterima “")
                  ])
                ]),
                createVNode("h2", { class: "fs-3 text-center" }, "HUBUNGI KAMI"),
                createVNode("p", { class: "text-center" }, "Jika ada hal yang ingin ditanyakan secara langsung terkait pesanan atau kendala dalam pengiriman silahkan hubungi : 082268204595")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Frontend/Pages/Tutorial.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Tutorial = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Tutorial as default
};
