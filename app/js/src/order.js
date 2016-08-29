function Order(carNumber, carRegion, condition, startRepair, finishRepair) {
	this.carNumber = carNumber;
	this.carRegion = carRegion;
	this.condition = condition;
	this.startRepair = startRepair;
	this.finishRepair = finishRepair;	
};	
function getTemplateForOrder(order) {
	var answer = '<table class="worker-order">\
								<tr class="order-details">\
									<td class="car-number"><table><tr><td rowspan=2>' + order.carNumber +
									'</td><td class="region">' + order.carRegion + '</td></tr>' +
									'<tr><td class="flag"></td></tr></table></td>\
									<td class="start-repair">' + order.startRepair + '</td>\
									<td class="condition">' + order.condition + '</td>\
									<td class="finish-repair">' + order.finishRepair + '</td>\
								</tr>\
							</table>';

	return answer;
}