SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

-- Table structure for table `products`

CREATE TABLE `products` (
  `product_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `product_name` varchar(20) NOT NULL,
  `unit_price` float(8,2) NOT NULL DEFAULT 0.00,
  `unit_quantity` varchar(15) NOT NULL,
  `in_stock` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `amount` int(2) NOT NULL DEFAULT 1,
  `img_src` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Data for table `products`

INSERT INTO `products` (`product_id`, `product_name`, `unit_price`, `unit_quantity`, `in_stock`, `amount`, `img_src`) VALUES
(1000, 'Fish Fingers', 2.55, '500 gram', 1500, 1, 'images/icons/fish.png'),
(1001, 'Fish Fingers', 5.00, '1000 gram', 750, 1, 'images/icons/fish.png'),
(1002, 'Hamburger Patties', 2.35, 'Pack 10', 1200, 1, 'images/icons/burger.png'),
(1003, 'Shelled Prawns', 6.90, '250 gram', 300, 1, 'images/icons/prawn.png'),
(1004, 'Tub Ice Cream', 1.80, '1 Litre', 800, 1, 'images/icons/ice_cream.png'),
(1005, 'Tub Ice Cream', 3.40, '2 Litre', 1200, 1, 'images/icons/ice_cream.png'),
(2000, 'Panadol', 3.00, 'Pack 24', 2000, 1, 'images/icons/panadol.png'),
(2001, 'Panadol', 5.50, 'Bottle 50', 1000, 1, 'images/icons/panadol.png'),
(2002, 'Bath Soap', 2.60, 'Pack 6', 500, 1, 'images/icons/soap.png'),
(2003, 'Garbage Bags Small', 1.50, 'Pack 10', 500, 1, 'images/icons/waste.png'),
(2004, 'Garbage Bags Large', 5.00, 'Pack 50', 300, 1, 'images/icons/waste.png'),
(2005, 'Washing Powder', 4.00, '1000 gram', 800, 1, 'images/icons/washing_powder.png'),
(2006, 'Laundry Bleach', 3.55, '2 Litre bottle', 250, 1, 'images/icons/bleach.png'),
(3000, 'Cheddar Cheese', 8.00, '500 gram', 1000, 1, 'images/icons/cheese.png'),
(3001, 'Cheddar Cheese', 15.00, '1000 gram', 1000, 1, 'images/icons/cheese.png'),
(3002, 'T-Bone Steak', 7.00, '1000 gram', 200, 1, 'images/icons/t_bone.png'),
(3003, 'Navel Oranges', 3.99, 'Bag 20', 200, 1, 'images/icons/orange.png'),
(3004, 'Bananas', 1.49, 'Kilo', 400, 1, 'images/icons/bananas.png'),
(3005, 'Peaches', 2.99, 'Kilo', 500, 1, 'images/icons/peach.png'),
(3006, 'Grapes', 3.50, 'Kilo', 200, 1, 'images/icons/grapes.png'),
(3007, 'Apples', 1.99, 'Kilo', 500, 1, 'images/icons/apple.png'),
(4000, 'Earl Grey Tea Bags', 2.49, 'Pack 25', 1200, 1, 'images/icons/tea_bag.png'),
(4001, 'Earl Grey Tea Bags', 7.25, 'Pack 100', 1200, 1, 'images/icons/tea_bag.png'),
(4002, 'Earl Grey Tea Bags', 13.00, 'Pack 200', 800, 1, 'images/icons/tea_bag.png'),
(4003, 'Instant Coffee', 2.89, '200 gram', 500, 1, 'images/icons/coffee.png'),
(4004, 'Instant Coffee', 5.10, '500 gram', 500, 1, 'images/icons/coffee.png'),
(4005, 'Chocolate Bar', 2.50, '500 gram', 300, 1, 'images/icons/chocolate_bar.png'),
(5000, 'Dry Dog Food', 5.95, '5kg Pack', 400, 1, 'images/icons/dog_food.png'),
(5001, 'Dry Dog Food', 1.95, '1kg Pack', 400, 1, 'images/icons/dog_food.png'),
(5002, 'Bird Food', 3.99, '500g packet', 200, 1, 'images/icons/bird_food.png'),
(5003, 'Cat Food', 2.00, '500g', 200, 1, 'images/icons/cat_food.png'),
(5004, 'Fish Food', 3.00, '500g', 200, 1, 'images/icons/fish_food.png');

ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`);
COMMIT;
