const angular = require('angular');
const ngRoute = require('angular-route');
import routing from './main.routes';

export class MainController {
  $http;
  socket;
  awesomeMessages = [];
  newNumber = '';
  newName = '';
  newMessage = '';

  /*@ngInject*/
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('message');
    });
  }

  $onInit() {
    this.$http.get('/api/messages').then(response => {
      this.awesomeMessages = response.data;
      this.socket.syncUpdates('message', this.awesomeMessages);
    });
  }

  addMessage() {
    if (this.newNumber && this.newName && this.newMessage) {
      let newMessage = {'id': this.newNumber, 'name': this.newName, 'message': this.newMessage };
      this.$http.post('/api/messages', newMessage);
      this.newNumber = '';
      this.newName = '';
      this.newMessage = '';
    }
  }

  deleteMessage(message) {
    this.$http.delete('/api/messages/' + message._id);
  }
}

export default angular.module('ngSocketsApp.main', [
  ngRoute])
    .config(routing)
    .component('main', {
      template: require('./main.html'),
      controller: MainController
    })
    .name;
