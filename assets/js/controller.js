/**
 * Created by damuser on 4/03/16.
 */


app.controller("TweetsController", function($scope){

    $scope.res = "resultado: ";
    $scope.nums = [1, 4, 7, 9, 14];

    $scope.tweets = [
        {
            user: 19,
            tweet: 'The Book of Trees'
        },
        {
            user: 8,
            tweet: 'Program or be Programmed'
        },
        {
            user: 12,
            tweet: 'Program or be Programmed'
        },
        {
            user: 20,
            tweet: 'The Book of Trees'
        },
        {
            user: 11,
            tweet: 'The Book of Trees'
        },
        {
            user: 8,
            tweet: 'Program or be Programmed'
        }
    ]

    $scope.test = function(){
        return "testttttt";
    };

});