class BubbleSort {
  sort(data) {
    console.log("Bubble sort applied");
    return data.sort();
  }
}

class QuickSort {
  sort(data) {
    console.log("Quick sort applied");
    return data.sort();
  }
}

class Sorter {
  constructor(strategy) {
    this.strategy = strategy;
  }

  sort(data) {
    return this.strategy.sort(data);
  }
}


const sorter = new Sorter(new QuickSort());
sorter.sort([5, 2, 9, 1]);
