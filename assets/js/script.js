!(function (t) {
  t(window).on("load", function () {
    t("#preloader").fadeOut();
  }),
    t("img.lazy").lazy({ effect: "fadeIn" }),
    t("*")
      .contents()
      .each(function () {
        this.nodeType === Node.COMMENT_NODE && t(this).remove();
      }),
    t("#index-page #form-btn").on("click", function () {
      t("#index-page #form-container").toggleClass("open");
    }),
    t("#abuse-page .accordion .item-head").on("click", function () {
      t(this)
        .parent()
        .find(".item-body")
        .slideToggle()
        .parent()
        .siblings()
        .find(".item-body")
        .slideUp(),
        t(this).parent().toggleClass("open").siblings().removeClass("open");
    }),
    t("#terms-page .sidebar .item.has-menu > a").on("click", function () {
      t(this)
        .parent()
        .toggleClass("open-menu")
        .siblings()
        .removeClass("open-menu");
    }),
    t("#terms-page .sidebar .menu-item").on("click", function () {
      t(this).addClass("active").siblings().removeClass("active");
    }),
    t("#filter-nav-v .tab").on("click", function () {
      t(this)
        .addClass("active")
        .parent()
        .siblings()
        .find(".tab")
        .removeClass("active");
      const e = t(this).data("filter");
      t("#compare-table-v tbody tr:not(.hovered, .t-space)").addClass(
        "tr-hide"
      ),
        t('#compare-table-v tbody tr[data-filter="' + e + '"]').removeClass(
          "tr-hide"
        );
    }),
    t("#custom-thead-v .tab").on("click", function () {
      t(this).addClass("active").siblings().removeClass("active");
      const e = t(this).data("filter");
      t("#compare-table-v tbody tr td[data-for]").addClass("td-hide"),
        t('#compare-table-v tbody tr td[data-for="' + e + '"]').removeClass(
          "td-hide"
        ),
        t("#custom-thead-v .tab-content[data-for]").addClass("content-hide"),
        t('#custom-thead-v .tab-content[data-for="' + e + '"]').removeClass(
          "content-hide"
        );
    }),
    t("#vps-page .filter-bar .item").on("click", function () {
      const e = t(this).data("show");
      t(".filter-" + e)
        .addClass("show")
        .siblings()
        .removeClass("show"),
        t(this).parents(".filter-bar").find(".item").removeClass("active"),
        t(this).addClass("active");
    }),
    t("#dedi-page .filter-bar .item").on("click", function () {
      const e = t(this).data("show");
      t(".filter-" + e)
        .addClass("show")
        .siblings()
        .removeClass("show"),
        t(this).parents(".filter-bar").find(".item").removeClass("active"),
        t(this).addClass("active");
    }),
    t("#kb2-page #filter li").on("click", function () {
      const e = t(this).data("filter");
      t(this).addClass("active").siblings().removeClass("active"),
        "all" === e
          ? t("#kb2-page .box[data-filter]").parent().show()
          : (t("#kb2-page .box[data-filter]").parent().hide(),
            t("#kb2-page .box[data-filter=" + e + "]")
              .parent()
              .show());
    }),
    t('[data-click-type="scroll-to"]').on("click", function () {
      t("html, body").animate(
        { scrollTop: t(t.attr(this, "data-scroll")).offset().top },
        1e3
      );
    }),
    t(".close-modal").on("click", function () {
      t(this).parents('[data-type="modal"]').fadeOut();
    }),
    void 0 !== t.cookie("cookies") && t("#cookies-dialog").hide(),
    void 0 !== t.cookie("notices-bar") && t("#notices-bar").hide();
})(jQuery);
