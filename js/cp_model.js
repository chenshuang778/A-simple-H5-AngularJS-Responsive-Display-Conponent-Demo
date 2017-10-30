var app = angular.module('myApp',[]);
app.controller('myCtrl',function($scope){
  // TODO: Read data from the json file
  $scope.items= [
     {
         "name": "ItemOne",
         "icon": "http://mmbiz.qpic.cn/mmbiz/iabPk7vD1sOIjDQk79AibVSK5zsaZbkSdF3icAryB8Whl9YwqcUfUZkQQLWnqHGYqXWMI04Wf3BWicM8wiaFSF4fZXA/640?wx_fmt=png&wxfrom=5&wx_lazy=1",
         "type": "3",
         "description": "This is test description"
     },
     {
         "name": "ItemOne",
         "icon": "http://mmbiz.qpic.cn/mmbiz/iabPk7vD1sOIjDQk79AibVSK5zsaZbkSdF3icAryB8Whl9YwqcUfUZkQQLWnqHGYqXWMI04Wf3BWicM8wiaFSF4fZXA/640?wx_fmt=png&wxfrom=5&wx_lazy=1",
         "type": "3",
         "description": "This is test description"
     }
  ];
});