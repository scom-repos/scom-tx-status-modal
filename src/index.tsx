import {
  customElements,
  ControlElement,
  customModule,
  Module,
  Button,
  Modal,
  Panel,
  Label,
  Container,
  Image,
  VStack
} from '@ijstech/components';
import { } from '@ijstech/eth-contract';
import Assets from './assets';
import {
  parseContractError,
  viewOnExplorerByTxHash,
} from './store/index';
import statusModalStyles from './index.css';
import { Wallet } from '@ijstech/eth-wallet';

interface IMessage {
  status: 'warning' | 'success' | 'error',
  content?: string | {
    message: string
  },
  txtHash?: string,
  customRedirect?: {
    url: string,
    params: any
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['i-scom-tx-status-modal']: ControlElement
    }
  }
}

@customModule
@customElements('i-scom-tx-status-modal')
export default class ScomTxStatusModal extends Module {
  private confirmModal: Modal;
  private mainContent: Panel;
  private _message: IMessage;
  private _onCustomClose: any;

  get message(): IMessage {
    return this._message;
  }

  set message(value: IMessage) {
    this._message = value;
    this.renderUI();
  }

  get onCustomClose(): any {
    return this._onCustomClose;
  }

  set onCustomClose(_onCustomClose: any) {
    this._onCustomClose = _onCustomClose;
    if (this.confirmModal) {
      this.confirmModal.onClose = () => {
        if (this.onCustomClose && typeof this.onCustomClose === 'function') {
          this.onCustomClose();
        }
        this.onCloseRedirect();
      }
    }
  }

  constructor(parent?: Container, options?: ControlElement) {
    super(parent, options);
  }

  closeModal = () => {
    this.confirmModal.visible = false;
  }

  showModal = () => {
    this.confirmModal.visible = true;
  }

  onCloseRedirect = () => {
    const customRedirect = this.message?.customRedirect;
    if (customRedirect && customRedirect.url) {
      this._message.customRedirect = null;
      if (customRedirect.params) {
        const queries = new URLSearchParams(customRedirect.params).toString();
        window.location.assign(`${customRedirect.url}?${queries}`);
      } else {
        window.location.assign(`${customRedirect.url}`);
      }
    }
  }

  private buildLink = () => {
    if (this.message.txtHash) {
      const chainId: number = Wallet.getClientInstance().chainId;
      viewOnExplorerByTxHash(chainId, this.message.txtHash);
    }
  }

  private renderUI = async () => {
    this.mainContent.clearInnerHTML();
    const mainSection = await VStack.create({
      horizontalAlignment: 'center'
    });
    if (this.message.status === 'warning') {
      const loading = (
        <i-panel height={100}>
          <i-vstack id="loadingElm" class="i-loading-overlay" height="100%" background={{ color: 'transparent' }}>
            <i-vstack class="i-loading-spinner" horizontalAlignment="center" verticalAlignment="center">
              <i-icon
                class="i-loading-spinner_icon"
                image={{ url: Assets.fullPath('img/loading.svg'), width: 24, height: 24 }}
              />
              <i-label caption="Loading..." font={{ color: '#FD4A4C' }} class="i-loading-spinner_text"></i-label>
            </i-vstack>
          </i-vstack>
        </i-panel>
      )
      mainSection.appendChild(loading);
      const section = new VStack();
      section.margin = { bottom: 20 };
      const captionList = ['Waiting For Confirmation', this.convertContentToMsg(), 'Confirm this transaction in your wallet'];
      const classList = ['waiting-txt mb-1', 'mb-1', 'confirm-txt'];
      for (let i = 0; i < captionList.length; i++) {
        const caption = captionList[i];
        const label = await Label.create({ caption });
        if (classList[i]) {
          const classes = classList[i].split(' ');
          classes.forEach(className => label.classList.add(className));
        }
        section.appendChild(label);
      };
      mainSection.appendChild(section);
    } else if (this.message.status === 'success') {
      const image = await Image.create({
        width: '50px',
        url: Assets.fullPath('img/success-icon.svg'),
        display: 'inline-block',
        margin: { bottom: 16 }
      });
      mainSection.appendChild(image);

      const label = await Label.create({ caption: 'Transaction Submitted' });
      label.classList.add('waiting-txt');
      mainSection.appendChild(label);

      const contentSection = await Panel.create();
      mainSection.appendChild(contentSection);

      const contentLabel = await Label.create({
        caption: this.convertContentToMsg(),
        wordBreak: 'break-all',
        margin: { top: 2, bottom: 2 }
      });
      contentSection.appendChild(contentLabel);

      if (this.message.txtHash) {
        const section = new VStack();
        const label1 = await Label.create({
          caption: this.message.txtHash.substr(0, 33),
          margin: { top: 4 }
        });
        section.appendChild(label1);

        const label2 = await Label.create({
          caption: this.message.txtHash.substr(33, this.message.txtHash.length),
          margin: { bottom: 16 }
        });
        section.appendChild(label2);

        const link = await Label.create({
          caption: 'View on block explorer',
          display: 'block'
        });

        link.onClick = () => this.buildLink();
        link.classList.add('red-link', 'pointer');
        section.appendChild(link);
        contentSection.appendChild(section);
      }

      const button = new Button(mainSection, {
        width: '100%',
        caption: 'Close',
        margin: { top: 16 },
        // font: { color: Theme.colors.primary.contrastText }
        font: { color: '#fff' }
      });
      button.classList.add('btn-os');
      button.onClick = () => this.closeModal();
      mainSection.appendChild(button);
    } else {
      const image = await Image.create({
        width: '50px',
        url: Assets.fullPath('img/error-icon.png'),
        display: 'inline-block',
        margin: { bottom: 16 }
      });
      mainSection.appendChild(image);

      const label = await Label.create({
        caption: 'Transaction Rejected.',
        margin: { bottom: 16 }
      });
      label.classList.add('waiting-txt');
      mainSection.appendChild(label);

      const section = await VStack.create();
      const contentLabel = await Label.create({
        caption: this.convertContentToMsg(),
        margin: { bottom: 16 },
        wordBreak: 'break-all'
      });
      section.appendChild(contentLabel);
      mainSection.appendChild(section);

      const button = new Button(mainSection, {
        width: '100%',
        caption: 'Cancel',
        margin: { top: 16 },
        // font: { color: Theme.colors.primary.contrastText }
        font: { color: '#fff' }
      });
      button.classList.add('btn-os');
      button.onClick = () => this.closeModal();
      mainSection.appendChild(button);
    }
    this.mainContent.clearInnerHTML();
    this.mainContent.appendChild(mainSection);
  }

  private convertContentToMsg = () => {
    if (this.message.status !== 'error' || typeof this.message.content === 'string') return this.message.content as string || '';

    if (this.message.content.message && this.message.content.message.includes('Internal JSON-RPC error.')) {
      this.message.content.message = JSON.parse(this.message.content.message.replace('Internal JSON-RPC error.\n', '')).message;
    }

    return parseContractError(this.message.content.message);
  }

  init() {
    this.classList.add(statusModalStyles);
    super.init();
    this.confirmModal.onClose = () => {
      if (this.onCustomClose) {
        this.onCustomClose();
      }
      this.onCloseRedirect();
    }
  }

  render() {
    return (
      <i-modal
        id="confirmModal"
        closeIcon={{ name: 'times' }}
        class="confirm-modal"
        minHeight="280px"
      >
        <i-panel id="mainContent" class="i-modal_content" />
      </i-modal>
    )
  }
}
