var uksw_points = 0;
var sgh_points = 0;
var $uksw_counter = $('#uksw-score');
var $sgh_counter = $('#sgh-score');

$('.uksw-container').on('click', function(){    
    uksw_points++;  
    updateCounts();
});

$('.sgh-container').on('click', function(){
    sgh_points++;
    updateCounts();
});

function updateCounts()
{
    $sgh_counter.text(sgh_points);
    $uksw_counter.text(uksw_points);
}