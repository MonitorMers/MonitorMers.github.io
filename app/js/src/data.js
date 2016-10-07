function getXML() {
	var data = getXMLForWeb();
	var xml = $($.parseXML(data));
	return xml;
};
function getWorkers() {
	var workers = [];
	var xml = getXML();
	var txt = $(xml).find('worker').each(function () {
		var avatar = $(this).find('avatar').text();
		var name = $(this).find('name').text();
		var orders = [];
		$(this).find('order').each(function () {
			var carNumber = $(this).find('car-number').text().toUpperCase();
			var carRegion = $(this).find('car-region').text();
			var carModel = $(this).find('car-model').text();
			var condition = $(this).find('condition').text();
			var startRepair = $(this).find('start-repair').text();
			var finishRepair = $(this).find('finish-repair').text();
			var order = new Order(carNumber, carRegion, carModel, condition, startRepair, finishRepair);
			orders.push(order);
		});
		orders = sortOrders(orders);
		var worker = new Worker(avatar, name, orders);
		workers.push(worker);
	});
	return workers;
};
function sortOrders(orders) {
	var tmp;
	for (var i = 0; i < orders.length; i++) {
		for (var j = i; j > 0; j--) {
			if (orders[j].startRepair < orders[j - 1].startRepair) {
				tmp = orders[j];
				orders[j] = orders[j - 1];
				orders[j - 1] = tmp;
			}
		}
	}
	return orders;
}
