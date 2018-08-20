const { def, on, wired } = require("capsid");

class Mirroring {
  @wired(".dest")
  get dest() {}
  @wired(".src")
  get src() {}

  @on("input")
  onReceiveData() {
    this.dest.textContent = this.src.value;
  }
}

def("mirroring", Mirroring);
