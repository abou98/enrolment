import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { EventService } from "../../../core/services/event.service";
import { MenuItem } from "./menu.model";
import { SecurelsService } from "src/app/core/services/securels.service";
import MetisMenu from "metismenujs";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit, AfterViewInit {
  menu: any;
  path: any;

  menuItems: MenuItem[] = [];

  @ViewChild("sideMenu") sideMenu: ElementRef;

  constructor(
    private eventService: EventService,
    private router: Router,
    private securels: SecurelsService
  ) {
    router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this._activateMenuDropdown();
      }
    });
  }

  onToggleMobileMenu() {
    if (document.body.classList.contains("sidebar-enable")) {
      document.body.classList.toggle("vertical-collpsed");
    }
  }

  ngOnInit(): void {
    this.menuItems = [];
    this.initialize();
  }

  /**
   * Initialize
   */
  initialize(): void {
    let currentUser = this.securels.getData("currentUser");
    let userRight = currentUser?.userRights;

    // Home
    const element = {
      id: 18,
      label: "SHARED.HOME",
      icon: "ri-home-2-line",
      link: "",
    };
    this.menuItems.push(element);

    // Menu
    const menu = {
      id: 2,
      label: "MENU.TITLE",
      icon: "ri-message-line",
      subItems: [],
    }
    menu.subItems.push({
      id: 3,
      label: "MENU.SUB_MENU.ELEMENT_1",
      link: "/enrolement/enrole",
      parentId: 2,
    });
   menu.subItems.push({
      id: 7,
      label: "MENU.SUB_MENU.ELEMENT_2",
      link: "/enrolement/list",
      parentId: 2,
    });

    this.menuItems.push(menu);
}

  ngAfterViewInit() {
    this.menu = new MetisMenu(this.sideMenu.nativeElement);

    this._activateMenuDropdown();
  }

  /**
   * remove active and mm-active class
   */
  _removeAllClass(className) {
    const els = document.getElementsByClassName(className);
    while (els[0]) {
      els[0].classList.remove(className);
    }
  }

  /**
   * Activate the parent dropdown
   */
  _activateMenuDropdown() {
    this._removeAllClass("mm-active");
    this._removeAllClass("mm-show");
    const links = document.getElementsByClassName("side-nav-link-ref");
    let menuItemEl = null;

    const paths = [];
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < links.length; i++) {
      // tslint:disable-next-line: no-string-literal
      paths.push(links[i]["pathname"]);
    }
    const itemIndex = paths.indexOf(window.location.pathname);
    if (itemIndex === -1) {
      const strIndex = window.location.pathname.lastIndexOf("/");
      const item = window.location.pathname.substr(0, strIndex).toString();
      menuItemEl = links[paths.indexOf(item)];
    } else {
      menuItemEl = links[itemIndex];
    }

    if (menuItemEl) {
      menuItemEl.classList.add("active");
      const parentEl = menuItemEl.parentElement;

      if (parentEl) {
        parentEl.classList.add("mm-active");

        const parent2El = parentEl.parentElement.closest("ul");
        if (parent2El && parent2El.id !== "side-menu") {
          parent2El.classList.add("mm-show"); // mm-show
          const parent3El = parent2El.parentElement; // parentEL

          if (parent3El && parent3El.id !== "side-menu") {
            // check if !side-menu
            parent3El.classList.add("mm-active"); // mm-active
            const childAnchor = parent3El.querySelector(".has-arrow");
            const childDropdown = parent3El.querySelector(".has-dropdown");

            if (childAnchor) {
              childAnchor.classList.add("mm-active");
            }
            if (childDropdown) {
              childDropdown.classList.add("mm-active");
            }

            const parent4El = parent3El.parentElement;
            if (parent4El && parent4El.id !== "side-menu") {
              parent4El.classList.add("mm-show"); // mm-show
              const parent5El = parent4El.parentElement; // parentEL

              if (parent5El && parent5El.id !== "side-menu") {
                // check if !side-menu
                parent5El.classList.add("mm-active"); // mm-active
                const childAnchor = parent5El.querySelector(".has-arrow");
                const childDropdown = parent5El.querySelector(".has-dropdown");

                if (childAnchor) {
                  childAnchor.classList.add("mm-active");
                }
                if (childDropdown) {
                  childDropdown.classList.add("mm-active");
                }

                const parent6El = parent5El.parentElement;
                if (parent6El && parent6El.id !== "side-menu") {
                  parent6El.classList.add("mm-show"); // mm-show
                  const parent7El = parent6El.parentElement; // parentEL

                  if (parent7El && parent7El.id !== "side-menu") {
                    parent7El.classList.add("mm-active"); // mm-active
                    const childAnchor = parent7El.querySelector(".has-arrow");
                    const childDropdown =
                      parent7El.querySelector(".has-dropdown");

                    if (childAnchor) {
                      childAnchor.classList.add("mm-active");
                    }
                    if (childDropdown) {
                      childDropdown.classList.add("mm-active");
                    }

                    const parent8El = parent7El.parentElement;
                    if (parent8El && parent8El.id !== "side-menu") {
                      parent8El.classList.add("mm-show"); // mm-show
                      const parent9El = parent8El.parentElement; // parentEL

                      if (parent9El && parent9El.id !== "side-menu") {
                        const childanchor =
                          parent9El.querySelector(".is-parent");
                        if (childanchor && parent9El.id !== "side-menu") {
                          childanchor.classList.add("mm-active");
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  /**
   * Returns true or false if given menu item has child or not
   * @param item menuItem
   */
  hasItems(item: MenuItem) {
    return item.subItems !== undefined ? item.subItems.length > 0 : false;
  }

  /**
   * Change the layout onclick
   * @param layout Change the layout
   */
  changeLayout(layout: string) {
    this.eventService.broadcast("changeLayout", layout);
  }

  /**
   * Light sidebar
   */
  lightSidebar() {
    document.body.setAttribute("data-sidebar", "light");
    document.body.setAttribute("data-topbar", "dark");
    document.body.removeAttribute("data-sidebar-size");
    document.body.removeAttribute("data-layout-size");
    document.body.removeAttribute("data-keep-enlarged");
    document.body.classList.remove("vertical-collpsed");
  }

  /**
   * Compact sidebar
   */
  compactSidebar() {
    document.body.setAttribute("data-sidebar-size", "small");
    document.body.setAttribute("data-sidebar", "dark");
    document.body.removeAttribute("data-topbar");
    document.body.removeAttribute("data-layout-size");
    document.body.removeAttribute("data-keep-enlarged");
    document.body.classList.remove("sidebar-enable");
    document.body.classList.remove("vertical-collpsed");
  }

  /**
   * Icon sidebar
   */
  iconSidebar() {
    document.body.classList.add("sidebar-enable");
    document.body.classList.add("vertical-collpsed");
    document.body.setAttribute("data-sidebar", "dark");
    document.body.removeAttribute("data-layout-size");
    document.body.removeAttribute("data-keep-enlarged");
    document.body.removeAttribute("data-topbar");
  }

  /**
   * Boxed layout
   */
  boxedLayout() {
    document.body.setAttribute("data-keep-enlarged", "true");
    document.body.setAttribute("data-layout-size", "boxed");
    document.body.setAttribute("data-sidebar", "dark");
    document.body.classList.add("vertical-collpsed");
    document.body.classList.remove("sidebar-enable");
    document.body.removeAttribute("data-topbar");
  }

  /**
   * Colored sidebar
   */
  coloredSidebar() {
    document.body.setAttribute("data-sidebar", "colored");
    document.body.removeAttribute("data-sidebar-size");
    document.body.removeAttribute("data-layout-size");
    document.body.classList.remove("vertical-collpsed");
    document.body.removeAttribute("data-topbar");
  }
}
