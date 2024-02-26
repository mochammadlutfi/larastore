import moment from "moment";
import { resolveComponent, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, Fragment, createCommentVNode, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc, E as ElButton } from "./ssr.js";
import { E as ElRow, a as ElCol } from "./index8.js";
import { E as ElInput } from "./index10.js";
import { E as ElTag } from "./index15.js";
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
  data() {
    return {
      status: this.route().params.status == void 0 ? "pending" : this.route().params.status,
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
        const response = await axios.get(this.route("user.return.data"), {
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
        _push2(`<div class="d-flex justify-content-between align-items-center mb-4"${_scopeId}><h3 class="fs-4 fw-bold mb-0"${_scopeId}>Retur Pesanan</h3><div class="space-x-1"${_scopeId}><a${ssrRenderAttr("href", _ctx.route("user.return.create"))} class="ep-button ep-button--primary"${_scopeId}><i class="fa fa-plus me-1"${_scopeId}></i> Ajukan Retur </a></div></div><div class="block block-bordered rounded mb-3"${_scopeId}><ul class="nav nav-tabs nav-tabs-alt nav-fill"${_scopeId}><li class="nav-item"${_scopeId}><a class="${ssrRenderClass([{ "active": $data.status == "pending" ? true : false }, "nav-link"])}"${ssrRenderAttr("href", _ctx.route("user.return.index", { status: "pending" }))}${_scopeId}>Pending </a></li><li class="nav-item"${_scopeId}><a class="${ssrRenderClass([{ "active": $data.status == "confirm" ? true : false }, "nav-link"])}"${ssrRenderAttr("href", _ctx.route("user.return.index", { status: "confirm" }))}${_scopeId}>Disetujui </a></li><li class="nav-item"${_scopeId}><a class="${ssrRenderClass([{ "active": $data.status == "reject" ? true : false }, "nav-link"])}"${ssrRenderAttr("href", _ctx.route("user.return.index", { status: "reject" }))}${_scopeId}>Ditolak </a></li></ul><div class="block-content p-2"${_scopeId}>`);
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
            if (d.status == "pending") {
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
            } else if (d.status == "confirm") {
              _push2(ssrRenderComponent(_component_el_tag, {
                class: "ml-2",
                type: "info"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Disetujui`);
                  } else {
                    return [
                      createTextVNode("Disetujui")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else if (d.status == "cancel") {
              _push2(ssrRenderComponent(_component_el_tag, {
                class: "ml-2",
                type: "danger"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Ditolak`);
                  } else {
                    return [
                      createTextVNode("Ditolak")
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
                                    _push6(`</div><div class="fs-sm fw-semibold"${_scopeId5}>${ssrInterpolate(d.lines[0].qty)}</div></div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "my-auto" }, [
                                        createVNode("div", { class: "fs-6 fw-bold" }, [
                                          createTextVNode(toDisplayString(d.lines[0].product.name) + " ", 1),
                                          d.lines[0].variant.name ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                            createTextVNode(" - " + toDisplayString(d.lines[0].variant.name), 1)
                                          ], 64)) : createCommentVNode("", true)
                                        ]),
                                        createVNode("div", { class: "fs-sm fw-semibold" }, toDisplayString(d.lines[0].qty), 1)
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
                                      createVNode("div", { class: "fs-sm fw-semibold" }, toDisplayString(d.lines[0].qty), 1)
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
                                    createVNode("div", { class: "fs-sm fw-semibold" }, toDisplayString(d.lines[0].qty), 1)
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
                                  createVNode("div", { class: "fs-sm fw-semibold" }, toDisplayString(d.lines[0].qty), 1)
                                ])
                              ]),
                              _: 2
                            }, 1024)
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
            }, _parent2, _scopeId));
            _push2(`</div><div class="block-content block-content-full block-content-sm text-right border-top"${_scopeId}><a${ssrRenderAttr("href", _ctx.route("user.return.show", { id: d.id }))} class="ep-button ep-button--primary is-plain"${_scopeId}> Detail Retur </a></div></div>`);
          });
          _push2(`<!--]-->`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          createVNode("div", { class: "d-flex justify-content-between align-items-center mb-4" }, [
            createVNode("h3", { class: "fs-4 fw-bold mb-0" }, "Retur Pesanan"),
            createVNode("div", { class: "space-x-1" }, [
              createVNode("a", {
                href: _ctx.route("user.return.create"),
                class: "ep-button ep-button--primary"
              }, [
                createVNode("i", { class: "fa fa-plus me-1" }),
                createTextVNode(" Ajukan Retur ")
              ], 8, ["href"])
            ])
          ]),
          createVNode("div", { class: "block block-bordered rounded mb-3" }, [
            createVNode("ul", { class: "nav nav-tabs nav-tabs-alt nav-fill" }, [
              createVNode("li", { class: "nav-item" }, [
                createVNode("a", {
                  class: ["nav-link", { "active": $data.status == "pending" ? true : false }],
                  href: _ctx.route("user.return.index", { status: "pending" })
                }, "Pending ", 10, ["href"])
              ]),
              createVNode("li", { class: "nav-item" }, [
                createVNode("a", {
                  class: ["nav-link", { "active": $data.status == "confirm" ? true : false }],
                  href: _ctx.route("user.return.index", { status: "confirm" })
                }, "Disetujui ", 10, ["href"])
              ]),
              createVNode("li", { class: "nav-item" }, [
                createVNode("a", {
                  class: ["nav-link", { "active": $data.status == "reject" ? true : false }],
                  href: _ctx.route("user.return.index", { status: "reject" })
                }, "Ditolak ", 10, ["href"])
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
                    d.status == "pending" ? (openBlock(), createBlock(_component_el_tag, {
                      key: 0,
                      class: "ml-2",
                      type: "warning"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Menunggu Konfirmasi")
                      ]),
                      _: 1
                    })) : d.status == "confirm" ? (openBlock(), createBlock(_component_el_tag, {
                      key: 1,
                      class: "ml-2",
                      type: "info"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Disetujui")
                      ]),
                      _: 1
                    })) : d.status == "cancel" ? (openBlock(), createBlock(_component_el_tag, {
                      key: 2,
                      class: "ml-2",
                      type: "danger"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Ditolak")
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
                                  createVNode("div", { class: "fs-sm fw-semibold" }, toDisplayString(d.lines[0].qty), 1)
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)
              ]),
              createVNode("div", { class: "block-content block-content-full block-content-sm text-right border-top" }, [
                createVNode("a", {
                  href: _ctx.route("user.return.show", { id: d.id }),
                  class: "ep-button ep-button--primary is-plain"
                }, " Detail Retur ", 8, ["href"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Frontend/UserReturn/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Index as default
};
