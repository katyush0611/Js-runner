class Player {
	constructor (name, color, side) {
		this.name = name;
		this.color = color;
		this.side = side;
		this.position = 0;
	}
	build () {
		this.view = $('<span>', {
			text: this.name,
			css: {
				backgroundColor: this.color,
				left: (this.getLeftOffset() * 100) + '%', 
			}, 
			class: "player", 
		}).appendTo('main');
	}
	getLeftOffset () {
		return this.side === 'left'
			? 0.3
			: this.side === 'right'
				? 0.6 : console.error('wtf');
	}
	move () {
		this.position += 10;
		this.view.css({bottom: this.position + 'px'});
	}
}