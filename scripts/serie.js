var Serie = /** @class */ (function () {
    function Serie(id, name, channel, seasons, description, link, image) {
        this.name = name;
        this.seasons = seasons;
        this.channel = channel;
        this.id = id;
        this.description = description;
        this.link = link;
        this.image = image;
    }
    return Serie;
}());
export { Serie };
