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
define("@scom/scom-tx-status-modal/store/interface.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ;
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
            'execution reverted: OracleAdaptor: Price outside allowed range': 'Circuit Breaker: Exceeds Price Protection Range',
            'execution reverted: PAIR_NOT_MATCH': 'Pair Not Match',
            'execution reverted: Cap exceeded': 'Trolls have been sold out',
            'execution reverted: No oracle found': 'No Oracle found',
            'execution reverted: Amount exceeds available fund': 'Insufficient liquidity',
        };
        return (_a = staticMessageMap[oMessage]) !== null && _a !== void 0 ? _a : `Unknown Error: ${oMessage}`;
    };
    exports.parseContractError = parseContractError;
});
define("@scom/scom-tx-status-modal/store/index.ts", ["require", "exports", "@ijstech/eth-wallet", "@scom/scom-tx-status-modal/store/error.ts"], function (require, exports, eth_wallet_1, error_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parseContractError = exports.viewOnExplorerByAddress = exports.viewOnExplorerByTxHash = exports.getInfuraId = exports.getNetworkExplorerName = exports.getNetworkType = exports.getNetworkList = exports.getNetworkInfo = exports.getWalletProvider = exports.getChainId = exports.updateNetworks = void 0;
    const networks = [
        {
            name: "Ethereum",
            chainId: 1,
            img: "eth",
            rpc: "https://mainnet.infura.io/v3/{InfuraId}",
            symbol: "ETH",
            env: "mainnet",
            explorerName: "Etherscan",
            explorerTxUrl: "https://etherscan.io/tx/",
            explorerAddressUrl: "https://etherscan.io/address/"
        },
        {
            name: "Kovan Test Network",
            chainId: 42,
            img: "eth",
            rpc: "https://kovan.infura.io/v3/{InfuraId}",
            symbol: "ETH",
            env: "testnet",
            explorerName: "Etherscan",
            explorerTxUrl: "https://kovan.etherscan.io/tx/",
            explorerAddressUrl: "https://kovan.etherscan.io/address/"
        },
        {
            name: "Binance Smart Chain",
            chainId: 56,
            img: "bsc",
            rpc: "https://bsc-dataseed.binance.org/",
            symbol: "BNB",
            env: "mainnet",
            explorerName: "BSCScan",
            explorerTxUrl: "https://bscscan.com/tx/",
            explorerAddressUrl: "https://bscscan.com/address/"
        },
        {
            name: "Polygon",
            chainId: 137,
            img: "polygon",
            symbol: "MATIC",
            env: "mainnet",
            explorerName: "PolygonScan",
            explorerTxUrl: "https://polygonscan.com/tx/",
            explorerAddressUrl: "https://polygonscan.com/address/"
        },
        {
            name: "Fantom Opera",
            chainId: 250,
            img: "ftm",
            rpc: "https://rpc.ftm.tools/",
            symbol: "FTM",
            env: "mainnet",
            explorerName: "FTMScan",
            explorerTxUrl: "https://ftmscan.com/tx/",
            explorerAddressUrl: "https://ftmscan.com/address/"
        },
        {
            name: "BSC Testnet",
            chainId: 97,
            img: "bsc",
            rpc: "https://data-seed-prebsc-1-s1.binance.org:8545/",
            symbol: "BNB",
            env: "testnet",
            explorerName: "BSCScan",
            explorerTxUrl: "https://testnet.bscscan.com/tx/",
            explorerAddressUrl: "https://testnet.bscscan.com/address/"
        },
        {
            name: "Amino Testnet",
            chainId: 31337,
            img: "amio",
            symbol: "ACT",
            env: "testnet"
        },
        {
            name: "Avalanche FUJI C-Chain",
            chainId: 43113,
            img: "avax",
            rpc: "https://api.avax-test.network/ext/bc/C/rpc",
            symbol: "AVAX",
            env: "testnet",
            explorerName: "SnowTrace",
            explorerTxUrl: "https://testnet.snowtrace.io/tx/",
            explorerAddressUrl: "https://testnet.snowtrace.io/address/"
        },
        {
            name: "Mumbai",
            chainId: 80001,
            img: "polygon",
            rpc: "https://matic-mumbai.chainstacklabs.com",
            symbol: "MATIC",
            env: "testnet",
            explorerName: "PolygonScan",
            explorerTxUrl: "https://mumbai.polygonscan.com/tx/",
            explorerAddressUrl: "https://mumbai.polygonscan.com/address/"
        },
        {
            name: "Fantom Testnet",
            chainId: 4002,
            img: "ftm",
            rpc: "https://rpc.testnet.fantom.network/",
            symbol: "FTM",
            env: "testnet",
            explorerName: "FTMScan",
            explorerTxUrl: "https://testnet.ftmscan.com/tx/",
            explorerAddressUrl: "https://testnet.ftmscan.com/address/"
        },
        {
            name: "AminoX Testnet",
            chainId: 13370,
            img: "amio",
            symbol: "ACT",
            env: "testnet",
            explorerName: "AminoX Explorer",
            explorerTxUrl: "https://aminoxtestnet.blockscout.alphacarbon.network/tx/",
            explorerAddressUrl: "https://aminoxtestnet.blockscout.alphacarbon.network/address/"
        }
    ];
    const updateNetworks = (options) => {
        if (options.infuraId) {
            setInfuraId(options.infuraId);
        }
        if (options.networks) {
            setNetworkList(options.networks, options.infuraId);
        }
    };
    exports.updateNetworks = updateNetworks;
    function getChainId() {
        return eth_wallet_1.Wallet.getInstance().chainId;
    }
    exports.getChainId = getChainId;
    ;
    function getWalletProvider() {
        return localStorage.getItem('walletProvider') || '';
    }
    exports.getWalletProvider = getWalletProvider;
    ;
    const state = {
        networkMap: {},
        infuraId: '',
    };
    function getWallet() {
        return eth_wallet_1.Wallet.getInstance();
    }
    ;
    const setNetworkList = (networkList, infuraId) => {
        var _a;
        state.networkMap = {};
        if (networkList === '*') {
            const wallet = getWallet();
            const networksMap = wallet.networksMap;
            for (const chainId in networksMap) {
                const networkInfo = networksMap[chainId];
                const rpc = networkInfo.rpcUrls && networkInfo.rpcUrls.length ? networkInfo.rpcUrls[0] : '';
                const explorerUrl = networkInfo.blockExplorerUrls && networkInfo.blockExplorerUrls.length ? networkInfo.blockExplorerUrls[0] : "";
                state.networkMap[networkInfo.chainId] = {
                    chainId: networkInfo.chainId,
                    name: networkInfo.chainName,
                    rpc: state.infuraId && rpc ? rpc.replace(/{InfuraId}/g, state.infuraId) : rpc,
                    symbol: ((_a = networkInfo.nativeCurrency) === null || _a === void 0 ? void 0 : _a.symbol) || '',
                    explorerTxUrl: explorerUrl ? `${explorerUrl}${explorerUrl.endsWith('/') ? '' : '/'}tx/` : '',
                    explorerAddressUrl: explorerUrl ? `${explorerUrl}${explorerUrl.endsWith('/') ? '' : '/'}address/` : '',
                };
            }
            return;
        }
        networks.forEach(network => {
            const rpc = infuraId && network.rpc ? network.rpc.replace(/{InfuraId}/g, infuraId) : network.rpc;
            state.networkMap[network.chainId] = Object.assign(Object.assign({}, network), { isDisabled: true, rpc });
        });
        if (Array.isArray(networkList)) {
            for (let network of networkList) {
                if (infuraId && network.rpc) {
                    network.rpc = network.rpc.replace(/{InfuraId}/g, infuraId);
                }
                Object.assign(state.networkMap[network.chainId], Object.assign({ isDisabled: false }, network));
            }
        }
    };
    const getNetworkInfo = (chainId) => {
        return state.networkMap[chainId];
    };
    exports.getNetworkInfo = getNetworkInfo;
    const getNetworkList = () => {
        return Object.values(state.networkMap);
    };
    exports.getNetworkList = getNetworkList;
    const getNetworkType = (chainId) => {
        var _a;
        let network = exports.getNetworkInfo(chainId);
        return (_a = network === null || network === void 0 ? void 0 : network.explorerName) !== null && _a !== void 0 ? _a : 'Unknown';
    };
    exports.getNetworkType = getNetworkType;
    const getNetworkExplorerName = (chainId) => {
        if (exports.getNetworkInfo(chainId)) {
            return exports.getNetworkInfo(chainId).explorerName;
        }
        return null;
    };
    exports.getNetworkExplorerName = getNetworkExplorerName;
    const setInfuraId = (infuraId) => {
        state.infuraId = infuraId;
    };
    const getInfuraId = () => {
        return state.infuraId;
    };
    exports.getInfuraId = getInfuraId;
    const viewOnExplorerByTxHash = (chainId, txHash) => {
        let network = exports.getNetworkInfo(chainId);
        if (network && network.explorerTxUrl) {
            let url = `${network.explorerTxUrl}${txHash}`;
            window.open(url);
        }
    };
    exports.viewOnExplorerByTxHash = viewOnExplorerByTxHash;
    const viewOnExplorerByAddress = (chainId, address) => {
        let network = exports.getNetworkInfo(chainId);
        if (network && network.explorerAddressUrl) {
            let url = `${network.explorerAddressUrl}${address}`;
            window.open(url);
        }
    };
    exports.viewOnExplorerByAddress = viewOnExplorerByAddress;
    Object.defineProperty(exports, "parseContractError", { enumerable: true, get: function () { return error_1.parseContractError; } });
});
define("@scom/scom-tx-status-modal/index.css.ts", ["require", "exports", "@ijstech/components", "@scom/scom-tx-status-modal/assets.ts"], function (require, exports, components_2, assets_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = components_2.Styles.style({
        textAlign: 'center',
        $nest: {
            'i-label > *': {
                color: '#fff',
                fontSize: '.875rem',
                wordBreak: 'normal'
            },
            '.modal': {
                minWidth: '25%',
                maxWidth: '100%',
                width: 455,
                background: '#252a48',
                borderRadius: 12
            },
            '.i-modal-close svg': {
                fill: '#F05E61'
            },
            '.i-modal_content': {
                padding: '0 2.5rem 1.5rem'
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
            '.cs-mb': {
                marginBottom: '1rem'
            },
            'i-button': {
                padding: '1rem 2rem',
                textAlign: 'center'
            },
            '.btn-os': {
                background: 'transparent linear-gradient(90deg, #AC1D78 0%, #E04862 100%) 0% 0% no-repeat padding-box',
                fontFamily: 'Raleway Bold',
                fontSize: '1rem',
                fontWeight: 'bold',
                color: '#fff'
            }
        }
    });
    components_2.Styles.fontFace({
        fontFamily: "Raleway Regular",
        src: `url("${assets_1.default.fullPath('fonts/raleway/Raleway-Regular.ttf')}") format("truetype")`,
        fontWeight: 'nomal',
        fontStyle: 'normal'
    });
    components_2.Styles.fontFace({
        fontFamily: "Raleway Bold",
        src: `url("${assets_1.default.fullPath('fonts/raleway/Raleway-Bold.ttf')}") format("truetype")`,
        fontWeight: 'bold',
        fontStyle: 'normal'
    });
    components_2.Styles.fontFace({
        fontFamily: "Raleway Light",
        src: `url("${assets_1.default.fullPath('fonts/raleway/Raleway-Light.ttf')}") format("truetype")`,
        fontStyle: 'normal'
    });
    components_2.Styles.fontFace({
        fontFamily: "Raleway Medium",
        src: `url("${assets_1.default.fullPath('fonts/raleway/Raleway-Medium.ttf')}") format("truetype")`,
        fontStyle: 'normal'
    });
    components_2.Styles.fontFace({
        fontFamily: "Raleway SemiBold",
        src: `url("${assets_1.default.fullPath('fonts/raleway/Raleway-SemiBold.ttf')}") format("truetype")`,
        fontStyle: 'normal'
    });
});
define("@scom/scom-tx-status-modal", ["require", "exports", "@ijstech/components", "@scom/scom-tx-status-modal/assets.ts", "@scom/scom-tx-status-modal/store/index.ts", "@scom/scom-tx-status-modal/index.css.ts", "@ijstech/eth-wallet"], function (require, exports, components_3, assets_2, index_1, index_css_1, eth_wallet_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let ScomTxStatusModal = class ScomTxStatusModal extends components_3.Module {
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
                    const chainId = this.chainId || eth_wallet_2.Wallet.getClientInstance().chainId;
                    index_1.viewOnExplorerByTxHash(chainId, this.message.txtHash);
                }
            };
            this.renderUI = async () => {
                this.mainContent.clearInnerHTML();
                const mainSection = await components_3.VStack.create({
                    horizontalAlignment: 'center'
                });
                if (this.message.status === 'warning') {
                    mainSection.id = 'warningSection';
                    const loading = (this.$render("i-panel", { height: 100 },
                        this.$render("i-vstack", { id: "loadingElm", class: "i-loading-overlay", height: "100%", background: { color: "transparent" } },
                            this.$render("i-vstack", { class: "i-loading-spinner", horizontalAlignment: "center", verticalAlignment: "center" },
                                this.$render("i-icon", { class: "i-loading-spinner_icon", image: { url: assets_2.default.fullPath('img/loading.svg'), width: 24, height: 24 } }),
                                this.$render("i-label", { caption: "Loading...", font: { color: '#FD4A4C' }, class: "i-loading-spinner_text" })))));
                    mainSection.appendChild(loading);
                    const section = new components_3.VStack();
                    section.margin = { bottom: 20 };
                    const captionList = ['Waiting For Confirmation', this.convertContentToMsg(), 'Confirm this transaction in your wallet'];
                    const classList = ['waiting-txt cs-mb', 'cs-mb', 'confirm-txt'];
                    for (let i = 0; i < captionList.length; i++) {
                        const caption = captionList[i];
                        const label = await components_3.Label.create();
                        label.caption = caption;
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
                    const chainId = this.chainId || eth_wallet_2.Wallet.getClientInstance().chainId;
                    const explorerName = index_1.getNetworkExplorerName(chainId);
                    const image = await components_3.Image.create({
                        width: '50px',
                        url: assets_2.default.fullPath('img/success-icon.svg'),
                        display: 'inline-block',
                        margin: { bottom: '1rem' }
                    });
                    mainSection.appendChild(image);
                    const label = await components_3.Label.create({
                        caption: 'Transaction Submitted',
                        margin: { bottom: 4 }
                    });
                    label.classList.add('waiting-txt');
                    mainSection.appendChild(label);
                    const contentSection = await components_3.Panel.create();
                    contentSection.id = 'contentSection';
                    mainSection.appendChild(contentSection);
                    const contentLabel = await components_3.Label.create({
                        caption: this.convertContentToMsg(),
                        margin: { bottom: 4 }
                    });
                    contentSection.appendChild(contentLabel);
                    if (this.message.txtHash) {
                        const section = new components_3.VStack();
                        const label1 = await components_3.Label.create({
                            caption: this.message.txtHash.substr(0, 33),
                            margin: { bottom: 4 }
                        });
                        section.appendChild(label1);
                        const label2 = await components_3.Label.create({
                            caption: this.message.txtHash.substr(33, this.message.txtHash.length),
                            margin: { bottom: '1rem' }
                        });
                        section.appendChild(label2);
                        if (explorerName) {
                            const link = await components_3.Label.create({
                                caption: `View on ${explorerName}`,
                                display: 'block'
                            });
                            link.onClick = this.buildLink.bind(this);
                            link.classList.add('red-link', 'pointer');
                            section.appendChild(link);
                        }
                        contentSection.appendChild(section);
                    }
                    const button = new components_3.Button(mainSection, {
                        width: '100%',
                        caption: 'Close',
                        margin: { top: '1rem' }
                    });
                    button.classList.add('btn-os');
                    button.onClick = () => this.closeModal();
                    mainSection.appendChild(button);
                }
                else {
                    const image = await components_3.Image.create({
                        width: '50px',
                        url: assets_2.default.fullPath('img/error-icon.png'),
                        display: 'inline-block',
                        margin: { bottom: '1rem' }
                    });
                    mainSection.appendChild(image);
                    const label = await components_3.Label.create({
                        caption: 'Transaction Rejected.',
                        margin: { bottom: '1rem' }
                    });
                    label.classList.add('waiting-txt');
                    mainSection.appendChild(label);
                    const section = await components_3.VStack.create();
                    section.id = 'contentSection';
                    const contentLabel = await components_3.Label.create({
                        caption: this.convertContentToMsg(),
                        margin: { bottom: '1rem' }
                    });
                    section.appendChild(contentLabel);
                    mainSection.appendChild(section);
                    const button = new components_3.Button(mainSection, {
                        width: '100%',
                        caption: 'Cancel',
                        margin: { top: '1rem' }
                    });
                    button.classList.add('btn-os');
                    button.onClick = () => this.closeModal();
                    mainSection.appendChild(button);
                }
                this.mainContent.clearInnerHTML();
                this.mainContent.appendChild(mainSection);
            };
            this.convertContentToMsg = () => {
                if (this.message.status !== 'error' || typeof this.message.content === 'string')
                    return this.message.content || '';
                if (this.message.content.message && this.message.content.message.includes('Internal JSON-RPC error.')) {
                    this.message.content.message = JSON.parse(this.message.content.message.replace('Internal JSON-RPC error.\n', '')).message;
                }
                return index_1.parseContractError(this.message.content.message);
            };
        }
        get message() {
            return this._message;
        }
        set message(value) {
            this._message = value;
            this.renderUI();
        }
        get chainId() {
            return this._chainId;
        }
        set chainId(value) {
            this._chainId = value;
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
        init() {
            this.classList.add(index_css_1.default);
            super.init();
            const chainId = this.getAttribute('chainId', true);
            if (chainId) {
                this.chainId = chainId;
            }
            const networks = this.getAttribute('networks', true);
            const infuraId = this.getAttribute('infuraId', true);
            index_1.updateNetworks({ infuraId, networks });
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
        components_3.customElements('i-scom-tx-status-modal')
    ], ScomTxStatusModal);
    exports.default = ScomTxStatusModal;
});
