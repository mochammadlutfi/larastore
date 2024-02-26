import moment from "moment";
import { resolveComponent, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./ssr.js";
import { E as ElTag } from "./index15.js";
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
const Show_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  setup() {
  },
  methods: {
    format_date(v) {
      if (v) {
        moment.locale("id");
        return moment(String(v)).format("DD MMMM YYYY");
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_user_layout = resolveComponent("user-layout");
  const _component_el_tag = ElTag;
  const _component_el_row = ElRow;
  const _component_el_col = ElCol;
  _push(ssrRenderComponent(_component_user_layout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="d-flex justify-content-between align-items-center mb-4"${_scopeId}><h3 class="fs-4 fw-bold mb-0"${_scopeId}>Detail Pesanan</h3></div><div class="block block-bordered rounded"${_scopeId}><div class="block-header border-bottom border-2 py-2 px-3"${_scopeId}><div class="block-title d-flex"${_scopeId}><div class="fw-bold"${_scopeId}>${ssrInterpolate($props.data.nomor)}</div><div class="border-2 border-dark border-start fw-medium ms-2 ps-2"${_scopeId}>${ssrInterpolate($options.format_date($props.data.created_at))}</div></div><div class="block-options"${_scopeId}>`);
        if ($props.data.state == "pending" && $props.data.payment_status == "unpaid") {
          _push2(ssrRenderComponent(_component_el_tag, {
            class: "ml-2",
            type: "danger"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`Belum Bayar`);
              } else {
                return [
                  createTextVNode("Belum Bayar")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else if ($props.data.state == "process") {
          _push2(ssrRenderComponent(_component_el_tag, {
            class: "ml-2",
            type: "warning"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`Dikemas`);
              } else {
                return [
                  createTextVNode("Dikemas")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else if ($props.data.state == "shipping") {
          _push2(ssrRenderComponent(_component_el_tag, {
            class: "ml-2",
            type: "info"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`Dikirim`);
              } else {
                return [
                  createTextVNode("Dikirim")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else if ($props.data.state == "done") {
          _push2(ssrRenderComponent(_component_el_tag, {
            class: "ml-2",
            type: "success"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`Selesai`);
              } else {
                return [
                  createTextVNode("Selesai")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else if ($props.data.state == "cancel") {
          _push2(ssrRenderComponent(_component_el_tag, {
            class: "ml-2",
            type: "danger"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`Batal`);
              } else {
                return [
                  createTextVNode("Batal")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="block-content p-3"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_el_row, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              if ($props.data.shipping) {
                _push3(ssrRenderComponent(_component_el_col, { lg: 12 }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<h5 class="fw-semibold fs-6 mb-2"${_scopeId3}>Info Pengiriman</h5><div class="fw-bold"${_scopeId3}>${ssrInterpolate($props.data.shipping.reciever)}</div><div class=""${_scopeId3}>${ssrInterpolate($props.data.shipping.phone)}</div><address${_scopeId3}>${ssrInterpolate($props.data.shipping.address)}</address>`);
                    } else {
                      return [
                        createVNode("h5", { class: "fw-semibold fs-6 mb-2" }, "Info Pengiriman"),
                        createVNode("div", { class: "fw-bold" }, toDisplayString($props.data.shipping.reciever), 1),
                        createVNode("div", { class: "" }, toDisplayString($props.data.shipping.phone), 1),
                        createVNode("address", null, toDisplayString($props.data.shipping.address), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              } else {
                _push3(`<!---->`);
              }
            } else {
              return [
                $props.data.shipping ? (openBlock(), createBlock(_component_el_col, {
                  key: 0,
                  lg: 12
                }, {
                  default: withCtx(() => [
                    createVNode("h5", { class: "fw-semibold fs-6 mb-2" }, "Info Pengiriman"),
                    createVNode("div", { class: "fw-bold" }, toDisplayString($props.data.shipping.reciever), 1),
                    createVNode("div", { class: "" }, toDisplayString($props.data.shipping.phone), 1),
                    createVNode("address", null, toDisplayString($props.data.shipping.address), 1)
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><div class="block-content p-0"${_scopeId}><!--[-->`);
        ssrRenderList($props.data.lines, (d, i) => {
          _push2(`<div class="order-content"${_scopeId}><div class="order-items"${_scopeId}><div class="product-info"${_scopeId}><div class="product-img"${_scopeId}><img${ssrRenderAttr("src", d.product.main_image)} class="img-fluid"${_scopeId}></div><div class="product-detail"${_scopeId}><div class="product_name"${_scopeId}>${ssrInterpolate(d.product.name)}</div><div class="product_price"${_scopeId}>${ssrInterpolate(d.qty)} x ${ssrInterpolate(_ctx.currency(d.price))}</div></div></div></div><div class="order-sum"${_scopeId}><p class="mb-0 font-w700"${_scopeId}>${ssrInterpolate(_ctx.currency(d.subtotal))}</p></div></div>`);
        });
        _push2(`<!--]--><div class="order-footer"${_scopeId}><div class="order-row"${_scopeId}><div class="col-title"${_scopeId}><span${_scopeId}>Subtotal Produk</span></div><div class="col-val"${_scopeId}><div${_scopeId}>${ssrInterpolate(_ctx.currency($props.data.total))}</div></div></div><div class="order-row"${_scopeId}><div class="col-title"${_scopeId}><span${_scopeId}>Ongkos Kirim</span></div><div class="col-val"${_scopeId}><div${_scopeId}>${ssrInterpolate(_ctx.currency($props.data.shipping_cost))}</div></div></div><div class="order-row"${_scopeId}><div class="col-title"${_scopeId}><span${_scopeId}>Total Belanja</span></div><div class="col-val"${_scopeId}><div${_scopeId}>${ssrInterpolate(_ctx.currency($props.data.grand_total))}</div></div></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "d-flex justify-content-between align-items-center mb-4" }, [
            createVNode("h3", { class: "fs-4 fw-bold mb-0" }, "Detail Pesanan")
          ]),
          createVNode("div", { class: "block block-bordered rounded" }, [
            createVNode("div", { class: "block-header border-bottom border-2 py-2 px-3" }, [
              createVNode("div", { class: "block-title d-flex" }, [
                createVNode("div", { class: "fw-bold" }, toDisplayString($props.data.nomor), 1),
                createVNode("div", { class: "border-2 border-dark border-start fw-medium ms-2 ps-2" }, toDisplayString($options.format_date($props.data.created_at)), 1)
              ]),
              createVNode("div", { class: "block-options" }, [
                $props.data.state == "pending" && $props.data.payment_status == "unpaid" ? (openBlock(), createBlock(_component_el_tag, {
                  key: 0,
                  class: "ml-2",
                  type: "danger"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Belum Bayar")
                  ]),
                  _: 1
                })) : $props.data.state == "process" ? (openBlock(), createBlock(_component_el_tag, {
                  key: 1,
                  class: "ml-2",
                  type: "warning"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Dikemas")
                  ]),
                  _: 1
                })) : $props.data.state == "shipping" ? (openBlock(), createBlock(_component_el_tag, {
                  key: 2,
                  class: "ml-2",
                  type: "info"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Dikirim")
                  ]),
                  _: 1
                })) : $props.data.state == "done" ? (openBlock(), createBlock(_component_el_tag, {
                  key: 3,
                  class: "ml-2",
                  type: "success"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Selesai")
                  ]),
                  _: 1
                })) : $props.data.state == "cancel" ? (openBlock(), createBlock(_component_el_tag, {
                  key: 4,
                  class: "ml-2",
                  type: "danger"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Batal")
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ])
            ]),
            createVNode("div", { class: "block-content p-3" }, [
              createVNode(_component_el_row, null, {
                default: withCtx(() => [
                  $props.data.shipping ? (openBlock(), createBlock(_component_el_col, {
                    key: 0,
                    lg: 12
                  }, {
                    default: withCtx(() => [
                      createVNode("h5", { class: "fw-semibold fs-6 mb-2" }, "Info Pengiriman"),
                      createVNode("div", { class: "fw-bold" }, toDisplayString($props.data.shipping.reciever), 1),
                      createVNode("div", { class: "" }, toDisplayString($props.data.shipping.phone), 1),
                      createVNode("address", null, toDisplayString($props.data.shipping.address), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ]),
            createVNode("div", { class: "block-content p-0" }, [
              (openBlock(true), createBlock(Fragment, null, renderList($props.data.lines, (d, i) => {
                return openBlock(), createBlock("div", {
                  class: "order-content",
                  key: i
                }, [
                  createVNode("div", { class: "order-items" }, [
                    createVNode("div", { class: "product-info" }, [
                      createVNode("div", { class: "product-img" }, [
                        createVNode("img", {
                          src: d.product.main_image,
                          class: "img-fluid"
                        }, null, 8, ["src"])
                      ]),
                      createVNode("div", { class: "product-detail" }, [
                        createVNode("div", { class: "product_name" }, toDisplayString(d.product.name), 1),
                        createVNode("div", { class: "product_price" }, toDisplayString(d.qty) + " x " + toDisplayString(_ctx.currency(d.price)), 1)
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "order-sum" }, [
                    createVNode("p", { class: "mb-0 font-w700" }, toDisplayString(_ctx.currency(d.subtotal)), 1)
                  ])
                ]);
              }), 128)),
              createVNode("div", { class: "order-footer" }, [
                createVNode("div", { class: "order-row" }, [
                  createVNode("div", { class: "col-title" }, [
                    createVNode("span", null, "Subtotal Produk")
                  ]),
                  createVNode("div", { class: "col-val" }, [
                    createVNode("div", null, toDisplayString(_ctx.currency($props.data.total)), 1)
                  ])
                ]),
                createVNode("div", { class: "order-row" }, [
                  createVNode("div", { class: "col-title" }, [
                    createVNode("span", null, "Ongkos Kirim")
                  ]),
                  createVNode("div", { class: "col-val" }, [
                    createVNode("div", null, toDisplayString(_ctx.currency($props.data.shipping_cost)), 1)
                  ])
                ]),
                createVNode("div", { class: "order-row" }, [
                  createVNode("div", { class: "col-title" }, [
                    createVNode("span", null, "Total Belanja")
                  ]),
                  createVNode("div", { class: "col-val" }, [
                    createVNode("div", null, toDisplayString(_ctx.currency($props.data.grand_total)), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Frontend/UserOrder/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Show = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Show as default
};
