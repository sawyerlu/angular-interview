import { Component } from "@angular/core";
import { MatTableDataSource } from "@angular/material";
import { ModelService } from "./model.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent {
  title = "Front-end";
  displayedColumns: string[] = ["name", "yearsAvailable"];
  dataSource;
  constructor(private modelService: ModelService) {}
  ngOnInit() {
    this.modelService.getModels().subscribe(result => {
      this.dataSource = new MatTableDataSource(result["models"]);
    });
  }
}
