import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { AptosClient } from "aptos";
import { useWallet } from "@manahippo/aptos-wallet-adapter";
import {
  candyMachineAddress,
  collectionName,
  collectionCoverUrl,
  NODE_URL,
  CONTRACT_ADDRESS,
  COLLECTION_SIZE,
} from "../helpers/candyMachineInfo";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import cmHelper from "../helpers/candyMachineHelper";
import Spinner from "react-bootstrap/Spinner";
import Modal from "react-bootstrap/Modal";
import ConnectWalletButton from "../helpers/Aptos/ConnectWalletButton";
import "../css/mint.css";
import gif from "../public/mint.gif";

const aptosClient = new AptosClient(NODE_URL);
const autoCmRefresh = 10000;

const Mint = () => {
  const wallet = useWallet();
  const [isFetchignCmData, setIsFetchignCmData] = useState(false);
  const [candyMachineData, setCandyMachineData] = useState({
    data: {},
    fetch: fetchCandyMachineData,
  });
  const [timeLeftToMint, setTimeLeftToMint] = useState({
    presale: "",
    public: "",
    timeout: null,
  });

  const [mintInfo, setMintInfo] = useState({
    numToMint: 1,
    minting: false,
    success: false,
    mintedNfts: [],
  });

  const [canMint, setCanMint] = useState(false);

  useEffect(() => {
    if (!wallet.autoConnect && wallet.wallet?.adapter) {
      wallet.connect();
    }
    console.log(candyMachineData);
  }, [wallet.autoConnect, wallet.wallet, wallet.connect]);

  const mint = async () => {
    if (wallet.account?.address?.toString() === undefined || mintInfo.minting)
      return;

    console.log(wallet.account?.address?.toString());
    setMintInfo({ ...mintInfo, minting: true });
    // Generate a transaction
    const payload = {
      type: "entry_function_payload",
      function: `${CONTRACT_ADDRESS}::candy_machine_v2::mint_tokens`,
      type_arguments: [],
      arguments: [candyMachineAddress, collectionName, mintInfo.numToMint],
    };
    console.log(payload);

    let txInfo;
    try {
      const txHash = await wallet.signAndSubmitTransaction(payload);
      console.log(txHash);
      txInfo = await aptosClient.waitForTransactionWithResult(txHash.hash);
    } catch (err) {
      txInfo = {
        success: false,
        vm_status: err.message,
      };
    }
    handleMintTxResult(txInfo);
    if (txInfo.success)
      setCandyMachineData({
        ...candyMachineData,
        data: {
          ...candyMachineData.data,
          numMintedTokens: (
            parseInt(candyMachineData.data.numMintedTokens) +
            parseInt(mintInfo.numToMint)
          ).toString(),
        },
      });
  };

  async function handleMintTxResult(txInfo) {
    console.log(txInfo);
    const mintSuccess = txInfo.success;
    console.log(
      mintSuccess ? "Mint success!" : `Mint failure, an error occured.`
    );

    let mintedNfts = [];
    if (!mintSuccess) {
      /// Handled error messages
      const handledErrorMessages = new Map([
        ["Failed to sign transaction", "An error occured while signing."],
        [
          "Move abort in 0x1::coin: EINSUFFICIENT_BALANCE(0x10006): Not enough coins to complete transaction",
          "Insufficient funds to mint.",
        ],
      ]);

      const txStatusError = txInfo.vm_status;
      console.error(`Mint not successful: ${txStatusError}`);
      let errorMessage = handledErrorMessages.get(txStatusError);
      errorMessage =
        errorMessage === undefined
          ? "Unkown error occured. Try again."
          : errorMessage;

      toast.error(errorMessage);
    } else {
      mintedNfts = await cmHelper.getMintedNfts(
        aptosClient,
        candyMachineData.data.tokenDataHandle,
        candyMachineData.data.cmResourceAccount,
        collectionName,
        txInfo
      );
      toast.success("Minting success!");
    }

    setMintInfo({
      ...mintInfo,
      minting: false,
      success: mintSuccess,
      mintedNfts,
    });
  }

  async function fetchCandyMachineData(indicateIsFetching = false) {
    console.log("Fetching candy machine data...");
    if (indicateIsFetching) setIsFetchignCmData(true);
    const cmResourceAccount = await cmHelper.getCandyMachineResourceAccount();
    console.log(cmResourceAccount);
    if (cmResourceAccount === null) {
      setCandyMachineData({ ...candyMachineData, data: {} });
      setIsFetchignCmData(false);
      return;
    }

    const collectionInfo = await cmHelper.getCandyMachineCollectionInfo(
      cmResourceAccount
    );
    const configData = await cmHelper.getCandyMachineConfigData(
      collectionInfo.candyMachineConfigHandle
    );
    setCandyMachineData({
      ...candyMachineData,
      data: { cmResourceAccount, ...collectionInfo, ...configData },
    });
    setIsFetchignCmData(false);
  }

  function verifyTimeLeftToMint() {
    const mintTimersTimeout = setTimeout(verifyTimeLeftToMint, 1000);
    if (
      candyMachineData.data.presaleMintTime === undefined ||
      candyMachineData.data.publicMintTime === undefined
    )
      return;

    const currentTime = Math.round(new Date().getTime() / 1000);
    setTimeLeftToMint({
      timeout: mintTimersTimeout,
      presale: cmHelper.getTimeDifference(
        currentTime,
        candyMachineData.data.presaleMintTime
      ),
      public: cmHelper.getTimeDifference(
        currentTime,
        candyMachineData.data.publicMintTime
      ),
    });
  }

  useEffect(() => {
    fetchCandyMachineData(true);
    setInterval(fetchCandyMachineData, autoCmRefresh);
  }, []);

  useEffect(() => {
    clearTimeout(timeLeftToMint.timeout);
    verifyTimeLeftToMint();
    console.log(candyMachineData.data);
  }, [candyMachineData]);

  // useEffect(() => {
  //   setCanMint(wallet.connected && candyMachineData.data.isPublic && parseInt(candyMachineData.data.numUploadedTokens) > parseInt(candyMachineData.data.numMintedTokens) && timeLeftToMint.presale === "LIVE")
  // }, [wallet, candyMachineData, timeLeftToMint])
  useEffect(() => {
    setCanMint(true);
  }, [wallet, candyMachineData, timeLeftToMint]);

  return (
    <div>
      {" "}
      <Header />{" "}
      <div className="bg-gray-500">
        <div className="{styles.container}">
          {/* <Head>
      <title>Aptos NFT Mint</title>
      <meta name="description" content="Aptos NFT Mint" />
      <link rel="icon" href="/favicon.ico" />
    </Head> */}

          <main className="main">
            <h1 className="title">{collectionName} Mint</h1>
            <div className="topcorner">
              <ConnectWalletButton
                connectButton={!wallet.connected}
                className="d-flex"
              />
            </div>
            <img
              src={gif}
              style={{ width: "400px", height: "400px", borderRadius: "50%" }}
            />
            <div
              id="collection-info"
              className="d-flex flex-column align-items-center text-white"
              style={{ width: "80%" }}
            >
              {isFetchignCmData ? (
                <Spinner animation="border" role="status" className="mt-5">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              ) : (
                <>
                  <div className="d-flex align-items-center my-3">
                    <input
                      className={`defaultInput me-3`}
                      style={{ borderRadius: "10px",textAlign:"center",paddingRight:'10px' }}
                      type="number"
                      min="1"
                      max={
                        candyMachineData.data.maxMintsPerWallet === undefined
                          ? 10
                          : Math.min(
                              candyMachineData.data.maxMintsPerWallet,
                              candyMachineData.data.numUploadedTokens -
                                candyMachineData.data.numMintedTokens
                            )
                      }
                      value={mintInfo.numToMint}
                      onChange={(e) =>
                        setMintInfo({ ...mintInfo, numToMint: e.target.value })
                      }
                    />
                    <button
                      className="button"
                      onClick={mint}
                      disabled={!canMint}
                    >
                      {mintInfo.minting ? (
                        <Spinner animation="border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </Spinner>
                      ) : (
                        "Mint"
                      )}
                    </button>
                    <h4 className="mx-3 mb-0">
                      {candyMachineData.data.mintFee * mintInfo.numToMint} $APT
                    </h4>
                    <span
                      style={{
                        width: "15px",
                        height: "15px",
                        borderRadius: "50%",
                        background: candyMachineData.data.isPublic
                          ? "green"
                          : "red",
                      }}
                    ></span>
                  </div>
                  <h5>
                    {candyMachineData.data.numMintedTokens}/ {COLLECTION_SIZE}{" "}
                    minted
                  </h5>
                  <div className="d-flex flex-column align-items-center my-3">
                    <h3 className="fs-24">
                      Presale In :{" "}
                      <span id="live">
                        {timeLeftToMint.presale === "LIVE"
                          ? "LIVE"
                          : timeLeftToMint.presale.days +
                            " days : " +
                            timeLeftToMint.presale.hours +
                            " hours : " +
                            timeLeftToMint.presale.minutes +
                            " minutes : " +
                            timeLeftToMint.presale.seconds +
                            " seconds"}
                      </span>
                    </h3>
                  </div>
                  <div className="d-flex flex-column align-items-center my-3 mt-0 ">
                    <h3 className="fs-24">
                      Public In :{" "}
                      <span id="live">
                        {timeLeftToMint.public === "LIVE"
                          ? "LIVE"
                          : timeLeftToMint.public.days +
                            " days : " +
                            timeLeftToMint.public.hours +
                            " hours : " +
                            timeLeftToMint.public.minutes +
                            " minutes : " +
                            timeLeftToMint.public.seconds +
                            " seconds"}
                      </span>
                    </h3>
                  </div>
                </>
              )}
            </div>

            <Modal
              id="mint-results-modal"
              show={mintInfo.success}
              onHide={() =>
                setMintInfo({ ...mintInfo, success: false, mintedNfts: [] })
              }
              centered
              size="lg"
            >
              <Modal.Body className="d-flex flex-column align-items-center pt-5 pb-3">
                <div
                  className="d-flex justify-content-center w-100 my-5"
                  style={{ flexWrap: "wrap" }}
                >
                  {mintInfo.mintedNfts.map((mintedNft) => (
                    <div
                      key={mintedNft.name}
                      className={`mintedNftCard d-flex flex-column mx-3`}
                    >
                      <img
                        src={
                          mintedNft.imageUri === null ? "" : mintedNft.imageUri
                        }
                      />
                      <h5 className="text-white text-center mt-2">
                        {mintedNft.name}
                      </h5>
                    </div>
                  ))}
                </div>
              </Modal.Body>
            </Modal>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mint;
