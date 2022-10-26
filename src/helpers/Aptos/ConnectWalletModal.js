// import styles from '../../styles/Home.module.css'

import {useWallet} from "@manahippo/aptos-wallet-adapter"
import aptosLogo from "../../public/aptosLogo.png"
import "./connect.css"
import Modal from "react-bootstrap/Modal"

const ConnectWalletModal = (props) => {
    const {show, onConnect} = props

    const wallet = useWallet()

    return (
        <Modal    id='connectWalletModal' show={show} onHide={onConnect} centered>
            <Modal.Body id="modalbody"  className="d-flex flex-column" style={{	flexDirection: "column" }}>
                {wallet.wallets.map((walletType) => {
                    const adapter = walletType.adapter;
                    return <button id="adapterbutton" key={adapter.name} className='{ walletAdapterOption } ' onClick={async () => {
                        await wallet.select(adapter.name);
                        onConnect();
                      }}>
                        <img src={adapter.icon} />
                        <h6 className="mb-0">{adapter.name}</h6>
                    </button>
                })}
            </Modal.Body>
        </Modal>
    )
}

export default ConnectWalletModal;
