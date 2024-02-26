import moment from "moment";
import { nextTick, defineComponent, computed, ref, reactive, watch, onMounted, onBeforeUnmount, toRefs, resolveComponent, openBlock, createBlock, Transition, withCtx, withDirectives, createVNode, createElementVNode, normalizeClass, normalizeStyle, withModifiers, createElementBlock, resolveDynamicComponent, createCommentVNode, toDisplayString, withKeys, renderSlot, createTextVNode, vShow, isVNode, render, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { G as EVENT_CODE, E as ElButton, o as ElFocusTrap, a as ElIcon, T as TypeComponents, H as useGlobalComponentSettings, I as TypeComponentsMap, h as useId, c as _export_sfc, J as isUndefined, K as isElement, A as debugWarn, _ as _export_sfc$1 } from "./ssr.js";
import { E as ElMessage } from "./index7.js";
import { E as ElInput } from "./index10.js";
import { E as ElOverlay, u as useDraggable, a as useLockscreen, b as useSameTarget } from "./index13.js";
import { i as isValidComponentSize } from "./validator.js";
import { isString, isObject, hasOwn, isFunction } from "@vue/shared";
import { isClient } from "@vueuse/core";
import { E as ElRow, a as ElCol } from "./index8.js";
import { E as ElTag } from "./index15.js";
import "@vue/server-renderer";
import "@inertiajs/vue3";
import "@inertiajs/vue3/server";
import "pinia";
import "lodash-unified";
import "@element-plus/icons-vue";
import "@ctrl/tinycolor";
import "./typescript.js";
import "@vue/reactivity";
import "./scroll.js";
const FOCUSABLE_ELEMENT_SELECTORS = `a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])`;
const isVisible = (element) => {
  if (process.env.NODE_ENV === "test")
    return true;
  const computed2 = getComputedStyle(element);
  return computed2.position === "fixed" ? false : element.offsetParent !== null;
};
const obtainAllFocusableElements = (element) => {
  return Array.from(element.querySelectorAll(FOCUSABLE_ELEMENT_SELECTORS)).filter((item) => isFocusable(item) && isVisible(item));
};
const isFocusable = (element) => {
  if (element.tabIndex > 0 || element.tabIndex === 0 && element.getAttribute("tabIndex") !== null) {
    return true;
  }
  if (element.disabled) {
    return false;
  }
  switch (element.nodeName) {
    case "A": {
      return !!element.href && element.rel !== "ignore";
    }
    case "INPUT": {
      return !(element.type === "hidden" || element.type === "file");
    }
    case "BUTTON":
    case "SELECT":
    case "TEXTAREA": {
      return true;
    }
    default: {
      return false;
    }
  }
};
const FOCUSABLE_CHILDREN = "_trap-focus-children";
const FOCUS_STACK = [];
const FOCUS_HANDLER = (e) => {
  var _a;
  if (FOCUS_STACK.length === 0)
    return;
  const focusableElement = FOCUS_STACK[FOCUS_STACK.length - 1][FOCUSABLE_CHILDREN];
  if (focusableElement.length > 0 && e.code === EVENT_CODE.tab) {
    if (focusableElement.length === 1) {
      e.preventDefault();
      if (document.activeElement !== focusableElement[0]) {
        focusableElement[0].focus();
      }
      return;
    }
    const goingBackward = e.shiftKey;
    const isFirst = e.target === focusableElement[0];
    const isLast = e.target === focusableElement[focusableElement.length - 1];
    if (isFirst && goingBackward) {
      e.preventDefault();
      focusableElement[focusableElement.length - 1].focus();
    }
    if (isLast && !goingBackward) {
      e.preventDefault();
      focusableElement[0].focus();
    }
    if (process.env.NODE_ENV === "test") {
      const index = focusableElement.indexOf(e.target);
      if (index !== -1) {
        (_a = focusableElement[goingBackward ? index - 1 : index + 1]) == null ? void 0 : _a.focus();
      }
    }
  }
};
const TrapFocus = {
  beforeMount(el) {
    el[FOCUSABLE_CHILDREN] = obtainAllFocusableElements(el);
    FOCUS_STACK.push(el);
    if (FOCUS_STACK.length <= 1) {
      document.addEventListener("keydown", FOCUS_HANDLER);
    }
  },
  updated(el) {
    nextTick(() => {
      el[FOCUSABLE_CHILDREN] = obtainAllFocusableElements(el);
    });
  },
  unmounted() {
    FOCUS_STACK.shift();
    if (FOCUS_STACK.length === 0) {
      document.removeEventListener("keydown", FOCUS_HANDLER);
    }
  }
};
const _sfc_main$1 = defineComponent({
  name: "ElMessageBox",
  directives: {
    TrapFocus
  },
  components: {
    ElButton,
    ElFocusTrap,
    ElInput,
    ElOverlay,
    ElIcon,
    ...TypeComponents
  },
  inheritAttrs: false,
  props: {
    buttonSize: {
      type: String,
      validator: isValidComponentSize
    },
    modal: {
      type: Boolean,
      default: true
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    closeOnClickModal: {
      type: Boolean,
      default: true
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true
    },
    closeOnHashChange: {
      type: Boolean,
      default: true
    },
    center: Boolean,
    draggable: Boolean,
    roundButton: {
      default: false,
      type: Boolean
    },
    container: {
      type: String,
      default: "body"
    },
    boxType: {
      type: String,
      default: ""
    }
  },
  emits: ["vanish", "action"],
  setup(props, { emit }) {
    const {
      locale,
      zIndex,
      ns,
      size: btnSize
    } = useGlobalComponentSettings("message-box", computed(() => props.buttonSize));
    const { t } = locale;
    const { nextZIndex } = zIndex;
    const visible = ref(false);
    const state = reactive({
      autofocus: true,
      beforeClose: null,
      callback: null,
      cancelButtonText: "",
      cancelButtonClass: "",
      confirmButtonText: "",
      confirmButtonClass: "",
      customClass: "",
      customStyle: {},
      dangerouslyUseHTMLString: false,
      distinguishCancelAndClose: false,
      icon: "",
      inputPattern: null,
      inputPlaceholder: "",
      inputType: "text",
      inputValue: null,
      inputValidator: null,
      inputErrorMessage: "",
      message: null,
      modalFade: true,
      modalClass: "",
      showCancelButton: false,
      showConfirmButton: true,
      type: "",
      title: void 0,
      showInput: false,
      action: "",
      confirmButtonLoading: false,
      cancelButtonLoading: false,
      confirmButtonDisabled: false,
      editorErrorMessage: "",
      validateError: false,
      zIndex: nextZIndex()
    });
    const typeClass = computed(() => {
      const type = state.type;
      return { [ns.bm("icon", type)]: type && TypeComponentsMap[type] };
    });
    const contentId = useId();
    const inputId = useId();
    const iconComponent = computed(() => state.icon || TypeComponentsMap[state.type] || "");
    const hasMessage = computed(() => !!state.message);
    const rootRef = ref();
    const headerRef = ref();
    const focusStartRef = ref();
    const inputRef = ref();
    const confirmRef = ref();
    const confirmButtonClasses = computed(() => state.confirmButtonClass);
    watch(() => state.inputValue, async (val) => {
      await nextTick();
      if (props.boxType === "prompt" && val !== null) {
        validate();
      }
    }, { immediate: true });
    watch(() => visible.value, (val) => {
      var _a, _b;
      if (val) {
        if (props.boxType !== "prompt") {
          if (state.autofocus) {
            focusStartRef.value = (_b = (_a = confirmRef.value) == null ? void 0 : _a.$el) != null ? _b : rootRef.value;
          } else {
            focusStartRef.value = rootRef.value;
          }
        }
        state.zIndex = nextZIndex();
      }
      if (props.boxType !== "prompt")
        return;
      if (val) {
        nextTick().then(() => {
          var _a2;
          if (inputRef.value && inputRef.value.$el) {
            if (state.autofocus) {
              focusStartRef.value = (_a2 = getInputElement()) != null ? _a2 : rootRef.value;
            } else {
              focusStartRef.value = rootRef.value;
            }
          }
        });
      } else {
        state.editorErrorMessage = "";
        state.validateError = false;
      }
    });
    const draggable = computed(() => props.draggable);
    useDraggable(rootRef, headerRef, draggable);
    onMounted(async () => {
      await nextTick();
      if (props.closeOnHashChange) {
        window.addEventListener("hashchange", doClose);
      }
    });
    onBeforeUnmount(() => {
      if (props.closeOnHashChange) {
        window.removeEventListener("hashchange", doClose);
      }
    });
    function doClose() {
      if (!visible.value)
        return;
      visible.value = false;
      nextTick(() => {
        if (state.action)
          emit("action", state.action);
      });
    }
    const handleWrapperClick = () => {
      if (props.closeOnClickModal) {
        handleAction(state.distinguishCancelAndClose ? "close" : "cancel");
      }
    };
    const overlayEvent = useSameTarget(handleWrapperClick);
    const handleInputEnter = (e) => {
      if (state.inputType !== "textarea") {
        e.preventDefault();
        return handleAction("confirm");
      }
    };
    const handleAction = (action) => {
      var _a;
      if (props.boxType === "prompt" && action === "confirm" && !validate()) {
        return;
      }
      state.action = action;
      if (state.beforeClose) {
        (_a = state.beforeClose) == null ? void 0 : _a.call(state, action, state, doClose);
      } else {
        doClose();
      }
    };
    const validate = () => {
      if (props.boxType === "prompt") {
        const inputPattern = state.inputPattern;
        if (inputPattern && !inputPattern.test(state.inputValue || "")) {
          state.editorErrorMessage = state.inputErrorMessage || t("el.messagebox.error");
          state.validateError = true;
          return false;
        }
        const inputValidator = state.inputValidator;
        if (typeof inputValidator === "function") {
          const validateResult = inputValidator(state.inputValue);
          if (validateResult === false) {
            state.editorErrorMessage = state.inputErrorMessage || t("el.messagebox.error");
            state.validateError = true;
            return false;
          }
          if (typeof validateResult === "string") {
            state.editorErrorMessage = validateResult;
            state.validateError = true;
            return false;
          }
        }
      }
      state.editorErrorMessage = "";
      state.validateError = false;
      return true;
    };
    const getInputElement = () => {
      const inputRefs = inputRef.value.$refs;
      return inputRefs.input || inputRefs.textarea;
    };
    const handleClose = () => {
      handleAction("close");
    };
    const onCloseRequested = () => {
      if (props.closeOnPressEscape) {
        handleClose();
      }
    };
    if (props.lockScroll) {
      useLockscreen(visible);
    }
    return {
      ...toRefs(state),
      ns,
      overlayEvent,
      visible,
      hasMessage,
      typeClass,
      contentId,
      inputId,
      btnSize,
      iconComponent,
      confirmButtonClasses,
      rootRef,
      focusStartRef,
      headerRef,
      inputRef,
      confirmRef,
      doClose,
      handleClose,
      onCloseRequested,
      handleWrapperClick,
      handleInputEnter,
      handleAction,
      t
    };
  }
});
const _hoisted_1 = ["aria-label", "aria-describedby"];
const _hoisted_2 = ["aria-label"];
const _hoisted_3 = ["id"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = resolveComponent("el-icon");
  const _component_close = resolveComponent("close");
  const _component_el_input = resolveComponent("el-input");
  const _component_el_button = resolveComponent("el-button");
  const _component_el_focus_trap = resolveComponent("el-focus-trap");
  const _component_el_overlay = resolveComponent("el-overlay");
  return openBlock(), createBlock(Transition, {
    name: "fade-in-linear",
    onAfterLeave: _cache[11] || (_cache[11] = ($event) => _ctx.$emit("vanish")),
    persisted: ""
  }, {
    default: withCtx(() => [
      withDirectives(createVNode(_component_el_overlay, {
        "z-index": _ctx.zIndex,
        "overlay-class": [_ctx.ns.is("message-box"), _ctx.modalClass],
        mask: _ctx.modal
      }, {
        default: withCtx(() => [
          createElementVNode("div", {
            role: "dialog",
            "aria-label": _ctx.title,
            "aria-modal": "true",
            "aria-describedby": !_ctx.showInput ? _ctx.contentId : void 0,
            class: normalizeClass(`${_ctx.ns.namespace.value}-overlay-message-box`),
            onClick: _cache[8] || (_cache[8] = (...args) => _ctx.overlayEvent.onClick && _ctx.overlayEvent.onClick(...args)),
            onMousedown: _cache[9] || (_cache[9] = (...args) => _ctx.overlayEvent.onMousedown && _ctx.overlayEvent.onMousedown(...args)),
            onMouseup: _cache[10] || (_cache[10] = (...args) => _ctx.overlayEvent.onMouseup && _ctx.overlayEvent.onMouseup(...args))
          }, [
            createVNode(_component_el_focus_trap, {
              loop: "",
              trapped: _ctx.visible,
              "focus-trap-el": _ctx.rootRef,
              "focus-start-el": _ctx.focusStartRef,
              onReleaseRequested: _ctx.onCloseRequested
            }, {
              default: withCtx(() => [
                createElementVNode("div", {
                  ref: "rootRef",
                  class: normalizeClass([
                    _ctx.ns.b(),
                    _ctx.customClass,
                    _ctx.ns.is("draggable", _ctx.draggable),
                    { [_ctx.ns.m("center")]: _ctx.center }
                  ]),
                  style: normalizeStyle(_ctx.customStyle),
                  tabindex: "-1",
                  onClick: _cache[7] || (_cache[7] = withModifiers(() => {
                  }, ["stop"]))
                }, [
                  _ctx.title !== null && _ctx.title !== void 0 ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    ref: "headerRef",
                    class: normalizeClass(_ctx.ns.e("header"))
                  }, [
                    createElementVNode("div", {
                      class: normalizeClass(_ctx.ns.e("title"))
                    }, [
                      _ctx.iconComponent && _ctx.center ? (openBlock(), createBlock(_component_el_icon, {
                        key: 0,
                        class: normalizeClass([_ctx.ns.e("status"), _ctx.typeClass])
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(resolveDynamicComponent(_ctx.iconComponent)))
                        ]),
                        _: 1
                      }, 8, ["class"])) : createCommentVNode("v-if", true),
                      createElementVNode("span", null, toDisplayString(_ctx.title), 1)
                    ], 2),
                    _ctx.showClose ? (openBlock(), createElementBlock("button", {
                      key: 0,
                      type: "button",
                      class: normalizeClass(_ctx.ns.e("headerbtn")),
                      "aria-label": _ctx.t("el.messagebox.close"),
                      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.handleAction(_ctx.distinguishCancelAndClose ? "close" : "cancel")),
                      onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => _ctx.handleAction(_ctx.distinguishCancelAndClose ? "close" : "cancel"), ["prevent"]), ["enter"]))
                    }, [
                      createVNode(_component_el_icon, {
                        class: normalizeClass(_ctx.ns.e("close"))
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_close)
                        ]),
                        _: 1
                      }, 8, ["class"])
                    ], 42, _hoisted_2)) : createCommentVNode("v-if", true)
                  ], 2)) : createCommentVNode("v-if", true),
                  createElementVNode("div", {
                    id: _ctx.contentId,
                    class: normalizeClass(_ctx.ns.e("content"))
                  }, [
                    createElementVNode("div", {
                      class: normalizeClass(_ctx.ns.e("container"))
                    }, [
                      _ctx.iconComponent && !_ctx.center && _ctx.hasMessage ? (openBlock(), createBlock(_component_el_icon, {
                        key: 0,
                        class: normalizeClass([_ctx.ns.e("status"), _ctx.typeClass])
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(resolveDynamicComponent(_ctx.iconComponent)))
                        ]),
                        _: 1
                      }, 8, ["class"])) : createCommentVNode("v-if", true),
                      _ctx.hasMessage ? (openBlock(), createElementBlock("div", {
                        key: 1,
                        class: normalizeClass(_ctx.ns.e("message"))
                      }, [
                        renderSlot(_ctx.$slots, "default", {}, () => [
                          !_ctx.dangerouslyUseHTMLString ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.showInput ? "label" : "p"), {
                            key: 0,
                            for: _ctx.showInput ? _ctx.inputId : void 0
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(!_ctx.dangerouslyUseHTMLString ? _ctx.message : ""), 1)
                            ]),
                            _: 1
                          }, 8, ["for"])) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.showInput ? "label" : "p"), {
                            key: 1,
                            for: _ctx.showInput ? _ctx.inputId : void 0,
                            innerHTML: _ctx.message
                          }, null, 8, ["for", "innerHTML"]))
                        ])
                      ], 2)) : createCommentVNode("v-if", true)
                    ], 2),
                    withDirectives(createElementVNode("div", {
                      class: normalizeClass(_ctx.ns.e("input"))
                    }, [
                      createVNode(_component_el_input, {
                        id: _ctx.inputId,
                        ref: "inputRef",
                        modelValue: _ctx.inputValue,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.inputValue = $event),
                        type: _ctx.inputType,
                        placeholder: _ctx.inputPlaceholder,
                        "aria-invalid": _ctx.validateError,
                        class: normalizeClass({ invalid: _ctx.validateError }),
                        onKeydown: withKeys(_ctx.handleInputEnter, ["enter"])
                      }, null, 8, ["id", "modelValue", "type", "placeholder", "aria-invalid", "class", "onKeydown"]),
                      createElementVNode("div", {
                        class: normalizeClass(_ctx.ns.e("errormsg")),
                        style: normalizeStyle({
                          visibility: !!_ctx.editorErrorMessage ? "visible" : "hidden"
                        })
                      }, toDisplayString(_ctx.editorErrorMessage), 7)
                    ], 2), [
                      [vShow, _ctx.showInput]
                    ])
                  ], 10, _hoisted_3),
                  createElementVNode("div", {
                    class: normalizeClass(_ctx.ns.e("btns"))
                  }, [
                    _ctx.showCancelButton ? (openBlock(), createBlock(_component_el_button, {
                      key: 0,
                      loading: _ctx.cancelButtonLoading,
                      class: normalizeClass([_ctx.cancelButtonClass]),
                      round: _ctx.roundButton,
                      size: _ctx.btnSize,
                      onClick: _cache[3] || (_cache[3] = ($event) => _ctx.handleAction("cancel")),
                      onKeydown: _cache[4] || (_cache[4] = withKeys(withModifiers(($event) => _ctx.handleAction("cancel"), ["prevent"]), ["enter"]))
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.cancelButtonText || _ctx.t("el.messagebox.cancel")), 1)
                      ]),
                      _: 1
                    }, 8, ["loading", "class", "round", "size"])) : createCommentVNode("v-if", true),
                    withDirectives(createVNode(_component_el_button, {
                      ref: "confirmRef",
                      type: "primary",
                      loading: _ctx.confirmButtonLoading,
                      class: normalizeClass([_ctx.confirmButtonClasses]),
                      round: _ctx.roundButton,
                      disabled: _ctx.confirmButtonDisabled,
                      size: _ctx.btnSize,
                      onClick: _cache[5] || (_cache[5] = ($event) => _ctx.handleAction("confirm")),
                      onKeydown: _cache[6] || (_cache[6] = withKeys(withModifiers(($event) => _ctx.handleAction("confirm"), ["prevent"]), ["enter"]))
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.confirmButtonText || _ctx.t("el.messagebox.confirm")), 1)
                      ]),
                      _: 1
                    }, 8, ["loading", "class", "round", "disabled", "size"]), [
                      [vShow, _ctx.showConfirmButton]
                    ])
                  ], 2)
                ], 6)
              ]),
              _: 3
            }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onReleaseRequested"])
          ], 42, _hoisted_1)
        ]),
        _: 3
      }, 8, ["z-index", "overlay-class", "mask"]), [
        [vShow, _ctx.visible]
      ])
    ]),
    _: 3
  });
}
var MessageBoxConstructor = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/message-box/src/index.vue"]]);
const messageInstance = /* @__PURE__ */ new Map();
const getAppendToElement = (props) => {
  let appendTo = document.body;
  if (props.appendTo) {
    if (isString(props.appendTo)) {
      appendTo = document.querySelector(props.appendTo);
    }
    if (isElement(props.appendTo)) {
      appendTo = props.appendTo;
    }
    if (!isElement(appendTo)) {
      debugWarn("ElMessageBox", "the appendTo option is not an HTMLElement. Falling back to document.body.");
      appendTo = document.body;
    }
  }
  return appendTo;
};
const initInstance = (props, container, appContext = null) => {
  const vnode = createVNode(MessageBoxConstructor, props, isFunction(props.message) || isVNode(props.message) ? {
    default: isFunction(props.message) ? props.message : () => props.message
  } : null);
  vnode.appContext = appContext;
  render(vnode, container);
  getAppendToElement(props).appendChild(container.firstElementChild);
  return vnode.component;
};
const genContainer = () => {
  return document.createElement("div");
};
const showMessage = (options, appContext) => {
  const container = genContainer();
  options.onVanish = () => {
    render(null, container);
    messageInstance.delete(vm);
  };
  options.onAction = (action) => {
    const currentMsg = messageInstance.get(vm);
    let resolve;
    if (options.showInput) {
      resolve = { value: vm.inputValue, action };
    } else {
      resolve = action;
    }
    if (options.callback) {
      options.callback(resolve, instance.proxy);
    } else {
      if (action === "cancel" || action === "close") {
        if (options.distinguishCancelAndClose && action !== "cancel") {
          currentMsg.reject("close");
        } else {
          currentMsg.reject("cancel");
        }
      } else {
        currentMsg.resolve(resolve);
      }
    }
  };
  const instance = initInstance(options, container, appContext);
  const vm = instance.proxy;
  for (const prop in options) {
    if (hasOwn(options, prop) && !hasOwn(vm.$props, prop)) {
      vm[prop] = options[prop];
    }
  }
  vm.visible = true;
  return vm;
};
function MessageBox(options, appContext = null) {
  if (!isClient)
    return Promise.reject();
  let callback;
  if (isString(options) || isVNode(options)) {
    options = {
      message: options
    };
  } else {
    callback = options.callback;
  }
  return new Promise((resolve, reject) => {
    const vm = showMessage(options, appContext != null ? appContext : MessageBox._context);
    messageInstance.set(vm, {
      options,
      callback,
      resolve,
      reject
    });
  });
}
const MESSAGE_BOX_VARIANTS = ["alert", "confirm", "prompt"];
const MESSAGE_BOX_DEFAULT_OPTS = {
  alert: { closeOnPressEscape: false, closeOnClickModal: false },
  confirm: { showCancelButton: true },
  prompt: { showCancelButton: true, showInput: true }
};
MESSAGE_BOX_VARIANTS.forEach((boxType) => {
  MessageBox[boxType] = messageBoxFactory(boxType);
});
function messageBoxFactory(boxType) {
  return (message, title, options, appContext) => {
    let titleOrOpts = "";
    if (isObject(title)) {
      options = title;
      titleOrOpts = "";
    } else if (isUndefined(title)) {
      titleOrOpts = "";
    } else {
      titleOrOpts = title;
    }
    return MessageBox(Object.assign({
      title: titleOrOpts,
      message,
      type: "",
      ...MESSAGE_BOX_DEFAULT_OPTS[boxType]
    }, options, {
      boxType
    }), appContext);
  };
}
MessageBox.close = () => {
  messageInstance.forEach((_, vm) => {
    vm.doClose();
  });
  messageInstance.clear();
};
MessageBox._context = null;
const _MessageBox = MessageBox;
_MessageBox.install = (app) => {
  _MessageBox._context = app._context;
  app.config.globalProperties.$msgbox = _MessageBox;
  app.config.globalProperties.$messageBox = _MessageBox;
  app.config.globalProperties.$alert = _MessageBox.alert;
  app.config.globalProperties.$confirm = _MessageBox.confirm;
  app.config.globalProperties.$prompt = _MessageBox.prompt;
};
const ElMessageBox = _MessageBox;
const _sfc_main = {
  data() {
    return {
      status: this.route().params.status == void 0 ? "unpaid" : this.route().params.status,
      data: [],
      isLoading: false,
      page: 1,
      pageSize: 0,
      total: 0,
      from: 0,
      to: 0,
      searchTerms: ""
    };
  },
  async mounted() {
    await this.fetchData();
  },
  methods: {
    async fetchData(page) {
      var page = page == void 0 ? 1 : page;
      try {
        this.isLoading = true;
        const response = await axios.get(this.route("user.order.data"), {
          params: {
            page,
            search: this.searchTerms,
            status: this.status
          }
        });
        if (response.status == 200) {
          this.data = response.data.data;
          this.page = response.data.current_page;
          this.total = response.data.total;
          this.pageSize = response.data.per_page;
          this.from = response.data.from;
          this.to = response.data.to;
        }
        this.isLoading = false;
      } catch (error) {
        console.error(error);
      }
    },
    format_date(v) {
      if (v) {
        moment.locale("id");
        return moment(String(v)).format("DD MMM YYYY");
      }
    },
    payment(d) {
      snap.pay(d.payment_ref, {
        onSuccess: function(result) {
          this.updatePayment("paid", d.id);
          ElMessage({
            type: "success",
            message: "Pembayaran Berhasil"
          });
        },
        onPending: function(result) {
          ElMessage({
            type: "info",
            message: "Menunggu Pembayaran"
          });
        },
        onError: function(result) {
          ElMessage({
            type: "error",
            message: "Pembayaran Gagal"
          });
        },
        onClose: function(result) {
          console.log(result);
        }
      });
    },
    async updatePayment(status, id) {
      try {
        this.isLoading = true;
        const response = await axios.post(this.route("user.order.state", { id }), {
          status
        });
        if (response.status == 200) {
          location.reload();
        }
        this.isLoading = false;
      } catch (error) {
        console.error(error);
      }
    },
    receive(id) {
      ElMessageBox.alert("Pastikan barang yang diterima sesuai dengan pesanan!", "Peringatan", {
        showCancelButton: true,
        confirmButtonText: "Pesanan Sudah Diterima!",
        cancelButtonText: "Batal!",
        type: "warning"
      }).then(() => {
        this.$inertia.post(this.route("user.order.confirm", { id }), {
          preserveScroll: true,
          onSuccess: () => {
            this.fetchData();
            ElMessage({
              type: "success",
              message: "Pesanan Berhasil Diterima!"
            });
          }
        });
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_user_layout = resolveComponent("user-layout");
  const _component_el_row = ElRow;
  const _component_el_col = ElCol;
  const _component_el_input = ElInput;
  const _component_el_button = ElButton;
  const _component_el_tag = ElTag;
  _push(ssrRenderComponent(_component_user_layout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="d-flex justify-content-between align-items-center mb-4"${_scopeId}><h3 class="fs-4 fw-bold mb-0"${_scopeId}>Pesanan Saya</h3></div><div class="block block-bordered rounded mb-3"${_scopeId}><ul class="nav nav-tabs nav-tabs-alt nav-fill"${_scopeId}><li class="nav-item"${_scopeId}><a class="${ssrRenderClass([{ "active": $data.status == "unpaid" ? true : false }, "nav-link"])}"${ssrRenderAttr("href", _ctx.route("user.order.index", { status: "unpaid" }))}${_scopeId}>Belum Bayar </a></li><li class="nav-item"${_scopeId}><a class="${ssrRenderClass([{ "active": $data.status == "process" ? true : false }, "nav-link"])}"${ssrRenderAttr("href", _ctx.route("user.order.index", { status: "process" }))}${_scopeId}>Dikemas </a></li><li class="nav-item"${_scopeId}><a class="${ssrRenderClass([{ "active": $data.status == "shipped" ? true : false }, "nav-link"])}"${ssrRenderAttr("href", _ctx.route("user.order.index", { status: "shipped" }))}${_scopeId}>Dikirim </a></li><li class="nav-item"${_scopeId}><a class="${ssrRenderClass([{ "active": $data.status == "done" ? true : false }, "nav-link"])}"${ssrRenderAttr("href", _ctx.route("user.order.index", { status: "done" }))}${_scopeId}>Selesai </a></li><li class="nav-item"${_scopeId}><a class="${ssrRenderClass([{ "active": $data.status == "cancel" ? true : false }, "nav-link"])}"${ssrRenderAttr("href", _ctx.route("user.order.index", { status: "cancel" }))}${_scopeId}>Dibatalkan </a></li></ul><div class="block-content p-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_el_row, { gutter: 12 }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_el_col, { lg: 12 }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_el_input, {
                      modelValue: $data.searchTerms,
                      "onUpdate:modelValue": ($event) => $data.searchTerms = $event,
                      class: "w-75 m-2",
                      placeholder: "Cari Pesanan"
                    }, {
                      prefix: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<i class="fa fa-search"${_scopeId4}></i>`);
                        } else {
                          return [
                            createVNode("i", { class: "fa fa-search" })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_el_input, {
                        modelValue: $data.searchTerms,
                        "onUpdate:modelValue": ($event) => $data.searchTerms = $event,
                        class: "w-75 m-2",
                        placeholder: "Cari Pesanan"
                      }, {
                        prefix: withCtx(() => [
                          createVNode("i", { class: "fa fa-search" })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_el_col, {
                lg: 12,
                class: "d-flex float-end my-auto"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="d-flex float-end my-auto"${_scopeId3}><div class="my-auto px-3"${_scopeId3}><span${_scopeId3}>${ssrInterpolate($data.from)}-${ssrInterpolate($data.to)}/${ssrInterpolate($data.total)}</span></div><div class="pt-25 pl-0"${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_el_button, {
                      type: "primary",
                      size: "small"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<i class="fa fa-chevron-left fa-fw"${_scopeId4}></i>`);
                        } else {
                          return [
                            createVNode("i", { class: "fa fa-chevron-left fa-fw" })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_el_button, {
                      type: "primary",
                      size: "small",
                      plain: ""
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<i class="fa fa-chevron-right fa-fw"${_scopeId4}></i>`);
                        } else {
                          return [
                            createVNode("i", { class: "fa fa-chevron-right fa-fw" })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "d-flex float-end my-auto" }, [
                        createVNode("div", { class: "my-auto px-3" }, [
                          createVNode("span", null, toDisplayString($data.from) + "-" + toDisplayString($data.to) + "/" + toDisplayString($data.total), 1)
                        ]),
                        createVNode("div", { class: "pt-25 pl-0" }, [
                          createVNode(_component_el_button, {
                            type: "primary",
                            size: "small"
                          }, {
                            default: withCtx(() => [
                              createVNode("i", { class: "fa fa-chevron-left fa-fw" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_button, {
                            type: "primary",
                            size: "small",
                            plain: ""
                          }, {
                            default: withCtx(() => [
                              createVNode("i", { class: "fa fa-chevron-right fa-fw" })
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
                createVNode(_component_el_col, { lg: 12 }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: $data.searchTerms,
                      "onUpdate:modelValue": ($event) => $data.searchTerms = $event,
                      class: "w-75 m-2",
                      placeholder: "Cari Pesanan"
                    }, {
                      prefix: withCtx(() => [
                        createVNode("i", { class: "fa fa-search" })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_col, {
                  lg: 12,
                  class: "d-flex float-end my-auto"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "d-flex float-end my-auto" }, [
                      createVNode("div", { class: "my-auto px-3" }, [
                        createVNode("span", null, toDisplayString($data.from) + "-" + toDisplayString($data.to) + "/" + toDisplayString($data.total), 1)
                      ]),
                      createVNode("div", { class: "pt-25 pl-0" }, [
                        createVNode(_component_el_button, {
                          type: "primary",
                          size: "small"
                        }, {
                          default: withCtx(() => [
                            createVNode("i", { class: "fa fa-chevron-left fa-fw" })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_button, {
                          type: "primary",
                          size: "small",
                          plain: ""
                        }, {
                          default: withCtx(() => [
                            createVNode("i", { class: "fa fa-chevron-right fa-fw" })
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
        _push2(`</div></div>`);
        if ($data.data.length) {
          _push2(`<!--[-->`);
          ssrRenderList($data.data, (d) => {
            _push2(`<div class="block rounded block-bordered mb-2"${_scopeId}><div class="block-header border-3x border-bottom p-3"${_scopeId}><h3 class="block-title"${_scopeId}>${ssrInterpolate($options.format_date(d.created_at))}</h3><div class="block-options"${_scopeId}><div class="block-options-item"${_scopeId}>`);
            if (d.state == "pending") {
              _push2(ssrRenderComponent(_component_el_tag, {
                class: "ml-2",
                type: "warning"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Menunggu Konfirmasi`);
                  } else {
                    return [
                      createTextVNode("Menunggu Konfirmasi")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else if (d.state == "shipping") {
              _push2(ssrRenderComponent(_component_el_tag, {
                class: "ml-2",
                type: "info"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Dikirim`);
                  } else {
                    return [
                      createTextVNode("Dikirim")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else if (d.state == "done") {
              _push2(ssrRenderComponent(_component_el_tag, {
                class: "ml-2",
                type: "success"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Selesai`);
                  } else {
                    return [
                      createTextVNode("Selesai")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else if (d.state == "cancel") {
              _push2(ssrRenderComponent(_component_el_tag, {
                class: "ml-2",
                type: "danger"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Batal`);
                  } else {
                    return [
                      createTextVNode("Batal")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div><div class="block-content p-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_row, { gutter: 20 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_col, { lg: 18 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_row, { gutter: 20 }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_el_col, { lg: 3 }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<img${ssrRenderAttr("src", d.lines[0].product.main_image)} class="img-fluid"${_scopeId5}>`);
                                  } else {
                                    return [
                                      createVNode("img", {
                                        src: d.lines[0].product.main_image,
                                        class: "img-fluid"
                                      }, null, 8, ["src"])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_el_col, {
                                lg: 18,
                                class: "d-flex"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="my-auto"${_scopeId5}><div class="fs-6 fw-bold"${_scopeId5}>${ssrInterpolate(d.lines[0].product.name)} `);
                                    if (d.lines[0].variant.name) {
                                      _push6(`<!--[--> - ${ssrInterpolate(d.lines[0].variant.name)}<!--]-->`);
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                    _push6(`</div><div class="fs-sm fw-semibold"${_scopeId5}>${ssrInterpolate(d.lines[0].qty)} x ${ssrInterpolate(_ctx.currency(d.lines[0].price))}</div></div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "my-auto" }, [
                                        createVNode("div", { class: "fs-6 fw-bold" }, [
                                          createTextVNode(toDisplayString(d.lines[0].product.name) + " ", 1),
                                          d.lines[0].variant.name ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                            createTextVNode(" - " + toDisplayString(d.lines[0].variant.name), 1)
                                          ], 64)) : createCommentVNode("", true)
                                        ]),
                                        createVNode("div", { class: "fs-sm fw-semibold" }, toDisplayString(d.lines[0].qty) + " x " + toDisplayString(_ctx.currency(d.lines[0].price)), 1)
                                      ])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_el_col, { lg: 3 }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: d.lines[0].product.main_image,
                                      class: "img-fluid"
                                    }, null, 8, ["src"])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_el_col, {
                                  lg: 18,
                                  class: "d-flex"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "my-auto" }, [
                                      createVNode("div", { class: "fs-6 fw-bold" }, [
                                        createTextVNode(toDisplayString(d.lines[0].product.name) + " ", 1),
                                        d.lines[0].variant.name ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                          createTextVNode(" - " + toDisplayString(d.lines[0].variant.name), 1)
                                        ], 64)) : createCommentVNode("", true)
                                      ]),
                                      createVNode("div", { class: "fs-sm fw-semibold" }, toDisplayString(d.lines[0].qty) + " x " + toDisplayString(_ctx.currency(d.lines[0].price)), 1)
                                    ])
                                  ]),
                                  _: 2
                                }, 1024)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_row, { gutter: 20 }, {
                            default: withCtx(() => [
                              createVNode(_component_el_col, { lg: 3 }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: d.lines[0].product.main_image,
                                    class: "img-fluid"
                                  }, null, 8, ["src"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_el_col, {
                                lg: 18,
                                class: "d-flex"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "my-auto" }, [
                                    createVNode("div", { class: "fs-6 fw-bold" }, [
                                      createTextVNode(toDisplayString(d.lines[0].product.name) + " ", 1),
                                      d.lines[0].variant.name ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                        createTextVNode(" - " + toDisplayString(d.lines[0].variant.name), 1)
                                      ], 64)) : createCommentVNode("", true)
                                    ]),
                                    createVNode("div", { class: "fs-sm fw-semibold" }, toDisplayString(d.lines[0].qty) + " x " + toDisplayString(_ctx.currency(d.lines[0].price)), 1)
                                  ])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_col, {
                    lg: 6,
                    class: "d-flex"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="my-auto"${_scopeId3}><div class="fs-6"${_scopeId3}>Total Belanja</div><div class="fs-5 fw-bold"${_scopeId3}>${ssrInterpolate(_ctx.currency(d.grand_total))}</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "my-auto" }, [
                            createVNode("div", { class: "fs-6" }, "Total Belanja"),
                            createVNode("div", { class: "fs-5 fw-bold" }, toDisplayString(_ctx.currency(d.grand_total)), 1)
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_col, { lg: 18 }, {
                      default: withCtx(() => [
                        createVNode(_component_el_row, { gutter: 20 }, {
                          default: withCtx(() => [
                            createVNode(_component_el_col, { lg: 3 }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: d.lines[0].product.main_image,
                                  class: "img-fluid"
                                }, null, 8, ["src"])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_el_col, {
                              lg: 18,
                              class: "d-flex"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "my-auto" }, [
                                  createVNode("div", { class: "fs-6 fw-bold" }, [
                                    createTextVNode(toDisplayString(d.lines[0].product.name) + " ", 1),
                                    d.lines[0].variant.name ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                      createTextVNode(" - " + toDisplayString(d.lines[0].variant.name), 1)
                                    ], 64)) : createCommentVNode("", true)
                                  ]),
                                  createVNode("div", { class: "fs-sm fw-semibold" }, toDisplayString(d.lines[0].qty) + " x " + toDisplayString(_ctx.currency(d.lines[0].price)), 1)
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_el_col, {
                      lg: 6,
                      class: "d-flex"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "my-auto" }, [
                          createVNode("div", { class: "fs-6" }, "Total Belanja"),
                          createVNode("div", { class: "fs-5 fw-bold" }, toDisplayString(_ctx.currency(d.grand_total)), 1)
                        ])
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div><div class="block-content block-content-full block-content-sm text-right border-top"${_scopeId}>`);
            if (d.state == "shipped") {
              _push2(ssrRenderComponent(_component_el_button, {
                type: "primary",
                onClick: ($event) => $options.receive(d.id)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Terima Pesanan `);
                  } else {
                    return [
                      createTextVNode(" Terima Pesanan ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<a${ssrRenderAttr("href", _ctx.route("user.order.show", { id: d.id }))} class="ep-button ep-button--primary is-plain"${_scopeId}> Detail Pesanan </a>`);
            if (d.payment_status == "unpaid") {
              _push2(ssrRenderComponent(_component_el_button, {
                type: "primary",
                onClick: ($event) => $options.payment(d)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Bayar Sekarang `);
                  } else {
                    return [
                      createTextVNode(" Bayar Sekarang ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          });
          _push2(`<!--]-->`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          createVNode("div", { class: "d-flex justify-content-between align-items-center mb-4" }, [
            createVNode("h3", { class: "fs-4 fw-bold mb-0" }, "Pesanan Saya")
          ]),
          createVNode("div", { class: "block block-bordered rounded mb-3" }, [
            createVNode("ul", { class: "nav nav-tabs nav-tabs-alt nav-fill" }, [
              createVNode("li", { class: "nav-item" }, [
                createVNode("a", {
                  class: ["nav-link", { "active": $data.status == "unpaid" ? true : false }],
                  href: _ctx.route("user.order.index", { status: "unpaid" })
                }, "Belum Bayar ", 10, ["href"])
              ]),
              createVNode("li", { class: "nav-item" }, [
                createVNode("a", {
                  class: ["nav-link", { "active": $data.status == "process" ? true : false }],
                  href: _ctx.route("user.order.index", { status: "process" })
                }, "Dikemas ", 10, ["href"])
              ]),
              createVNode("li", { class: "nav-item" }, [
                createVNode("a", {
                  class: ["nav-link", { "active": $data.status == "shipped" ? true : false }],
                  href: _ctx.route("user.order.index", { status: "shipped" })
                }, "Dikirim ", 10, ["href"])
              ]),
              createVNode("li", { class: "nav-item" }, [
                createVNode("a", {
                  class: ["nav-link", { "active": $data.status == "done" ? true : false }],
                  href: _ctx.route("user.order.index", { status: "done" })
                }, "Selesai ", 10, ["href"])
              ]),
              createVNode("li", { class: "nav-item" }, [
                createVNode("a", {
                  class: ["nav-link", { "active": $data.status == "cancel" ? true : false }],
                  href: _ctx.route("user.order.index", { status: "cancel" })
                }, "Dibatalkan ", 10, ["href"])
              ])
            ]),
            createVNode("div", { class: "block-content p-2" }, [
              createVNode(_component_el_row, { gutter: 12 }, {
                default: withCtx(() => [
                  createVNode(_component_el_col, { lg: 12 }, {
                    default: withCtx(() => [
                      createVNode(_component_el_input, {
                        modelValue: $data.searchTerms,
                        "onUpdate:modelValue": ($event) => $data.searchTerms = $event,
                        class: "w-75 m-2",
                        placeholder: "Cari Pesanan"
                      }, {
                        prefix: withCtx(() => [
                          createVNode("i", { class: "fa fa-search" })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_col, {
                    lg: 12,
                    class: "d-flex float-end my-auto"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-flex float-end my-auto" }, [
                        createVNode("div", { class: "my-auto px-3" }, [
                          createVNode("span", null, toDisplayString($data.from) + "-" + toDisplayString($data.to) + "/" + toDisplayString($data.total), 1)
                        ]),
                        createVNode("div", { class: "pt-25 pl-0" }, [
                          createVNode(_component_el_button, {
                            type: "primary",
                            size: "small"
                          }, {
                            default: withCtx(() => [
                              createVNode("i", { class: "fa fa-chevron-left fa-fw" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_button, {
                            type: "primary",
                            size: "small",
                            plain: ""
                          }, {
                            default: withCtx(() => [
                              createVNode("i", { class: "fa fa-chevron-right fa-fw" })
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
          ]),
          $data.data.length ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList($data.data, (d) => {
            return openBlock(), createBlock("div", {
              class: "block rounded block-bordered mb-2",
              key: d.id
            }, [
              createVNode("div", { class: "block-header border-3x border-bottom p-3" }, [
                createVNode("h3", { class: "block-title" }, toDisplayString($options.format_date(d.created_at)), 1),
                createVNode("div", { class: "block-options" }, [
                  createVNode("div", { class: "block-options-item" }, [
                    d.state == "pending" ? (openBlock(), createBlock(_component_el_tag, {
                      key: 0,
                      class: "ml-2",
                      type: "warning"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Menunggu Konfirmasi")
                      ]),
                      _: 1
                    })) : d.state == "shipping" ? (openBlock(), createBlock(_component_el_tag, {
                      key: 1,
                      class: "ml-2",
                      type: "info"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Dikirim")
                      ]),
                      _: 1
                    })) : d.state == "done" ? (openBlock(), createBlock(_component_el_tag, {
                      key: 2,
                      class: "ml-2",
                      type: "success"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Selesai")
                      ]),
                      _: 1
                    })) : d.state == "cancel" ? (openBlock(), createBlock(_component_el_tag, {
                      key: 3,
                      class: "ml-2",
                      type: "danger"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Batal")
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ])
                ])
              ]),
              createVNode("div", { class: "block-content p-3" }, [
                createVNode(_component_el_row, { gutter: 20 }, {
                  default: withCtx(() => [
                    createVNode(_component_el_col, { lg: 18 }, {
                      default: withCtx(() => [
                        createVNode(_component_el_row, { gutter: 20 }, {
                          default: withCtx(() => [
                            createVNode(_component_el_col, { lg: 3 }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: d.lines[0].product.main_image,
                                  class: "img-fluid"
                                }, null, 8, ["src"])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_el_col, {
                              lg: 18,
                              class: "d-flex"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "my-auto" }, [
                                  createVNode("div", { class: "fs-6 fw-bold" }, [
                                    createTextVNode(toDisplayString(d.lines[0].product.name) + " ", 1),
                                    d.lines[0].variant.name ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                      createTextVNode(" - " + toDisplayString(d.lines[0].variant.name), 1)
                                    ], 64)) : createCommentVNode("", true)
                                  ]),
                                  createVNode("div", { class: "fs-sm fw-semibold" }, toDisplayString(d.lines[0].qty) + " x " + toDisplayString(_ctx.currency(d.lines[0].price)), 1)
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_el_col, {
                      lg: 6,
                      class: "d-flex"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "my-auto" }, [
                          createVNode("div", { class: "fs-6" }, "Total Belanja"),
                          createVNode("div", { class: "fs-5 fw-bold" }, toDisplayString(_ctx.currency(d.grand_total)), 1)
                        ])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)
              ]),
              createVNode("div", { class: "block-content block-content-full block-content-sm text-right border-top" }, [
                d.state == "shipped" ? (openBlock(), createBlock(_component_el_button, {
                  key: 0,
                  type: "primary",
                  onClick: withModifiers(($event) => $options.receive(d.id), ["prevent"])
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Terima Pesanan ")
                  ]),
                  _: 2
                }, 1032, ["onClick"])) : createCommentVNode("", true),
                createVNode("a", {
                  href: _ctx.route("user.order.show", { id: d.id }),
                  class: "ep-button ep-button--primary is-plain"
                }, " Detail Pesanan ", 8, ["href"]),
                d.payment_status == "unpaid" ? (openBlock(), createBlock(_component_el_button, {
                  key: 1,
                  type: "primary",
                  onClick: ($event) => $options.payment(d)
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Bayar Sekarang ")
                  ]),
                  _: 2
                }, 1032, ["onClick"])) : createCommentVNode("", true)
              ])
            ]);
          }), 128)) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Frontend/UserOrder/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Index as default
};
