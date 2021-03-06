import { Component, VERSION } from "@angular/core";
import { DemoService } from "./demo.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  arr;
  constructor(private service: DemoService) {}
  ngOnInit(): void {
    this.service.getServerData().subscribe(data => {
      this.arr = Array.from(Object.keys(data), k => data[k]);
    });
  }

  sendData() {
    this.service.postDataonServer(1, "Kalpesh", 99000);
  }
}
