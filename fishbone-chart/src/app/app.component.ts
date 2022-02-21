import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "fishbone-chart";

  data_with_PercentageObject =
    {
      problems: [{
        problemName: "Incomplete or hidden requirements",
        causes: [{ text: "Process doesn't allow for innovation", percentage: 6.73 },
        { text: "Lack of requirements management", percentage: 0.25 },
        { text: "Lack of discipline", percentage: 0.33 },
        { text: "Lack of requirements management", percentage: 11.21 },
        { text: "Poor project management", percentage: 1.59 },
        { text: "Too high team distribution", percentage: 5.83 },
        { text: "Lack of experience of RE team members", percentage: 8.13 },
        { text: "Workload of customer", percentage: 3.98 },
        { text: "Lack of experience of RE team members", percentage: 6.34 },
        { text: "Requirements remain too abstract", percentage: 5.96 }],
        effects: [{ text: "Customer does not know what he wants", percentage: 1.71 },
        { text: "Missing of a global view of the system", percentage: 2.19 },
        { text: "Unclear business needs", percentage: 19.08 },
        { text: "Lack of a well-defined RE process", percentage: 4.1 },
        { text: "Lack of experience of RE team members", percentage: 2.51 },
        { text: "High cost", percentage: 8.35 },
        { text: "Missing RE awareness at team side", percentage: 2.37 },
        { text: "Unclear terminology", percentage: 0.68 },
        { text: "Missing company wide standard", percentage: 1.94 },
        { text: "Lack of experience of RE team members", percentage: 12.94 }],
      }, {
        problemName: "Time boxing/Not enough time in general",
        causes: [{ text: "Customer does not know what he wants", percentage: 16.58 },
        { text: "Missing of a global view of the system", percentage: 5.98 },
        { text: "Unclear business needs", percentage: 2.58 },
        { text: "Lack of a well-defined RE process", percentage: 3.3 },
        { text: "Lack of experience of RE team members", percentage: 3.18 },
        { text: "High cost", percentage: 4.16 },
        { text: "Missing RE awareness at team side", percentage: 1.64 },
        { text: "Unclear terminology", percentage: 3.71 },
        { text: "Missing company wide standard", percentage: 3.98 },
        { text: "Lack of experience of RE team members", percentage: 4.9 }],
        effects: [{ text: "Customer does not know what he wants", percentage: 4.01 },
        { text: "Missing of a global view of the system", percentage: 0.64 },
        { text: "Unclear business needs", percentage: 2.99 },
        { text: "Lack of a well-defined RE process", percentage: 0.86 },
        { text: "Lack of experience of RE team members", percentage: 0.65 },
        { text: "Customer does not know what he wants", percentage: 1.54 },
        { text: "High cost", percentage: 16.53 },
        { text: "Missing RE awareness at team side", percentage: 3.88 },
        { text: "Unclear terminology", percentage: 9.14 },
        { text: "Missing company wide standard", percentage: 9.76 }],
      }, {
        problemName: "Incomplete or hidden requirements",
        causes: [{ text: "Customer does not know what he wants", percentage: 4.01 },
        { text: "Missing of a global view of the system", percentage: 0.64 },
        { text: "Unclear business needs", percentage: 2.99 },
        { text: "Lack of a well-defined RE process", percentage: 0.86 },
        { text: "Lack of experience of RE team members", percentage: 0.65 },
        { text: "Customer does not know what he wants", percentage: 1.54 },
        { text: "High cost", percentage: 16.53 },
        { text: "Missing RE awareness at team side", percentage: 3.88 },
        { text: "Unclear terminology", percentage: 9.14 },
        { text: "Missing company wide standard", percentage: 9.76 }],
        effects: [{ text: "Customer does not know what he wants", percentage: 16.58 },
        { text: "Missing of a global view of the system", percentage: 5.98 },
        { text: "Lack of a well-defined RE process", percentage: 3.3 },
        { text: "Unclear business needs", percentage: 2.58 },
        { text: "Lack of experience of RE team members", percentage: 3.18 },
        { text: "High cost", percentage: 4.16 },
        { text: "Missing RE awareness at team side", percentage: 1.64 },
        { text: "Unclear terminology", percentage: 3.71 },
        { text: "Missing company wide standard", percentage: 3.98 },
        { text: "Lack of experience of RE team members", percentage: 4.9 }],
      },{
        problemName: "Incomplete or hidden requirements",
        causes: [{ text: "Process doesn't allow for innovation", percentage: 6.73 },
        { text: "Lack of requirements management", percentage: 0.25 },
        { text: "Lack of discipline", percentage: 0.33 },
        { text: "Lack of requirements management", percentage: 11.21 },
        { text: "Poor project management", percentage: 1.59 },
        { text: "Too high team distribution", percentage: 5.83 },
        { text: "Lack of experience of RE team members", percentage: 8.13 },
        { text: "Workload of customer", percentage: 3.98 },
        { text: "Lack of experience of RE team members", percentage: 6.34 },
        { text: "Requirements remain too abstract", percentage: 5.96 }],
        effects: [{ text: "Customer does not know what he wants", percentage: 1.71 },
        { text: "Missing of a global view of the system", percentage: 2.19 },
        { text: "Unclear business needs", percentage: 19.08 },
        { text: "Lack of a well-defined RE process", percentage: 4.1 },
        { text: "Lack of experience of RE team members", percentage: 2.51 },
        { text: "High cost", percentage: 8.35 },
        { text: "Missing RE awareness at team side", percentage: 2.37 },
        { text: "Unclear terminology", percentage: 0.68 },
        { text: "Missing company wide standard", percentage: 1.94 },
        { text: "Lack of experience of RE team members", percentage: 12.94 }],
      },{
        problemName: "Time boxing/Not enough time in general",
        causes: [{ text: "Customer does not know what he wants", percentage: 16.58 },
        { text: "Missing of a global view of the system", percentage: 5.98 },
        { text: "Unclear business needs", percentage: 2.58 },
        { text: "Lack of a well-defined RE process", percentage: 3.3 },
        { text: "Lack of experience of RE team members", percentage: 3.18 },
        { text: "High cost", percentage: 4.16 },
        { text: "Missing RE awareness at team side", percentage: 1.64 },
        { text: "Unclear terminology", percentage: 3.71 },
        { text: "Missing company wide standard", percentage: 3.98 },
        { text: "Lack of experience of RE team members", percentage: 4.9 }],
        effects: [{ text: "Customer does not know what he wants", percentage: 4.01 },
        { text: "Missing of a global view of the system", percentage: 0.64 },
        { text: "Unclear business needs", percentage: 2.99 },
        { text: "Lack of a well-defined RE process", percentage: 0.86 },
        { text: "Lack of experience of RE team members", percentage: 0.65 },
        { text: "Customer does not know what he wants", percentage: 1.54 },
        { text: "High cost", percentage: 16.53 },
        { text: "Missing RE awareness at team side", percentage: 3.88 },
        { text: "Unclear terminology", percentage: 9.14 },
        { text: "Missing company wide standard", percentage: 9.76 }],
      }]
    }

  data_with_PercentageList =
    {
      problems: [{
        problemName: "Top 1 Problem: Incomplete or hidden requirements",
        causes: ["Process doesn't allow for innovation", "Lack of requirements management",
          "Lack of discipline", "Lack of requirements management",
          "Poor project management", "Too high team distribution",
          "No procedure for securing laptop at public locations", "Workload of customer",
          "Lack of experience of RE team members", "Requirements remain too abstract"],
        causesPerc: [6.37, 0.25, 0.33, 11.21, 1.59, 5.83, 8.13, 3.98, 6.34, 5.96],
        effects: ["Customer does not know what he wants", "Missing of a global view of the system",
          "Unclear business needs", "Lack of a well-defined RE process",
          "Lack of experience of RE team members",
          "High cost", "Missing RE awareness at team side",
          "Unclear terminology", "Missing company wide standard"],
        effectsPerc: [1.71, 2.19, 19.08, 4.1, 2.51, 8.35, 2.37, 0.68, 1.94, 7.08]
      }, {
        problemName: "Top 2 Problem: Time boxing/Not enough time in general",
        causes: ["Customer does not know what he wants", "Missing of a global view of the system",
          "Unclear business needs", "Lack of a well-defined RE process",
          "Lack of experience of RE team members",
          "High cost", "Missing RE awareness at team side",
          "Unclear terminology", "Missing company wide standard", "Lack of experience of RE team members"],
        causesPerc: [4.01, 0.64, 2.99, 0.86, 0.65, 1.54, 16.53, 3.88, 9.14, 9.76],
        effects: ["Customer does not know what he wants", "Missing of a global view of the system",
          "Unclear business needs", "Lack of a well-defined RE process",
          "Lack of experience of RE team members", "Customer does not know what he wants",
          "High cost", "Missing RE awareness at team side",
          "Unclear terminology", "Missing company wide standard"],
        effectsPerc: [16.58, 5.98, 2.58, 3.3, 3.18, 4.16, 1.64, 3.71, 3.98, 4.9]
      }]
    }

  data =
    {
      problems: [{
        problemName: "Top 1 Problem: Incomplete or hidden requirements",
        causes: ["Process doesn't allow for innovation (xx.xx%)", "Lack of requirements management (xx.xx%)",
          "Lack of discipline (xx.xx%)", "Lack of requirements management (xx.xx%)",
          "Poor project management (xx.xx%)", "Too high team distribution (xx.xx%)",
          "No procedure for securing laptop at public locations (xx.xx%)", "Workload of customer (xx.xx%)",
          "Lack of experience of RE team members (xx.xx%)", "Requirements remain too abstract (xx.xx%)"],
        effects: ["Customer does not know what he wants (xx.xx%)", "Missing of a global view of the system (xx.xx%)",
          "Unclear business needs (xx.xx%)", "Lack of a well-defined RE process (xx.xx%)",
          "Lack of experience of RE team members (xx.xx%)",
          "High cost (xx.xx%)", "Missing RE awareness at team side (xx.xx%)",
          "Unclear terminology (xx.xx%)", "Missing company wide standard (xx.xx%)"]
      }, {
        problemName: "Top 2 Problem: Time boxing/Not enough time in general",
        causes: ["Customer does not know what he wants (xx.xx%)", "Missing of a global view of the system (xx.xx%)",
          "Unclear business needs", "Lack of a well-defined RE process (xx.xx%)",
          "Lack of experience of RE team members (xx.xx%)",
          "High cost (xx.xx%)", "Missing RE awareness at team side (xx.xx%)",
          "Unclear terminology (xx.xx%)", "Missing company wide standard", "Lack of experience of RE team members (xx.xx%)"],
        effects: ["Customer does not know what he wants (xx.xx%)", "Missing of a global view of the system (xx.xx%)",
          "Unclear business needs (xx.xx%)", "Lack of a well-defined RE process (xx.xx%)",
          "Lack of experience of RE team members (xx.xx%)", "Customer does not know what he wants (xx.xx%)",
          "High cost (xx.xx%)", "Missing RE awareness at team side (xx.xx%)",
          "Unclear terminology (xx.xx%)", "Missing company wide standard (xx.xx%)"]
      }]
    }

}

