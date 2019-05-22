import { Component, OnInit, Input } from "@angular/core";
import { Config, Menu } from "./types";
import { Router } from "@angular/router";
@Component({
  selector: "accordion",
  templateUrl: "./accordion.component.html",
  styleUrls: ["./accordion.component.css"]
})
export class AccordionComponent implements OnInit {
  @Input() options;
  @Input() menus: Menu[];
  config: Config;

  constructor(private route: Router) {}

  ngOnInit() {
    this.config = this.mergeConfig(this.options);
  }

  mergeConfig(options: Config) {
    // 기본 옵션
    const config = {
      // selector: '#accordion',
      multi: true
    };

    return { ...config, ...options };
  }

  toggle(index: number) {
    // 멀티 오픈을 허용하지 않으면 타깃 이외의 모든 submenu를 클로즈한다.
    if (!this.config.multi) {
      this.menus
        .filter((menu, i) => i !== index && menu.active)
        .forEach(menu => (menu.active = !menu.active));
    }

    // Menu의 active를 반전
    this.menus[index].active = !this.menus[index].active;
  }

  subMenuClick(submenu) {
    if (submenu === "HTML") {
      this.route.navigate(["frontened/html"]);
    } else if (submenu === "CSS") {
      this.route.navigate(["frontened/css"]);
    } else if (submenu === "Javascript") {
      this.route.navigate(["frontened/javascript"]);
    }else if (submenu === "Tablets") {
      this.route.navigate(["responsive/tablets"]);
    }else if (submenu === "Mobiles") {
      this.route.navigate(["responsive/mobiles"]);
    }else if (submenu === "Desktop") {
      this.route.navigate(["responsive/desktop"]);
    }else if (submenu === "Chrome") {
      this.route.navigate(["webBrowser/chrome"]);
    }else if (submenu === "Firefox") {
      this.route.navigate(["webBrowser/firefox"]);
    }else if (submenu === "Opera") {
      this.route.navigate(["webBrowser/opera"]);
    }
  }
}
