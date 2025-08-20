import{n as c,c as C,a as B,r as x,i as O,o as E,x as u,b as _e,U as ue,e as Xi,f as Zi,d as en}from"./index-DiG6kiLs.js";import{E as Mt,i as A,e as V,r as z,a as j,x as v,C as P,A as T,O as X,b as I,c as Z,R as k,d as Ue,f as U,g as S,S as vt,h as tn,W as yt,j as Ut,k as pi,T as Ft,l as it,M as Ri,m as _i,n as Ne,o as nn}from"./core-Bn9v_PDz.js";import"./index-DAQpu9e7.js";import"./index.es-D0gEBoHY.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ii(r){return c({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const de=r=>r??Mt,on=A`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`;var Ie=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let he=class extends j{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="xxs";return this.size==="lg"?e="m":this.size==="md"?e="xs":e="xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),v`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?v`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?v`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:v`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};he.styles=[V,z,on];Ie([c()],he.prototype,"size",void 0);Ie([c()],he.prototype,"name",void 0);Ie([c()],he.prototype,"imageSrc",void 0);Ie([c()],he.prototype,"walletIcon",void 0);Ie([c({type:Boolean})],he.prototype,"installed",void 0);Ie([c()],he.prototype,"badgeSize",void 0);he=Ie([C("wui-wallet-image")],he);const rn=A`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var Ei=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};const Bt=4;let nt=class extends j{constructor(){super(...arguments),this.walletImages=[]}render(){const e=this.walletImages.length<Bt;return v`${this.walletImages.slice(0,Bt).map(({src:i,walletName:n})=>v`
            <wui-wallet-image
              size="inherit"
              imageSrc=${i}
              name=${de(n)}
            ></wui-wallet-image>
          `)}
      ${e?[...Array(Bt-this.walletImages.length)].map(()=>v` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};nt.styles=[z,rn];Ei([c({type:Array})],nt.prototype,"walletImages",void 0);nt=Ei([C("wui-all-wallets-image")],nt);const an=A`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`;var q=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let N=class extends j{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.tabIdx=void 0,this.installed=!1,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100"}render(){return v`
      <button ?disabled=${this.disabled} tabindex=${de(this.tabIdx)}>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?v` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?v` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?v`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?v`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.loading?v`<wui-loading-spinner
        size="lg"
        color=${this.loadingSpinnerColor}
      ></wui-loading-spinner>`:this.tagLabel&&this.tagVariant?v`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?v`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};N.styles=[z,V,an];q([c({type:Array})],N.prototype,"walletImages",void 0);q([c()],N.prototype,"imageSrc",void 0);q([c()],N.prototype,"name",void 0);q([c()],N.prototype,"tagLabel",void 0);q([c()],N.prototype,"tagVariant",void 0);q([c()],N.prototype,"icon",void 0);q([c()],N.prototype,"walletIcon",void 0);q([c()],N.prototype,"tabIdx",void 0);q([c({type:Boolean})],N.prototype,"installed",void 0);q([c({type:Boolean})],N.prototype,"disabled",void 0);q([c({type:Boolean})],N.prototype,"showAllWallets",void 0);q([c({type:Boolean})],N.prototype,"loading",void 0);q([c({type:String})],N.prototype,"loadingSpinnerColor",void 0);N=q([C("wui-list-wallet")],N);var je=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let ye=class extends O{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=P.state.connectors,this.count=T.state.count,this.filteredCount=T.state.filteredWallets.length,this.isFetchingRecommendedWallets=T.state.isFetchingRecommendedWallets,this.unsubscribe.push(P.subscribeKey("connectors",e=>this.connectors=e),T.subscribeKey("count",e=>this.count=e),T.subscribeKey("filteredWallets",e=>this.filteredCount=e.length),T.subscribeKey("isFetchingRecommendedWallets",e=>this.isFetchingRecommendedWallets=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.find(l=>l.id==="walletConnect"),{allWallets:i}=X.state;if(!e||i==="HIDE"||i==="ONLY_MOBILE"&&!I.isMobile())return null;const n=T.state.featured.length,o=this.count+n,t=o<10?o:Math.floor(o/10)*10,a=this.filteredCount>0?this.filteredCount:t;let s=`${a}`;return this.filteredCount>0?s=`${this.filteredCount}`:a<o&&(s=`${a}+`),u`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${s}
        tagVariant="shade"
        data-testid="all-wallets"
        tabIdx=${E(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        loadingSpinnerColor=${this.isFetchingRecommendedWallets?"fg-300":"accent-100"}
      ></wui-list-wallet>
    `}onAllWallets(){Z.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),k.push("AllWallets")}};je([B()],ye.prototype,"tabIdx",void 0);je([x()],ye.prototype,"connectors",void 0);je([x()],ye.prototype,"count",void 0);je([x()],ye.prototype,"filteredCount",void 0);je([x()],ye.prototype,"isFetchingRecommendedWallets",void 0);ye=je([C("w3m-all-wallets-widget")],ye);var Zt=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let ot=class extends O{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=P.state.connectors,this.unsubscribe.push(P.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.filter(i=>i.type==="ANNOUNCED");return e!=null&&e.length?u`
      <wui-flex flexDirection="column" gap="xs">
        ${e.filter(Ue.showConnector).map(i=>u`
              <wui-list-wallet
                imageSrc=${E(U.getConnectorImage(i))}
                name=${i.name??"Unknown"}
                @click=${()=>this.onConnector(i)}
                tagVariant="success"
                tagLabel="installed"
                data-testid=${`wallet-selector-${i.id}`}
                .installed=${!0}
                tabIdx=${E(this.tabIdx)}
              >
              </wui-list-wallet>
            `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){e.id==="walletConnect"?I.isMobile()?k.push("AllWallets"):k.push("ConnectingWalletConnect"):k.push("ConnectingExternal",{connector:e})}};Zt([B()],ot.prototype,"tabIdx",void 0);Zt([x()],ot.prototype,"connectors",void 0);ot=Zt([C("w3m-connect-announced-widget")],ot);var xt=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Fe=class extends O{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=P.state.connectors,this.loading=!1,this.unsubscribe.push(P.subscribeKey("connectors",e=>this.connectors=e)),I.isTelegram()&&I.isIos()&&(this.loading=!S.state.wcUri,this.unsubscribe.push(S.subscribeKey("wcUri",e=>this.loading=!e)))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{customWallets:e}=X.state;if(!(e!=null&&e.length))return this.style.cssText="display: none",null;const i=this.filterOutDuplicateWallets(e);return u`<wui-flex flexDirection="column" gap="xs">
      ${i.map(n=>u`
          <wui-list-wallet
            imageSrc=${E(U.getWalletImage(n))}
            name=${n.name??"Unknown"}
            @click=${()=>this.onConnectWallet(n)}
            data-testid=${`wallet-selector-${n.id}`}
            tabIdx=${E(this.tabIdx)}
            ?loading=${this.loading}
          >
          </wui-list-wallet>
        `)}
    </wui-flex>`}filterOutDuplicateWallets(e){const i=vt.getRecentWallets(),n=this.connectors.map(s=>{var l;return(l=s.info)==null?void 0:l.rdns}).filter(Boolean),o=i.map(s=>s.rdns).filter(Boolean),t=n.concat(o);if(t.includes("io.metamask.mobile")&&I.isMobile()){const s=t.indexOf("io.metamask.mobile");t[s]="io.metamask"}return e.filter(s=>!t.includes(String(s==null?void 0:s.rdns)))}onConnectWallet(e){this.loading||k.push("ConnectingWalletConnect",{wallet:e})}};xt([B()],Fe.prototype,"tabIdx",void 0);xt([x()],Fe.prototype,"connectors",void 0);xt([x()],Fe.prototype,"loading",void 0);Fe=xt([C("w3m-connect-custom-widget")],Fe);var ei=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let rt=class extends O{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=P.state.connectors,this.unsubscribe.push(P.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const n=this.connectors.filter(o=>o.type==="EXTERNAL").filter(Ue.showConnector).filter(o=>o.id!==tn.CONNECTOR_ID.COINBASE_SDK);return n!=null&&n.length?u`
      <wui-flex flexDirection="column" gap="xs">
        ${n.map(o=>u`
            <wui-list-wallet
              imageSrc=${E(U.getConnectorImage(o))}
              .installed=${!0}
              name=${o.name??"Unknown"}
              data-testid=${`wallet-selector-external-${o.id}`}
              @click=${()=>this.onConnector(o)}
              tabIdx=${E(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){k.push("ConnectingExternal",{connector:e})}};ei([B()],rt.prototype,"tabIdx",void 0);ei([x()],rt.prototype,"connectors",void 0);rt=ei([C("w3m-connect-external-widget")],rt);var ti=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let at=class extends O{constructor(){super(...arguments),this.tabIdx=void 0,this.wallets=[]}render(){return this.wallets.length?u`
      <wui-flex flexDirection="column" gap="xs">
        ${this.wallets.map(e=>u`
            <wui-list-wallet
              data-testid=${`wallet-selector-featured-${e.id}`}
              imageSrc=${E(U.getWalletImage(e))}
              name=${e.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
              tabIdx=${E(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(e){P.selectWalletConnector(e)}};ti([B()],at.prototype,"tabIdx",void 0);ti([B()],at.prototype,"wallets",void 0);at=ti([C("w3m-connect-featured-widget")],at);var ii=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let st=class extends O{constructor(){super(...arguments),this.tabIdx=void 0,this.connectors=[]}render(){const e=this.connectors.filter(Ue.showConnector);return e.length===0?(this.style.cssText="display: none",null):u`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(i=>u`
            <wui-list-wallet
              imageSrc=${E(U.getConnectorImage(i))}
              .installed=${!0}
              name=${i.name??"Unknown"}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${i.id}`}
              @click=${()=>this.onConnector(i)}
              tabIdx=${E(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnector(e){P.setActiveConnector(e),k.push("ConnectingExternal",{connector:e})}};ii([B()],st.prototype,"tabIdx",void 0);ii([B()],st.prototype,"connectors",void 0);st=ii([C("w3m-connect-injected-widget")],st);var ni=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let lt=class extends O{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=P.state.connectors,this.unsubscribe.push(P.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.filter(i=>i.type==="MULTI_CHAIN"&&i.name!=="WalletConnect");return e!=null&&e.length?u`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(i=>u`
            <wui-list-wallet
              imageSrc=${E(U.getConnectorImage(i))}
              .installed=${!0}
              name=${i.name??"Unknown"}
              tagVariant="shade"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${i.id}`}
              @click=${()=>this.onConnector(i)}
              tabIdx=${E(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){P.setActiveConnector(e),k.push("ConnectingMultiChain")}};ni([B()],lt.prototype,"tabIdx",void 0);ni([x()],lt.prototype,"connectors",void 0);lt=ni([C("w3m-connect-multi-chain-widget")],lt);var Ct=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Ve=class extends O{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=P.state.connectors,this.loading=!1,this.unsubscribe.push(P.subscribeKey("connectors",e=>this.connectors=e)),I.isTelegram()&&I.isIos()&&(this.loading=!S.state.wcUri,this.unsubscribe.push(S.subscribeKey("wcUri",e=>this.loading=!e)))}render(){const i=vt.getRecentWallets().filter(n=>!yt.isExcluded(n)).filter(n=>!this.hasWalletConnector(n)).filter(n=>this.isWalletCompatibleWithCurrentChain(n));return i.length?u`
      <wui-flex flexDirection="column" gap="xs">
        ${i.map(n=>u`
            <wui-list-wallet
              imageSrc=${E(U.getWalletImage(n))}
              name=${n.name??"Unknown"}
              @click=${()=>this.onConnectWallet(n)}
              tagLabel="recent"
              tagVariant="shade"
              tabIdx=${E(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(e){this.loading||P.selectWalletConnector(e)}hasWalletConnector(e){return this.connectors.some(i=>i.id===e.id||i.name===e.name)}isWalletCompatibleWithCurrentChain(e){const i=Ut.state.activeChain;return i&&e.chains?e.chains.some(n=>{const o=n.split(":")[0];return i===o}):!0}};Ct([B()],Ve.prototype,"tabIdx",void 0);Ct([x()],Ve.prototype,"connectors",void 0);Ct([x()],Ve.prototype,"loading",void 0);Ve=Ct([C("w3m-connect-recent-widget")],Ve);var $t=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let qe=class extends O{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.wallets=[],this.loading=!1,I.isTelegram()&&I.isIos()&&(this.loading=!S.state.wcUri,this.unsubscribe.push(S.subscribeKey("wcUri",e=>this.loading=!e)))}render(){const{connectors:e}=P.state,{customWallets:i,featuredWalletIds:n}=X.state,o=vt.getRecentWallets(),t=e.find(_=>_.id==="walletConnect"),s=e.filter(_=>_.type==="INJECTED"||_.type==="ANNOUNCED"||_.type==="MULTI_CHAIN").filter(_=>_.name!=="Browser Wallet");if(!t)return null;if(n||i||!this.wallets.length)return this.style.cssText="display: none",null;const l=s.length+o.length,h=Math.max(0,2-l),d=yt.filterOutDuplicateWallets(this.wallets).slice(0,h);return d.length?u`
      <wui-flex flexDirection="column" gap="xs">
        ${d.map(_=>u`
            <wui-list-wallet
              imageSrc=${E(U.getWalletImage(_))}
              name=${(_==null?void 0:_.name)??"Unknown"}
              @click=${()=>this.onConnectWallet(_)}
              tabIdx=${E(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(e){if(this.loading)return;const i=P.getConnector(e.id,e.rdns);i?k.push("ConnectingExternal",{connector:i}):k.push("ConnectingWalletConnect",{wallet:e})}};$t([B()],qe.prototype,"tabIdx",void 0);$t([B()],qe.prototype,"wallets",void 0);$t([x()],qe.prototype,"loading",void 0);qe=$t([C("w3m-connect-recommended-widget")],qe);var Rt=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let He=class extends O{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=P.state.connectors,this.connectorImages=pi.state.connectorImages,this.unsubscribe.push(P.subscribeKey("connectors",e=>this.connectors=e),pi.subscribeKey("connectorImages",e=>this.connectorImages=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(I.isMobile())return this.style.cssText="display: none",null;const e=this.connectors.find(n=>n.id==="walletConnect");if(!e)return this.style.cssText="display: none",null;const i=e.imageUrl||this.connectorImages[(e==null?void 0:e.imageId)??""];return u`
      <wui-list-wallet
        imageSrc=${E(i)}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        tabIdx=${E(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `}onConnector(e){P.setActiveConnector(e),k.push("ConnectingWalletConnect")}};Rt([B()],He.prototype,"tabIdx",void 0);Rt([x()],He.prototype,"connectors",void 0);Rt([x()],He.prototype,"connectorImages",void 0);He=Rt([C("w3m-connect-walletconnect-widget")],He);const sn=_e`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var Ge=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let xe=class extends O{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=P.state.connectors,this.recommended=T.state.recommended,this.featured=T.state.featured,this.unsubscribe.push(P.subscribeKey("connectors",e=>this.connectors=e),T.subscribeKey("recommended",e=>this.recommended=e),T.subscribeKey("featured",e=>this.featured=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return u`
      <wui-flex flexDirection="column" gap="xs"> ${this.connectorListTemplate()} </wui-flex>
    `}connectorListTemplate(){const{custom:e,recent:i,announced:n,injected:o,multiChain:t,recommended:a,featured:s,external:l}=Ue.getConnectorsByType(this.connectors,this.recommended,this.featured);return Ue.getConnectorTypeOrder({custom:e,recent:i,announced:n,injected:o,multiChain:t,recommended:a,featured:s,external:l}).map(d=>{switch(d){case"injected":return u`
            ${t.length?u`<w3m-connect-multi-chain-widget
                  tabIdx=${E(this.tabIdx)}
                ></w3m-connect-multi-chain-widget>`:null}
            ${n.length?u`<w3m-connect-announced-widget
                  tabIdx=${E(this.tabIdx)}
                ></w3m-connect-announced-widget>`:null}
            ${o.length?u`<w3m-connect-injected-widget
                  .connectors=${o}
                  tabIdx=${E(this.tabIdx)}
                ></w3m-connect-injected-widget>`:null}
          `;case"walletConnect":return u`<w3m-connect-walletconnect-widget
            tabIdx=${E(this.tabIdx)}
          ></w3m-connect-walletconnect-widget>`;case"recent":return u`<w3m-connect-recent-widget
            tabIdx=${E(this.tabIdx)}
          ></w3m-connect-recent-widget>`;case"featured":return u`<w3m-connect-featured-widget
            .wallets=${s}
            tabIdx=${E(this.tabIdx)}
          ></w3m-connect-featured-widget>`;case"custom":return u`<w3m-connect-custom-widget
            tabIdx=${E(this.tabIdx)}
          ></w3m-connect-custom-widget>`;case"external":return u`<w3m-connect-external-widget
            tabIdx=${E(this.tabIdx)}
          ></w3m-connect-external-widget>`;case"recommended":return u`<w3m-connect-recommended-widget
            .wallets=${a}
            tabIdx=${E(this.tabIdx)}
          ></w3m-connect-recommended-widget>`;default:return console.warn(`Unknown connector type: ${d}`),null}})}};xe.styles=sn;Ge([B()],xe.prototype,"tabIdx",void 0);Ge([x()],xe.prototype,"connectors",void 0);Ge([x()],xe.prototype,"recommended",void 0);Ge([x()],xe.prototype,"featured",void 0);xe=Ge([C("w3m-connector-list")],xe);const ln=A`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var me=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let ne=class extends j{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,i)=>{var o;const n=i===this.activeTab;return v`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(i)}
          data-active=${n}
          data-testid="tab-${(o=e.label)==null?void 0:o.toLowerCase()}"
        >
          ${this.iconTemplate(e)}
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}iconTemplate(e){return e.icon?v`<wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>`:null}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,i){const n=this.buttons[this.activeTab],o=this.buttons[e],t=n==null?void 0:n.querySelector("wui-text"),a=o==null?void 0:o.querySelector("wui-text"),s=o==null?void 0:o.getBoundingClientRect(),l=a==null?void 0:a.getBoundingClientRect();n&&t&&!i&&e!==this.activeTab&&(t.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),n.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),o&&s&&l&&a&&(e!==this.activeTab||i)&&(this.localTabWidth=`${Math.round(s.width+l.width)+6}px`,o.animate([{width:`${s.width+l.width}px`}],{duration:i?0:500,fill:"forwards",easing:"ease"}),a.animate([{opacity:1}],{duration:i?0:125,delay:i?0:200,fill:"forwards",easing:"ease"}))}};ne.styles=[z,V,ln];me([c({type:Array})],ne.prototype,"tabs",void 0);me([c()],ne.prototype,"onTabChange",void 0);me([c({type:Array})],ne.prototype,"buttons",void 0);me([c({type:Boolean})],ne.prototype,"disabled",void 0);me([c()],ne.prototype,"localTabWidth",void 0);me([Ii()],ne.prototype,"activeTab",void 0);me([Ii()],ne.prototype,"isDense",void 0);ne=me([C("wui-tabs")],ne);var oi=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let ct=class extends O{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.generateTabs();return u`
      <wui-flex justifyContent="center" .padding=${["0","0","l","0"]}>
        <wui-tabs .tabs=${e} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map(i=>i==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:i==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:i==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:i==="web"?{label:"Webapp",icon:"browser",platform:"web"}:i==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:i})=>i),e}onTabChange(e){var n;const i=this.platformTabs[e];i&&((n=this.onSelectPlatfrom)==null||n.call(this,i))}};oi([B({type:Array})],ct.prototype,"platforms",void 0);oi([B()],ct.prototype,"onSelectPlatfrom",void 0);ct=oi([C("w3m-connecting-header")],ct);const cn=A`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: none;
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
    height: 36px;
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='inverse'] {
    background-color: var(--wui-color-inverse-100);
    color: var(--wui-color-inverse-000);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='accent-error'] {
    background: var(--wui-color-error-glass-015);
    color: var(--wui-color-error-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-error-glass-010);
  }

  button[data-variant='accent-success'] {
    background: var(--wui-color-success-glass-015);
    color: var(--wui-color-success-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-success-glass-010);
  }

  button[data-variant='neutral'] {
    background: transparent;
    color: var(--wui-color-fg-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-variant='main']:focus-visible:enabled {
    background-color: var(--wui-color-accent-090);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='inverse']:focus-visible:enabled {
    background-color: var(--wui-color-inverse-100);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent']:focus-visible:enabled {
    background-color: var(--wui-color-accent-glass-010);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent-error']:focus-visible:enabled {
    background: var(--wui-color-error-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-error-100),
      0 0 0 4px var(--wui-color-error-glass-020);
  }
  button[data-variant='accent-success']:focus-visible:enabled {
    background: var(--wui-color-success-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-success-100),
      0 0 0 4px var(--wui-color-success-glass-020);
  }
  button[data-variant='neutral']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='accent-error']:hover:enabled {
      background: var(--wui-color-error-glass-020);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-error']:active:enabled {
      background: var(--wui-color-error-glass-030);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-success']:hover:enabled {
      background: var(--wui-color-success-glass-020);
      color: var(--wui-color-success-100);
    }

    button[data-variant='accent-success']:active:enabled {
      background: var(--wui-color-success-glass-030);
      color: var(--wui-color-success-100);
    }

    button[data-variant='neutral']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='neutral']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }

    button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
      padding-left: var(--wui-spacing-m);
    }

    button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
      padding-right: var(--wui-spacing-m);
    }
  }

  /* -- Disabled state --------------------------------------------------- */
  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    color: var(--wui-color-gray-glass-020);
    cursor: not-allowed;
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var oe=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};const fi={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020"},un={lg:"paragraph-600",md:"small-600"},dn={lg:"md",md:"md"};let G=class extends j{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="main",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};
    --local-border-radius: var(--wui-border-radius-${this.borderRadius});
    `;const e=this.textVariant??un[this.size];return v`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled}
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){const e=dn[this.size],i=this.disabled?fi.disabled:fi[this.variant];return v`<wui-loading-spinner color=${i} size=${e}></wui-loading-spinner>`}return v``}};G.styles=[z,V,cn];oe([c()],G.prototype,"size",void 0);oe([c({type:Boolean})],G.prototype,"disabled",void 0);oe([c({type:Boolean})],G.prototype,"fullWidth",void 0);oe([c({type:Boolean})],G.prototype,"loading",void 0);oe([c()],G.prototype,"variant",void 0);oe([c({type:Boolean})],G.prototype,"hasIconLeft",void 0);oe([c({type:Boolean})],G.prototype,"hasIconRight",void 0);oe([c()],G.prototype,"borderRadius",void 0);oe([c()],G.prototype,"textVariant",void 0);G=oe([C("wui-button")],G);const hn=A`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var _t=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let We=class extends j{constructor(){super(...arguments),this.tabIdx=void 0,this.disabled=!1,this.color="inherit"}render(){return v`
      <button ?disabled=${this.disabled} tabindex=${de(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};We.styles=[z,V,hn];_t([c()],We.prototype,"tabIdx",void 0);_t([c({type:Boolean})],We.prototype,"disabled",void 0);_t([c()],We.prototype,"color",void 0);We=_t([C("wui-link")],We);const pn=A`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var Wi=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let ut=class extends j{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,n=36-e,o=116+n,t=245+n,a=360+n*1.75;return v`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${o} ${t}"
          stroke-dashoffset=${a}
        />
      </svg>
    `}};ut.styles=[z,pn];Wi([c({type:Number})],ut.prototype,"radius",void 0);ut=Wi([C("wui-loading-thumbnail")],ut);const fn=A`
  button {
    border: none;
    border-radius: var(--wui-border-radius-3xl);
  }

  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='gray'] {
    background-color: transparent;
    color: var(--wui-color-fg-200);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='shade'] {
    background-color: transparent;
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-size='sm'] {
    height: 32px;
    padding: 0 var(--wui-spacing-s);
  }

  button[data-size='md'] {
    height: 40px;
    padding: 0 var(--wui-spacing-l);
  }

  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='main'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='gray'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:focus-visible {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='shade']:focus-visible,
    button[data-variant='gray']:focus-visible,
    button[data-variant='shade']:hover,
    button[data-variant='gray']:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    button[data-variant='gray']:active,
    button[data-variant='shade']:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  button.disabled {
    color: var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    pointer-events: none;
  }
`;var Ee=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let pe=class extends j{constructor(){super(...arguments),this.variant="accent",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.size="md",this.text=""}render(){const e=this.size==="sm"?"small-600":"paragraph-600";return v`
      <button
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc?v`<wui-image src=${this.imageSrc}></wui-image>`:null}
        <wui-text variant=${e} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};pe.styles=[z,V,fn];Ee([c()],pe.prototype,"variant",void 0);Ee([c()],pe.prototype,"imageSrc",void 0);Ee([c({type:Boolean})],pe.prototype,"disabled",void 0);Ee([c()],pe.prototype,"icon",void 0);Ee([c()],pe.prototype,"size",void 0);Ee([c()],pe.prototype,"text",void 0);pe=Ee([C("wui-chip-button")],pe);const gn=A`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var It=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Se=class extends j{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return v`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `}};Se.styles=[z,V,gn];It([c({type:Boolean})],Se.prototype,"disabled",void 0);It([c()],Se.prototype,"label",void 0);It([c()],Se.prototype,"buttonLabel",void 0);Se=It([C("wui-cta-button")],Se);const wn=_e`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var Si=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let dt=class extends O{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:i,play_store:n,chrome_store:o,homepage:t}=this.wallet,a=I.isMobile(),s=I.isIos(),l=I.isAndroid(),h=[i,n,t,o].filter(Boolean).length>1,d=ue.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return h&&!a?u`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${()=>k.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!h&&t?u`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:i&&s?u`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:n&&l?u`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&I.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&I.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&I.openHref(this.wallet.homepage,"_blank")}};dt.styles=[wn];Si([B({type:Object})],dt.prototype,"wallet",void 0);dt=Si([C("w3m-mobile-download-links")],dt);const bn=_e`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var re=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};class M extends O{constructor(){var e,i,n,o,t;super(),this.wallet=(e=k.state.data)==null?void 0:e.wallet,this.connector=(i=k.state.data)==null?void 0:i.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=U.getWalletImage(this.wallet)??U.getConnectorImage(this.connector),this.name=((n=this.wallet)==null?void 0:n.name)??((o=this.connector)==null?void 0:o.name)??"Wallet",this.isRetrying=!1,this.uri=S.state.wcUri,this.error=S.state.wcError,this.ready=!1,this.showRetry=!1,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(S.subscribeKey("wcUri",a=>{var s;this.uri=a,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,(s=this.onConnect)==null||s.call(this))}),S.subscribeKey("wcError",a=>this.error=a)),(I.isTelegram()||I.isSafari())&&I.isIos()&&S.state.wcUri&&((t=this.onConnect)==null||t.call(this))}firstUpdated(){var e;(e=this.onAutoConnect)==null||e.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),S.setWcError(!1),clearTimeout(this.timeout)}render(){var n;(n=this.onRender)==null||n.call(this),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let i=`Continue in ${this.name}`;return this.error&&(i="Connection declined"),u`
      <wui-flex
        data-error=${E(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${E(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${i}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?u`
              <wui-button
                variant="accent"
                size="md"
                ?disabled=${this.isRetrying||this.isLoading}
                @click=${this.onTryAgain.bind(this)}
                data-testid="w3m-connecting-widget-secondary-button"
              >
                <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
                ${this.secondaryBtnLabel}
              </wui-button>
            `:null}
      </wui-flex>

      ${this.isWalletConnect?u`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200" data-testid="wui-link-copy">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){var e;if(this.error&&!this.showRetry){this.showRetry=!0;const i=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-button");i==null||i.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){var e,i;S.setWcError(!1),this.onRetry?(this.isRetrying=!0,(e=this.onRetry)==null||e.call(this)):(i=this.onConnect)==null||i.call(this)}loaderTemplate(){const e=Ft.state.themeVariables["--w3m-border-radius-master"],i=e?parseInt(e.replace("px",""),10):4;return u`<wui-loading-thumbnail radius=${i*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(I.copyToClopboard(this.uri),it.showSuccess("Link copied"))}catch{it.showError("Failed to copy")}}}M.styles=bn;re([x()],M.prototype,"isRetrying",void 0);re([x()],M.prototype,"uri",void 0);re([x()],M.prototype,"error",void 0);re([x()],M.prototype,"ready",void 0);re([x()],M.prototype,"showRetry",void 0);re([x()],M.prototype,"secondaryBtnLabel",void 0);re([x()],M.prototype,"secondaryLabel",void 0);re([x()],M.prototype,"isLoading",void 0);re([B({type:Boolean})],M.prototype,"isMobile",void 0);re([B()],M.prototype,"onRetry",void 0);var mn=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let gi=class extends M{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),Z.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){var e;try{this.error=!1;const{connectors:i}=P.state,n=i.find(o=>{var t,a,s;return o.type==="ANNOUNCED"&&((t=o.info)==null?void 0:t.rdns)===((a=this.wallet)==null?void 0:a.rdns)||o.type==="INJECTED"||o.name===((s=this.wallet)==null?void 0:s.name)});if(n)await S.connectExternal(n,n.chain);else throw new Error("w3m-connecting-wc-browser: No connector found");Ri.close(),Z.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:((e=this.wallet)==null?void 0:e.name)||"Unknown"}})}catch(i){Z.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(i==null?void 0:i.message)??"Unknown"}}),this.error=!0}}};gi=mn([C("w3m-connecting-wc-browser")],gi);var vn=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let wi=class extends M{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),Z.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){var e;!this.ready&&this.uri&&(this.ready=!0,(e=this.onConnect)==null||e.call(this))}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:i,name:n}=this.wallet,{redirect:o,href:t}=I.formatNativeUrl(i,this.uri);S.setWcLinking({name:n,href:t}),S.setRecentWallet(this.wallet),I.openHref(o,"_blank")}catch{this.error=!0}}};wi=vn([C("w3m-connecting-wc-desktop")],wi);var ke=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Ce=class extends M{constructor(){if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=X.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{var e;if((e=this.wallet)!=null&&e.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:i,link_mode:n,name:o}=this.wallet,{redirect:t,redirectUniversalLink:a,href:s}=I.formatNativeUrl(i,this.uri,n);this.redirectDeeplink=t,this.redirectUniversalLink=a,this.target=I.isIframe()?"_top":"_self",S.setWcLinking({name:o,href:s}),S.setRecentWallet(this.wallet),this.preferUniversalLinks&&this.redirectUniversalLink?I.openHref(this.redirectUniversalLink,this.target):I.openHref(this.redirectDeeplink,this.target)}catch(i){Z.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:i instanceof Error?i.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=_i.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(S.subscribeKey("wcUri",()=>{this.onHandleURI()})),Z.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){var e;this.isLoading=!this.uri,!this.ready&&this.uri&&(this.ready=!0,(e=this.onConnect)==null||e.call(this))}onTryAgain(){var e;S.setWcError(!1),(e=this.onConnect)==null||e.call(this)}};ke([x()],Ce.prototype,"redirectDeeplink",void 0);ke([x()],Ce.prototype,"redirectUniversalLink",void 0);ke([x()],Ce.prototype,"target",void 0);ke([x()],Ce.prototype,"preferUniversalLinks",void 0);ke([x()],Ce.prototype,"isLoading",void 0);Ce=ke([C("w3m-connecting-wc-mobile")],Ce);var Ye={},yn=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},Ti={},K={};let ri;const xn=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];K.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17};K.getSymbolTotalCodewords=function(e){return xn[e]};K.getBCHDigit=function(r){let e=0;for(;r!==0;)e++,r>>>=1;return e};K.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');ri=e};K.isKanjiModeEnabled=function(){return typeof ri<"u"};K.toSJIS=function(e){return ri(e)};var Et={};(function(r){r.L={bit:1},r.M={bit:0},r.Q={bit:3},r.H={bit:2};function e(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return r.L;case"m":case"medium":return r.M;case"q":case"quartile":return r.Q;case"h":case"high":return r.H;default:throw new Error("Unknown EC Level: "+i)}}r.isValid=function(n){return n&&typeof n.bit<"u"&&n.bit>=0&&n.bit<4},r.from=function(n,o){if(r.isValid(n))return n;try{return e(n)}catch{return o}}})(Et);function Pi(){this.buffer=[],this.length=0}Pi.prototype={get:function(r){const e=Math.floor(r/8);return(this.buffer[e]>>>7-r%8&1)===1},put:function(r,e){for(let i=0;i<e;i++)this.putBit((r>>>e-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(r){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),r&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var Cn=Pi;function Je(r){if(!r||r<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=r,this.data=new Uint8Array(r*r),this.reservedBit=new Uint8Array(r*r)}Je.prototype.set=function(r,e,i,n){const o=r*this.size+e;this.data[o]=i,n&&(this.reservedBit[o]=!0)};Je.prototype.get=function(r,e){return this.data[r*this.size+e]};Je.prototype.xor=function(r,e,i){this.data[r*this.size+e]^=i};Je.prototype.isReserved=function(r,e){return this.reservedBit[r*this.size+e]};var $n=Je,Li={};(function(r){const e=K.getSymbolSize;r.getRowColCoords=function(n){if(n===1)return[];const o=Math.floor(n/7)+2,t=e(n),a=t===145?26:Math.ceil((t-13)/(2*o-2))*2,s=[t-7];for(let l=1;l<o-1;l++)s[l]=s[l-1]-a;return s.push(6),s.reverse()},r.getPositions=function(n){const o=[],t=r.getRowColCoords(n),a=t.length;for(let s=0;s<a;s++)for(let l=0;l<a;l++)s===0&&l===0||s===0&&l===a-1||s===a-1&&l===0||o.push([t[s],t[l]]);return o}})(Li);var Bi={};const Rn=K.getSymbolSize,bi=7;Bi.getPositions=function(e){const i=Rn(e);return[[0,0],[i-bi,0],[0,i-bi]]};var Oi={};(function(r){r.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};r.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},r.from=function(o){return r.isValid(o)?parseInt(o,10):void 0},r.getPenaltyN1=function(o){const t=o.size;let a=0,s=0,l=0,h=null,d=null;for(let _=0;_<t;_++){s=l=0,h=d=null;for(let y=0;y<t;y++){let m=o.get(_,y);m===h?s++:(s>=5&&(a+=e.N1+(s-5)),h=m,s=1),m=o.get(y,_),m===d?l++:(l>=5&&(a+=e.N1+(l-5)),d=m,l=1)}s>=5&&(a+=e.N1+(s-5)),l>=5&&(a+=e.N1+(l-5))}return a},r.getPenaltyN2=function(o){const t=o.size;let a=0;for(let s=0;s<t-1;s++)for(let l=0;l<t-1;l++){const h=o.get(s,l)+o.get(s,l+1)+o.get(s+1,l)+o.get(s+1,l+1);(h===4||h===0)&&a++}return a*e.N2},r.getPenaltyN3=function(o){const t=o.size;let a=0,s=0,l=0;for(let h=0;h<t;h++){s=l=0;for(let d=0;d<t;d++)s=s<<1&2047|o.get(h,d),d>=10&&(s===1488||s===93)&&a++,l=l<<1&2047|o.get(d,h),d>=10&&(l===1488||l===93)&&a++}return a*e.N3},r.getPenaltyN4=function(o){let t=0;const a=o.data.length;for(let l=0;l<a;l++)t+=o.data[l];return Math.abs(Math.ceil(t*100/a/5)-10)*e.N4};function i(n,o,t){switch(n){case r.Patterns.PATTERN000:return(o+t)%2===0;case r.Patterns.PATTERN001:return o%2===0;case r.Patterns.PATTERN010:return t%3===0;case r.Patterns.PATTERN011:return(o+t)%3===0;case r.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(t/3))%2===0;case r.Patterns.PATTERN101:return o*t%2+o*t%3===0;case r.Patterns.PATTERN110:return(o*t%2+o*t%3)%2===0;case r.Patterns.PATTERN111:return(o*t%3+(o+t)%2)%2===0;default:throw new Error("bad maskPattern:"+n)}}r.applyMask=function(o,t){const a=t.size;for(let s=0;s<a;s++)for(let l=0;l<a;l++)t.isReserved(l,s)||t.xor(l,s,i(o,l,s))},r.getBestMask=function(o,t){const a=Object.keys(r.Patterns).length;let s=0,l=1/0;for(let h=0;h<a;h++){t(h),r.applyMask(h,o);const d=r.getPenaltyN1(o)+r.getPenaltyN2(o)+r.getPenaltyN3(o)+r.getPenaltyN4(o);r.applyMask(h,o),d<l&&(l=d,s=h)}return s}})(Oi);var Wt={};const we=Et,et=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],tt=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];Wt.getBlocksCount=function(e,i){switch(i){case we.L:return et[(e-1)*4+0];case we.M:return et[(e-1)*4+1];case we.Q:return et[(e-1)*4+2];case we.H:return et[(e-1)*4+3];default:return}};Wt.getTotalCodewordsCount=function(e,i){switch(i){case we.L:return tt[(e-1)*4+0];case we.M:return tt[(e-1)*4+1];case we.Q:return tt[(e-1)*4+2];case we.H:return tt[(e-1)*4+3];default:return}};var Ai={},St={};const Me=new Uint8Array(512),ht=new Uint8Array(256);(function(){let e=1;for(let i=0;i<255;i++)Me[i]=e,ht[e]=i,e<<=1,e&256&&(e^=285);for(let i=255;i<512;i++)Me[i]=Me[i-255]})();St.log=function(e){if(e<1)throw new Error("log("+e+")");return ht[e]};St.exp=function(e){return Me[e]};St.mul=function(e,i){return e===0||i===0?0:Me[ht[e]+ht[i]]};(function(r){const e=St;r.mul=function(n,o){const t=new Uint8Array(n.length+o.length-1);for(let a=0;a<n.length;a++)for(let s=0;s<o.length;s++)t[a+s]^=e.mul(n[a],o[s]);return t},r.mod=function(n,o){let t=new Uint8Array(n);for(;t.length-o.length>=0;){const a=t[0];for(let l=0;l<o.length;l++)t[l]^=e.mul(o[l],a);let s=0;for(;s<t.length&&t[s]===0;)s++;t=t.slice(s)}return t},r.generateECPolynomial=function(n){let o=new Uint8Array([1]);for(let t=0;t<n;t++)o=r.mul(o,new Uint8Array([1,e.exp(t)]));return o}})(Ai);const ji=Ai;function ai(r){this.genPoly=void 0,this.degree=r,this.degree&&this.initialize(this.degree)}ai.prototype.initialize=function(e){this.degree=e,this.genPoly=ji.generateECPolynomial(this.degree)};ai.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(e.length+this.degree);i.set(e);const n=ji.mod(i,this.genPoly),o=this.degree-n.length;if(o>0){const t=new Uint8Array(this.degree);return t.set(n,o),t}return n};var _n=ai,ki={},ve={},si={};si.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40};var ae={};const zi="[0-9]+",In="[A-Z $%*+\\-./:]+";let Ke="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";Ke=Ke.replace(/u/g,"\\u");const En="(?:(?![A-Z0-9 $%*+\\-./:]|"+Ke+`)(?:.|[\r
]))+`;ae.KANJI=new RegExp(Ke,"g");ae.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");ae.BYTE=new RegExp(En,"g");ae.NUMERIC=new RegExp(zi,"g");ae.ALPHANUMERIC=new RegExp(In,"g");const Wn=new RegExp("^"+Ke+"$"),Sn=new RegExp("^"+zi+"$"),Tn=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");ae.testKanji=function(e){return Wn.test(e)};ae.testNumeric=function(e){return Sn.test(e)};ae.testAlphanumeric=function(e){return Tn.test(e)};(function(r){const e=si,i=ae;r.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},r.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},r.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},r.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},r.MIXED={bit:-1},r.getCharCountIndicator=function(t,a){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!e.isValid(a))throw new Error("Invalid version: "+a);return a>=1&&a<10?t.ccBits[0]:a<27?t.ccBits[1]:t.ccBits[2]},r.getBestModeForData=function(t){return i.testNumeric(t)?r.NUMERIC:i.testAlphanumeric(t)?r.ALPHANUMERIC:i.testKanji(t)?r.KANJI:r.BYTE},r.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},r.isValid=function(t){return t&&t.bit&&t.ccBits};function n(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return r.NUMERIC;case"alphanumeric":return r.ALPHANUMERIC;case"kanji":return r.KANJI;case"byte":return r.BYTE;default:throw new Error("Unknown mode: "+o)}}r.from=function(t,a){if(r.isValid(t))return t;try{return n(t)}catch{return a}}})(ve);(function(r){const e=K,i=Wt,n=Et,o=ve,t=si,a=7973,s=e.getBCHDigit(a);function l(y,m,$){for(let b=1;b<=40;b++)if(m<=r.getCapacity(b,$,y))return b}function h(y,m){return o.getCharCountIndicator(y,m)+4}function d(y,m){let $=0;return y.forEach(function(b){const R=h(b.mode,m);$+=R+b.getBitsLength()}),$}function _(y,m){for(let $=1;$<=40;$++)if(d(y,$)<=r.getCapacity($,m,o.MIXED))return $}r.from=function(m,$){return t.isValid(m)?parseInt(m,10):$},r.getCapacity=function(m,$,b){if(!t.isValid(m))throw new Error("Invalid QR Code version");typeof b>"u"&&(b=o.BYTE);const R=e.getSymbolTotalCodewords(m),g=i.getTotalCodewordsCount(m,$),f=(R-g)*8;if(b===o.MIXED)return f;const w=f-h(b,m);switch(b){case o.NUMERIC:return Math.floor(w/10*3);case o.ALPHANUMERIC:return Math.floor(w/11*2);case o.KANJI:return Math.floor(w/13);case o.BYTE:default:return Math.floor(w/8)}},r.getBestVersionForData=function(m,$){let b;const R=n.from($,n.M);if(Array.isArray(m)){if(m.length>1)return _(m,R);if(m.length===0)return 1;b=m[0]}else b=m;return l(b.mode,b.getLength(),R)},r.getEncodedBits=function(m){if(!t.isValid(m)||m<7)throw new Error("Invalid QR Code version");let $=m<<12;for(;e.getBCHDigit($)-s>=0;)$^=a<<e.getBCHDigit($)-s;return m<<12|$}})(ki);var Di={};const Vt=K,Ni=1335,Pn=21522,mi=Vt.getBCHDigit(Ni);Di.getEncodedBits=function(e,i){const n=e.bit<<3|i;let o=n<<10;for(;Vt.getBCHDigit(o)-mi>=0;)o^=Ni<<Vt.getBCHDigit(o)-mi;return(n<<10|o)^Pn};var Mi={};const Ln=ve;function Te(r){this.mode=Ln.NUMERIC,this.data=r.toString()}Te.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)};Te.prototype.getLength=function(){return this.data.length};Te.prototype.getBitsLength=function(){return Te.getBitsLength(this.data.length)};Te.prototype.write=function(e){let i,n,o;for(i=0;i+3<=this.data.length;i+=3)n=this.data.substr(i,3),o=parseInt(n,10),e.put(o,10);const t=this.data.length-i;t>0&&(n=this.data.substr(i),o=parseInt(n,10),e.put(o,t*3+1))};var Bn=Te;const On=ve,Ot=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function Pe(r){this.mode=On.ALPHANUMERIC,this.data=r}Pe.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)};Pe.prototype.getLength=function(){return this.data.length};Pe.prototype.getBitsLength=function(){return Pe.getBitsLength(this.data.length)};Pe.prototype.write=function(e){let i;for(i=0;i+2<=this.data.length;i+=2){let n=Ot.indexOf(this.data[i])*45;n+=Ot.indexOf(this.data[i+1]),e.put(n,11)}this.data.length%2&&e.put(Ot.indexOf(this.data[i]),6)};var An=Pe,jn=function(e){for(var i=[],n=e.length,o=0;o<n;o++){var t=e.charCodeAt(o);if(t>=55296&&t<=56319&&n>o+1){var a=e.charCodeAt(o+1);a>=56320&&a<=57343&&(t=(t-55296)*1024+a-56320+65536,o+=1)}if(t<128){i.push(t);continue}if(t<2048){i.push(t>>6|192),i.push(t&63|128);continue}if(t<55296||t>=57344&&t<65536){i.push(t>>12|224),i.push(t>>6&63|128),i.push(t&63|128);continue}if(t>=65536&&t<=1114111){i.push(t>>18|240),i.push(t>>12&63|128),i.push(t>>6&63|128),i.push(t&63|128);continue}i.push(239,191,189)}return new Uint8Array(i).buffer};const kn=jn,zn=ve;function Le(r){this.mode=zn.BYTE,typeof r=="string"&&(r=kn(r)),this.data=new Uint8Array(r)}Le.getBitsLength=function(e){return e*8};Le.prototype.getLength=function(){return this.data.length};Le.prototype.getBitsLength=function(){return Le.getBitsLength(this.data.length)};Le.prototype.write=function(r){for(let e=0,i=this.data.length;e<i;e++)r.put(this.data[e],8)};var Dn=Le;const Nn=ve,Mn=K;function Be(r){this.mode=Nn.KANJI,this.data=r}Be.getBitsLength=function(e){return e*13};Be.prototype.getLength=function(){return this.data.length};Be.prototype.getBitsLength=function(){return Be.getBitsLength(this.data.length)};Be.prototype.write=function(r){let e;for(e=0;e<this.data.length;e++){let i=Mn.toSJIS(this.data[e]);if(i>=33088&&i<=40956)i-=33088;else if(i>=57408&&i<=60351)i-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);i=(i>>>8&255)*192+(i&255),r.put(i,13)}};var Un=Be,Ui={exports:{}};(function(r){var e={single_source_shortest_paths:function(i,n,o){var t={},a={};a[n]=0;var s=e.PriorityQueue.make();s.push(n,0);for(var l,h,d,_,y,m,$,b,R;!s.empty();){l=s.pop(),h=l.value,_=l.cost,y=i[h]||{};for(d in y)y.hasOwnProperty(d)&&(m=y[d],$=_+m,b=a[d],R=typeof a[d]>"u",(R||b>$)&&(a[d]=$,s.push(d,$),t[d]=h))}if(typeof o<"u"&&typeof a[o]>"u"){var g=["Could not find a path from ",n," to ",o,"."].join("");throw new Error(g)}return t},extract_shortest_path_from_predecessor_list:function(i,n){for(var o=[],t=n;t;)o.push(t),i[t],t=i[t];return o.reverse(),o},find_path:function(i,n,o){var t=e.single_source_shortest_paths(i,n,o);return e.extract_shortest_path_from_predecessor_list(t,o)},PriorityQueue:{make:function(i){var n=e.PriorityQueue,o={},t;i=i||{};for(t in n)n.hasOwnProperty(t)&&(o[t]=n[t]);return o.queue=[],o.sorter=i.sorter||n.default_sorter,o},default_sorter:function(i,n){return i.cost-n.cost},push:function(i,n){var o={value:i,cost:n};this.queue.push(o),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};r.exports=e})(Ui);var Fn=Ui.exports;(function(r){const e=ve,i=Bn,n=An,o=Dn,t=Un,a=ae,s=K,l=Fn;function h(g){return unescape(encodeURIComponent(g)).length}function d(g,f,w){const p=[];let W;for(;(W=g.exec(w))!==null;)p.push({data:W[0],index:W.index,mode:f,length:W[0].length});return p}function _(g){const f=d(a.NUMERIC,e.NUMERIC,g),w=d(a.ALPHANUMERIC,e.ALPHANUMERIC,g);let p,W;return s.isKanjiModeEnabled()?(p=d(a.BYTE,e.BYTE,g),W=d(a.KANJI,e.KANJI,g)):(p=d(a.BYTE_KANJI,e.BYTE,g),W=[]),f.concat(w,p,W).sort(function(D,Q){return D.index-Q.index}).map(function(D){return{data:D.data,mode:D.mode,length:D.length}})}function y(g,f){switch(f){case e.NUMERIC:return i.getBitsLength(g);case e.ALPHANUMERIC:return n.getBitsLength(g);case e.KANJI:return t.getBitsLength(g);case e.BYTE:return o.getBitsLength(g)}}function m(g){return g.reduce(function(f,w){const p=f.length-1>=0?f[f.length-1]:null;return p&&p.mode===w.mode?(f[f.length-1].data+=w.data,f):(f.push(w),f)},[])}function $(g){const f=[];for(let w=0;w<g.length;w++){const p=g[w];switch(p.mode){case e.NUMERIC:f.push([p,{data:p.data,mode:e.ALPHANUMERIC,length:p.length},{data:p.data,mode:e.BYTE,length:p.length}]);break;case e.ALPHANUMERIC:f.push([p,{data:p.data,mode:e.BYTE,length:p.length}]);break;case e.KANJI:f.push([p,{data:p.data,mode:e.BYTE,length:h(p.data)}]);break;case e.BYTE:f.push([{data:p.data,mode:e.BYTE,length:h(p.data)}])}}return f}function b(g,f){const w={},p={start:{}};let W=["start"];for(let L=0;L<g.length;L++){const D=g[L],Q=[];for(let ge=0;ge<D.length;ge++){const ie=D[ge],De=""+L+ge;Q.push(De),w[De]={node:ie,lastCount:0},p[De]={};for(let Lt=0;Lt<W.length;Lt++){const le=W[Lt];w[le]&&w[le].node.mode===ie.mode?(p[le][De]=y(w[le].lastCount+ie.length,ie.mode)-y(w[le].lastCount,ie.mode),w[le].lastCount+=ie.length):(w[le]&&(w[le].lastCount=ie.length),p[le][De]=y(ie.length,ie.mode)+4+e.getCharCountIndicator(ie.mode,f))}}W=Q}for(let L=0;L<W.length;L++)p[W[L]].end=0;return{map:p,table:w}}function R(g,f){let w;const p=e.getBestModeForData(g);if(w=e.from(f,p),w!==e.BYTE&&w.bit<p.bit)throw new Error('"'+g+'" cannot be encoded with mode '+e.toString(w)+`.
 Suggested mode is: `+e.toString(p));switch(w===e.KANJI&&!s.isKanjiModeEnabled()&&(w=e.BYTE),w){case e.NUMERIC:return new i(g);case e.ALPHANUMERIC:return new n(g);case e.KANJI:return new t(g);case e.BYTE:return new o(g)}}r.fromArray=function(f){return f.reduce(function(w,p){return typeof p=="string"?w.push(R(p,null)):p.data&&w.push(R(p.data,p.mode)),w},[])},r.fromString=function(f,w){const p=_(f,s.isKanjiModeEnabled()),W=$(p),L=b(W,w),D=l.find_path(L.map,"start","end"),Q=[];for(let ge=1;ge<D.length-1;ge++)Q.push(L.table[D[ge]].node);return r.fromArray(m(Q))},r.rawSplit=function(f){return r.fromArray(_(f,s.isKanjiModeEnabled()))}})(Mi);const Tt=K,At=Et,Vn=Cn,qn=$n,Hn=Li,Kn=Bi,qt=Oi,Ht=Wt,Gn=_n,pt=ki,Yn=Di,Jn=ve,jt=Mi;function Qn(r,e){const i=r.size,n=Kn.getPositions(e);for(let o=0;o<n.length;o++){const t=n[o][0],a=n[o][1];for(let s=-1;s<=7;s++)if(!(t+s<=-1||i<=t+s))for(let l=-1;l<=7;l++)a+l<=-1||i<=a+l||(s>=0&&s<=6&&(l===0||l===6)||l>=0&&l<=6&&(s===0||s===6)||s>=2&&s<=4&&l>=2&&l<=4?r.set(t+s,a+l,!0,!0):r.set(t+s,a+l,!1,!0))}}function Xn(r){const e=r.size;for(let i=8;i<e-8;i++){const n=i%2===0;r.set(i,6,n,!0),r.set(6,i,n,!0)}}function Zn(r,e){const i=Hn.getPositions(e);for(let n=0;n<i.length;n++){const o=i[n][0],t=i[n][1];for(let a=-2;a<=2;a++)for(let s=-2;s<=2;s++)a===-2||a===2||s===-2||s===2||a===0&&s===0?r.set(o+a,t+s,!0,!0):r.set(o+a,t+s,!1,!0)}}function eo(r,e){const i=r.size,n=pt.getEncodedBits(e);let o,t,a;for(let s=0;s<18;s++)o=Math.floor(s/3),t=s%3+i-8-3,a=(n>>s&1)===1,r.set(o,t,a,!0),r.set(t,o,a,!0)}function kt(r,e,i){const n=r.size,o=Yn.getEncodedBits(e,i);let t,a;for(t=0;t<15;t++)a=(o>>t&1)===1,t<6?r.set(t,8,a,!0):t<8?r.set(t+1,8,a,!0):r.set(n-15+t,8,a,!0),t<8?r.set(8,n-t-1,a,!0):t<9?r.set(8,15-t-1+1,a,!0):r.set(8,15-t-1,a,!0);r.set(n-8,8,1,!0)}function to(r,e){const i=r.size;let n=-1,o=i-1,t=7,a=0;for(let s=i-1;s>0;s-=2)for(s===6&&s--;;){for(let l=0;l<2;l++)if(!r.isReserved(o,s-l)){let h=!1;a<e.length&&(h=(e[a]>>>t&1)===1),r.set(o,s-l,h),t--,t===-1&&(a++,t=7)}if(o+=n,o<0||i<=o){o-=n,n=-n;break}}}function io(r,e,i){const n=new Vn;i.forEach(function(l){n.put(l.mode.bit,4),n.put(l.getLength(),Jn.getCharCountIndicator(l.mode,r)),l.write(n)});const o=Tt.getSymbolTotalCodewords(r),t=Ht.getTotalCodewordsCount(r,e),a=(o-t)*8;for(n.getLengthInBits()+4<=a&&n.put(0,4);n.getLengthInBits()%8!==0;)n.putBit(0);const s=(a-n.getLengthInBits())/8;for(let l=0;l<s;l++)n.put(l%2?17:236,8);return no(n,r,e)}function no(r,e,i){const n=Tt.getSymbolTotalCodewords(e),o=Ht.getTotalCodewordsCount(e,i),t=n-o,a=Ht.getBlocksCount(e,i),s=n%a,l=a-s,h=Math.floor(n/a),d=Math.floor(t/a),_=d+1,y=h-d,m=new Gn(y);let $=0;const b=new Array(a),R=new Array(a);let g=0;const f=new Uint8Array(r.buffer);for(let D=0;D<a;D++){const Q=D<l?d:_;b[D]=f.slice($,$+Q),R[D]=m.encode(b[D]),$+=Q,g=Math.max(g,Q)}const w=new Uint8Array(n);let p=0,W,L;for(W=0;W<g;W++)for(L=0;L<a;L++)W<b[L].length&&(w[p++]=b[L][W]);for(W=0;W<y;W++)for(L=0;L<a;L++)w[p++]=R[L][W];return w}function oo(r,e,i,n){let o;if(Array.isArray(r))o=jt.fromArray(r);else if(typeof r=="string"){let h=e;if(!h){const d=jt.rawSplit(r);h=pt.getBestVersionForData(d,i)}o=jt.fromString(r,h||40)}else throw new Error("Invalid data");const t=pt.getBestVersionForData(o,i);if(!t)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=t;else if(e<t)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+t+`.
