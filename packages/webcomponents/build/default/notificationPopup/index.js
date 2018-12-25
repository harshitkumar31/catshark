import { LitElement, html } from "../node_modules/@polymer/lit-element/lit-element.js"; // Extend the LitElement base class

class NotificationPopup extends LitElement {
  static get properties() {
    return {
      message: {
        type: String
      },
      show: {
        type: Boolean
      }
    };
  }
  /**
  * TODO: Initialize the property.
  */


  constructor() {
    // Always call superconstructor first
    super();
    this.message = 'Do you want to receive notifications?';
    this.show = false;
    this.showPopup = this.showPopup.bind(this);
    this.closePopup = this.closePopup.bind(this);
    this.initPushNotificationsHandler = this.initPushNotificationsHandler.bind(this);
    setTimeout(this.showPopup, 5000);
  }

  showPopup() {
    this.show = true;
  }

  closePopup() {
    this.show = false;
  }

  initPushNotificationsHandler() {
    initPushNotifications().then(function () {
      console.log('do nothing');
    });
  }
  /**
  * Implement `render` to define a template for your element.
  *
  * You must provide an implementation of `render` for any element
  * that uses LitElement as a base class.
  */


  render() {
    /**
    * `render` must return a lit-html `TemplateResult`.
    *
    * To create a `TemplateResult`, tag a JavaScript template literal
    * with the `html` helper function:
    */
    return html`
        <style>body {
            font-family: sans-serif
        }
        .dialog-ovelay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.50);
            z-index: 999999
        }
        .dialog-ovelay .dialog {
            width: 400px;
            margin: 100px auto 0;
            background-color: #fff;
            box-shadow: 0 0 20px rgba(0,0,0,.2);
            border-radius: 3px;
            overflow: hidden
        }
        .dialog-ovelay .dialog header {
            padding: 10px 8px;
            background-color: #f6f7f9;
            border-bottom: 1px solid #e5e5e5
        }
        .dialog-ovelay .dialog header h3 {
            font-size: 14px;
            margin: 0;
            color: #555;
            display: inline-block
        }
        .dialog-ovelay .dialog header .fa-close {
            float: right;
            color: #c4c5c7;
            cursor: pointer;
            transition: all .5s ease;
            padding: 0 2px;
            border-radius: 1px
        }
        .dialog-ovelay .dialog header .fa-close:hover {
            color: #b9b9b9
        }
        .dialog-ovelay .dialog header .fa-close:active {
            box-shadow: 0 0 5px #673AB7;
            color: #a2a2a2
        }
        .dialog-ovelay .dialog .dialog-msg {
            padding: 12px 10px
        }
        .dialog-ovelay .dialog .dialog-msg p{
            margin: 0;
            font-size: 15px;
            color: #333
        }
        .dialog-ovelay .dialog footer {
            border-top: 1px solid #e5e5e5;
            padding: 8px 10px
        }
        .dialog-ovelay .dialog footer .controls {
            direction: rtl
        }
        .dialog-ovelay .dialog footer .controls .button {
            padding: 5px 15px;
            border-radius: 3px
        }
        .button {
          cursor: pointer
        }
        .button-default {
            background-color: rgb(248, 248, 248);
            border: 1px solid rgba(204, 204, 204, 0.5);
            color: #5D5D5D;
        }
        .button-danger {
            background-color: #f44336;
            border: 1px solid #d32f2f;
            color: #f5f5f5
        }
        .link {
          padding: 5px 10px;
          cursor: pointer
        }</style>
    ${this.show ? html`<div class='dialog-ovelay'><div class='dialog'><div class='dialog-msg'><p>${this.message}</p></div><footer><div class='controls'>
        <button class='button button-default doAction' @click="${this.initPushNotificationsHandler}">Allow</button><button class='button button-danger cancelAction' @click="${this.closePopup}">Not now</button> </footer></div></div>` : html``}
        `;
  }

}

function initPushNotifications(abTestObj) {
  return new Promise(function (resolve, reject) {});
}

; // Register the new element with the browser.

customElements.define('my-element', NotificationPopup);