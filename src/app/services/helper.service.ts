import { Injectable } from '@angular/core';
import * as $ from 'jquery';
import 'bootstrap-notify';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  private sendNotification(title: string = '', message: string = '', type: string = 'danger') {
    $['notify']({
      // options
      title,
      message
    }, {
        // settings
        type,
        z_index: 9999
    });
  }

  public notifyError(message = 'Favor contactar a soporte@gmail.com') {
    this.sendNotification('Ha ocurrido un error', message);
  }

  public notifySuccessMessage(title: string, message: string) {
    this.sendNotification(title, message, 'success')
  }

  public notifyWarningMessage(title: string, message: string) {
    this.sendNotification(title, message, 'warning');
  }


  protected compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const nameA = a.Nombre.toUpperCase();
    const nameB = b.Nombre.toUpperCase();

    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  }


  public sortComunnes(arr) {
    return arr.sort(this.compare);
  }
}
