import { resolveComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
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
  components: {},
  props: {
    data: {
      type: Object
    },
    product: {
      type: Object
    },
    category: {
      type: Array
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_base_layout = resolveComponent("base-layout");
  const _component_el_row = ElRow;
  const _component_el_col = ElCol;
  _push(ssrRenderComponent(_component_base_layout, mergeProps({ title: "Home" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="content content-full"${_scopeId}><div class="block block-rounded block-transparent bg-primary"${_scopeId}><div class="block-content bg-black-25"${_scopeId}><div class="py-3 text-center"${_scopeId}><h1 class="h2 fw-bold text-white mb-2"${_scopeId}>Produk Kategori</h1><h2 class="h5 fw-medium text-white-75"${_scopeId}>${ssrInterpolate($props.data.name)}</h2></div></div></div>`);
        _push2(ssrRenderComponent(_component_el_row, { gutter: 20 }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_el_col, { lg: 6 }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="block block-rounded block-bordered"${_scopeId3}><div class="block-header block-header-default"${_scopeId3}><h3 class="block-title"${_scopeId3}>Kategori</h3></div><div class="block-content"${_scopeId3}><ul class="nav-main"${_scopeId3}><!--[-->`);
                    ssrRenderList($props.category, (c, i) => {
                      _push4(`<li class="nav-main-item"${_scopeId3}><a class="nav-main-link"${ssrRenderAttr("href", _ctx.route("category", { category: c.slug }))}${_scopeId3}><i class="nav-main-link-icon fa fa-angle-right"${_scopeId3}></i><span class="nav-main-link-name"${_scopeId3}>${ssrInterpolate(c.name)}</span></a></li>`);
                    });
                    _push4(`<!--]--></ul></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "block block-rounded block-bordered" }, [
                        createVNode("div", { class: "block-header block-header-default" }, [
                          createVNode("h3", { class: "block-title" }, "Kategori")
                        ]),
                        createVNode("div", { class: "block-content" }, [
                          createVNode("ul", { class: "nav-main" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList($props.category, (c, i) => {
                              return openBlock(), createBlock("li", {
                                class: "nav-main-item",
                                key: i
                              }, [
                                createVNode("a", {
                                  class: "nav-main-link",
                                  href: _ctx.route("category", { category: c.slug })
                                }, [
                                  createVNode("i", { class: "nav-main-link-icon fa fa-angle-right" }),
                                  createVNode("span", { class: "nav-main-link-name" }, toDisplayString(c.name), 1)
                                ], 8, ["href"])
                              ]);
                            }), 128))
                          ])
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_el_col, { lg: 18 }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="content-heading pt-0 mb-3 border-0 d-flex justify-content-between"${_scopeId3}><h3 class="h3 mb-0"${_scopeId3}>Produk Terbaru</h3></div>`);
                    _push4(ssrRenderComponent(_component_el_row, { gutter: 20 }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<!--[-->`);
                          ssrRenderList($props.product.data, (d, i) => {
                            _push5(ssrRenderComponent(_component_el_col, {
                              lg: 5,
                              key: i
                            }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`<div class="product"${_scopeId5}><div class="product-content"${_scopeId5}><div class="product-img"${_scopeId5}><a${ssrRenderAttr("href", _ctx.route("product.show", { "slug": d.slug }))}${_scopeId5}><img${ssrRenderAttr("src", d.main_image)} class="img-fluid"${_scopeId5}></a></div><div class="product-info"${_scopeId5}><div class="product-title"${_scopeId5}><a${ssrRenderAttr("href", _ctx.route("product.show", { "slug": d.slug }))}${_scopeId5}>${ssrInterpolate(d.name)}</a></div><div class="product-price"${_scopeId5}>${ssrInterpolate(_ctx.currency(d.sell_price))}</div></div></div></div>`);
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
                            }, _parent5, _scopeId4));
                          });
                          _push5(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList($props.product.data, (d, i) => {
                              return openBlock(), createBlock(_component_el_col, {
                                lg: 5,
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
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode("div", { class: "content-heading pt-0 mb-3 border-0 d-flex justify-content-between" }, [
                        createVNode("h3", { class: "h3 mb-0" }, "Produk Terbaru")
                      ]),
                      createVNode(_component_el_row, { gutter: 20 }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList($props.product.data, (d, i) => {
                            return openBlock(), createBlock(_component_el_col, {
                              lg: 5,
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
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_el_col, { lg: 6 }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "block block-rounded block-bordered" }, [
                      createVNode("div", { class: "block-header block-header-default" }, [
                        createVNode("h3", { class: "block-title" }, "Kategori")
                      ]),
                      createVNode("div", { class: "block-content" }, [
                        createVNode("ul", { class: "nav-main" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList($props.category, (c, i) => {
                            return openBlock(), createBlock("li", {
                              class: "nav-main-item",
                              key: i
                            }, [
                              createVNode("a", {
                                class: "nav-main-link",
                                href: _ctx.route("category", { category: c.slug })
                              }, [
                                createVNode("i", { class: "nav-main-link-icon fa fa-angle-right" }),
                                createVNode("span", { class: "nav-main-link-name" }, toDisplayString(c.name), 1)
                              ], 8, ["href"])
                            ]);
                          }), 128))
                        ])
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_col, { lg: 18 }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "content-heading pt-0 mb-3 border-0 d-flex justify-content-between" }, [
                      createVNode("h3", { class: "h3 mb-0" }, "Produk Terbaru")
                    ]),
                    createVNode(_component_el_row, { gutter: 20 }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList($props.product.data, (d, i) => {
                          return openBlock(), createBlock(_component_el_col, {
                            lg: 5,
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
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "content content-full" }, [
            createVNode("div", { class: "block block-rounded block-transparent bg-primary" }, [
              createVNode("div", { class: "block-content bg-black-25" }, [
                createVNode("div", { class: "py-3 text-center" }, [
                  createVNode("h1", { class: "h2 fw-bold text-white mb-2" }, "Produk Kategori"),
                  createVNode("h2", { class: "h5 fw-medium text-white-75" }, toDisplayString($props.data.name), 1)
                ])
              ])
            ]),
            createVNode(_component_el_row, { gutter: 20 }, {
              default: withCtx(() => [
                createVNode(_component_el_col, { lg: 6 }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "block block-rounded block-bordered" }, [
                      createVNode("div", { class: "block-header block-header-default" }, [
                        createVNode("h3", { class: "block-title" }, "Kategori")
                      ]),
                      createVNode("div", { class: "block-content" }, [
                        createVNode("ul", { class: "nav-main" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList($props.category, (c, i) => {
                            return openBlock(), createBlock("li", {
                              class: "nav-main-item",
                              key: i
                            }, [
                              createVNode("a", {
                                class: "nav-main-link",
                                href: _ctx.route("category", { category: c.slug })
                              }, [
                                createVNode("i", { class: "nav-main-link-icon fa fa-angle-right" }),
                                createVNode("span", { class: "nav-main-link-name" }, toDisplayString(c.name), 1)
                              ], 8, ["href"])
                            ]);
                          }), 128))
                        ])
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_col, { lg: 18 }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "content-heading pt-0 mb-3 border-0 d-flex justify-content-between" }, [
                      createVNode("h3", { class: "h3 mb-0" }, "Produk Terbaru")
                    ]),
                    createVNode(_component_el_row, { gutter: 20 }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList($props.product.data, (d, i) => {
                          return openBlock(), createBlock(_component_el_col, {
                            lg: 5,
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
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Frontend/Product/Category.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Category = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Category as default
};
