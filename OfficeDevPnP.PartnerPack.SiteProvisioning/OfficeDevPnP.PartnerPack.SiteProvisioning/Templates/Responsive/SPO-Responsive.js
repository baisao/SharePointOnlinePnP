﻿var SPOResponsiveApp = SPOResponsiveApp || {};

SPOResponsiveApp.setUpToggling = function () {
    if ($("#navbar-toggle").length)
        return;

    /* Set up sidenav toggling */
    var topNav = $('#DeltaTopNavigation');
    var topNavClone = topNav.clone()
    topNavClone.addClass('mobile-only');
    topNavClone.attr('id', topNavClone.attr('id') + "_mobileClone");
    topNav.addClass('no-mobile');
    $('#sideNavBox').append(topNavClone);

    var sideNavToggle = $('<button>');
    sideNavToggle.attr('id', 'navbar-toggle')
    sideNavToggle.html('<i class="ms-Icon ms-Icon--menu" aria-hidden="true"></i>');
    sideNavToggle.addClass('mobile-only');
    sideNavToggle.attr('type', 'button');
    sideNavToggle.click(function () {
        $("body").toggleClass('shownav');
    });
    $("#pageTitle").before(sideNavToggle);
}

SPOResponsiveApp.init = function () {
    if (!window.jQuery) {
        // jQuery is needed for Responsive to run
        setTimeout(SPOResponsiveApp.init, 50);
    } else {
        $(function () {
            SPOResponsiveApp.setUpToggling();
        });
    }
}

SPOResponsiveApp.init();
