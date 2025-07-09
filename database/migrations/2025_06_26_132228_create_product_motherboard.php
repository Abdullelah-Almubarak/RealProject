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
        Schema::create('product_motherboard', function (Blueprint $table) {
            $table->id();
            $table->foreignId("product_id")->constrained("product");
            $table->string("company_name");
            $table->string("socket");
            $table->string("ram_type");
            $table->string("cpu_type");
            $table->string("motherboard_type");
            $table->binary("wifi");
            $table->string("color");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product_motherboard');
    }
};
