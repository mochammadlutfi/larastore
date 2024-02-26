import { _ as _export_sfc, p as ElConfigProvider, B as BaseHeader, q as id } from "./ssr.js";
import { Head } from "@inertiajs/vue3";
import { resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, renderSlot, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrRenderSlot } from "vue/server-renderer";
import { E as ElRow, a as ElCol } from "./index8.js";
import "@vue/server-renderer";
import "@inertiajs/vue3/server";
import "pinia";
import "lodash-unified";
import "@vue/shared";
import "@vueuse/core";
import "@element-plus/icons-vue";
import "@ctrl/tinycolor";
import "./typescript.js";
const UserLayout_vue_vue_type_style_index_0_scoped_889e5a8b_lang = "";
const _sfc_main = {
  name: "UserLayout",
  components: {
    Head,
    ElConfigProvider,
    BaseHeader
  },
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      sidebar: true,
      limitPosition: 500,
      scrolled: false,
      lastPosition: 0
    };
  },
  computed: {
    classContainer() {
      return {
        "side-scroll": true,
        "main-content-boxed": true,
        "side-trans-enabled": true,
        "page-header-fixed": this.scrolled,
        "sidebar-o-xs": this.sidebar
      };
    }
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (100 < window.scrollY) {
        this.scrolled = true;
      }
      if (100 > window.scrollY) {
        this.scrolled = false;
      }
      this.lastPosition = window.scrollY;
    }
  },
  setup() {
    return { zIndex: 3e3, size: "small", locale: id };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_config_provider = ElConfigProvider;
  const _component_Head = resolveComponent("Head");
  const _component_base_header = resolveComponent("base-header");
  const _component_el_row = ElRow;
  const _component_el_col = ElCol;
  _push(ssrRenderComponent(_component_el_config_provider, mergeProps({
    namespace: "ep",
    locale: $setup.locale
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Head, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<title data-v-889e5a8b${_scopeId2}>${ssrInterpolate($props.title)}</title><meta name="description" content="Kang Ebod, Makhfudz Solaeman" data-v-889e5a8b${_scopeId2}>`);
            } else {
              return [
                createVNode("title", null, toDisplayString($props.title), 1),
                createVNode("meta", {
                  name: "description",
                  content: "Kang Ebod, Makhfudz Solaeman"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<div id="page-container" class="${ssrRenderClass($options.classContainer)}" data-v-889e5a8b${_scopeId}>`);
        _push2(ssrRenderComponent(_component_base_header, null, null, _parent2, _scopeId));
        _push2(`<div id="main-container" data-v-889e5a8b${_scopeId}><div class="content" data-v-889e5a8b${_scopeId}>`);
        _push2(ssrRenderComponent(_component_el_row, { gutter: 30 }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_el_col, { lg: 6 }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="block rounded" data-v-889e5a8b${_scopeId3}><div class="block-content p-0" data-v-889e5a8b${_scopeId3}><ul class="nav-main m-0" data-v-889e5a8b${_scopeId3}><li class="nav-main-item" data-v-889e5a8b${_scopeId3}><a class="${ssrRenderClass([_ctx.route().current("user.profil") ? "active" : "", "nav-main-link"])}"${ssrRenderAttr("href", _ctx.route("user.profil"))} data-v-889e5a8b${_scopeId3}><i class="nav-main-link-icon fa fa-user" data-v-889e5a8b${_scopeId3}></i><span class="nav-main-link-name" data-v-889e5a8b${_scopeId3}>Profil</span></a></li><li class="nav-main-item" data-v-889e5a8b${_scopeId3}><a class="${ssrRenderClass([_ctx.route().current("user.order.*") ? "active" : "", "nav-main-link"])}"${ssrRenderAttr("href", _ctx.route("user.order.index"))} data-v-889e5a8b${_scopeId3}><i class="nav-main-link-icon si si-notebook" data-v-889e5a8b${_scopeId3}></i><span class="nav-main-link-name" data-v-889e5a8b${_scopeId3}>Pesanan Saya</span></a></li><li class="nav-main-item" data-v-889e5a8b${_scopeId3}><a class="${ssrRenderClass([_ctx.route().current("user.address.*") ? "active" : "", "nav-main-link"])}"${ssrRenderAttr("href", _ctx.route("user.address.index"))} data-v-889e5a8b${_scopeId3}><i class="nav-main-link-icon si si-map" data-v-889e5a8b${_scopeId3}></i><span class="nav-main-link-name" data-v-889e5a8b${_scopeId3}>Buku Alamat</span></a></li><li class="nav-main-item" data-v-889e5a8b${_scopeId3}><a class="${ssrRenderClass([_ctx.route().current("user.return.*") ? "active" : "", "nav-main-link"])}"${ssrRenderAttr("href", _ctx.route("user.return.index"))} data-v-889e5a8b${_scopeId3}><i class="nav-main-link-icon si si-action-undo" data-v-889e5a8b${_scopeId3}></i><span class="nav-main-link-name" data-v-889e5a8b${_scopeId3}>Retur Pesanan</span></a></li></ul></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "block rounded" }, [
                        createVNode("div", { class: "block-content p-0" }, [
                          createVNode("ul", { class: "nav-main m-0" }, [
                            createVNode("li", { class: "nav-main-item" }, [
                              createVNode("a", {
                                class: ["nav-main-link", _ctx.route().current("user.profil") ? "active" : ""],
                                href: _ctx.route("user.profil")
                              }, [
                                createVNode("i", { class: "nav-main-link-icon fa fa-user" }),
                                createVNode("span", { class: "nav-main-link-name" }, "Profil")
                              ], 10, ["href"])
                            ]),
                            createVNode("li", { class: "nav-main-item" }, [
                              createVNode("a", {
                                class: ["nav-main-link", _ctx.route().current("user.order.*") ? "active" : ""],
                                href: _ctx.route("user.order.index")
                              }, [
                                createVNode("i", { class: "nav-main-link-icon si si-notebook" }),
                                createVNode("span", { class: "nav-main-link-name" }, "Pesanan Saya")
                              ], 10, ["href"])
                            ]),
                            createVNode("li", { class: "nav-main-item" }, [
                              createVNode("a", {
                                class: ["nav-main-link", _ctx.route().current("user.address.*") ? "active" : ""],
                                href: _ctx.route("user.address.index")
                              }, [
                                createVNode("i", { class: "nav-main-link-icon si si-map" }),
                                createVNode("span", { class: "nav-main-link-name" }, "Buku Alamat")
                              ], 10, ["href"])
                            ]),
                            createVNode("li", { class: "nav-main-item" }, [
                              createVNode("a", {
                                class: ["nav-main-link", _ctx.route().current("user.return.*") ? "active" : ""],
                                href: _ctx.route("user.return.index")
                              }, [
                                createVNode("i", { class: "nav-main-link-icon si si-action-undo" }),
                                createVNode("span", { class: "nav-main-link-name" }, "Retur Pesanan")
                              ], 10, ["href"])
                            ])
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
                    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent4, _scopeId3);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default", {}, void 0, true)
                    ];
                  }
                }),
                _: 3
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_el_col, { lg: 6 }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "block rounded" }, [
                      createVNode("div", { class: "block-content p-0" }, [
                        createVNode("ul", { class: "nav-main m-0" }, [
                          createVNode("li", { class: "nav-main-item" }, [
                            createVNode("a", {
                              class: ["nav-main-link", _ctx.route().current("user.profil") ? "active" : ""],
                              href: _ctx.route("user.profil")
                            }, [
                              createVNode("i", { class: "nav-main-link-icon fa fa-user" }),
                              createVNode("span", { class: "nav-main-link-name" }, "Profil")
                            ], 10, ["href"])
                          ]),
                          createVNode("li", { class: "nav-main-item" }, [
                            createVNode("a", {
                              class: ["nav-main-link", _ctx.route().current("user.order.*") ? "active" : ""],
                              href: _ctx.route("user.order.index")
                            }, [
                              createVNode("i", { class: "nav-main-link-icon si si-notebook" }),
                              createVNode("span", { class: "nav-main-link-name" }, "Pesanan Saya")
                            ], 10, ["href"])
                          ]),
                          createVNode("li", { class: "nav-main-item" }, [
                            createVNode("a", {
                              class: ["nav-main-link", _ctx.route().current("user.address.*") ? "active" : ""],
                              href: _ctx.route("user.address.index")
                            }, [
                              createVNode("i", { class: "nav-main-link-icon si si-map" }),
                              createVNode("span", { class: "nav-main-link-name" }, "Buku Alamat")
                            ], 10, ["href"])
                          ]),
                          createVNode("li", { class: "nav-main-item" }, [
                            createVNode("a", {
                              class: ["nav-main-link", _ctx.route().current("user.return.*") ? "active" : ""],
                              href: _ctx.route("user.return.index")
                            }, [
                              createVNode("i", { class: "nav-main-link-icon si si-action-undo" }),
                              createVNode("span", { class: "nav-main-link-name" }, "Retur Pesanan")
                            ], 10, ["href"])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_col, { lg: 18 }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "default", {}, void 0, true)
                  ]),
                  _: 3
                })
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
        _push2(`</div></div></div>`);
      } else {
        return [
          createVNode(_component_Head, null, {
            default: withCtx(() => [
              createVNode("title", null, toDisplayString($props.title), 1),
              createVNode("meta", {
                name: "description",
                content: "Kang Ebod, Makhfudz Solaeman"
              })
            ]),
            _: 1
          }),
          createVNode("div", {
            id: "page-container",
            class: $options.classContainer
          }, [
            createVNode(_component_base_header),
            createVNode("div", { id: "main-container" }, [
              createVNode("div", { class: "content" }, [
                createVNode(_component_el_row, { gutter: 30 }, {
                  default: withCtx(() => [
                    createVNode(_component_el_col, { lg: 6 }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "block rounded" }, [
                          createVNode("div", { class: "block-content p-0" }, [
                            createVNode("ul", { class: "nav-main m-0" }, [
                              createVNode("li", { class: "nav-main-item" }, [
                                createVNode("a", {
                                  class: ["nav-main-link", _ctx.route().current("user.profil") ? "active" : ""],
                                  href: _ctx.route("user.profil")
                                }, [
                                  createVNode("i", { class: "nav-main-link-icon fa fa-user" }),
                                  createVNode("span", { class: "nav-main-link-name" }, "Profil")
                                ], 10, ["href"])
                              ]),
                              createVNode("li", { class: "nav-main-item" }, [
                                createVNode("a", {
                                  class: ["nav-main-link", _ctx.route().current("user.order.*") ? "active" : ""],
                                  href: _ctx.route("user.order.index")
                                }, [
                                  createVNode("i", { class: "nav-main-link-icon si si-notebook" }),
                                  createVNode("span", { class: "nav-main-link-name" }, "Pesanan Saya")
                                ], 10, ["href"])
                              ]),
                              createVNode("li", { class: "nav-main-item" }, [
                                createVNode("a", {
                                  class: ["nav-main-link", _ctx.route().current("user.address.*") ? "active" : ""],
                                  href: _ctx.route("user.address.index")
                                }, [
                                  createVNode("i", { class: "nav-main-link-icon si si-map" }),
                                  createVNode("span", { class: "nav-main-link-name" }, "Buku Alamat")
                                ], 10, ["href"])
                              ]),
                              createVNode("li", { class: "nav-main-item" }, [
                                createVNode("a", {
                                  class: ["nav-main-link", _ctx.route().current("user.return.*") ? "active" : ""],
                                  href: _ctx.route("user.return.index")
                                }, [
                                  createVNode("i", { class: "nav-main-link-icon si si-action-undo" }),
                                  createVNode("span", { class: "nav-main-link-name" }, "Retur Pesanan")
                                ], 10, ["href"])
                              ])
                            ])
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_col, { lg: 18 }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default", {}, void 0, true)
                      ]),
                      _: 3
                    })
                  ]),
                  _: 3
                })
              ])
            ])
          ], 2)
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Frontend/Layouts/UserLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const UserLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-889e5a8b"]]);
export {
  UserLayout as default
};
