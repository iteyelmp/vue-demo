import "regenerator-runtime/runtime";
import "core-js/stable";
import LedgerBridge from './ledger-bridge';

(async () => {
	const LB = new LedgerBridge();
	console.log('CoolWalletBridge',LB);
})()
console.log('QuarkChain < === > CoolWallet Bridge initialized!')
