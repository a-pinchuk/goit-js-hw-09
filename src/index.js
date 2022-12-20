const timer = {
  intervalId: null,
  isActive: false,

  start() {
    const startTime = Date.now();

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      console.log('🚀 ~ deltaTime', deltaTime);
      console.log('🚀 ~ currentTime', currentTime);
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
  },
};

timer.start();
