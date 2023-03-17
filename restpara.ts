function logItems(...items: any[]): void {
    items.forEach(item => {
      console.log(item);
    });
  }
  
  logItems(1, 'two', true); // Output: 1, "two", true
  