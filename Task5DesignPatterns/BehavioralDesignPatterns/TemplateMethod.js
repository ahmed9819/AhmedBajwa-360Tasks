class DataProcessor {
  process() {
    this.readData();
    this.processData();
    this.saveData();
  }

  readData() {
    console.log("Reading data");
  }

  processData() {
    throw new Error("processData() must be implemented");
  }

  saveData() {
    console.log("Saving data");
  }
}

class CSVProcessor extends DataProcessor {
  processData() {
    console.log("Processing CSV data");
  }
}


const csv = new CSVProcessor();
csv.process();
