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
        Schema::create('adress', function (Blueprint $table) {
            $table->id();
            $table->foreignId("user_id")->constrained();
            $table->string("first_name");
            $table->string("last_name");
            $table->string("first_add");
            $table->string("sec_add");
            $table->string("city");
            $table->string("state_or_region");
            $table->string("mobile");
            $table->string("extra_detail");
            $table->binary("default");
            $table->uuid("adress_");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('adress');
    }
};
