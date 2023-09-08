var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define("@scom/scom-tx-status-modal/assets.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const moduleDir = components_1.application.currentModuleDir;
    function fullPath(path) {
        return `${moduleDir}/${path}`;
    }
    ;
    exports.default = {
        fullPath
    };
});
define("@scom/scom-tx-status-modal/store/error.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parseContractError = void 0;
    ///<amd-module name='@scom/scom-tx-status-modal/store/error.ts'/> 
    const parseContractError = (oMessage) => {
        var _a;
        const staticMessageMap = {
            'execution reverted: OAXDEX: K': 'x * y = k Violated',
            'execution reverted: OAXDEX: FORBIDDEN': 'Forbidden',
            'execution reverted: OAXDEX: INSUFFICIENT_INPUT_AMOUNT': 'Insufficient input amount',
            'execution reverted: OAXDEX: INVALID_TO': 'Invalid to',
            'execution reverted: OAXDEX: INSUFFICIENT_LIQUIDITY': 'Insufficient liquidity',
            'execution reverted: OAXDEX: INSUFFICIENT_OUTPUT_AMOUNT': 'Insufficient output amount',
            'execution reverted: OAXDEX: PAIR PAUSED': 'Pair paused',
            'execution reverted: OAXDEX: GLOBALLY PAUSED': 'Globally paused',
            'execution reverted: OAXDEX: INSUFFICIENT_LIQUIDITY_BURNED': 'Insufficient liquidity burned',
            'execution reverted: OAXDEX: INSUFFICIENT_LIQUIDITY_MINTED': 'Insufficient liquidity minted',
            'execution reverted: OAXDEX: OVERFLOW': 'Overflow',
            'execution reverted: OAXDEX_Pair: INSUFFICIENT_LIQUIDITY': 'Insufficient liquidity',
            'execution reverted: OAXDEX_Pair: INSUFFICIENT_OUTPUT_AMOUNT': 'Insufficient output amount',
            'execution reverted: OAXDEX_Pair: INSUFFICIENT_INPUT_AMOUNT': 'Insufficient input amount',
            'execution reverted: OAXDEX: LOCKED': 'Locked',
            'execution reverted: OAXDEX: INVALID_SIGNATURE': 'Invalid signature',
            'execution reverted: OAXDEX: EXPIRED': 'Expired',
            'MetaMask Tx Signature: User denied transaction signature.': 'User denied transaction signature',
            'Returned error: MetaMask Tx Signature: User denied transaction signature.': 'User denied transaction signature',
            'execution reverted: OracleAdaptor: Price outside allowed range': 'Circuit Breaker: Exceeds Price Protection Range',
            'execution reverted: PAIR_NOT_MATCH': 'Pair Not Match',
            'execution reverted: Cap exceeded': 'Trolls have been sold out',
            'execution reverted: No oracle found': 'No Oracle found',
            'execution reverted: Amount exceeds available fund': 'Insufficient liquidity',
            'execution reverted: backerCoin can\'t be a null address': 'BackerCoin can\'t be a null address',
            'execution reverted: price can\'t be zero': 'Price can\'t be zero',
            'execution reverted: mintingFee can\'t exceed 1': 'MintingFee can\'t exceed 1',
            'execution reverted: redemptionFee can\'t exceed 1': 'RedemptionFee can\'t exceed 1'
        };
        return (_a = staticMessageMap[oMessage]) !== null && _a !== void 0 ? _a : oMessage;
    };
    exports.parseContractError = parseContractError;
});
define("@scom/scom-tx-status-modal/store/index.ts", ["require", "exports", "@scom/scom-tx-status-modal/store/error.ts"], function (require, exports, error_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parseContractError = exports.viewOnExplorerByTxHash = void 0;
    ///<amd-module name='@scom/scom-tx-status-modal/store/index.ts'/> 
    const explorerTxUrlsByChainId = {
        1: 'https://etherscan.io/tx/',
        4: 'https://rinkeby.etherscan.io/tx/',
        42: 'https://kovan.etherscan.io/tx/',
        56: 'https://bscscan.com/tx/',
        97: 'https://testnet.bscscan.com/tx/',
        43113: 'https://testnet.snowtrace.io/tx/',
        43114: 'https://snowtrace.io/tx/',
        137: 'https://polygonscan.com/tx/',
        80001: 'https://mumbai.polygonscan.com/tx/',
        250: 'https://ftmscan.com/tx/',
        4002: 'https://testnet.ftmscan.com/tx/',
        13370: 'https://aminoxtestnet.blockscout.alphacarbon.network/tx/',
        421613: 'https://goerli.arbiscan.io/tx/'
    };
    const viewOnExplorerByTxHash = (chainId, txHash) => {
        if (explorerTxUrlsByChainId[chainId]) {
            let url = `${explorerTxUrlsByChainId[chainId]}${txHash}`;
            window.open(url);
        }
    };
    exports.viewOnExplorerByTxHash = viewOnExplorerByTxHash;
    Object.defineProperty(exports, "parseContractError", { enumerable: true, get: function () { return error_1.parseContractError; } });
});
define("@scom/scom-tx-status-modal/index.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_2.Styles.Theme.ThemeVars;
    exports.default = components_2.Styles.style({
        textAlign: 'center',
        $nest: {
            'i-label > *': {
                fontSize: '.875rem'
            },
            '.modal': {
                minWidth: '25%',
                maxWidth: '100%',
                width: 455,
                background: Theme.background.modal,
                borderRadius: 12
            },
            '.i-modal-close svg': {
                fill: '#F05E61'
            },
            '.i-modal_content': {
                padding: '0 2.563rem 1.5rem'
            },
            '.i-modal_header': {
                borderBottom: 'none !important'
            },
            '.waiting-txt > *': {
                color: '#F6C958',
                fontSize: '1.125rem'
            },
            '.confirm-txt > *': {
                color: '#C2C3CB'
            },
            '.red-link *': {
                color: '#FD4A4C',
                textDecoration: 'none'
            },
            '.mb-1': {
                marginBottom: '1rem'
            },
            'i-button': {
                padding: '1rem 2rem',
                textAlign: 'center'
            },
            '.btn-os': {
                background: 'transparent linear-gradient(90deg, #AC1D78 0%, #E04862 100%) 0% 0% no-repeat padding-box',
                fontSize: '1rem',
                fontWeight: 'bold',
                color: '#fff'
                // color: Theme.colors.primary.contrastText
            }
        }
    });
});
define("@scom/scom-tx-status-modal", ["require", "exports", "@ijstech/components", "@scom/scom-tx-status-modal/assets.ts", "@scom/scom-tx-status-modal/store/index.ts", "@scom/scom-tx-status-modal/index.css.ts", "@ijstech/eth-wallet"], function (require, exports, components_3, assets_1, index_1, index_css_1, eth_wallet_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let ScomTxStatusModal = class ScomTxStatusModal extends components_3.Module {
        get message() {
            return this._message;
        }
        set message(value) {
            this._message = value;
            this.renderUI();
        }
        get onCustomClose() {
            return this._onCustomClose;
        }
        set onCustomClose(_onCustomClose) {
            this._onCustomClose = _onCustomClose;
            if (this.confirmModal) {
                this.confirmModal.onClose = () => {
                    if (this.onCustomClose && typeof this.onCustomClose === 'function') {
                        this.onCustomClose();
                    }
                    this.onCloseRedirect();
                };
            }
        }
        constructor(parent, options) {
            super(parent, options);
            this.closeModal = () => {
                this.confirmModal.visible = false;
            };
            this.showModal = () => {
                this.confirmModal.visible = true;
            };
            this.onCloseRedirect = () => {
                var _a;
                const customRedirect = (_a = this.message) === null || _a === void 0 ? void 0 : _a.customRedirect;
                if (customRedirect && customRedirect.url) {
                    this._message.customRedirect = null;
                    if (customRedirect.params) {
                        const queries = new URLSearchParams(customRedirect.params).toString();
                        window.location.assign(`${customRedirect.url}?${queries}`);
                    }
                    else {
                        window.location.assign(`${customRedirect.url}`);
                    }
                }
            };
            this.buildLink = () => {
                if (this.message.txtHash) {
                    const chainId = eth_wallet_1.Wallet.getClientInstance().chainId;
                    (0, index_1.viewOnExplorerByTxHash)(chainId, this.message.txtHash);
                }
            };
            this.renderUI = async () => {
                this.mainContent.clearInnerHTML();
                const mainSection = await components_3.VStack.create({
                    horizontalAlignment: 'center'
                });
                if (this.message.status === 'warning') {
                    const loading = (this.$render("i-panel", { height: 100 },
                        this.$render("i-vstack", { id: "loadingElm", class: "i-loading-overlay", height: "100%", background: { color: 'transparent' } },
                            this.$render("i-vstack", { class: "i-loading-spinner", horizontalAlignment: "center", verticalAlignment: "center" },
                                this.$render("i-icon", { class: "i-loading-spinner_icon", image: { url: assets_1.default.fullPath('img/loading.svg'), width: 24, height: 24 } }),
                                this.$render("i-label", { caption: "Loading...", font: { color: '#FD4A4C' }, class: "i-loading-spinner_text" })))));
                    mainSection.appendChild(loading);
                    const section = new components_3.VStack();
                    section.margin = { bottom: 20 };
                    const captionList = ['Waiting For Confirmation', this.convertContentToMsg(), 'Confirm this transaction in your wallet'];
                    const classList = ['waiting-txt mb-1', 'mb-1', 'confirm-txt'];
                    for (let i = 0; i < captionList.length; i++) {
                        const caption = captionList[i];
                        const label = await components_3.Label.create({ caption });
                        if (classList[i]) {
                            const classes = classList[i].split(' ');
                            classes.forEach(className => label.classList.add(className));
                        }
                        section.appendChild(label);
                    }
                    ;
                    mainSection.appendChild(section);
                }
                else if (this.message.status === 'success') {
                    const image = await components_3.Image.create({
                        width: '50px',
                        url: assets_1.default.fullPath('img/success-icon.svg'),
                        display: 'inline-block',
                        margin: { bottom: 16 }
                    });
                    mainSection.appendChild(image);
                    const label = await components_3.Label.create({ caption: 'Transaction Submitted' });
                    label.classList.add('waiting-txt');
                    mainSection.appendChild(label);
                    const contentSection = await components_3.Panel.create();
                    mainSection.appendChild(contentSection);
                    const contentLabel = await components_3.Label.create({
                        caption: this.convertContentToMsg(),
                        wordBreak: 'break-word',
                        margin: { top: 2, bottom: 2 }
                    });
                    contentSection.appendChild(contentLabel);
                    if (this.message.txtHash) {
                        const section = new components_3.VStack();
                        const label1 = await components_3.Label.create({
                            caption: this.message.txtHash.substr(0, 33),
                            margin: { top: 4 }
                        });
                        section.appendChild(label1);
                        const label2 = await components_3.Label.create({
                            caption: this.message.txtHash.substr(33, this.message.txtHash.length),
                            margin: { bottom: 16 }
                        });
                        section.appendChild(label2);
                        const link = await components_3.Label.create({
                            caption: 'View on block explorer',
                            display: 'block'
                        });
                        link.onClick = () => this.buildLink();
                        link.classList.add('red-link', 'pointer');
                        section.appendChild(link);
                        contentSection.appendChild(section);
                    }
                    const button = new components_3.Button(mainSection, {
                        width: '100%',
                        caption: 'Close',
                        margin: { top: 16 },
                        // font: { color: Theme.colors.primary.contrastText }
                        font: { color: '#fff' }
                    });
                    button.classList.add('btn-os');
                    button.onClick = () => this.closeModal();
                    mainSection.appendChild(button);
                }
                else {
                    const image = await components_3.Image.create({
                        width: '50px',
                        url: assets_1.default.fullPath('img/error-icon.png'),
                        display: 'inline-block',
                        margin: { bottom: 16 }
                    });
                    mainSection.appendChild(image);
                    const label = await components_3.Label.create({
                        caption: 'Transaction Rejected.',
                        margin: { bottom: 16 }
                    });
                    label.classList.add('waiting-txt');
                    mainSection.appendChild(label);
                    const section = await components_3.VStack.create();
                    const contentLabel = await components_3.Label.create({
                        caption: this.convertContentToMsg(),
                        margin: { bottom: 16 },
                        wordBreak: 'break-word'
                    });
                    section.appendChild(contentLabel);
                    mainSection.appendChild(section);
                    const button = new components_3.Button(mainSection, {
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
            };
            this.convertContentToMsg = () => {
                var _a;
                try {
                    if (this.message.status !== 'error' || typeof this.message.content === 'string')
                        return this.message.content || '';
                    if ((_a = this.message.content.data) === null || _a === void 0 ? void 0 : _a.message) {
                        const dataMessage = this.message.content.data.message;
                        if (dataMessage.includes('insufficient funds for gas * price + value')) {
                            return 'Not enough gas to process transaction';
                        }
                        if (typeof dataMessage === 'string') {
                            return dataMessage;
                        }
                    }
                    if (this.message.content.message && this.message.content.message.includes('Internal JSON-RPC error.')) {
                        this.message.content.message = JSON.parse(this.message.content.message.replace('Internal JSON-RPC error.\n', '')).message;
                    }
                    return (0, index_1.parseContractError)(this.message.content.message);
                }
                catch (_b) {
                    return 'Unknow Error';
                }
            };
        }
        init() {
            this.classList.add(index_css_1.default);
            super.init();
            this.confirmModal.onClose = () => {
                if (this.onCustomClose) {
                    this.onCustomClose();
                }
                this.onCloseRedirect();
            };
        }
        render() {
            return (this.$render("i-modal", { id: "confirmModal", closeIcon: { name: 'times' }, class: "confirm-modal", minHeight: "280px" },
                this.$render("i-panel", { id: "mainContent", class: "i-modal_content" })));
        }
    };
    ScomTxStatusModal = __decorate([
        components_3.customModule,
        (0, components_3.customElements)('i-scom-tx-status-modal')
    ], ScomTxStatusModal);
    exports.default = ScomTxStatusModal;
});
