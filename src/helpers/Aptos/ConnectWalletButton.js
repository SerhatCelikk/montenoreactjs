import React, { useState } from "react";
// import styles from '../../styles/Home.module.css'

import {useWallet} from "@manahippo/aptos-wallet-adapter"
import "./connect.css"
import aptosLogo from "../../public/aptosLogo.png"
import ConnectWalletModal from "./ConnectWalletModal"

const ConnectWalletButton = (props) => {
    const {connectButton, className, style, disabled} = props

    const wallet = useWallet()
    const [showModal, setShowModal] = useState(false)

    function handleButtonClick() {
        if (connectButton) {
            setShowModal(true)
            return
        }
        wallet.disconnect()
    }

    const button = <button disabled={disabled} className={`connectWalletBtn ${className} ${disabled ? "disabled" : ""}`}  onClick={handleButtonClick} style={style}>
      
        <h4 className="mb-0 " id="connectt">{connectButton ? "Connect" : "Disconnect"}</h4>
    </button>

    return (
        <div >
        {connectButton ? button : wallet.account?.address?.toString() !== undefined ? <span className="mx-auto w-100">{button}</span> : null}
        <ConnectWalletModal  show={showModal} onConnect={() => setShowModal(false)} />
        </div>
    )
}

export default ConnectWalletButton;
