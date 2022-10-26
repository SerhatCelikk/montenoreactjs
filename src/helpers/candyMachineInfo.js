export const candyMachineAddress = "0x39f399a5af9c6a249548de552ed55a3a6fa6877d59c0d25fb6b4f7b5d554f578";
export const collectionName = "TestCollection101"; // Case sensitive!
export const collectionCoverUrl = "https://cloudflare-ipfs.com/ipfs/QmeCuKGLvAGrBAPGdaRh2hkTjXsXuk8VEUHNoYRD4cJG51";
export const mode = "dev"; // "dev" or "test" or "mainnet"

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
