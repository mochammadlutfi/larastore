import { inject, computed, getCurrentInstance, toRaw, watch, unref, defineComponent, reactive, toRefs, onBeforeUnmount, nextTick, withDirectives, openBlock, createElementBlock, normalizeClass, withModifiers, renderSlot, createElementVNode, toDisplayString, vShow, ref, onMounted, normalizeStyle, shallowRef, triggerRef, provide, resolveComponent, resolveDirective, createVNode, withCtx, createBlock, Transition, Fragment, renderList, createCommentVNode, withKeys, vModelText, createSlots, resolveDynamicComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { a1 as componentSizeMap, K as isElement, n as useNamespace, c as _export_sfc, u as useLocale, m as useDeprecated, y as useFormItem, v as useFormSize, A as debugWarn, s as isNumber, G as EVENT_CODE, S as ElScrollbar, U as ElTooltip, a as ElIcon, a2 as useTooltipContentProps, i as iconPropType, a3 as placements, w as withInstall, D as withNoopInstall, _ as _export_sfc$1 } from "./ssr.js";
import { isClient, useResizeObserver, isIOS } from "@vueuse/core";
import { U as UPDATE_MODEL_EVENT, i as isKorean, C as CHANGE_EVENT, E as ElInput } from "./index10.js";
import { E as ElTag, t as tagProps } from "./index15.js";
import { CircleClose, ArrowDown } from "@element-plus/icons-vue";
import { get, isEqual, debounce } from "lodash-unified";
import { isFunction, toRawType, isObject, isString } from "@vue/shared";
import { s as scrollIntoView } from "./scroll.js";
import { i as isValidComponentSize } from "./validator.js";
const escapeStringRegexp = (string = "") => string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
const getComponentSize = (size) => {
  return componentSizeMap[size || "default"];
};
const useFocus = (el) => {
  return {
    focus: () => {
      var _a, _b;
      (_b = (_a = el.value) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
    }
  };
};
const nodeList = /* @__PURE__ */ new Map();
let startClick;
if (isClient) {
  document.addEventListener("mousedown", (e) => startClick = e);
  document.addEventListener("mouseup", (e) => {
    for (const handlers of nodeList.values()) {
      for (const { documentHandler } of handlers) {
        documentHandler(e, startClick);
      }
    }
  });
}
function createDocumentHandler(el, binding) {
  let excludes = [];
  if (Array.isArray(binding.arg)) {
    excludes = binding.arg;
  } else if (isElement(binding.arg)) {
    excludes.push(binding.arg);
  }
  return function(mouseup, mousedown) {
    const popperRef = binding.instance.popperRef;
    const mouseUpTarget = mouseup.target;
    const mouseDownTarget = mousedown == null ? void 0 : mousedown.target;
    const isBound = !binding || !binding.instance;
    const isTargetExists = !mouseUpTarget || !mouseDownTarget;
    const isContainedByEl = el.contains(mouseUpTarget) || el.contains(mouseDownTarget);
    const isSelf = el === mouseUpTarget;
    const isTargetExcluded = excludes.length && excludes.some((item) => item == null ? void 0 : item.contains(mouseUpTarget)) || excludes.length && excludes.includes(mouseDownTarget);
    const isContainedByPopper = popperRef && (popperRef.contains(mouseUpTarget) || popperRef.contains(mouseDownTarget));
    if (isBound || isTargetExists || isContainedByEl || isSelf || isTargetExcluded || isContainedByPopper) {
      return;
    }
    binding.value(mouseup, mousedown);
  };
}
const ClickOutside = {
  beforeMount(el, binding) {
    if (!nodeList.has(el)) {
      nodeList.set(el, []);
    }
    nodeList.get(el).push({
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    });
  },
  updated(el, binding) {
    if (!nodeList.has(el)) {
      nodeList.set(el, []);
    }
    const handlers = nodeList.get(el);
    const oldHandlerIndex = handlers.findIndex((item) => item.bindingFn === binding.oldValue);
    const newHandler = {
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    };
    if (oldHandlerIndex >= 0) {
      handlers.splice(oldHandlerIndex, 1, newHandler);
    } else {
      handlers.push(newHandler);
    }
  },
  unmounted(el) {
    nodeList.delete(el);
  }
};
const selectGroupKey = Symbol("ElSelectGroup");
const selectKey = Symbol("ElSelect");
function useOption(props, states) {
  const select = inject(selectKey);
  const selectGroup = inject(selectGroupKey, { disabled: false });
  const isObject2 = computed(() => {
    return Object.prototype.toString.call(props.value).toLowerCase() === "[object object]";
  });
  const itemSelected = computed(() => {
    if (!select.props.multiple) {
      return isEqual2(props.value, select.props.modelValue);
    } else {
      return contains(select.props.modelValue, props.value);
    }
  });
  const limitReached = computed(() => {
    if (select.props.multiple) {
      const modelValue = select.props.modelValue || [];
      return !itemSelected.value && modelValue.length >= select.props.multipleLimit && select.props.multipleLimit > 0;
    } else {
      return false;
    }
  });
  const currentLabel = computed(() => {
    return props.label || (isObject2.value ? "" : props.value);
  });
  const currentValue = computed(() => {
    return props.value || props.label || "";
  });
  const isDisabled = computed(() => {
    return props.disabled || states.groupDisabled || limitReached.value;
  });
  const instance = getCurrentInstance();
  const contains = (arr = [], target) => {
    if (!isObject2.value) {
      return arr && arr.includes(target);
    } else {
      const valueKey = select.props.valueKey;
      return arr && arr.some((item) => {
        return toRaw(get(item, valueKey)) === get(target, valueKey);
      });
    }
  };
  const isEqual2 = (a, b) => {
    if (!isObject2.value) {
      return a === b;
    } else {
      const { valueKey } = select.props;
      return get(a, valueKey) === get(b, valueKey);
    }
  };
  const hoverItem = () => {
    if (!props.disabled && !selectGroup.disabled) {
      select.hoverIndex = select.optionsArray.indexOf(instance.proxy);
    }
  };
  watch(() => currentLabel.value, () => {
    if (!props.created && !select.props.remote)
      select.setSelected();
  });
  watch(() => props.value, (val, oldVal) => {
    const { remote, valueKey } = select.props;
    if (!Object.is(val, oldVal)) {
      select.onOptionDestroy(oldVal, instance.proxy);
      select.onOptionCreate(instance.proxy);
    }
    if (!props.created && !remote) {
      if (valueKey && typeof val === "object" && typeof oldVal === "object" && val[valueKey] === oldVal[valueKey]) {
        return;
      }
      select.setSelected();
    }
  });
  watch(() => selectGroup.disabled, () => {
    states.groupDisabled = selectGroup.disabled;
  }, { immediate: true });
  const { queryChange } = toRaw(select);
  watch(queryChange, (changes) => {
    const { query } = unref(changes);
    const regexp = new RegExp(escapeStringRegexp(query), "i");
    states.visible = regexp.test(currentLabel.value) || props.created;
    if (!states.visible) {
      select.filteredOptionsCount--;
    }
  }, { immediate: true });
  return {
    select,
    currentLabel,
    currentValue,
    itemSelected,
    isDisabled,
    hoverItem
  };
}
const _sfc_main$4 = defineComponent({
  name: "ElOption",
  componentName: "ElOption",
  props: {
    value: {
      required: true,
      type: [String, Number, Boolean, Object]
    },
    label: [String, Number],
    created: Boolean,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const ns = useNamespace("select");
    const states = reactive({
      index: -1,
      groupDisabled: false,
      visible: true,
      hitState: false,
      hover: false
    });
    const { currentLabel, itemSelected, isDisabled, select, hoverItem } = useOption(props, states);
    const { visible, hover } = toRefs(states);
    const vm = getCurrentInstance().proxy;
    select.onOptionCreate(vm);
    onBeforeUnmount(() => {
      const key = vm.value;
      const { selected } = select;
      const selectedOptions = select.props.multiple ? selected : [selected];
      const doesSelected = selectedOptions.some((item) => {
        return item.value === vm.value;
      });
      nextTick(() => {
        if (select.cachedOptions.get(key) === vm && !doesSelected) {
          select.cachedOptions.delete(key);
        }
      });
      select.onOptionDestroy(key, vm);
    });
    function selectOptionClick() {
      if (props.disabled !== true && states.groupDisabled !== true) {
        select.handleOptionSelect(vm);
      }
    }
    return {
      ns,
      currentLabel,
      itemSelected,
      isDisabled,
      select,
      hoverItem,
      visible,
      hover,
      selectOptionClick,
      states
    };
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("li", {
    class: normalizeClass([
      _ctx.ns.be("dropdown", "item"),
      _ctx.ns.is("disabled", _ctx.isDisabled),
      {
        selected: _ctx.itemSelected,
        hover: _ctx.hover
      }
    ]),
    onMouseenter: _cache[0] || (_cache[0] = (...args) => _ctx.hoverItem && _ctx.hoverItem(...args)),
    onClick: _cache[1] || (_cache[1] = withModifiers((...args) => _ctx.selectOptionClick && _ctx.selectOptionClick(...args), ["stop"]))
  }, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      createElementVNode("span", null, toDisplayString(_ctx.currentLabel), 1)
    ])
  ], 34)), [
    [vShow, _ctx.visible]
  ]);
}
var Option = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);
const _sfc_main$3 = defineComponent({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const select = inject(selectKey);
    const ns = useNamespace("select");
    const popperClass = computed(() => select.props.popperClass);
    const isMultiple = computed(() => select.props.multiple);
    const isFitInputWidth = computed(() => select.props.fitInputWidth);
    const minWidth = ref("");
    function updateMinWidth() {
      var _a;
      minWidth.value = `${(_a = select.selectWrapper) == null ? void 0 : _a.offsetWidth}px`;
    }
    onMounted(() => {
      updateMinWidth();
      useResizeObserver(select.selectWrapper, updateMinWidth);
    });
    return {
      ns,
      minWidth,
      popperClass,
      isMultiple,
      isFitInputWidth
    };
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([_ctx.ns.b("dropdown"), _ctx.ns.is("multiple", _ctx.isMultiple), _ctx.popperClass]),
    style: normalizeStyle({ [_ctx.isFitInputWidth ? "width" : "minWidth"]: _ctx.minWidth })
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 6);
}
var ElSelectMenu = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);
function useSelectStates(props) {
  const { t } = useLocale();
  return reactive({
    options: /* @__PURE__ */ new Map(),
    cachedOptions: /* @__PURE__ */ new Map(),
    createdLabel: null,
    createdSelected: false,
    selected: props.multiple ? [] : {},
    inputLength: 20,
    inputWidth: 0,
    optionsCount: 0,
    filteredOptionsCount: 0,
    visible: false,
    selectedLabel: "",
    hoverIndex: -1,
    query: "",
    previousQuery: null,
    inputHovering: false,
    cachedPlaceHolder: "",
    currentPlaceholder: t("el.select.placeholder"),
    menuVisibleOnFocus: false,
    isOnComposition: false,
    prefixWidth: 11,
    mouseEnter: false
  });
}
let ignoreFocusEvent = false;
const useSelect = (props, states, ctx) => {
  const { t } = useLocale();
  const ns = useNamespace("select");
  useDeprecated({
    from: "suffixTransition",
    replacement: "override style scheme",
    version: "2.3.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/select.html#select-attributes"
  }, computed(() => props.suffixTransition === false));
  const reference = ref(null);
  const input = ref(null);
  const iOSInput = ref(null);
  const tooltipRef = ref(null);
  const tags = ref(null);
  const selectWrapper = ref(null);
  const scrollbar = ref(null);
  const hoverOption = ref(-1);
  const queryChange = shallowRef({ query: "" });
  const groupQueryChange = shallowRef("");
  const optionList = ref([]);
  let originClientHeight = 0;
  const { form, formItem } = useFormItem();
  const readonly = computed(() => !props.filterable || props.multiple || !states.visible);
  const selectDisabled = computed(() => props.disabled || (form == null ? void 0 : form.disabled));
  const showClose = computed(() => {
    const hasValue = props.multiple ? Array.isArray(props.modelValue) && props.modelValue.length > 0 : props.modelValue !== void 0 && props.modelValue !== null && props.modelValue !== "";
    const criteria = props.clearable && !selectDisabled.value && states.inputHovering && hasValue;
    return criteria;
  });
  const iconComponent = computed(() => props.remote && props.filterable && !props.remoteShowSuffix ? "" : props.suffixIcon);
  const iconReverse = computed(() => ns.is("reverse", iconComponent.value && states.visible && props.suffixTransition));
  const debounce$1 = computed(() => props.remote ? 300 : 0);
  const emptyText = computed(() => {
    if (props.loading) {
      return props.loadingText || t("el.select.loading");
    } else {
      if (props.remote && states.query === "" && states.options.size === 0)
        return false;
      if (props.filterable && states.query && states.options.size > 0 && states.filteredOptionsCount === 0) {
        return props.noMatchText || t("el.select.noMatch");
      }
      if (states.options.size === 0) {
        return props.noDataText || t("el.select.noData");
      }
    }
    return null;
  });
  const optionsArray = computed(() => {
    const list = Array.from(states.options.values());
    const newList = [];
    optionList.value.forEach((item) => {
      const index = list.findIndex((i) => i.currentLabel === item);
      if (index > -1) {
        newList.push(list[index]);
      }
    });
    return newList.length ? newList : list;
  });
  const cachedOptionsArray = computed(() => Array.from(states.cachedOptions.values()));
  const showNewOption = computed(() => {
    const hasExistingOption = optionsArray.value.filter((option) => {
      return !option.created;
    }).some((option) => {
      return option.currentLabel === states.query;
    });
    return props.filterable && props.allowCreate && states.query !== "" && !hasExistingOption;
  });
  const selectSize = useFormSize();
  const collapseTagSize = computed(() => ["small"].includes(selectSize.value) ? "small" : "default");
  const dropMenuVisible = computed({
    get() {
      return states.visible && emptyText.value !== false;
    },
    set(val) {
      states.visible = val;
    }
  });
  watch([() => selectDisabled.value, () => selectSize.value, () => form == null ? void 0 : form.size], () => {
    nextTick(() => {
      resetInputHeight();
    });
  });
  watch(() => props.placeholder, (val) => {
    states.cachedPlaceHolder = states.currentPlaceholder = val;
    const hasValue = props.multiple && Array.isArray(props.modelValue) && props.modelValue.length > 0;
    if (hasValue) {
      states.currentPlaceholder = "";
    }
  });
  watch(() => props.modelValue, (val, oldVal) => {
    if (props.multiple) {
      resetInputHeight();
      if (val && val.length > 0 || input.value && states.query !== "") {
        states.currentPlaceholder = "";
      } else {
        states.currentPlaceholder = states.cachedPlaceHolder;
      }
      if (props.filterable && !props.reserveKeyword) {
        states.query = "";
        handleQueryChange(states.query);
      }
    }
    setSelected();
    if (props.filterable && !props.multiple) {
      states.inputLength = 20;
    }
    if (!isEqual(val, oldVal) && props.validateEvent) {
      formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn(err));
    }
  }, {
    flush: "post",
    deep: true
  });
  watch(() => states.visible, (val) => {
    var _a, _b, _c, _d, _e;
    if (!val) {
      if (props.filterable) {
        if (isFunction(props.filterMethod)) {
          props.filterMethod("");
        }
        if (isFunction(props.remoteMethod)) {
          props.remoteMethod("");
        }
      }
      input.value && input.value.blur();
      states.query = "";
      states.previousQuery = null;
      states.selectedLabel = "";
      states.inputLength = 20;
      states.menuVisibleOnFocus = false;
      resetHoverIndex();
      nextTick(() => {
        if (input.value && input.value.value === "" && states.selected.length === 0) {
          states.currentPlaceholder = states.cachedPlaceHolder;
        }
      });
      if (!props.multiple) {
        if (states.selected) {
          if (props.filterable && props.allowCreate && states.createdSelected && states.createdLabel) {
            states.selectedLabel = states.createdLabel;
          } else {
            states.selectedLabel = states.selected.currentLabel;
          }
          if (props.filterable)
            states.query = states.selectedLabel;
        }
        if (props.filterable) {
          states.currentPlaceholder = states.cachedPlaceHolder;
        }
      }
    } else {
      (_b = (_a = tooltipRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
      if (props.filterable) {
        states.filteredOptionsCount = states.optionsCount;
        states.query = props.remote ? "" : states.selectedLabel;
        (_d = (_c = iOSInput.value) == null ? void 0 : _c.focus) == null ? void 0 : _d.call(_c);
        if (props.multiple) {
          (_e = input.value) == null ? void 0 : _e.focus();
        } else {
          if (states.selectedLabel) {
            states.currentPlaceholder = `${states.selectedLabel}`;
            states.selectedLabel = "";
          }
        }
        handleQueryChange(states.query);
        if (!props.multiple && !props.remote) {
          queryChange.value.query = "";
          triggerRef(queryChange);
          triggerRef(groupQueryChange);
        }
      }
    }
    ctx.emit("visible-change", val);
  });
  watch(() => states.options.entries(), () => {
    var _a, _b, _c;
    if (!isClient)
      return;
    (_b = (_a = tooltipRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
    if (props.multiple) {
      resetInputHeight();
    }
    const inputs = ((_c = selectWrapper.value) == null ? void 0 : _c.querySelectorAll("input")) || [];
    if (!Array.from(inputs).includes(document.activeElement)) {
      setSelected();
    }
    if (props.defaultFirstOption && (props.filterable || props.remote) && states.filteredOptionsCount) {
      checkDefaultFirstOption();
    }
  }, {
    flush: "post"
  });
  watch(() => states.hoverIndex, (val) => {
    if (isNumber(val) && val > -1) {
      hoverOption.value = optionsArray.value[val] || {};
    } else {
      hoverOption.value = {};
    }
    optionsArray.value.forEach((option) => {
      option.hover = hoverOption.value === option;
    });
  });
  const resetInputHeight = () => {
    nextTick(() => {
      var _a, _b;
      if (!reference.value)
        return;
      const input2 = reference.value.$el.querySelector("input");
      originClientHeight = originClientHeight || (input2.clientHeight > 0 ? input2.clientHeight + 2 : 0);
      const _tags = tags.value;
      const gotSize = getComponentSize(selectSize.value || (form == null ? void 0 : form.size));
      const sizeInMap = selectSize.value || gotSize === originClientHeight || originClientHeight <= 0 ? gotSize : originClientHeight;
      const isElHidden = input2.offsetParent === null;
      !isElHidden && (input2.style.height = `${(states.selected.length === 0 ? sizeInMap : Math.max(_tags ? _tags.clientHeight + (_tags.clientHeight > sizeInMap ? 6 : 0) : 0, sizeInMap)) - 2}px`);
      if (states.visible && emptyText.value !== false) {
        (_b = (_a = tooltipRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
      }
    });
  };
  const handleQueryChange = async (val) => {
    if (states.previousQuery === val || states.isOnComposition)
      return;
    if (states.previousQuery === null && (isFunction(props.filterMethod) || isFunction(props.remoteMethod))) {
      states.previousQuery = val;
      return;
    }
    states.previousQuery = val;
    nextTick(() => {
      var _a, _b;
      if (states.visible)
        (_b = (_a = tooltipRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
    });
    states.hoverIndex = -1;
    if (props.multiple && props.filterable) {
      nextTick(() => {
        const length = input.value.value.length * 15 + 20;
        states.inputLength = props.collapseTags ? Math.min(50, length) : length;
        managePlaceholder();
        resetInputHeight();
      });
    }
    if (props.remote && isFunction(props.remoteMethod)) {
      states.hoverIndex = -1;
      props.remoteMethod(val);
    } else if (isFunction(props.filterMethod)) {
      props.filterMethod(val);
      triggerRef(groupQueryChange);
    } else {
      states.filteredOptionsCount = states.optionsCount;
      queryChange.value.query = val;
      triggerRef(queryChange);
      triggerRef(groupQueryChange);
    }
    if (props.defaultFirstOption && (props.filterable || props.remote) && states.filteredOptionsCount) {
      await nextTick();
      checkDefaultFirstOption();
    }
  };
  const managePlaceholder = () => {
    if (states.currentPlaceholder !== "") {
      states.currentPlaceholder = input.value.value ? "" : states.cachedPlaceHolder;
    }
  };
  const checkDefaultFirstOption = () => {
    const optionsInDropdown = optionsArray.value.filter((n) => n.visible && !n.disabled && !n.states.groupDisabled);
    const userCreatedOption = optionsInDropdown.find((n) => n.created);
    const firstOriginOption = optionsInDropdown[0];
    states.hoverIndex = getValueIndex(optionsArray.value, userCreatedOption || firstOriginOption);
  };
  const setSelected = () => {
    var _a;
    if (!props.multiple) {
      const option = getOption(props.modelValue);
      if ((_a = option.props) == null ? void 0 : _a.created) {
        states.createdLabel = option.props.value;
        states.createdSelected = true;
      } else {
        states.createdSelected = false;
      }
      states.selectedLabel = option.currentLabel;
      states.selected = option;
      if (props.filterable)
        states.query = states.selectedLabel;
      return;
    } else {
      states.selectedLabel = "";
    }
    const result = [];
    if (Array.isArray(props.modelValue)) {
      props.modelValue.forEach((value) => {
        result.push(getOption(value));
      });
    }
    states.selected = result;
    nextTick(() => {
      resetInputHeight();
    });
  };
  const getOption = (value) => {
    let option;
    const isObjectValue = toRawType(value).toLowerCase() === "object";
    const isNull = toRawType(value).toLowerCase() === "null";
    const isUndefined = toRawType(value).toLowerCase() === "undefined";
    for (let i = states.cachedOptions.size - 1; i >= 0; i--) {
      const cachedOption = cachedOptionsArray.value[i];
      const isEqualValue = isObjectValue ? get(cachedOption.value, props.valueKey) === get(value, props.valueKey) : cachedOption.value === value;
      if (isEqualValue) {
        option = {
          value,
          currentLabel: cachedOption.currentLabel,
          isDisabled: cachedOption.isDisabled
        };
        break;
      }
    }
    if (option)
      return option;
    const label = isObjectValue ? value.label : !isNull && !isUndefined ? value : "";
    const newOption = {
      value,
      currentLabel: label
    };
    if (props.multiple) {
      newOption.hitState = false;
    }
    return newOption;
  };
  const resetHoverIndex = () => {
    setTimeout(() => {
      const valueKey = props.valueKey;
      if (!props.multiple) {
        states.hoverIndex = optionsArray.value.findIndex((item) => {
          return getValueKey(item) === getValueKey(states.selected);
        });
      } else {
        if (states.selected.length > 0) {
          states.hoverIndex = Math.min.apply(null, states.selected.map((selected) => {
            return optionsArray.value.findIndex((item) => {
              return get(item, valueKey) === get(selected, valueKey);
            });
          }));
        } else {
          states.hoverIndex = -1;
        }
      }
    }, 300);
  };
  const handleResize = () => {
    var _a, _b;
    resetInputWidth();
    (_b = (_a = tooltipRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
    props.multiple && resetInputHeight();
  };
  const resetInputWidth = () => {
    var _a;
    states.inputWidth = (_a = reference.value) == null ? void 0 : _a.$el.offsetWidth;
  };
  const onInputChange = () => {
    if (props.filterable && states.query !== states.selectedLabel) {
      states.query = states.selectedLabel;
      handleQueryChange(states.query);
    }
  };
  const debouncedOnInputChange = debounce(() => {
    onInputChange();
  }, debounce$1.value);
  const debouncedQueryChange = debounce((e) => {
    handleQueryChange(e.target.value);
  }, debounce$1.value);
  const emitChange = (val) => {
    if (!isEqual(props.modelValue, val)) {
      ctx.emit(CHANGE_EVENT, val);
    }
  };
  const deletePrevTag = (e) => {
    if (e.code === EVENT_CODE.delete)
      return;
    if (e.target.value.length <= 0 && !toggleLastOptionHitState()) {
      const value = props.modelValue.slice();
      value.pop();
      ctx.emit(UPDATE_MODEL_EVENT, value);
      emitChange(value);
    }
    if (e.target.value.length === 1 && props.modelValue.length === 0) {
      states.currentPlaceholder = states.cachedPlaceHolder;
    }
  };
  const deleteTag = (event, tag) => {
    const index = states.selected.indexOf(tag);
    if (index > -1 && !selectDisabled.value) {
      const value = props.modelValue.slice();
      value.splice(index, 1);
      ctx.emit(UPDATE_MODEL_EVENT, value);
      emitChange(value);
      ctx.emit("remove-tag", tag.value);
    }
    event.stopPropagation();
  };
  const deleteSelected = (event) => {
    event.stopPropagation();
    const value = props.multiple ? [] : "";
    if (!isString(value)) {
      for (const item of states.selected) {
        if (item.isDisabled)
          value.push(item.value);
      }
    }
    ctx.emit(UPDATE_MODEL_EVENT, value);
    emitChange(value);
    states.hoverIndex = -1;
    states.visible = false;
    ctx.emit("clear");
  };
  const handleOptionSelect = (option) => {
    var _a;
    if (props.multiple) {
      const value = (props.modelValue || []).slice();
      const optionIndex = getValueIndex(value, option.value);
      if (optionIndex > -1) {
        value.splice(optionIndex, 1);
      } else if (props.multipleLimit <= 0 || value.length < props.multipleLimit) {
        value.push(option.value);
      }
      ctx.emit(UPDATE_MODEL_EVENT, value);
      emitChange(value);
      if (option.created) {
        states.query = "";
        handleQueryChange("");
        states.inputLength = 20;
      }
      if (props.filterable)
        (_a = input.value) == null ? void 0 : _a.focus();
    } else {
      ctx.emit(UPDATE_MODEL_EVENT, option.value);
      emitChange(option.value);
      states.visible = false;
    }
    setSoftFocus();
    if (states.visible)
      return;
    nextTick(() => {
      scrollToOption(option);
    });
  };
  const getValueIndex = (arr = [], value) => {
    if (!isObject(value))
      return arr.indexOf(value);
    const valueKey = props.valueKey;
    let index = -1;
    arr.some((item, i) => {
      if (toRaw(get(item, valueKey)) === get(value, valueKey)) {
        index = i;
        return true;
      }
      return false;
    });
    return index;
  };
  const setSoftFocus = () => {
    const _input = input.value || reference.value;
    if (_input) {
      _input == null ? void 0 : _input.focus();
    }
  };
  const scrollToOption = (option) => {
    var _a, _b, _c, _d, _e;
    const targetOption = Array.isArray(option) ? option[0] : option;
    let target = null;
    if (targetOption == null ? void 0 : targetOption.value) {
      const options = optionsArray.value.filter((item) => item.value === targetOption.value);
      if (options.length > 0) {
        target = options[0].$el;
      }
    }
    if (tooltipRef.value && target) {
      const menu = (_d = (_c = (_b = (_a = tooltipRef.value) == null ? void 0 : _a.popperRef) == null ? void 0 : _b.contentRef) == null ? void 0 : _c.querySelector) == null ? void 0 : _d.call(_c, `.${ns.be("dropdown", "wrap")}`);
      if (menu) {
        scrollIntoView(menu, target);
      }
    }
    (_e = scrollbar.value) == null ? void 0 : _e.handleScroll();
  };
  const onOptionCreate = (vm) => {
    states.optionsCount++;
    states.filteredOptionsCount++;
    states.options.set(vm.value, vm);
    states.cachedOptions.set(vm.value, vm);
  };
  const onOptionDestroy = (key, vm) => {
    if (states.options.get(key) === vm) {
      states.optionsCount--;
      states.filteredOptionsCount--;
      states.options.delete(key);
    }
  };
  const resetInputState = (e) => {
    if (e.code !== EVENT_CODE.backspace)
      toggleLastOptionHitState(false);
    states.inputLength = input.value.value.length * 15 + 20;
    resetInputHeight();
  };
  const toggleLastOptionHitState = (hit) => {
    if (!Array.isArray(states.selected))
      return;
    const option = states.selected[states.selected.length - 1];
    if (!option)
      return;
    if (hit === true || hit === false) {
      option.hitState = hit;
      return hit;
    }
    option.hitState = !option.hitState;
    return option.hitState;
  };
  const handleComposition = (event) => {
    const text = event.target.value;
    if (event.type === "compositionend") {
      states.isOnComposition = false;
      nextTick(() => handleQueryChange(text));
    } else {
      const lastCharacter = text[text.length - 1] || "";
      states.isOnComposition = !isKorean(lastCharacter);
    }
  };
  const handleMenuEnter = () => {
    nextTick(() => scrollToOption(states.selected));
  };
  const handleFocus = (event) => {
    if (!ignoreFocusEvent) {
      if (props.automaticDropdown || props.filterable) {
        if (props.filterable && !states.visible) {
          states.menuVisibleOnFocus = true;
        }
        states.visible = true;
      }
      ctx.emit("focus", event);
    } else {
      ignoreFocusEvent = false;
    }
  };
  const blur = () => {
    var _a, _b, _c;
    states.visible = false;
    (_a = reference.value) == null ? void 0 : _a.blur();
    (_c = (_b = iOSInput.value) == null ? void 0 : _b.blur) == null ? void 0 : _c.call(_b);
  };
  const handleBlur = (event) => {
    setTimeout(() => {
      var _a;
      if ((_a = tooltipRef.value) == null ? void 0 : _a.isFocusInsideContent()) {
        ignoreFocusEvent = true;
        return;
      }
      states.visible && handleClose();
      ctx.emit("blur", event);
    });
  };
  const handleClearClick = (event) => {
    deleteSelected(event);
  };
  const handleClose = () => {
    states.visible = false;
  };
  const handleKeydownEscape = (event) => {
    if (states.visible) {
      event.preventDefault();
      event.stopPropagation();
      states.visible = false;
    }
  };
  const toggleMenu = (e) => {
    var _a;
    if (e && !states.mouseEnter) {
      return;
    }
    if (!selectDisabled.value) {
      if (states.menuVisibleOnFocus) {
        states.menuVisibleOnFocus = false;
      } else {
        if (!tooltipRef.value || !tooltipRef.value.isFocusInsideContent()) {
          states.visible = !states.visible;
        }
      }
      if (states.visible) {
        (_a = input.value || reference.value) == null ? void 0 : _a.focus();
      }
    }
  };
  const selectOption = () => {
    if (!states.visible) {
      toggleMenu();
    } else {
      if (optionsArray.value[states.hoverIndex]) {
        handleOptionSelect(optionsArray.value[states.hoverIndex]);
      }
    }
  };
  const getValueKey = (item) => {
    return isObject(item.value) ? get(item.value, props.valueKey) : item.value;
  };
  const optionsAllDisabled = computed(() => optionsArray.value.filter((option) => option.visible).every((option) => option.disabled));
  const showTagList = computed(() => states.selected.slice(0, props.maxCollapseTags));
  const collapseTagList = computed(() => states.selected.slice(props.maxCollapseTags));
  const navigateOptions = (direction) => {
    if (!states.visible) {
      states.visible = true;
      return;
    }
    if (states.options.size === 0 || states.filteredOptionsCount === 0)
      return;
    if (states.isOnComposition)
      return;
    if (!optionsAllDisabled.value) {
      if (direction === "next") {
        states.hoverIndex++;
        if (states.hoverIndex === states.options.size) {
          states.hoverIndex = 0;
        }
      } else if (direction === "prev") {
        states.hoverIndex--;
        if (states.hoverIndex < 0) {
          states.hoverIndex = states.options.size - 1;
        }
      }
      const option = optionsArray.value[states.hoverIndex];
      if (option.disabled === true || option.states.groupDisabled === true || !option.visible) {
        navigateOptions(direction);
      }
      nextTick(() => scrollToOption(hoverOption.value));
    }
  };
  const handleMouseEnter = () => {
    states.mouseEnter = true;
  };
  const handleMouseLeave = () => {
    states.mouseEnter = false;
  };
  return {
    optionList,
    optionsArray,
    selectSize,
    handleResize,
    debouncedOnInputChange,
    debouncedQueryChange,
    deletePrevTag,
    deleteTag,
    deleteSelected,
    handleOptionSelect,
    scrollToOption,
    readonly,
    resetInputHeight,
    showClose,
    iconComponent,
    iconReverse,
    showNewOption,
    collapseTagSize,
    setSelected,
    managePlaceholder,
    selectDisabled,
    emptyText,
    toggleLastOptionHitState,
    resetInputState,
    handleComposition,
    onOptionCreate,
    onOptionDestroy,
    handleMenuEnter,
    handleFocus,
    blur,
    handleBlur,
    handleClearClick,
    handleClose,
    handleKeydownEscape,
    toggleMenu,
    selectOption,
    getValueKey,
    navigateOptions,
    dropMenuVisible,
    queryChange,
    groupQueryChange,
    showTagList,
    collapseTagList,
    reference,
    input,
    iOSInput,
    tooltipRef,
    tags,
    selectWrapper,
    scrollbar,
    handleMouseEnter,
    handleMouseLeave
  };
};
var ElOptions = defineComponent({
  name: "ElOptions",
  emits: ["update-options"],
  setup(_, { slots, emit }) {
    let cachedOptions = [];
    function isSameOptions(a, b) {
      if (a.length !== b.length)
        return false;
      for (const [index] of a.entries()) {
        if (a[index] != b[index]) {
          return false;
        }
      }
      return true;
    }
    return () => {
      var _a, _b;
      const children = (_a = slots.default) == null ? void 0 : _a.call(slots);
      const filteredOptions = [];
      function filterOptions(children2) {
        if (!Array.isArray(children2))
          return;
        children2.forEach((item) => {
          var _a2, _b2, _c, _d;
          const name = (_a2 = (item == null ? void 0 : item.type) || {}) == null ? void 0 : _a2.name;
          if (name === "ElOptionGroup") {
            filterOptions(!isString(item.children) && !Array.isArray(item.children) && isFunction((_b2 = item.children) == null ? void 0 : _b2.default) ? (_c = item.children) == null ? void 0 : _c.default() : item.children);
          } else if (name === "ElOption") {
            filteredOptions.push((_d = item.props) == null ? void 0 : _d.label);
          } else if (Array.isArray(item.children)) {
            filterOptions(item.children);
          }
        });
      }
      if (children.length) {
        filterOptions((_b = children[0]) == null ? void 0 : _b.children);
      }
      if (!isSameOptions(filteredOptions, cachedOptions)) {
        cachedOptions = filteredOptions;
        emit("update-options", filteredOptions);
      }
      return children;
    };
  }
});
const COMPONENT_NAME = "ElSelect";
const _sfc_main$2 = defineComponent({
  name: COMPONENT_NAME,
  componentName: COMPONENT_NAME,
  components: {
    ElInput,
    ElSelectMenu,
    ElOption: Option,
    ElOptions,
    ElTag,
    ElScrollbar,
    ElTooltip,
    ElIcon
  },
  directives: { ClickOutside },
  props: {
    name: String,
    id: String,
    modelValue: {
      type: [Array, String, Number, Boolean, Object],
      default: void 0
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    automaticDropdown: Boolean,
    size: {
      type: String,
      validator: isValidComponentSize
    },
    effect: {
      type: String,
      default: "light"
    },
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    allowCreate: Boolean,
    loading: Boolean,
    popperClass: {
      type: String,
      default: ""
    },
    popperOptions: {
      type: Object,
      default: () => ({})
    },
    remote: Boolean,
    loadingText: String,
    noMatchText: String,
    noDataText: String,
    remoteMethod: Function,
    filterMethod: Function,
    multiple: Boolean,
    multipleLimit: {
      type: Number,
      default: 0
    },
    placeholder: {
      type: String
    },
    defaultFirstOption: Boolean,
    reserveKeyword: {
      type: Boolean,
      default: true
    },
    valueKey: {
      type: String,
      default: "value"
    },
    collapseTags: Boolean,
    collapseTagsTooltip: {
      type: Boolean,
      default: false
    },
    maxCollapseTags: {
      type: Number,
      default: 1
    },
    teleported: useTooltipContentProps.teleported,
    persistent: {
      type: Boolean,
      default: true
    },
    clearIcon: {
      type: iconPropType,
      default: CircleClose
    },
    fitInputWidth: {
      type: Boolean,
      default: false
    },
    suffixIcon: {
      type: iconPropType,
      default: ArrowDown
    },
    tagType: { ...tagProps.type, default: "info" },
    validateEvent: {
      type: Boolean,
      default: true
    },
    remoteShowSuffix: {
      type: Boolean,
      default: false
    },
    suffixTransition: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      values: placements,
      default: "bottom-start"
    }
  },
  emits: [
    UPDATE_MODEL_EVENT,
    CHANGE_EVENT,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur"
  ],
  setup(props, ctx) {
    const nsSelect = useNamespace("select");
    const nsInput = useNamespace("input");
    const { t } = useLocale();
    const states = useSelectStates(props);
    const {
      optionList,
      optionsArray,
      selectSize,
      readonly,
      handleResize,
      collapseTagSize,
      debouncedOnInputChange,
      debouncedQueryChange,
      deletePrevTag,
      deleteTag,
      deleteSelected,
      handleOptionSelect,
      scrollToOption,
      setSelected,
      resetInputHeight,
      managePlaceholder,
      showClose,
      selectDisabled,
      iconComponent,
      iconReverse,
      showNewOption,
      emptyText,
      toggleLastOptionHitState,
      resetInputState,
      handleComposition,
      onOptionCreate,
      onOptionDestroy,
      handleMenuEnter,
      handleFocus,
      blur,
      handleBlur,
      handleClearClick,
      handleClose,
      handleKeydownEscape,
      toggleMenu,
      selectOption,
      getValueKey,
      navigateOptions,
      dropMenuVisible,
      reference,
      input,
      iOSInput,
      tooltipRef,
      tags,
      selectWrapper,
      scrollbar,
      queryChange,
      groupQueryChange,
      handleMouseEnter,
      handleMouseLeave,
      showTagList,
      collapseTagList
    } = useSelect(props, states, ctx);
    const { focus } = useFocus(reference);
    const {
      inputWidth,
      selected,
      inputLength,
      filteredOptionsCount,
      visible,
      selectedLabel,
      hoverIndex,
      query,
      inputHovering,
      currentPlaceholder,
      menuVisibleOnFocus,
      isOnComposition,
      options,
      cachedOptions,
      optionsCount,
      prefixWidth
    } = toRefs(states);
    const wrapperKls = computed(() => {
      const classList = [nsSelect.b()];
      const _selectSize = unref(selectSize);
      if (_selectSize) {
        classList.push(nsSelect.m(_selectSize));
      }
      if (props.disabled) {
        classList.push(nsSelect.m("disabled"));
      }
      return classList;
    });
    const selectTagsStyle = computed(() => ({
      maxWidth: `${unref(inputWidth) - 32}px`,
      width: "100%"
    }));
    const tagTextStyle = computed(() => {
      const maxWidth = unref(inputWidth) > 123 ? unref(inputWidth) - 123 : unref(inputWidth) - 75;
      return { maxWidth: `${maxWidth}px` };
    });
    provide(selectKey, reactive({
      props,
      options,
      optionsArray,
      cachedOptions,
      optionsCount,
      filteredOptionsCount,
      hoverIndex,
      handleOptionSelect,
      onOptionCreate,
      onOptionDestroy,
      selectWrapper,
      selected,
      setSelected,
      queryChange,
      groupQueryChange
    }));
    onMounted(() => {
      states.cachedPlaceHolder = currentPlaceholder.value = props.placeholder || (() => t("el.select.placeholder"));
      if (props.multiple && Array.isArray(props.modelValue) && props.modelValue.length > 0) {
        currentPlaceholder.value = "";
      }
      useResizeObserver(selectWrapper, handleResize);
      if (props.remote && props.multiple) {
        resetInputHeight();
      }
      nextTick(() => {
        const refEl = reference.value && reference.value.$el;
        if (!refEl)
          return;
        inputWidth.value = refEl.getBoundingClientRect().width;
        if (ctx.slots.prefix) {
          const prefix = refEl.querySelector(`.${nsInput.e("prefix")}`);
          prefixWidth.value = Math.max(prefix.getBoundingClientRect().width + 11, 30);
        }
      });
      setSelected();
    });
    if (props.multiple && !Array.isArray(props.modelValue)) {
      ctx.emit(UPDATE_MODEL_EVENT, []);
    }
    if (!props.multiple && Array.isArray(props.modelValue)) {
      ctx.emit(UPDATE_MODEL_EVENT, "");
    }
    const popperPaneRef = computed(() => {
      var _a, _b;
      return (_b = (_a = tooltipRef.value) == null ? void 0 : _a.popperRef) == null ? void 0 : _b.contentRef;
    });
    const onOptionsRendered = (v) => {
      optionList.value = v;
    };
    return {
      isIOS,
      onOptionsRendered,
      prefixWidth,
      selectSize,
      readonly,
      handleResize,
      collapseTagSize,
      debouncedOnInputChange,
      debouncedQueryChange,
      deletePrevTag,
      deleteTag,
      deleteSelected,
      handleOptionSelect,
      scrollToOption,
      inputWidth,
      selected,
      inputLength,
      filteredOptionsCount,
      visible,
      selectedLabel,
      hoverIndex,
      query,
      inputHovering,
      currentPlaceholder,
      menuVisibleOnFocus,
      isOnComposition,
      options,
      resetInputHeight,
      managePlaceholder,
      showClose,
      selectDisabled,
      iconComponent,
      iconReverse,
      showNewOption,
      emptyText,
      toggleLastOptionHitState,
      resetInputState,
      handleComposition,
      handleMenuEnter,
      handleFocus,
      blur,
      handleBlur,
      handleClearClick,
      handleClose,
      handleKeydownEscape,
      toggleMenu,
      selectOption,
      getValueKey,
      navigateOptions,
      dropMenuVisible,
      focus,
      reference,
      input,
      iOSInput,
      tooltipRef,
      popperPaneRef,
      tags,
      selectWrapper,
      scrollbar,
      wrapperKls,
      selectTagsStyle,
      nsSelect,
      tagTextStyle,
      handleMouseEnter,
      handleMouseLeave,
      showTagList,
      collapseTagList
    };
  }
});
const _hoisted_1 = ["disabled", "autocomplete"];
const _hoisted_2 = ["disabled"];
const _hoisted_3 = { style: { "height": "100%", "display": "flex", "justify-content": "center", "align-items": "center" } };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tag = resolveComponent("el-tag");
  const _component_el_tooltip = resolveComponent("el-tooltip");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_input = resolveComponent("el-input");
  const _component_el_option = resolveComponent("el-option");
  const _component_el_options = resolveComponent("el-options");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _component_el_select_menu = resolveComponent("el-select-menu");
  const _directive_click_outside = resolveDirective("click-outside");
  return withDirectives((openBlock(), createElementBlock("div", {
    ref: "selectWrapper",
    class: normalizeClass(_ctx.wrapperKls),
    onMouseenter: _cache[21] || (_cache[21] = (...args) => _ctx.handleMouseEnter && _ctx.handleMouseEnter(...args)),
    onMouseleave: _cache[22] || (_cache[22] = (...args) => _ctx.handleMouseLeave && _ctx.handleMouseLeave(...args)),
    onClick: _cache[23] || (_cache[23] = withModifiers((...args) => _ctx.toggleMenu && _ctx.toggleMenu(...args), ["stop"]))
  }, [
    createVNode(_component_el_tooltip, {
      ref: "tooltipRef",
      visible: _ctx.dropMenuVisible,
      placement: _ctx.placement,
      teleported: _ctx.teleported,
      "popper-class": [_ctx.nsSelect.e("popper"), _ctx.popperClass],
      "popper-options": _ctx.popperOptions,
      "fallback-placements": ["bottom-start", "top-start", "right", "left"],
      effect: _ctx.effect,
      pure: "",
      trigger: "click",
      transition: `${_ctx.nsSelect.namespace.value}-zoom-in-top`,
      "stop-popper-mouse-event": false,
      "gpu-acceleration": false,
      persistent: _ctx.persistent,
      onShow: _ctx.handleMenuEnter
    }, {
      default: withCtx(() => [
        createElementVNode("div", {
          class: "select-trigger",
          onMouseenter: _cache[19] || (_cache[19] = ($event) => _ctx.inputHovering = true),
          onMouseleave: _cache[20] || (_cache[20] = ($event) => _ctx.inputHovering = false)
        }, [
          _ctx.multiple ? (openBlock(), createElementBlock("div", {
            key: 0,
            ref: "tags",
            class: normalizeClass([
              _ctx.nsSelect.e("tags"),
              _ctx.nsSelect.is("disabled", _ctx.selectDisabled)
            ]),
            style: normalizeStyle(_ctx.selectTagsStyle)
          }, [
            _ctx.collapseTags && _ctx.selected.length ? (openBlock(), createBlock(Transition, {
              key: 0,
              onAfterLeave: _ctx.resetInputHeight
            }, {
              default: withCtx(() => [
                createElementVNode("span", {
                  class: normalizeClass([
                    _ctx.nsSelect.b("tags-wrapper"),
                    { "has-prefix": _ctx.prefixWidth && _ctx.selected.length }
                  ])
                }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.showTagList, (item) => {
                    return openBlock(), createBlock(_component_el_tag, {
                      key: _ctx.getValueKey(item),
                      closable: !_ctx.selectDisabled && !item.isDisabled,
                      size: _ctx.collapseTagSize,
                      hit: item.hitState,
                      type: _ctx.tagType,
                      "disable-transitions": "",
                      onClose: ($event) => _ctx.deleteTag($event, item)
                    }, {
                      default: withCtx(() => [
                        createElementVNode("span", {
                          class: normalizeClass(_ctx.nsSelect.e("tags-text")),
                          style: normalizeStyle(_ctx.tagTextStyle)
                        }, toDisplayString(item.currentLabel), 7)
                      ]),
                      _: 2
                    }, 1032, ["closable", "size", "hit", "type", "onClose"]);
                  }), 128)),
                  _ctx.selected.length > _ctx.maxCollapseTags ? (openBlock(), createBlock(_component_el_tag, {
                    key: 0,
                    closable: false,
                    size: _ctx.collapseTagSize,
                    type: _ctx.tagType,
                    "disable-transitions": ""
                  }, {
                    default: withCtx(() => [
                      _ctx.collapseTagsTooltip ? (openBlock(), createBlock(_component_el_tooltip, {
                        key: 0,
                        disabled: _ctx.dropMenuVisible,
                        "fallback-placements": ["bottom", "top", "right", "left"],
                        effect: _ctx.effect,
                        placement: "bottom",
                        teleported: _ctx.teleported
                      }, {
                        default: withCtx(() => [
                          createElementVNode("span", {
                            class: normalizeClass(_ctx.nsSelect.e("tags-text"))
                          }, "+ " + toDisplayString(_ctx.selected.length - _ctx.maxCollapseTags), 3)
                        ]),
                        content: withCtx(() => [
                          createElementVNode("div", {
                            class: normalizeClass(_ctx.nsSelect.e("collapse-tags"))
                          }, [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.collapseTagList, (item) => {
                              return openBlock(), createElementBlock("div", {
                                key: _ctx.getValueKey(item),
                                class: normalizeClass(_ctx.nsSelect.e("collapse-tag"))
                              }, [
                                createVNode(_component_el_tag, {
                                  class: "in-tooltip",
                                  closable: !_ctx.selectDisabled && !item.isDisabled,
                                  size: _ctx.collapseTagSize,
                                  hit: item.hitState,
                                  type: _ctx.tagType,
                                  "disable-transitions": "",
                                  style: { margin: "2px" },
                                  onClose: ($event) => _ctx.deleteTag($event, item)
                                }, {
                                  default: withCtx(() => [
                                    createElementVNode("span", {
                                      class: normalizeClass(_ctx.nsSelect.e("tags-text")),
                                      style: normalizeStyle({
                                        maxWidth: _ctx.inputWidth - 75 + "px"
                                      })
                                    }, toDisplayString(item.currentLabel), 7)
                                  ]),
                                  _: 2
                                }, 1032, ["closable", "size", "hit", "type", "onClose"])
                              ], 2);
                            }), 128))
                          ], 2)
                        ]),
                        _: 1
                      }, 8, ["disabled", "effect", "teleported"])) : (openBlock(), createElementBlock("span", {
                        key: 1,
                        class: normalizeClass(_ctx.nsSelect.e("tags-text"))
                      }, "+ " + toDisplayString(_ctx.selected.length - _ctx.maxCollapseTags), 3))
                    ]),
                    _: 1
                  }, 8, ["size", "type"])) : createCommentVNode("v-if", true)
                ], 2)
              ]),
              _: 1
            }, 8, ["onAfterLeave"])) : createCommentVNode("v-if", true),
            !_ctx.collapseTags ? (openBlock(), createBlock(Transition, {
              key: 1,
              onAfterLeave: _ctx.resetInputHeight
            }, {
              default: withCtx(() => [
                createElementVNode("span", {
                  class: normalizeClass([
                    _ctx.nsSelect.b("tags-wrapper"),
                    { "has-prefix": _ctx.prefixWidth && _ctx.selected.length }
                  ]),
                  style: normalizeStyle(_ctx.prefixWidth && _ctx.selected.length ? { marginLeft: `${_ctx.prefixWidth}px` } : "")
                }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.selected, (item) => {
                    return openBlock(), createBlock(_component_el_tag, {
                      key: _ctx.getValueKey(item),
                      closable: !_ctx.selectDisabled && !item.isDisabled,
                      size: _ctx.collapseTagSize,
                      hit: item.hitState,
                      type: _ctx.tagType,
                      "disable-transitions": "",
                      onClose: ($event) => _ctx.deleteTag($event, item)
                    }, {
                      default: withCtx(() => [
                        createElementVNode("span", {
                          class: normalizeClass(_ctx.nsSelect.e("tags-text")),
                          style: normalizeStyle({ maxWidth: _ctx.inputWidth - 75 + "px" })
                        }, toDisplayString(item.currentLabel), 7)
                      ]),
                      _: 2
                    }, 1032, ["closable", "size", "hit", "type", "onClose"]);
                  }), 128))
                ], 6)
              ]),
              _: 1
            }, 8, ["onAfterLeave"])) : createCommentVNode("v-if", true),
            _ctx.filterable && !_ctx.selectDisabled ? withDirectives((openBlock(), createElementBlock("input", {
              key: 2,
              ref: "input",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.query = $event),
              type: "text",
              class: normalizeClass([
                _ctx.nsSelect.e("input"),
                _ctx.nsSelect.is(_ctx.selectSize),
                _ctx.nsSelect.is("disabled", _ctx.selectDisabled)
              ]),
              disabled: _ctx.selectDisabled,
              autocomplete: _ctx.autocomplete,
              style: normalizeStyle({
                marginLeft: `${_ctx.prefixWidth}px`,
                flexGrow: 1,
                width: `${_ctx.inputLength / (_ctx.inputWidth - 32)}%`,
                maxWidth: `${_ctx.inputWidth - 42}px`
              }),
              onFocus: _cache[1] || (_cache[1] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
              onBlur: _cache[2] || (_cache[2] = (...args) => _ctx.handleBlur && _ctx.handleBlur(...args)),
              onKeyup: _cache[3] || (_cache[3] = (...args) => _ctx.managePlaceholder && _ctx.managePlaceholder(...args)),
              onKeydown: [
                _cache[4] || (_cache[4] = (...args) => _ctx.resetInputState && _ctx.resetInputState(...args)),
                _cache[5] || (_cache[5] = withKeys(withModifiers(($event) => _ctx.navigateOptions("next"), ["prevent"]), ["down"])),
                _cache[6] || (_cache[6] = withKeys(withModifiers(($event) => _ctx.navigateOptions("prev"), ["prevent"]), ["up"])),
                _cache[7] || (_cache[7] = withKeys((...args) => _ctx.handleKeydownEscape && _ctx.handleKeydownEscape(...args), ["esc"])),
                _cache[8] || (_cache[8] = withKeys(withModifiers((...args) => _ctx.selectOption && _ctx.selectOption(...args), ["stop", "prevent"]), ["enter"])),
                _cache[9] || (_cache[9] = withKeys((...args) => _ctx.deletePrevTag && _ctx.deletePrevTag(...args), ["delete"])),
                _cache[10] || (_cache[10] = withKeys(($event) => _ctx.visible = false, ["tab"]))
              ],
              onCompositionstart: _cache[11] || (_cache[11] = (...args) => _ctx.handleComposition && _ctx.handleComposition(...args)),
              onCompositionupdate: _cache[12] || (_cache[12] = (...args) => _ctx.handleComposition && _ctx.handleComposition(...args)),
              onCompositionend: _cache[13] || (_cache[13] = (...args) => _ctx.handleComposition && _ctx.handleComposition(...args)),
              onInput: _cache[14] || (_cache[14] = (...args) => _ctx.debouncedQueryChange && _ctx.debouncedQueryChange(...args))
            }, null, 46, _hoisted_1)), [
              [vModelText, _ctx.query]
            ]) : createCommentVNode("v-if", true)
          ], 6)) : createCommentVNode("v-if", true),
          createCommentVNode(" fix: https://github.com/element-plus/element-plus/issues/11415 "),
          _ctx.isIOS && !_ctx.multiple && _ctx.filterable && _ctx.readonly ? (openBlock(), createElementBlock("input", {
            key: 1,
            ref: "iOSInput",
            class: normalizeClass([
              _ctx.nsSelect.e("input"),
              _ctx.nsSelect.is(_ctx.selectSize),
              _ctx.nsSelect.em("input", "iOS")
            ]),
            disabled: _ctx.selectDisabled,
            type: "text"
          }, null, 10, _hoisted_2)) : createCommentVNode("v-if", true),
          createVNode(_component_el_input, {
            id: _ctx.id,
            ref: "reference",
            modelValue: _ctx.selectedLabel,
            "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => _ctx.selectedLabel = $event),
            type: "text",
            placeholder: typeof _ctx.currentPlaceholder === "function" ? _ctx.currentPlaceholder() : _ctx.currentPlaceholder,
            name: _ctx.name,
            autocomplete: _ctx.autocomplete,
            size: _ctx.selectSize,
            disabled: _ctx.selectDisabled,
            readonly: _ctx.readonly,
            "validate-event": false,
            class: normalizeClass([_ctx.nsSelect.is("focus", _ctx.visible)]),
            tabindex: _ctx.multiple && _ctx.filterable ? -1 : void 0,
            onFocus: _ctx.handleFocus,
            onBlur: _ctx.handleBlur,
            onInput: _ctx.debouncedOnInputChange,
            onPaste: _ctx.debouncedOnInputChange,
            onCompositionstart: _ctx.handleComposition,
            onCompositionupdate: _ctx.handleComposition,
            onCompositionend: _ctx.handleComposition,
            onKeydown: [
              _cache[16] || (_cache[16] = withKeys(withModifiers(($event) => _ctx.navigateOptions("next"), ["stop", "prevent"]), ["down"])),
              _cache[17] || (_cache[17] = withKeys(withModifiers(($event) => _ctx.navigateOptions("prev"), ["stop", "prevent"]), ["up"])),
              withKeys(withModifiers(_ctx.selectOption, ["stop", "prevent"]), ["enter"]),
              withKeys(_ctx.handleKeydownEscape, ["esc"]),
              _cache[18] || (_cache[18] = withKeys(($event) => _ctx.visible = false, ["tab"]))
            ]
          }, createSlots({
            suffix: withCtx(() => [
              _ctx.iconComponent && !_ctx.showClose ? (openBlock(), createBlock(_component_el_icon, {
                key: 0,
                class: normalizeClass([_ctx.nsSelect.e("caret"), _ctx.nsSelect.e("icon"), _ctx.iconReverse])
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : createCommentVNode("v-if", true),
              _ctx.showClose && _ctx.clearIcon ? (openBlock(), createBlock(_component_el_icon, {
                key: 1,
                class: normalizeClass([_ctx.nsSelect.e("caret"), _ctx.nsSelect.e("icon")]),
                onClick: _ctx.handleClearClick
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
            ]),
            _: 2
          }, [
            _ctx.$slots.prefix ? {
              name: "prefix",
              fn: withCtx(() => [
                createElementVNode("div", _hoisted_3, [
                  renderSlot(_ctx.$slots, "prefix")
                ])
              ])
            } : void 0
          ]), 1032, ["id", "modelValue", "placeholder", "name", "autocomplete", "size", "disabled", "readonly", "class", "tabindex", "onFocus", "onBlur", "onInput", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onKeydown"])
        ], 32)
      ]),
      content: withCtx(() => [
        createVNode(_component_el_select_menu, null, {
          default: withCtx(() => [
            withDirectives(createVNode(_component_el_scrollbar, {
              ref: "scrollbar",
              tag: "ul",
              "wrap-class": _ctx.nsSelect.be("dropdown", "wrap"),
              "view-class": _ctx.nsSelect.be("dropdown", "list"),
              class: normalizeClass([
                _ctx.nsSelect.is("empty", !_ctx.allowCreate && Boolean(_ctx.query) && _ctx.filteredOptionsCount === 0)
              ])
            }, {
              default: withCtx(() => [
                _ctx.showNewOption ? (openBlock(), createBlock(_component_el_option, {
                  key: 0,
                  value: _ctx.query,
                  created: true
                }, null, 8, ["value"])) : createCommentVNode("v-if", true),
                createVNode(_component_el_options, { onUpdateOptions: _ctx.onOptionsRendered }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "default")
                  ]),
                  _: 3
                }, 8, ["onUpdateOptions"])
              ]),
              _: 3
            }, 8, ["wrap-class", "view-class", "class"]), [
              [vShow, _ctx.options.size > 0 && !_ctx.loading]
            ]),
            _ctx.emptyText && (!_ctx.allowCreate || _ctx.loading || _ctx.allowCreate && _ctx.options.size === 0) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              _ctx.$slots.empty ? renderSlot(_ctx.$slots, "empty", { key: 0 }) : (openBlock(), createElementBlock("p", {
                key: 1,
                class: normalizeClass(_ctx.nsSelect.be("dropdown", "empty"))
              }, toDisplayString(_ctx.emptyText), 3))
            ], 64)) : createCommentVNode("v-if", true)
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["visible", "placement", "teleported", "popper-class", "popper-options", "effect", "transition", "persistent", "onShow"])
  ], 34)), [
    [_directive_click_outside, _ctx.handleClose, _ctx.popperPaneRef]
  ]);
}
var Select = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);
const _sfc_main$1 = defineComponent({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const ns = useNamespace("select");
    const visible = ref(true);
    const instance = getCurrentInstance();
    const children = ref([]);
    provide(selectGroupKey, reactive({
      ...toRefs(props)
    }));
    const select = inject(selectKey);
    onMounted(() => {
      children.value = flattedChildren(instance.subTree);
    });
    const flattedChildren = (node) => {
      const children2 = [];
      if (Array.isArray(node.children)) {
        node.children.forEach((child) => {
          var _a;
          if (child.type && child.type.name === "ElOption" && child.component && child.component.proxy) {
            children2.push(child.component.proxy);
          } else if ((_a = child.children) == null ? void 0 : _a.length) {
            children2.push(...flattedChildren(child));
          }
        });
      }
      return children2;
    };
    const { groupQueryChange } = toRaw(select);
    watch(groupQueryChange, () => {
      visible.value = children.value.some((option) => option.visible === true);
    }, { flush: "post" });
    return {
      visible,
      ns
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("ul", {
    class: normalizeClass(_ctx.ns.be("group", "wrap"))
  }, [
    createElementVNode("li", {
      class: normalizeClass(_ctx.ns.be("group", "title"))
    }, toDisplayString(_ctx.label), 3),
    createElementVNode("li", null, [
      createElementVNode("ul", {
        class: normalizeClass(_ctx.ns.b("group"))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [vShow, _ctx.visible]
  ]);
}
var OptionGroup = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);
const ElSelect = withInstall(Select, {
  Option,
  OptionGroup
});
const ElOption = withNoopInstall(Option);
withNoopInstall(OptionGroup);
const _sfc_main = {
  name: "SelectOrder",
  data() {
    return {
      dataList: [],
      value: this.modelValue,
      isLoading: false
    };
  },
  watch: {
    modelValue(v) {
      this.value = v;
    }
  },
  props: {
    modelValue: {
      type: [String, Number]
    }
  },
  computed: {},
  async mounted() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        this.isLoading = true;
        const response = await axios.get(this.route("user.order.data"), {
          params: {
            status: "done"
          }
        });
        if (response.status == 200) {
          this.dataList = [];
          this.dataList = response.data;
        }
        this.isLoading = false;
      } catch (error) {
        console.error(error);
      }
    },
    selectChange(v) {
      this.$emit("update:modelValue", v);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_select = ElSelect;
  const _component_el_option = ElOption;
  _push(ssrRenderComponent(_component_el_select, mergeProps({
    modelValue: $data.value,
    "onUpdate:modelValue": ($event) => $data.value = $event,
    "value-key": "id",
    class: "w-100",
    filterable: "",
    clearable: "",
    remote: "",
    onChange: $options.selectChange,
    autocomplete: "off",
    loading: $data.isLoading,
    placeholder: "Pilih Pesanan"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.dataList, (item) => {
          _push2(ssrRenderComponent(_component_el_option, {
            key: item.id,
            label: item.nomor,
            value: item.id
          }, null, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($data.dataList, (item) => {
            return openBlock(), createBlock(_component_el_option, {
              key: item.id,
              label: item.nomor,
              value: item.id
            }, null, 8, ["label", "value"]);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Frontend/UserOrder/SelectOrder.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SelectOrder = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const SelectOrder$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: SelectOrder
}, Symbol.toStringTag, { value: "Module" }));
export {
  ClickOutside as C,
  SelectOrder as S,
  SelectOrder$1 as a
};
