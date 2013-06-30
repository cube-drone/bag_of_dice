function random_n(d){
    var val = Math.floor((Math.random()*d)+1);
    if( val == 100 ){
        return "00";
    }
    return val;
}

function DiceCtrl($scope) {
    $scope.roll = [
    ];
    $scope.available_dice = [
        {'d':2, 'value':1},
        {'d':4, 'value':2},
        {'d':6, 'value':3},
        {'d':8, 'value':4},
        {'d':10, 'value':5},
        {'d':12, 'value':6},
        {'d':20, 'value':10},
        {'d':100, 'value':50}
    ];
    $scope.dice = [
        {'d':6, 'value':3}, 
        {'d':6, 'value':5}
    ];
    $scope.initDie = function(){
        // Force jQuery Mobile to render buttons when die are added.
        $('.dice').trigger('create');
    }
    $scope.add = function(die){
        $scope.dice.push({'d':die.d, 'value':random_n(die.d)});
    };
    $scope.delete = function(die){
        $scope.dice.splice( $scope.dice.indexOf(die), 1 );
    };
    $scope.roll = function(i){
        if(typeof(i) == "undefined"){
            $.each($scope.dice, function(index, die){
                $scope.dice[index].value = random_n(die.d);
            });
        }
        else{
            $scope.dice[i].value = random_n( $scope.dice[i].d ); 
        }
    };
    
}
