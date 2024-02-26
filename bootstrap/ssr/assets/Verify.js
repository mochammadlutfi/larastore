import { resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc, E as ElButton } from "./ssr.js";
import { E as ElMessage } from "./index7.js";
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
  props: {
    errors: Object
  },
  data() {
    return {
      isLoading: false,
      form: {
        email: "",
        password: "",
        remember: false
      }
    };
  },
  methods: {
    resentEmail() {
      this.isLoading = true;
      this.$inertia.visit(this.route("verification.send"), {
        method: "post",
        onSuccess: () => {
          ElMessage({
            type: "success",
            message: "Email Berhasil Terkirim!"
          });
        }
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_base_layout = resolveComponent("base-layout");
  const _component_el_row = ElRow;
  const _component_el_col = ElCol;
  const _component_el_button = ElButton;
  _push(ssrRenderComponent(_component_base_layout, mergeProps({ title: "Masuk" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="content content-full"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_el_row, { justify: "center" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_el_col, {
                md: 10,
                lg: 10,
                class: "align-items-center"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="block rounded block-bordered"${_scopeId3}><div class="block-content p-3"${_scopeId3}><div class="text-center mb-lg-5"${_scopeId3}><h2 class="fs-4 text-center mb-3"${_scopeId3}>Verifikasi Email</h2><h3 class="fs-5 text-center"${_scopeId3}>Verifikasi email kamu untuk menyelesaikan pendaftaran</h3><img src="/images/email.svg" class="h-50 w-50"${_scopeId3}></div><div class="font-size-h5"${_scopeId3}>Hai ${ssrInterpolate(_ctx.$page.props.user.name)}!</div><p class="nice-copy mb-2"${_scopeId3}>Kami sudah mengirim email ke <b${_scopeId3}>${ssrInterpolate(_ctx.$page.props.user.email)}</b> berserta link untuk verifikasi akun kamu. Apabila tidak ditemukan, periksa folder spam email<br${_scopeId3}></p>`);
                    _push4(ssrRenderComponent(_component_el_button, {
                      type: "primary",
                      class: "w-100",
                      onClick: $options.resentEmail
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` Kirim Ulang Email `);
                        } else {
                          return [
                            createTextVNode(" Kirim Ulang Email ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "block rounded block-bordered" }, [
                        createVNode("div", { class: "block-content p-3" }, [
                          createVNode("div", { class: "text-center mb-lg-5" }, [
                            createVNode("h2", { class: "fs-4 text-center mb-3" }, "Verifikasi Email"),
                            createVNode("h3", { class: "fs-5 text-center" }, "Verifikasi email kamu untuk menyelesaikan pendaftaran"),
                            createVNode("img", {
                              src: "/images/email.svg",
                              class: "h-50 w-50"
                            })
                          ]),
                          createVNode("div", { class: "font-size-h5" }, "Hai " + toDisplayString(_ctx.$page.props.user.name) + "!", 1),
                          createVNode("p", { class: "nice-copy mb-2" }, [
                            createTextVNode("Kami sudah mengirim email ke "),
                            createVNode("b", null, toDisplayString(_ctx.$page.props.user.email), 1),
                            createTextVNode(" berserta link untuk verifikasi akun kamu. Apabila tidak ditemukan, periksa folder spam email"),
                            createVNode("br")
                          ]),
                          createVNode(_component_el_button, {
                            type: "primary",
                            class: "w-100",
                            onClick: $options.resentEmail
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Kirim Ulang Email ")
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
                createVNode(_component_el_col, {
                  md: 10,
                  lg: 10,
                  class: "align-items-center"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "block rounded block-bordered" }, [
                      createVNode("div", { class: "block-content p-3" }, [
                        createVNode("div", { class: "text-center mb-lg-5" }, [
                          createVNode("h2", { class: "fs-4 text-center mb-3" }, "Verifikasi Email"),
                          createVNode("h3", { class: "fs-5 text-center" }, "Verifikasi email kamu untuk menyelesaikan pendaftaran"),
                          createVNode("img", {
                            src: "/images/email.svg",
                            class: "h-50 w-50"
                          })
                        ]),
                        createVNode("div", { class: "font-size-h5" }, "Hai " + toDisplayString(_ctx.$page.props.user.name) + "!", 1),
                        createVNode("p", { class: "nice-copy mb-2" }, [
                          createTextVNode("Kami sudah mengirim email ke "),
                          createVNode("b", null, toDisplayString(_ctx.$page.props.user.email), 1),
                          createTextVNode(" berserta link untuk verifikasi akun kamu. Apabila tidak ditemukan, periksa folder spam email"),
                          createVNode("br")
                        ]),
                        createVNode(_component_el_button, {
                          type: "primary",
                          class: "w-100",
                          onClick: $options.resentEmail
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Kirim Ulang Email ")
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
          createVNode("div", { class: "content content-full" }, [
            createVNode(_component_el_row, { justify: "center" }, {
              default: withCtx(() => [
                createVNode(_component_el_col, {
                  md: 10,
                  lg: 10,
                  class: "align-items-center"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "block rounded block-bordered" }, [
                      createVNode("div", { class: "block-content p-3" }, [
                        createVNode("div", { class: "text-center mb-lg-5" }, [
                          createVNode("h2", { class: "fs-4 text-center mb-3" }, "Verifikasi Email"),
                          createVNode("h3", { class: "fs-5 text-center" }, "Verifikasi email kamu untuk menyelesaikan pendaftaran"),
                          createVNode("img", {
                            src: "/images/email.svg",
                            class: "h-50 w-50"
                          })
                        ]),
                        createVNode("div", { class: "font-size-h5" }, "Hai " + toDisplayString(_ctx.$page.props.user.name) + "!", 1),
                        createVNode("p", { class: "nice-copy mb-2" }, [
                          createTextVNode("Kami sudah mengirim email ke "),
                          createVNode("b", null, toDisplayString(_ctx.$page.props.user.email), 1),
                          createTextVNode(" berserta link untuk verifikasi akun kamu. Apabila tidak ditemukan, periksa folder spam email"),
                          createVNode("br")
                        ]),
                        createVNode(_component_el_button, {
                          type: "primary",
                          class: "w-100",
                          onClick: $options.resentEmail
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Kirim Ulang Email ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Frontend/Auth/Verify.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Verify = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Verify as default
};
