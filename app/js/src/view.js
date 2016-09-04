var COUNT_OF_ORDERS = 5;
var TIME_OF_CIRCLE = 40000;

function showWorker(worker, number) {
	if (worker.orders.length <= COUNT_OF_ORDERS)
		showWithStaticOrders(worker, number);
	else
		showWithDinamicOrders(worker, number);
};
function showWarning() {
	var response = '<div class="warning">Заказов нет</div>';
	$('.main').append(response);
};
function makeOneColumn() {
	$('.worker').css('margin-left', '5%')
							.css('width', '90%');
};
function makeTwoColumns() {
	$('.worker:first-child').css('margin-left', '5em')
													.css('float', 'left');
	$('.worker:last-child').css('float', 'right')
												 .css('margin-right', '5em');
};
function makeThreeColumns() {
	$('.worker:nth-child(1)').css('display', 'inline-block')
													 .css('width', '30%')
													 .css('margin-left', '2%')
													 .css('margin-right', '2%');
	$('.worker:nth-child(2)').css('display', 'inline-block')
													 .css('width', '30%');
	$('.worker:nth-child(3)').css('display', 'inline-block')
													 .css('width', '30%')
													 .css('margin-right', '1%')
													 .css('margin-left', '2%');
};
function showWithStaticOrders(worker, number) {
	var response = getTemplateForWorker(worker, number); // Создание worker и персональных данных
	var orders = worker.orders
	for (var i = 0; i < 4; i++)
		response+= getTemplateForOrder(orders[i]); // Добавление заказов
	response+= '</div>'; // Закрытие тэга worker
	$('.main').append(response); // Выводим на экран
};
function showWithDinamicOrders(worker, number) {
	var response = getTemplateForWorker(worker, number); // Создание worker и персональных данных
	var orders = worker.orders;
	response+= '<div class="dinamic" style="height: 24.8em">';
	for (var i = 0; i < COUNT_OF_ORDERS; i++)
		response+= '<table class="worker-order">\
								<tr class="order-details"><td>\
								</td></tr></table>'; // Добавление заказов
	response+= '</div></div>'; // Закрытие тэга worker и dinamic
	$('.main').append(response); // Выводим на экран
	
	repeat();
	
	function repeat() {
		var timeOfIter = 500, index = 1;
		for (var i = 0; i < COUNT_OF_ORDERS; i++) {
			setTimeout(updateOrder, timeOfIter, i, index);
			timeOfIter+= 500, index++;
		};
		timeOfIter = TIME_OF_CIRCLE / 2, index = 1;
		for (var i = COUNT_OF_ORDERS; i < COUNT_OF_ORDERS * 2; i++) {
			setTimeout(updateOrder, timeOfIter, i, index);
			timeOfIter+= 500, index++;
		};
		if (orders.length > COUNT_OF_ORDERS * 2) {
			timeOfIter = TIME_OF_CIRCLE - 10000, index = 1;
		  for (var i = COUNT_OF_ORDERS * 2; i < COUNT_OF_ORDERS * 3; i++) {
				setTimeout(updateOrder, timeOfIter, i, index);
				timeOfIter+= 500, index++;
			}; 
		};

		function updateOrder(i, index) {
			if (i < orders.length)
				$('.worker:nth-child(' + number + ') .dinamic .worker-order:nth-child(' + index + ')').toggleClass('animated flipInX')
																																																	 .html(getTemplateForOrder(orders[i]));																								
			else
				$('.worker:nth-child(' + number + ') .dinamic .worker-order:nth-child(' + index + ')').toggleClass('animated flipInX')
																														.html('<tr class="order-details"><td></td></tr>'); 
			setTimeout(function () {
				$('.worker:nth-child(' + number + ') .dinamic .worker-order:nth-child(' + index + ')').toggleClass('animated flipInX');
			}, 1000)
		};
	};
};
function showVideo() {
	$('.bgvideo').toggle()
							 .get(0).play();
};
function getTimeOfCircle() {
		return TIME_OF_CIRCLE;
	};
function showTime() {
	var now = new Date();
	$('.time p').html(now.getDate() + ' ' + translateMonth(now.getMonth()) +
									  ' ' + now.getHours() + ':' + roundTime(now.getMinutes()) + ':' + roundTime(now.getSeconds()));
	function roundTime(time) {
		return time < 10 ? '0' + time : time;
	};
	function translateMonth(month) {
		switch(month) {
			case 0:
				return 'января';
			case 1:
			 	return 'февраля';
			case 2:
				return 'марта';
			case 3:
			 	return 'апреля';
			case 4:
				return 'мая';
			case 5:
			 	return 'июня';
			case 6:
				return 'июля';
			case 7:
			 	return 'августа';
			case 8:
				return 'сентября';
			case 9:
			 	return 'октября';
			case 10:
				return 'ноября';
			case 11:
			 	return 'декабря';
		};
	};	
};