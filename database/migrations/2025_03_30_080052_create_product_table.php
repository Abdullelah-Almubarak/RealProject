<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('product', function (Blueprint $table) {
            $table->id();
            $table->string("product_name");
            $table->string("product_image");
            $table->string("product_desc");
            $table->bigInteger("price");
            $table->bigInteger("quantity");
            $table->binary("available");
            $table->timestamp("created_at");
            $table->timestamp("updated_at");
            $table->bigInteger("product_num")->startingValue(1000)->unsigned();
            $table->uuid("product_");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product');
    }
};
