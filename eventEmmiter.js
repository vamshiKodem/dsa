class EventEmitter {
  emitterMap = new Map();

  subscribe(event, cb) {
    if (!this.emitterMap[event]) {
      this.emitterMap[event] = cb;
    }

    return {
      unsubscribe: () => {
        delete this.emitterMap[event];
      },
    };
  }

  emit(event, ...args) {
    if (this.emitterMap[event]) {
      this.emitterMap[event].apply(this, args);
    }
  }
}

const emitter = new EventEmitter();

const onClickCallback = () => {
  console.log("callback function");
};

const onHoverCallback = () => {
  console.log("hover callback");
};

const eventSubscribe = emitter.subscribe("onClick", onClickCallback, () => {
  console.log("hello");
});
const hoverSubscribe = emitter.subscribe("hover", onHoverCallback);

emitter.emit("onClick");
emitter.emit("hover");
emitter.emit("onClick");
emitter.emit("onClick");

eventSubscribe.unsubscribe();

emitter.emit("onClick");

emitter.emit("hover");
emitter.emit("hover");
