import { Module, customModule, Container, Panel, application } from '@ijstech/components';
import { getMulticallInfoList } from '@scom/scom-multicall';
import { INetwork } from '@ijstech/eth-wallet';
import getNetworkList from '@scom/scom-network-list';
import ScomDappContainer from '@scom/scom-dapp-container';
import ScomTxStatusModal from '@scom/scom-tx-status-modal';
@customModule
export default class Module1 extends Module {
    private txStatusModal: ScomTxStatusModal;
    private dappContainer: ScomDappContainer;
    private pnlMainTest: Panel;

    constructor(parent?: Container, options?: any) {
        super(parent, options);
        const multicalls = getMulticallInfoList();
        const networkMap = this.getNetworkMap(options.infuraId);
        application.store = {
            infuraId: options.infuraId,
            multicalls,
            networkMap
        }
    }

    private getNetworkMap = (infuraId?: string) => {
        const networkMap = {};
        const defaultNetworkList: INetwork[] = getNetworkList();
        const defaultNetworkMap: Record<number, INetwork> = defaultNetworkList.reduce((acc, cur) => {
            acc[cur.chainId] = cur;
            return acc;
        }, {});
        for (const chainId in defaultNetworkMap) {
            const networkInfo = defaultNetworkMap[chainId];
            const explorerUrl = networkInfo.blockExplorerUrls && networkInfo.blockExplorerUrls.length ? networkInfo.blockExplorerUrls[0] : "";
            if (infuraId && networkInfo.rpcUrls && networkInfo.rpcUrls.length > 0) {
                for (let i = 0; i < networkInfo.rpcUrls.length; i++) {
                    networkInfo.rpcUrls[i] = networkInfo.rpcUrls[i].replace(/{INFURA_ID}/g, infuraId);
                }
            }
            networkMap[networkInfo.chainId] = {
                ...networkInfo,
                symbol: networkInfo.nativeCurrency?.symbol || "",
                explorerTxUrl: explorerUrl ? `${explorerUrl}${explorerUrl.endsWith("/") ? "" : "/"}tx/` : "",
                explorerAddressUrl: explorerUrl ? `${explorerUrl}${explorerUrl.endsWith("/") ? "" : "/"}address/` : ""
            }
        }
        return networkMap;
    }

    private showStatusModal = (status: 'error' | 'warning' | 'success') => {
        let content: string | { message: string };
        let txtHash = '';
        switch (status) {
            case 'error':
                content = {
                    message: 'MetaMask Tx Signature: User denied transaction signature.'
                };
                break;
            case 'warning':
                content = 'This is a warning message';
                break;
            case 'success':
                content = 'This is a success message';
                txtHash = '0x123456789';
                break;
        }
        this.txStatusModal.message = {
            status,
            content,
            txtHash
        }
        this.txStatusModal.showModal()
    }

    init() {
        super.init();
        this.dappContainer.setData({
            showHeader: true,
            networks: [
                {
                    chainId: 97
                },
                {
                    chainId: 43113
                }
            ],
            wallets: [{
                name: 'Metamask'
            }],
            defaultChainId: 43113
        })
        this.txStatusModal = new ScomTxStatusModal();
        this.pnlMainTest.appendChild(this.txStatusModal);
    }

    render() {
        return <i-scom-dapp-container id="dappContainer">
            <i-panel id="pnlMainTest">
                <i-hstack gap={10} padding={{ top: 20, left: 20 }}>
                    <i-button caption="Warning" background={{ color: '#ff9800' }} font={{ color: '#fff' }} onClick={() => this.showStatusModal('warning')} width={100} padding={{ top: 8, bottom: 8 }} />
                    <i-button caption="Success" background={{ color: '#4caf50' }} font={{ color: '#fff' }} onClick={() => this.showStatusModal('success')} width={100} padding={{ top: 8, bottom: 8 }} />
                    <i-button caption="Error" background={{ color: '#f44336' }} font={{ color: '#fff' }} onClick={() => this.showStatusModal('error')} width={100} padding={{ top: 8, bottom: 8 }} />
                </i-hstack>
            </i-panel>
        </i-scom-dapp-container>
    }
}