/// <amd-module name="@scom/scom-tx-status-modal/assets.ts" />
declare module "@scom/scom-tx-status-modal/assets.ts" {
    function fullPath(path: string): string;
    const _default: {
        fullPath: typeof fullPath;
    };
    export default _default;
}
/// <amd-module name="@scom/scom-tx-status-modal/store/error.ts" />
declare module "@scom/scom-tx-status-modal/store/error.ts" {
    export const parseContractError: (oMessage: string) => string;
}
/// <amd-module name="@scom/scom-tx-status-modal/store/index.ts" />
declare module "@scom/scom-tx-status-modal/store/index.ts" {
    export const viewOnExplorerByTxHash: (chainId: number, txHash: string) => void;
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
    interface IMessage {
        status: 'warning' | 'success' | 'error';
        content?: string | {
            message: string;
            data?: {
                message: string;
            };
        };
        txtHash?: string;
        exMessage?: string;
        customRedirect?: {
            url: string;
            params: any;
        };
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['i-scom-tx-status-modal']: ControlElement;
            }
        }
    }
    export default class ScomTxStatusModal extends Module {
        private confirmModal;
        private mainContent;
        private _message;
        private _onCustomClose;
        get message(): IMessage;
        set message(value: IMessage);
        get onCustomClose(): any;
        set onCustomClose(_onCustomClose: any);
        constructor(parent?: Container, options?: ControlElement);
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