`);const a=io(e,i,o),s=Tt.getSymbolSize(e),l=new qn(s);return Qn(l,e),Xn(l),Zn(l,e),kt(l,i,0),e>=7&&eo(l,e),to(l,a),isNaN(n)&&(n=qt.getBestMask(l,kt.bind(null,l,i))),qt.applyMask(n,l),kt(l,i,n),{modules:l,version:e,errorCorrectionLevel:i,maskPattern:n,segments:o}}Ti.create=function(e,i){if(typeof e>"u"||e==="")throw new Error("No input text");let n=At.M,o,t;return typeof i<"u"&&(n=At.from(i.errorCorrectionLevel,At.M),o=pt.from(i.version),t=qt.from(i.maskPattern),i.toSJISFunc&&Tt.setToSJISFunction(i.toSJISFunc)),oo(e,o,n,t)};var Fi={},li={};(function(r){function e(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let n=i.slice().replace("#","").split("");if(n.length<3||n.length===5||n.length>8)throw new Error("Invalid hex color: "+i);(n.length===3||n.length===4)&&(n=Array.prototype.concat.apply([],n.map(function(t){return[t,t]}))),n.length===6&&n.push("F","F");const o=parseInt(n.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+n.slice(0,6).join("")}}r.getOptions=function(n){n||(n={}),n.color||(n.color={});const o=typeof n.margin>"u"||n.margin===null||n.margin<0?4:n.margin,t=n.width&&n.width>=21?n.width:void 0,a=n.scale||4;return{width:t,scale:t?4:a,margin:o,color:{dark:e(n.color.dark||"#000000ff"),light:e(n.color.light||"#ffffffff")},type:n.type,rendererOpts:n.rendererOpts||{}}},r.getScale=function(n,o){return o.width&&o.width>=n+o.margin*2?o.width/(n+o.margin*2):o.scale},r.getImageWidth=function(n,o){const t=r.getScale(n,o);return Math.floor((n+o.margin*2)*t)},r.qrToImageData=function(n,o,t){const a=o.modules.size,s=o.modules.data,l=r.getScale(a,t),h=Math.floor((a+t.margin*2)*l),d=t.margin*l,_=[t.color.light,t.color.dark];for(let y=0;y<h;y++)for(let m=0;m<h;m++){let $=(y*h+m)*4,b=t.color.light;if(y>=d&&m>=d&&y<h-d&&m<h-d){const R=Math.floor((y-d)/l),g=Math.floor((m-d)/l);b=_[s[R*a+g]?1:0]}n[$++]=b.r,n[$++]=b.g,n[$++]=b.b,n[$]=b.a}}})(li);(function(r){const e=li;function i(o,t,a){o.clearRect(0,0,t.width,t.height),t.style||(t.style={}),t.height=a,t.width=a,t.style.height=a+"px",t.style.width=a+"px"}function n(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}r.render=function(t,a,s){let l=s,h=a;typeof l>"u"&&(!a||!a.getContext)&&(l=a,a=void 0),a||(h=n()),l=e.getOptions(l);const d=e.getImageWidth(t.modules.size,l),_=h.getContext("2d"),y=_.createImageData(d,d);return e.qrToImageData(y.data,t,l),i(_,h,d),_.putImageData(y,0,0),h},r.renderToDataURL=function(t,a,s){let l=s;typeof l>"u"&&(!a||!a.getContext)&&(l=a,a=void 0),l||(l={});const h=r.render(t,a,l),d=l.type||"image/png",_=l.rendererOpts||{};return h.toDataURL(d,_.quality)}})(Fi);var Vi={};const ro=li;function vi(r,e){const i=r.a/255,n=e+'="'+r.hex+'"';return i<1?n+" "+e+'-opacity="'+i.toFixed(2).slice(1)+'"':n}function zt(r,e,i){let n=r+e;return typeof i<"u"&&(n+=" "+i),n}function ao(r,e,i){let n="",o=0,t=!1,a=0;for(let s=0;s<r.length;s++){const l=Math.floor(s%e),h=Math.floor(s/e);!l&&!t&&(t=!0),r[s]?(a++,s>0&&l>0&&r[s-1]||(n+=t?zt("M",l+i,.5+h+i):zt("m",o,0),o=0,t=!1),l+1<e&&r[s+1]||(n+=zt("h",a),a=0)):o++}return n}Vi.render=function(e,i,n){const o=ro.getOptions(i),t=e.modules.size,a=e.modules.data,s=t+o.margin*2,l=o.color.light.a?"<path "+vi(o.color.light,"fill")+' d="M0 0h'+s+"v"+s+'H0z"/>':"",h="<path "+vi(o.color.dark,"stroke")+' d="'+ao(a,t,o.margin)+'"/>',d='viewBox="0 0 '+s+" "+s+'"',y='<svg xmlns="http://www.w3.org/2000/svg" '+(o.width?'width="'+o.width+'" height="'+o.width+'" ':"")+d+' shape-rendering="crispEdges">'+l+h+`</svg>
`;return typeof n=="function"&&n(null,y),y};const so=yn,Kt=Ti,qi=Fi,lo=Vi;function ci(r,e,i,n,o){const t=[].slice.call(arguments,1),a=t.length,s=typeof t[a-1]=="function";if(!s&&!so())throw new Error("Callback required as last argument");if(s){if(a<2)throw new Error("Too few arguments provided");a===2?(o=i,i=e,e=n=void 0):a===3&&(e.getContext&&typeof o>"u"?(o=n,n=void 0):(o=n,n=i,i=e,e=void 0))}else{if(a<1)throw new Error("Too few arguments provided");return a===1?(i=e,e=n=void 0):a===2&&!e.getContext&&(n=i,i=e,e=void 0),new Promise(function(l,h){try{const d=Kt.create(i,n);l(r(d,e,n))}catch(d){h(d)}})}try{const l=Kt.create(i,n);o(null,r(l,e,n))}catch(l){o(l)}}Ye.create=Kt.create;Ye.toCanvas=ci.bind(null,qi.render);Ye.toDataURL=ci.bind(null,qi.renderToDataURL);Ye.toString=ci.bind(null,function(r,e,i){return lo.render(r,i)});const co=.1,yi=2.5,ce=7;function Dt(r,e,i){return r===e?!1:(r-e<0?e-r:r-e)<=i+co}function uo(r,e){const i=Array.prototype.slice.call(Ye.create(r,{errorCorrectionLevel:e}).modules.data,0),n=Math.sqrt(i.length);return i.reduce((o,t,a)=>(a%n===0?o.push([t]):o[o.length-1].push(t))&&o,[])}const ho={generate({uri:r,size:e,logoSize:i,dotColor:n="#141414"}){const o="transparent",a=[],s=uo(r,"Q"),l=e/s.length,h=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];h.forEach(({x:b,y:R})=>{const g=(s.length-ce)*l*b,f=(s.length-ce)*l*R,w=.45;for(let p=0;p<h.length;p+=1){const W=l*(ce-p*2);a.push(Ne`
            <rect
              fill=${p===2?n:o}
              width=${p===0?W-5:W}
              rx= ${p===0?(W-5)*w:W*w}
              ry= ${p===0?(W-5)*w:W*w}
              stroke=${n}
              stroke-width=${p===0?5:0}
              height=${p===0?W-5:W}
              x= ${p===0?f+l*p+5/2:f+l*p}
              y= ${p===0?g+l*p+5/2:g+l*p}
            />
          `)}});const d=Math.floor((i+25)/l),_=s.length/2-d/2,y=s.length/2+d/2-1,m=[];s.forEach((b,R)=>{b.forEach((g,f)=>{if(s[R][f]&&!(R<ce&&f<ce||R>s.length-(ce+1)&&f<ce||R<ce&&f>s.length-(ce+1))&&!(R>_&&R<y&&f>_&&f<y)){const w=R*l+l/2,p=f*l+l/2;m.push([w,p])}})});const $={};return m.forEach(([b,R])=>{var g;$[b]?(g=$[b])==null||g.push(R):$[b]=[R]}),Object.entries($).map(([b,R])=>{const g=R.filter(f=>R.every(w=>!Dt(f,w,l)));return[Number(b),g]}).forEach(([b,R])=>{R.forEach(g=>{a.push(Ne`<circle cx=${b} cy=${g} fill=${n} r=${l/yi} />`)})}),Object.entries($).filter(([b,R])=>R.length>1).map(([b,R])=>{const g=R.filter(f=>R.some(w=>Dt(f,w,l)));return[Number(b),g]}).map(([b,R])=>{R.sort((f,w)=>f<w?-1:1);const g=[];for(const f of R){const w=g.find(p=>p.some(W=>Dt(f,W,l)));w?w.push(f):g.push([f])}return[b,g.map(f=>[f[0],f[f.length-1]])]}).forEach(([b,R])=>{R.forEach(([g,f])=>{a.push(Ne`
              <line
                x1=${b}
                x2=${b}
                y1=${g}
                y2=${f}
                stroke=${n}
                stroke-width=${l/(yi/2)}
                stroke-linecap="round"
              />
            `)})}),a}},po=A`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: var(--local-icon-color) !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var fe=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};const fo="#3396ff";let ee=class extends j{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`
     --local-size: ${this.size}px;
     --local-icon-color: ${this.color??fo}
    `,v`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const e=this.theme==="light"?this.size:this.size-32;return Ne`
      <svg height=${e} width=${e}>
        ${ho.generate({uri:this.uri,size:e,logoSize:this.arenaClear?0:e/4,dotColor:this.color})}
      </svg>
    `}templateVisual(){return this.imageSrc?v`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?v`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:v`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};ee.styles=[z,po];fe([c()],ee.prototype,"uri",void 0);fe([c({type:Number})],ee.prototype,"size",void 0);fe([c()],ee.prototype,"theme",void 0);fe([c()],ee.prototype,"imageSrc",void 0);fe([c()],ee.prototype,"alt",void 0);fe([c()],ee.prototype,"color",void 0);fe([c({type:Boolean})],ee.prototype,"arenaClear",void 0);fe([c({type:Boolean})],ee.prototype,"farcaster",void 0);ee=fe([C("wui-qr-code")],ee);const go=A`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var Qe=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let $e=class extends j{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `,v`<slot></slot>`}};$e.styles=[go];Qe([c()],$e.prototype,"width",void 0);Qe([c()],$e.prototype,"height",void 0);Qe([c()],$e.prototype,"borderRadius",void 0);Qe([c()],$e.prototype,"variant",void 0);$e=Qe([C("wui-shimmer")],$e);const wo="https://reown.com",bo=A`
  .reown-logo {
    height: var(--wui-spacing-xxl);
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  a:hover {
    opacity: 0.9;
  }
`;var mo=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Gt=class extends j{render(){return v`
      <a
        data-testid="ux-branding-reown"
        href=${wo}
        rel="noreferrer"
        target="_blank"
        style="text-decoration: none;"
      >
        <wui-flex
          justifyContent="center"
          alignItems="center"
          gap="xs"
          .padding=${["0","0","l","0"]}
        >
          <wui-text variant="small-500" color="fg-100"> UX by </wui-text>
          <wui-icon name="reown" size="xxxl" class="reown-logo"></wui-icon>
        </wui-flex>
      </a>
    `}};Gt.styles=[z,V,bo];Gt=mo([C("wui-ux-by-reown")],Gt);const vo=_e`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;var yo=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Yt=class extends M{constructor(){var e;super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),Z.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:((e=this.wallet)==null?void 0:e.name)??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.unsubscribe)==null||e.forEach(i=>i()),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),u`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","xl","xl","xl"]}
        gap="xl"
      >
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,i=this.wallet?this.wallet.name:void 0;return S.setWcLinking(void 0),S.setRecentWallet(this.wallet),u` <wui-qr-code
      size=${e}
      theme=${Ft.state.themeMode}
      uri=${this.uri}
      imageSrc=${E(U.getWalletImage(this.wallet))}
      color=${E(Ft.state.themeVariables["--w3m-qr-color"])}
      alt=${E(i)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return u`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};Yt.styles=vo;Yt=yo([C("w3m-connecting-wc-qrcode")],Yt);var xo=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let xi=class extends O{constructor(){var e;if(super(),this.wallet=(e=k.state.data)==null?void 0:e.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");Z.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return u`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${E(U.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};xi=xo([C("w3m-connecting-wc-unsupported")],xi);var Hi=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Jt=class extends M{constructor(){if(super(),this.isLoading=!0,!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=_i.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(S.subscribeKey("wcUri",()=>{this.updateLoadingState()})),Z.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:i,name:n}=this.wallet,{redirect:o,href:t}=I.formatUniversalUrl(i,this.uri);S.setWcLinking({name:n,href:t}),S.setRecentWallet(this.wallet),I.openHref(o,"_blank")}catch{this.error=!0}}};Hi([x()],Jt.prototype,"isLoading",void 0);Jt=Hi([C("w3m-connecting-wc-web")],Jt);var Xe=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Oe=class extends O{constructor(){var e;super(),this.wallet=(e=k.state.data)==null?void 0:e.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=!!X.state.siwx,this.remoteFeatures=X.state.remoteFeatures,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(X.subscribeKey("remoteFeatures",i=>this.remoteFeatures=i))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return u`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){var e;return(e=this.remoteFeatures)!=null&&e.reownBranding?u`<wui-ux-by-reown></wui-ux-by-reown>`:null}async initializeConnection(e=!1){if(!(this.platform==="browser"||X.state.manualWCControl&&!e))try{const{wcPairingExpiry:i,status:n}=S.state;(e||X.state.enableEmbedded||I.isPairingExpired(i)||n==="connecting")&&(await S.connectWalletConnect(),this.isSiwxEnabled||Ri.close())}catch(i){Z.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(i==null?void 0:i.message)??"Unknown"}}),S.setWcError(!0),it.showError(i.message??"Connection error"),S.resetWcConnection(),k.goBack()}}determinePlatforms(){if(!this.wallet){this.platforms.push("qrcode"),this.platform="qrcode";return}if(this.platform)return;const{mobile_link:e,desktop_link:i,webapp_link:n,injected:o,rdns:t}=this.wallet,a=o==null?void 0:o.map(({injected_id:$})=>$).filter(Boolean),s=[...t?[t]:a??[]],l=X.state.isUniversalProvider?!1:s.length,h=e,d=n,_=S.checkInstalled(s),y=l&&_,m=i&&!I.isMobile();y&&!Ut.state.noAdapters&&this.platforms.push("browser"),h&&this.platforms.push(I.isMobile()?"mobile":"qrcode"),d&&this.platforms.push("web"),m&&this.platforms.push("desktop"),!y&&l&&!Ut.state.noAdapters&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return u`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return u`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return u`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return u`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return u`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return u`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?u`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){var n;const i=(n=this.shadowRoot)==null?void 0:n.querySelector("div");i&&(await i.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,i.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};Xe([x()],Oe.prototype,"platform",void 0);Xe([x()],Oe.prototype,"platforms",void 0);Xe([x()],Oe.prototype,"isSiwxEnabled",void 0);Xe([x()],Oe.prototype,"remoteFeatures",void 0);Oe=Xe([C("w3m-connecting-wc-view")],Oe);var Ki=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Qt=class extends O{constructor(){super(...arguments),this.isMobile=I.isMobile()}render(){if(this.isMobile){const{featured:e,recommended:i}=T.state,{customWallets:n}=X.state,o=vt.getRecentWallets(),t=e.length||i.length||(n==null?void 0:n.length)||o.length;return u`<wui-flex
        flexDirection="column"
        gap="xs"
        .margin=${["3xs","s","s","s"]}
      >
        ${t?u`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return u`<wui-flex flexDirection="column" .padding=${["0","0","l","0"]}>
      <w3m-connecting-wc-view></w3m-connecting-wc-view>
      <wui-flex flexDirection="column" .padding=${["0","m","0","m"]}>
        <w3m-all-wallets-widget></w3m-all-wallets-widget> </wui-flex
    ></wui-flex>`}};Ki([x()],Qt.prototype,"isMobile",void 0);Qt=Ki([C("w3m-connecting-wc-basic-view")],Qt);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ui=()=>new Co;class Co{}const Nt=new WeakMap,di=Xi(class extends Zi{render(r){return Mt}update(r,[e]){var n;const i=e!==this.G;return i&&this.G!==void 0&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=e,this.ht=(n=r.options)==null?void 0:n.host,this.rt(this.ct=r.element)),Mt}rt(r){if(this.isConnected||(r=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let i=Nt.get(e);i===void 0&&(i=new WeakMap,Nt.set(e,i)),i.get(this.G)!==void 0&&this.G.call(this.ht,void 0),i.set(this.G,r),r!==void 0&&this.G.call(this.ht,r)}else this.G.value=r}get lt(){var r,e;return typeof this.G=="function"?(r=Nt.get(this.ht??globalThis))==null?void 0:r.get(this.G):(e=this.G)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),$o=A`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 22px;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--wui-color-blue-100);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-002);
    border-radius: 999px;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color;
  }

  span:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
    background-color: var(--wui-color-inverse-100);
    transition: transform var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    will-change: transform;
    border-radius: 50%;
  }

  input:checked + span {
    border-color: var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-blue-100);
  }

  input:not(:checked) + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }
