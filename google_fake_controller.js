var adView = angular.module('adView', ["ngSanitize", "ngCsv", "firebase", "ngCookies"]);

adView.controller('adpreview', function ($scope) {

  $scope.showad2 = false;
  $scope.showad3 = false;

  $scope.ad1 = {
    headline: "Free PPC Preview Tool",
    description1: "Create Some Amazing Ad Copy Today.",
    description2: "Make Your Ad Stand Out!",
    displayurl: "www.example.com/ppc-services", 
    sitelink1: "",
    sl1des1: "",
    sl1des2: "",
    sitelink2: "",
    sitelink3: "",
    sitelink4: "",
    callout1: "",
    callout2: "",
    callout3: "",
    snippetheader: "",
    snippet1: "",
    snippet2: "",
    snippet3: "",
    review: "",
    source: "",
    check: "B",
    topline:false,
    greenad: false,
    sitelinksyes: false,
    sitelinksno: true,
    sitelinkdes: false,
    phonenumber: "",
    sitChange: function() {
      if($scope.ad1.sitelink4.length>=1 || $scope.ad1.sl1des1.length>=1){
        $scope.ad1.sitelinksyes = true;
        $scope.ad1.sitelinksno = false;
        } else {
          $scope.ad1.sitelinksyes = false;
          $scope.ad1.sitelinksno = true;
        }
    },
    ratingModel: function() {
      var url1 = $scope.ad1.displayurl.split("/");
      var url2 = url1[0].split("www.");
      if($scope.ad1.check === "B") {
        $scope.ad1.check = "A";
        $scope.ad1cleanurl = url2[1];
        console.log("hello b");
      } else {
        $scope.ad1.check = "B";
      }
    },
    urlChange: function() {
      var url1 = $scope.ad1.displayurl.split("/");
      var url2 = url1[0].split("www.");
      $scope.ad1cleanurl = url2[1];
    }
  };

    $scope.ad2 = {
    headline: "My Second PPC Ad",
    description1: "Create Some Amazing Ad Copy Today.",
    description2: "Make Your Ad Stand Out!",
    displayurl: "www.example.com/ppc-services", 
    sitelink1: "",
    sitelink2: "",
    sitelink3: "",
    sitelink4: "",
    callout1: "",
    callout2: "",
    callout3: "",
      snippetheader: "",
      snippet1: "",
      snippet2: "",
      snippet3: "",
    review: "",
    source: "",
    check: "B",
    topline:false,
    greenad: false,
    sitelinksyes: false,
    sitelinksno: true,
    phonenumber: "",
    sitChange: function() {
      if($scope.ad2.sitelink4.length>=1){
        $scope.ad2.sitelinksyes = true;
        $scope.ad2.sitelinksno = false;
        } else {
          $scope.ad2.sitelinksyes = false;
          $scope.ad2.sitelinksno = true;
        }
    },
    ratingModel: function() {
      var url1 = $scope.ad2.displayurl.split("/");
      var url2 = url1[0].split("www.");
      if($scope.ad2.check === "B") {
        $scope.ad2.check = "A";
        $scope.ad2cleanurl = url2[1];
        console.log("hello b");
      } else {
        $scope.ad2.check = "B";
      }
    },
    urlChange: function() {
      var url1 = $scope.ad2.displayurl.split("/");
      var url2 = url1[0].split("www.");
      console.log("change ad 2");
      $scope.ad2cleanurl = url2[1];
    },
    showad: function() {
      $scope.showad2 = true;
    }
  };

    $scope.ad3 = {
    headline: "My Final PPC Ad",
    description1: "Create Some Amazing Ad Copy Today.",
    description2: "Make Your Ad Stand Out!",
    displayurl: "www.example.com/ppc-services", 
    sitelink1: "",
    sitelink2: "",
    sitelink3: "",
    sitelink4: "",
    callout1: "",
    callout2: "",
    callout3: "",
      snippetheader: "",
      snippet1: "",
      snippet2: "",
      snippet3: "",    
    review: "",
    source: "",
    check: "B",
    topline:false,
    greenad: false,
    sitelinksyes: false,
    sitelinksno: true,
    phonenumber: "",
    sitChange: function() {
      if($scope.ad3.sitelink4.length>=1){
        $scope.ad3.sitelinksyes = true;
        $scope.ad3.sitelinksno = false;
        } else {
          $scope.ad3.sitelinksyes = false;
          $scope.ad3.sitelinksno = true;
        }
    },
    ratingModel: function() {
      var url1 = $scope.ad1.displayurl.split("/");
      var url2 = url1[0].split("www.");
      if($scope.ad3.check === "B") {
        $scope.ad3.check = "A";
        $scope.ad3cleanurl = url2[1];
        console.log("hello b");
      } else {
        $scope.ad3.check = "B";
      }
    },
    urlChange: function() {
      var url1 = $scope.ad3.displayurl.split("/");
      var url2 = url1[0].split("www.");
      console.log("change ad 3");
      $scope.ad3cleanurl = url2[1];
    },
    showad: function() {
      $scope.showad3 = true;
    }
  };

  var ad1disurl1 = $scope.ad1.displayurl.split("/");
  var ad1disurl2 = ad1disurl1[0].split("www.");
  $scope.ad1cleanurl = ad1disurl2[1];

  var ad2disurl1 = $scope.ad2.displayurl.split("/");
  var ad2disurl2 = ad2disurl1[0].split("www.");
  $scope.ad2cleanurl = ad2disurl2[1];

  var ad3disurl1 = $scope.ad3.displayurl.split("/");
  var ad3disurl2 = ad3disurl1[0].split("www.");
  $scope.ad3cleanurl = ad3disurl2[1];

  var d = new Date();
  var n = d.toString();

  $scope.csvExport = {
    filename: 'Ad Copy' + n,
    getArray: function() {
    return [{
      a: $scope.ad1.headline, 
      b:$scope.ad1.description1, 
      c:$scope.ad1.description2, 
      d: $scope.ad1.displayurl
      },{
      a:3, 
      b:4
      }];
    },
    getHeader: function() {
      return ["Headline", "Description line 1", "Description line 2", "Display URL"];
    }
  };

  $scope.tooltip = function() {
      $(function () {
      $('[data-toggle="popover"]').popover()
      });
    };
});
adView.controller('surveyCtrl', function ($scope, $firebaseArray, $cookies) {
  var ref = new Firebase("https://adpreviewpoll.firebaseio.com/");
  var list = $firebaseArray(ref);
  $scope.userId = "";
    $scope.form = {
      answer: "",
      timeStamp: Firebase.ServerValue.TIMESTAMP,
      email: ""
    };
  var surveyCookie = $cookies.surveyPopup;
  console.log("is there a cookie"+surveyCookie);
 if(!surveyCookie) {
   angular.element(document).ready(function () {
      $scope.formQuestions = true;
      $scope.formEmail = false;
      $scope.formThanks = false;
      $(".survey").delay(2000).slideDown("slow");  
   });
}
  $scope.submitAnswer = function() {

    list.$add({ answer: $scope.form.answer, time: $scope.form.timeStamp }).then(function(ref) {
    var id = ref.key();
    console.log("added record with id " + id);
    list.$indexFor(id); // returns location in the array
    $scope.userId = id;
    $scope.formQuestions = false;
    $scope.formEmail = true;
    });
  };

  $scope.submitEmail = function() {
    var item = list.$getRecord($scope.userId);
    item.email = $scope.form.email;
    list.$save(item).then(function() {
    console.log("email submit");
    $cookies.surveyPopup = 'closed';
    $scope.formEmail = false;
    $scope.formThanks = true;
});
  };
   
  $scope.closesurvey = function() {
    $cookies.surveyPopup = 'closed';
    console.log('close me');
   $(".survey").slideUp("medium");
 };
  
});