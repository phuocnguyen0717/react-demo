import React from 'react'

export default function Buttons() {
  return (
    <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
  <div className="app-header header-shadow">
    <div className="app-header__logo">
      <div className="logo-src" />
      <div className="header__pane ml-auto">
        <div>
          <button type="button" className="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
        </div>
      </div>
    </div>
    <div className="app-header__mobile-menu">
      <div>
        <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
      </div>
    </div>
    <div className="app-header__menu">
      <span>
        <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
          <span className="btn-icon-wrapper">
            <i className="fa fa-ellipsis-v fa-w-6" />
          </span>
        </button>
      </span>
    </div>    <div className="app-header__content">
      <div className="app-header-left">
        <div className="search-wrapper">
          <div className="input-holder">
            <input type="text" className="search-input" placeholder="Type to search" />
            <button className="search-icon"><span /></button>
          </div>
          <button className="close" />
        </div>
        <ul className="header-menu nav">
          <li className="nav-item">
            <a href="javascript:void(0);" className="nav-link">
              <i className="nav-link-icon fa fa-database"> </i>
              Statistics
            </a>
          </li>
          <li className="btn-group nav-item">
            <a href="javascript:void(0);" className="nav-link">
              <i className="nav-link-icon fa fa-edit" />
              Projects
            </a>
          </li>
          <li className="dropdown nav-item">
            <a href="javascript:void(0);" className="nav-link">
              <i className="nav-link-icon fa fa-cog" />
              Settings
            </a>
          </li>
        </ul>      </div>
      <div className="app-header-right">
        <div className="header-btn-lg pr-0">
          <div className="widget-content p-0">
            <div className="widget-content-wrapper">
              <div className="widget-content-left">
                <div className="btn-group">
                  <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="p-0 btn">
                    <img width={42} className="rounded-circle" src="assets/images/avatars/1.jpg" alt />
                    <i className="fa fa-angle-down ml-2 opacity-8" />
                  </a>
                  <div tabIndex={-1} role="menu" aria-hidden="true" className="dropdown-menu dropdown-menu-right">
                    <button type="button" tabIndex={0} className="dropdown-item">User Account</button>
                    <button type="button" tabIndex={0} className="dropdown-item">Settings</button>
                    <h6 tabIndex={-1} className="dropdown-header">Header</h6>
                    <button type="button" tabIndex={0} className="dropdown-item">Actions</button>
                    <div tabIndex={-1} className="dropdown-divider" />
                    <button type="button" tabIndex={0} className="dropdown-item">Dividers</button>
                  </div>
                </div>
              </div>
              <div className="widget-content-left  ml-3 header-user-info">
                <div className="widget-heading">
                  Alina Mclourd
                </div>
                <div className="widget-subheading">
                  VP People Manager
                </div>
              </div>
              <div className="widget-content-right header-user-info ml-3">
                <button type="button" className="btn-shadow p-1 btn btn-primary btn-sm show-toastr-example">
                  <i className="fa text-white fa-calendar pr-1 pl-1" />
                </button>
              </div>
            </div>
          </div>
        </div>      </div>
    </div>
  </div>        <div className="ui-theme-settings">
    <button type="button" id="TooltipDemo" className="btn-open-options btn btn-warning">
      <i className="fa fa-cog fa-w-16 fa-spin fa-2x" />
    </button>
    <div className="theme-settings__inner">
      <div className="scrollbar-container">
        <div className="theme-settings__options-wrapper">
          <h3 className="themeoptions-heading">Layout Options
          </h3>
          <div className="p-3">
            <ul className="list-group">
              <li className="list-group-item">
                <div className="widget-content p-0">
                  <div className="widget-content-wrapper">
                    <div className="widget-content-left mr-3">
                      <div className="switch has-switch switch-container-class" data-class="fixed-header">
                        <div className="switch-animate switch-on">
                          <input type="checkbox" defaultChecked data-toggle="toggle" data-onstyle="success" />
                        </div>
                      </div>
                    </div>
                    <div className="widget-content-left">
                      <div className="widget-heading">Fixed Header
                      </div>
                      <div className="widget-subheading">Makes the header top fixed, always visible!
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="widget-content p-0">
                  <div className="widget-content-wrapper">
                    <div className="widget-content-left mr-3">
                      <div className="switch has-switch switch-container-class" data-class="fixed-sidebar">
                        <div className="switch-animate switch-on">
                          <input type="checkbox" defaultChecked data-toggle="toggle" data-onstyle="success" />
                        </div>
                      </div>
                    </div>
                    <div className="widget-content-left">
                      <div className="widget-heading">Fixed Sidebar
                      </div>
                      <div className="widget-subheading">Makes the sidebar left fixed, always visible!
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="widget-content p-0">
                  <div className="widget-content-wrapper">
                    <div className="widget-content-left mr-3">
                      <div className="switch has-switch switch-container-class" data-class="fixed-footer">
                        <div className="switch-animate switch-off">
                          <input type="checkbox" data-toggle="toggle" data-onstyle="success" />
                        </div>
                      </div>
                    </div>
                    <div className="widget-content-left">
                      <div className="widget-heading">Fixed Footer
                      </div>
                      <div className="widget-subheading">Makes the app footer bottom fixed, always visible!
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <h3 className="themeoptions-heading">
            <div>
              Header Options
            </div>
            <button type="button" className="btn-pill btn-shadow btn-wide ml-auto btn btn-focus btn-sm switch-header-cs-class" data-class>
              Restore Default
            </button>
          </h3>
          <div className="p-3">
            <ul className="list-group">
              <li className="list-group-item">
                <h5 className="pb-2">Choose Color Scheme
                </h5>
                <div className="theme-settings-swatches">
                  <div className="swatch-holder bg-primary switch-header-cs-class" data-class="bg-primary header-text-light">
                  </div>
                  <div className="swatch-holder bg-secondary switch-header-cs-class" data-class="bg-secondary header-text-light">
                  </div>
                  <div className="swatch-holder bg-success switch-header-cs-class" data-class="bg-success header-text-dark">
                  </div>
                  <div className="swatch-holder bg-info switch-header-cs-class" data-class="bg-info header-text-dark">
                  </div>
                  <div className="swatch-holder bg-warning switch-header-cs-class" data-class="bg-warning header-text-dark">
                  </div>
                  <div className="swatch-holder bg-danger switch-header-cs-class" data-class="bg-danger header-text-light">
                  </div>
                  <div className="swatch-holder bg-light switch-header-cs-class" data-class="bg-light header-text-dark">
                  </div>
                  <div className="swatch-holder bg-dark switch-header-cs-class" data-class="bg-dark header-text-light">
                  </div>
                  <div className="swatch-holder bg-focus switch-header-cs-class" data-class="bg-focus header-text-light">
                  </div>
                  <div className="swatch-holder bg-alternate switch-header-cs-class" data-class="bg-alternate header-text-light">
                  </div>
                  <div className="divider">
                  </div>
                  <div className="swatch-holder bg-vicious-stance switch-header-cs-class" data-class="bg-vicious-stance header-text-light">
                  </div>
                  <div className="swatch-holder bg-midnight-bloom switch-header-cs-class" data-class="bg-midnight-bloom header-text-light">
                  </div>
                  <div className="swatch-holder bg-night-sky switch-header-cs-class" data-class="bg-night-sky header-text-light">
                  </div>
                  <div className="swatch-holder bg-slick-carbon switch-header-cs-class" data-class="bg-slick-carbon header-text-light">
                  </div>
                  <div className="swatch-holder bg-asteroid switch-header-cs-class" data-class="bg-asteroid header-text-light">
                  </div>
                  <div className="swatch-holder bg-royal switch-header-cs-class" data-class="bg-royal header-text-light">
                  </div>
                  <div className="swatch-holder bg-warm-flame switch-header-cs-class" data-class="bg-warm-flame header-text-dark">
                  </div>
                  <div className="swatch-holder bg-night-fade switch-header-cs-class" data-class="bg-night-fade header-text-dark">
                  </div>
                  <div className="swatch-holder bg-sunny-morning switch-header-cs-class" data-class="bg-sunny-morning header-text-dark">
                  </div>
                  <div className="swatch-holder bg-tempting-azure switch-header-cs-class" data-class="bg-tempting-azure header-text-dark">
                  </div>
                  <div className="swatch-holder bg-amy-crisp switch-header-cs-class" data-class="bg-amy-crisp header-text-dark">
                  </div>
                  <div className="swatch-holder bg-heavy-rain switch-header-cs-class" data-class="bg-heavy-rain header-text-dark">
                  </div>
                  <div className="swatch-holder bg-mean-fruit switch-header-cs-class" data-class="bg-mean-fruit header-text-dark">
                  </div>
                  <div className="swatch-holder bg-malibu-beach switch-header-cs-class" data-class="bg-malibu-beach header-text-light">
                  </div>
                  <div className="swatch-holder bg-deep-blue switch-header-cs-class" data-class="bg-deep-blue header-text-dark">
                  </div>
                  <div className="swatch-holder bg-ripe-malin switch-header-cs-class" data-class="bg-ripe-malin header-text-light">
                  </div>
                  <div className="swatch-holder bg-arielle-smile switch-header-cs-class" data-class="bg-arielle-smile header-text-light">
                  </div>
                  <div className="swatch-holder bg-plum-plate switch-header-cs-class" data-class="bg-plum-plate header-text-light">
                  </div>
                  <div className="swatch-holder bg-happy-fisher switch-header-cs-class" data-class="bg-happy-fisher header-text-dark">
                  </div>
                  <div className="swatch-holder bg-happy-itmeo switch-header-cs-class" data-class="bg-happy-itmeo header-text-light">
                  </div>
                  <div className="swatch-holder bg-mixed-hopes switch-header-cs-class" data-class="bg-mixed-hopes header-text-light">
                  </div>
                  <div className="swatch-holder bg-strong-bliss switch-header-cs-class" data-class="bg-strong-bliss header-text-light">
                  </div>
                  <div className="swatch-holder bg-grow-early switch-header-cs-class" data-class="bg-grow-early header-text-light">
                  </div>
                  <div className="swatch-holder bg-love-kiss switch-header-cs-class" data-class="bg-love-kiss header-text-light">
                  </div>
                  <div className="swatch-holder bg-premium-dark switch-header-cs-class" data-class="bg-premium-dark header-text-light">
                  </div>
                  <div className="swatch-holder bg-happy-green switch-header-cs-class" data-class="bg-happy-green header-text-light">
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <h3 className="themeoptions-heading">
            <div>Sidebar Options</div>
            <button type="button" className="btn-pill btn-shadow btn-wide ml-auto btn btn-focus btn-sm switch-sidebar-cs-class" data-class>
              Restore Default
            </button>
          </h3>
          <div className="p-3">
            <ul className="list-group">
              <li className="list-group-item">
                <h5 className="pb-2">Choose Color Scheme
                </h5>
                <div className="theme-settings-swatches">
                  <div className="swatch-holder bg-primary switch-sidebar-cs-class" data-class="bg-primary sidebar-text-light">
                  </div>
                  <div className="swatch-holder bg-secondary switch-sidebar-cs-class" data-class="bg-secondary sidebar-text-light">
                  </div>
                  <div className="swatch-holder bg-success switch-sidebar-cs-class" data-class="bg-success sidebar-text-dark">
                  </div>
                  <div className="swatch-holder bg-info switch-sidebar-cs-class" data-class="bg-info sidebar-text-dark">
                  </div>
                  <div className="swatch-holder bg-warning switch-sidebar-cs-class" data-class="bg-warning sidebar-text-dark">
                  </div>
                  <div className="swatch-holder bg-danger switch-sidebar-cs-class" data-class="bg-danger sidebar-text-light">
                  </div>
                  <div className="swatch-holder bg-light switch-sidebar-cs-class" data-class="bg-light sidebar-text-dark">
                  </div>
                  <div className="swatch-holder bg-dark switch-sidebar-cs-class" data-class="bg-dark sidebar-text-light">
                  </div>
                  <div className="swatch-holder bg-focus switch-sidebar-cs-class" data-class="bg-focus sidebar-text-light">
                  </div>
                  <div className="swatch-holder bg-alternate switch-sidebar-cs-class" data-class="bg-alternate sidebar-text-light">
                  </div>
                  <div className="divider">
                  </div>
                  <div className="swatch-holder bg-vicious-stance switch-sidebar-cs-class" data-class="bg-vicious-stance sidebar-text-light">
                  </div>
                  <div className="swatch-holder bg-midnight-bloom switch-sidebar-cs-class" data-class="bg-midnight-bloom sidebar-text-light">
                  </div>
                  <div className="swatch-holder bg-night-sky switch-sidebar-cs-class" data-class="bg-night-sky sidebar-text-light">
                  </div>
                  <div className="swatch-holder bg-slick-carbon switch-sidebar-cs-class" data-class="bg-slick-carbon sidebar-text-light">
                  </div>
                  <div className="swatch-holder bg-asteroid switch-sidebar-cs-class" data-class="bg-asteroid sidebar-text-light">
                  </div>
                  <div className="swatch-holder bg-royal switch-sidebar-cs-class" data-class="bg-royal sidebar-text-light">
                  </div>
                  <div className="swatch-holder bg-warm-flame switch-sidebar-cs-class" data-class="bg-warm-flame sidebar-text-dark">
                  </div>
                  <div className="swatch-holder bg-night-fade switch-sidebar-cs-class" data-class="bg-night-fade sidebar-text-dark">
                  </div>
                  <div className="swatch-holder bg-sunny-morning switch-sidebar-cs-class" data-class="bg-sunny-morning sidebar-text-dark">
                  </div>
                  <div className="swatch-holder bg-tempting-azure switch-sidebar-cs-class" data-class="bg-tempting-azure sidebar-text-dark">
                  </div>
                  <div className="swatch-holder bg-amy-crisp switch-sidebar-cs-class" data-class="bg-amy-crisp sidebar-text-dark">
                  </div>
                  <div className="swatch-holder bg-heavy-rain switch-sidebar-cs-class" data-class="bg-heavy-rain sidebar-text-dark">
                  </div>
                  <div className="swatch-holder bg-mean-fruit switch-sidebar-cs-class" data-class="bg-mean-fruit sidebar-text-dark">
                  </div>
                  <div className="swatch-holder bg-malibu-beach switch-sidebar-cs-class" data-class="bg-malibu-beach sidebar-text-light">
                  </div>
                  <div className="swatch-holder bg-deep-blue switch-sidebar-cs-class" data-class="bg-deep-blue sidebar-text-dark">
                  </div>
                  <div className="swatch-holder bg-ripe-malin switch-sidebar-cs-class" data-class="bg-ripe-malin sidebar-text-light">
                  </div>
                  <div className="swatch-holder bg-arielle-smile switch-sidebar-cs-class" data-class="bg-arielle-smile sidebar-text-light">
                  </div>
                  <div className="swatch-holder bg-plum-plate switch-sidebar-cs-class" data-class="bg-plum-plate sidebar-text-light">
                  </div>
                  <div className="swatch-holder bg-happy-fisher switch-sidebar-cs-class" data-class="bg-happy-fisher sidebar-text-dark">
                  </div>
                  <div className="swatch-holder bg-happy-itmeo switch-sidebar-cs-class" data-class="bg-happy-itmeo sidebar-text-light">
                  </div>
                  <div className="swatch-holder bg-mixed-hopes switch-sidebar-cs-class" data-class="bg-mixed-hopes sidebar-text-light">
                  </div>
                  <div className="swatch-holder bg-strong-bliss switch-sidebar-cs-class" data-class="bg-strong-bliss sidebar-text-light">
                  </div>
                  <div className="swatch-holder bg-grow-early switch-sidebar-cs-class" data-class="bg-grow-early sidebar-text-light">
                  </div>
                  <div className="swatch-holder bg-love-kiss switch-sidebar-cs-class" data-class="bg-love-kiss sidebar-text-light">
                  </div>
                  <div className="swatch-holder bg-premium-dark switch-sidebar-cs-class" data-class="bg-premium-dark sidebar-text-light">
                  </div>
                  <div className="swatch-holder bg-happy-green switch-sidebar-cs-class" data-class="bg-happy-green sidebar-text-light">
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <h3 className="themeoptions-heading">
            <div>Main Content Options</div>
            <button type="button" className="btn-pill btn-shadow btn-wide ml-auto active btn btn-focus btn-sm">Restore Default
            </button>
          </h3>
          <div className="p-3">
            <ul className="list-group">
              <li className="list-group-item">
                <h5 className="pb-2">Page Section Tabs
                </h5>
                <div className="theme-settings-swatches">
                  <div role="group" className="mt-2 btn-group">
                    <button type="button" className="btn-wide btn-shadow btn-primary btn btn-secondary switch-theme-class" data-class="body-tabs-line">
                      Line
                    </button>
                    <button type="button" className="btn-wide btn-shadow btn-primary active btn btn-secondary switch-theme-class" data-class="body-tabs-shadow">
                      Shadow
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>        <div className="app-main">
    <div className="app-sidebar sidebar-shadow">
      <div className="app-header__logo">
        <div className="logo-src" />
        <div className="header__pane ml-auto">
          <div>
            <button type="button" className="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="app-header__mobile-menu">
        <div>
          <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
        </div>
      </div>
      <div className="app-header__menu">
        <span>
          <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
            <span className="btn-icon-wrapper">
              <i className="fa fa-ellipsis-v fa-w-6" />
            </span>
          </button>
        </span>
      </div>    <div className="scrollbar-sidebar">
        <div className="app-sidebar__inner">
          <ul className="vertical-nav-menu">
            <li className="app-sidebar__heading">Dashboards</li>
            <li>
              <a href="index.html">
                <i className="metismenu-icon pe-7s-rocket" />
                Dashboard Example 1
              </a>
            </li>
            <li className="app-sidebar__heading">UI Components</li>
            <li className="mm-active">
              <a href="#">
                <i className="metismenu-icon pe-7s-diamond" />
                Elements
                <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
              </a>
              <ul className="mm-show">
                <li>
                  <a href="elements-buttons-standard.html" className="mm-active">
                    <i className="metismenu-icon" />
                    Buttons
                  </a>
                </li>
                <li>
                  <a href="elements-dropdowns.html">
                    <i className="metismenu-icon">
                    </i>Dropdowns
                  </a>
                </li>
                <li>
                  <a href="elements-icons.html">
                    <i className="metismenu-icon">
                    </i>Icons
                  </a>
                </li>
                <li>
                  <a href="elements-badges-labels.html">
                    <i className="metismenu-icon">
                    </i>Badges
                  </a>
                </li>
                <li>
                  <a href="elements-cards.html">
                    <i className="metismenu-icon">
                    </i>Cards
                  </a>
                </li>
                <li>
                  <a href="elements-list-group.html">
                    <i className="metismenu-icon">
                    </i>List Groups
                  </a>
                </li>
                <li>
                  <a href="elements-navigation.html">
                    <i className="metismenu-icon">
                    </i>Navigation Menus
                  </a>
                </li>
                <li>
                  <a href="elements-utilities.html">
                    <i className="metismenu-icon">
                    </i>Utilities
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <i className="metismenu-icon pe-7s-car" />
                Components
                <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
              </a>
              <ul>
                <li>
                  <a href="components-tabs.html">
                    <i className="metismenu-icon">
                    </i>Tabs
                  </a>
                </li>
                <li>
                  <a href="components-accordions.html">
                    <i className="metismenu-icon">
                    </i>Accordions
                  </a>
                </li>
                <li>
                  <a href="components-notifications.html">
                    <i className="metismenu-icon">
                    </i>Notifications
                  </a>
                </li>
                <li>
                  <a href="components-modals.html">
                    <i className="metismenu-icon">
                    </i>Modals
                  </a>
                </li>
                <li>
                  <a href="components-progress-bar.html">
                    <i className="metismenu-icon">
                    </i>Progress Bar
                  </a>
                </li>
                <li>
                  <a href="components-tooltips-popovers.html">
                    <i className="metismenu-icon">
                    </i>Tooltips &amp; Popovers
                  </a>
                </li>
                <li>
                  <a href="components-carousel.html">
                    <i className="metismenu-icon">
                    </i>Carousel
                  </a>
                </li>
                <li>
                  <a href="components-calendar.html">
                    <i className="metismenu-icon">
                    </i>Calendar
                  </a>
                </li>
                <li>
                  <a href="components-pagination.html">
                    <i className="metismenu-icon">
                    </i>Pagination
                  </a>
                </li>
                <li>
                  <a href="components-scrollable-elements.html">
                    <i className="metismenu-icon">
                    </i>Scrollable
                  </a>
                </li>
                <li>
                  <a href="components-maps.html">
                    <i className="metismenu-icon">
                    </i>Maps
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="tables-regular.html">
                <i className="metismenu-icon pe-7s-display2" />
                Tables
              </a>
            </li>
            <li className="app-sidebar__heading">Widgets</li>
            <li>
              <a href="dashboard-boxes.html">
                <i className="metismenu-icon pe-7s-display2" />
                Dashboard Boxes
              </a>
            </li>
            <li className="app-sidebar__heading">Forms</li>
            <li>
              <a href="forms-controls.html">
                <i className="metismenu-icon pe-7s-mouse">
                </i>Forms Controls
              </a>
            </li>
            <li>
              <a href="forms-layouts.html">
                <i className="metismenu-icon pe-7s-eyedropper">
                </i>Forms Layouts
              </a>
            </li>
            <li>
              <a href="forms-validation.html">
                <i className="metismenu-icon pe-7s-pendrive">
                </i>Forms Validation
              </a>
            </li>
            <li className="app-sidebar__heading">Charts</li>
            <li>
              <a href="charts-chartjs.html">
                <i className="metismenu-icon pe-7s-graph2">
                </i>ChartJS
              </a>
            </li>
            <li className="app-sidebar__heading">PRO Version</li>
            <li>
              <a href="https://dashboardpack.com/theme-details/architectui-dashboard-html-pro/" target="_blank">
                <i className="metismenu-icon pe-7s-graph2">
                </i>
                Upgrade to PRO
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>    <div className="app-main__outer">
      <div className="app-main__inner">
        <div className="app-page-title">
          <div className="page-title-wrapper">
            <div className="page-title-heading">
              <div className="page-title-icon">
                <i className="pe-7s-plane icon-gradient bg-tempting-azure">
                </i>
              </div>
              <div>Standard Buttons
                <div className="page-title-subheading">Wide selection of buttons that feature different styles for backgrounds, borders and hover options!
                </div>
              </div>
            </div>
            <div className="page-title-actions">
              <button type="button" data-toggle="tooltip" title="Example Tooltip" data-placement="bottom" className="btn-shadow mr-3 btn btn-dark">
                <i className="fa fa-star" />
              </button>
              <div className="d-inline-block dropdown">
                <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="btn-shadow dropdown-toggle btn btn-info">
                  <span className="btn-icon-wrapper pr-2 opacity-7">
                    <i className="fa fa-business-time fa-w-20" />
                  </span>
                  Buttons
                </button>
                <div tabIndex={-1} role="menu" aria-hidden="true" className="dropdown-menu dropdown-menu-right">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a href="javascript:void(0);" className="nav-link">
                        <i className="nav-link-icon lnr-inbox" />
                        <span>
                          Inbox
                        </span>
                        <div className="ml-auto badge badge-pill badge-secondary">86</div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="javascript:void(0);" className="nav-link">
                        <i className="nav-link-icon lnr-book" />
                        <span>
                          Book
                        </span>
                        <div className="ml-auto badge badge-pill badge-danger">5</div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="javascript:void(0);" className="nav-link">
                        <i className="nav-link-icon lnr-picture" />
                        <span>
                          Picture
                        </span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a disabled href="javascript:void(0);" className="nav-link disabled">
                        <i className="nav-link-icon lnr-file-empty" />
                        <span>
                          File Disabled
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>  </div>
        </div>            <div className="row">
          <div className="col-lg-6">
            <div className="main-card mb-3 card">
              <div className="card-body">
                <h5 className="card-title">Solid
                </h5>
                <button className="mb-2 mr-2 btn btn-primary">Primary
                </button>
                <button className="mb-2 mr-2 btn btn-secondary">Secondary
                </button>
                <button className="mb-2 mr-2 btn btn-success">Success
                </button>
                <button className="mb-2 mr-2 btn btn-info">Info
                </button>
                <button className="mb-2 mr-2 btn btn-warning">Warning
                </button>
                <button className="mb-2 mr-2 btn btn-danger">Danger
                </button>
                <button className="mb-2 mr-2 btn btn-focus">Focus
                </button>
                <button className="mb-2 mr-2 btn btn-alternate">Alt
                </button>
                <button className="mb-2 mr-2 btn btn-light">Light
                </button>
                <button className="mb-2 mr-2 btn btn-dark">Dark
                </button>
                <button className="mb-2 mr-2 btn btn-link">link
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="main-card mb-3 card">
              <div className="card-body">
                <h5 className="card-title">Color Transition
                </h5>
                <button className="mb-2 mr-2 btn-transition btn btn-outline-primary">Primary
                </button>
                <button className="mb-2 mr-2 btn-transition btn btn-outline-secondary">Secondary
                </button>
                <button className="mb-2 mr-2 btn-transition btn btn-outline-success">Success
                </button>
                <button className="mb-2 mr-2 btn-transition btn btn-outline-info">Info
                </button>
                <button className="mb-2 mr-2 btn-transition btn btn-outline-warning">Warning
                </button>
                <button className="mb-2 mr-2 btn-transition btn btn-outline-danger">Danger
                </button>
                <button className="mb-2 mr-2 btn-transition btn btn-outline-focus">Focus
                </button>
                <button className="mb-2 mr-2 btn-transition btn btn-outline-alternate">Alt
                </button>
                <button className="mb-2 mr-2 btn-transition btn btn-outline-light">Light
                </button>
                <button className="mb-2 mr-2 btn-transition btn btn-outline-dark">Dark
                </button>
                <button className="mb-2 mr-2 btn-transition btn btn-outline-link">link
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="main-card mb-3 card">
              <div className="card-body">
                <h5 className="card-title">Color Transition No Borders
                </h5>
                <button className="mb-2 mr-2 border-0 btn-transition btn btn-outline-primary">Primary
                </button>
                <button className="mb-2 mr-2 border-0 btn-transition btn btn-outline-secondary">Secondary
                </button>
                <button className="mb-2 mr-2 border-0 btn-transition btn btn-outline-success">Success
                </button>
                <button className="mb-2 mr-2 border-0 btn-transition btn btn-outline-info">Info
                </button>
                <button className="mb-2 mr-2 border-0 btn-transition btn btn-outline-warning">Warning
                </button>
                <button className="mb-2 mr-2 border-0 btn-transition btn btn-outline-danger">Danger
                </button>
                <button className="mb-2 mr-2 border-0 btn-transition btn btn-outline-focus">Focus
                </button>
                <button className="mb-2 mr-2 border-0 btn-transition btn btn-outline-alternate">Alt
                </button>
                <button className="mb-2 mr-2 border-0 btn-transition btn btn-outline-light">Light
                </button>
                <button className="mb-2 mr-2 border-0 btn-transition btn btn-outline-dark">Dark
                </button>
                <button className="mb-2 mr-2 border-0 btn-transition btn btn-outline-link">link
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="main-card mb-3 card">
              <div className="card-body">
                <h5 className="card-title">Active State
                </h5>
                <button className="mb-2 mr-2 btn btn-primary active">Primary
                </button>
                <button className="mb-2 mr-2 btn btn-secondary active">Secondary
                </button>
                <button className="mb-2 mr-2 btn btn-success active">Success
                </button>
                <button className="mb-2 mr-2 btn btn-info active">Info
                </button>
                <button className="mb-2 mr-2 btn btn-warning active">Warning
                </button>
                <button className="mb-2 mr-2 btn btn-danger active">Danger
                </button>
                <button className="mb-2 mr-2 btn btn-focus active">Focus
                </button>
                <button className="mb-2 mr-2 btn btn-alternate active">Alt
                </button>
                <button className="mb-2 mr-2 btn btn-light active">Light
                </button>
                <button className="mb-2 mr-2 btn btn-dark active">Dark
                </button>
                <button className="mb-2 mr-2 btn btn-link active">link
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="main-card mb-3 card">
              <div className="card-body">
                <h5 className="card-title">Disabled State
                </h5>
                <button disabled className="mb-2 mr-2 btn btn-primary disabled">Primary
                </button>
                <button disabled className="mb-2 mr-2 btn btn-secondary disabled">Secondary
                </button>
                <button disabled className="mb-2 mr-2 btn btn-success disabled">Success
                </button>
                <button disabled className="mb-2 mr-2 btn btn-info disabled">Info
                </button>
                <button disabled className="mb-2 mr-2 btn btn-warning disabled">Warning
                </button>
                <button disabled className="mb-2 mr-2 btn btn-danger disabled">Danger
                </button>
                <button disabled className="mb-2 mr-2 btn btn-focus disabled">Focus
                </button>
                <button disabled className="mb-2 mr-2 btn btn-alternate disabled">Alt
                </button>
                <button disabled className="mb-2 mr-2 btn btn-light disabled">Light
                </button>
                <button disabled className="mb-2 mr-2 btn btn-dark disabled">Dark
                </button>
                <button disabled className="mb-2 mr-2 btn btn-link disabled">link
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="main-card mb-3 card">
              <div className="card-body">
                <h5 className="card-title">Block Level
                </h5>
                <button className="mb-2 mr-2 btn btn-primary btn-lg btn-block">Block Large
                </button>
                <button className="mb-2 mr-2 btn btn-primary btn-block">Block Normal
                </button>
                <button className="mb-2 mr-2 btn btn-primary btn-sm btn-block">Block Small
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="main-card mb-3 card">
              <div className="card-body">
                <h5 className="card-title">Checkbox Buttons
                </h5>
                <div className="text-center">
                  <div role="group" className="btn-group-sm btn-group btn-group-toggle" data-toggle="buttons">
                    <button type="button" className="btn btn-primary">One
                    </button>
                    <button type="button" className="btn btn-primary">Two
                    </button>
                    <button type="button" className="btn btn-primary">Three
                    </button>
                  </div>
                  <div className="divider">
                  </div>
                  <div role="group" className="btn-group" data-toggle="buttons">
                    <button type="button" className="btn btn-danger">One
                    </button>
                    <button type="button" className="btn btn-danger">Two
                    </button>
                    <button type="button" className="btn btn-danger">Three
                    </button>
                  </div>
                  <div className="divider">
                  </div>
                  <div role="group" className="btn-group-lg btn-group btn-group-toggle" data-toggle="buttons">
                    <button type="button" className="btn btn-alternate">One
                    </button>
                    <button type="button" className="btn btn-alternate">Two
                    </button>
                    <button type="button" className="btn btn-alternate">Three
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="main-card mb-3 card">
              <div className="card-body">
                <h5 className="card-title">Radio Buttons
                </h5>
                <div className="text-center">
                  <div role="group" className="btn-group-sm btn-group btn-group-toggle" data-toggle="buttons">
                    <label className="btn btn-primary">
                      <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked />
                      One
                    </label>
                    <label className="btn btn-primary">
                      <input type="radio" name="options" id="option2" autoComplete="off" />
                      Two
                    </label>
                    <label className="btn btn-primary">
                      <input type="radio" name="options" id="option3" autoComplete="off" />
                      Three
                    </label>
                  </div>
                  <div className="divider">
                  </div>
                  <div role="group" className="btn-group btn-group-toggle" data-toggle="buttons">
                    <label className="btn btn-warning">
                      <input type="radio" name="options" id="option4" autoComplete="off" />
                      One
                    </label>
                    <label className="btn btn-warning">
                      <input type="radio" name="options" id="option5" autoComplete="off" />
                      Two
                    </label>
                    <label className="btn btn-warning">
                      <input type="radio" name="options" id="option6" autoComplete="off" />
                      Three
                    </label>
                  </div>
                  <div className="divider">
                  </div>
                  <div role="group" className="btn-group-lg btn-group btn-group-toggle" data-toggle="buttons">
                    <label className="btn btn-focus">
                      <input type="radio" name="options" id="option7" autoComplete="off" />
                      One
                    </label>
                    <label className="btn btn-focus">
                      <input type="radio" name="options" id="option8" autoComplete="off" />
                      Two
                    </label>
                    <label className="btn btn-focus">
                      <input type="radio" name="options" id="option9" autoComplete="off" />
                      Three
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="app-wrapper-footer">
        <div className="app-footer">
          <div className="app-footer__inner">
            <div className="app-footer-left">
              <ul className="nav">
                <li className="nav-item">
                  <a href="javascript:void(0);" className="nav-link">
                    Footer Link 1
                  </a>
                </li>
                <li className="nav-item">
                  <a href="javascript:void(0);" className="nav-link">
                    Footer Link 2
                  </a>
                </li>
              </ul>
            </div>
            <div className="app-footer-right">
              <ul className="nav">
                <li className="nav-item">
                  <a href="javascript:void(0);" className="nav-link">
                    Footer Link 3
                  </a>
                </li>
                <li className="nav-item">
                  <a href="javascript:void(0);" className="nav-link">
                    <div className="badge badge-success mr-1 ml-0">
                      <small>NEW</small>
                    </div>
                    Footer Link 4
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>  </div>
  </div>
</div>


  )
}
