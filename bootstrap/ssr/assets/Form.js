import { ref, watch, resolveComponent, withCtx, createVNode, createTextVNode, toDisplayString, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc, E as ElButton } from "./ssr.js";
import { E as ElMessage } from "./index7.js";
import { E as ElForm, a as ElFormItem } from "./index9.js";
import { E as ElInput } from "./index10.js";
import { E as ElRow, a as ElCol } from "./index8.js";
import { E as ElRadioGroup, a as ElRadio } from "./index14.js";
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
  components: {},
  setup() {
    const mapRef = ref();
    watch(mapRef, (googleMap) => {
      if (googleMap) {
        googleMap.$mapPromise.then((map) => {
        });
      }
    });
    return {
      mapRef
    };
  },
  props: {
    data: Object,
    errors: Object
  },
  data() {
    return {
      title: "Tambah Alamat",
      isLoading: false,
      map: null,
      searchQuery: null,
      mapOptions: {
        mapTypeControl: false,
        streetViewControl: false,
        lang: "id"
      },
      // center : null,
      form: {
        id: null,
        name: null,
        reciever: null,
        phone: null,
        address: null,
        formatted_address: null,
        lat: null,
        lng: null,
        is_main: 0
      },
      center: {
        lat: 51.093048,
        lng: 6.84212
      },
      marker: {
        lat: 51.093048,
        lng: 6.84212
      }
    };
  },
  mounted() {
    this.center.lat = this.$page.props.location.lat;
    this.center.lng = this.$page.props.location.lng;
    this.marker.lat = this.$page.props.location.lat;
    this.marker.lng = this.$page.props.location.lng;
  },
  methods: {
    setLatLng() {
      this.form.lat = this.center.lat;
      this.form.lng = this.center.lng;
    },
    removeLatLng() {
      this.form.lat = null;
      this.form.lng = null;
    },
    async onDragend(v) {
      try {
        this.isLoading = true;
        const response = await axios.post("/user/alamat/geocode", {
          latlng: v.latLng.lat() + "," + v.latLng.lng()
        });
        if (response.status == 200) {
          if (response.data.jarak <= 1e4) {
            this.form.formatted_address = response.data.data;
            this.center.lat = v.latLng.lat();
            this.center.lng = v.latLng.lng();
            this.form.lat = v.latLng.lat();
            this.form.lng = v.latLng.lng();
          } else {
            ElMessage({
              type: "error",
              message: "Lokasi Tidak Terjangkau!"
            });
          }
        }
        this.isLoading = false;
      } catch (error) {
        console.error(error);
      }
    },
    setPlace(v) {
      if (!v.geometry || !v.geometry.location) {
        console.log("Returned place contains no geometry");
        return;
      }
      this.center = v.geometry.location;
      this.form.lat = this.center.lat;
      this.form.lng = this.center.lng;
      this.form.formatted_address = v.formatted_address;
    },
    async getStreetAddressFrom(lat, lng) {
      try {
        this.isLoading = true;
        const response = await axios.post("/user/alamat/geocode", {
          latlng: lat + "," + lng
        });
        if (response.status == 200) {
          if (response.data.jarak <= 1e4) {
            this.form.formatted_address = response.data.data;
          } else {
            ElMessage({
              type: "error",
              message: "Lokasi Tidak Terjangkau!"
            });
          }
        }
        this.isLoading = false;
      } catch (error) {
        console.error(error);
      }
    },
    submit() {
      this.isLoading = true;
      let form = this.$inertia.form(this.form);
      form.post("/user/alamat/store", {
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
  const _component_GMapAutocomplete = resolveComponent("GMapAutocomplete");
  const _component_GMapMap = resolveComponent("GMapMap");
  const _component_GMapMarker = resolveComponent("GMapMarker");
  const _component_el_form_item = ElFormItem;
  const _component_el_input = ElInput;
  const _component_el_row = ElRow;
  const _component_el_col = ElCol;
  const _component_el_radio_group = ElRadioGroup;
  const _component_el_radio = ElRadio;
  const _component_el_button = ElButton;
  _push(ssrRenderComponent(_component_user_layout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="d-flex justify-content-between align-items-center mb-3"${_scopeId}><h3 class="fs-4 fw-bold mb-0"${_scopeId}>${ssrInterpolate($data.title)}</h3></div><div class="block rounded"${_scopeId}><div class="block-content p-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_el_form, {
          "label-position": "top",
          "label-width": "100%",
          onSubmit: $options.submit
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="ep-input mb-3"${_scopeId2}><div class="ep-input__wrapper"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_GMapAutocomplete, {
                class: "ep-input__inner",
                placeholder: "Cari Lokasi",
                onPlace_changed: $options.setPlace
              }, null, _parent3, _scopeId2));
              _push3(`</div></div>`);
              _push3(ssrRenderComponent(_component_GMapMap, {
                center: $data.center,
                options: $data.mapOptions,
                zoom: 14,
                ref: "mapRef",
                "map-type-id": "roadmap",
                class: "w-100 mb-4",
                style: { "height": "300px" }
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_GMapMarker, {
                      position: $data.center,
                      draggable: true,
                      onDragend: $options.onDragend
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_GMapMarker, {
                        position: $data.center,
                        draggable: true,
                        onDragend: $options.onDragend
                      }, null, 8, ["position", "onDragend"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_el_form_item, {
                label: "Alamat Berdasarkan Titik",
                error: $props.errors.phone
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_el_input, {
                      modelValue: $data.form.formatted_address,
                      "onUpdate:modelValue": ($event) => $data.form.formatted_address = $event,
                      type: "textarea",
                      rows: 2,
                      readonly: true
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_el_input, {
                        modelValue: $data.form.formatted_address,
                        "onUpdate:modelValue": ($event) => $data.form.formatted_address = $event,
                        type: "textarea",
                        rows: 2,
                        readonly: true
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_el_form_item, {
                label: "Alamat Lengkap",
                error: $props.errors.phone
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_el_input, {
                      modelValue: $data.form.address,
                      "onUpdate:modelValue": ($event) => $data.form.address = $event,
                      type: "textarea",
                      rows: 2,
                      placeholder: "Masukan Alamat"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_el_input, {
                        modelValue: $data.form.address,
                        "onUpdate:modelValue": ($event) => $data.form.address = $event,
                        type: "textarea",
                        rows: 2,
                        placeholder: "Masukan Alamat"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_el_form_item, {
                label: "Nama Alamat",
                error: $props.errors.name
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_el_input, {
                      modelValue: $data.form.name,
                      "onUpdate:modelValue": ($event) => $data.form.name = $event,
                      type: "text",
                      placeholder: "Masukan Nama Alamat"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_el_input, {
                        modelValue: $data.form.name,
                        "onUpdate:modelValue": ($event) => $data.form.name = $event,
                        type: "text",
                        placeholder: "Masukan Nama Alamat"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_el_row, { gutter: 20 }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_el_col, { span: 12 }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_el_form_item, {
                            label: "Nama Penerima",
                            error: $props.errors.name
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_el_input, {
                                  modelValue: $data.form.reciever,
                                  "onUpdate:modelValue": ($event) => $data.form.reciever = $event,
                                  type: "text",
                                  placeholder: "Masukan Nama Penerima"
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_el_input, {
                                    modelValue: $data.form.reciever,
                                    "onUpdate:modelValue": ($event) => $data.form.reciever = $event,
                                    type: "text",
                                    placeholder: "Masukan Nama Penerima"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_el_form_item, {
                              label: "Nama Penerima",
                              error: $props.errors.name
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_el_input, {
                                  modelValue: $data.form.reciever,
                                  "onUpdate:modelValue": ($event) => $data.form.reciever = $event,
                                  type: "text",
                                  placeholder: "Masukan Nama Penerima"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }, 8, ["error"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_el_col, { span: 12 }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_el_form_item, {
                            label: "No HP Penerima",
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
                        } else {
                          return [
                            createVNode(_component_el_form_item, {
                              label: "No HP Penerima",
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
                            }, 8, ["error"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_el_col, { span: 12 }, {
                        default: withCtx(() => [
                          createVNode(_component_el_form_item, {
                            label: "Nama Penerima",
                            error: $props.errors.name
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_input, {
                                modelValue: $data.form.reciever,
                                "onUpdate:modelValue": ($event) => $data.form.reciever = $event,
                                type: "text",
                                placeholder: "Masukan Nama Penerima"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }, 8, ["error"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_col, { span: 12 }, {
                        default: withCtx(() => [
                          createVNode(_component_el_form_item, {
                            label: "No HP Penerima",
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
                          }, 8, ["error"])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_el_form_item, { label: "Jadikan Alamat Utama?" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_el_radio_group, {
                      modelValue: $data.form.is_main,
                      "onUpdate:modelValue": ($event) => $data.form.is_main = $event
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_el_radio, {
                            label: 1,
                            border: ""
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Ya`);
                              } else {
                                return [
                                  createTextVNode("Ya")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_el_radio, {
                            label: 0,
                            border: ""
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Tidak`);
                              } else {
                                return [
                                  createTextVNode("Tidak")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_el_radio, {
                              label: 1,
                              border: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Ya")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_radio, {
                              label: 0,
                              border: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Tidak")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_el_radio_group, {
                        modelValue: $data.form.is_main,
                        "onUpdate:modelValue": ($event) => $data.form.is_main = $event
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_radio, {
                            label: 1,
                            border: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Ya")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_radio, {
                            label: 0,
                            border: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Tidak")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
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
                createVNode("div", { class: "ep-input mb-3" }, [
                  createVNode("div", { class: "ep-input__wrapper" }, [
                    createVNode(_component_GMapAutocomplete, {
                      class: "ep-input__inner",
                      placeholder: "Cari Lokasi",
                      onPlace_changed: $options.setPlace
                    }, null, 8, ["onPlace_changed"])
                  ])
                ]),
                createVNode(_component_GMapMap, {
                  center: $data.center,
                  options: $data.mapOptions,
                  zoom: 14,
                  ref: "mapRef",
                  "map-type-id": "roadmap",
                  class: "w-100 mb-4",
                  style: { "height": "300px" }
                }, {
                  default: withCtx(() => [
                    createVNode(_component_GMapMarker, {
                      position: $data.center,
                      draggable: true,
                      onDragend: $options.onDragend
                    }, null, 8, ["position", "onDragend"])
                  ]),
                  _: 1
                }, 8, ["center", "options"]),
                createVNode(_component_el_form_item, {
                  label: "Alamat Berdasarkan Titik",
                  error: $props.errors.phone
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: $data.form.formatted_address,
                      "onUpdate:modelValue": ($event) => $data.form.formatted_address = $event,
                      type: "textarea",
                      rows: 2,
                      readonly: true
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }, 8, ["error"]),
                createVNode(_component_el_form_item, {
                  label: "Alamat Lengkap",
                  error: $props.errors.phone
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: $data.form.address,
                      "onUpdate:modelValue": ($event) => $data.form.address = $event,
                      type: "textarea",
                      rows: 2,
                      placeholder: "Masukan Alamat"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }, 8, ["error"]),
                createVNode(_component_el_form_item, {
                  label: "Nama Alamat",
                  error: $props.errors.name
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: $data.form.name,
                      "onUpdate:modelValue": ($event) => $data.form.name = $event,
                      type: "text",
                      placeholder: "Masukan Nama Alamat"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }, 8, ["error"]),
                createVNode(_component_el_row, { gutter: 20 }, {
                  default: withCtx(() => [
                    createVNode(_component_el_col, { span: 12 }, {
                      default: withCtx(() => [
                        createVNode(_component_el_form_item, {
                          label: "Nama Penerima",
                          error: $props.errors.name
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_el_input, {
                              modelValue: $data.form.reciever,
                              "onUpdate:modelValue": ($event) => $data.form.reciever = $event,
                              type: "text",
                              placeholder: "Masukan Nama Penerima"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }, 8, ["error"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_col, { span: 12 }, {
                      default: withCtx(() => [
                        createVNode(_component_el_form_item, {
                          label: "No HP Penerima",
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
                        }, 8, ["error"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_el_form_item, { label: "Jadikan Alamat Utama?" }, {
                  default: withCtx(() => [
                    createVNode(_component_el_radio_group, {
                      modelValue: $data.form.is_main,
                      "onUpdate:modelValue": ($event) => $data.form.is_main = $event
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_radio, {
                          label: 1,
                          border: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Ya")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_radio, {
                          label: 0,
                          border: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Tidak")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
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
          createVNode("div", { class: "d-flex justify-content-between align-items-center mb-3" }, [
            createVNode("h3", { class: "fs-4 fw-bold mb-0" }, toDisplayString($data.title), 1)
          ]),
          createVNode("div", { class: "block rounded" }, [
            createVNode("div", { class: "block-content p-4" }, [
              createVNode(_component_el_form, {
                "label-position": "top",
                "label-width": "100%",
                onSubmit: withModifiers($options.submit, ["prevent"])
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "ep-input mb-3" }, [
                    createVNode("div", { class: "ep-input__wrapper" }, [
                      createVNode(_component_GMapAutocomplete, {
                        class: "ep-input__inner",
                        placeholder: "Cari Lokasi",
                        onPlace_changed: $options.setPlace
                      }, null, 8, ["onPlace_changed"])
                    ])
                  ]),
                  createVNode(_component_GMapMap, {
                    center: $data.center,
                    options: $data.mapOptions,
                    zoom: 14,
                    ref: "mapRef",
                    "map-type-id": "roadmap",
                    class: "w-100 mb-4",
                    style: { "height": "300px" }
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_GMapMarker, {
                        position: $data.center,
                        draggable: true,
                        onDragend: $options.onDragend
                      }, null, 8, ["position", "onDragend"])
                    ]),
                    _: 1
                  }, 8, ["center", "options"]),
                  createVNode(_component_el_form_item, {
                    label: "Alamat Berdasarkan Titik",
                    error: $props.errors.phone
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_input, {
                        modelValue: $data.form.formatted_address,
                        "onUpdate:modelValue": ($event) => $data.form.formatted_address = $event,
                        type: "textarea",
                        rows: 2,
                        readonly: true
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }, 8, ["error"]),
                  createVNode(_component_el_form_item, {
                    label: "Alamat Lengkap",
                    error: $props.errors.phone
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_input, {
                        modelValue: $data.form.address,
                        "onUpdate:modelValue": ($event) => $data.form.address = $event,
                        type: "textarea",
                        rows: 2,
                        placeholder: "Masukan Alamat"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }, 8, ["error"]),
                  createVNode(_component_el_form_item, {
                    label: "Nama Alamat",
                    error: $props.errors.name
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_input, {
                        modelValue: $data.form.name,
                        "onUpdate:modelValue": ($event) => $data.form.name = $event,
                        type: "text",
                        placeholder: "Masukan Nama Alamat"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }, 8, ["error"]),
                  createVNode(_component_el_row, { gutter: 20 }, {
                    default: withCtx(() => [
                      createVNode(_component_el_col, { span: 12 }, {
                        default: withCtx(() => [
                          createVNode(_component_el_form_item, {
                            label: "Nama Penerima",
                            error: $props.errors.name
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_input, {
                                modelValue: $data.form.reciever,
                                "onUpdate:modelValue": ($event) => $data.form.reciever = $event,
                                type: "text",
                                placeholder: "Masukan Nama Penerima"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }, 8, ["error"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_col, { span: 12 }, {
                        default: withCtx(() => [
                          createVNode(_component_el_form_item, {
                            label: "No HP Penerima",
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
                          }, 8, ["error"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, { label: "Jadikan Alamat Utama?" }, {
                    default: withCtx(() => [
                      createVNode(_component_el_radio_group, {
                        modelValue: $data.form.is_main,
                        "onUpdate:modelValue": ($event) => $data.form.is_main = $event
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_radio, {
                            label: 1,
                            border: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Ya")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_radio, {
                            label: 0,
                            border: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Tidak")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Frontend/UserAddress/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Form = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Form as default
};
