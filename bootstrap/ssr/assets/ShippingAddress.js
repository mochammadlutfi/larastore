import _ from "lodash";
import { defineComponent, inject, computed, openBlock, createElementBlock, unref, normalizeClass, normalizeStyle, createElementVNode, renderSlot, toDisplayString, createVNode, withCtx, createBlock, resolveDynamicComponent, createCommentVNode, getCurrentInstance, ref, watch, nextTick, onMounted, useSlots, provide, Teleport, Transition, withDirectives, mergeProps, createSlots, vShow, resolveComponent, createTextVNode, Fragment, renderList, withModifiers, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { b as buildProps, i as iconPropType, u as useLocale, F as FOCUS_TRAP_INJECTION_KEY, a as ElIcon, c as _export_sfc, C as CloseComponents, d as composeRefs, e as definePropType, f as isBoolean, g as useZIndex, h as useId, j as useGlobalConfig, k as addUnit, l as defaultNamespace, m as useDeprecated, n as useNamespace, o as ElFocusTrap, w as withInstall, _ as _export_sfc$1, E as ElButton } from "./ssr.js";
import { E as ElMessage } from "./index7.js";
import { u as useDraggable, a as useLockscreen, E as ElOverlay, b as useSameTarget } from "./index13.js";
import { U as UPDATE_MODEL_EVENT, E as ElInput } from "./index10.js";
import { useTimeoutFn, isClient } from "@vueuse/core";
import { E as ElRow, a as ElCol } from "./index8.js";
import { E as ElForm, a as ElFormItem } from "./index9.js";
import { E as ElRadioGroup, a as ElRadio } from "./index14.js";
import "@vue/server-renderer";
import "@inertiajs/vue3";
import "@inertiajs/vue3/server";
import "pinia";
import "lodash-unified";
import "@vue/shared";
import "@element-plus/icons-vue";
import "@ctrl/tinycolor";
import "./typescript.js";
import "@vue/reactivity";
import "./scroll.js";
import "async-validator";
const dialogInjectionKey = Symbol("dialogInjectionKey");
const dialogContentProps = buildProps({
  center: {
    type: Boolean,
    default: false
  },
  alignCenter: {
    type: Boolean,
    default: false
  },
  closeIcon: {
    type: iconPropType
  },
  customClass: {
    type: String,
    default: ""
  },
  draggable: {
    type: Boolean,
    default: false
  },
  fullscreen: {
    type: Boolean,
    default: false
  },
  showClose: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    default: ""
  }
});
const dialogContentEmits = {
  close: () => true
};
const _hoisted_1$1 = ["aria-label"];
const _hoisted_2 = ["id"];
const __default__$1 = defineComponent({ name: "ElDialogContent" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: dialogContentProps,
  emits: dialogContentEmits,
  setup(__props) {
    const props = __props;
    const { t } = useLocale();
    const { Close } = CloseComponents;
    const { dialogRef, headerRef, bodyId, ns, style } = inject(dialogInjectionKey);
    const { focusTrapRef } = inject(FOCUS_TRAP_INJECTION_KEY);
    const composedDialogRef = composeRefs(focusTrapRef, dialogRef);
    const draggable = computed(() => props.draggable);
    useDraggable(dialogRef, headerRef, draggable);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref: unref(composedDialogRef),
        class: normalizeClass([
          unref(ns).b(),
          unref(ns).is("fullscreen", _ctx.fullscreen),
          unref(ns).is("draggable", unref(draggable)),
          unref(ns).is("align-center", _ctx.alignCenter),
          { [unref(ns).m("center")]: _ctx.center },
          _ctx.customClass
        ]),
        style: normalizeStyle(unref(style)),
        tabindex: "-1"
      }, [
        createElementVNode("header", {
          ref_key: "headerRef",
          ref: headerRef,
          class: normalizeClass(unref(ns).e("header"))
        }, [
          renderSlot(_ctx.$slots, "header", {}, () => [
            createElementVNode("span", {
              role: "heading",
              class: normalizeClass(unref(ns).e("title"))
            }, toDisplayString(_ctx.title), 3)
          ]),
          _ctx.showClose ? (openBlock(), createElementBlock("button", {
            key: 0,
            "aria-label": unref(t)("el.dialog.close"),
            class: normalizeClass(unref(ns).e("headerbtn")),
            type: "button",
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
          }, [
            createVNode(unref(ElIcon), {
              class: normalizeClass(unref(ns).e("close"))
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(_ctx.closeIcon || unref(Close))))
              ]),
              _: 1
            }, 8, ["class"])
          ], 10, _hoisted_1$1)) : createCommentVNode("v-if", true)
        ], 2),
        createElementVNode("div", {
          id: unref(bodyId),
          class: normalizeClass(unref(ns).e("body"))
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 10, _hoisted_2),
        _ctx.$slots.footer ? (openBlock(), createElementBlock("footer", {
          key: 0,
          class: normalizeClass(unref(ns).e("footer"))
        }, [
          renderSlot(_ctx.$slots, "footer")
        ], 2)) : createCommentVNode("v-if", true)
      ], 6);
    };
  }
});
var ElDialogContent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);
const dialogProps = buildProps({
  ...dialogContentProps,
  appendToBody: {
    type: Boolean,
    default: false
  },
  beforeClose: {
    type: definePropType(Function)
  },
  destroyOnClose: {
    type: Boolean,
    default: false
  },
  closeOnClickModal: {
    type: Boolean,
    default: true
  },
  closeOnPressEscape: {
    type: Boolean,
    default: true
  },
  lockScroll: {
    type: Boolean,
    default: true
  },
  modal: {
    type: Boolean,
    default: true
  },
  openDelay: {
    type: Number,
    default: 0
  },
  closeDelay: {
    type: Number,
    default: 0
  },
  top: {
    type: String
  },
  modelValue: {
    type: Boolean,
    default: false
  },
  modalClass: String,
  width: {
    type: [String, Number]
  },
  zIndex: {
    type: Number
  },
  trapFocus: {
    type: Boolean,
    default: false
  }
});
const dialogEmits = {
  open: () => true,
  opened: () => true,
  close: () => true,
  closed: () => true,
  [UPDATE_MODEL_EVENT]: (value) => isBoolean(value),
  openAutoFocus: () => true,
  closeAutoFocus: () => true
};
const useDialog = (props, targetRef) => {
  const instance = getCurrentInstance();
  const emit = instance.emit;
  const { nextZIndex } = useZIndex();
  let lastPosition = "";
  const titleId = useId();
  const bodyId = useId();
  const visible = ref(false);
  const closed = ref(false);
  const rendered = ref(false);
  const zIndex = ref(props.zIndex || nextZIndex());
  let openTimer = void 0;
  let closeTimer = void 0;
  const namespace = useGlobalConfig("namespace", defaultNamespace);
  const style = computed(() => {
    const style2 = {};
    const varPrefix = `--${namespace.value}-dialog`;
    if (!props.fullscreen) {
      if (props.top) {
        style2[`${varPrefix}-margin-top`] = props.top;
      }
      if (props.width) {
        style2[`${varPrefix}-width`] = addUnit(props.width);
      }
    }
    return style2;
  });
  const overlayDialogStyle = computed(() => {
    if (props.alignCenter) {
      return { display: "flex" };
    }
    return {};
  });
  function afterEnter() {
    emit("opened");
  }
  function afterLeave() {
    emit("closed");
    emit(UPDATE_MODEL_EVENT, false);
    if (props.destroyOnClose) {
      rendered.value = false;
    }
  }
  function beforeLeave() {
    emit("close");
  }
  function open() {
    closeTimer == null ? void 0 : closeTimer();
    openTimer == null ? void 0 : openTimer();
    if (props.openDelay && props.openDelay > 0) {
      ({ stop: openTimer } = useTimeoutFn(() => doOpen(), props.openDelay));
    } else {
      doOpen();
    }
  }
  function close() {
    openTimer == null ? void 0 : openTimer();
    closeTimer == null ? void 0 : closeTimer();
    if (props.closeDelay && props.closeDelay > 0) {
      ({ stop: closeTimer } = useTimeoutFn(() => doClose(), props.closeDelay));
    } else {
      doClose();
    }
  }
  function handleClose() {
    function hide(shouldCancel) {
      if (shouldCancel)
        return;
      closed.value = true;
      visible.value = false;
    }
    if (props.beforeClose) {
      props.beforeClose(hide);
    } else {
      close();
    }
  }
  function onModalClick() {
    if (props.closeOnClickModal) {
      handleClose();
    }
  }
  function doOpen() {
    if (!isClient)
      return;
    visible.value = true;
  }
  function doClose() {
    visible.value = false;
  }
  function onOpenAutoFocus() {
    emit("openAutoFocus");
  }
  function onCloseAutoFocus() {
    emit("closeAutoFocus");
  }
  function onFocusoutPrevented(event) {
    var _a;
    if (((_a = event.detail) == null ? void 0 : _a.focusReason) === "pointer") {
      event.preventDefault();
    }
  }
  if (props.lockScroll) {
    useLockscreen(visible);
  }
  function onCloseRequested() {
    if (props.closeOnPressEscape) {
      handleClose();
    }
  }
  watch(() => props.modelValue, (val) => {
    if (val) {
      closed.value = false;
      open();
      rendered.value = true;
      zIndex.value = props.zIndex ? zIndex.value++ : nextZIndex();
      nextTick(() => {
        emit("open");
        if (targetRef.value) {
          targetRef.value.scrollTop = 0;
        }
      });
    } else {
      if (visible.value) {
        close();
      }
    }
  });
  watch(() => props.fullscreen, (val) => {
    if (!targetRef.value)
      return;
    if (val) {
      lastPosition = targetRef.value.style.transform;
      targetRef.value.style.transform = "";
    } else {
      targetRef.value.style.transform = lastPosition;
    }
  });
  onMounted(() => {
    if (props.modelValue) {
      visible.value = true;
      rendered.value = true;
      open();
    }
  });
  return {
    afterEnter,
    afterLeave,
    beforeLeave,
    handleClose,
    onModalClick,
    close,
    doClose,
    onOpenAutoFocus,
    onCloseAutoFocus,
    onCloseRequested,
    onFocusoutPrevented,
    titleId,
    bodyId,
    closed,
    style,
    overlayDialogStyle,
    rendered,
    visible,
    zIndex
  };
};
const _hoisted_1 = ["aria-label", "aria-labelledby", "aria-describedby"];
const __default__ = defineComponent({
  name: "ElDialog",
  inheritAttrs: false
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: dialogProps,
  emits: dialogEmits,
  setup(__props, { expose }) {
    const props = __props;
    const slots = useSlots();
    useDeprecated({
      scope: "el-dialog",
      from: "the title slot",
      replacement: "the header slot",
      version: "3.0.0",
      ref: "https://element-plus.org/en-US/component/dialog.html#slots"
    }, computed(() => !!slots.title));
    useDeprecated({
      scope: "el-dialog",
      from: "custom-class",
      replacement: "class",
      version: "2.3.0",
      ref: "https://element-plus.org/en-US/component/dialog.html#attributes",
      type: "Attribute"
    }, computed(() => !!props.customClass));
    const ns = useNamespace("dialog");
    const dialogRef = ref();
    const headerRef = ref();
    const dialogContentRef = ref();
    const {
      visible,
      titleId,
      bodyId,
      style,
      overlayDialogStyle,
      rendered,
      zIndex,
      afterEnter,
      afterLeave,
      beforeLeave,
      handleClose,
      onModalClick,
      onOpenAutoFocus,
      onCloseAutoFocus,
      onCloseRequested,
      onFocusoutPrevented
    } = useDialog(props, dialogRef);
    provide(dialogInjectionKey, {
      dialogRef,
      headerRef,
      bodyId,
      ns,
      rendered,
      style
    });
    const overlayEvent = useSameTarget(onModalClick);
    const draggable = computed(() => props.draggable && !props.fullscreen);
    expose({
      visible,
      dialogContentRef
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, {
        to: "body",
        disabled: !_ctx.appendToBody
      }, [
        createVNode(Transition, {
          name: "dialog-fade",
          onAfterEnter: unref(afterEnter),
          onAfterLeave: unref(afterLeave),
          onBeforeLeave: unref(beforeLeave),
          persisted: ""
        }, {
          default: withCtx(() => [
            withDirectives(createVNode(unref(ElOverlay), {
              "custom-mask-event": "",
              mask: _ctx.modal,
              "overlay-class": _ctx.modalClass,
              "z-index": unref(zIndex)
            }, {
              default: withCtx(() => [
                createElementVNode("div", {
                  role: "dialog",
                  "aria-modal": "true",
                  "aria-label": _ctx.title || void 0,
                  "aria-labelledby": !_ctx.title ? unref(titleId) : void 0,
                  "aria-describedby": unref(bodyId),
                  class: normalizeClass(`${unref(ns).namespace.value}-overlay-dialog`),
                  style: normalizeStyle(unref(overlayDialogStyle)),
                  onClick: _cache[0] || (_cache[0] = (...args) => unref(overlayEvent).onClick && unref(overlayEvent).onClick(...args)),
                  onMousedown: _cache[1] || (_cache[1] = (...args) => unref(overlayEvent).onMousedown && unref(overlayEvent).onMousedown(...args)),
                  onMouseup: _cache[2] || (_cache[2] = (...args) => unref(overlayEvent).onMouseup && unref(overlayEvent).onMouseup(...args))
                }, [
                  createVNode(unref(ElFocusTrap), {
                    loop: "",
                    trapped: unref(visible),
                    "focus-start-el": "container",
                    onFocusAfterTrapped: unref(onOpenAutoFocus),
                    onFocusAfterReleased: unref(onCloseAutoFocus),
                    onFocusoutPrevented: unref(onFocusoutPrevented),
                    onReleaseRequested: unref(onCloseRequested)
                  }, {
                    default: withCtx(() => [
                      unref(rendered) ? (openBlock(), createBlock(ElDialogContent, mergeProps({
                        key: 0,
                        ref_key: "dialogContentRef",
                        ref: dialogContentRef
                      }, _ctx.$attrs, {
                        "custom-class": _ctx.customClass,
                        center: _ctx.center,
                        "align-center": _ctx.alignCenter,
                        "close-icon": _ctx.closeIcon,
                        draggable: unref(draggable),
                        fullscreen: _ctx.fullscreen,
                        "show-close": _ctx.showClose,
                        title: _ctx.title,
                        onClose: unref(handleClose)
                      }), createSlots({
                        header: withCtx(() => [
                          !_ctx.$slots.title ? renderSlot(_ctx.$slots, "header", {
                            key: 0,
                            close: unref(handleClose),
                            titleId: unref(titleId),
                            titleClass: unref(ns).e("title")
                          }) : renderSlot(_ctx.$slots, "title", { key: 1 })
                        ]),
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "default")
                        ]),
                        _: 2
                      }, [
                        _ctx.$slots.footer ? {
                          name: "footer",
                          fn: withCtx(() => [
                            renderSlot(_ctx.$slots, "footer")
                          ])
                        } : void 0
                      ]), 1040, ["custom-class", "center", "align-center", "close-icon", "draggable", "fullscreen", "show-close", "title", "onClose"])) : createCommentVNode("v-if", true)
                    ]),
                    _: 3
                  }, 8, ["trapped", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusoutPrevented", "onReleaseRequested"])
                ], 46, _hoisted_1)
              ]),
              _: 3
            }, 8, ["mask", "overlay-class", "z-index"]), [
              [vShow, unref(visible)]
            ])
          ]),
          _: 3
        }, 8, ["onAfterEnter", "onAfterLeave", "onBeforeLeave"])
      ], 8, ["disabled"]);
    };
  }
});
var Dialog = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);
const ElDialog = withInstall(Dialog);
const ShippingAddress_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  name: "ShippingAddress",
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
    modelValue: {
      type: Object,
      default: {}
    }
  },
  mounted() {
    this.center.lat = this.$page.props.location.lat;
    this.center.lng = this.$page.props.location.lng;
    this.marker.lat = this.$page.props.location.lat;
    this.marker.lng = this.$page.props.location.lng;
  },
  data() {
    return {
      title: "Tambah Alamat Baru",
      selectMap: true,
      form: {
        id: null,
        name: null,
        reciever: null,
        phone: null,
        address: null,
        formatted_address: null,
        lat: null,
        lng: null,
        is_main: 0,
        distance: null
      },
      dataList: [],
      errors: {},
      terms: null,
      modalShow: false,
      modalForm: false,
      editMode: false,
      selected: this.modelValue,
      locations: [],
      locationSelected: null,
      mapOptions: {
        mapTypeControl: false,
        streetViewControl: false,
        lang: "id"
      },
      center: { lat: 51.093048, lng: 6.84212 },
      marker: {
        lat: 51.093048,
        lng: 6.84212
      }
    };
  },
  watch: {
    locationSelected(val) {
      if (val) {
        this.form.lat = val.lat;
        this.form.lng = val.lng;
        this.form.postal_code = val.postal_code;
        this.form.area_id = val.area_id;
        this.form.area_text = val.area_text;
      } else {
        this.form.postal_code = null;
        this.form.lat = null;
        this.form.lng = null;
        this.form.area_id = null;
        this.form.area_text = null;
      }
    },
    modelValue(val) {
      if (Object.keys(val).length) {
        this.selected = val;
      }
    }
  },
  methods: {
    openModal() {
      this.modalShow = true;
      this.fetchData();
    },
    selectAddress(v) {
      this.selected = v;
      this.$emit("update:modelValue", v);
      this.modalShow = false;
    },
    async fetchData() {
      try {
        const response = await axios.get("/user/alamat/data", {
          params: {
            // page: page,
          }
        });
        if (response.status == 200) {
          this.dataList = response.data;
        }
        this.isLoading = false;
      } catch (error) {
        console.error(error);
      }
    },
    createAddress() {
      this.modalForm = true;
    },
    closeForm() {
      this.reset();
      if (this.$root.window.mobile)
        ;
      else {
        this.$bvModal.hide("modalCreateAddress");
      }
    },
    reset() {
      this.title = "Tambah Alamat Baru";
      this.form.id = null;
      this.form.name = null;
      this.form.reciever = null;
      this.form.phone = null;
      this.form.address = null;
      this.form.postal_code = null;
      this.form.area_id = null;
      this.form.area_text = null;
      this.form.lat = null;
      this.form.lng = null;
      this.modalForm = false;
      this.modalShow = false;
      this.errors = {};
      this.locationSelected = {};
      this.editMode = false;
    },
    onSearch(search, loading) {
      if (search.length) {
        loading(true);
        this.search(loading, search, this);
      }
    },
    submit: function() {
      let data = {};
      data = Object.assign(data, this.form);
      let url = this.editMode ? this.route("user.address.update") : this.route(
        "user.address.store"
      );
      axios.post(url, data).then((res) => {
        if (res.data.fail) {
          this.errors = res.data.errors;
          this.$swal.close();
        } else {
          this.$swal.close();
          this.reset();
          this.selected = res.data.data;
          this.$emit("done", res.data.data);
          this.$swal.fire({
            icon: "success",
            title: "Success",
            showConfirmButton: false,
            showCancelButton: false,
            html: `Alamat Baru Berhasil Ditambahkan!`,
            timer: 1500
          });
        }
      }).catch(function(error) {
        if (error.response) {
          this.errors = error.response.data.errors;
        }
      });
    },
    search: _.debounce((loading, search, vm) => {
      let params = {
        keyword: search
      };
      axios.get(vm.route("shipper.sub_urban"), {
        params
      }).then(function(response) {
        const resp = response.data;
        vm.locations = [];
        resp.data.forEach((val) => {
          vm.locations.push({
            area_id: val.adm_level_5.id,
            area_text: val.adm_level_2.name + ", " + val.adm_level_3.name + ", " + val.adm_level_4.name + ", " + val.adm_level_5.name,
            postal_code: val.postcodes[0],
            lat: val.adm_level_5.geo_coord.lat,
            lng: val.adm_level_5.geo_coord.lng
          });
        });
        loading(false);
      }).catch(function(error) {
      });
    }, 350),
    edit(data) {
      this.reset();
      this.title = "Ubah Alamat";
      this.editMode = true;
      this.form.id = data.id;
      this.form.name = data.name;
      this.form.reciever = data.reciever;
      this.form.phone = data.phone;
      this.form.address = data.address;
      this.form.postal_code = data.postal_code;
      this.form.area_id = data.area_id;
      this.form.area_text = data.area_text;
      this.form.lat = data.lat;
      this.form.lng = data.lng;
      this.locationSelected = {
        area_id: data.area_id,
        area_text: data.area_text,
        postal_code: data.postal_code,
        lat: data.lat,
        lng: data.lng
      };
      this.$bvModal.hide("addressList");
      if (this.$root.window.mobile) {
        this.modalForm = true;
      } else {
        this.$bvModal.show("modalCreateAddress");
      }
    },
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
            this.form.distance = response.data.jarak;
            this.center.lat = v.latLng.lat();
            this.center.lng = v.latLng.lng();
            this.form.lat = v.latLng.lat();
            this.form.lng = v.latLng.lng();
          } else {
            ElMessage({
              type: "error",
              message: "Lokasi Tidak Terjangkau!"
            });
            this.center.lat = this.$page.props.location.lat;
            this.center.lng = this.$page.props.location.lng;
            this.marker.lat = this.$page.props.location.lat;
            this.marker.lng = this.$page.props.location.lng;
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
      const vm = this;
      try {
        this.isLoading = true;
        const response = await axios.post("/user/alamat/geocode", {
          latlng: lat + "," + lng
        });
        if (response.status == 200) {
          if (response.data.jarak <= 1e4) {
            vm.form.distance = response.data.jarak;
            vm.form.formatted_address = response.data.data;
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
    async submit() {
      const self = this;
      await axios.post("/user/alamat/json-store", self.form).then((response) => {
        const data = response.data;
        this.selected = data.result;
        this.$emit("update:modelValue", data.result);
        this.modalForm = false;
      }).catch((error) => {
        const data = error.response.data;
        self.errors = data.result;
        self.loading = false;
        console.log(error);
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_button = ElButton;
  const _component_el_dialog = ElDialog;
  const _component_el_row = ElRow;
  const _component_el_col = ElCol;
  const _component_el_form = ElForm;
  const _component_GMapAutocomplete = resolveComponent("GMapAutocomplete");
  const _component_GMapMap = resolveComponent("GMapMap");
  const _component_GMapMarker = resolveComponent("GMapMarker");
  const _component_el_form_item = ElFormItem;
  const _component_el_input = ElInput;
  const _component_el_radio_group = ElRadioGroup;
  const _component_el_radio = ElRadio;
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="content-heading d-flex justify-content-between mb-2 py-2"><span>Alamat Pengiriman</span><div class="space-x-1">`);
  if (Object.keys($data.selected).length) {
    _push(ssrRenderComponent(_component_el_button, {
      type: "primary",
      plain: "",
      onClick: $options.openModal
    }, {
      default: withCtx((_2, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Pilih Alamat Lain `);
        } else {
          return [
            createTextVNode(" Pilih Alamat Lain ")
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
  if (Object.keys($data.selected).length) {
    _push(`<div class="block block-bordered rounded mb-2"><div class="block-header border-3x border-bottom p-3"><h3 class="block-title">${ssrInterpolate($data.selected.name)}</h3></div><div class="block-content p-3"><div class="content__top-info"><span class="top-info__name">${ssrInterpolate($data.selected.reciever)}</span><span class="top-info__phone">${ssrInterpolate($data.selected.phone)}</span></div><div class="content__complete-address">${ssrInterpolate($data.selected.address)}</div><div class="content__district">${ssrInterpolate($data.selected.area_text)}</div></div></div>`);
  } else {
    _push(`<div class="block block-bordered rounded mb-2"><div class="block-content text-center p-3"><h3 class="font-weight-bold h4">Alamat Pengiriman Belum Ditambahkan</h3>`);
    _push(ssrRenderComponent(_component_el_button, {
      type: "primary",
      onClick: $options.createAddress
    }, {
      default: withCtx((_2, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<i class="fa fa-plus me-2"${_scopeId}></i>Tambah Alamat `);
        } else {
          return [
            createVNode("i", { class: "fa fa-plus me-2" }),
            createTextVNode("Tambah Alamat ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div></div>`);
  }
  _push(ssrRenderComponent(_component_el_dialog, {
    modelValue: $data.modalShow,
    "onUpdate:modelValue": ($event) => $data.modalShow = $event,
    class: "address-list",
    "show-close": false
  }, {
    header: withCtx(({ titleId }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="d-flex justify-content-between"${_scopeId}><h4${ssrRenderAttr("id", titleId)} class="fs-5 fw-bold my-auto"${_scopeId}> Pilih Alamat Pengiriman </h4></div>`);
      } else {
        return [
          createVNode("div", { class: "d-flex justify-content-between" }, [
            createVNode("h4", {
              id: titleId,
              class: "fs-5 fw-bold my-auto"
            }, " Pilih Alamat Pengiriman ", 8, ["id"])
          ])
        ];
      }
    }),
    default: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.dataList, (d) => {
          _push2(`<div class="block block-rounded block-bordered mb-15"${_scopeId}><div class="block-content p-3"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_el_row, null, {
            default: withCtx((_3, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_el_col, { span: 20 }, {
                  default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<div class="mb-3"${_scopeId3}><div class="font-size-md"${_scopeId3}><span class="font-w700"${_scopeId3}>${ssrInterpolate(d.reciever)}</span>(${ssrInterpolate(d.name)}) </div><div${_scopeId3}>${ssrInterpolate(d.phone)}</div><div class="content__complete-address"${_scopeId3}>${ssrInterpolate(d.address)}</div><div class="content__district"${_scopeId3}>${ssrInterpolate(d.area_text)}</div></div>`);
                      _push4(ssrRenderComponent(_component_el_button, {
                        type: "info",
                        onClick: ($event) => $options.edit(d),
                        size: "small"
                      }, {
                        default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(`<i class="si si-note me-1"${_scopeId4}></i> Ubah `);
                          } else {
                            return [
                              createVNode("i", { class: "si si-note me-1" }),
                              createTextVNode(" Ubah ")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("div", { class: "font-size-md" }, [
                            createVNode("span", { class: "font-w700" }, toDisplayString(d.reciever), 1),
                            createTextVNode("(" + toDisplayString(d.name) + ") ", 1)
                          ]),
                          createVNode("div", null, toDisplayString(d.phone), 1),
                          createVNode("div", { class: "content__complete-address" }, toDisplayString(d.address), 1),
                          createVNode("div", { class: "content__district" }, toDisplayString(d.area_text), 1)
                        ]),
                        createVNode(_component_el_button, {
                          type: "info",
                          onClick: ($event) => $options.edit(d),
                          size: "small"
                        }, {
                          default: withCtx(() => [
                            createVNode("i", { class: "si si-note me-1" }),
                            createTextVNode(" Ubah ")
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(ssrRenderComponent(_component_el_col, {
                  span: 4,
                  class: "d-flex"
                }, {
                  default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      if (this.selected.id != d.id) {
                        _push4(ssrRenderComponent(_component_el_button, {
                          type: "primary",
                          onClick: ($event) => $options.selectAddress(d),
                          class: "my-auto"
                        }, {
                          default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<i class="fa fa-check me-1"${_scopeId4}></i> Pilih `);
                            } else {
                              return [
                                createVNode("i", { class: "fa fa-check me-1" }),
                                createTextVNode(" Pilih ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        _push4(`<!---->`);
                      }
                    } else {
                      return [
                        this.selected.id != d.id ? (openBlock(), createBlock(_component_el_button, {
                          key: 0,
                          type: "primary",
                          onClick: ($event) => $options.selectAddress(d),
                          class: "my-auto"
                        }, {
                          default: withCtx(() => [
                            createVNode("i", { class: "fa fa-check me-1" }),
                            createTextVNode(" Pilih ")
                          ]),
                          _: 2
                        }, 1032, ["onClick"])) : createCommentVNode("", true)
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_el_col, { span: 20 }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "mb-3" }, [
                        createVNode("div", { class: "font-size-md" }, [
                          createVNode("span", { class: "font-w700" }, toDisplayString(d.reciever), 1),
                          createTextVNode("(" + toDisplayString(d.name) + ") ", 1)
                        ]),
                        createVNode("div", null, toDisplayString(d.phone), 1),
                        createVNode("div", { class: "content__complete-address" }, toDisplayString(d.address), 1),
                        createVNode("div", { class: "content__district" }, toDisplayString(d.area_text), 1)
                      ]),
                      createVNode(_component_el_button, {
                        type: "info",
                        onClick: ($event) => $options.edit(d),
                        size: "small"
                      }, {
                        default: withCtx(() => [
                          createVNode("i", { class: "si si-note me-1" }),
                          createTextVNode(" Ubah ")
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_el_col, {
                    span: 4,
                    class: "d-flex"
                  }, {
                    default: withCtx(() => [
                      this.selected.id != d.id ? (openBlock(), createBlock(_component_el_button, {
                        key: 0,
                        type: "primary",
                        onClick: ($event) => $options.selectAddress(d),
                        class: "my-auto"
                      }, {
                        default: withCtx(() => [
                          createVNode("i", { class: "fa fa-check me-1" }),
                          createTextVNode(" Pilih ")
                        ]),
                        _: 2
                      }, 1032, ["onClick"])) : createCommentVNode("", true)
                    ]),
                    _: 2
                  }, 1024)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(`</div></div>`);
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($data.dataList, (d) => {
            return openBlock(), createBlock("div", {
              class: "block block-rounded block-bordered mb-15",
              key: d.id
            }, [
              createVNode("div", { class: "block-content p-3" }, [
                createVNode(_component_el_row, null, {
                  default: withCtx(() => [
                    createVNode(_component_el_col, { span: 20 }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("div", { class: "font-size-md" }, [
                            createVNode("span", { class: "font-w700" }, toDisplayString(d.reciever), 1),
                            createTextVNode("(" + toDisplayString(d.name) + ") ", 1)
                          ]),
                          createVNode("div", null, toDisplayString(d.phone), 1),
                          createVNode("div", { class: "content__complete-address" }, toDisplayString(d.address), 1),
                          createVNode("div", { class: "content__district" }, toDisplayString(d.area_text), 1)
                        ]),
                        createVNode(_component_el_button, {
                          type: "info",
                          onClick: ($event) => $options.edit(d),
                          size: "small"
                        }, {
                          default: withCtx(() => [
                            createVNode("i", { class: "si si-note me-1" }),
                            createTextVNode(" Ubah ")
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_el_col, {
                      span: 4,
                      class: "d-flex"
                    }, {
                      default: withCtx(() => [
                        this.selected.id != d.id ? (openBlock(), createBlock(_component_el_button, {
                          key: 0,
                          type: "primary",
                          onClick: ($event) => $options.selectAddress(d),
                          class: "my-auto"
                        }, {
                          default: withCtx(() => [
                            createVNode("i", { class: "fa fa-check me-1" }),
                            createTextVNode(" Pilih ")
                          ]),
                          _: 2
                        }, 1032, ["onClick"])) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)
              ])
            ]);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_el_dialog, {
    modelValue: $data.modalForm,
    "onUpdate:modelValue": ($event) => $data.modalForm = $event,
    class: "address-form",
    "show-close": false
  }, {
    header: withCtx(({ titleId }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="d-flex justify-content-between"${_scopeId}><h4${ssrRenderAttr("id", titleId)} class="fs-5 fw-bold my-auto"${_scopeId}>${ssrInterpolate($data.title)}</h4></div>`);
      } else {
        return [
          createVNode("div", { class: "d-flex justify-content-between" }, [
            createVNode("h4", {
              id: titleId,
              class: "fs-5 fw-bold my-auto"
            }, toDisplayString($data.title), 9, ["id"])
          ])
        ];
      }
    }),
    default: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_el_form, {
          "label-position": "top",
          "label-width": "100%",
          onSubmit: $options.submit
        }, {
          default: withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              if ($data.selectMap) {
                _push3(`<!--[--><div class="ep-input mb-4"${_scopeId2}><div class="ep-input__wrapper"${_scopeId2}>`);
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
                  default: withCtx((_4, _push4, _parent4, _scopeId3) => {
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
                  error: $data.errors.phone
                }, {
                  default: withCtx((_4, _push4, _parent4, _scopeId3) => {
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
                _push3(`<!--]-->`);
              } else {
                _push3(`<!--[-->`);
                _push3(ssrRenderComponent(_component_el_form_item, {
                  label: "Alamat Berdasarkan Titik",
                  error: $data.errors.phone
                }, {
                  default: withCtx((_4, _push4, _parent4, _scopeId3) => {
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
                  error: $data.errors.phone
                }, {
                  default: withCtx((_4, _push4, _parent4, _scopeId3) => {
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
                  error: $data.errors.name
                }, {
                  default: withCtx((_4, _push4, _parent4, _scopeId3) => {
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
                  default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(_component_el_col, { span: 12 }, {
                        default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(ssrRenderComponent(_component_el_form_item, {
                              label: "Nama Penerima",
                              error: $data.errors.name
                            }, {
                              default: withCtx((_6, _push6, _parent6, _scopeId5) => {
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
                                error: $data.errors.name
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
                        default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(ssrRenderComponent(_component_el_form_item, {
                              label: "No HP Penerima",
                              error: $data.errors.phone
                            }, {
                              default: withCtx((_6, _push6, _parent6, _scopeId5) => {
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
                                error: $data.errors.phone
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
                              error: $data.errors.name
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
                              error: $data.errors.phone
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
                  default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(_component_el_radio_group, {
                        modelValue: $data.form.is_main,
                        "onUpdate:modelValue": ($event) => $data.form.is_main = $event
                      }, {
                        default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(ssrRenderComponent(_component_el_radio, {
                              label: 1,
                              border: ""
                            }, {
                              default: withCtx((_6, _push6, _parent6, _scopeId5) => {
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
                              default: withCtx((_6, _push6, _parent6, _scopeId5) => {
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
                _push3(`<!--]-->`);
              }
              _push3(`<div class="text-end"${_scopeId2}>`);
              if ($data.selectMap) {
                _push3(`<!--[-->`);
                _push3(ssrRenderComponent(_component_el_button, {
                  onClick: ($event) => $data.modalForm = false
                }, {
                  default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`Batal`);
                    } else {
                      return [
                        createTextVNode("Batal")
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
                _push3(ssrRenderComponent(_component_el_button, {
                  type: "primary",
                  onClick: ($event) => $data.selectMap = false
                }, {
                  default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(` Pilih Titik `);
                    } else {
                      return [
                        createTextVNode(" Pilih Titik ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
                _push3(`<!--]-->`);
              } else {
                _push3(`<!--[-->`);
                _push3(ssrRenderComponent(_component_el_button, {
                  type: "primary",
                  plain: "",
                  onClick: ($event) => $data.selectMap = true
                }, {
                  default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(` Kembali `);
                    } else {
                      return [
                        createTextVNode(" Kembali ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
                _push3(ssrRenderComponent(_component_el_button, {
                  type: "primary",
                  onClick: $options.submit
                }, {
                  default: withCtx((_4, _push4, _parent4, _scopeId3) => {
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
                _push3(`<!--]-->`);
              }
              _push3(`</div>`);
            } else {
              return [
                $data.selectMap ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                  createVNode("div", { class: "ep-input mb-4" }, [
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
                    error: $data.errors.phone
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
                  }, 8, ["error"])
                ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                  createVNode(_component_el_form_item, {
                    label: "Alamat Berdasarkan Titik",
                    error: $data.errors.phone
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
                    error: $data.errors.phone
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
                    error: $data.errors.name
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
                            error: $data.errors.name
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
                            error: $data.errors.phone
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
                  })
                ], 64)),
                createVNode("div", { class: "text-end" }, [
                  $data.selectMap ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                    createVNode(_component_el_button, {
                      onClick: ($event) => $data.modalForm = false
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Batal")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_el_button, {
                      type: "primary",
                      onClick: ($event) => $data.selectMap = false
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Pilih Titik ")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                    createVNode(_component_el_button, {
                      type: "primary",
                      plain: "",
                      onClick: ($event) => $data.selectMap = true
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Kembali ")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_el_button, {
                      type: "primary",
                      onClick: $options.submit
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Simpan ")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ], 64))
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_el_form, {
            "label-position": "top",
            "label-width": "100%",
            onSubmit: withModifiers($options.submit, ["prevent"])
          }, {
            default: withCtx(() => [
              $data.selectMap ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                createVNode("div", { class: "ep-input mb-4" }, [
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
                  error: $data.errors.phone
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
                }, 8, ["error"])
              ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                createVNode(_component_el_form_item, {
                  label: "Alamat Berdasarkan Titik",
                  error: $data.errors.phone
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
                  error: $data.errors.phone
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
                  error: $data.errors.name
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
                          error: $data.errors.name
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
                          error: $data.errors.phone
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
                })
              ], 64)),
              createVNode("div", { class: "text-end" }, [
                $data.selectMap ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                  createVNode(_component_el_button, {
                    onClick: ($event) => $data.modalForm = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Batal")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_el_button, {
                    type: "primary",
                    onClick: ($event) => $data.selectMap = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Pilih Titik ")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                  createVNode(_component_el_button, {
                    type: "primary",
                    plain: "",
                    onClick: ($event) => $data.selectMap = true
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Kembali ")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_el_button, {
                    type: "primary",
                    onClick: $options.submit
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Simpan ")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ], 64))
              ])
            ]),
            _: 1
          }, 8, ["onSubmit"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Frontend/Checkout/ShippingAddress.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ShippingAddress = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ShippingAddress as default
};
