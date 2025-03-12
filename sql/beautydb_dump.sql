-- beautydb_dump
drop database beautydb;
CREATE DATABASE  IF NOT EXISTS `beautydb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `beautydb`;
-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: myshop2019
-- ------------------------------------------------------
-- Server version	8.0.20

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
-- Table structure for table `customer`
--
DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `id` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `name` varchar(10) not null,
  `phone` varchar(23) NOT NULL,
  `email` varchar(50) NOT NULL,
  `zipcode` int(5) not null,
  `address` varchar(80) NOT NULL,
  `extra_address` varchar(80) not null,
  `gender` char(1) NULL,
  `birth` varchar(10) null,
  `register_date` datetime NOT NULL,
  `membership` varchar(10) default 'Family' null,
  `type` char(1) default 'c', -- 관리자, 일반고객 구분
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
INSERT INTO `customer` VALUES ('agikim','agikim','김아기','010-9603-8126','agi.kim@gmail.com','12345','서울시 강남구 서초대로 11-22길','101동 101호','F','1972-05-18',now(),'Family','c'),
							  ('agoh','agoh','오암기','010-5972-8213','memoryoh@naver.com','12345','서울시 강남구 서초대로 11-22길','101동 101호','F','1994-04-06',now(),null,'a');
--   
--
-- Dumping data for table `customer`
--


--
-- Table structure for table `category`
--
DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `category_id` char(3) NOT NULL,
  `category_name` varchar(20) NOT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

INSERT INTO `category` VALUES ('100','스킨케어'),('200','바디케어'),('300','라이프스타일'),('400','세트');
  
--
-- Dumping data for table `category`
--


--
-- Table structure for table `sub_category`
--
DROP TABLE IF EXISTS `sub_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sub_category` (
  `category_id` char(3) NOT NULL,
  `sub_category_id` char(3) NOT NULL,
  `sub_category_name` varchar(20) NOT NULL,
  PRIMARY KEY (`sub_category_id`),
  key `category_id` (`category_id`),
  CONSTRAINT `category_id_fk1` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

INSERT INTO `sub_category` (`sub_category_id`, `sub_category_name`) 
VALUES ('001','선케어'),('002','세럼'),('003','젤/크림'),('004','토너/에센스'),('005','클렌저'),('006','각질제거'),('007','마스크팩');
 
--
-- Dumping data for table `sub_category`
--


--
-- Table structure for table `product`
--
DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `pid` int auto_increment,
  `category_id` char(3) NOT NULL,
  `sub_category_id` char(3) NOT NULL,
  `pname` varchar(30) NOT NULL,
  `price` int not null,
  `discount_rate` int not null,
  `main_image` json not null,
  `main_origin_image` json null,
  `slide_image` json not null,
  `slide_origin_image` json null,
  `desc_image` json not null,
  `desc_origin_image` json null,
  `pdate` datetime not null, -- 상품 등록 날짜
  PRIMARY KEY (`pid`),
  CONSTRAINT `category_id_fk2` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`),
  CONSTRAINT `sub_category_id_fk1` FOREIGN KEY (`sub_category_id`) REFERENCES `sub_category` (`sub_category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
--
-- Dumping data for table `product`
--


--
-- Table structure for table `cart`
--
DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `cid` int auto_increment,
  `pid` int NOT NULL,
  `id` varchar(20) NOT NULL,
  `qty` int not null,
  PRIMARY KEY (`cid`),
  CONSTRAINT `pid_fk1` FOREIGN KEY (`pid`) REFERENCES `product` (`pid`),
  CONSTRAINT `id_fk1` FOREIGN KEY (`id`) REFERENCES `customer` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
--
-- Dumping data for table `cart`
--


--
-- Table structure for table `order`
--
DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order` (
  `oid` int auto_increment,
  `id` varchar(20) NOT NULL,
  `pid` int NOT NULL,
  `oder_number` varchar(30) not null,
  `qty` int not null,
  `total_price` int not null,
  `odate` datetime not null,
  PRIMARY KEY (`oid`),
  CONSTRAINT `pid_fk2` FOREIGN KEY (`pid`) REFERENCES `product` (`pid`),
  CONSTRAINT `id_fk2` FOREIGN KEY (`id`) REFERENCES `customer` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
--
-- Dumping data for table `order`
--


--
-- Table structure for table `review`
--
DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `rid` int auto_increment,
  `id` varchar(20) NOT NULL,
  `pid` int NOT NULL,
  `subject` varchar(100) not null, -- 리뷰 글 제목
  `text` varchar(1000) not null, -- 리뷰 내용
  `review_image` json null,
  `rdate` datetime not null,
  `view_count` int default 0,
  PRIMARY KEY (`rid`),
  CONSTRAINT `pid_fk3` FOREIGN KEY (`pid`) REFERENCES `product` (`pid`),
  CONSTRAINT `id_fk3`FOREIGN KEY (`id`) REFERENCES `customer` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
--
-- Dumping data for table `order_detail`
--

--
-- Table structure for table `wish` :: 관심상품
--
DROP TABLE IF EXISTS `wish`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wish` (
  `wid` int auto_increment,
  `id` varchar(20) NOT NULL,
  `pid` int NOT NULL,
  PRIMARY KEY (`wid`),
  CONSTRAINT `pid_fk4` FOREIGN KEY (`pid`) REFERENCES `product` (`pid`),
  CONSTRAINT `id_fk4`FOREIGN KEY (`id`) REFERENCES `customer` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
--
-- Dumping data for table `wish`
--


--
-- Table structure for table `qna`
--
DROP TABLE IF EXISTS `qna`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `qna` (
  `qid` int auto_increment,
  `id` varchar(20) NOT NULL,
  `pid` int NOT NULL,
  `title` varchar(100) not null,
  `text` varchar(1000) not null,
  PRIMARY KEY (`qid`),
  CONSTRAINT `pid_fk5` FOREIGN KEY (`pid`) REFERENCES `product` (`pid`),
  CONSTRAINT `id_fk5`FOREIGN KEY (`id`) REFERENCES `customer` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
--
-- Dumping data for table `qna`
--

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-12