<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Product_storage extends Model{

    use HasFactory, Notifiable;

    protected $table="Product_storage";
    // protected $timestamps = false;
    const CREATED_AT = null;
    const UPDATED_AT = null;

    protected $fillable=[
        "company_name",
        "size",
        "type"
    ];
    
    protected $hidden=[
        "product_id"
    ];
}