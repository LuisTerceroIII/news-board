export interface Source {
	id: string
	name: string
	url?: string
}
export interface Article {
	id: string
	title: string
	description?: string
	content?: string
	url?: string
	photoURL?: string
	publishedAt?: string
	source?: Source
}


