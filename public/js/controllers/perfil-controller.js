angular.module('abcdlacosEternos').controller('PerfilController',
    function ($scope,$http, $stateParams, $location, Profile) {  //$routeParams

    //Get profile gravado no SessionStorage
    var userTogo = JSON.parse(sessionStorage.getItem("Togo"));

    // Valida a permissao conforme profile 
    Profile.setRoles(userTogo.profile);

    //Recebe funcao de validaçao de profile 
    $scope.profile = Profile;

    //View email/profile to user logado
    $scope.UserProfile = userTogo;

    
    



 /*   console.log("Profile.isAdmin():"+ Profile.isAdmin());
    console.log("Profile.isVisualization():"+ Profile.isVisualization());
    console.log("Profile.isModification():"+ Profile.isModification());
    console.log("Profile.isPartner:"+ Profile.isPartner()); */   
        
        




      

    });