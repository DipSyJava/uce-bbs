export default {
	getDateDefault: function() {
		let date = new Date();
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let date2 = date.getDate();
		let hours = date.getHours();
		let seconds = date.getSeconds();
		let minutes = date.getMinutes();
		return year + '-' + month + '-' + date2 + ' ' + hours + ':' + minutes + ':' + seconds;
	}
}

