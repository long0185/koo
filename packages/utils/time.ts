export default {
	isTody: function isToday(time1:Date,time2:Date){
		return (
			time1.getFullYear() === time2.getFullYear() &&
			time1.getMonth() === time2.getMonth() &&
			time1.getDate() === time2.getDate()
		)
	},
	isYesterday: function isYesterday(time1:Date,time2:Date) {
		return (
			time1.getFullYear() === time2.getFullYear() &&
			time1.getMonth() === time2.getMonth() &&
			time1.getDate() === time2.getDate() - 1
		)
	},
	getHourMinute: function getHourMinute(time:Date) {
		const hours = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
		const minutes = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
		return hours + ':' + minutes
	},
	getMonthDate: function getMonthDate(time:Date) {
		return time.getMonth() + 1 + '/' + time.getDate()
	}

}