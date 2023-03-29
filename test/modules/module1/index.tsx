import { Module, customModule, Container, Panel } from '@ijstech/components';
import ScomTxStatusModal from '@scom/scom-tx-status-modal'
@customModule
export default class Module1 extends Module {
    private txStatusModal: ScomTxStatusModal;
    private pnlMainTest: Panel;
    private _options: any;

    constructor(parent?: Container, options?: any) {
        super(parent, options);
        this._options = options;
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
        this.txStatusModal = new ScomTxStatusModal(undefined, {
            networks: this._options.networks
        })
        this.pnlMainTest.appendChild(this.txStatusModal);
    }

    render() {
        return <i-panel id="pnlMainTest">
            <i-hstack gap={10} padding={{ top: 20, left: 20 }}>
                <i-button caption="Warning" background={{ color: '#ff9800' }} font={{ color: '#fff' }} onClick={() => this.showStatusModal('warning')} width={100} padding={{ top: 8, bottom: 8 }} />
                <i-button caption="Success" background={{ color: '#4caf50' }} font={{ color: '#fff' }} onClick={() => this.showStatusModal('success')} width={100} padding={{ top: 8, bottom: 8 }} />
                <i-button caption="Error" background={{ color: '#f44336' }} font={{ color: '#fff' }} onClick={() => this.showStatusModal('error')} width={100} padding={{ top: 8, bottom: 8 }} />
            </i-hstack>
        </i-panel>
    }
}