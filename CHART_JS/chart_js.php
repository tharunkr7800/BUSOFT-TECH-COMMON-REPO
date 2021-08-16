<?php
include ('config.php');

$incidents=$conn->query('SELECT * FROM incidents');
//$contacts =$conn->query('SELECT * FROM contacts');


if ($incidents->num_rows > 0) {
$myhashmap=array();
$product_map=array();
$act_map=array();
$ass_acc=array();

while ($row = $incidents->fetch_assoc()){ 
    $str = $row["Status"];
    $procuct = $row["Product ID"];
    $active=$row["contact-status"];
    $acc= $row["Assigned Account"];
    if(isset($myhashmap[$str])){
        $myhashmap[$str]++;
    }else{
        $myhashmap[$str]=1;
    }
    if(isset($product_map[$procuct])){
        $product_map[$procuct]++;
    }else{
        $product_map[$procuct]=1;
    }
    if(isset($act_map[$active])){
        $act_map[$active]++;
    }else{
        $act_map[$active]=1;
    }
    if(isset($ass_acc[$acc])){
        $ass_acc[$acc]++;
    }else{
        $ass_acc[$acc]=1;
    }
    
}
array_multisort($myhashmap, SORT_DESC,$myhashmap);
array_multisort($product_map, SORT_DESC,$product_map);
array_multisort($ass_acc, SORT_DESC,$ass_acc);
// foreach($ass_acc as $a => $a_value) {
//     echo "Key=" . $a . ", Value=" . $a_value;
//     echo ",";
//   }
}else{
    echo "not enough number of rows";
}
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>my Chart</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="style.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/chart.js"> </script>
       
    </head>
<body style="background-color: black;">
<div id =div1 style="width:min-content;height:min-content;float:left;background-color:white;">
<canvas id=piechart>
<script>
        var space = document.getElementById("piechart").getContext('2d');
       // var barColors = ["#003f5c", "#58508d", "#bc5090", "#ff6361", "#ffa600",'#00c689'];
        var chart3 = new Chart(space,{
            type:'pie',
            data:{
                labels:['Active','Not Active'],
                datasets:[{
                    data:[
                        <?php 
                          foreach($act_map as $a => $a_value) {
                            echo  $a_value;
                            echo ","; }  ?>
                    ],
        backgroundColor:['#314A52','#52686A'],
        
                },
                ]
            },
            options:{
               
                plugins:{
                    legend:{
                        display:true
                    },
                    
                    title:{
                        text:'Contacts Active/Not Active',
                        display:true
                    }
                }
            }
        })  
        </script>

    </canvas>
</div>
<div id = div style="width: 1030px;height:300px;float:right;top:0%;background-color:white;">
    <canvas id = chart style="height: 150px;">
    <script>
   
   var space = document.getElementById("chart").getContext('2d');
    var xValues = [<?php 
    foreach($ass_acc as $a => $a_value) {
        if($a_value<=100){
            break;
        }
        echo '"'. $a.'"';
        echo ",";
        };?>];
    var yValues = [<?php 
        foreach($ass_acc as $a => $a_value) {
            if($a_value<=100){
                break;
            }
        echo  $a_value;
        echo ",";
  }?>];
   
    var barColors = ["#073059","#003f5c","#254B62", "#58508d", "#bc5090", "#ff6361", "#ffa600",'#00c689'];

    var chart3 = new Chart(space, {
        type: 'bar',
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
    options: {
    responsive: true,
    plugins: {
      legend: {
        display:false,
      },
      title:{
          text:"Incidents Vs Account",
          display:true
      }
    }
  }
        
    });
    </script>
    </canvas>
</div>
<div  id = div2 style="float: left;background-color:white;">
        <canvas id=barchart >
    <script>
   
   var space = document.getElementById("barchart").getContext('2d');
    var xValues = [<?php 
    foreach($myhashmap as $a => $a_value) {
        echo '"'. $a.'"';
        echo ",";
        };?>];
    var yValues = [<?php 
        foreach($myhashmap as $a => $a_value) {
        echo  $a_value;
        echo ",";
  }?>];
   
    var barColors = ["#52006A", "#DA0037", "#CD113B", "#FF7600", "#FFA900",'#FFC107'];

    var chart1 = new Chart(space, {
        type: 'bar',
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
    options: {
    responsive: true,
    plugins: {
      legend: {
        display:false,
      },
      title:{
          text:"Incidents Vs Status",
          display:true
      }
    }
  }
        
    });
    </script>
        </canvas>
   </div> 

<div id = "div3" style="background-color:white;">
<canvas id = colchart>
    <script>
     var space = document.getElementById("colchart").getContext('2d');
    var proxValues = [<?php 
    foreach($product_map as $p => $p_value) {
        if($p_value<=600){
            continue;
        }
        echo '"'. $p.'"';
        echo ",";
        };?>];
    var proyValues = [<?php 
        foreach($product_map as $p => $p_value) {
            if($p_value<=600){
                continue;
            }
        echo  $p_value;
        echo ",";
  }?>];
   
    var chart2 = new Chart(space, {
        type: 'bar',
        data: {
            labels: proxValues,
            datasets: [{
                backgroundColor:['#0F044C','#141E61','#293B5F','#02475E','#025955','#00587A','#276678','#1687A7','#00917C','#16C79A'],
                data: proyValues
            }]
        },
    options: {
    indexAxis: 'y',
        elements: {
      bar: {
        borderWidth: 2,
      }
    },
    responsive: true,
    plugins: {
      legend: {
        display:false,
      },
      title:{
          text:'Incidents Vs Products',
          display:true
      }
    }
  }
});

    </script>
    </canvas>
</div>
   

</body>
</html>
