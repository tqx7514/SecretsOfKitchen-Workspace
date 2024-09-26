class ImageManager {
    constructor() {
        this.images = {};
    }

    register(id, path) {
        this.images[id] = path;
    }

    get(id) {
        return this.images[id] || '';
    }
}

const imageManager = new ImageManager();

imageManager.register('Arrow', `${process.env.PUBLIC_URL}/Arrow.png`);
imageManager.register('Notification', `${process.env.PUBLIC_URL}/Notification.png`);
imageManager.register('Magnifier', `${process.env.PUBLIC_URL}/Magnifier.png`);
imageManager.register('Heart', `${process.env.PUBLIC_URL}/Heart.png`);
imageManager.register('Location', `${process.env.PUBLIC_URL}/Location.png`);
imageManager.register('Human', `${process.env.PUBLIC_URL}/Human.png`);
imageManager.register('Logo', `${process.env.PUBLIC_URL}/Logo.png`);

export const ImgMan = imageManager;
