function main() {
	setInterval(showTime, 1000);// Выводим время
	// setInterval(showVideo, 10000);
	var workers = getWorkers(); // Получаем рабочих
	var countWorkers = workers.length;
	if (countWorkers == 1) {
		showWorker(workers[0], 1);
		makeOneColumn(); // Выводим данные единственного рабочего
	} else if (countWorkers == 2) {
		showWorker(workers[0], 1); // Выводим данные первого рабочего
		showWorker(workers[1], 2); // Выводим данные второго рабочего
		makeTwoColumns(); 
	}	else if (countWorkers == 3) {
		showWorker(workers[0], 1); // Выводим данные первого рабочего
		showWorker(workers[1], 2); // Выводим данные второго рабочего
		showWorker(workers[2], 3); // Выводим данные третьего рабочего
		makeThreeColumns();
	} else {
		showWarning(); // Выводим информацию, что заказов нет
	};
};
$(document).ready(function () {
	main();
});