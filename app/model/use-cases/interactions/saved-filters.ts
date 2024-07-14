import { Filter } from "@/model/entities/filter"

export class SavedFilters {

    #filters: Filter[]

    constructor() {
        this.#filters = []
    }

    get getFilters() {
        return this.#filters
    }

    getFilter(filterId: string) {
        return this.#filters.find(filter => filter?.id === filterId)
    }

    addFilter(filter: Filter) {
		this.#filters = [...this.#filters, filter]
	}

	removeFilter(filterId: string) {
		this.#filters = this.#filters?.filter(filter => filter?.id !== filterId)
	}

    editFilter(filterId: string, filter: Filter) {
        const filterToEdit = this.getFilter(filterId)
        if(filterToEdit != null) {
            this.removeFilter(filterId)
            this.addFilter(filter)
        }
    }
}