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
        Schema::create('product_cpu', function (Blueprint $table) {
            $table->id();
            $table->foreignId("product_id")->constrained("product");
            $table->string("company_name");
            $table->bigInteger("cores");
            $table->string("generation");
            $table->string("socket");
            $table->string("series");
            $table->binary("overclockable");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product_cpu');
    }
};
