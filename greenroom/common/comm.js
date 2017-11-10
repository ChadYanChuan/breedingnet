
/**
 * [date description]
 * @param  {[type]} date [description]
 * @return {[type]}      [description]
 */
exports.date = function dateObj(obj) {
	let dt = new Date(obj);
    let mon = dt.getMonth();
    let day = dt.getDate();
    if (mon < 9) {
        mon = "0" + (mon + 1);
    } else {
        mon = mon + 1;
    }
    if(day < 9){
    	day = "0" + day;
    }
    let dt1 = dt.getFullYear()+"-"+mon+"-"+day;
    return dt1;
}
/**
 * [isNull description]
 * @param  {[type]}  obj [description]
 * @return {Boolean}     [description]
 */
exports.isNull = function isNull(obj){
	if(obj == "" || obj == null) obj = 0;
    return obj;
}
