!(function (n) {
  n("#close-notices-bar-btn").on("click", function () {
    n("#notices-bar").slideUp();
  }),
    n("#lang .current").on("click", function () {
      n(this).parent().toggleClass("open");
    }),
    n(document).mouseup(function (e) {
      const t = n("#lang");
      t.is(e.target) || 0 !== t.has(e.target).length || t.removeClass("open");
    }),
    n("#open-links-btn").on("click", function () {
      n("#theme-navbar-links").addClass("open-links");
    }),
    n("#close-links-btn").on("click", function () {
      n("#theme-navbar-links").removeClass("open-links");
    });
  const e = n("#theme-navbar .nav-bottom .links .link:not(.has-dropdown-menu)"),
    t = n("#theme-navbar .nav-bottom .links .indicator"),
    s = n("#theme-navbar .nav-bottom .links .link:nth-child(2)").width();
  function o(n) {
    t.css("width", n.offsetWidth + "px"), t.css("left", n.offsetLeft + "px");
  }
  t.css("width", s),
    e.each(function (e, t) {
      n(this).on("click", function (e) {
        o(e.target),
          n(this).addClass("active").siblings().removeClass("active");
      });
    }),
    n("#theme-navbar .f-nav .f-nav-tab").on("click", function (e) {
      const t = n(this).data("filter");
      n("#theme-navbar .mega-menu .f-area." + t)
        .siblings()
        .hide(),
        n("#theme-navbar .mega-menu .f-area." + t).show();
    }),
    n("#side-box-btn").on("click", function () {
      n("#side-box").addClass("open-side-box");
    }),
    n("#close-side-box-btn").on("click", function () {
      n("#side-box").removeClass("open-side-box");
    });
  const i = n("#theme-navbar .side-box .f-nav .f-nav-tab"),
    a = n("#theme-navbar .side-box .f-nav .indicator"),
    c = n("#theme-navbar .side-box .f-nav .f-nav-tab:nth-child(1)").width();
  function o(n) {
    a.css("width", n.offsetWidth + "px"), a.css("left", n.offsetLeft + "px");
  }
  a.css("width", c),
    i.each(function (e, t) {
      n(this).on("click", function (e) {
        o(e.target),
          n(this).addClass("active").siblings().removeClass("active");
      });
    }),
    n("#theme-navbar .nav-bottom .links .link:not(#side-box-btn)").on(
      "click",
      function () {
        n(".open-side-box")[0] && n("#side-box").removeClass("open-side-box");
      }
    ),
    n(document).mouseup(function (e) {
      const t = n("#side-box");
      t.is(e.target) ||
        0 !== t.has(e.target).length ||
        t.removeClass("open-side-box");
    }),
    n("#theme-navbar .link.has-dropdown-menu > a").on("click", function (n) {
      n.preventDefault();
    }),
    n("#theme-navbar .link.has-dropdown-menu > a").on("click", function () {
      n(this).parent().toggleClass("open-dropdown-menu");
    }),
    n(document).mouseup(function (e) {
      const t = n("#theme-navbar .link.has-dropdown-menu");
      t.is(e.target) ||
        0 !== t.has(e.target).length ||
        t.removeClass("open-dropdown-menu");
    }),
    n("#user-menu-btn > img").on("click", function () {
      n("#user-menu-btn").toggleClass("open");
    }),
    n(document).mouseup(function (e) {
      const t = n("#user-menu-btn");
      t.is(e.target) || 0 !== t.has(e.target).length || t.removeClass("open");
    }),
    n(".theme-footer .list-title").on("click", function () {
      n(this).parent().toggleClass("open-list");
    }),
    n("#cookies-dialog-btn").on("click", function () {
      n("#cookies-dialog").fadeOut();
    }),
    n("#theme-settings-btn").on("click", function () {
      n("#theme-settings").addClass("open");
    }),
    n("#theme-settings-close-btn").on("click", function () {
      n("#theme-settings").removeClass("open");
    }),
    n("#theme-settings .theme-btn").on("click", function () {
      n(this).addClass("active-theme").siblings().removeClass("active-theme"),
        "light-theme-btn" === n(this).attr("id")
          ? n("body").addClass("light-theme")
          : "dark-theme-btn" === n(this).attr("id") &&
            n("body").removeClass("light-theme");
    }),
    n("#theme-settings .feature-option .switch-btn").on("click", function () {
      n(this).parent().toggleClass("option-active");
    }),
    n("#faqs-category .item").on("click", function () {
      n(this).addClass("active").siblings().removeClass("active");
      const e = n(this).data("category");
      n("#faqs .box").hide(), n("#faqs .box.category-" + e).show();
    }),
    n("#faqs .q .q-h").on("click", function () {
      n(this).parent().toggleClass("open").siblings().removeClass("open"),
        n(this).parent().hasClass("open")
          ? (n(this).parent().find(".q-b").slideDown(),
            n(this).parent().siblings().find(".q-b").slideUp())
          : n(this).parent().find(".q-b").slideUp();
    });
})(jQuery);
