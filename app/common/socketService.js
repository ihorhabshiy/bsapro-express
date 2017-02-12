class SocketService {
	setSocketIo (io) {
		this._io = io;

		io.on('connection', function (socket) {
			console.log('user connected', socket.id);
			
			socket.on('todo:added', function (todo) {
				socket.broadcast.emit('todo:added', todo);
			});

			socket.on('todo:updated', function (todo) {
				socket.broadcast.emit('todo:updated', todo);
			});

			socket.on('todo:deleted', function (todoId) {
				socket.broadcast.emit('todo:deleted', todoId);
			});
		});
	}

	getSocketIo () {
		return this._io;
	}
}

module.exports = new SocketService();
