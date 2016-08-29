function getXML() {
	var xml = '';
	try {
		var fs = require('fs');
		xml = fs.readFileSync('data.xml', 'utf8');
	} catch (err) {
		xml = '<rss version="2.0">\
						 <worker>\
						 	<personality>\
						 		<avatar>Каверин</avatar>\
						 		<name>Олег</name>\
						 	</personality>\
						 	<orders>\
						 		<order>\
						 			<car-number>O593MX</car-number>\
						 			<car-region>93</car-region>\
						 			<start-repair>18:16</start-repair>\
						 			<condition>Приемка</condition>\
						 			<finish-repair>23:16</finish-repair>\
						 		</order>\
						 		<order>\
						 			<car-number>C400EC</car-number>\
						 			<car-region>123</car-region>\
						 			<start-repair>-</start-repair>\
						 			<condition>Ожидание приема</condition>\
						 			<finish-repair>19:30</finish-repair>\
						 		</order>\
						 		<order>\
						 			<car-number>H900XB</car-number>\
						 			<car-region>93</car-region>\
						 			<start-repair>16:30</start-repair>\
						 			<condition>Ожидание приема</condition>\
						 			<finish-repair>18:10</finish-repair>\
						 		</order>\
						 		<order>\
						 			<car-number>E411KX</car-number>\
						 			<car-region>23</car-region>\
						 			<start-repair>12:40</start-repair>\
						 			<condition></condition>\
						 			<finish-repair>14:00</finish-repair>\
						 		</order>\
						 		<order>\
						 			<car-number>P093PP</car-number>\
						 			<car-region>93</car-region>\
						 			<start-repair>16:00</start-repair>\
						 			<condition></condition>\
						 			<finish-repair>17:00</finish-repair>\
						 		</order>\
						 		<order>\
						 			<car-number>R546OC</car-number>\
						 			<car-region>123</car-region>\
						 			<start-repair>17:00</start-repair>\
						 			<condition>Согласование с клиентом</condition>\
						 			<finish-repair>20:00</finish-repair>\
						 		</order>\
						 		<order>\
						 			<car-number>H900XB</car-number>\
						 			<car-region>93</car-region>\
						 			<start-repair>16:30</start-repair>\
						 			<condition>Ожидание приема</condition>\
						 			<finish-repair>18:10</finish-repair>\
						 		</order>\
						 	</orders>\
						 </worker>\
						 <worker>\
						 	<personality>\
						 		<avatar>Альшанов</avatar>\
						 		<name>Владимир</name>\
						 	</personality>\
						 	<orders>\
						 		<order>\
						 			<car-number>R546OC</car-number>\
						 			<car-region>123</car-region>\
						 			<start-repair>-</start-repair>\
						 			<condition>Ожидание приема</condition>\
						 			<finish-repair>16:29</finish-repair>\
						 		</order>\
						 		<order>\
						 			<car-number>P881PP</car-number>\
						 			<car-region>93</car-region>\
						 			<start-repair>10:20</start-repair>\
						 			<condition>Ожидание приема</condition>\
						 			<finish-repair>19:40</finish-repair>\
						 		</order>\
						 		<order>\
						 			<car-number>H777YK</car-number>\
						 			<car-region>93</car-region>\
						 			<start-repair>12:09</start-repair>\
						 			<condition>Ожидание приема</condition>\
						 			<finish-repair>12:15</finish-repair>\
						 		</order>\
						 		<order>\
						 			<car-number>H214OE</car-number>\
						 			<car-region>123</car-region>\
						 			<start-repair>13:00</start-repair>\
						 			<condition></condition>\
						 			<finish-repair>13:59</finish-repair>\
						 		</order>\
						 		<order>\
						 			<car-number>H900XB</car-number>\
						 			<car-region>93</car-region>\
						 			<start-repair>16:30</start-repair>\
						 			<condition>Ожидание приема</condition>\
						 			<finish-repair>18:10</finish-repair>\
						 		</order>\
						 		<order>\
						 			<car-number>R546OC</car-number>\
						 			<car-region>123</car-region>\
						 			<start-repair>17:00</start-repair>\
						 			<condition>Согласование с клиентом</condition>\
						 			<finish-repair>20:00</finish-repair>\
						 		</order>\
						 		<order>\
						 			<car-number>O593MX</car-number>\
						 			<car-region>93</car-region>\
						 			<start-repair>18:16</start-repair>\
						 			<condition>Приемка</condition>\
						 			<finish-repair>23:16</finish-repair>\
						 		</order>\
						 		<order>\
						 			<car-number>C400EC</car-number>\
						 			<car-region>123</car-region>\
						 			<start-repair>-</start-repair>\
						 			<condition>Ожидание приема</condition>\
						 			<finish-repair>19:30</finish-repair>\
						 		</order>\
						 		<order>\
						 			<car-number>E411KX</car-number>\
						 			<car-region>23</car-region>\
						 			<start-repair>12:40</start-repair>\
						 			<condition></condition>\
						 			<finish-repair>14:00</finish-repair>\
						 		</order>\
						 	</orders>\
						 </worker>\
						 <worker>\
						 	<personality>\
						 		<avatar>Каверин</avatar>\
						 		<name>Олег</name>\
						 	</personality>\
						 	<orders>\
						 		<order>\
						 			<car-number>C400EC</car-number>\
						 			<car-region>123</car-region>\
						 			<start-repair>-</start-repair>\
						 			<condition>Ожидание приема</condition>\
						 			<finish-repair>19:30</finish-repair>\
						 		</order>\
						 		<order>\
						 			<car-number>E411KX</car-number>\
						 			<car-region>23</car-region>\
						 			<start-repair>12:40</start-repair>\
						 			<condition></condition>\
						 			<finish-repair>14:00</finish-repair>\
						 		</order>\
						 		<order>\
						 			<car-number>P093PP</car-number>\
						 			<car-region>93</car-region>\
						 			<start-repair>16:00</start-repair>\
						 			<condition></condition>\
						 			<finish-repair>17:00</finish-repair>\
						 		</order>\
						 		<order>\
						 			<car-number>R546OC</car-number>\
						 			<car-region>123</car-region>\
						 			<start-repair>17:00</start-repair>\
						 			<condition>Согласование с клиентом</condition>\
						 			<finish-repair>20:00</finish-repair>\
						 		</order>\
						 		<order>\
						 			<car-number>R546OC</car-number>\
						 			<car-region>123</car-region>\
						 			<start-repair>17:00</start-repair>\
						 			<condition>Согласование с клиентом</condition>\
						 			<finish-repair>20:00</finish-repair>\
						 		</order>\
						 		<order>\
						 			<car-number>R546OC</car-number>\
						 			<car-region>123</car-region>\
						 			<start-repair>17:00</start-repair>\
						 			<condition>Согласование с клиентом</condition>\
						 			<finish-repair>20:00</finish-repair>\
						 		</order>\
						 	</orders>\
						 </worker>\
						 </rss>';
	};
	return xml;
};
// Загрузка xml файла
function getDataFromFile() {
	// Надо добавить проверки на валидность
	var xml = $($.parseXML(getXML())); 
	return xml;
};
function getWorkers() {
	var workers = [];
	var xml = getDataFromFile();
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