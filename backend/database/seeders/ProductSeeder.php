<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = [
            [
                'name' => 'Polo Shirt Premium',
                'price' => 45.00,
                'image' => '/assets/products/polo.png',
                'description' => 'Classic polo shirt made from high-quality cotton blend fabric.',
                'category' => 'Clothing',
                'stock' => 50,
            ],
            [
                'name' => 'Premium Jacket',
                'price' => 89.99,
                'image' => '/assets/products/jacket.png',
                'description' => 'Stylish and comfortable jacket perfect for all seasons.',
                'category' => 'Clothing',
                'stock' => 35,
            ],
            [
                'name' => 'Business Suit',
                'price' => 199.99,
                'image' => '/assets/products/suit.png',
                'description' => 'Professional business suit for formal occasions and office wear.',
                'category' => 'Clothing',
                'stock' => 20,
            ],
            [
                'name' => 'Leather Wallet',
                'price' => 59.99,
                'image' => '/assets/products/wallet.png',
                'description' => 'Premium leather wallet with multiple card slots and compartments.',
                'category' => 'Accessories',
                'stock' => 40,
            ],
            [
                'name' => 'Travel Backpack',
                'price' => 79.99,
                'image' => '/assets/products/backpack.png',
                'description' => 'Durable travel backpack with ergonomic design and laptop compartment.',
                'category' => 'Accessories',
                'stock' => 30,
            ],
            [
                'name' => 'Casual Shorts',
                'price' => 34.99,
                'image' => '/assets/products/shorts.png',
                'description' => 'Comfortable casual shorts perfect for summer and outdoor activities.',
                'category' => 'Clothing',
                'stock' => 60,
            ],
            [
                'name' => 'Premium Headphones',
                'price' => 149.99,
                'image' => '/assets/products/headphones.png',
                'description' => 'High-quality headphones with noise cancellation and excellent sound quality.',
                'category' => 'Electronics',
                'stock' => 25,
            ],
            [
                'name' => 'Kitchen Pot Set',
                'price' => 79.99,
                'image' => '/assets/products/pot.png',
                'description' => 'Non-stick cookware set perfect for all your kitchen needs.',
                'category' => 'Kitchen',
                'stock' => 18,
            ],
            [
                'name' => 'Electric Kettle',
                'price' => 39.99,
                'image' => '/assets/products/kettle.png',
                'description' => 'Fast-boiling electric kettle with automatic shut-off feature.',
                'category' => 'Kitchen',
                'stock' => 45,
            ],
            [
                'name' => 'Premium Smartphone Pro Max',
                'price' => 1299.00,
                'image' => '/assets/products/smartphone.png',
                'description' => 'Latest flagship smartphone with advanced camera and performance.',
                'category' => 'Electronics',
                'stock' => 15,
            ],
            [
                'name' => 'Latest Smartphone Model',
                'price' => 899.00,
                'image' => '/assets/products/smartphone-2.png',
                'description' => 'Great budget-friendly smartphone with solid performance.',
                'category' => 'Electronics',
                'stock' => 28,
            ],
            [
                'name' => 'Smart Watch Ultra',
                'price' => 599.00,
                'image' => '/assets/products/smartwatch.png',
                'description' => 'Feature-rich smartwatch with health tracking and notifications.',
                'category' => 'Wearables',
                'stock' => 22,
            ],
            [
                'name' => 'Canon Camera EOS 2000',
                'price' => 998.00,
                'image' => '/assets/products/camera.png',
                'description' => 'Professional DSLR camera with 10x zoom and advanced features.',
                'category' => 'Photography',
                'stock' => 12,
            ],
            [
                'name' => 'Gaming Laptop Pro 2024',
                'price' => 1499.00,
                'image' => '/assets/products/laptop.png',
                'description' => 'High-performance gaming laptop with RTX graphics card.',
                'category' => 'Computers',
                'stock' => 10,
            ],
            [
                'name' => 'GoPro HERO6 4K Action Camera',
                'price' => 386.00,
                'image' => '/assets/products/go-pro.png',
                'description' => 'Compact 4K action camera perfect for adventures and vlogging.',
                'category' => 'Photography',
                'stock' => 16,
            ],
            [
                'name' => 'Premium Wireless Headset',
                'price' => 129.99,
                'image' => '/assets/products/headset.png',
                'description' => 'Wireless gaming headset with surround sound and microphone.',
                'category' => 'Electronics',
                'stock' => 32,
            ],
        ];

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}
