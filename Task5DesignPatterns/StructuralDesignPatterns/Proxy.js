class RealImage {
  display() {
    console.log("Displaying high resolution image");
  }
}


class ImageProxy {
  constructor(user) {
    this.user = user;
    this.realImage = null;
  }

  display() {
    if (this.user === "admin") {
      if (!this.realImage) {
        this.realImage = new RealImage();
      }
      this.realImage.display();
    } else {
      console.log("Access denied");
    }
  }
}


const img1 = new ImageProxy("guest");
img1.display();

const img2 = new ImageProxy("admin");
img2.display();
