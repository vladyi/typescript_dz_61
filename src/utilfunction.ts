function checkValuesAreNumbers(obj: { [key: string]: any }): boolean {
    for (let key in obj) {
      if (typeof obj[key] !== 'number') {
        return false;
      }
    }
    return true;
  }
  