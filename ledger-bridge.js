import WebBleTransport from '@coolwallets/transport-web-ble';
// import cwsQKC from '@coolwallet/qkc';
// import {getAppKeysOrGenerate, getAppIdOrNull} from './coolWalletSdkUtil';
// const {appPrivateKey} = getAppKeysOrGenerate();
// const appId = getAppIdOrNull();

class LedgerBridge {
  constructor() {
    this.listenFromIframe();
  }

  listenFromIframe() {
    window.addEventListener(
      'message',
      async eve => {
        console.log('-----listenFromIframe-----', eve);
        if (eve && eve.data && eve.data.target === 'LEDGER-IFRAME') {
          const {action, params} = eve.data;

          const actionReply = `${action}-reply`;
          const actionMap = {
            'ledger-import':
              () => this.import(actionReply, params.hdPath),
            'ledger-unlock':
              () => this.unlock(actionReply, params.hdPath),
            'ledger-getAddress':
              () => this.getAddress(actionReply),
            'ledger-getAppConfiguration':
              () => this.getAppConfiguration(actionReply),
            'ledger-sign-transaction':
              () => this.signTransaction(
                actionReply,
                params.hdPath,
                params.serializedTxHex,
              ),
            'ledger-sign-personal-message':
              () => this.signPersonalMessage(
                actionReply,
                params.hdPath,
                params.message,
              ),
            undefined:
              () => {
              },
          };
          actionMap[action]();
        } else {
          console.log('not collwallet-iframe', eve);
        }
      },
      false,
    );
  }

  sendMessageToExtension(msg) {
    window.parent.postMessage(msg, '*');
  }

  async initApp() {
    try {
      console.log('initApp');
      WebBleTransport.listen(async (error, device) => {
        console.log('device', device);
        if (device) {
          this.transport = await WebBleTransport.connect(device);
          console.log('transport', transport);
        } else throw error;
      });
    } catch (err) {
      console.log('COLLWALLET:::CREATE APP ERROR', err);
    }
  }

  cleanUp() {
    // this.app = null;
    // this.transport && WebBleTransport.disconnect(this.transport.device.id);
  };

  // async import(actionReply, hdPath) {
  //   console.log('----import-----');
  //   try {
  //     WebBleTransport.listen(async (error, device) => {
  //       if (device) {
  //         console.log('----import-----device', device);
  //         this.transport = await WebBleTransport.connect(device);
  //         console.log('transport', transport);
  //
  //         const res = '0xC85d47b72cA69D2342426C7F1b0930a80178667C';
  //         this.sendMessageToExtension({
  //           action: actionReply,
  //           success: true,
  //           payload: res,
  //         });
  //       } else throw error;
  //     });
  //   } catch (err) {
  //     console.log('----import-----error', err);
  //     const e = this.ledgerErrToMessage(err);
  //     this.sendMessageToExtension({
  //       action: actionReply,
  //       success: false,
  //       payload: {error: e.toString()},
  //     });
  //   } finally {
  //     this.cleanUp();
  //   }
  // };

  async import(actionReply, hdPath) {
    try {
      // await this.initApp();
      // const res = await this.app.getAddress(this.transport, appPrivateKey,
      //   appId, 0);
      const res = '0xC85d47b72cA69D2342426C7F1b0930a80178667C';
      this.sendMessageToExtension({
        action: actionReply,
        success: true,
        payload: res,
      });
    } catch (err) {
      const e = this.ledgerErrToMessage(err);
      this.sendMessageToExtension({
        action: actionReply,
        success: false,
        payload: {error: e.toString()},
      });
    } finally {
      this.cleanUp();
    }
  };

  async unlock(actionReply, hdPath) {
    try {
      await this.initApp();
      // const res = await this.app.getAddress(hdPath, false, true);
      const res = '';
      this.sendMessageToExtension({
        action: actionReply,
        success: true,
        payload: res,
      });
    } catch (err) {
      const e = this.ledgerErrToMessage(err);
      this.sendMessageToExtension({
        action: actionReply,
        success: false,
        payload: {error: e.toString()},
      });
    } finally {
      this.cleanUp();
    }
  };

  async getAddress(actionReply) {
    try {
      await this.initApp();
      const {address} = (await this.app.getAddress()) || {};
      this.sendMessageToExtension({
        action: actionReply,
        success: true,
        payload: address,
      });
    } catch (err) {
      const e = this.ledgerErrToMessage(err);
      this.sendMessageToExtension({
        action: actionReply,
        success: false,
        payload: {error: e.toString()},
      });
    } finally {
      this.cleanUp();
    }
  };

  async getAppConfiguration(actionReply) {
    try {
      await this.initApp();
      // const res = await this.app.getAppConfiguration();
      const res = {};
      this.sendMessageToExtension({
        action: actionReply,
        success: true,
        payload: res,
      });
    } catch (err) {
      const e = this.ledgerErrToMessage(err);
      this.sendMessageToExtension({
        action: actionReply,
        success: false,
        payload: {error: e.toString()},
      });
    } finally {
      this.cleanUp();
    }
  };

  async signTransaction(actionReply, hdPath, serializedTxHex) {
    try {
      await this.initApp();
      // const res = await this.app.signTransaction(hdPath, serializedTxHex);
      const res = '';
      this.sendMessageToExtension({
        action: actionReply,
        success: true,
        payload: res,
      });
    } catch (err) {
      const e = this.ledgerErrToMessage(err);
      this.sendMessageToExtension({
        action: actionReply,
        success: false,
        payload: {error: e.toString()},
      });
    } finally {
      this.cleanUp();
    }
  };

  async signPersonalMessage(actionReply, hdPath, message) {
    try {
      await this.initApp();
      // const res = await this.app.signPersonalMessage(hdPath, message);
      const res = '';
      this.sendMessageToExtension({
        action: actionReply,
        success: true,
        payload: res,
      });
    } catch (err) {
      const err_msg = this.ledgerErrToMessage(err);
      this.sendMessageToExtension({
        action: actionReply,
        success: false,
        payload: {error: err_msg.toString()},
      });
    } finally {
      this.cleanUp();
    }
  };

  ledgerErrToMessage(err) {
    const isU2FError = err => !!err && !!err.metaData;
    const isStringError = err => typeof err === 'string';
    const isErrorWithId = err =>
      err.hasOwnProperty('id') && err.hasOwnProperty('message');

    // https://developers.yubico.com/U2F/Libraries/Client_error_codes.html
    if (isU2FError(err)) {
      return err.metaData.code === 5 ? 'LEDGER_TIMEOUT' : err.metaData.type;
    }

    if (isStringError(err)) {
      // Wrong app logged into
      if (err.includes('6804')) {
        return 'LEDGER_WRONG_APP';
      }
      // Ledger locked
      if (err.includes('6801')) {
        return 'LEDGER_LOCKED';
      }

      return err;
    }

    if (isErrorWithId(err)) {
      // Browser doesn't support U2F
      if (err.message.includes('U2F not supported')) {
        return 'U2F_NOT_SUPPORTED';
      }
    }

    // Other
    return err.toString();
  }
}

export default LedgerBridge;
