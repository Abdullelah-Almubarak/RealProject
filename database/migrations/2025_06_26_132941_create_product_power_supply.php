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
        Schema::create('product_power_supply', function (Blueprint $table) {
            $table->id();
            $table->foreignId("product_id")->constrained("product");
            $table->string("company_name");
            $table->string("type");
            $table->string("efficiency");
            $table->bigInteger("watt");
            $table->string("color");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product_power_supply');
    }
};
