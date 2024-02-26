import Flicking from "@egjs/vue3-flicking";
import { Arrow, Pagination } from "@egjs/flicking-plugins";
/* empty css            */import { resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./ssr.js";
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
  name: "VideoSlide",
  components: {
    Flicking,
    Arrow,
    Pagination
  },
  data() {
    return {
      data: [],
      isLoading: false,
      plugins: [],
      options: {
        align: "prev",
        defaultIndex: 1,
        circular: true
      }
    };
  },
  async mounted() {
    const isServer = typeof window === "undefined";
    if (!isServer) {
      this.plugins.push(new Pagination({
        type: "bullet"
        // parentEl : document.body,
        // selector : '.video-pagination',
      }));
      await this.fetchData();
    }
  },
  // async created() {
  //     await this.fetchData();
  // },
  methods: {
    async fetchData() {
      try {
        this.isLoading = true;
        const response = await axios.get(this.route("video.data"), {
          params: {}
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
  const _component_el_row = ElRow;
  const _component_Flicking = resolveComponent("Flicking");
  const _component_el_col = ElCol;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "position-relative bg-body-extra-light" }, _attrs))}><div class="content content-full"><div class="pt-5"><div class="position-relative"><span class="text-back">02</span><h2 class="fw-bold mb-2 text-center"> Galeri <span class="text-primary">Video</span></h2><h3 class="h4 fw-medium text-muted text-center mb-5"> Liputan Media &amp; Video Lebih Kenal Dengan Makhfudz Solaiman (Kang Ebod) </h3></div>`);
  _push(ssrRenderComponent(_component_el_row, {
    gutter: 32,
    class: "mb-lg-4"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Flicking, {
          options: $data.options,
          plugins: $data.plugins
        }, {
          viewport: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="flicking-pagination"${_scopeId2}></div>`);
            } else {
              return [
                createVNode("div", { class: "flicking-pagination" })
              ];
            }
          }),
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              ssrRenderList($data.data, (d, i) => {
                _push3(ssrRenderComponent(_component_el_col, {
                  lg: 8,
                  span: 24,
                  key: i,
                  class: "mb-lg-4"
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<div class="block block-rounded block-bordered d-flex flex-column h-100 mb-0"${_scopeId3}><div class="block-content p-3"${_scopeId3}><img${ssrRenderAttr("src", "uploads" + d.image)} class="img-fluid rounded-3"${_scopeId3}></div><div class="block-content p-3 pt-0"${_scopeId3}><h2 class="mb-1 fs-5"${_scopeId3}><a class="text-primary"${ssrRenderAttr("href", _ctx.route("video.show", { "slug": d.slug }))}${_scopeId3}>${ssrInterpolate(d.title)}</a></h2></div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "block block-rounded block-bordered d-flex flex-column h-100 mb-0" }, [
                          createVNode("div", { class: "block-content p-3" }, [
                            createVNode("img", {
                              src: "uploads" + d.image,
                              class: "img-fluid rounded-3"
                            }, null, 8, ["src"])
                          ]),
                          createVNode("div", { class: "block-content p-3 pt-0" }, [
                            createVNode("h2", { class: "mb-1 fs-5" }, [
                              createVNode("a", {
                                class: "text-primary",
                                href: _ctx.route("video.show", { "slug": d.slug })
                              }, toDisplayString(d.title), 9, ["href"])
                            ])
                          ])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList($data.data, (d, i) => {
                  return openBlock(), createBlock(_component_el_col, {
                    lg: 8,
                    span: 24,
                    key: i,
                    class: "mb-lg-4"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "block block-rounded block-bordered d-flex flex-column h-100 mb-0" }, [
                        createVNode("div", { class: "block-content p-3" }, [
                          createVNode("img", {
                            src: "uploads" + d.image,
                            class: "img-fluid rounded-3"
                          }, null, 8, ["src"])
                        ]),
                        createVNode("div", { class: "block-content p-3 pt-0" }, [
                          createVNode("h2", { class: "mb-1 fs-5" }, [
                            createVNode("a", {
                              class: "text-primary",
                              href: _ctx.route("video.show", { "slug": d.slug })
                            }, toDisplayString(d.title), 9, ["href"])
                          ])
                        ])
                      ])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Flicking, {
            options: $data.options,
            plugins: $data.plugins
          }, {
            viewport: withCtx(() => [
              createVNode("div", { class: "flicking-pagination" })
            ]),
            default: withCtx(() => [
              (openBlock(true), createBlock(Fragment, null, renderList($data.data, (d, i) => {
                return openBlock(), createBlock(_component_el_col, {
                  lg: 8,
                  span: 24,
                  key: i,
                  class: "mb-lg-4"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "block block-rounded block-bordered d-flex flex-column h-100 mb-0" }, [
                      createVNode("div", { class: "block-content p-3" }, [
                        createVNode("img", {
                          src: "uploads" + d.image,
                          class: "img-fluid rounded-3"
                        }, null, 8, ["src"])
                      ]),
                      createVNode("div", { class: "block-content p-3 pt-0" }, [
                        createVNode("h2", { class: "mb-1 fs-5" }, [
                          createVNode("a", {
                            class: "text-primary",
                            href: _ctx.route("video.show", { "slug": d.slug })
                          }, toDisplayString(d.title), 9, ["href"])
                        ])
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ]),
            _: 1
          }, 8, ["options", "plugins"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="position-relative text-center"><div class="flicking-pagination video-pagination"></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Frontend/Product/VideoSlide.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const VideoSlide = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  VideoSlide as default
};
