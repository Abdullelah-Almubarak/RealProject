<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Product_images extends Model{
    use HasFactory, Notifiable;
    


    protected $fillable=[
        "image_name"
    ];

    protected $hidden=[
        "product_id",
        "created_at",
        "updated_at"
    ];

    // public function product(){
    //     return $this->belongsTo(Product::class,"product_id");
    // }
//     public function getAvatarAtribute(){
//     return $this->getAvatar();
//    }
}