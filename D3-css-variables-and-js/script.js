function updateProp() {
    console.log(this.value+this.dataset.sizing);
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value+suffix);
}