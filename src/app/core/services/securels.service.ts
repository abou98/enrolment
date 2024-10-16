import { Injectable } from "@angular/core";
import * as SecureStorage from "secure-ls";

@Injectable({
  providedIn: "root",
})
export class SecurelsService {
  private secureStorage: any;

  constructor() {
    this.secureStorage = new SecureStorage({ encodingType: "aes" });
  }

  // Saves securely data in specified key in localstorage
  saveData(key: string, data: any): void {
    this.secureStorage.set(key, data);
  }

  // Decrypts and Retrives data from localstorage library secure-ls with specified key
  getData(key: string): any {
    return this.secureStorage.get(key);
  }

  // Gets the list of keys that were created using the secure-ls library
  getAllData(): any {
    return this.secureStorage.getAllKeys();
  }

  // Removes the value of a key from the localstorage
  clearData(key: string): void {
    return this.secureStorage.remove(key);
  }

  // Removes all the keys that were created by secure-ls library
  clearAllData(): void {
    return this.secureStorage.removeAll();
  }
}
