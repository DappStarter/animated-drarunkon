require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'gesture infant forget seed edge rare remain mixture gesture neck fortune style'; 
let testAccounts = [
"0x87c74cdd137fc777bd5adab1a64618aacb7b1ea3c2dfec9725cf87074249fd4b",
"0xef68204c47047e65373d9142f5ee99bfce70ba5ea8a7eb169b35d00d947250bd",
"0xcee88532e5620ac0e9f358f6d98bc02dd9dba0bf802aea8aa32a43690cacde41",
"0x331382141a241dde061f0386c78dd070a1345dffaf5d59c59b8df971dca4484f",
"0xefbf066b4b606c12a35c15ecd43cae57269722b096eab9cf5f3eafd3cceb2d8c",
"0xc1f8db6613431748f9a1268bc826e93befbf81649926502499efb006d8401ec6",
"0x590450635e0989f1eecf7ffeeee67a93f48b8a2c6933b2d25baa4658ae6946b5",
"0xd2b638909a24f4b5745b7f231f356a7cabd35b3b89852c58f386afb60ff8e801",
"0x1f1ccbb5181b4572d8d7d59988d1f5c7ed2715d2b3868218812064d74e7af86f",
"0x1363e3ec2db1ace86fc27372b50f767accd187ce983453493e6660ba77472faf"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

