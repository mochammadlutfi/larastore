import { resolveComponent, withCtx, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc, E as ElButton } from "./ssr.js";
import "@vue/server-renderer";
import "@inertiajs/vue3";
import "@inertiajs/vue3/server";
import "pinia";
import "lodash-unified";
import "@vue/shared";
import "@vueuse/core";
import "@element-plus/icons-vue";
import "@ctrl/tinycolor";
const _sfc_main = {
  data() {
    return {
      data: [],
      isLoading: false,
      // page : 1,
      pageSize: 0,
      total: 0
    };
  },
  async mounted() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        this.isLoading = true;
        const response = await axios.get("/user/alamat/data", {
          params: {
            // page: page,
          }
        });
        if (response.status == 200) {
          this.data = response.data;
        }
        this.isLoading = false;
      } catch (error) {
        console.error(error);
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_user_layout = resolveComponent("user-layout");
  const _component_el_button = ElButton;
  _push(ssrRenderComponent(_component_user_layout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="d-flex justify-content-between align-items-center mb-4"${_scopeId}><h3 class="fs-4 fw-bold mb-0"${_scopeId}>Buku Alamat</h3><div class="space-x-1"${_scopeId}><a${ssrRenderAttr("href", _ctx.route("user.address.create"))} class="ep-button ep-button--primary"${_scopeId}><i class="fa fa-plus me-1"${_scopeId}></i> Tambah Alamat </a></div></div><!--[-->`);
        ssrRenderList($data.data, (d) => {
          _push2(`<div class="block rounded block-shadow block-bordered mb-2"${_scopeId}><div class="block-header border-3x border-bottom p-2"${_scopeId}><h3 class="block-title"${_scopeId}>${ssrInterpolate(d.name)}</h3>`);
          if (d.is_main == 1) {
            _push2(`<span class="badge badge-primary p-1"${_scopeId}>Alamat Utama</span>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div><div class="block-content p-4"${_scopeId}><div class="content__top-info"${_scopeId}><span class="top-info__name"${_scopeId}>${ssrInterpolate(d.reciever)}</span><span class="top-info__phone"${_scopeId}>${ssrInterpolate(d.phone)}</span></div><div class="content__complete-address"${_scopeId}>${ssrInterpolate(d.address)}</div></div><div class="block-content block-content-full block-content-sm bg-body-light font-size-sm"${_scopeId}><a${ssrRenderAttr("href", _ctx.route("user.address.edit", { id: d.id }))} class="ep-button ep-button--info"${_scopeId}><i class="si si-note me-1"${_scopeId}></i> Ubah </a>`);
          _push2(ssrRenderComponent(_component_el_button, {
            type: "danger",
            onClick: ($event) => _ctx.destroy(d.id),
            plain: ""
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<i class="si si-trash me-1"${_scopeId2}></i> Hapus `);
              } else {
                return [
                  createVNode("i", { class: "si si-trash me-1" }),
                  createTextVNode(" Hapus ")
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          if (d.is_primary == 0) {
            _push2(`<button type="button" class="btn btn-sm btn-primary"${_scopeId}> Jadikan Alamat Utama </button>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div></div>`);
        });
        _push2(`<!--]-->`);
      } else {
        return [
          createVNode("div", { class: "d-flex justify-content-between align-items-center mb-4" }, [
            createVNode("h3", { class: "fs-4 fw-bold mb-0" }, "Buku Alamat"),
            createVNode("div", { class: "space-x-1" }, [
              createVNode("a", {
                href: _ctx.route("user.address.create"),
                class: "ep-button ep-button--primary"
              }, [
                createVNode("i", { class: "fa fa-plus me-1" }),
                createTextVNode(" Tambah Alamat ")
              ], 8, ["href"])
            ])
          ]),
          (openBlock(true), createBlock(Fragment, null, renderList($data.data, (d) => {
            return openBlock(), createBlock("div", {
              class: "block rounded block-shadow block-bordered mb-2",
              key: d.id
            }, [
              createVNode("div", { class: "block-header border-3x border-bottom p-2" }, [
                createVNode("h3", { class: "block-title" }, toDisplayString(d.name), 1),
                d.is_main == 1 ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "badge badge-primary p-1"
                }, "Alamat Utama")) : createCommentVNode("", true)
              ]),
              createVNode("div", { class: "block-content p-4" }, [
                createVNode("div", { class: "content__top-info" }, [
                  createVNode("span", { class: "top-info__name" }, toDisplayString(d.reciever), 1),
                  createVNode("span", { class: "top-info__phone" }, toDisplayString(d.phone), 1)
                ]),
                createVNode("div", { class: "content__complete-address" }, toDisplayString(d.address), 1)
              ]),
              createVNode("div", { class: "block-content block-content-full block-content-sm bg-body-light font-size-sm" }, [
                createVNode("a", {
                  href: _ctx.route("user.address.edit", { id: d.id }),
                  class: "ep-button ep-button--info"
                }, [
                  createVNode("i", { class: "si si-note me-1" }),
                  createTextVNode(" Ubah ")
                ], 8, ["href"]),
                createVNode(_component_el_button, {
                  type: "danger",
                  onClick: withModifiers(($event) => _ctx.destroy(d.id), ["prevent"]),
                  plain: ""
                }, {
                  default: withCtx(() => [
                    createVNode("i", { class: "si si-trash me-1" }),
                    createTextVNode(" Hapus ")
                  ]),
                  _: 2
                }, 1032, ["onClick"]),
                d.is_primary == 0 ? (openBlock(), createBlock("button", {
                  key: 0,
                  type: "button",
                  onClick: withModifiers(($event) => _ctx.setMainAddress(d.id), ["prevent"]),
                  class: "btn btn-sm btn-primary"
                }, " Jadikan Alamat Utama ", 8, ["onClick"])) : createCommentVNode("", true)
              ])
            ]);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Frontend/UserAddress/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Index as default
};
