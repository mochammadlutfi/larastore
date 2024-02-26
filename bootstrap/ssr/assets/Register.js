import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc, E as ElButton } from "./ssr.js";
import { E as ElMessage } from "./index7.js";
import { E as ElRow, a as ElCol } from "./index8.js";
import { E as ElForm, a as ElFormItem } from "./index9.js";
import { E as ElInput } from "./index10.js";
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
import "async-validator";
const _sfc_main = {
  props: {
    errors: Object
  },
  data() {
    return {
      isLoading: false,
      form: {
        name: "",
        email: "",
        phone: "",
        password: "",
        password_conf: ""
      }
    };
  },
  methods: {
    submit() {
      this.isLoading = true;
      let form = this.$inertia.form(this.form);
      form.post(this.route("register"), {
        preserveScroll: true,
        onSuccess: () => {
          ElMessage({
            type: "success",
            message: "Pendaftaran Berhasil!"
          });
        },
        onFinish: () => {
          this.isLoading = false;
        }
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_base_layout = resolveComponent("base-layout");
  const _component_el_row = ElRow;
  const _component_el_col = ElCol;
  const _component_el_form = ElForm;
  const _component_el_form_item = ElFormItem;
  const _component_el_input = ElInput;
  const _component_el_button = ElButton;
  _push(ssrRenderComponent(_component_base_layout, mergeProps({ title: "Daftar" }, _attrs), {
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
                    _push4(`<div class="text-center"${_scopeId3}><h2 class="font-weight-bold mb-0"${_scopeId3}>Daftar</h2><p${_scopeId3}>Sudah punya akun? <a${ssrRenderAttr("href", _ctx.route("login"))}${_scopeId3}>Daftar</a> di sini</p></div>`);
                    _push4(ssrRenderComponent(_component_el_form, {
                      "label-position": "top",
                      "label-width": "100%",
                      onSubmit: $options.submit
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="block block-rounded block-fx-shadow"${_scopeId4}><div class="block-content block-content-full"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_el_form_item, {
                            label: "Nama Lengkap",
                            error: $props.errors.name
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_el_input, {
                                  modelValue: $data.form.name,
                                  "onUpdate:modelValue": ($event) => $data.form.name = $event,
                                  type: "text",
                                  placeholder: "Masukan Nama Lengkap"
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_el_input, {
                                    modelValue: $data.form.name,
                                    "onUpdate:modelValue": ($event) => $data.form.name = $event,
                                    type: "text",
                                    placeholder: "Masukan Nama Lengkap"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_el_form_item, {
                            label: "Email",
                            error: $props.errors.email
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_el_input, {
                                  modelValue: $data.form.email,
                                  "onUpdate:modelValue": ($event) => $data.form.email = $event,
                                  type: "text",
                                  placeholder: "Masukan Email"
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_el_input, {
                                    modelValue: $data.form.email,
                                    "onUpdate:modelValue": ($event) => $data.form.email = $event,
                                    type: "text",
                                    placeholder: "Masukan Email"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_el_form_item, {
                            label: "No Handphone",
                            error: $props.errors.phone
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_el_input, {
                                  modelValue: $data.form.phone,
                                  "onUpdate:modelValue": ($event) => $data.form.phone = $event,
                                  type: "text",
                                  placeholder: "Masukan No Handphone"
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_el_input, {
                                    modelValue: $data.form.phone,
                                    "onUpdate:modelValue": ($event) => $data.form.phone = $event,
                                    type: "text",
                                    placeholder: "Masukan No Handphone"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_el_form_item, {
                            label: "Masukan password",
                            error: $props.errors.password
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_el_input, {
                                  modelValue: $data.form.password,
                                  "onUpdate:modelValue": ($event) => $data.form.password = $event,
                                  type: "password",
                                  placeholder: "Masukan Password",
                                  "show-password": ""
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_el_input, {
                                    modelValue: $data.form.password,
                                    "onUpdate:modelValue": ($event) => $data.form.password = $event,
                                    type: "password",
                                    placeholder: "Masukan Password",
                                    "show-password": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_el_form_item, {
                            label: "Masukan password",
                            error: $props.errors.password_conf
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_el_input, {
                                  modelValue: $data.form.password_conf,
                                  "onUpdate:modelValue": ($event) => $data.form.password_conf = $event,
                                  type: "password",
                                  placeholder: "Masukan Konfirmasi Password",
                                  "show-password": ""
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_el_input, {
                                    modelValue: $data.form.password_conf,
                                    "onUpdate:modelValue": ($event) => $data.form.password_conf = $event,
                                    type: "password",
                                    placeholder: "Masukan Konfirmasi Password",
                                    "show-password": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_el_button, {
                            "native-type": "submit",
                            type: "primary",
                            class: "w-100",
                            loading: $data.isLoading
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Login Sekarang`);
                              } else {
                                return [
                                  createTextVNode("Login Sekarang")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`</div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "block block-rounded block-fx-shadow" }, [
                              createVNode("div", { class: "block-content block-content-full" }, [
                                createVNode(_component_el_form_item, {
                                  label: "Nama Lengkap",
                                  error: $props.errors.name
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_el_input, {
                                      modelValue: $data.form.name,
                                      "onUpdate:modelValue": ($event) => $data.form.name = $event,
                                      type: "text",
                                      placeholder: "Masukan Nama Lengkap"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }, 8, ["error"]),
                                createVNode(_component_el_form_item, {
                                  label: "Email",
                                  error: $props.errors.email
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_el_input, {
                                      modelValue: $data.form.email,
                                      "onUpdate:modelValue": ($event) => $data.form.email = $event,
                                      type: "text",
                                      placeholder: "Masukan Email"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }, 8, ["error"]),
                                createVNode(_component_el_form_item, {
                                  label: "No Handphone",
                                  error: $props.errors.phone
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_el_input, {
                                      modelValue: $data.form.phone,
                                      "onUpdate:modelValue": ($event) => $data.form.phone = $event,
                                      type: "text",
                                      placeholder: "Masukan No Handphone"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }, 8, ["error"]),
                                createVNode(_component_el_form_item, {
                                  label: "Masukan password",
                                  error: $props.errors.password
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_el_input, {
                                      modelValue: $data.form.password,
                                      "onUpdate:modelValue": ($event) => $data.form.password = $event,
                                      type: "password",
                                      placeholder: "Masukan Password",
                                      "show-password": ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }, 8, ["error"]),
                                createVNode(_component_el_form_item, {
                                  label: "Masukan password",
                                  error: $props.errors.password_conf
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_el_input, {
                                      modelValue: $data.form.password_conf,
                                      "onUpdate:modelValue": ($event) => $data.form.password_conf = $event,
                                      type: "password",
                                      placeholder: "Masukan Konfirmasi Password",
                                      "show-password": ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }, 8, ["error"]),
                                createVNode(_component_el_button, {
                                  "native-type": "submit",
                                  type: "primary",
                                  class: "w-100",
                                  loading: $data.isLoading
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Login Sekarang")
                                  ]),
                                  _: 1
                                }, 8, ["loading"])
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode("div", { class: "text-center" }, [
                        createVNode("h2", { class: "font-weight-bold mb-0" }, "Daftar"),
                        createVNode("p", null, [
                          createTextVNode("Sudah punya akun? "),
                          createVNode("a", {
                            href: _ctx.route("login")
                          }, "Daftar", 8, ["href"]),
                          createTextVNode(" di sini")
                        ])
                      ]),
                      createVNode(_component_el_form, {
                        "label-position": "top",
                        "label-width": "100%",
                        onSubmit: withModifiers($options.submit, ["prevent"])
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "block block-rounded block-fx-shadow" }, [
                            createVNode("div", { class: "block-content block-content-full" }, [
                              createVNode(_component_el_form_item, {
                                label: "Nama Lengkap",
                                error: $props.errors.name
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_el_input, {
                                    modelValue: $data.form.name,
                                    "onUpdate:modelValue": ($event) => $data.form.name = $event,
                                    type: "text",
                                    placeholder: "Masukan Nama Lengkap"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }, 8, ["error"]),
                              createVNode(_component_el_form_item, {
                                label: "Email",
                                error: $props.errors.email
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_el_input, {
                                    modelValue: $data.form.email,
                                    "onUpdate:modelValue": ($event) => $data.form.email = $event,
                                    type: "text",
                                    placeholder: "Masukan Email"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }, 8, ["error"]),
                              createVNode(_component_el_form_item, {
                                label: "No Handphone",
                                error: $props.errors.phone
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_el_input, {
                                    modelValue: $data.form.phone,
                                    "onUpdate:modelValue": ($event) => $data.form.phone = $event,
                                    type: "text",
                                    placeholder: "Masukan No Handphone"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }, 8, ["error"]),
                              createVNode(_component_el_form_item, {
                                label: "Masukan password",
                                error: $props.errors.password
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_el_input, {
                                    modelValue: $data.form.password,
                                    "onUpdate:modelValue": ($event) => $data.form.password = $event,
                                    type: "password",
                                    placeholder: "Masukan Password",
                                    "show-password": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }, 8, ["error"]),
                              createVNode(_component_el_form_item, {
                                label: "Masukan password",
                                error: $props.errors.password_conf
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_el_input, {
                                    modelValue: $data.form.password_conf,
                                    "onUpdate:modelValue": ($event) => $data.form.password_conf = $event,
                                    type: "password",
                                    placeholder: "Masukan Konfirmasi Password",
                                    "show-password": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }, 8, ["error"]),
                              createVNode(_component_el_button, {
                                "native-type": "submit",
                                type: "primary",
                                class: "w-100",
                                loading: $data.isLoading
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Login Sekarang")
                                ]),
                                _: 1
                              }, 8, ["loading"])
                            ])
                          ])
                        ]),
                        _: 1
                      }, 8, ["onSubmit"])
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
                    createVNode("div", { class: "text-center" }, [
                      createVNode("h2", { class: "font-weight-bold mb-0" }, "Daftar"),
                      createVNode("p", null, [
                        createTextVNode("Sudah punya akun? "),
                        createVNode("a", {
                          href: _ctx.route("login")
                        }, "Daftar", 8, ["href"]),
                        createTextVNode(" di sini")
                      ])
                    ]),
                    createVNode(_component_el_form, {
                      "label-position": "top",
                      "label-width": "100%",
                      onSubmit: withModifiers($options.submit, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "block block-rounded block-fx-shadow" }, [
                          createVNode("div", { class: "block-content block-content-full" }, [
                            createVNode(_component_el_form_item, {
                              label: "Nama Lengkap",
                              error: $props.errors.name
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_el_input, {
                                  modelValue: $data.form.name,
                                  "onUpdate:modelValue": ($event) => $data.form.name = $event,
                                  type: "text",
                                  placeholder: "Masukan Nama Lengkap"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }, 8, ["error"]),
                            createVNode(_component_el_form_item, {
                              label: "Email",
                              error: $props.errors.email
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_el_input, {
                                  modelValue: $data.form.email,
                                  "onUpdate:modelValue": ($event) => $data.form.email = $event,
                                  type: "text",
                                  placeholder: "Masukan Email"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }, 8, ["error"]),
                            createVNode(_component_el_form_item, {
                              label: "No Handphone",
                              error: $props.errors.phone
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_el_input, {
                                  modelValue: $data.form.phone,
                                  "onUpdate:modelValue": ($event) => $data.form.phone = $event,
                                  type: "text",
                                  placeholder: "Masukan No Handphone"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }, 8, ["error"]),
                            createVNode(_component_el_form_item, {
                              label: "Masukan password",
                              error: $props.errors.password
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_el_input, {
                                  modelValue: $data.form.password,
                                  "onUpdate:modelValue": ($event) => $data.form.password = $event,
                                  type: "password",
                                  placeholder: "Masukan Password",
                                  "show-password": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }, 8, ["error"]),
                            createVNode(_component_el_form_item, {
                              label: "Masukan password",
                              error: $props.errors.password_conf
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_el_input, {
                                  modelValue: $data.form.password_conf,
                                  "onUpdate:modelValue": ($event) => $data.form.password_conf = $event,
                                  type: "password",
                                  placeholder: "Masukan Konfirmasi Password",
                                  "show-password": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }, 8, ["error"]),
                            createVNode(_component_el_button, {
                              "native-type": "submit",
                              type: "primary",
                              class: "w-100",
                              loading: $data.isLoading
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Login Sekarang")
                              ]),
                              _: 1
                            }, 8, ["loading"])
                          ])
                        ])
                      ]),
                      _: 1
                    }, 8, ["onSubmit"])
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
                    createVNode("div", { class: "text-center" }, [
                      createVNode("h2", { class: "font-weight-bold mb-0" }, "Daftar"),
                      createVNode("p", null, [
                        createTextVNode("Sudah punya akun? "),
                        createVNode("a", {
                          href: _ctx.route("login")
                        }, "Daftar", 8, ["href"]),
                        createTextVNode(" di sini")
                      ])
                    ]),
                    createVNode(_component_el_form, {
                      "label-position": "top",
                      "label-width": "100%",
                      onSubmit: withModifiers($options.submit, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "block block-rounded block-fx-shadow" }, [
                          createVNode("div", { class: "block-content block-content-full" }, [
                            createVNode(_component_el_form_item, {
                              label: "Nama Lengkap",
                              error: $props.errors.name
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_el_input, {
                                  modelValue: $data.form.name,
                                  "onUpdate:modelValue": ($event) => $data.form.name = $event,
                                  type: "text",
                                  placeholder: "Masukan Nama Lengkap"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }, 8, ["error"]),
                            createVNode(_component_el_form_item, {
                              label: "Email",
                              error: $props.errors.email
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_el_input, {
                                  modelValue: $data.form.email,
                                  "onUpdate:modelValue": ($event) => $data.form.email = $event,
                                  type: "text",
                                  placeholder: "Masukan Email"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }, 8, ["error"]),
                            createVNode(_component_el_form_item, {
                              label: "No Handphone",
                              error: $props.errors.phone
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_el_input, {
                                  modelValue: $data.form.phone,
                                  "onUpdate:modelValue": ($event) => $data.form.phone = $event,
                                  type: "text",
                                  placeholder: "Masukan No Handphone"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }, 8, ["error"]),
                            createVNode(_component_el_form_item, {
                              label: "Masukan password",
                              error: $props.errors.password
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_el_input, {
                                  modelValue: $data.form.password,
                                  "onUpdate:modelValue": ($event) => $data.form.password = $event,
                                  type: "password",
                                  placeholder: "Masukan Password",
                                  "show-password": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }, 8, ["error"]),
                            createVNode(_component_el_form_item, {
                              label: "Masukan password",
                              error: $props.errors.password_conf
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_el_input, {
                                  modelValue: $data.form.password_conf,
                                  "onUpdate:modelValue": ($event) => $data.form.password_conf = $event,
                                  type: "password",
                                  placeholder: "Masukan Konfirmasi Password",
                                  "show-password": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }, 8, ["error"]),
                            createVNode(_component_el_button, {
                              "native-type": "submit",
                              type: "primary",
                              class: "w-100",
                              loading: $data.isLoading
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Login Sekarang")
                              ]),
                              _: 1
                            }, 8, ["loading"])
                          ])
                        ])
                      ]),
                      _: 1
                    }, 8, ["onSubmit"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Frontend/Auth/Register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Register = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Register as default
};
