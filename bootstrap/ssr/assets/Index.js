import { resolveComponent, withCtx, createTextVNode, createVNode, withDirectives, vModelCheckbox, toDisplayString, openBlock, createBlock, Fragment, createCommentVNode, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc, E as ElButton } from "./ssr.js";
import { E as ElCheckbox } from "./index11.js";
import { E as ElRow, a as ElCol } from "./index8.js";
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
import "./index10.js";
import "./typescript.js";
const Index_vue_vue_type_style_index_0_scoped_8df85691_lang = "";
const Index_vue_vue_type_style_index_1_scoped_8df85691_lang = "";
const _sfc_main = {
  setup() {
  },
  data() {
    return {
      product: [],
      var1: null,
      var2: null,
      selected: [],
      selectAll: false,
      voucher: [],
      carts: []
    };
  },
  computed: {
    totalProduct() {
      var qty = 0;
      this.selected.forEach((v1, i1) => {
        this.carts.forEach((v2, i2) => {
          if (v1 === v2.id) {
            qty += v2.qty;
          }
        });
      });
      return qty;
    },
    totalOrder() {
      var order = 0;
      this.selected.forEach((v1, i1) => {
        this.carts.forEach((v2, i2) => {
          if (v1 === v2.id) {
            order += v2.price * v2.qty;
          }
        });
      });
      return order;
    }
  },
  async mounted() {
    await this.fetchData();
  },
  methods: {
    onSelectAll(v) {
      if (v) {
        this.selected = [];
        this.carts.forEach((value, index) => {
          this.selected.push(value.id);
        });
      } else {
        this.selected = [];
      }
    },
    async fetchData() {
      try {
        this.isLoading = true;
        const response = await axios.get("/cart/data", {});
        if (response.status == 200) {
          this.carts = response.data;
        }
        this.isLoading = false;
      } catch (error) {
        console.error(error);
      }
    },
    async updateCart(id, qty) {
      let form = this.$inertia.form({
        id,
        qty
      });
      form.post(this.route("cart.update"), {
        preserveScroll: true
      });
    },
    checkout() {
      const form = this.$inertia.form({
        cart: this.selected
      });
      form.post(this.route("checkout.shipping"), {
        preserveScroll: true
      });
    },
    removeSelected() {
      this.$swal.fire({
        icon: "warning",
        title: "Kamu Yakin?",
        text: `${this.selected.length} produk akan dihapus!`,
        showCancelButton: true,
        cancelButtonText: "Tidak, Batal",
        confirmButtonText: "Ya, Hapus",
        confirmButtonColor: "#3f9ce8",
        cancelButtonColor: "#af1310"
      }).then((result) => {
        if (result.isConfirmed) {
          this.$inertia.post(this.route("cart.removeSelected"), {
            ids: this.selected
          }, {
            preserveScroll: true,
            resetOnSuccess: false,
            onProgress: () => {
              this.$swal.fire({
                title: "Tunggu Sebentar...",
                text: "",
                imageUrl: window._asset + "media/loading.gif",
                showConfirmButton: false,
                allowOutsideClick: false
              });
            },
            onSuccess: () => {
              this.$swal.Close();
              return this.$swal.fire({
                icon: "success",
                title: "Berhasil",
                text: "Produk berhasil dihapus dari keranjang",
                showCancelButton: false,
                showConfirmButton: false
              });
            },
            onError: () => {
              this.$swal.Close();
            }
          });
        }
      });
    },
    remove(id) {
      this.$swal.fire({
        icon: "warning",
        title: "Kamu Yakin?",
        text: `Semua produk yang dipilih akan dihapus!`,
        showCancelButton: true,
        cancelButtonText: "Tidak, Batal!",
        confirmButtonText: "Ya, Hapus!"
      }).then((result) => {
        if (result.isConfirmed) {
          this.$inertia.delete(this.route("cart.remove", id), {
            preserveScroll: true,
            onSuccess: () => {
              this.$swal.Close();
              return this.$swal.fire({
                icon: "success",
                title: "Berhasil",
                text: "Produk berhasil dihapus dari keranjang",
                showCancelButton: false,
                showConfirmButton: false
              });
            }
          });
        }
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_base_layout = resolveComponent("base-layout");
  const _component_el_checkbox = ElCheckbox;
  const _component_el_button = ElButton;
  const _component_el_row = ElRow;
  const _component_el_col = ElCol;
  const _component_el_input_number = ElInputNumber;
  _push(ssrRenderComponent(_component_base_layout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="content" data-v-8df85691${_scopeId}><div class="content-heading" data-v-8df85691${_scopeId}><h2 class="mb-0" data-v-8df85691${_scopeId}>Keranjang</h2></div><div class="row" data-v-8df85691${_scopeId}><div class="col-lg-8" data-v-8df85691${_scopeId}><div class="block" data-v-8df85691${_scopeId}><div class="block-header block-header-default" data-v-8df85691${_scopeId}><div class="block-title" data-v-8df85691${_scopeId}>`);
        _push2(ssrRenderComponent(_component_el_checkbox, {
          modelValue: $data.selectAll,
          "onUpdate:modelValue": ($event) => $data.selectAll = $event,
          onChange: $options.onSelectAll
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Pilih Semua `);
            } else {
              return [
                createTextVNode(" Pilih Semua ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><div class="block-options" data-v-8df85691${_scopeId}>`);
        if ($data.selected.length) {
          _push2(ssrRenderComponent(_component_el_button, {
            type: "danger",
            onClick: $options.removeSelected
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<i class="si si-trash" data-v-8df85691${_scopeId2}></i> Hapus `);
              } else {
                return [
                  createVNode("i", { class: "si si-trash" }),
                  createTextVNode(" Hapus ")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="block-content py-0" data-v-8df85691${_scopeId}><!--[-->`);
        ssrRenderList($data.carts, (value, index) => {
          _push2(ssrRenderComponent(_component_el_row, {
            gutter: 10,
            class: "cart-item",
            key: index
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_el_col, {
                  lg: 1,
                  class: "cart-item-check"
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<label class="custom-control custom-checkbox" data-v-8df85691${_scopeId3}><input class="custom-control-input"${ssrRenderAttr("id", value.id)} type="checkbox"${ssrRenderAttr("value", value.id)}${ssrIncludeBooleanAttr(Array.isArray($data.selected) ? ssrLooseContain($data.selected, value.id) : $data.selected) ? " checked" : ""} data-v-8df85691${_scopeId3}><label class="custom-control-label"${ssrRenderAttr("for", value.id)} data-v-8df85691${_scopeId3}></label></label>`);
                    } else {
                      return [
                        createVNode("label", { class: "custom-control custom-checkbox" }, [
                          withDirectives(createVNode("input", {
                            class: "custom-control-input",
                            id: value.id,
                            type: "checkbox",
                            value: value.id,
                            "onUpdate:modelValue": ($event) => $data.selected = $event
                          }, null, 8, ["id", "value", "onUpdate:modelValue"]), [
                            [vModelCheckbox, $data.selected]
                          ]),
                          createVNode("label", {
                            class: "custom-control-label",
                            for: value.id
                          }, null, 8, ["for"])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(ssrRenderComponent(_component_el_col, { lg: 2 }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<div class="cart-product_img" data-v-8df85691${_scopeId3}><img${ssrRenderAttr("src", value.product.main_image)} class="img-fluid" data-v-8df85691${_scopeId3}></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "cart-product_img" }, [
                          createVNode("img", {
                            src: value.product.main_image,
                            class: "img-fluid"
                          }, null, 8, ["src"])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(ssrRenderComponent(_component_el_col, { lg: 10 }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<div class="fs-6" data-v-8df85691${_scopeId3}><a${ssrRenderAttr("href", _ctx.route("product.show", { slug: value.product.slug }))} data-v-8df85691${_scopeId3}><span class="fw-semibold" data-v-8df85691${_scopeId3}>${ssrInterpolate(value.product.name)}</span>`);
                      if (value.variant.name) {
                        _push4(`<!--[--> - ${ssrInterpolate(value.variant.name)}<!--]-->`);
                      } else {
                        _push4(`<!---->`);
                      }
                      _push4(`</a></div><div class="fw-bold" data-v-8df85691${_scopeId3}>${ssrInterpolate(_ctx.currency(value.price))}</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "fs-6" }, [
                          createVNode("a", {
                            href: _ctx.route("product.show", { slug: value.product.slug })
                          }, [
                            createVNode("span", { class: "fw-semibold" }, toDisplayString(value.product.name), 1),
                            value.variant.name ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                              createTextVNode(" - " + toDisplayString(value.variant.name), 1)
                            ], 64)) : createCommentVNode("", true)
                          ], 8, ["href"])
                        ]),
                        createVNode("div", { class: "fw-bold" }, toDisplayString(_ctx.currency(value.price)), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(ssrRenderComponent(_component_el_col, {
                  lg: 4,
                  class: "text-end my-auto"
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(_component_el_input_number, {
                        modelValue: value.qty,
                        "onUpdate:modelValue": ($event) => value.qty = $event,
                        min: 1,
                        size: "small",
                        class: "w-100"
                      }, null, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(_component_el_input_number, {
                          modelValue: value.qty,
                          "onUpdate:modelValue": ($event) => value.qty = $event,
                          min: 1,
                          size: "small",
                          class: "w-100"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(ssrRenderComponent(_component_el_col, {
                  lg: 6,
                  class: "text-end my-auto"
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<div class="product_sub_total" data-v-8df85691${_scopeId3}>${ssrInterpolate(_ctx.currency(value.price * value.qty))}</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "product_sub_total" }, toDisplayString(_ctx.currency(value.price * value.qty)), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(ssrRenderComponent(_component_el_col, {
                  lg: 1,
                  class: "text-end my-auto"
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<button class="btn btn-danger btn-sm" data-v-8df85691${_scopeId3}><i class="si si-trash" data-v-8df85691${_scopeId3}></i></button>`);
                    } else {
                      return [
                        createVNode("button", {
                          class: "btn btn-danger btn-sm",
                          onClick: ($event) => $options.remove(value.id)
                        }, [
                          createVNode("i", { class: "si si-trash" })
                        ], 8, ["onClick"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_el_col, {
                    lg: 1,
                    class: "cart-item-check"
                  }, {
                    default: withCtx(() => [
                      createVNode("label", { class: "custom-control custom-checkbox" }, [
                        withDirectives(createVNode("input", {
                          class: "custom-control-input",
                          id: value.id,
                          type: "checkbox",
                          value: value.id,
                          "onUpdate:modelValue": ($event) => $data.selected = $event
                        }, null, 8, ["id", "value", "onUpdate:modelValue"]), [
                          [vModelCheckbox, $data.selected]
                        ]),
                        createVNode("label", {
                          class: "custom-control-label",
                          for: value.id
                        }, null, 8, ["for"])
                      ])
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_el_col, { lg: 2 }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "cart-product_img" }, [
                        createVNode("img", {
                          src: value.product.main_image,
                          class: "img-fluid"
                        }, null, 8, ["src"])
                      ])
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_el_col, { lg: 10 }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "fs-6" }, [
                        createVNode("a", {
                          href: _ctx.route("product.show", { slug: value.product.slug })
                        }, [
                          createVNode("span", { class: "fw-semibold" }, toDisplayString(value.product.name), 1),
                          value.variant.name ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            createTextVNode(" - " + toDisplayString(value.variant.name), 1)
                          ], 64)) : createCommentVNode("", true)
                        ], 8, ["href"])
                      ]),
                      createVNode("div", { class: "fw-bold" }, toDisplayString(_ctx.currency(value.price)), 1)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_el_col, {
                    lg: 4,
                    class: "text-end my-auto"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_input_number, {
                        modelValue: value.qty,
                        "onUpdate:modelValue": ($event) => value.qty = $event,
                        min: 1,
                        size: "small",
                        class: "w-100"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_el_col, {
                    lg: 6,
                    class: "text-end my-auto"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "product_sub_total" }, toDisplayString(_ctx.currency(value.price * value.qty)), 1)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_el_col, {
                    lg: 1,
                    class: "text-end my-auto"
                  }, {
                    default: withCtx(() => [
                      createVNode("button", {
                        class: "btn btn-danger btn-sm",
                        onClick: ($event) => $options.remove(value.id)
                      }, [
                        createVNode("i", { class: "si si-trash" })
                      ], 8, ["onClick"])
                    ]),
                    _: 2
                  }, 1024)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]--></div></div></div><div class="col-lg-4" data-v-8df85691${_scopeId}><div class="block block-bordered block-shadow block-rounded" data-v-8df85691${_scopeId}><div class="block-content block-content-full" data-v-8df85691${_scopeId}><h6 class="font-size-h5" data-v-8df85691${_scopeId}>Ringkasan belanja</h6><div class="d-flex justify-content-between" data-v-8df85691${_scopeId}><div class="font-size-md font-w600" data-v-8df85691${_scopeId}>Total Belanja (${ssrInterpolate($options.totalProduct)} barang)</div><div class="font-size-md" data-v-8df85691${_scopeId}>${ssrInterpolate(_ctx.currency($options.totalOrder))}</div></div><hr data-v-8df85691${_scopeId}>`);
        _push2(ssrRenderComponent(_component_el_button, {
          type: "primary",
          size: "large",
          class: "w-100",
          onClick: $options.checkout,
          disabled: !$data.selected.length
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Checkout `);
            } else {
              return [
                createTextVNode(" Checkout ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "content" }, [
            createVNode("div", { class: "content-heading" }, [
              createVNode("h2", { class: "mb-0" }, "Keranjang")
            ]),
            createVNode("div", { class: "row" }, [
              createVNode("div", { class: "col-lg-8" }, [
                createVNode("div", { class: "block" }, [
                  createVNode("div", { class: "block-header block-header-default" }, [
                    createVNode("div", { class: "block-title" }, [
                      createVNode(_component_el_checkbox, {
                        modelValue: $data.selectAll,
                        "onUpdate:modelValue": ($event) => $data.selectAll = $event,
                        onChange: $options.onSelectAll
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Pilih Semua ")
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                    ]),
                    createVNode("div", { class: "block-options" }, [
                      $data.selected.length ? (openBlock(), createBlock(_component_el_button, {
                        key: 0,
                        type: "danger",
                        onClick: $options.removeSelected
                      }, {
                        default: withCtx(() => [
                          createVNode("i", { class: "si si-trash" }),
                          createTextVNode(" Hapus ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])) : createCommentVNode("", true)
                    ])
                  ]),
                  createVNode("div", { class: "block-content py-0" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList($data.carts, (value, index) => {
                      return openBlock(), createBlock(_component_el_row, {
                        gutter: 10,
                        class: "cart-item",
                        key: index
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_col, {
                            lg: 1,
                            class: "cart-item-check"
                          }, {
                            default: withCtx(() => [
                              createVNode("label", { class: "custom-control custom-checkbox" }, [
                                withDirectives(createVNode("input", {
                                  class: "custom-control-input",
                                  id: value.id,
                                  type: "checkbox",
                                  value: value.id,
                                  "onUpdate:modelValue": ($event) => $data.selected = $event
                                }, null, 8, ["id", "value", "onUpdate:modelValue"]), [
                                  [vModelCheckbox, $data.selected]
                                ]),
                                createVNode("label", {
                                  class: "custom-control-label",
                                  for: value.id
                                }, null, 8, ["for"])
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_el_col, { lg: 2 }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "cart-product_img" }, [
                                createVNode("img", {
                                  src: value.product.main_image,
                                  class: "img-fluid"
                                }, null, 8, ["src"])
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_el_col, { lg: 10 }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "fs-6" }, [
                                createVNode("a", {
                                  href: _ctx.route("product.show", { slug: value.product.slug })
                                }, [
                                  createVNode("span", { class: "fw-semibold" }, toDisplayString(value.product.name), 1),
                                  value.variant.name ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                    createTextVNode(" - " + toDisplayString(value.variant.name), 1)
                                  ], 64)) : createCommentVNode("", true)
                                ], 8, ["href"])
                              ]),
                              createVNode("div", { class: "fw-bold" }, toDisplayString(_ctx.currency(value.price)), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_el_col, {
                            lg: 4,
                            class: "text-end my-auto"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_input_number, {
                                modelValue: value.qty,
                                "onUpdate:modelValue": ($event) => value.qty = $event,
                                min: 1,
                                size: "small",
                                class: "w-100"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_el_col, {
                            lg: 6,
                            class: "text-end my-auto"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "product_sub_total" }, toDisplayString(_ctx.currency(value.price * value.qty)), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_el_col, {
                            lg: 1,
                            class: "text-end my-auto"
                          }, {
                            default: withCtx(() => [
                              createVNode("button", {
                                class: "btn btn-danger btn-sm",
                                onClick: ($event) => $options.remove(value.id)
                              }, [
                                createVNode("i", { class: "si si-trash" })
                              ], 8, ["onClick"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ])
                ])
              ]),
              createVNode("div", { class: "col-lg-4" }, [
                createVNode("div", { class: "block block-bordered block-shadow block-rounded" }, [
                  createVNode("div", { class: "block-content block-content-full" }, [
                    createVNode("h6", { class: "font-size-h5" }, "Ringkasan belanja"),
                    createVNode("div", { class: "d-flex justify-content-between" }, [
                      createVNode("div", { class: "font-size-md font-w600" }, "Total Belanja (" + toDisplayString($options.totalProduct) + " barang)", 1),
                      createVNode("div", { class: "font-size-md" }, toDisplayString(_ctx.currency($options.totalOrder)), 1)
                    ]),
                    createVNode("hr"),
                    createVNode(_component_el_button, {
                      type: "primary",
                      size: "large",
                      class: "w-100",
                      onClick: $options.checkout,
                      disabled: !$data.selected.length
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Checkout ")
                      ]),
                      _: 1
                    }, 8, ["onClick", "disabled"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Frontend/Cart/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-8df85691"]]);
export {
  Index as default
};
