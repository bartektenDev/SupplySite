<?php
    $txt = "./o/ls.txt";
    if ( isset($_POST['ordercode']) || isset($_POST['itemnametextform']) || isset($_POST['amountChange'])) { // check if both fields are set
        $fh = fopen($txt, 'a');
        $txt= 'Order Code: '.$_POST['ordercode'].' - Item: '.$_POST['itemnametextform'].' - Amount: '.$_POST['amountChange']."\n";
        fwrite($fh,$txt); // Write information to the file
        fclose($fh); // Close the file
        echo "Your order was recieved! Now redirecting in 2 seconds...";
    }else{
        echo "Sorry but looks like we ran into an error. Your order failed.";
    }
    sleep(4);
    header("Location: http://192.168.1.7/dashboard/orderrecieved.html");

?>
