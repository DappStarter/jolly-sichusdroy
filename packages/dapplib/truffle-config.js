require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture strong regret misery attitude inflict castle orange verify'; 
let testAccounts = [
"0x23ccdd24ff532096f92d31a4526f284b03bc000c5aa57d43d4a0e229e2e657d7",
"0xc70555ade3b151b724ff193d9ddb8eb72fedd7447c7084d1ef1e2161ea07fd26",
"0xfee68e7092a7175d7ad17d6bc8e2ba270ccf96deea128d40c6d418188be464e9",
"0x7f9de89bffc72285660f61d3092f45d534c450e38886b12d66fc19571a2e5f4e",
"0xc7b7567dd4e9ac6ee05c031a4295b660a55e71bacfcde312910cb99970847936",
"0xcb9e781a611ff27613fd408f2a816cd864e077c10c7552e8cc8e1bbef6d85d93",
"0x94dd2b475de41e6c3cb34ed1489b17ad6edd9aac2863c4795123a30f651e7470",
"0xf584d1fbece20d5ec6dc9ceaf49481f4d7c209f843c3bb79d1565707efac669a",
"0x56d93969ab0a518337aac9943611ea97cd31a1bd548e9b7b850431c60ef63555",
"0xb74f0834dc76a1a52ed353f8f051d3123372af2c0b727b5eca60a1923b296e04"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
