import uuid from 'react-native-uuid';

export class Source {

	id: string;
	name: string;

	constructor(id: string="", name: string="") {
		this.id = id;
		this.name = name;
	}
}

export class Article {

	id: string
	title: string;
	description: string;
	content: string;
	url: string;
	image: string;
	publishedAt: string;
	source: Source;

	constructor(
		title: string="",
		description: string="",
		content: string="",
		url: string="",
		image: string="",
		publishedAt: string="",
		source: Source= new Source()
	) {
		this.id = String(uuid.v4())
		this.title = title;
		this.description = description;
		this.content = content;
		this.url = url;
		this.image = image;
		this.publishedAt = publishedAt;
		this.source = source;
	}
}


