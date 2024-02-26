import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc, E as ElButton } from "./ssr.js";
import { E as ElMessage } from "./index7.js";
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
    data: Object,
    errors: Object
  },
  data() {
    return {
      isLoading: false,
      form: {
        name: this.data.name,
        email: this.data.email,
        phone: this.data.phone
      }
    };
  },
  methods: {
    submit() {
      this.isLoading = true;
      let form = this.$inertia.form(this.form);
      form.post(this.route("user.update"), {
        preserveScroll: true,
        onSuccess: () => {
          ElMessage({
            type: "success",
            message: "Profil berhasil diperbaharui!"
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
  const _component_user_layout = resolveComponent("user-layout");
  const _component_el_form = ElForm;
  const _component_el_form_item = ElFormItem;
  const _component_el_input = ElInput;
  const _component_el_button = ElButton;
  _push(ssrRenderComponent(_component_user_layout, mergeProps({ title: "Profil" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="block rounded"${_scopeId}><div class="block-content p-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_el_form, {
          "label-position": "top",
          "label-width": "100%",
          onSubmit: $options.submit
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_el_form_item, {
                label: "Nama Lengkap",
                error: $props.errors.name
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_el_input, {
                      modelValue: $data.form.name,
                      "onUpdate:modelValue": ($event) => $data.form.name = $event,
                      type: "text",
                      placeholder: "Masukan Nama Lengkap"
                    }, null, _parent4, _scopeId3));
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
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_el_form_item, {
                label: "Email",
                error: $props.errors.email
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_el_input, {
                      modelValue: $data.form.email,
                      "onUpdate:modelValue": ($event) => $data.form.email = $event,
                      type: "text",
                      placeholder: "Masukan Email"
                    }, null, _parent4, _scopeId3));
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
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_el_form_item, {
                label: "No Handphone",
                error: $props.errors.phone
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_el_input, {
                      modelValue: $data.form.phone,
                      "onUpdate:modelValue": ($event) => $data.form.phone = $event,
                      type: "text",
                      placeholder: "Masukan No Handphone"
                    }, null, _parent4, _scopeId3));
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
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_el_button, {
                "native-type": "submit",
                type: "primary",
                class: "w-100",
                loading: $data.isLoading
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Simpan `);
                  } else {
                    return [
                      createTextVNode(" Simpan ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
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
                createVNode(_component_el_button, {
                  "native-type": "submit",
                  type: "primary",
                  class: "w-100",
                  loading: $data.isLoading
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Simpan ")
                  ]),
                  _: 1
                }, 8, ["loading"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", { class: "block rounded" }, [
            createVNode("div", { class: "block-content p-4" }, [
              createVNode(_component_el_form, {
                "label-position": "top",
                "label-width": "100%",
                onSubmit: withModifiers($options.submit, ["prevent"])
              }, {
                default: withCtx(() => [
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
                  createVNode(_component_el_button, {
                    "native-type": "submit",
                    type: "primary",
                    class: "w-100",
                    loading: $data.isLoading
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Simpan ")
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ]),
                _: 1
              }, 8, ["onSubmit"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Frontend/User/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Index as default
};
