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

imageManager.register('Arrow', '/Arrow.png');
imageManager.register('Notification', '/Notification.png');
imageManager.register('Magnifier', '/Magnifier.png');
imageManager.register('Heart', '/Heart.png');
imageManager.register('Location', '/Location.png');
imageManager.register('Human', '/Human.png');
imageManager.register('Logo', '/Logo.png');

export const ImgMan = imageManager;
