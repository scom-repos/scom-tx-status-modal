/// <amd-module name="@scom/scom-tx-status-modal/assets.ts" />
declare module "@scom/scom-tx-status-modal/assets.ts" {
    function fullPath(path: string): string;
    const _default: {
        fullPath: typeof fullPath;
    };
    export default _default;
}
/// <amd-module name="@scom/scom-tx-status-modal/store/interface.ts" />
declare module "@scom/scom-tx-status-modal/store/interface.ts" {
    export interface INetwork {
        chainId: number;
        name: string;
        img?: string;
        rpc?: string;
        symbol?: string;
        env?: string;
        explorerName?: string;
        explorerTxUrl?: string;
        explorerAddressUrl?: string;
        isDisabled?: boolean;
    }
}
/// <amd-module name="@scom/scom-tx-status-modal/store/error.ts" />
declare module "@scom/scom-tx-status-modal/store/error.ts" {
    export const parseContractError: (oMessage: string) => string;
}
/// <amd-module name="@scom/scom-tx-status-modal/store/index.ts" />
declare module "@scom/scom-tx-status-modal/store/index.ts" {
    import { INetwork } from "@scom/scom-tx-status-modal/store/interface.ts";
    export { INetwork };
    const networks: INetwork[];
    export const updateNetworks: (options: {
        networks?: INetwork[] | '*';
        infuraId?: string;
    }) => void;
    export function getChainId(): number;
    export function getWalletProvider(): string;
    export const getNetworkInfo: (chainId: number) => INetwork | undefined;
    export const getNetworkList: () => INetwork[];
    export const getNetworkType: (chainId: number) => string;
    export const getNetworkExplorerName: (chainId: number) => string;
    export const getInfuraId: () => string;
    export const viewOnExplorerByTxHash: (chainId: number, txHash: string) => void;
    export const viewOnExplorerByAddress: (chainId: number, address: string) => void;
    export { parseContractError } from "@scom/scom-tx-status-modal/store/error.ts";
}
/// <amd-module name="@scom/scom-tx-status-modal/index.css.ts" />
declare module "@scom/scom-tx-status-modal/index.css.ts" {
    const _default_1: string;
    export default _default_1;
}
/// <amd-module name="@scom/scom-tx-status-modal" />
declare module "@scom/scom-tx-status-modal" {
    import { ControlElement, Module, Container } from '@ijstech/components';
    import { INetwork } from "@scom/scom-tx-status-modal/store/index.ts";
    interface IMessage {
        chainId?: number;
        status: 'warning' | 'success' | 'error';
        content?: string | {
            message: string;
        };
        txtHash?: string;
        customRedirect?: {
            url: string;
            params: any;
        };
    }
    interface TxStatusModalElement extends ControlElement {
        networks?: INetwork[] | '*';
        infuraId?: string;
        chainId?: number;
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['i-scom-tx-status-modal']: TxStatusModalElement;
            }
        }
    }
    export default class ScomTxStatusModal extends Module {
        private confirmModal;
        private mainContent;
        private _chainId;
        private _message;
        private _onCustomClose;
        get message(): IMessage;
        set message(value: IMessage);
        get chainId(): number;
        set chainId(value: number);
        get onCustomClose(): any;
        set onCustomClose(_onCustomClose: any);
        constructor(parent?: Container, options?: any);
        closeModal: () => void;
        showModal: () => void;
        onCloseRedirect: () => void;
        private buildLink;
        private renderUI;
        private convertContentToMsg;
        init(): void;
        render(): any;
    }
}
