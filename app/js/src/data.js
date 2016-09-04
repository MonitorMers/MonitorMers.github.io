function getXML() {
	var data = '';
	try {
		var fs = require('fs');
		data = fs.readFileSync('/home/jackycoins/tmp/mers/data.xml', 'utf8');
	} catch (err) {
		//Для веб версии
		data = getXMLForWeb();
	};
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
			var condition = $(this).find('condition').text();
			var startRepair = $(this).find('start-repair').text();
			var finishRepair = $(this).find('finish-repair').text();
			var order = new Order(carNumber, carRegion, condition, startRepair, finishRepair);
			orders.push(order);
		});
		var worker = new Worker(avatar, name, orders);
		workers.push(worker);
	});
	return workers;
};