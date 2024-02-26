import "./RecentProducts.js";
import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./ssr.js";
import "./index8.js";
import "./typescript.js";
import "@vue/shared";
import "@vue/server-renderer";
import "@inertiajs/vue3";
import "@inertiajs/vue3/server";
import "pinia";
import "lodash-unified";
import "@vueuse/core";
import "@element-plus/icons-vue";
import "@ctrl/tinycolor";
const _sfc_main = {
  components: {
    // RecentProducts,
  },
  props: {
    data: {
      type: Object
    },
    category: {
      type: Array
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_base_layout = resolveComponent("base-layout");
  _push(ssrRenderComponent(_component_base_layout, mergeProps({ title: "Home" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="bg-white"${_scopeId}><div class="position-relative d-flex align-items-center"${_scopeId}><div class="content content-full"${_scopeId}><div class="row g-6 w-100 py-7 overflow-hidden"${_scopeId}><div class="col-md-7 order-md-last py-4 d-md-flex align-items-md-center justify-content-md-end"${_scopeId}><img class="img-fluid" src="/images/front.jpg" alt="Hero Promo"${_scopeId}></div><div class="col-md-5 py-4 d-flex align-items-center"${_scopeId}><div class="text-center text-md-start"${_scopeId}><h1 class="fw-bold fs-2 mb-3"${_scopeId}> TOKO KOMBET </h1><p class="text-muted fw-medium mb-4"${_scopeId}> Kami menawarkan beragam produk, mulai dari makanan, bahan pokok, makanan ringan serta barang-barang keperluan rumah tangga sehari-hari, untuk memudahkan masyarakat sekitar dalam pengadaan bahan pangan setiap harinya </p><a class="btn btn-alt-primary py-3 px-4"${ssrRenderAttr("href", _ctx.route("product.index"))} target="_blank"${_scopeId}><i class="fa fa-arrow-right opacity-50 me-1"${_scopeId}></i> Cari Produk </a></div></div></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "bg-white" }, [
            createVNode("div", { class: "position-relative d-flex align-items-center" }, [
              createVNode("div", { class: "content content-full" }, [
                createVNode("div", { class: "row g-6 w-100 py-7 overflow-hidden" }, [
                  createVNode("div", { class: "col-md-7 order-md-last py-4 d-md-flex align-items-md-center justify-content-md-end" }, [
                    createVNode("img", {
                      class: "img-fluid",
                      src: "/images/front.jpg",
                      alt: "Hero Promo"
                    })
                  ]),
                  createVNode("div", { class: "col-md-5 py-4 d-flex align-items-center" }, [
                    createVNode("div", { class: "text-center text-md-start" }, [
                      createVNode("h1", { class: "fw-bold fs-2 mb-3" }, " TOKO KOMBET "),
                      createVNode("p", { class: "text-muted fw-medium mb-4" }, " Kami menawarkan beragam produk, mulai dari makanan, bahan pokok, makanan ringan serta barang-barang keperluan rumah tangga sehari-hari, untuk memudahkan masyarakat sekitar dalam pengadaan bahan pangan setiap harinya "),
                      createVNode("a", {
                        class: "btn btn-alt-primary py-3 px-4",
                        href: _ctx.route("product.index"),
                        target: "_blank"
                      }, [
                        createVNode("i", { class: "fa fa-arrow-right opacity-50 me-1" }),
                        createTextVNode(" Cari Produk ")
                      ], 8, ["href"])
                    ])
                  ])
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Frontend/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Home = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Home as default
};