`;var Gi=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let ft=class extends j{constructor(){super(...arguments),this.inputElementRef=ui(),this.checked=void 0}render(){return v`
      <label>
        <input
          ${di(this.inputElementRef)}
          type="checkbox"
          ?checked=${de(this.checked)}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){var e;this.dispatchEvent(new CustomEvent("switchChange",{detail:(e=this.inputElementRef.value)==null?void 0:e.checked,bubbles:!0,composed:!0}))}};ft.styles=[z,V,nn,$o];Gi([c({type:Boolean})],ft.prototype,"checked",void 0);ft=Gi([C("wui-switch")],ft);const Ro=A`
  :host {
    height: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: var(--wui-spacing-1xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var Yi=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let gt=class extends j{constructor(){super(...arguments),this.checked=void 0}render(){return v`
      <button>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-switch ?checked=${de(this.checked)}></wui-switch>
      </button>
    `}};gt.styles=[z,V,Ro];Yi([c({type:Boolean})],gt.prototype,"checked",void 0);gt=Yi([C("wui-certified-switch")],gt);const _o=A`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`;var Ji=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let wt=class extends j{constructor(){super(...arguments),this.icon="copy"}render(){return v`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};wt.styles=[z,V,_o];Ji([c()],wt.prototype,"icon",void 0);wt=Ji([C("wui-input-element")],wt);const Io=A`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px var(--wui-spacing-3xl);
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  .wui-padding-right-xs {
    padding-right: var(--wui-spacing-xs);
  }

  .wui-padding-right-s {
    padding-right: var(--wui-spacing-s);
  }

  .wui-padding-right-m {
    padding-right: var(--wui-spacing-m);
  }

  .wui-padding-right-l {
    padding-right: var(--wui-spacing-l);
  }

  .wui-padding-right-xl {
    padding-right: var(--wui-spacing-xl);
  }

  .wui-padding-right-2xl {
    padding-right: var(--wui-spacing-2xl);
  }

  .wui-padding-right-3xl {
    padding-right: var(--wui-spacing-3xl);
  }

  .wui-padding-right-4xl {
    padding-right: var(--wui-spacing-4xl);
  }

  .wui-padding-right-5xl {
    padding-right: var(--wui-spacing-5xl);
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-m) 17.25px var(--wui-spacing-m);
  }
  wui-icon + .wui-size-mdl,
  wui-loading-spinner + .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-3xl) 17.25px 40px;
  }
  wui-icon[data-input='mdl'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var se=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Y=class extends j{constructor(){super(...arguments),this.inputElementRef=ui(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.value=""}render(){const e=`wui-padding-right-${this.inputRightPadding}`,n={[`wui-size-${this.size}`]:!0,[e]:!!this.inputRightPadding};return v`${this.templateIcon()}
      <input
        data-testid="wui-input-text"
        ${di(this.inputElementRef)}
        class=${en(n)}
        type=${this.type}
        enterkeyhint=${de(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value||""}
        tabindex=${de(this.tabIdx)}
      />
      <slot></slot>`}templateIcon(){return this.icon?v`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){var e;this.dispatchEvent(new CustomEvent("inputChange",{detail:(e=this.inputElementRef.value)==null?void 0:e.value,bubbles:!0,composed:!0}))}};Y.styles=[z,V,Io];se([c()],Y.prototype,"size",void 0);se([c()],Y.prototype,"icon",void 0);se([c({type:Boolean})],Y.prototype,"disabled",void 0);se([c()],Y.prototype,"placeholder",void 0);se([c()],Y.prototype,"type",void 0);se([c()],Y.prototype,"keyHint",void 0);se([c()],Y.prototype,"value",void 0);se([c()],Y.prototype,"inputRightPadding",void 0);se([c()],Y.prototype,"tabIdx",void 0);Y=se([C("wui-input-text")],Y);const Eo=A`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var Wo=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Xt=class extends j{constructor(){super(...arguments),this.inputComponentRef=ui()}render(){return v`
      <wui-input-text
        ${di(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const e=this.inputComponentRef.value,i=e==null?void 0:e.inputElementRef.value;i&&(i.value="",i.focus(),i.dispatchEvent(new Event("input")))}};Xt.styles=[z,Eo];Xt=Wo([C("wui-search-bar")],Xt);const So=Ne`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,To=A`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var Qi=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let bt=class extends j{constructor(){super(...arguments),this.type="wallet"}render(){return v`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?v` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${So}`:v`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};bt.styles=[z,V,To];Qi([c()],bt.prototype,"type",void 0);bt=Qi([C("wui-card-select-loader")],bt);const Po=A`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var J=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let F=class extends j{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&ue.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&ue.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&ue.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&ue.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&ue.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&ue.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&ue.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&ue.getSpacingStyles(this.margin,3)};
    `,v`<slot></slot>`}};F.styles=[z,Po];J([c()],F.prototype,"gridTemplateRows",void 0);J([c()],F.prototype,"gridTemplateColumns",void 0);J([c()],F.prototype,"justifyItems",void 0);J([c()],F.prototype,"alignItems",void 0);J([c()],F.prototype,"justifyContent",void 0);J([c()],F.prototype,"alignContent",void 0);J([c()],F.prototype,"columnGap",void 0);J([c()],F.prototype,"rowGap",void 0);J([c()],F.prototype,"gap",void 0);J([c()],F.prototype,"padding",void 0);J([c()],F.prototype,"margin",void 0);F=J([C("wui-grid")],F);const Lo=_e`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-s) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var Ze=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Re=class extends O{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.wallet=void 0,this.observer=new IntersectionObserver(e=>{e.forEach(i=>{i.isIntersecting?(this.visible=!0,this.fetchImageSrc()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){var i,n;const e=((i=this.wallet)==null?void 0:i.badge_type)==="certified";return u`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="3xs">
          <wui-text
            variant="tiny-500"
            color="inherit"
            class=${E(e?"certified":void 0)}
            >${(n=this.wallet)==null?void 0:n.name}</wui-text
          >
          ${e?u`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){var e,i;return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():u`
      <wui-wallet-image
        size="md"
        imageSrc=${E(this.imageSrc)}
        name=${(e=this.wallet)==null?void 0:e.name}
        .installed=${(i=this.wallet)==null?void 0:i.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return u`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=U.getWalletImage(this.wallet),!this.imageSrc&&(this.imageLoading=!0,this.imageSrc=await U.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}};Re.styles=Lo;Ze([x()],Re.prototype,"visible",void 0);Ze([x()],Re.prototype,"imageSrc",void 0);Ze([x()],Re.prototype,"imageLoading",void 0);Ze([B()],Re.prototype,"wallet",void 0);Re=Ze([C("w3m-all-wallets-list-item")],Re);const Bo=_e`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var ze=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};const Ci="local-paginator";let be=class extends O{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!T.state.wallets.length,this.wallets=T.state.wallets,this.recommended=T.state.recommended,this.featured=T.state.featured,this.filteredWallets=T.state.filteredWallets,this.unsubscribe.push(T.subscribeKey("wallets",e=>this.wallets=e),T.subscribeKey("recommended",e=>this.recommended=e),T.subscribeKey("featured",e=>this.featured=e),T.subscribeKey("filteredWallets",e=>this.filteredWallets=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var e;this.unsubscribe.forEach(i=>i()),(e=this.paginationObserver)==null||e.disconnect()}render(){return u`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var i;this.loading=!0;const e=(i=this.shadowRoot)==null?void 0:i.querySelector("wui-grid");e&&(await T.fetchWalletsByPage({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,i){return[...Array(e)].map(()=>u`
        <wui-card-select-loader type="wallet" id=${E(i)}></wui-card-select-loader>
      `)}walletsTemplate(){var n;const e=((n=this.filteredWallets)==null?void 0:n.length)>0?I.uniqueBy([...this.featured,...this.recommended,...this.filteredWallets],"id"):I.uniqueBy([...this.featured,...this.recommended,...this.wallets],"id");return yt.markWalletsAsInstalled(e).map(o=>u`
        <w3m-all-wallets-list-item
          @click=${()=>this.onConnectWallet(o)}
          .wallet=${o}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){const{wallets:e,recommended:i,featured:n,count:o}=T.state,t=window.innerWidth<352?3:4,a=e.length+i.length;let l=Math.ceil(a/t)*t-a+t;return l-=e.length?n.length%t:0,o===0&&n.length>0?null:o===0||[...n,...e,...i].length<o?this.shimmerTemplate(l,Ci):null}createPaginationObserver(){var i;const e=(i=this.shadowRoot)==null?void 0:i.querySelector(`#${Ci}`);e&&(this.paginationObserver=new IntersectionObserver(([n])=>{if(n!=null&&n.isIntersecting&&!this.loading){const{page:o,count:t,wallets:a}=T.state;a.length<t&&T.fetchWalletsByPage({page:o+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){P.selectWalletConnector(e)}};be.styles=Bo;ze([x()],be.prototype,"loading",void 0);ze([x()],be.prototype,"wallets",void 0);ze([x()],be.prototype,"recommended",void 0);ze([x()],be.prototype,"featured",void 0);ze([x()],be.prototype,"filteredWallets",void 0);be=ze([C("w3m-all-wallets-list")],be);const Oo=_e`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var Pt=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Ae=class extends O{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?u`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge)&&(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await T.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:e}=T.state,i=yt.markWalletsAsInstalled(e);return e.length?u`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","s","s","s"]}
        rowGap="l"
        columnGap="xs"
        justifyContent="space-between"
      >
        ${i.map(n=>u`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(n)}
              .wallet=${n}
              data-testid="wallet-search-item-${n.id}"
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:u`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="s"
          flexDirection="column"
        >
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="fg-200" variant="paragraph-500">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(e){P.selectWalletConnector(e)}};Ae.styles=Oo;Pt([x()],Ae.prototype,"loading",void 0);Pt([B()],Ae.prototype,"query",void 0);Pt([B()],Ae.prototype,"badge",void 0);Ae=Pt([C("w3m-all-wallets-search")],Ae);var hi=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let mt=class extends O{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=I.debounce(e=>{this.search=e})}render(){const e=this.search.length>=2;return u`
      <wui-flex .padding=${["0","s","s","s"]} gap="xs">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge}
          @click=${this.onClick.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e||this.badge?u`<w3m-all-wallets-search
            query=${this.search}
            badge=${E(this.badge)}
          ></w3m-all-wallets-search>`:u`<w3m-all-wallets-list badge=${E(this.badge)}></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onClick(){if(this.badge==="certified"){this.badge=void 0;return}this.badge="certified",it.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})}qrButtonTemplate(){return I.isMobile()?u`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){k.push("ConnectingWalletConnect")}};hi([x()],mt.prototype,"search",void 0);hi([x()],mt.prototype,"badge",void 0);mt=hi([C("w3m-all-wallets-view")],mt);const Ao=A`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    color: var(--wui-color-gray-glass-020);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var te=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let H=class extends j{constructor(){super(...arguments),this.tabIdx=void 0,this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return v`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${de(this.iconVariant)}
        tabindex=${de(this.tabIdx)}
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if(this.variant==="image"&&this.imageSrc)return v`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if(this.iconVariant==="square"&&this.icon&&this.variant==="icon")return v`<wui-icon name=${this.icon}></wui-icon>`;if(this.variant==="icon"&&this.icon&&this.iconVariant){const e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",i=this.iconVariant==="square-blue"?"mdl":"md",n=this.iconSize?this.iconSize:i;return v`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${n}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${i}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?v`<wui-loading-spinner
        data-testid="wui-list-item-loading-spinner"
        color="fg-300"
      ></wui-loading-spinner>`:v``}chevronTemplate(){return this.chevron?v`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};H.styles=[z,V,Ao];te([c()],H.prototype,"icon",void 0);te([c()],H.prototype,"iconSize",void 0);te([c()],H.prototype,"tabIdx",void 0);te([c()],H.prototype,"variant",void 0);te([c()],H.prototype,"iconVariant",void 0);te([c({type:Boolean})],H.prototype,"disabled",void 0);te([c()],H.prototype,"imageSrc",void 0);te([c()],H.prototype,"alt",void 0);te([c({type:Boolean})],H.prototype,"chevron",void 0);te([c({type:Boolean})],H.prototype,"loading",void 0);H=te([C("wui-list-item")],H);var jo=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let $i=class extends O{constructor(){var e;super(...arguments),this.wallet=(e=k.state.data)==null?void 0:e.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return u`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var e;return(e=this.wallet)!=null&&e.chrome_store?u`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var e;return(e=this.wallet)!=null&&e.app_store?u`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var e;return(e=this.wallet)!=null&&e.play_store?u`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var e;return(e=this.wallet)!=null&&e.homepage?u`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){var e;(e=this.wallet)!=null&&e.chrome_store&&I.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&I.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&I.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&I.openHref(this.wallet.homepage,"_blank")}};$i=jo([C("w3m-downloads-view")],$i);export{mt as W3mAllWalletsView,Qt as W3mConnectingWcBasicView,$i as W3mDownloadsView};
