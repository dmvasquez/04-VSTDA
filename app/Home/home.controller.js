(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = [];

    /* @ngInject */
    function HomeController() {
        var vm = this;
        
        vm.posts = [];
        vm.addPost = addPost;

        vm.aSort = '';

        vm.sortPost = sortPost;
        vm.hPost = hPost;
        vm.lPost = lPost;

        /////////////////////


        function addPost() {
            var obj = {text: vm.newPost, class: vm.newClass}

            switch (obj.class) {
                case '0':
                    obj.color = "list-group-item-info"
                    break
                case '1':
                    obj.color = "list-group-item-warning"
                    break
                case '2':
                    obj.color = "list-group-item-danger"
                    break
                default:
                    obj.color = "list-group-item-info"
            }
            vm.posts.push(obj);

            vm.newPost = '';
        };

        function hPost() {
            vm.aSort = '-class';
        }

        function lPost() {
            vm.aSort = 'class';
        }

        function sortPost() {
            vm.aSort = 'text';
        }
    }
})();