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
        Schema::create('products', function (Blueprint $table) {
            // Primary key auto-incrementing ID
            $table->id(); 
            
            // Product Name
            $table->string('name'); 
            
            // Product Price (10 total digits, 2 decimal places)
            $table->decimal('price', 10, 2); 
            
            // Image path string (nullable if products can skip an image)
            $table->string('image')->nullable(); 
            
            // Comprehensive product text details
            $table->text('description')->nullable(); 
            
            // Category categorization (String format or choice)
            $table->string('category'); 
            
            // Quantity inventory count (defaults to 0 available)
            $table->integer('stock')->default(0); 
            
            // Automatically creates 'created_at' and 'updated_at' columns
            $table->timestamps(); 
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
