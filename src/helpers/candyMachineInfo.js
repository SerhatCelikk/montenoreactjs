export const candyMachineAddress = "0x87373738b1c964648b33191e26b40fd4cb5ce1439f4961bb2d3af035af799c66";
export const collectionName = "TestCollection101"; // Case sensitive!
export const collectionCoverUrl = "https://i.ibb.co/crZ5px7/480.jpg";
export const mode = "mainnet"; // "dev" or "test" or "mainnet"

export let NODE_URL;
export const CONTRACT_ADDRESS = "0xf7b81362cb099f5f48df721dd2db9bd2c1832b31394540101acdb91e1d7b4d4a";
export const COLLECTION_SIZE = 2
let FAUCET_URL;
if (mode == "dev") {
    NODE_URL = "https://fullnode.devnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.devnet.aptoslabs.com";
} else if (mode === "test") {
    NODE_URL = "https://fullnode.testnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.testnet.aptoslabs.com";
} else {
    NODE_URL = "https://fullnode.mainnet.aptoslabs.com/v1";
    FAUCET_URL = null;
}
