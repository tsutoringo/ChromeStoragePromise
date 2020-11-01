const local = {
	/**
	 * @param {String|Array<String>} keys
	 * @returns {Promise<>}
	 */
	get(keys) {
		return new Promise((resolve, reject) => {
			try {
				chrome.storage.local.get(keys, function (items) {
					resolve(items);
				})
			} catch (e) {
				reject(e);
			}
		});
	},
	/**
	 * @param {Object} items
	 * @returns {Promise}
	 */
	set(items) {
		return new Promise((resolve, reject) => {
			try {
				chrome.storage.local.set(items, function () {
					resolve();
				})
			} catch (e) {
				reject(e);
			}
		});
	}
}

module.exports = {
    local
};