({intervalId:null,isActive:!1,start(){const t=Date.now();this.intervalId=setInterval((()=>{const e=Date.now(),l=e-t;console.log("🚀 ~ deltaTime",l),console.log("🚀 ~ currentTime",e)}),1e3)},stop(){clearInterval(this.intervalId)}}).start();
//# sourceMappingURL=index.2bf992d6.js.map
