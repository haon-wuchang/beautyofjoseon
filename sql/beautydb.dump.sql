CREATE DATABASE  IF NOT EXISTS `beautydb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `beautydb`;
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
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `cid` int NOT NULL AUTO_INCREMENT,
  `pid` int NOT NULL,
  `id` varchar(20) NOT NULL,
  `qty` int NOT NULL,
  PRIMARY KEY (`cid`),
  KEY `pid_fk1` (`pid`),
  KEY `id_fk1` (`id`),
  CONSTRAINT `id_fk1` FOREIGN KEY (`id`) REFERENCES `customer` (`id`),
  CONSTRAINT `pid_fk1` FOREIGN KEY (`pid`) REFERENCES `product` (`pid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (2,4,'agikim',1);
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

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

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES ('100','스킨케어'),('200','바디케어'),('300','라이프스타일'),('400','세트');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `id` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `name` varchar(10) NOT NULL,
  `phone` varchar(23) NOT NULL,
  `email` varchar(50) NOT NULL,
  `zipcode` varchar(10) DEFAULT NULL,
  `address` varchar(80) DEFAULT NULL,
  `extra_address` varchar(80) DEFAULT NULL,
  `gender` char(1) DEFAULT NULL,
  `birth` varchar(10) DEFAULT NULL,
  `register_date` datetime NOT NULL,
  `membership` varchar(10) DEFAULT 'Family',
  `type` char(1) DEFAULT 'c',
  `wish` json DEFAULT NULL,
  `addtional_address` json DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES ('agikim','agikim','김아기','010-9603-1234','agi.kim@gmail.com','06242','서울 강남구 강남대로78길 8','한국빌딩 4층 404호','F','1972-05-18','2025-03-24 09:23:14','Family','c','[3, 4]',NULL),('agoh','agoh','오암기','010-5972-8213','memoryoh@naver.com','12345','서울시 강남구 서초대로 11-22길','101동 101호','F','1994-04-06','2025-03-24 09:23:14',NULL,'a',NULL,NULL);
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `oid` int NOT NULL AUTO_INCREMENT,
  `id` varchar(20) NOT NULL,
  `pid` int NOT NULL,
  `order_number` varchar(30) NOT NULL,
  `qty` int NOT NULL,
  `total_price` int NOT NULL,
  `odate` date NOT NULL,
  `delivery_status` varchar(20) DEFAULT '배송준비중',
  PRIMARY KEY (`oid`),
  KEY `pid_fk2` (`pid`),
  KEY `id_fk2` (`id`),
  CONSTRAINT `id_fk2` FOREIGN KEY (`id`) REFERENCES `customer` (`id`),
  CONSTRAINT `pid_fk2` FOREIGN KEY (`pid`) REFERENCES `product` (`pid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,'agikim',4,'20250328-68859',1,16000,'2025-03-29','배송준비중'),(2,'agikim',1,'20250331-74641',1,36000,'2025-03-31','배송준비중'),(3,'agikim',3,'20250331-74641',1,16000,'2025-03-31','배송준비중');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `pid` int NOT NULL AUTO_INCREMENT,
  `category_id` char(3) NOT NULL,
  `sub_category_id` char(3) NOT NULL,
  `pname` varchar(100) NOT NULL,
  `price` int NOT NULL,
  `discount_rate` int NOT NULL,
  `main_image` json NOT NULL,
  `main_origin_image` json DEFAULT NULL,
  `slide_image` json NOT NULL,
  `slide_origin_image` json DEFAULT NULL,
  `desc_image` json DEFAULT NULL,
  `desc_origin_image` json DEFAULT NULL,
  `pdate` datetime NOT NULL,
  PRIMARY KEY (`pid`),
  KEY `category_id_fk2` (`category_id`),
  KEY `sub_category_id_fk1` (`sub_category_id`),
  CONSTRAINT `category_id_fk2` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`),
  CONSTRAINT `sub_category_id_fk1` FOREIGN KEY (`sub_category_id`) REFERENCES `sub_category` (`sub_category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'100','002','[리미티드에디션] 글로우부스터 키트',38000,20,'[\"upload_files/1.jpg\"]',NULL,'[\"upload_files/s1_1.jpg\", \"upload_files/s1_2.jpg\", \"upload_files/s1_3.jpg\", \"upload_files/s1_4.jpg\", \"upload_files/s1_5.jpg\"]',NULL,'[\"upload_files/d1_1.jpg\", \"upload_files/d1_2.jpg\", \"upload_files/d1_3.jpg\", \"upload_files/d1_4.jpg\", \"upload_files/d1_5.jpg\"]',NULL,'2025-01-01 12:40:00'),(3,'100','001','[NEW] 맑은쌀선크림 아쿠아프레쉬',18000,10,'[\"upload_files/3.jpg\"]',NULL,'[\"upload_files/s3_1.jpg\", \"upload_files/s3_2.jpg\", \"upload_files/s3_3.jpg\", \"upload_files/s3_4.jpg\", \"upload_files/s3_5.jpg\"]',NULL,'[\"upload_files/d3_1.jpg\", \"upload_files/d3_2.jpg\"]',NULL,'2025-01-03 12:40:00'),(4,'100','004','맑은쌀채운토너',18000,10,'[\"upload_files/4.jpg\"]',NULL,'[\"upload_files/s4_1.jpg\", \"upload_files/s4_2.jpg\", \"upload_files/s4_3.jpg\", \"upload_files/s4_4.jpg\", \"upload_files/s4_5.jpg\"]',NULL,'[\"upload_files/d4_1.jpg\", \"upload_files/d4_2.jpg\", \"upload_files/d4_3.jpg\"]',NULL,'2025-01-04 12:40:00'),(5,'100','007','[스테파니미초바PICK] 맑은쌀꿀채운마스크',18000,10,'[\"upload_files/5.jpg\"]',NULL,'[\"upload_files/s5_1.jpg\", \"upload_files/s5_2.jpg\", \"upload_files/s5_3.jpg\", \"upload_files/s5_4.jpg\", \"upload_files/s5_5.jpg\"]',NULL,'[\"upload_files/d5_1.jpg\", \"upload_files/d5_2.jpg\", \"upload_files/d5_3.jpg\", \"upload_files/d5_4.jpg\"]',NULL,'2025-01-05 12:40:00'),(6,'100','003','조선미녀크림 대용량',48000,29,'[\"upload_files/6.jpg\"]',NULL,'[\"upload_files/s6_1.jpg\", \"upload_files/s6_2.jpg\", \"upload_files/s6_3.jpg\", \"upload_files/s6_4.jpg\"]',NULL,'[\"upload_files/d6_1.jpg\", \"upload_files/d6_2.jpg\", \"upload_files/d6_3.jpg\"]',NULL,'2025-01-06 12:40:00'),(7,'300','008','한복 스크런치',13000,0,'[\"upload_files/7.jpg\"]',NULL,'[\"upload_files/s7_1.jpg\", \"upload_files/s7_2.jpg\", \"upload_files/s7_3.jpg\", \"upload_files/s7_4.jpg\", \"upload_files/s7_5.jpg\"]',NULL,'[\"upload_files/d7_1.jpg\", \"upload_files/d7_2.jpg\", \"upload_files/d7_3.jpg\", \"upload_files/d7_4.jpg\", \"upload_files/d7_5.jpg\"]',NULL,'2025-01-07 12:40:00'),(8,'400','002','인삼아이크림 더블기획세트',34000,15,'[\"upload_files/8.jpg\"]',NULL,'[\"upload_files/s8_1.jpg\", \"upload_files/s8_2.jpg\", \"upload_files/s8_3.jpg\", \"upload_files/s8_4.jpg\", \"upload_files/s8_5.jpg\"]',NULL,'[\"upload_files/d8_1.jpg\", \"upload_files/d8_2.jpg\", \"upload_files/d8_3.jpg\"]',NULL,'2025-01-08 12:40:00'),(9,'400','002','퍼펙트 한방 팔레트',68000,19,'[\"upload_files/9.jpg\"]',NULL,'[\"upload_files/s9_1.jpg\", \"upload_files/s9_2.jpg\", \"upload_files/s9_3.jpg\"]',NULL,'[\"upload_files/d9_1.jpg\", \"upload_files/d9_2.jpg\", \"upload_files/d9_3.jpg\"]',NULL,'2025-01-09 12:40:00'),(10,'300','008','복주머니',9000,0,'[\"upload_files/10.jpg\"]',NULL,'[\"upload_files/s10_1.jpg\", \"upload_files/s10_2.jpg\", \"upload_files/s10_3.jpg\", \"upload_files/s10_4.jpg\"]',NULL,'[\"upload_files/d10_1.jpg\", \"upload_files/d10_2.jpg\", \"upload_files/d10_3.jpg\", \"upload_files/d10_4.jpg\", \"upload_files/d10_5.jpg\"]',NULL,'2025-01-10 12:40:00'),(11,'300','008','도자기 괄사',17000,0,'[\"upload_files/11.jpg\"]',NULL,'[\"upload_files/s11_1.jpg\", \"upload_files/s11_2.jpg\"]',NULL,'[\"upload_files/d11_1.jpg\", \"upload_files/d11_2.jpg\", \"upload_files/d11_3.jpg\"]',NULL,'2025-01-11 12:40:00'),(12,'300','008','노방 비누망',4000,0,'[\"upload_files/12.jpg\"]',NULL,'[\"upload_files/s12_1.jpg\", \"upload_files/s12_2.jpg\", \"upload_files/s12_3.jpg\"]',NULL,'[\"upload_files/d12_1.jpg\", \"upload_files/d12_2.jpg\", \"upload_files/d12_3.jpg\", \"upload_files/d12_4.jpg\"]',NULL,'2025-01-12 12:40:00'),(13,'200','003','파인그로브 : 바디크림',25000,0,'[\"upload_files/13.jpg\"]',NULL,'[\"upload_files/s13_1.jpg\", \"upload_files/s13_2.jpg\", \"upload_files/s13_3.jpg\", \"upload_files/s13_4.jpg\", \"upload_files/s13_5.jpg\"]',NULL,'[\"upload_files/d13_1.jpg\", \"upload_files/d13_2.jpg\"]',NULL,'2025-01-13 12:40:00'),(14,'200','005','파인그로브 : 바디워시',25000,0,'[\"upload_files/14.jpg\"]',NULL,'[\"upload_files/s14_1.jpg\", \"upload_files/s14_2.jpg\", \"upload_files/s14_3.jpg\", \"upload_files/s14_4.jpg\", \"upload_files/s14_5.jpg\"]',NULL,'[\"upload_files/d14_1.jpg\", \"upload_files/d14_2.jpg\"]',NULL,'2025-01-14 12:40:00'),(15,'400','002','한방 세럼 디스커버리키트',27000,0,'[\"upload_files/15.jpg\"]',NULL,'[\"upload_files/s15_1.jpg\", \"upload_files/s15_2.jpg\", \"upload_files/s15_3.jpg\"]',NULL,'[\"upload_files/d15_1.jpg\"]',NULL,'2025-01-15 12:40:00'),(16,'100','004','청매실 AHA BHA 토너',18000,0,'[\"upload_files/16.jpg\"]',NULL,'[\"upload_files/s16_1.jpg\", \"upload_files/s16_2.jpg\", \"upload_files/s16_3.jpg\", \"upload_files/s16_4.jpg\", \"upload_files/s16_5.jpg\"]',NULL,'[\"upload_files/d16_1.jpg\", \"upload_files/d16_2.jpg\"]',NULL,'2025-01-16 12:40:00'),(17,'100','003','조선미녀크림',24000,0,'[\"upload_files/17.jpg\"]',NULL,'[\"upload_files/s17_1.jpg\", \"upload_files/s17_2.jpg\", \"upload_files/s17_3.jpg\", \"upload_files/s17_4.jpg\", \"upload_files/s17_5.jpg\"]',NULL,'[\"upload_files/d17_1.jpg\", \"upload_files/d17_2.jpg\"]',NULL,'2025-01-17 12:40:00'),(18,'100','002','인삼아이크림 : 인삼 + 레티날',17000,0,'[\"upload_files/18.jpg\"]',NULL,'[\"upload_files/s18_1.jpg\", \"upload_files/s18_2.jpg\", \"upload_files/s18_3.jpg\", \"upload_files/s18_4.jpg\", \"upload_files/s18_5.jpg\"]',NULL,'[\"upload_files/d18_1.jpg\", \"upload_files/d18_2.jpg\"]',NULL,'2025-01-18 12:40:00'),(19,'100','002','인삼스네일세럼 : 인삼 + 스네일뮤신',17000,0,'[\"upload_files/19.jpg\"]',NULL,'[\"upload_files/s19_1.jpg\", \"upload_files/s19_2.jpg\", \"upload_files/s19_3.jpg\", \"upload_files/s19_4.jpg\"]',NULL,'[\"upload_files/d19_1.jpg\", \"upload_files/d19_2.jpg\"]',NULL,'2025-01-19 12:40:00'),(20,'100','001','인삼선세럼 (SPF 50+ PA++++)',21000,0,'[\"upload_files/20.jpg\"]',NULL,'[\"upload_files/s20_1.jpg\", \"upload_files/s20_2.jpg\", \"upload_files/s20_3.jpg\", \"upload_files/s20_4.jpg\", \"upload_files/s20_5.jpg\"]',NULL,'[\"upload_files/d20_1.jpg\", \"upload_files/d20_2.jpg\"]',NULL,'2025-01-20 12:40:00'),(21,'100','005','인삼 클렌징오일',20000,0,'[\"upload_files/21.jpg\"]',NULL,'[\"upload_files/s21_1.jpg\", \"upload_files/s21_2.jpg\", \"upload_files/s21_3.jpg\", \"upload_files/s21_4.jpg\", \"upload_files/s21_5.jpg\"]',NULL,'[\"upload_files/d21_1.jpg\", \"upload_files/d21_2.jpg\"]',NULL,'2025-01-21 12:40:00'),(22,'100','004','인삼 에센스워터',18000,0,'[\"upload_files/22.jpg\"]',NULL,'[\"upload_files/s22_1.jpg\", \"upload_files/s22_2.jpg\", \"upload_files/s22_3.jpg\", \"upload_files/s22_4.jpg\", \"upload_files/s22_5.jpg\"]',NULL,'[\"upload_files/d22_1.jpg\", \"upload_files/d22_2.jpg\"]',NULL,'2025-01-22 12:40:00'),(23,'100','002','쌀겨수맑은세럼 : 쌀겨수 + 알파-알부틴',17000,0,'[\"upload_files/23.jpg\"]',NULL,'[\"upload_files/s23_1.jpg\", \"upload_files/s23_2.jpg\", \"upload_files/s23_3.jpg\", \"upload_files/s23_4.jpg\", \"upload_files/s23_5.jpg\"]',NULL,'[\"upload_files/d23_1.jpg\", \"upload_files/d23_2.jpg\"]',NULL,'2025-01-23 12:40:00'),(24,'100','005','산뜻청매실클렌저',13000,0,'[\"upload_files/24.jpg\"]',NULL,'[\"upload_files/s24_1.jpg\", \"upload_files/s24_2.jpg\", \"upload_files/s24_3.jpg\", \"upload_files/s24_4.jpg\", \"upload_files/s24_5.jpg\"]',NULL,'[\"upload_files/d24_1.jpg\", \"upload_files/d24_2.jpg\"]',NULL,'2025-01-24 12:40:00'),(25,'100','001','산들쑥썬스틱 (50+ PA++++)',18000,0,'[\"upload_files/25.jpg\"]',NULL,'[\"upload_files/s25_1.jpg\", \"upload_files/s25_2.jpg\", \"upload_files/s25_3.jpg\", \"upload_files/s25_4.jpg\", \"upload_files/s25_5.jpg\"]',NULL,'[\"upload_files/d25_1.jpg\", \"upload_files/d25_2.jpg\"]',NULL,'2025-01-25 12:40:00'),(26,'100','002','산들녹차세럼 : 녹차 + 판테놀',17000,0,'[\"upload_files/26.jpg\"]',NULL,'[\"upload_files/s26_1.jpg\", \"upload_files/s26_2.jpg\", \"upload_files/s26_3.jpg\", \"upload_files/s26_4.jpg\"]',NULL,'[\"upload_files/d26_1.jpg\", \"upload_files/d26_2.jpg\"]',NULL,'2025-01-26 12:40:00'),(27,'100','003','붉은 팥 수분워터젤',18000,0,'[\"upload_files/27.jpg\"]',NULL,'[\"upload_files/s27_1.jpg\", \"upload_files/s27_2.jpg\", \"upload_files/s27_3.jpg\", \"upload_files/s27_4.jpg\", \"upload_files/s27_5.jpg\"]',NULL,'[\"upload_files/d27_1.jpg\", \"upload_files/d27_2.jpg\"]',NULL,'2025-01-27 12:40:00'),(28,'100','007','붉은 팥 모공정화마스크',20000,0,'[\"upload_files/28.jpg\"]',NULL,'[\"upload_files/s28_1.jpg\", \"upload_files/s28_2.jpg\", \"upload_files/s28_3.jpg\", \"upload_files/s28_4.jpg\", \"upload_files/s28_5.jpg\"]',NULL,'[\"upload_files/d28_1.jpg\", \"upload_files/d28_2.jpg\"]',NULL,'2025-01-28 12:40:00'),(29,'100','007','병풀진정마스크 (10매)',25000,8,'[\"upload_files/29.jpg\"]',NULL,'[\"upload_files/s29_1.jpg\", \"upload_files/s29_2.jpg\", \"upload_files/s29_3.jpg\", \"upload_files/s29_4.jpg\", \"upload_files/s29_5.jpg\"]',NULL,'[\"upload_files/d29_1.jpg\", \"upload_files/d29_2.jpg\"]',NULL,'2025-01-29 12:40:00'),(30,'100','002','병풀비타세럼',17000,0,'[\"upload_files/30.jpg\"]',NULL,'[\"upload_files/s30_1.jpg\", \"upload_files/s30_2.jpg\", \"upload_files/s30_3.jpg\", \"upload_files/s30_4.jpg\", \"upload_files/s30_5.jpg\"]',NULL,'[\"upload_files/d30_1.jpg\", \"upload_files/d30_2.jpg\"]',NULL,'2025-01-30 12:40:00'),(31,'100','005','미감클렌징밤',19000,0,'[\"upload_files/31.jpg\"]',NULL,'[\"upload_files/s31_1.jpg\", \"upload_files/s31_2.jpg\", \"upload_files/s31_3.jpg\", \"upload_files/s31_4.jpg\", \"upload_files/s31_5.jpg\"]',NULL,'[\"upload_files/d31_1.jpg\", \"upload_files/d31_2.jpg\"]',NULL,'2025-01-31 12:40:00'),(32,'400','001','맑은쌀선크림 더블기획세트 (SPF 50+ PA++++)',36000,17,'[\"upload_files/32.jpg\"]',NULL,'[\"upload_files/s32_1.jpg\", \"upload_files/s32_2.jpg\", \"upload_files/s32_3.jpg\", \"upload_files/s32_4.jpg\", \"upload_files/s32_5.jpg\"]',NULL,'[\"upload_files/d32_1.jpg\", \"upload_files/d32_2.jpg\", \"upload_files/d32_3.jpg\"]',NULL,'2025-02-01 12:40:00'),(33,'100','001','맑은쌀선크림 : 고아미+프로바이오틱스 (SPF50+ PA++++)',18000,0,'[\"upload_files/33.jpg\"]',NULL,'[\"upload_files/s33_1.jpg\", \"upload_files/s33_2.jpg\", \"upload_files/s33_3.jpg\", \"upload_files/s33_4.jpg\", \"upload_files/s33_5.jpg\"]',NULL,'[\"upload_files/d33_1.jpg\", \"upload_files/d33_2.jpg\", \"upload_files/d33_3.jpg\"]',NULL,'2025-02-02 12:40:00'),(34,'100','005','맑은쌀 약산성 클렌징바',12000,17,'[\"upload_files/34.jpg\"]',NULL,'[\"upload_files/s34_1.jpg\", \"upload_files/s34_2.jpg\", \"upload_files/s34_3.jpg\", \"upload_files/s34_4.jpg\"]',NULL,'[\"upload_files/d34_1.jpg\", \"upload_files/d34_2.jpg\"]',NULL,'2025-02-03 12:40:00'),(35,'100','006','꽃담필링젤',13000,0,'[\"upload_files/35.jpg\"]',NULL,'[\"upload_files/s35_1.jpg\", \"upload_files/s35_2.jpg\", \"upload_files/s35_3.jpg\", \"upload_files/s35_4.jpg\"]',NULL,'[\"upload_files/d35_1.jpg\", \"upload_files/d35_2.jpg\"]',NULL,'2025-02-04 12:40:00'),(36,'100','002','광채프로폴리스세럼 : 프로폴리스 + 나이아신아마이드',17000,0,'[\"upload_files/36.jpg\"]',NULL,'[\"upload_files/s36_1.jpg\", \"upload_files/s36_2.jpg\", \"upload_files/s36_3.jpg\", \"upload_files/s36_4.jpg\", \"upload_files/s36_5.jpg\"]',NULL,'[\"upload_files/d36_1.jpg\", \"upload_files/d36_2.jpg\", \"upload_files/d36_3.jpg\", \"upload_files/d36_4.jpg\", \"upload_files/d36_5.jpg\"]',NULL,'2025-02-05 12:40:00');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `qna`
--

DROP TABLE IF EXISTS `qna`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `qna` (
  `qid` int NOT NULL AUTO_INCREMENT,
  `id` varchar(20) NOT NULL,
  `pid` int NOT NULL,
  `title` varchar(100) NOT NULL,
  `text` varchar(1000) NOT NULL,
  PRIMARY KEY (`qid`),
  KEY `pid_fk5` (`pid`),
  KEY `id_fk5` (`id`),
  CONSTRAINT `id_fk5` FOREIGN KEY (`id`) REFERENCES `customer` (`id`),
  CONSTRAINT `pid_fk5` FOREIGN KEY (`pid`) REFERENCES `product` (`pid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `qna`
--

LOCK TABLES `qna` WRITE;
/*!40000 ALTER TABLE `qna` DISABLE KEYS */;
/*!40000 ALTER TABLE `qna` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `rid` int NOT NULL AUTO_INCREMENT,
  `id` varchar(20) NOT NULL,
  `pid` int NOT NULL,
  `subject` varchar(100) NOT NULL,
  `text` varchar(1000) NOT NULL,
  `review_image` json DEFAULT NULL,
  `rdate` datetime NOT NULL,
  `view_count` int DEFAULT '0',
  `org_review_img` json DEFAULT NULL,
  PRIMARY KEY (`rid`),
  KEY `pid_fk3` (`pid`),
  KEY `id_fk3` (`id`),
  CONSTRAINT `id_fk3` FOREIGN KEY (`id`) REFERENCES `customer` (`id`),
  CONSTRAINT `pid_fk3` FOREIGN KEY (`pid`) REFERENCES `product` (`pid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
INSERT INTO `review` VALUES (1,'agikim',3,'테스트','테스트','[]','2025-03-24 18:44:45',0,'[]'),(2,'agikim',3,'테스트2','테스트','[\"1742809504063-3541-25.jpg\"]','2025-03-24 18:45:05',0,'[\"25.jpg\"]');
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;

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
  KEY `category_id` (`category_id`),
  CONSTRAINT `category_id_fk1` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sub_category`
--

LOCK TABLES `sub_category` WRITE;
/*!40000 ALTER TABLE `sub_category` DISABLE KEYS */;
INSERT INTO `sub_category` VALUES ('100','001','선케어'),('100','002','세럼'),('100','003','젤/크림'),('100','004','토너/에센스'),('100','005','클렌저'),('100','006','각질제거'),('100','007','마스크팩'),('300','008','기타');
/*!40000 ALTER TABLE `sub_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `view_bill_list`
--

DROP TABLE IF EXISTS `view_bill_list`;
/*!50001 DROP VIEW IF EXISTS `view_bill_list`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_bill_list` AS SELECT 
 1 AS `oid`,
 1 AS `order_number`,
 1 AS `name`,
 1 AS `phone`,
 1 AS `email`,
 1 AS `address`,
 1 AS `id`,
 1 AS `pname`,
 1 AS `product_price`,
 1 AS `qty`,
 1 AS `main_image`*/;
SET character_set_client = @saved_cs_client;

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
-- Final view structure for view `view_bill_list`
--

/*!50001 DROP VIEW IF EXISTS `view_bill_list`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_bill_list` AS select `o`.`oid` AS `oid`,`o`.`order_number` AS `order_number`,`c`.`name` AS `name`,`c`.`phone` AS `phone`,`c`.`email` AS `email`,concat(`c`.`zipcode`,' ',`c`.`address`,' ',`c`.`extra_address`) AS `address`,`o`.`id` AS `id`,`p`.`pname` AS `pname`,(`p`.`price` - floor((((`p`.`price` * `p`.`discount_rate`) * `o`.`qty`) / 100))) AS `product_price`,`o`.`qty` AS `qty`,`p`.`main_image` AS `main_image` from ((`orders` `o` join `product` `p`) join `customer` `c`) where ((`o`.`pid` = `p`.`pid`) and (`o`.`id` = `c`.`id`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

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
/*!50001 VIEW `view_cart_list` AS select `ca`.`cid` AS `cid`,`ca`.`qty` AS `qty`,`cu`.`id` AS `id`,`pd`.`pid` AS `pid`,`pd`.`pname` AS `pname`,format((`pd`.`price` * `ca`.`qty`),0) AS `price`,`pd`.`discount_rate` AS `discount_rate`,format(((`pd`.`price` / ifnull(`pd`.`discount_rate`,0)) * `ca`.`qty`),0) AS `discount`,(`pd`.`price` - floor(((`pd`.`price` * `pd`.`discount_rate`) / 100))) AS `discount_price`,`pd`.`main_image` AS `main_image` from ((`cart` `ca` join `customer` `cu`) join `product` `pd`) where ((`ca`.`id` = `cu`.`id`) and (`ca`.`pid` = `pd`.`pid`)) */;
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
/*!50001 VIEW `view_payment_list` AS select `ca`.`cid` AS `cid`,`cu`.`id` AS `id`,`cu`.`name` AS `name`,`cu`.`address` AS `address`,`cu`.`extra_address` AS `extra_address`,`cu`.`zipcode` AS `zipcode`,`cu`.`phone` AS `phone`,`cu`.`email` AS `email`,`ca`.`pid` AS `pid`,`pd`.`pname` AS `pname`,`ca`.`qty` AS `qty`,((`pd`.`price` - floor(((`pd`.`price` * `pd`.`discount_rate`) / 100))) * `ca`.`qty`) AS `discount_price`,`pd`.`main_image` AS `main_image` from ((`customer` `cu` join `cart` `ca`) join `product` `pd`) where ((`cu`.`id` = `ca`.`id`) and (`ca`.`pid` = `pd`.`pid`)) order by `ca`.`cid` */;
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

-- Dump completed on 2025-04-01 15:36:40
