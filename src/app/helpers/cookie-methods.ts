export class LocalStorage {
  static get(name: string): any {
    const value = localStorage.getItem(name);
    if (value) {
      return JSON.parse(value);
    }

    return null;
  }

  static set(name: string, val: any): void {
    localStorage.setItem(name, JSON.stringify(val));
  }
}
