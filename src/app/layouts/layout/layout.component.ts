import { Component, OnInit } from "@angular/core";


import { LAYOUT_VERTICAL, LAYOUT_HORIZONTAL } from "./layouts.model";
import { ActivatedRoute, Router } from "@angular/router";
import Swal from "sweetalert2";
import { EventService } from "src/app/core/services/event.service";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
})
export class LayoutComponent implements OnInit {
  // layout related config
  layoutType: string;

  constructor(
    private eventService: EventService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // default settings
    this.layoutType = LAYOUT_VERTICAL;
    // listen to event and change the layout, theme, etc
    this.eventService.subscribe("changeLayout", (layout) => {
      this.layoutType = layout;
    });
    // Handle route & redirect

    if (this.route.snapshot.queryParams.serialNumber) {
      localStorage.setItem(
        "sn",
        JSON.stringify(this.route.snapshot.queryParams)
      );
      Swal.fire({
        toast: true,
        timer: 3000,
        position: "top-end",
        background: "#C4860E",
        showConfirmButton: false,
        text: "Device successfully identified.",
      });
      this.router.navigate([""], {
        queryParams: {
          serialNumber: null,
        },
      });
    }
  }

  /**
   * Check if the vertical layout is requested
   */
  isVerticalLayoutRequested() {
    return this.layoutType === LAYOUT_VERTICAL;
  }

  /**
   * Check if the horizontal layout is requested
   */
  isHorizontalLayoutRequested() {
    return this.layoutType === LAYOUT_HORIZONTAL;
  }
}
