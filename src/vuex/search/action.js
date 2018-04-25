import api from './api'
import * as search from './type'

const searchDocsByCondition = ({commit}) => {
	commit(search.SEARCHING_DOCS)
	api.searchDocs().then(res => {
		let list = res.data.result
		commit(search.SEARCHING_DOCS_SUCCESS, {
			list: list
		})
	}, err => {
		commit(search.SEARCHING_DOCS_FAIL, {
			err: err
		})
	})
}

export default {
	actions: {
		searchDocsByCondition
	}
}