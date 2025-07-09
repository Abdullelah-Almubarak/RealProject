<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\ColumnDefinition;
use Illuminate\Support\Facades\Schema;
use function Laravel\Prompts\table;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Schema::dropIfExists('order');
        Schema::create('order', function (Blueprint $table) {
            $table->id();

            
            // $table->unsignedBigInteger("user_id");
            $table->foreignId("user_id")->constrained("users");
            $table->foreignId("adress_id")->constrained("adress");
            $table->foreignId("product_id")->constrained("product");
            // $table->foreign(["user_id","adress_id","product_id"])
            // ->references(["id","id","id"])
            // ->on(["users","adress","product"]);
           
            $table->timestamp("date")->useCurrent();
            $table->bigInteger("order_num")->startingValue(350)->unsigned();
            $table->double("tax");
            $table->bigInteger("total");
            $table->uuid("order_");
        });
        // DB::statement(
        //     "
        //     ALTER TABLE order ADD CONSTRAINT order_product_id
        //     FOREIGN KEY (product_id) 
        //     REFERENCES product(id) ON UPDATE NO ACTION ON DELETE NO ACTION"
        // );
    }

    
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order');
    }
};
