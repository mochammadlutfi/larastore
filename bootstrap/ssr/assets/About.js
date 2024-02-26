import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
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
        _push2(`<div class="content content-full"${_scopeId}><div class="block block-rounded block-transparent bg-primary"${_scopeId}><div class="block-content bg-black-25"${_scopeId}><div class="py-3 text-center"${_scopeId}><h1 class="h2 fw-bold text-white mb-2"${_scopeId}>Tentang</h1><h2 class="h5 fw-medium text-white-75"${_scopeId}>Toko Kombet</h2></div></div></div><div class="block block-rounded"${_scopeId}><div class="block-content"${_scopeId}><p class="text-center nice-copy"${_scopeId}> Toko Kombet adalah toko grosir yang berdiri sejak tahun 2002 dengan Bpk.Muhadi sebagai pemilik dari Toko Kombet itu sendiri. Toko kombet berfokus dalam penyediaan produk berkualitas tinggi. Kami menawarkan beragam produk, mulai dari makanan, bahan pokok, makanan ringan serta barang-barang keperluan rumah tangga sehari-hari, untuk memudahkan masyarakat sekitar dalam pengadaan bahan pangan setiap harinya. </p></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "content content-full" }, [
            createVNode("div", { class: "block block-rounded block-transparent bg-primary" }, [
              createVNode("div", { class: "block-content bg-black-25" }, [
                createVNode("div", { class: "py-3 text-center" }, [
                  createVNode("h1", { class: "h2 fw-bold text-white mb-2" }, "Tentang"),
                  createVNode("h2", { class: "h5 fw-medium text-white-75" }, "Toko Kombet")
                ])
              ])
            ]),
            createVNode("div", { class: "block block-rounded" }, [
              createVNode("div", { class: "block-content" }, [
                createVNode("p", { class: "text-center nice-copy" }, " Toko Kombet adalah toko grosir yang berdiri sejak tahun 2002 dengan Bpk.Muhadi sebagai pemilik dari Toko Kombet itu sendiri. Toko kombet berfokus dalam penyediaan produk berkualitas tinggi. Kami menawarkan beragam produk, mulai dari makanan, bahan pokok, makanan ringan serta barang-barang keperluan rumah tangga sehari-hari, untuk memudahkan masyarakat sekitar dalam pengadaan bahan pangan setiap harinya. ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Frontend/Pages/About.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const About = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  About as default
};
