import ShippingAddress from "./ShippingAddress.js";
import { resolveComponent, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc, E as ElButton } from "./ssr.js";
import { E as ElMessage } from "./index7.js";
import { E as ElRow, a as ElCol } from "./index8.js";
import "lodash";
import "./index13.js";
import "@vue/reactivity";
import "@vueuse/core";
import "./scroll.js";
import "@vue/shared";
import "./index10.js";
import "lodash-unified";
import "@element-plus/icons-vue";
import "./typescript.js";
import "./index9.js";
import "async-validator";
import "./index14.js";
import "@vue/server-renderer";
import "@inertiajs/vue3";
import "@inertiajs/vue3/server";
import "pinia";
import "@ctrl/tinycolor";
const Shipping_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  components: {
    ShippingAddress
  },
  props: {
    cart: Array,
    errors: Object
  },
  data() {
    return {
      product: [],
      var1: null,
      var2: null,
      selected: [],
      selectAll: false,
      address: {},
      shippingCost: 0,
      showAll: true
    };
  },
  computed: {
    totalProduct() {
      var qty = 0;
      this.selected.forEach((value, index) => {
        qty += value.qty;
      });
      return qty;
    },
    totalHarga() {
      var total = 0;
      this.cart.forEach((value, index) => {
        total += value.price * value.qty;
      });
      return total;
    }
  },
  watch: {
    selectAll: function(val) {
      this.selected = [];
      if (val) {
        this.$page.props.cart.forEach((value, index) => {
          this.selected.push(value);
        });
      }
    },
    address(v) {
      if (Object.keys(v).length) {
        if (v.distance) {
          let km = (v.distance - 5e3) / 1e3;
          this.shippingCost = km * 6e3;
        }
      }
    }
  },
  mounted() {
    this.getAddress();
  },
  methods: {
    payment() {
      const form = this.$inertia.form({
        products: this.cart,
        shipping: this.shippingSelected,
        delivery_id: this.destination.id
        // sub_total : ,
      });
      form.post(this.route("checkout.payment"), {
        preserveScroll: true,
        onSuccess: () => {
        }
      });
    },
    async payment() {
      try {
        const vm = this;
        this.isLoading = true;
        const response = await axios.post(this.route("checkout.store"), {
          lines: this.cart,
          address_id: this.address.id,
          shipping_cost: this.shippingCost,
          total: this.totalHarga
        });
        if (response.status == 200) {
          const data = response.data;
          snap.pay(data.payment_ref, {
            onSuccess: function(result) {
              ElMessage({
                type: "success",
                message: "Pembayaran Berhasil"
              });
              vm.updatePayment("paid", data.id);
            },
            onPending: function(result) {
              window.location.href = vm.route("user.order.show", { id: data.id });
            },
            onError: function(result) {
              window.location.href = vm.route("user.order.show", { id: data.id });
            },
            onClose: function() {
              window.location.href = vm.route("user.order.show", { id: data.id });
            }
          });
        }
        this.isLoading = false;
      } catch (error) {
        console.error(error);
      }
    },
    async getAddress() {
      try {
        this.isLoading = true;
        const response = await axios.get("/user/alamat/data", {
          params: {
            main: 1
          }
        });
        if (response.status == 200) {
          this.address = response.data;
        }
        this.isLoading = false;
      } catch (error) {
        console.error(error);
      }
    },
    async updatePayment(status, id) {
      try {
        this.isLoading = true;
        const response = await axios.post(this.route("user.order.state", { id }), {
          status
        });
        if (response.status == 200) {
          window.location.href = this.route("user.order.show", { id });
        }
        this.isLoading = false;
      } catch (error) {
        console.error(error);
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_base_layout = resolveComponent("base-layout");
  const _component_el_row = ElRow;
  const _component_el_col = ElCol;
  const _component_shipping_address = resolveComponent("shipping-address");
  const _component_el_button = ElButton;
  _push(ssrRenderComponent(_component_base_layout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="content"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_el_row, { gutter: 20 }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_el_col, { lg: 16 }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_shipping_address, {
                      modelValue: $data.address,
                      "onUpdate:modelValue": ($event) => $data.address = $event
                    }, null, _parent4, _scopeId3));
                    _push4(`<div class="content-heading pt-0 mb-0 border-0 font-size-md"${_scopeId3}> Pesanan Kamu </div><div class="block block-bordered rounded"${_scopeId3}><div class="block-content p-3"${_scopeId3}><!--[-->`);
                    ssrRenderList($props.cart, (d, i) => {
                      _push4(`<!--[-->`);
                      if (i == 0 || !$data.showAll) {
                        _push4(ssrRenderComponent(_component_el_row, {
                          key: d.variant_id,
                          class: "mb-2",
                          gutter: 10
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_el_col, { lg: 2 }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<img${ssrRenderAttr("src", d.product.main_image)} class="img-fluid"${_scopeId5}>`);
                                  } else {
                                    return [
                                      createVNode("img", {
                                        src: d.product.main_image,
                                        class: "img-fluid"
                                      }, null, 8, ["src"])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_el_col, {
                                lg: 14,
                                class: "my-auto"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="fs-5 fw-bold"${_scopeId5}>${ssrInterpolate(d.product.name)}</div><div class="fs-sm fw-semibold"${_scopeId5}>${ssrInterpolate(_ctx.currency(d.price))} x ${ssrInterpolate(d.qty)} barang</div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "fs-5 fw-bold" }, toDisplayString(d.product.name), 1),
                                      createVNode("div", { class: "fs-sm fw-semibold" }, toDisplayString(_ctx.currency(d.price)) + " x " + toDisplayString(d.qty) + " barang", 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_el_col, {
                                lg: 8,
                                class: "my-auto"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="fs-5 fw-bold text-end"${_scopeId5}>${ssrInterpolate(_ctx.currency(d.price * d.qty))}</div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "fs-5 fw-bold text-end" }, toDisplayString(_ctx.currency(d.price * d.qty)), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_el_col, { lg: 2 }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: d.product.main_image,
                                      class: "img-fluid"
                                    }, null, 8, ["src"])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_el_col, {
                                  lg: 14,
                                  class: "my-auto"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "fs-5 fw-bold" }, toDisplayString(d.product.name), 1),
                                    createVNode("div", { class: "fs-sm fw-semibold" }, toDisplayString(_ctx.currency(d.price)) + " x " + toDisplayString(d.qty) + " barang", 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_el_col, {
                                  lg: 8,
                                  class: "my-auto"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "fs-5 fw-bold text-end" }, toDisplayString(_ctx.currency(d.price * d.qty)), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        _push4(`<!---->`);
                      }
                      _push4(`<!--]-->`);
                    });
                    _push4(`<!--]--></div>`);
                    if ($props.cart.length > 1) {
                      _push4(`<div class="block-content p-3 text-center border-top border-bottom border-2"${_scopeId3}>`);
                      if ($data.showAll) {
                        _push4(`<!--[--><span class="fs-6 fw-semibold"${_scopeId3}>Tampilkan Semua</span><i class="fa fa-angle-small-down"${_scopeId3}></i><!--]-->`);
                      } else {
                        _push4(`<!--[--><span class="fs-6 fw-semibold"${_scopeId3}>Tampilkan Lebih Sedikit</span><i class="fa fa-angle-small-up"${_scopeId3}></i><!--]-->`);
                      }
                      _push4(`</div>`);
                    } else {
                      _push4(`<!---->`);
                    }
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode(_component_shipping_address, {
                        modelValue: $data.address,
                        "onUpdate:modelValue": ($event) => $data.address = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("div", { class: "content-heading pt-0 mb-0 border-0 font-size-md" }, " Pesanan Kamu "),
                      createVNode("div", { class: "block block-bordered rounded" }, [
                        createVNode("div", { class: "block-content p-3" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList($props.cart, (d, i) => {
                            return openBlock(), createBlock(Fragment, null, [
                              i == 0 || !$data.showAll ? (openBlock(), createBlock(_component_el_row, {
                                key: d.variant_id,
                                class: "mb-2",
                                gutter: 10
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_el_col, { lg: 2 }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: d.product.main_image,
                                        class: "img-fluid"
                                      }, null, 8, ["src"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_el_col, {
                                    lg: 14,
                                    class: "my-auto"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "fs-5 fw-bold" }, toDisplayString(d.product.name), 1),
                                      createVNode("div", { class: "fs-sm fw-semibold" }, toDisplayString(_ctx.currency(d.price)) + " x " + toDisplayString(d.qty) + " barang", 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_el_col, {
                                    lg: 8,
                                    class: "my-auto"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "fs-5 fw-bold text-end" }, toDisplayString(_ctx.currency(d.price * d.qty)), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)) : createCommentVNode("", true)
                            ], 64);
                          }), 256))
                        ]),
                        $props.cart.length > 1 ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "block-content p-3 text-center border-top border-bottom border-2",
                          onClick: ($event) => $data.showAll = !$data.showAll
                        }, [
                          $data.showAll ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            createVNode("span", { class: "fs-6 fw-semibold" }, "Tampilkan Semua"),
                            createVNode("i", { class: "fa fa-angle-small-down" })
                          ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                            createVNode("span", { class: "fs-6 fw-semibold" }, "Tampilkan Lebih Sedikit"),
                            createVNode("i", { class: "fa fa-angle-small-up" })
                          ], 64))
                        ], 8, ["onClick"])) : createCommentVNode("", true)
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_el_col, { lg: 8 }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="content-heading d-flex justify-content-between mb-2 py-2"${_scopeId3}> Rincian Belanja </div><div class="block block-bordered rounded"${_scopeId3}><div class="block-content block-content-full"${_scopeId3}><div class="d-flex justify-content-between mb-3"${_scopeId3}><div class="fs-6"${_scopeId3}>Total Harga (${ssrInterpolate($props.cart.length)} barang)</div><div class="fs-6 fw-bold"${_scopeId3}>${ssrInterpolate(_ctx.currency($options.totalHarga))}</div></div><div class="d-flex justify-content-between"${_scopeId3}><div class="fs-6"${_scopeId3}>Biaya Kirim</div><div class="fs-6 fw-bold"${_scopeId3}>${ssrInterpolate(_ctx.currency($data.shippingCost))}</div></div></div><div class="block-content p-4 border-top border-2x"${_scopeId3}><div class="d-flex justify-content-between mb-3"${_scopeId3}><div class="fs-5"${_scopeId3}>Total Belanja</div><div class="fs-5 fw-bold"${_scopeId3}>${ssrInterpolate(_ctx.currency($options.totalHarga + $data.shippingCost))}</div></div>`);
                    _push4(ssrRenderComponent(_component_el_button, {
                      type: "primary",
                      size: "large",
                      class: "w-100",
                      onClick: $options.payment
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` Lanjut Ke Pembayaran `);
                        } else {
                          return [
                            createTextVNode(" Lanjut Ke Pembayaran ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "content-heading d-flex justify-content-between mb-2 py-2" }, " Rincian Belanja "),
                      createVNode("div", { class: "block block-bordered rounded" }, [
                        createVNode("div", { class: "block-content block-content-full" }, [
                          createVNode("div", { class: "d-flex justify-content-between mb-3" }, [
                            createVNode("div", { class: "fs-6" }, "Total Harga (" + toDisplayString($props.cart.length) + " barang)", 1),
                            createVNode("div", { class: "fs-6 fw-bold" }, toDisplayString(_ctx.currency($options.totalHarga)), 1)
                          ]),
                          createVNode("div", { class: "d-flex justify-content-between" }, [
                            createVNode("div", { class: "fs-6" }, "Biaya Kirim"),
                            createVNode("div", { class: "fs-6 fw-bold" }, toDisplayString(_ctx.currency($data.shippingCost)), 1)
                          ])
                        ]),
                        createVNode("div", { class: "block-content p-4 border-top border-2x" }, [
                          createVNode("div", { class: "d-flex justify-content-between mb-3" }, [
                            createVNode("div", { class: "fs-5" }, "Total Belanja"),
                            createVNode("div", { class: "fs-5 fw-bold" }, toDisplayString(_ctx.currency($options.totalHarga + $data.shippingCost)), 1)
                          ]),
                          createVNode(_component_el_button, {
                            type: "primary",
                            size: "large",
                            class: "w-100",
                            onClick: $options.payment
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Lanjut Ke Pembayaran ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_el_col, { lg: 16 }, {
                  default: withCtx(() => [
                    createVNode(_component_shipping_address, {
                      modelValue: $data.address,
                      "onUpdate:modelValue": ($event) => $data.address = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("div", { class: "content-heading pt-0 mb-0 border-0 font-size-md" }, " Pesanan Kamu "),
                    createVNode("div", { class: "block block-bordered rounded" }, [
                      createVNode("div", { class: "block-content p-3" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList($props.cart, (d, i) => {
                          return openBlock(), createBlock(Fragment, null, [
                            i == 0 || !$data.showAll ? (openBlock(), createBlock(_component_el_row, {
                              key: d.variant_id,
                              class: "mb-2",
                              gutter: 10
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_el_col, { lg: 2 }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: d.product.main_image,
                                      class: "img-fluid"
                                    }, null, 8, ["src"])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_el_col, {
                                  lg: 14,
                                  class: "my-auto"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "fs-5 fw-bold" }, toDisplayString(d.product.name), 1),
                                    createVNode("div", { class: "fs-sm fw-semibold" }, toDisplayString(_ctx.currency(d.price)) + " x " + toDisplayString(d.qty) + " barang", 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_el_col, {
                                  lg: 8,
                                  class: "my-auto"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "fs-5 fw-bold text-end" }, toDisplayString(_ctx.currency(d.price * d.qty)), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true)
                          ], 64);
                        }), 256))
                      ]),
                      $props.cart.length > 1 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "block-content p-3 text-center border-top border-bottom border-2",
                        onClick: ($event) => $data.showAll = !$data.showAll
                      }, [
                        $data.showAll ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          createVNode("span", { class: "fs-6 fw-semibold" }, "Tampilkan Semua"),
                          createVNode("i", { class: "fa fa-angle-small-down" })
                        ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                          createVNode("span", { class: "fs-6 fw-semibold" }, "Tampilkan Lebih Sedikit"),
                          createVNode("i", { class: "fa fa-angle-small-up" })
                        ], 64))
                      ], 8, ["onClick"])) : createCommentVNode("", true)
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_col, { lg: 8 }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "content-heading d-flex justify-content-between mb-2 py-2" }, " Rincian Belanja "),
                    createVNode("div", { class: "block block-bordered rounded" }, [
                      createVNode("div", { class: "block-content block-content-full" }, [
                        createVNode("div", { class: "d-flex justify-content-between mb-3" }, [
                          createVNode("div", { class: "fs-6" }, "Total Harga (" + toDisplayString($props.cart.length) + " barang)", 1),
                          createVNode("div", { class: "fs-6 fw-bold" }, toDisplayString(_ctx.currency($options.totalHarga)), 1)
                        ]),
                        createVNode("div", { class: "d-flex justify-content-between" }, [
                          createVNode("div", { class: "fs-6" }, "Biaya Kirim"),
                          createVNode("div", { class: "fs-6 fw-bold" }, toDisplayString(_ctx.currency($data.shippingCost)), 1)
                        ])
                      ]),
                      createVNode("div", { class: "block-content p-4 border-top border-2x" }, [
                        createVNode("div", { class: "d-flex justify-content-between mb-3" }, [
                          createVNode("div", { class: "fs-5" }, "Total Belanja"),
                          createVNode("div", { class: "fs-5 fw-bold" }, toDisplayString(_ctx.currency($options.totalHarga + $data.shippingCost)), 1)
                        ]),
                        createVNode(_component_el_button, {
                          type: "primary",
                          size: "large",
                          class: "w-100",
                          onClick: $options.payment
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Lanjut Ke Pembayaran ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
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
            createVNode(_component_el_row, { gutter: 20 }, {
              default: withCtx(() => [
                createVNode(_component_el_col, { lg: 16 }, {
                  default: withCtx(() => [
                    createVNode(_component_shipping_address, {
                      modelValue: $data.address,
                      "onUpdate:modelValue": ($event) => $data.address = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("div", { class: "content-heading pt-0 mb-0 border-0 font-size-md" }, " Pesanan Kamu "),
                    createVNode("div", { class: "block block-bordered rounded" }, [
                      createVNode("div", { class: "block-content p-3" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList($props.cart, (d, i) => {
                          return openBlock(), createBlock(Fragment, null, [
                            i == 0 || !$data.showAll ? (openBlock(), createBlock(_component_el_row, {
                              key: d.variant_id,
                              class: "mb-2",
                              gutter: 10
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_el_col, { lg: 2 }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: d.product.main_image,
                                      class: "img-fluid"
                                    }, null, 8, ["src"])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_el_col, {
                                  lg: 14,
                                  class: "my-auto"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "fs-5 fw-bold" }, toDisplayString(d.product.name), 1),
                                    createVNode("div", { class: "fs-sm fw-semibold" }, toDisplayString(_ctx.currency(d.price)) + " x " + toDisplayString(d.qty) + " barang", 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_el_col, {
                                  lg: 8,
                                  class: "my-auto"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "fs-5 fw-bold text-end" }, toDisplayString(_ctx.currency(d.price * d.qty)), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true)
                          ], 64);
                        }), 256))
                      ]),
                      $props.cart.length > 1 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "block-content p-3 text-center border-top border-bottom border-2",
                        onClick: ($event) => $data.showAll = !$data.showAll
                      }, [
                        $data.showAll ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          createVNode("span", { class: "fs-6 fw-semibold" }, "Tampilkan Semua"),
                          createVNode("i", { class: "fa fa-angle-small-down" })
                        ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                          createVNode("span", { class: "fs-6 fw-semibold" }, "Tampilkan Lebih Sedikit"),
                          createVNode("i", { class: "fa fa-angle-small-up" })
                        ], 64))
                      ], 8, ["onClick"])) : createCommentVNode("", true)
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_col, { lg: 8 }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "content-heading d-flex justify-content-between mb-2 py-2" }, " Rincian Belanja "),
                    createVNode("div", { class: "block block-bordered rounded" }, [
                      createVNode("div", { class: "block-content block-content-full" }, [
                        createVNode("div", { class: "d-flex justify-content-between mb-3" }, [
                          createVNode("div", { class: "fs-6" }, "Total Harga (" + toDisplayString($props.cart.length) + " barang)", 1),
                          createVNode("div", { class: "fs-6 fw-bold" }, toDisplayString(_ctx.currency($options.totalHarga)), 1)
                        ]),
                        createVNode("div", { class: "d-flex justify-content-between" }, [
                          createVNode("div", { class: "fs-6" }, "Biaya Kirim"),
                          createVNode("div", { class: "fs-6 fw-bold" }, toDisplayString(_ctx.currency($data.shippingCost)), 1)
                        ])
                      ]),
                      createVNode("div", { class: "block-content p-4 border-top border-2x" }, [
                        createVNode("div", { class: "d-flex justify-content-between mb-3" }, [
                          createVNode("div", { class: "fs-5" }, "Total Belanja"),
                          createVNode("div", { class: "fs-5 fw-bold" }, toDisplayString(_ctx.currency($options.totalHarga + $data.shippingCost)), 1)
                        ]),
                        createVNode(_component_el_button, {
                          type: "primary",
                          size: "large",
                          class: "w-100",
                          onClick: $options.payment
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Lanjut Ke Pembayaran ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Frontend/Checkout/Shipping.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Shipping = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Shipping as default
};
