-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: beautydb
-- ------------------------------------------------------
-- Server version	8.4.4

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Temporary view structure for view `view_cart_list`
--

DROP TABLE IF EXISTS `view_cart_list`;
/*!50001 DROP VIEW IF EXISTS `view_cart_list`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_cart_list` AS SELECT 
 1 AS `cid`,
 1 AS `qty`,
 1 AS `id`,
 1 AS `pid`,
 1 AS `pname`,
 1 AS `price`,
 1 AS `discount_rate`,
 1 AS `discount`,
 1 AS `discount_price`,
 1 AS `main_image`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_myorder`
--

DROP TABLE IF EXISTS `view_myorder`;
/*!50001 DROP VIEW IF EXISTS `view_myorder`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_myorder` AS SELECT 
 1 AS `oid`,
 1 AS `id`,
 1 AS `pid`,
 1 AS `order_number`,
 1 AS `qty`,
 1 AS `total_price`,
 1 AS `odate`,
 1 AS `pname`,
 1 AS `delivery_status`,
 1 AS `main_image`,
 1 AS `category_name`,
 1 AS `sub_category_name`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_payment_list`
--

DROP TABLE IF EXISTS `view_payment_list`;
/*!50001 DROP VIEW IF EXISTS `view_payment_list`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_payment_list` AS SELECT 
 1 AS `cid`,
 1 AS `id`,
 1 AS `name`,
 1 AS `address`,
 1 AS `extra_address`,
 1 AS `zipcode`,
 1 AS `phone`,
 1 AS `email`,
 1 AS `pid`,
 1 AS `pname`,
 1 AS `qty`,
 1 AS `discount_price`,
 1 AS `main_image`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_myreview`
--

DROP TABLE IF EXISTS `view_myreview`;
/*!50001 DROP VIEW IF EXISTS `view_myreview`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_myreview` AS SELECT 
 1 AS `id`,
 1 AS `pid`,
 1 AS `subject`,
 1 AS `text`,
 1 AS `review_image`,
 1 AS `rdate`,
 1 AS `view_count`,
 1 AS `pname`,
 1 AS `order_number`*/;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `view_cart_list`
--

/*!50001 DROP VIEW IF EXISTS `view_cart_list`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_cart_list` AS select `ca`.`cid` AS `cid`,`ca`.`qty` AS `qty`,`cu`.`id` AS `id`,`pd`.`pid` AS `pid`,`pd`.`pname` AS `pname`,format((`pd`.`price` * `ca`.`qty`),0) AS `price`,`pd`.`discount_rate` AS `discount_rate`,format(((`pd`.`price` / ifnull(`pd`.`discount_rate`,0)) * `ca`.`qty`),0) AS `discount`,ifnull(round((`pd`.`price` - (`pd`.`price` / ifnull(`pd`.`discount_rate`,0))),-(3)),`pd`.`price`) AS `discount_price`,`pd`.`main_image` AS `main_image` from ((`cart` `ca` join `customer` `cu`) join `product` `pd`) where ((`ca`.`id` = `cu`.`id`) and (`ca`.`pid` = `pd`.`pid`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_myorder`
--

/*!50001 DROP VIEW IF EXISTS `view_myorder`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_myorder` AS select `o`.`oid` AS `oid`,`o`.`id` AS `id`,`p`.`pid` AS `pid`,`o`.`order_number` AS `order_number`,`o`.`qty` AS `qty`,`o`.`total_price` AS `total_price`,`o`.`odate` AS `odate`,`p`.`pname` AS `pname`,`o`.`delivery_status` AS `delivery_status`,`p`.`main_image` AS `main_image`,`ca`.`category_name` AS `category_name`,`sca`.`sub_category_name` AS `sub_category_name` from (((`product` `p` join `orders` `o`) join `category` `ca`) join `sub_category` `sca`) where ((`o`.`pid` = `p`.`pid`) and (`p`.`sub_category_id` = `sca`.`sub_category_id`) and (`p`.`category_id` = `ca`.`category_id`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_payment_list`
--

/*!50001 DROP VIEW IF EXISTS `view_payment_list`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_payment_list` AS select `ca`.`cid` AS `cid`,`cu`.`id` AS `id`,`cu`.`name` AS `name`,`cu`.`address` AS `address`,`cu`.`extra_address` AS `extra_address`,`cu`.`zipcode` AS `zipcode`,`cu`.`phone` AS `phone`,`cu`.`email` AS `email`,`ca`.`pid` AS `pid`,`pd`.`pname` AS `pname`,`ca`.`qty` AS `qty`,ifnull(round((`pd`.`price` - (`pd`.`price` / ifnull(`pd`.`discount_rate`,0))),-(3)),`pd`.`price`) AS `discount_price`,`pd`.`main_image` AS `main_image` from ((`customer` `cu` join `cart` `ca`) join `product` `pd`) where ((`cu`.`id` = `ca`.`id`) and (`ca`.`pid` = `pd`.`pid`)) order by `ca`.`cid` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_myreview`
--

/*!50001 DROP VIEW IF EXISTS `view_myreview`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_myreview` AS select `r`.`id` AS `id`,`p`.`pid` AS `pid`,`r`.`subject` AS `subject`,`r`.`text` AS `text`,`r`.`review_image` AS `review_image`,`r`.`rdate` AS `rdate`,`r`.`view_count` AS `view_count`,`p`.`pname` AS `pname`,`o`.`order_number` AS `order_number` from ((`review` `r` join `product` `p`) join `orders` `o`) where ((`o`.`pid` = `p`.`pid`) and (`p`.`pid` = `r`.`pid`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-24 18:39:16
