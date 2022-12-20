({intervalId:null,isActive:!1,start:function(){var t=Date.now();this.intervalId=setInterval((function(){var e=Date.now(),n=e-t;console.log("🚀 ~ deltaTime",n),console.log("🚀 ~ currentTime",e)}),1e3)},stop:function(){clearInterval(this.intervalId)}}).start();
//# sourceMappingURL=index.35a107c2.js.map
