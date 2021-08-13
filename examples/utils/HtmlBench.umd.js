(() => {
  'use strict';

  const Bench = window.Bench.default;

  window.HtmlBench = class HtmlBench extends Bench {
    container = document.createElement('div');
    titlebox = document.createElement('div');
    logbox = document.createElement('pre');
    errorbox = document.createElement('pre');

    get isMounted() {
      return !!this.container.parentElement;
    }

    mount(parent = document.body) {
      parent.appendChild(this.container);
    }

    dismount() {
      this.container.parentElement?.removeChild(this.container);
    }

    log(msg, eol = true) {
      this.logbox.innerText += `${msg}${eol ? '\n' : ''}`;
    }

    error(msg) {
      this.errorbox.innerText += msg;
    }

    constructor(...args) {
      super(...args);

      this.container.appendChild(this.titlebox);
      this.container.appendChild(this.logbox);
      this.container.className = 'html-benchmark-container';
      this.titlebox.className = 'html-benchmark-titlebox';
      this.logbox.className = 'html-benchmark-logbox';
      this.errorbox.className = 'html-benchmark-errorbox';
      this.titlebox.innerHTML = `<h4>${this.name}</h4>`;
    }
  };
})();
