import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()
export class StorageProvider {

  constructor(
    private storage : Storage
  ) {
  }

  set(key: string, value: any){
    this.storage.set(key, value)
  }

  get(key){
    return this.storage.get(key)
  }

  remove(key){
    this.storage.remove(key)
  }

}
