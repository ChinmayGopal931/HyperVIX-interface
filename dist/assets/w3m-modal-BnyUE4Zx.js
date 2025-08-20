import{c as u,n as w,b as O,r as d,i as N,x as n,o as Q,U as be,a as ye}from"./index-DiG6kiLs.js";import{w as xe,p as Ce,s as ke,q as Se,M as v,t as de,R as l,i as _,r as B,a as D,x as f,u as X,e as we,o as ue,j as m,f as F,k as We,v as k,c as ne,O as I,C as Z,y as se,l as A,A as V,T as $e,z as Re,b as Ae,h as Te}from"./core-Bn9v_PDz.js";import"./index-DAQpu9e7.js";import"./index.es-D0gEBoHY.js";const p=Ce({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),Oe={state:p,subscribe(s){return Se(p,()=>s(p))},subscribeKey(s,e){return ke(p,s,e)},showTooltip({message:s,triggerRect:e,variant:t}){p.open=!0,p.message=s,p.triggerRect=e,p.variant=t},hide(){p.open=!1,p.message="",p.triggerRect={width:0,height:0,top:0,left:0}}},T=xe(Oe),pe={isUnsupportedChainView(){return l.state.view==="UnsupportedChain"||l.state.view==="SwitchNetwork"&&l.state.history.includes("UnsupportedChain")},async safeClose(){if(this.isUnsupportedChainView()){v.shake();return}if(await de.isSIWXCloseDisabled()){v.shake();return}v.close()}},Ne=_`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }

  :host([data-embedded='true']) {
    box-shadow:
      0 0 0 1px var(--wui-color-gray-glass-005),
      0px 4px 12px 4px var(--w3m-card-embedded-shadow-color);
  }
`;var Ee=function(s,e,t,o){var a=arguments.length,i=a<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,o);else for(var c=s.length-1;c>=0;c--)(r=s[c])&&(i=(a<3?r(i):a>3?r(e,t,i):r(e,t))||i);return a>3&&i&&Object.defineProperty(e,t,i),i};let ee=class extends D{render(){return f`<slot></slot>`}};ee.styles=[B,Ne];ee=Ee([u("wui-card")],ee);const Ie=_`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-dark-glass-100);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-325);
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: var(--wui-border-radius-3xs);
    background-color: var(--local-icon-bg-value);
  }
`;var j=function(s,e,t,o){var a=arguments.length,i=a<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,o);else for(var c=s.length-1;c>=0;c--)(r=s[c])&&(i=(a<3?r(i):a>3?r(e,t,i):r(e,t))||i);return a>3&&i&&Object.defineProperty(e,t,i),i};let S=class extends D{constructor(){super(...arguments),this.message="",this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="info"}render(){return this.style.cssText=`
      --local-icon-bg-value: var(--wui-color-${this.backgroundColor});
   `,f`
      <wui-flex flexDirection="row" justifyContent="space-between" alignItems="center">
        <wui-flex columnGap="xs" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color=${this.iconColor} size="md" name=${this.icon}></wui-icon>
          </wui-flex>
          <wui-text variant="small-500" color="bg-350" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="bg-350"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `}onClose(){X.close()}};S.styles=[B,Ie];j([w()],S.prototype,"message",void 0);j([w()],S.prototype,"backgroundColor",void 0);j([w()],S.prototype,"iconColor",void 0);j([w()],S.prototype,"icon",void 0);S=j([u("wui-alertbar")],S);const Pe=O`
  :host {
    display: block;
    position: absolute;
    top: var(--wui-spacing-s);
    left: var(--wui-spacing-l);
    right: var(--wui-spacing-l);
    opacity: 0;
    pointer-events: none;
  }
`;var me=function(s,e,t,o){var a=arguments.length,i=a<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,o);else for(var c=s.length-1;c>=0;c--)(r=s[c])&&(i=(a<3?r(i):a>3?r(e,t,i):r(e,t))||i);return a>3&&i&&Object.defineProperty(e,t,i),i};const _e={info:{backgroundColor:"fg-350",iconColor:"fg-325",icon:"info"},success:{backgroundColor:"success-glass-reown-020",iconColor:"success-125",icon:"checkmark"},warning:{backgroundColor:"warning-glass-reown-020",iconColor:"warning-100",icon:"warningCircle"},error:{backgroundColor:"error-glass-reown-020",iconColor:"error-125",icon:"exclamationTriangle"}};let Y=class extends N{constructor(){super(),this.unsubscribe=[],this.open=X.state.open,this.onOpen(!0),this.unsubscribe.push(X.subscribeKey("open",e=>{this.open=e,this.onOpen(!1)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:t}=X.state,o=_e[t];return n`
      <wui-alertbar
        message=${e}
        backgroundColor=${o==null?void 0:o.backgroundColor}
        iconColor=${o==null?void 0:o.iconColor}
        icon=${o==null?void 0:o.icon}
      ></wui-alertbar>
    `}onOpen(e){this.open?(this.animate([{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: auto"):e||(this.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: none")}};Y.styles=Pe;me([d()],Y.prototype,"open",void 0);Y=me([u("w3m-alertbar")],Y);const Be=_`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var L=function(s,e,t,o){var a=arguments.length,i=a<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,o);else for(var c=s.length-1;c>=0;c--)(r=s[c])&&(i=(a<3?r(i):a>3?r(e,t,i):r(e,t))||i);return a>3&&i&&Object.defineProperty(e,t,i),i};let W=class extends D{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){const e=this.size==="lg"?"--wui-border-radius-xs":"--wui-border-radius-xxs",t=this.size==="lg"?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`
    --local-border-radius: var(${e});
    --local-padding: var(${t});
`,f`
      <button ?disabled=${this.disabled}>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};W.styles=[B,we,ue,Be];L([w()],W.prototype,"size",void 0);L([w({type:Boolean})],W.prototype,"disabled",void 0);L([w()],W.prototype,"icon",void 0);L([w()],W.prototype,"iconColor",void 0);W=L([u("wui-icon-link")],W);const De=_`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: var(--wui-spacing-xxs);
    gap: var(--wui-spacing-xxs);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xxs);
  }

  wui-image {
    border-radius: 100%;
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  wui-icon-box {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var he=function(s,e,t,o){var a=arguments.length,i=a<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,o);else for(var c=s.length-1;c>=0;c--)(r=s[c])&&(i=(a<3?r(i):a>3?r(e,t,i):r(e,t))||i);return a>3&&i&&Object.defineProperty(e,t,i),i};let G=class extends D{constructor(){super(...arguments),this.imageSrc=""}render(){return f`<button>
      ${this.imageTemplate()}
      <wui-icon size="xs" color="fg-200" name="chevronBottom"></wui-icon>
    </button>`}imageTemplate(){return this.imageSrc?f`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`:f`<wui-icon-box
      size="xxs"
      iconColor="fg-200"
      backgroundColor="fg-100"
      background="opaque"
      icon="networkPlaceholder"
    ></wui-icon-box>`}};G.styles=[B,we,ue,De];he([w()],G.prototype,"imageSrc",void 0);G=he([u("wui-select")],G);const je=O`
  :host {
    height: 64px;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards var(--wui-ease-out-power-2),
      slide-down-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards var(--wui-ease-out-power-2),
      slide-up-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;var b=function(s,e,t,o){var a=arguments.length,i=a<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,o);else for(var c=s.length-1;c>=0;c--)(r=s[c])&&(i=(a<3?r(i):a>3?r(e,t,i):r(e,t))||i);return a>3&&i&&Object.defineProperty(e,t,i),i};const Le=["SmartSessionList"];function J(){var r,c,E,C,z,H,K;const s=(c=(r=l.state.data)==null?void 0:r.connector)==null?void 0:c.name,e=(C=(E=l.state.data)==null?void 0:E.wallet)==null?void 0:C.name,t=(H=(z=l.state.data)==null?void 0:z.network)==null?void 0:H.name,o=e??s,a=Z.getConnectors();return{Connect:`Connect ${a.length===1&&((K=a[0])==null?void 0:K.id)==="w3m-email"?"Email":""} Wallet`,Create:"Create Wallet",ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",ConnectingExternal:o??"Connect Wallet",ConnectingWalletConnect:o??"WalletConnect",ConnectingWalletConnectBasic:"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview convert",Downloads:o?`Get ${o}`:"Downloads",EmailLogin:"Email Login",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Pay:"How you pay",Profile:void 0,SwitchNetwork:t??"Switch Network",SwitchAddress:"Switch Address",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select token",SwapPreview:"Preview swap",WalletSend:"Send",WalletSendPreview:"Review send",WalletSendSelectToken:"Select Token",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",ConnectWallets:"Connect wallet",ConnectSocials:"All socials",ConnectingSocial:se.state.socialProvider?se.state.socialProvider:"Connect Social",ConnectingMultiChain:"Select chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch chain",SmartSessionCreated:void 0,SmartSessionList:"Smart Sessions",SIWXSignMessage:"Sign In",PayLoading:"Payment in progress"}}let h=class extends N{constructor(){super(),this.unsubscribe=[],this.heading=J()[l.state.view],this.network=m.state.activeCaipNetwork,this.networkImage=F.getNetworkImage(this.network),this.showBack=!1,this.prevHistoryLength=1,this.view=l.state.view,this.viewDirection="",this.headerText=J()[l.state.view],this.unsubscribe.push(We.subscribeNetworkImages(()=>{this.networkImage=F.getNetworkImage(this.network)}),l.subscribeKey("view",e=>{setTimeout(()=>{this.view=e,this.headerText=J()[e]},k.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()}),m.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.networkImage=F.getNetworkImage(this.network)}))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return n`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){ne.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),l.push("WhatIsAWallet")}async onClose(){await pe.safeClose()}rightHeaderTemplate(){var t,o,a;const e=(a=(o=(t=I)==null?void 0:t.state)==null?void 0:o.features)==null?void 0:a.smartSessions;return l.state.view!=="Account"||!e?this.closeButtonTemplate():n`<wui-flex>
      <wui-icon-link
        icon="clock"
        @click=${()=>l.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-link>
      ${this.closeButtonTemplate()}
    </wui-flex> `}closeButtonTemplate(){return n`
      <wui-icon-link
        icon="close"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-link>
    `}titleTemplate(){const e=Le.includes(this.view);return n`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="xs"
      >
        <wui-text variant="paragraph-700" color="fg-100" data-testid="w3m-header-text"
          >${this.headerText}</wui-text
        >
        ${e?n`<wui-tag variant="main">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){var C;const{view:e}=l.state,t=e==="Connect",o=I.state.enableEmbedded,a=e==="ApproveTransaction",i=e==="ConnectingSiwe",r=e==="Account",c=I.state.enableNetworkSwitch,E=a||i||t&&o;return r&&c?n`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${Q((C=this.network)==null?void 0:C.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${Q(this.networkImage)}
      ></wui-select>`:this.showBack&&!E?n`<wui-icon-link
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:n`<wui-icon-link
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}onNetworks(){this.isAllowedNetworkSwitch()&&(ne.sendEvent({type:"track",event:"CLICK_NETWORKS"}),l.push("Networks"))}isAllowedNetworkSwitch(){const e=m.getAllRequestedCaipNetworks(),t=e?e.length>1:!1,o=e==null?void 0:e.find(({id:a})=>{var i;return a===((i=this.network)==null?void 0:i.id)});return t||!o}getPadding(){return this.heading?["l","2l","l","2l"]:["0","2l","0","2l"]}onViewChange(){const{history:e}=l.state;let t=k.VIEW_DIRECTION.Next;e.length<this.prevHistoryLength&&(t=k.VIEW_DIRECTION.Prev),this.prevHistoryLength=e.length,this.viewDirection=t}async onHistoryChange(){var o;const{history:e}=l.state,t=(o=this.shadowRoot)==null?void 0:o.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){l.goBack()}};h.styles=je;b([d()],h.prototype,"heading",void 0);b([d()],h.prototype,"network",void 0);b([d()],h.prototype,"networkImage",void 0);b([d()],h.prototype,"showBack",void 0);b([d()],h.prototype,"prevHistoryLength",void 0);b([d()],h.prototype,"view",void 0);b([d()],h.prototype,"viewDirection",void 0);b([d()],h.prototype,"headerText",void 0);h=b([u("w3m-header")],h);const Ue=_`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-005);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);

    max-width: 300px;
  }

  :host wui-loading-spinner {
    margin-left: var(--wui-spacing-3xs);
  }
`;var R=function(s,e,t,o){var a=arguments.length,i=a<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,o);else for(var c=s.length-1;c>=0;c--)(r=s[c])&&(i=(a<3?r(i):a>3?r(e,t,i):r(e,t))||i);return a>3&&i&&Object.defineProperty(e,t,i),i};let g=class extends D{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message="",this.loading=!1,this.iconType="default"}render(){return f`
      ${this.templateIcon()}
      <wui-text variant="paragraph-500" color="fg-100" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){return this.loading?f`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:this.iconType==="default"?f`<wui-icon size="xl" color=${this.iconColor} name=${this.icon}></wui-icon>`:f`<wui-icon-box
      size="sm"
      iconSize="xs"
      iconColor=${this.iconColor}
      backgroundColor=${this.backgroundColor}
      icon=${this.icon}
      background="opaque"
    ></wui-icon-box>`}};g.styles=[B,Ue];R([w()],g.prototype,"backgroundColor",void 0);R([w()],g.prototype,"iconColor",void 0);R([w()],g.prototype,"icon",void 0);R([w()],g.prototype,"message",void 0);R([w()],g.prototype,"loading",void 0);R([w()],g.prototype,"iconType",void 0);g=R([u("wui-snackbar")],g);const ze=O`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var ve=function(s,e,t,o){var a=arguments.length,i=a<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,o);else for(var c=s.length-1;c>=0;c--)(r=s[c])&&(i=(a<3?r(i):a>3?r(e,t,i):r(e,t))||i);return a>3&&i&&Object.defineProperty(e,t,i),i};const He={loading:void 0,success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let q=class extends N{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=A.state.open,this.unsubscribe.push(A.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:t,svg:o}=A.state,a=He[t],{icon:i,iconColor:r}=o??a??{};return n`
      <wui-snackbar
        message=${e}
        backgroundColor=${a==null?void 0:a.backgroundColor}
        iconColor=${r}
        icon=${i}
        .loading=${t==="loading"}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout&&clearTimeout(this.timeout),A.state.autoClose&&(this.timeout=setTimeout(()=>A.hide(),2500))):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};q.styles=ze;ve([d()],q.prototype,"open",void 0);q=ve([u("w3m-snackbar")],q);const Ke=O`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-bg-100);
    position: fixed;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--w3m-modal-width) - var(--wui-spacing-xl));
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: var(--wui-color-bg-150);
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var U=function(s,e,t,o){var a=arguments.length,i=a<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,o);else for(var c=s.length-1;c>=0;c--)(r=s[c])&&(i=(a<3?r(i):a>3?r(e,t,i):r(e,t))||i);return a>3&&i&&Object.defineProperty(e,t,i),i};let $=class extends N{constructor(){super(),this.unsubscribe=[],this.open=T.state.open,this.message=T.state.message,this.triggerRect=T.state.triggerRect,this.variant=T.state.variant,this.unsubscribe.push(T.subscribe(e=>{this.open=e.open,this.message=e.message,this.triggerRect=e.triggerRect,this.variant=e.variant}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){this.dataset.variant=this.variant;const e=this.triggerRect.top,t=this.triggerRect.left;return this.style.cssText=`
    --w3m-tooltip-top: ${e}px;
    --w3m-tooltip-left: ${t}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;
    --w3m-tooltip-display: ${this.open?"flex":"none"};
    --w3m-tooltip-opacity: ${this.open?1:0};
    `,n`<wui-flex>
      <wui-icon data-placement="top" color="fg-100" size="inherit" name="cursor"></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>
    </wui-flex>`}};$.styles=[Ke];U([d()],$.prototype,"open",void 0);U([d()],$.prototype,"message",void 0);U([d()],$.prototype,"triggerRect",void 0);U([d()],$.prototype,"variant",void 0);$=U([u("w3m-tooltip"),u("w3m-tooltip")],$);const Me=O`
  :host {
    --prev-height: 0px;
    --new-height: 0px;
    display: block;
  }

  div.w3m-router-container {
    transform: translateY(0);
    opacity: 1;
  }

  div.w3m-router-container[view-direction='prev'] {
    animation:
      slide-left-out 150ms forwards ease,
      slide-left-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  div.w3m-router-container[view-direction='next'] {
    animation:
      slide-right-out 150ms forwards ease,
      slide-right-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(10px);
      opacity: 0;
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(-10px);
      opacity: 0;
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;var te=function(s,e,t,o){var a=arguments.length,i=a<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,o);else for(var c=s.length-1;c>=0;c--)(r=s[c])&&(i=(a<3?r(i):a>3?r(e,t,i):r(e,t))||i);return a>3&&i&&Object.defineProperty(e,t,i),i};let P=class extends N{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=l.state.view,this.viewDirection="",this.unsubscribe.push(l.subscribeKey("view",e=>this.onViewChange(e)))}firstUpdated(){var e;this.resizeObserver=new ResizeObserver(([t])=>{const o=`${t==null?void 0:t.contentRect.height}px`;this.prevHeight!=="0px"&&(this.style.setProperty("--prev-height",this.prevHeight),this.style.setProperty("--new-height",o),this.style.animation="w3m-view-height 150ms forwards ease",this.style.height="auto"),setTimeout(()=>{this.prevHeight=o,this.style.animation="unset"},k.ANIMATION_DURATIONS.ModalHeight)}),(e=this.resizeObserver)==null||e.observe(this.getWrapper())}disconnectedCallback(){var e;(e=this.resizeObserver)==null||e.unobserve(this.getWrapper()),this.unsubscribe.forEach(t=>t())}render(){return n`<div class="w3m-router-container" view-direction="${this.viewDirection}">
      ${this.viewTemplate()}
    </div>`}viewTemplate(){switch(this.view){case"AccountSettings":return n`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return n`<w3m-account-view></w3m-account-view>`;case"AllWallets":return n`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return n`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return n`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return n`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":return n`<w3m-connect-view></w3m-connect-view>`;case"Create":return n`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return n`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingWalletConnectBasic":return n`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case"ConnectingExternal":return n`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return n`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return n`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return n`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return n`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"Downloads":return n`<w3m-downloads-view></w3m-downloads-view>`;case"EmailLogin":return n`<w3m-email-login-view></w3m-email-login-view>`;case"EmailVerifyOtp":return n`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return n`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return n`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return n`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return n`<w3m-network-switch-view></w3m-network-switch-view>`;case"Profile":return n`<w3m-profile-view></w3m-profile-view>`;case"SwitchAddress":return n`<w3m-switch-address-view></w3m-switch-address-view>`;case"Transactions":return n`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return n`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampActivity":return n`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;case"OnRampTokenSelect":return n`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return n`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return n`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return n`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return n`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return n`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return n`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return n`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return n`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return n`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return n`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return n`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return n`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WhatIsABuy":return n`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return n`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return n`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return n`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return n`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return n`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return n`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return n`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return n`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return n`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return n`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return n`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return n`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;case"Pay":return n`<w3m-pay-view></w3m-pay-view>`;case"PayLoading":return n`<w3m-pay-loading-view></w3m-pay-loading-view>`;default:return n`<w3m-connect-view></w3m-connect-view>`}}onViewChange(e){T.hide();let t=k.VIEW_DIRECTION.Next;const{history:o}=l.state;o.length<this.prevHistoryLength&&(t=k.VIEW_DIRECTION.Prev),this.prevHistoryLength=o.length,this.viewDirection=t,setTimeout(()=>{this.view=e},k.ANIMATION_DURATIONS.ViewTransition)}getWrapper(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("div")}};P.styles=Me;te([d()],P.prototype,"view",void 0);te([d()],P.prototype,"viewDirection",void 0);P=te([u("w3m-router")],P);const Ve=O`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  :host(.appkit-modal) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host(.appkit-modal) wui-card {
    max-width: 400px;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: var(--local-border-bottom-mobile-radius);
      border-bottom-right-radius: var(--local-border-bottom-mobile-radius);
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`;var x=function(s,e,t,o){var a=arguments.length,i=a<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,o);else for(var c=s.length-1;c>=0;c--)(r=s[c])&&(i=(a<3?r(i):a>3?r(e,t,i):r(e,t))||i);return a>3&&i&&Object.defineProperty(e,t,i),i};const re="scroll-lock";class y extends N{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=I.state.enableEmbedded,this.open=v.state.open,this.caipAddress=m.state.activeCaipAddress,this.caipNetwork=m.state.activeCaipNetwork,this.shake=v.state.shake,this.filterByNamespace=Z.state.filterByNamespace,this.initializeTheming(),V.prefetchAnalyticsConfig(),this.unsubscribe.push(v.subscribeKey("open",e=>e?this.onOpen():this.onClose()),v.subscribeKey("shake",e=>this.shake=e),m.subscribeKey("activeCaipNetwork",e=>this.onNewNetwork(e)),m.subscribeKey("activeCaipAddress",e=>this.onNewAddress(e)),I.subscribeKey("enableEmbedded",e=>this.enableEmbedded=e),Z.subscribeKey("filterByNamespace",e=>{var t;this.filterByNamespace!==e&&!((t=m.getAccountData(e))!=null&&t.caipAddress)&&(V.fetchRecommendedWallets(),this.filterByNamespace=e)}))}firstUpdated(){if(this.caipAddress){if(this.enableEmbedded){v.close(),this.prefetch();return}this.onNewAddress(this.caipAddress)}this.open&&this.onOpen(),this.enableEmbedded&&this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.style.cssText=`
      --local-border-bottom-mobile-radius: ${this.enableEmbedded?"clamp(0px, var(--wui-border-radius-l), 44px)":"0px"};
    `,this.enableEmbedded?n`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?n`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return n` <wui-card
      shake="${this.shake}"
      data-embedded="${Q(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){await pe.safeClose()}initializeTheming(){const{themeVariables:e,themeMode:t}=$e.state,o=be.getColorTheme(t);Re(e,o)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),A.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=re,e.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${re}"]`);e&&e.remove()}onAddKeyboardListener(){var t;this.abortController=new AbortController;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-card");e==null||e.focus(),window.addEventListener("keydown",o=>{if(o.key==="Escape")this.handleClose();else if(o.key==="Tab"){const{tagName:a}=o.target;a&&!a.includes("W3M-")&&!a.includes("WUI-")&&(e==null||e.focus())}},this.abortController)}onRemoveKeyboardListener(){var e;(e=this.abortController)==null||e.abort(),this.abortController=void 0}async onNewAddress(e){const t=m.state.isSwitchingNamespace,o=Ae.getPlainAddress(e);!o&&!t?v.close():t&&o&&l.goBack(),await de.initializeIfEnabled(),this.caipAddress=e,m.setIsSwitchingNamespace(!1)}onNewNetwork(e){var ie,oe,ae;const t=this.caipNetwork,o=(ie=t==null?void 0:t.caipNetworkId)==null?void 0:ie.toString(),a=t==null?void 0:t.chainNamespace,i=(oe=e==null?void 0:e.caipNetworkId)==null?void 0:oe.toString(),r=e==null?void 0:e.chainNamespace,c=o!==i,C=c&&!(a!==r),z=(t==null?void 0:t.name)===Te.UNSUPPORTED_NETWORK_NAME,H=l.state.view==="ConnectingExternal",K=!((ae=m.getAccountData(e==null?void 0:e.chainNamespace))!=null&&ae.caipAddress),fe=l.state.view==="UnsupportedChain",ge=v.state.open;let M=!1;ge&&!H&&(K?c&&(M=!0):(fe||C&&!z)&&(M=!0)),M&&l.state.view!=="SIWXSignMessage"&&l.goBack(),this.caipNetwork=e}prefetch(){this.hasPrefetched||(V.prefetch(),V.fetchWalletsByPage({page:1}),this.hasPrefetched=!0)}}y.styles=Ve;x([ye({type:Boolean})],y.prototype,"enableEmbedded",void 0);x([d()],y.prototype,"open",void 0);x([d()],y.prototype,"caipAddress",void 0);x([d()],y.prototype,"caipNetwork",void 0);x([d()],y.prototype,"shake",void 0);x([d()],y.prototype,"filterByNamespace",void 0);let ce=class extends y{};ce=x([u("w3m-modal")],ce);let le=class extends y{};le=x([u("appkit-modal")],le);export{le as AppKitModal,ce as W3mModal,y as W3mModalBase};
