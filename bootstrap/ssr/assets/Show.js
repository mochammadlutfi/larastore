import Flicking from "@egjs/vue3-flicking";
import { Sync } from "@egjs/flicking-plugins";
/* empty css            */import { _ as _export_sfc, r as useCartStore, E as ElButton } from "./ssr.js";
import { resolveComponent, mergeProps, withCtx, openBlock, createBlock, Fragment, renderList, createVNode, createCommentVNode, createTextVNode, toDisplayString, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { E as ElMessage } from "./index7.js";
import { E as ElRow, a as ElCol } from "./index8.js";
import { E as ElRadioGroup, a as ElRadio } from "./index14.js";
import { E as ElInputNumber } from "./index12.js";
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
import "./index10.js";
const Show_vue_vue_type_style_index_0_scoped_5295934b_lang = "";
const _sfc_main = {
  components: {
    Flicking
  },
  data() {
    return {
      cart: useCartStore(),
      options: {
        align: "prev",
        defaultIndex: 1,
        circular: true
      },
      plugins: [],
      optionNav: {
        bound: true,
        bounce: 30,
        moveType: "freeScroll",
        align: "prev"
      },
      // product : this.data.id,
      // variant_id : null,
      // qty : 1,
      stock: 0,
      form: {
        product_id: this.data.id,
        variant_id: this.data.variant[0].id,
        qty: 1,
        price: this.data.variant[0].sell_price
      }
    };
  },
  props: {
    data: Object,
    grosir: Number
  },
  mounted() {
    this.plugins = [new Sync({
      type: "index",
      synchronizedFlickingOptions: [
        {
          flicking: this.$refs.flicking0,
          isSlidable: true
        },
        {
          flicking: this.$refs.flicking1,
          isClickable: true,
          activeClass: "active"
        }
      ]
    })];
    this.variant_id = this.data.variant[0].id;
    this.calculateStock();
  },
  methods: {
    calculateStock() {
      this.data.variant.forEach((v, i) => {
        if (this.grosir == 1 && i >= 1) {
          this.stock += v.stock;
        } else if (this.grosir == 0 && i == 0) {
          this.stock += v.stock;
        }
      });
    },
    setVariantPrice(v) {
      this.form.price = v;
    },
    addCart() {
      if (this.$page.props.user) {
        let form = this.$inertia.form(this.form);
        form.post(this.route("cart.store"), {
          preserveScroll: true,
          onSuccess: () => {
            ElMessage({
              type: "success",
              message: "Produk berhasil Ditambahkan Ke Keranjang!"
            });
            this.cart.fetchCart();
          }
        });
      } else {
        window.location = this.route("login");
      }
    },
    onPaused() {
      console.log("## OnPaused");
    },
    onPlayed() {
      console.log("## OnPlayed");
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_base_layout = resolveComponent("base-layout");
  const _component_el_row = ElRow;
  const _component_el_col = ElCol;
  const _component_flicking = resolveComponent("flicking");
  const _component_el_radio_group = ElRadioGroup;
  const _component_el_radio = ElRadio;
  const _component_el_input_number = ElInputNumber;
  const _component_el_button = ElButton;
  _push(ssrRenderComponent(_component_base_layout, mergeProps({
    title: $props.data.name
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="content" data-v-5295934b${_scopeId}>`);
        _push2(ssrRenderComponent(_component_el_row, { justify: "center" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_el_col, { lg: 18 }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="block rounded" data-v-5295934b${_scopeId3}><div class="block-content p-4" data-v-5295934b${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_el_row, { gutter: 20 }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_el_col, { lg: 12 }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_flicking, {
                                  ref: "flicking0",
                                  options: { bounce: 30 },
                                  plugins: $data.plugins
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      if ($props.data.variant.length) {
                                        _push7(`<!--[-->`);
                                        ssrRenderList($props.data.variant, (v, i) => {
                                          _push7(`<!--[-->`);
                                          if (v.image != null) {
                                            _push7(`<div class="flicking-panel thumb has-background-primary" data-v-5295934b${_scopeId6}><img class="thumb-image"${ssrRenderAttr("src", v.image)} data-v-5295934b${_scopeId6}></div>`);
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                          _push7(`<!--]-->`);
                                        });
                                        _push7(`<!--]-->`);
                                      } else {
                                        _push7(`<div class="flicking-panel has-background-primary" data-v-5295934b${_scopeId6}><img class="panel-image img-fluid" src="/media/placeholder/product.png" data-v-5295934b${_scopeId6}></div>`);
                                      }
                                    } else {
                                      return [
                                        $props.data.variant.length ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList($props.data.variant, (v, i) => {
                                          return openBlock(), createBlock(Fragment, null, [
                                            v.image != null ? (openBlock(), createBlock("div", {
                                              class: "flicking-panel thumb has-background-primary",
                                              key: i
                                            }, [
                                              createVNode("img", {
                                                class: "thumb-image",
                                                src: v.image
                                              }, null, 8, ["src"])
                                            ])) : createCommentVNode("", true)
                                          ], 64);
                                        }), 256)) : (openBlock(), createBlock("div", {
                                          key: 1,
                                          class: "flicking-panel has-background-primary"
                                        }, [
                                          createVNode("img", {
                                            class: "panel-image img-fluid",
                                            src: "/media/placeholder/product.png"
                                          })
                                        ]))
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_flicking, {
                                  class: "product-img-nav",
                                  ref: "flicking1",
                                  options: $data.optionNav
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      if ($props.data.variant.length) {
                                        _push7(`<!--[-->`);
                                        ssrRenderList($props.data.variant, (v, i) => {
                                          _push7(`<!--[-->`);
                                          if (v.image != null) {
                                            _push7(`<div class="flicking-panel thumb has-background-primary" data-v-5295934b${_scopeId6}><img class="thumb-image"${ssrRenderAttr("src", v.image)} data-v-5295934b${_scopeId6}></div>`);
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                          _push7(`<!--]-->`);
                                        });
                                        _push7(`<!--]-->`);
                                      } else {
                                        _push7(`<div class="flicking-panel thumb has-background-primary" data-v-5295934b${_scopeId6}><img class="thumb-image" src="/media/placeholder/product.png" data-v-5295934b${_scopeId6}></div>`);
                                      }
                                    } else {
                                      return [
                                        $props.data.variant.length ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList($props.data.variant, (v, i) => {
                                          return openBlock(), createBlock(Fragment, null, [
                                            v.image != null ? (openBlock(), createBlock("div", {
                                              class: "flicking-panel thumb has-background-primary",
                                              key: i
                                            }, [
                                              createVNode("img", {
                                                class: "thumb-image",
                                                src: v.image
                                              }, null, 8, ["src"])
                                            ])) : createCommentVNode("", true)
                                          ], 64);
                                        }), 256)) : (openBlock(), createBlock("div", {
                                          key: 1,
                                          class: "flicking-panel thumb has-background-primary"
                                        }, [
                                          createVNode("img", {
                                            class: "thumb-image",
                                            src: "/media/placeholder/product.png"
                                          })
                                        ]))
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_flicking, {
                                    ref: "flicking0",
                                    options: { bounce: 30 },
                                    plugins: $data.plugins
                                  }, {
                                    default: withCtx(() => [
                                      $props.data.variant.length ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList($props.data.variant, (v, i) => {
                                        return openBlock(), createBlock(Fragment, null, [
                                          v.image != null ? (openBlock(), createBlock("div", {
                                            class: "flicking-panel thumb has-background-primary",
                                            key: i
                                          }, [
                                            createVNode("img", {
                                              class: "thumb-image",
                                              src: v.image
                                            }, null, 8, ["src"])
                                          ])) : createCommentVNode("", true)
                                        ], 64);
                                      }), 256)) : (openBlock(), createBlock("div", {
                                        key: 1,
                                        class: "flicking-panel has-background-primary"
                                      }, [
                                        createVNode("img", {
                                          class: "panel-image img-fluid",
                                          src: "/media/placeholder/product.png"
                                        })
                                      ]))
                                    ]),
                                    _: 1
                                  }, 8, ["plugins"]),
                                  createVNode(_component_flicking, {
                                    class: "product-img-nav",
                                    ref: "flicking1",
                                    options: $data.optionNav
                                  }, {
                                    default: withCtx(() => [
                                      $props.data.variant.length ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList($props.data.variant, (v, i) => {
                                        return openBlock(), createBlock(Fragment, null, [
                                          v.image != null ? (openBlock(), createBlock("div", {
                                            class: "flicking-panel thumb has-background-primary",
                                            key: i
                                          }, [
                                            createVNode("img", {
                                              class: "thumb-image",
                                              src: v.image
                                            }, null, 8, ["src"])
                                          ])) : createCommentVNode("", true)
                                        ], 64);
                                      }), 256)) : (openBlock(), createBlock("div", {
                                        key: 1,
                                        class: "flicking-panel thumb has-background-primary"
                                      }, [
                                        createVNode("img", {
                                          class: "thumb-image",
                                          src: "/media/placeholder/product.png"
                                        })
                                      ]))
                                    ]),
                                    _: 1
                                  }, 8, ["options"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_el_col, { lg: 12 }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<div class="product-info" data-v-5295934b${_scopeId5}><h2 class="product-title" data-v-5295934b${_scopeId5}>${ssrInterpolate($props.data.name)}</h2><div class="" data-v-5295934b${_scopeId5}> Stock Produk ${ssrInterpolate($data.stock)}</div><div class="product-price mb-4" data-v-5295934b${_scopeId5}><div class="product-price_final" data-v-5295934b${_scopeId5}>${ssrInterpolate(_ctx.currency($data.form.price))}</div></div></div>`);
                                if ($props.data.variant.length > 1) {
                                  _push6(`<!--[-->`);
                                  if ($props.data.has_variant) {
                                    _push6(`<div class="mb-4" data-v-5295934b${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_el_radio_group, {
                                      modelValue: $data.form.variant_id,
                                      "onUpdate:modelValue": ($event) => $data.form.variant_id = $event
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<!--[-->`);
                                          ssrRenderList($props.data.variant, (v, i) => {
                                            _push7(`<!--[-->`);
                                            if ($props.grosir == 1 && i >= 1) {
                                              _push7(ssrRenderComponent(_component_el_radio, {
                                                label: v.id,
                                                border: "",
                                                class: "me-2",
                                                onChange: ($event) => $options.setVariantPrice(v.sell_price),
                                                disabled: v.stock ? false : true
                                              }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`${ssrInterpolate(v.name)}`);
                                                  } else {
                                                    return [
                                                      createTextVNode(toDisplayString(v.name), 1)
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            } else if ($props.grosir == 0 && i == 0) {
                                              _push7(ssrRenderComponent(_component_el_radio, {
                                                label: v.id,
                                                border: "",
                                                class: "me-2",
                                                onChange: ($event) => $options.setVariantPrice(v.sell_price),
                                                disabled: v.stock ? false : true
                                              }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`${ssrInterpolate(v.name)}`);
                                                  } else {
                                                    return [
                                                      createTextVNode(toDisplayString(v.name), 1)
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                            _push7(`<!--]-->`);
                                          });
                                          _push7(`<!--]-->`);
                                        } else {
                                          return [
                                            (openBlock(true), createBlock(Fragment, null, renderList($props.data.variant, (v, i) => {
                                              return openBlock(), createBlock(Fragment, { key: i }, [
                                                $props.grosir == 1 && i >= 1 ? (openBlock(), createBlock(_component_el_radio, {
                                                  key: 0,
                                                  label: v.id,
                                                  border: "",
                                                  class: "me-2",
                                                  onChange: ($event) => $options.setVariantPrice(v.sell_price),
                                                  disabled: v.stock ? false : true
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(v.name), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["label", "onChange", "disabled"])) : $props.grosir == 0 && i == 0 ? (openBlock(), createBlock(_component_el_radio, {
                                                  key: 1,
                                                  label: v.id,
                                                  border: "",
                                                  class: "me-2",
                                                  onChange: ($event) => $options.setVariantPrice(v.sell_price),
                                                  disabled: v.stock ? false : true
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(v.name), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["label", "onChange", "disabled"])) : createCommentVNode("", true)
                                              ], 64);
                                            }), 128))
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                  } else {
                                    _push6(`<!---->`);
                                  }
                                  _push6(`<!--]-->`);
                                } else {
                                  _push6(`<!---->`);
                                }
                                _push6(`<div class="mb-4" data-v-5295934b${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_el_input_number, {
                                  modelValue: $data.form.qty,
                                  "onUpdate:modelValue": ($event) => $data.form.qty = $event,
                                  min: 1,
                                  size: "large"
                                }, null, _parent6, _scopeId5));
                                _push6(`</div>`);
                                _push6(ssrRenderComponent(_component_el_button, {
                                  type: "primary",
                                  size: "large",
                                  onClick: $options.addCart,
                                  disabled: $data.stock ? false : true
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<i class="fa fa-cart-plus me-2" data-v-5295934b${_scopeId6}></i> Tambah Keranjang `);
                                    } else {
                                      return [
                                        createVNode("i", { class: "fa fa-cart-plus me-2" }),
                                        createTextVNode(" Tambah Keranjang ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode("div", { class: "product-info" }, [
                                    createVNode("h2", { class: "product-title" }, toDisplayString($props.data.name), 1),
                                    createVNode("div", { class: "" }, " Stock Produk " + toDisplayString($data.stock), 1),
                                    createVNode("div", { class: "product-price mb-4" }, [
                                      createVNode("div", { class: "product-price_final" }, toDisplayString(_ctx.currency($data.form.price)), 1)
                                    ])
                                  ]),
                                  $props.data.variant.length > 1 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                    $props.data.has_variant ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "mb-4"
                                    }, [
                                      createVNode(_component_el_radio_group, {
                                        modelValue: $data.form.variant_id,
                                        "onUpdate:modelValue": ($event) => $data.form.variant_id = $event
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList($props.data.variant, (v, i) => {
                                            return openBlock(), createBlock(Fragment, { key: i }, [
                                              $props.grosir == 1 && i >= 1 ? (openBlock(), createBlock(_component_el_radio, {
                                                key: 0,
                                                label: v.id,
                                                border: "",
                                                class: "me-2",
                                                onChange: ($event) => $options.setVariantPrice(v.sell_price),
                                                disabled: v.stock ? false : true
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(v.name), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["label", "onChange", "disabled"])) : $props.grosir == 0 && i == 0 ? (openBlock(), createBlock(_component_el_radio, {
                                                key: 1,
                                                label: v.id,
                                                border: "",
                                                class: "me-2",
                                                onChange: ($event) => $options.setVariantPrice(v.sell_price),
                                                disabled: v.stock ? false : true
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(v.name), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["label", "onChange", "disabled"])) : createCommentVNode("", true)
                                            ], 64);
                                          }), 128))
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ])) : createCommentVNode("", true)
                                  ], 64)) : createCommentVNode("", true),
                                  createVNode("div", { class: "mb-4" }, [
                                    createVNode(_component_el_input_number, {
                                      modelValue: $data.form.qty,
                                      "onUpdate:modelValue": ($event) => $data.form.qty = $event,
                                      min: 1,
                                      size: "large"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode(_component_el_button, {
                                    type: "primary",
                                    size: "large",
                                    onClick: withModifiers($options.addCart, ["prevent"]),
                                    disabled: $data.stock ? false : true
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("i", { class: "fa fa-cart-plus me-2" }),
                                      createTextVNode(" Tambah Keranjang ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick", "disabled"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_el_col, { lg: 12 }, {
                              default: withCtx(() => [
                                createVNode(_component_flicking, {
                                  ref: "flicking0",
                                  options: { bounce: 30 },
                                  plugins: $data.plugins
                                }, {
                                  default: withCtx(() => [
                                    $props.data.variant.length ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList($props.data.variant, (v, i) => {
                                      return openBlock(), createBlock(Fragment, null, [
                                        v.image != null ? (openBlock(), createBlock("div", {
                                          class: "flicking-panel thumb has-background-primary",
                                          key: i
                                        }, [
                                          createVNode("img", {
                                            class: "thumb-image",
                                            src: v.image
                                          }, null, 8, ["src"])
                                        ])) : createCommentVNode("", true)
                                      ], 64);
                                    }), 256)) : (openBlock(), createBlock("div", {
                                      key: 1,
                                      class: "flicking-panel has-background-primary"
                                    }, [
                                      createVNode("img", {
                                        class: "panel-image img-fluid",
                                        src: "/media/placeholder/product.png"
                                      })
                                    ]))
                                  ]),
                                  _: 1
                                }, 8, ["plugins"]),
                                createVNode(_component_flicking, {
                                  class: "product-img-nav",
                                  ref: "flicking1",
                                  options: $data.optionNav
                                }, {
                                  default: withCtx(() => [
                                    $props.data.variant.length ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList($props.data.variant, (v, i) => {
                                      return openBlock(), createBlock(Fragment, null, [
                                        v.image != null ? (openBlock(), createBlock("div", {
                                          class: "flicking-panel thumb has-background-primary",
                                          key: i
                                        }, [
                                          createVNode("img", {
                                            class: "thumb-image",
                                            src: v.image
                                          }, null, 8, ["src"])
                                        ])) : createCommentVNode("", true)
                                      ], 64);
                                    }), 256)) : (openBlock(), createBlock("div", {
                                      key: 1,
                                      class: "flicking-panel thumb has-background-primary"
                                    }, [
                                      createVNode("img", {
                                        class: "thumb-image",
                                        src: "/media/placeholder/product.png"
                                      })
                                    ]))
                                  ]),
                                  _: 1
                                }, 8, ["options"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_col, { lg: 12 }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "product-info" }, [
                                  createVNode("h2", { class: "product-title" }, toDisplayString($props.data.name), 1),
                                  createVNode("div", { class: "" }, " Stock Produk " + toDisplayString($data.stock), 1),
                                  createVNode("div", { class: "product-price mb-4" }, [
                                    createVNode("div", { class: "product-price_final" }, toDisplayString(_ctx.currency($data.form.price)), 1)
                                  ])
                                ]),
                                $props.data.variant.length > 1 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                  $props.data.has_variant ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "mb-4"
                                  }, [
                                    createVNode(_component_el_radio_group, {
                                      modelValue: $data.form.variant_id,
                                      "onUpdate:modelValue": ($event) => $data.form.variant_id = $event
                                    }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList($props.data.variant, (v, i) => {
                                          return openBlock(), createBlock(Fragment, { key: i }, [
                                            $props.grosir == 1 && i >= 1 ? (openBlock(), createBlock(_component_el_radio, {
                                              key: 0,
                                              label: v.id,
                                              border: "",
                                              class: "me-2",
                                              onChange: ($event) => $options.setVariantPrice(v.sell_price),
                                              disabled: v.stock ? false : true
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(v.name), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["label", "onChange", "disabled"])) : $props.grosir == 0 && i == 0 ? (openBlock(), createBlock(_component_el_radio, {
                                              key: 1,
                                              label: v.id,
                                              border: "",
                                              class: "me-2",
                                              onChange: ($event) => $options.setVariantPrice(v.sell_price),
                                              disabled: v.stock ? false : true
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(v.name), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["label", "onChange", "disabled"])) : createCommentVNode("", true)
                                          ], 64);
                                        }), 128))
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])) : createCommentVNode("", true)
                                ], 64)) : createCommentVNode("", true),
                                createVNode("div", { class: "mb-4" }, [
                                  createVNode(_component_el_input_number, {
                                    modelValue: $data.form.qty,
                                    "onUpdate:modelValue": ($event) => $data.form.qty = $event,
                                    min: 1,
                                    size: "large"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode(_component_el_button, {
                                  type: "primary",
                                  size: "large",
                                  onClick: withModifiers($options.addCart, ["prevent"]),
                                  disabled: $data.stock ? false : true
                                }, {
                                  default: withCtx(() => [
                                    createVNode("i", { class: "fa fa-cart-plus me-2" }),
                                    createTextVNode(" Tambah Keranjang ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick", "disabled"])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "block rounded" }, [
                        createVNode("div", { class: "block-content p-4" }, [
                          createVNode(_component_el_row, { gutter: 20 }, {
                            default: withCtx(() => [
                              createVNode(_component_el_col, { lg: 12 }, {
                                default: withCtx(() => [
                                  createVNode(_component_flicking, {
                                    ref: "flicking0",
                                    options: { bounce: 30 },
                                    plugins: $data.plugins
                                  }, {
                                    default: withCtx(() => [
                                      $props.data.variant.length ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList($props.data.variant, (v, i) => {
                                        return openBlock(), createBlock(Fragment, null, [
                                          v.image != null ? (openBlock(), createBlock("div", {
                                            class: "flicking-panel thumb has-background-primary",
                                            key: i
                                          }, [
                                            createVNode("img", {
                                              class: "thumb-image",
                                              src: v.image
                                            }, null, 8, ["src"])
                                          ])) : createCommentVNode("", true)
                                        ], 64);
                                      }), 256)) : (openBlock(), createBlock("div", {
                                        key: 1,
                                        class: "flicking-panel has-background-primary"
                                      }, [
                                        createVNode("img", {
                                          class: "panel-image img-fluid",
                                          src: "/media/placeholder/product.png"
                                        })
                                      ]))
                                    ]),
                                    _: 1
                                  }, 8, ["plugins"]),
                                  createVNode(_component_flicking, {
                                    class: "product-img-nav",
                                    ref: "flicking1",
                                    options: $data.optionNav
                                  }, {
                                    default: withCtx(() => [
                                      $props.data.variant.length ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList($props.data.variant, (v, i) => {
                                        return openBlock(), createBlock(Fragment, null, [
                                          v.image != null ? (openBlock(), createBlock("div", {
                                            class: "flicking-panel thumb has-background-primary",
                                            key: i
                                          }, [
                                            createVNode("img", {
                                              class: "thumb-image",
                                              src: v.image
                                            }, null, 8, ["src"])
                                          ])) : createCommentVNode("", true)
                                        ], 64);
                                      }), 256)) : (openBlock(), createBlock("div", {
                                        key: 1,
                                        class: "flicking-panel thumb has-background-primary"
                                      }, [
                                        createVNode("img", {
                                          class: "thumb-image",
                                          src: "/media/placeholder/product.png"
                                        })
                                      ]))
                                    ]),
                                    _: 1
                                  }, 8, ["options"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_col, { lg: 12 }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "product-info" }, [
                                    createVNode("h2", { class: "product-title" }, toDisplayString($props.data.name), 1),
                                    createVNode("div", { class: "" }, " Stock Produk " + toDisplayString($data.stock), 1),
                                    createVNode("div", { class: "product-price mb-4" }, [
                                      createVNode("div", { class: "product-price_final" }, toDisplayString(_ctx.currency($data.form.price)), 1)
                                    ])
                                  ]),
                                  $props.data.variant.length > 1 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                    $props.data.has_variant ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "mb-4"
                                    }, [
                                      createVNode(_component_el_radio_group, {
                                        modelValue: $data.form.variant_id,
                                        "onUpdate:modelValue": ($event) => $data.form.variant_id = $event
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList($props.data.variant, (v, i) => {
                                            return openBlock(), createBlock(Fragment, { key: i }, [
                                              $props.grosir == 1 && i >= 1 ? (openBlock(), createBlock(_component_el_radio, {
                                                key: 0,
                                                label: v.id,
                                                border: "",
                                                class: "me-2",
                                                onChange: ($event) => $options.setVariantPrice(v.sell_price),
                                                disabled: v.stock ? false : true
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(v.name), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["label", "onChange", "disabled"])) : $props.grosir == 0 && i == 0 ? (openBlock(), createBlock(_component_el_radio, {
                                                key: 1,
                                                label: v.id,
                                                border: "",
                                                class: "me-2",
                                                onChange: ($event) => $options.setVariantPrice(v.sell_price),
                                                disabled: v.stock ? false : true
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(v.name), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["label", "onChange", "disabled"])) : createCommentVNode("", true)
                                            ], 64);
                                          }), 128))
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ])) : createCommentVNode("", true)
                                  ], 64)) : createCommentVNode("", true),
                                  createVNode("div", { class: "mb-4" }, [
                                    createVNode(_component_el_input_number, {
                                      modelValue: $data.form.qty,
                                      "onUpdate:modelValue": ($event) => $data.form.qty = $event,
                                      min: 1,
                                      size: "large"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode(_component_el_button, {
                                    type: "primary",
                                    size: "large",
                                    onClick: withModifiers($options.addCart, ["prevent"]),
                                    disabled: $data.stock ? false : true
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("i", { class: "fa fa-cart-plus me-2" }),
                                      createTextVNode(" Tambah Keranjang ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick", "disabled"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_el_col, { lg: 18 }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "block rounded" }, [
                      createVNode("div", { class: "block-content p-4" }, [
                        createVNode(_component_el_row, { gutter: 20 }, {
                          default: withCtx(() => [
                            createVNode(_component_el_col, { lg: 12 }, {
                              default: withCtx(() => [
                                createVNode(_component_flicking, {
                                  ref: "flicking0",
                                  options: { bounce: 30 },
                                  plugins: $data.plugins
                                }, {
                                  default: withCtx(() => [
                                    $props.data.variant.length ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList($props.data.variant, (v, i) => {
                                      return openBlock(), createBlock(Fragment, null, [
                                        v.image != null ? (openBlock(), createBlock("div", {
                                          class: "flicking-panel thumb has-background-primary",
                                          key: i
                                        }, [
                                          createVNode("img", {
                                            class: "thumb-image",
                                            src: v.image
                                          }, null, 8, ["src"])
                                        ])) : createCommentVNode("", true)
                                      ], 64);
                                    }), 256)) : (openBlock(), createBlock("div", {
                                      key: 1,
                                      class: "flicking-panel has-background-primary"
                                    }, [
                                      createVNode("img", {
                                        class: "panel-image img-fluid",
                                        src: "/media/placeholder/product.png"
                                      })
                                    ]))
                                  ]),
                                  _: 1
                                }, 8, ["plugins"]),
                                createVNode(_component_flicking, {
                                  class: "product-img-nav",
                                  ref: "flicking1",
                                  options: $data.optionNav
                                }, {
                                  default: withCtx(() => [
                                    $props.data.variant.length ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList($props.data.variant, (v, i) => {
                                      return openBlock(), createBlock(Fragment, null, [
                                        v.image != null ? (openBlock(), createBlock("div", {
                                          class: "flicking-panel thumb has-background-primary",
                                          key: i
                                        }, [
                                          createVNode("img", {
                                            class: "thumb-image",
                                            src: v.image
                                          }, null, 8, ["src"])
                                        ])) : createCommentVNode("", true)
                                      ], 64);
                                    }), 256)) : (openBlock(), createBlock("div", {
                                      key: 1,
                                      class: "flicking-panel thumb has-background-primary"
                                    }, [
                                      createVNode("img", {
                                        class: "thumb-image",
                                        src: "/media/placeholder/product.png"
                                      })
                                    ]))
                                  ]),
                                  _: 1
                                }, 8, ["options"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_col, { lg: 12 }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "product-info" }, [
                                  createVNode("h2", { class: "product-title" }, toDisplayString($props.data.name), 1),
                                  createVNode("div", { class: "" }, " Stock Produk " + toDisplayString($data.stock), 1),
                                  createVNode("div", { class: "product-price mb-4" }, [
                                    createVNode("div", { class: "product-price_final" }, toDisplayString(_ctx.currency($data.form.price)), 1)
                                  ])
                                ]),
                                $props.data.variant.length > 1 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                  $props.data.has_variant ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "mb-4"
                                  }, [
                                    createVNode(_component_el_radio_group, {
                                      modelValue: $data.form.variant_id,
                                      "onUpdate:modelValue": ($event) => $data.form.variant_id = $event
                                    }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList($props.data.variant, (v, i) => {
                                          return openBlock(), createBlock(Fragment, { key: i }, [
                                            $props.grosir == 1 && i >= 1 ? (openBlock(), createBlock(_component_el_radio, {
                                              key: 0,
                                              label: v.id,
                                              border: "",
                                              class: "me-2",
                                              onChange: ($event) => $options.setVariantPrice(v.sell_price),
                                              disabled: v.stock ? false : true
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(v.name), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["label", "onChange", "disabled"])) : $props.grosir == 0 && i == 0 ? (openBlock(), createBlock(_component_el_radio, {
                                              key: 1,
                                              label: v.id,
                                              border: "",
                                              class: "me-2",
                                              onChange: ($event) => $options.setVariantPrice(v.sell_price),
                                              disabled: v.stock ? false : true
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(v.name), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["label", "onChange", "disabled"])) : createCommentVNode("", true)
                                          ], 64);
                                        }), 128))
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])) : createCommentVNode("", true)
                                ], 64)) : createCommentVNode("", true),
                                createVNode("div", { class: "mb-4" }, [
                                  createVNode(_component_el_input_number, {
                                    modelValue: $data.form.qty,
                                    "onUpdate:modelValue": ($event) => $data.form.qty = $event,
                                    min: 1,
                                    size: "large"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode(_component_el_button, {
                                  type: "primary",
                                  size: "large",
                                  onClick: withModifiers($options.addCart, ["prevent"]),
                                  disabled: $data.stock ? false : true
                                }, {
                                  default: withCtx(() => [
                                    createVNode("i", { class: "fa fa-cart-plus me-2" }),
                                    createTextVNode(" Tambah Keranjang ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick", "disabled"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
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
          createVNode("div", { class: "content" }, [
            createVNode(_component_el_row, { justify: "center" }, {
              default: withCtx(() => [
                createVNode(_component_el_col, { lg: 18 }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "block rounded" }, [
                      createVNode("div", { class: "block-content p-4" }, [
                        createVNode(_component_el_row, { gutter: 20 }, {
                          default: withCtx(() => [
                            createVNode(_component_el_col, { lg: 12 }, {
                              default: withCtx(() => [
                                createVNode(_component_flicking, {
                                  ref: "flicking0",
                                  options: { bounce: 30 },
                                  plugins: $data.plugins
                                }, {
                                  default: withCtx(() => [
                                    $props.data.variant.length ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList($props.data.variant, (v, i) => {
                                      return openBlock(), createBlock(Fragment, null, [
                                        v.image != null ? (openBlock(), createBlock("div", {
                                          class: "flicking-panel thumb has-background-primary",
                                          key: i
                                        }, [
                                          createVNode("img", {
                                            class: "thumb-image",
                                            src: v.image
                                          }, null, 8, ["src"])
                                        ])) : createCommentVNode("", true)
                                      ], 64);
                                    }), 256)) : (openBlock(), createBlock("div", {
                                      key: 1,
                                      class: "flicking-panel has-background-primary"
                                    }, [
                                      createVNode("img", {
                                        class: "panel-image img-fluid",
                                        src: "/media/placeholder/product.png"
                                      })
                                    ]))
                                  ]),
                                  _: 1
                                }, 8, ["plugins"]),
                                createVNode(_component_flicking, {
                                  class: "product-img-nav",
                                  ref: "flicking1",
                                  options: $data.optionNav
                                }, {
                                  default: withCtx(() => [
                                    $props.data.variant.length ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList($props.data.variant, (v, i) => {
                                      return openBlock(), createBlock(Fragment, null, [
                                        v.image != null ? (openBlock(), createBlock("div", {
                                          class: "flicking-panel thumb has-background-primary",
                                          key: i
                                        }, [
                                          createVNode("img", {
                                            class: "thumb-image",
                                            src: v.image
                                          }, null, 8, ["src"])
                                        ])) : createCommentVNode("", true)
                                      ], 64);
                                    }), 256)) : (openBlock(), createBlock("div", {
                                      key: 1,
                                      class: "flicking-panel thumb has-background-primary"
                                    }, [
                                      createVNode("img", {
                                        class: "thumb-image",
                                        src: "/media/placeholder/product.png"
                                      })
                                    ]))
                                  ]),
                                  _: 1
                                }, 8, ["options"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_col, { lg: 12 }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "product-info" }, [
                                  createVNode("h2", { class: "product-title" }, toDisplayString($props.data.name), 1),
                                  createVNode("div", { class: "" }, " Stock Produk " + toDisplayString($data.stock), 1),
                                  createVNode("div", { class: "product-price mb-4" }, [
                                    createVNode("div", { class: "product-price_final" }, toDisplayString(_ctx.currency($data.form.price)), 1)
                                  ])
                                ]),
                                $props.data.variant.length > 1 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                  $props.data.has_variant ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "mb-4"
                                  }, [
                                    createVNode(_component_el_radio_group, {
                                      modelValue: $data.form.variant_id,
                                      "onUpdate:modelValue": ($event) => $data.form.variant_id = $event
                                    }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList($props.data.variant, (v, i) => {
                                          return openBlock(), createBlock(Fragment, { key: i }, [
                                            $props.grosir == 1 && i >= 1 ? (openBlock(), createBlock(_component_el_radio, {
                                              key: 0,
                                              label: v.id,
                                              border: "",
                                              class: "me-2",
                                              onChange: ($event) => $options.setVariantPrice(v.sell_price),
                                              disabled: v.stock ? false : true
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(v.name), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["label", "onChange", "disabled"])) : $props.grosir == 0 && i == 0 ? (openBlock(), createBlock(_component_el_radio, {
                                              key: 1,
                                              label: v.id,
                                              border: "",
                                              class: "me-2",
                                              onChange: ($event) => $options.setVariantPrice(v.sell_price),
                                              disabled: v.stock ? false : true
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(v.name), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["label", "onChange", "disabled"])) : createCommentVNode("", true)
                                          ], 64);
                                        }), 128))
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])) : createCommentVNode("", true)
                                ], 64)) : createCommentVNode("", true),
                                createVNode("div", { class: "mb-4" }, [
                                  createVNode(_component_el_input_number, {
                                    modelValue: $data.form.qty,
                                    "onUpdate:modelValue": ($event) => $data.form.qty = $event,
                                    min: 1,
                                    size: "large"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode(_component_el_button, {
                                  type: "primary",
                                  size: "large",
                                  onClick: withModifiers($options.addCart, ["prevent"]),
                                  disabled: $data.stock ? false : true
                                }, {
                                  default: withCtx(() => [
                                    createVNode("i", { class: "fa fa-cart-plus me-2" }),
                                    createTextVNode(" Tambah Keranjang ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick", "disabled"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Frontend/Product/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Show = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-5295934b"]]);
export {
  Show as default
};
