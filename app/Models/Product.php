<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Product extends Model{
    use HasFactory, Notifiable;

    protected $table="product";

    protected $fillable=[
        "product_name",
        "product_image",
        "product_desc",
        "price",
        "available",
        "quantity"
    ];

    protected $hidden=[
        "product_",
        "product_num",
        "created_at",
        "updated_at"
    ];

    protected function casts():array
    {
        return["product_" =>"hashed",
        "created_at"=>"datetime",
        "updated_at"=>"datetime"];
    }

    public function getRouteKeyName()
    {
        return "product_name";
    }

    // public function images(){
    //     return $this->hasMany(Product_images::class,"product_id");
    // }

//     public function getAvatarAtribute(){
//     return $this->getAvatar();
//    }
}