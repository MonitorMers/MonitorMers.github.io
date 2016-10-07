function Worker(avatar, name, orders) {
	this.avatar = avatar;
	this.name = name;
	this.orders = orders;
};
function getTemplateForWorker(worker, number) {
	var answer = '<div class="worker ' + number + '"><div class="worker-personal"> \
								<img src="img/' + worker.avatar + '.jpg" alt="worker-avatar" \
								class="worker-avatar img-thumbnail"> \
								<h2 class="worker-name">'+ worker.name + '</h2></div>';
	return answer;
};
