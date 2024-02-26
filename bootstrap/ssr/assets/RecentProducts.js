import { mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./ssr.js";
import { E as ElRow, a as ElCol } from "./index8.js";
import "@vue/server-renderer";
import "@inertiajs/vue3";
import "@inertiajs/vue3/server";
import "pinia";
import "lodash-unified";
import "@vue/shared";
import "@vueuse/core";
import "@element-plus/icons-vue";
import "@ctrl/tinycolor";
import "./typescript.js";
const _sfc_main = {
  name: "RecentProduct",
  components: {},
  data() {
    return {
      data: [],
      isLoading: false,
      limit: 12,
      page: 1,
      pageSize: 0,
      total: 0
    };
  },
  async mounted() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      var page = page == void 0 ? 1 : page;
      try {
        this.isLoading = true;
        const response = await axios.get("/produk/data", {
          params: {
            page,
            limit: this.limit
          }
        });
        if (response.status == 200) {
          this.data = response.data.data;
          this.page = response.data.current_page;
          this.total = response.data.total;
          this.pageSize = response.data.per_page;
        }
        this.isLoading = false;
      } catch (error) {
        console.error(error);
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_row = ElRow;
  const _component_el_col = ElCol;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "content" }, _attrs))}><div class="content-heading pt-0 mb-3 border-0 d-flex justify-content-between"><h3 class="h3 mb-0">Produk Terbaru</h3></div>`);
  _push(ssrRenderComponent(_component_el_row, { gutter: 20 }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.data, (d, i) => {
          _push2(ssrRenderComponent(_component_el_col, {
            lg: 4,
            key: i
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="product"${_scopeId2}><div class="product-content"${_scopeId2}><div class="product-img"${_scopeId2}><a${ssrRenderAttr("href", _ctx.route("product.show", { "slug": d.slug }))}${_scopeId2}><img${ssrRenderAttr("src", d.main_image)} class="img-fluid"${_scopeId2}></a></div><div class="product-info"${_scopeId2}><div class="product-title"${_scopeId2}><a${ssrRenderAttr("href", _ctx.route("product.show", { "slug": d.slug }))}${_scopeId2}>${ssrInterpolate(d.name)}</a></div><div class="product-price"${_scopeId2}>${ssrInterpolate(_ctx.currency(d.sell_price))}</div></div></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "product" }, [
                    createVNode("div", { class: "product-content" }, [
                      createVNode("div", { class: "product-img" }, [
                        createVNode("a", {
                          href: _ctx.route("product.show", { "slug": d.slug })
                        }, [
                          createVNode("img", {
                            src: d.main_image,
                            class: "img-fluid"
                          }, null, 8, ["src"])
                        ], 8, ["href"])
                      ]),
                      createVNode("div", { class: "product-info" }, [
                        createVNode("div", { class: "product-title" }, [
                          createVNode("a", {
                            href: _ctx.route("product.show", { "slug": d.slug })
                          }, toDisplayString(d.name), 9, ["href"])
                        ]),
                        createVNode("div", { class: "product-price" }, toDisplayString(_ctx.currency(d.sell_price)), 1)
                      ])
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($data.data, (d, i) => {
            return openBlock(), createBlock(_component_el_col, {
              lg: 4,
              key: i
            }, {
              default: withCtx(() => [
                createVNode("div", { class: "product" }, [
                  createVNode("div", { class: "product-content" }, [
                    createVNode("div", { class: "product-img" }, [
                      createVNode("a", {
                        href: _ctx.route("product.show", { "slug": d.slug })
                      }, [
                        createVNode("img", {
                          src: d.main_image,
                          class: "img-fluid"
                        }, null, 8, ["src"])
                      ], 8, ["href"])
                    ]),
                    createVNode("div", { class: "product-info" }, [
                      createVNode("div", { class: "product-title" }, [
                        createVNode("a", {
                          href: _ctx.route("product.show", { "slug": d.slug })
                        }, toDisplayString(d.name), 9, ["href"])
                      ]),
                      createVNode("div", { class: "product-price" }, toDisplayString(_ctx.currency(d.sell_price)), 1)
                    ])
                  ])
                ])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Frontend/Product/RecentProducts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RecentProducts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  RecentProducts as default
};
