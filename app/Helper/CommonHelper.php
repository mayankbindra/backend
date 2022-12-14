<?php 

use App\Models\Configuration;

function getConfiguration()
{
    return Configuration::pluck('value', 'name');
}