/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80026
 Source Host           : localhost:3306
 Source Schema         : school_manage

 Target Server Type    : MySQL
 Target Server Version : 80026
 File Encoding         : 65001

 Date: 28/04/2022 16:08:21
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for announce
-- ----------------------------
DROP TABLE IF EXISTS `announce`;
CREATE TABLE `announce` (
  `a_id` bigint unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `u_id` bigint NOT NULL COMMENT '发布者id',
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '通知标题',
  `content` mediumtext CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '通知内容',
  `classes` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '通知的班级',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`a_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;

-- ----------------------------
-- Records of announce
-- ----------------------------
BEGIN;
INSERT INTO `announce` VALUES (9, 1, '通知测试标题', '通知测试内容', '313', '2022-04-17 18:58:34');
INSERT INTO `announce` VALUES (10, 1, '通知测试标题', '通知测试内容', '314', '2022-04-17 18:58:34');
INSERT INTO `announce` VALUES (19, 2, '今日测核酸', '今日下午五点五环体育馆测核酸', '313', '2022-04-26 21:19:41');
INSERT INTO `announce` VALUES (31, 2, 'dddddddddd', 'dddddddddd', '313', '2022-04-27 10:12:04');
INSERT INTO `announce` VALUES (32, 2, '请未填写健康卡的同学填写健康卡！', '请未填写健康卡的同学填写健康卡！', '313', '2022-04-27 11:38:39');
INSERT INTO `announce` VALUES (33, 2, '今日测核酸', '下午五点五环体育馆测核酸', '313', '2022-04-28 09:52:53');
INSERT INTO `announce` VALUES (34, 2, '疫情防控', '请同学们带好口罩！！！', '313', '2022-04-28 12:02:16');
COMMIT;

-- ----------------------------
-- Table structure for avatar
-- ----------------------------
DROP TABLE IF EXISTS `avatar`;
CREATE TABLE `avatar` (
  `a_id` bigint unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `u_id` int NOT NULL COMMENT '用户id',
  `size` varchar(225) COLLATE utf8_bin NOT NULL COMMENT '图片大小',
  `filename` varchar(225) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '头像存放文件名',
  `mimetype` varchar(225) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '图像类型(后缀)',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`a_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;

-- ----------------------------
-- Records of avatar
-- ----------------------------
BEGIN;
INSERT INTO `avatar` VALUES (7, 1, '10568', '63aa85bbad6ff2d06fe7d1b7527895ae', 'image/jpeg', '2022-04-16 23:11:06', '2022-04-16 23:11:06');
INSERT INTO `avatar` VALUES (9, 4, '14936', 'd4a27d843ec6e8e580322de7c177e2fc', 'image/jpeg', '2022-04-24 20:08:38', '2022-04-25 12:41:47');
INSERT INTO `avatar` VALUES (10, 2, '14936', 'ae13866779db6c7b29e541a85f222c1c', 'image/jpeg', '2022-04-24 21:12:29', '2022-04-25 13:33:38');
INSERT INTO `avatar` VALUES (11, 3, '13520', '01647f28640327e5dd38dcd8907b9226', 'image/jpeg', '2022-04-28 13:13:21', '2022-04-28 13:28:52');
COMMIT;

-- ----------------------------
-- Table structure for healthy_card
-- ----------------------------
DROP TABLE IF EXISTS `healthy_card`;
CREATE TABLE `healthy_card` (
  `h_id` bigint unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `u_id` bigint NOT NULL COMMENT '健康卡用户id',
  `temperature` varchar(3) COLLATE utf8_bin NOT NULL COMMENT '今日温度',
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '当日居住地址',
  `healthy_code` int NOT NULL COMMENT '健康码颜色(0.绿色 1.黄色 2.红色)',
  `go_add` int NOT NULL COMMENT '近14天是否去过中高风险地区(0.否 1.是)',
  `exposure` int NOT NULL COMMENT '近14天是否接触过接诊/红码人员(0.否 1.是)',
  `leave_out` int NOT NULL COMMENT '今日是否离开学校(0.否 1.是)',
  `detection` int NOT NULL COMMENT '今日是否检测过核酸(0.否 1.是)',
  `vaccines` int NOT NULL COMMENT '疫苗接种情况(0.未接种 1.已接种一针 2.已接种两针 3.已接种三针)',
  `mask` int NOT NULL COMMENT '口罩是否充足(0.否 1.是)',
  `mask_num` int NOT NULL COMMENT '口罩剩余数量',
  `disinfect` int NOT NULL COMMENT '消毒用品是否充足(0.否 1.是)',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `classes` varchar(30) COLLATE utf8_bin NOT NULL COMMENT '班级',
  PRIMARY KEY (`h_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;

-- ----------------------------
-- Records of healthy_card
-- ----------------------------
BEGIN;
INSERT INTO `healthy_card` VALUES (4, 1, '36', '广东珠海', 1, 0, 0, 0, 1, 3, 1, 30, 1, '2022-04-16 23:35:23', '313');
INSERT INTO `healthy_card` VALUES (5, 1, '36', '广东珠海', 1, 0, 0, 0, 1, 3, 1, 30, 1, '2022-04-17 09:30:38', '313');
INSERT INTO `healthy_card` VALUES (7, 1, '36', '广东珠海', 1, 0, 0, 0, 1, 3, 1, 30, 1, '2022-04-21 16:57:38', '313');
INSERT INTO `healthy_card` VALUES (9, 3, '36', '广东珠海', 0, 0, 0, 0, 1, 3, 1, 100, 1, '2022-04-24 13:45:14', '313');
INSERT INTO `healthy_card` VALUES (10, 4, '36', '广东珠海', 0, 0, 0, 0, 1, 3, 1, 100, 1, '2022-04-24 13:48:43', '313');
INSERT INTO `healthy_card` VALUES (11, 4, '36', '广东珠海xxxx', 0, 0, 0, 0, 1, 3, 1, 100, 1, '2022-04-25 10:47:43', '313');
INSERT INTO `healthy_card` VALUES (12, 4, '36', '广东珠海', 0, 0, 0, 0, 0, 3, 1, 100, 1, '2022-04-27 22:19:25', '313');
INSERT INTO `healthy_card` VALUES (13, 4, '36', '广东珠海', 0, 0, 0, 0, 1, 3, 1, 99, 1, '2022-04-28 01:39:41', '313');
INSERT INTO `healthy_card` VALUES (14, 3, '36', '广东珠海xxxx', 0, 0, 0, 0, 1, 3, 1, 50, 1, '2022-04-28 13:43:38', '313');
COMMIT;

-- ----------------------------
-- Table structure for leave_out
-- ----------------------------
DROP TABLE IF EXISTS `leave_out`;
CREATE TABLE `leave_out` (
  `l_id` bigint unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `u_id` bigint NOT NULL COMMENT '请假人id',
  `reason` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '请假原因',
  `leave_type` int NOT NULL DEFAULT '0' COMMENT '请假类型(0.事假 1.病假)',
  `start_time` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '请假开始时间',
  `end_time` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '请假结束时间',
  `state` int DEFAULT '0' COMMENT '审批状态(0. 未审批 1. 通过 2. 不通过)',
  `classes` varchar(30) COLLATE utf8_bin NOT NULL COMMENT '请假人所在班级',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`l_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;

-- ----------------------------
-- Records of leave_out
-- ----------------------------
BEGIN;
INSERT INTO `leave_out` VALUES (1, 2, '看牙医', 1, '2022-04-16', '2022-04-17', 1, '313', '2022-04-17 09:34:31');
INSERT INTO `leave_out` VALUES (3, 2, '看牙医', 1, '2022-04-16', '2022-04-17', 1, '313', '2022-04-17 21:41:57');
INSERT INTO `leave_out` VALUES (4, 10, '看牙医', 1, '2022-04-16', '2022-04-17', 1, '313', '2022-04-17 21:51:46');
INSERT INTO `leave_out` VALUES (5, 4, '看智齿', 1, '2022-04-24', '2022-04-25', 1, '313', '2022-04-24 15:07:45');
INSERT INTO `leave_out` VALUES (6, 4, '拿快递', 0, '2022-04-26', '2022-04-26', 2, '313', '2022-04-24 16:40:42');
INSERT INTO `leave_out` VALUES (7, 4, '肚子痛', 1, '2022-04-28', '2022-04-30', 1, '313', '2022-04-24 18:26:40');
INSERT INTO `leave_out` VALUES (8, 4, '看智齿', 1, '2022-04-25', '2022-04-27', 2, '313', '2022-04-24 18:27:56');
INSERT INTO `leave_out` VALUES (9, 4, '找工作', 0, '2022-04-28', '2022-04-29', 2, '313', '2022-04-25 10:59:16');
INSERT INTO `leave_out` VALUES (10, 4, '生病', 1, '2022-04-28', '2022-04-29', 2, '313', '2022-04-25 11:00:47');
INSERT INTO `leave_out` VALUES (11, 4, '找工作', 0, '2022-04-29', '2022-04-30', 2, '313', '2022-04-25 11:54:29');
INSERT INTO `leave_out` VALUES (12, 4, '找工作', 0, '2022-04-29', '2022-04-30', 2, '313', '2022-04-25 11:54:42');
INSERT INTO `leave_out` VALUES (13, 4, '。。。', 1, '2022-04-26', '2022-04-27', 2, '313', '2022-04-25 11:55:26');
INSERT INTO `leave_out` VALUES (14, 3, '。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。', 1, '2022-04-27', '2022-04-28', 2, '313', '2022-04-25 16:15:40');
INSERT INTO `leave_out` VALUES (15, 4, '五一回家', 0, '2022-04-30', '2022-05-04', 2, '313', '2022-04-27 22:19:57');
INSERT INTO `leave_out` VALUES (16, 4, '五一请假回家', 0, '2022-04-30', '2022-05-04', 2, '313', '2022-04-27 23:20:12');
INSERT INTO `leave_out` VALUES (17, 4, '回家', 0, '2022-04-29', '2022-04-30', 0, '313', '2022-04-28 13:08:07');
INSERT INTO `leave_out` VALUES (18, 4, '请假申请', 0, '2022-04-28', '2022-04-29', 0, '313', '2022-04-28 13:09:09');
COMMIT;

-- ----------------------------
-- Table structure for notice
-- ----------------------------
DROP TABLE IF EXISTS `notice`;
CREATE TABLE `notice` (
  `n_id` bigint unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `u_id` bigint NOT NULL COMMENT '通知接收人id',
  `a_id` bigint NOT NULL COMMENT '接收的通知id',
  `statu` int DEFAULT '0' COMMENT '阅读状态(0.已读 1.未读)',
  `classes` varchar(255) COLLATE utf8_bin NOT NULL COMMENT '所在班级',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '阅读时间(当状态改变时)',
  PRIMARY KEY (`n_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=195 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;

-- ----------------------------
-- Records of notice
-- ----------------------------
BEGIN;
INSERT INTO `notice` VALUES (22, 2, 9, 0, '313', '2022-04-17 21:38:45', '2022-04-17 21:38:45');
INSERT INTO `notice` VALUES (23, 3, 9, 0, '313', '2022-04-17 21:38:45', '2022-04-17 21:38:45');
INSERT INTO `notice` VALUES (24, 4, 9, 1, '313', '2022-04-17 21:38:45', '2022-04-28 01:38:14');
INSERT INTO `notice` VALUES (25, 5, 9, 0, '313', '2022-04-17 21:38:45', '2022-04-17 21:38:45');
INSERT INTO `notice` VALUES (26, 6, 9, 0, '313', '2022-04-17 21:38:45', '2022-04-17 21:38:45');
INSERT INTO `notice` VALUES (27, 7, 9, 0, '313', '2022-04-17 21:38:45', '2022-04-17 21:38:45');
INSERT INTO `notice` VALUES (28, 8, 9, 0, '313', '2022-04-17 21:38:45', '2022-04-17 21:38:45');
INSERT INTO `notice` VALUES (29, 9, 9, 0, '313', '2022-04-17 21:38:45', '2022-04-17 21:38:45');
INSERT INTO `notice` VALUES (30, 10, 9, 0, '313', '2022-04-17 21:38:45', '2022-04-17 21:38:45');
INSERT INTO `notice` VALUES (31, 11, 10, 0, '314', '2022-04-17 21:38:45', '2022-04-17 21:38:45');
INSERT INTO `notice` VALUES (32, 12, 10, 0, '314', '2022-04-17 21:38:45', '2022-04-17 21:38:45');
INSERT INTO `notice` VALUES (33, 13, 10, 0, '314', '2022-04-17 21:38:45', '2022-04-17 21:38:45');
INSERT INTO `notice` VALUES (34, 14, 10, 0, '314', '2022-04-17 21:38:45', '2022-04-17 21:38:45');
INSERT INTO `notice` VALUES (35, 15, 10, 0, '314', '2022-04-17 21:38:45', '2022-04-17 21:38:45');
INSERT INTO `notice` VALUES (36, 16, 10, 0, '314', '2022-04-17 21:38:45', '2022-04-17 21:38:45');
INSERT INTO `notice` VALUES (37, 17, 10, 0, '314', '2022-04-17 21:38:45', '2022-04-17 21:38:45');
INSERT INTO `notice` VALUES (38, 18, 10, 0, '314', '2022-04-17 21:38:45', '2022-04-17 21:38:45');
INSERT INTO `notice` VALUES (39, 19, 10, 0, '314', '2022-04-17 21:38:45', '2022-04-17 21:38:45');
INSERT INTO `notice` VALUES (40, 20, 10, 0, '314', '2022-04-17 21:38:45', '2022-04-17 21:38:45');
INSERT INTO `notice` VALUES (69, 2, 19, 0, '313', '2022-04-26 21:19:41', '2022-04-26 21:19:41');
INSERT INTO `notice` VALUES (70, 3, 19, 0, '313', '2022-04-26 21:19:41', '2022-04-26 21:19:41');
INSERT INTO `notice` VALUES (71, 4, 19, 1, '313', '2022-04-26 21:19:41', '2022-04-28 01:38:22');
INSERT INTO `notice` VALUES (72, 5, 19, 0, '313', '2022-04-26 21:19:41', '2022-04-26 21:19:41');
INSERT INTO `notice` VALUES (73, 6, 19, 0, '313', '2022-04-26 21:19:41', '2022-04-26 21:19:41');
INSERT INTO `notice` VALUES (74, 7, 19, 0, '313', '2022-04-26 21:19:41', '2022-04-26 21:19:41');
INSERT INTO `notice` VALUES (75, 8, 19, 0, '313', '2022-04-26 21:19:41', '2022-04-26 21:19:41');
INSERT INTO `notice` VALUES (76, 9, 19, 0, '313', '2022-04-26 21:19:41', '2022-04-26 21:19:41');
INSERT INTO `notice` VALUES (77, 10, 19, 0, '313', '2022-04-26 21:19:41', '2022-04-26 21:19:41');
INSERT INTO `notice` VALUES (159, 2, 31, 0, '313', '2022-04-27 10:12:04', '2022-04-27 10:12:04');
INSERT INTO `notice` VALUES (160, 3, 31, 0, '313', '2022-04-27 10:12:04', '2022-04-27 10:12:04');
INSERT INTO `notice` VALUES (161, 4, 31, 1, '313', '2022-04-27 10:12:04', '2022-04-28 01:38:30');
INSERT INTO `notice` VALUES (162, 5, 31, 0, '313', '2022-04-27 10:12:04', '2022-04-27 10:12:04');
INSERT INTO `notice` VALUES (163, 6, 31, 0, '313', '2022-04-27 10:12:04', '2022-04-27 10:12:04');
INSERT INTO `notice` VALUES (164, 7, 31, 0, '313', '2022-04-27 10:12:04', '2022-04-27 10:12:04');
INSERT INTO `notice` VALUES (165, 8, 31, 0, '313', '2022-04-27 10:12:04', '2022-04-27 10:12:04');
INSERT INTO `notice` VALUES (166, 9, 31, 0, '313', '2022-04-27 10:12:04', '2022-04-27 10:12:04');
INSERT INTO `notice` VALUES (167, 10, 31, 0, '313', '2022-04-27 10:12:04', '2022-04-27 10:12:04');
INSERT INTO `notice` VALUES (168, 2, 32, 0, '313', '2022-04-27 11:38:39', '2022-04-27 11:38:39');
INSERT INTO `notice` VALUES (169, 3, 32, 0, '313', '2022-04-27 11:38:39', '2022-04-27 11:38:39');
INSERT INTO `notice` VALUES (170, 4, 32, 1, '313', '2022-04-27 11:38:39', '2022-04-28 01:39:14');
INSERT INTO `notice` VALUES (171, 5, 32, 0, '313', '2022-04-27 11:38:39', '2022-04-27 11:38:39');
INSERT INTO `notice` VALUES (172, 6, 32, 0, '313', '2022-04-27 11:38:39', '2022-04-27 11:38:39');
INSERT INTO `notice` VALUES (173, 7, 32, 0, '313', '2022-04-27 11:38:39', '2022-04-27 11:38:39');
INSERT INTO `notice` VALUES (174, 8, 32, 0, '313', '2022-04-27 11:38:39', '2022-04-27 11:38:39');
INSERT INTO `notice` VALUES (175, 9, 32, 0, '313', '2022-04-27 11:38:39', '2022-04-27 11:38:39');
INSERT INTO `notice` VALUES (176, 10, 32, 0, '313', '2022-04-27 11:38:39', '2022-04-27 11:38:39');
INSERT INTO `notice` VALUES (177, 2, 33, 0, '313', '2022-04-28 09:52:53', '2022-04-28 09:52:53');
INSERT INTO `notice` VALUES (178, 3, 33, 0, '313', '2022-04-28 09:52:53', '2022-04-28 09:52:53');
INSERT INTO `notice` VALUES (179, 4, 33, 1, '313', '2022-04-28 09:52:53', '2022-04-28 13:07:45');
INSERT INTO `notice` VALUES (180, 5, 33, 0, '313', '2022-04-28 09:52:53', '2022-04-28 09:52:53');
INSERT INTO `notice` VALUES (181, 6, 33, 0, '313', '2022-04-28 09:52:53', '2022-04-28 09:52:53');
INSERT INTO `notice` VALUES (182, 7, 33, 0, '313', '2022-04-28 09:52:53', '2022-04-28 09:52:53');
INSERT INTO `notice` VALUES (183, 8, 33, 0, '313', '2022-04-28 09:52:53', '2022-04-28 09:52:53');
INSERT INTO `notice` VALUES (184, 9, 33, 0, '313', '2022-04-28 09:52:53', '2022-04-28 09:52:53');
INSERT INTO `notice` VALUES (185, 10, 33, 0, '313', '2022-04-28 09:52:53', '2022-04-28 09:52:53');
INSERT INTO `notice` VALUES (186, 2, 34, 0, '313', '2022-04-28 12:02:16', '2022-04-28 12:02:16');
INSERT INTO `notice` VALUES (187, 3, 34, 0, '313', '2022-04-28 12:02:16', '2022-04-28 12:02:16');
INSERT INTO `notice` VALUES (188, 4, 34, 0, '313', '2022-04-28 12:02:16', '2022-04-28 12:02:16');
INSERT INTO `notice` VALUES (189, 5, 34, 0, '313', '2022-04-28 12:02:16', '2022-04-28 12:02:16');
INSERT INTO `notice` VALUES (190, 6, 34, 0, '313', '2022-04-28 12:02:16', '2022-04-28 12:02:16');
INSERT INTO `notice` VALUES (191, 7, 34, 0, '313', '2022-04-28 12:02:16', '2022-04-28 12:02:16');
INSERT INTO `notice` VALUES (192, 8, 34, 0, '313', '2022-04-28 12:02:16', '2022-04-28 12:02:16');
INSERT INTO `notice` VALUES (193, 9, 34, 0, '313', '2022-04-28 12:02:16', '2022-04-28 12:02:16');
INSERT INTO `notice` VALUES (194, 10, 34, 0, '313', '2022-04-28 12:02:16', '2022-04-28 12:02:16');
COMMIT;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `u_id` bigint unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `u_number` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '编号',
  `username` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '用户名',
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '密码',
  `avatar_url` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL COMMENT '头像图',
  `mailbox` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL COMMENT '邮箱',
  `address` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '籍贯',
  `sex` varchar(2) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '性别',
  `classes` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '所属班级(教师默认添加第一个)',
  `type` int NOT NULL COMMENT '类型(1. 管理员 2. 学生 3. 教师)',
  `phonenumber` varchar(30) COLLATE utf8_bin NOT NULL COMMENT '手机号码',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`u_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=128 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES (1, '2022041501', '陈一一', '88dbbd5f05868f9fea331917cb2ffcaa', 'http://localhost:8000/users/1/avatar', NULL, '广东汕头', '女', '', 1, '12333333333', '2022-04-16 21:52:58', '2022-04-24 00:32:03');
INSERT INTO `user` VALUES (2, '2022041502', '姚二二', '1e938ba46aa99bbad4bac44a093625e4', 'http://localhost:8000/users/2/avatar', '123123@123.com', '[\"广东省\",\"汕头市\",\"潮阳区\"]', '男', '313', 3, '12333333333', '2022-04-16 22:38:55', '2022-04-28 10:20:18');
INSERT INTO `user` VALUES (3, '2022041503', '林小小', 'e10adc3949ba59abbe56e057f20f883e', 'http://localhost:8000/users/3/avatar', '121212@123.com', '广东汕头', '女', '313', 2, '12333333333', '2022-04-16 22:38:55', '2022-04-28 13:13:21');
INSERT INTO `user` VALUES (4, '2022041504', '姚晴', 'e10adc3949ba59abbe56e057f20f883e', 'http://localhost:8000/users/4/avatar', '123122@123.com', '广东广州', '女', '313', 2, '12333333333', '2022-04-16 22:38:55', '2022-04-24 20:08:38');
INSERT INTO `user` VALUES (5, '2022041505', '林子洋', '54862cc88fff7479363bb1e56810c30d', NULL, '122422@123.com', '广东深圳', '男', '313', 2, '12333333333', '2022-04-16 22:38:55', '2022-04-24 00:32:13');
INSERT INTO `user` VALUES (6, '2022041506', '陈辰', '1bddc1a2c3f1e97b94a50310ea94308c', NULL, NULL, '广东清远', '男', '313', 2, '12333333333', '2022-04-16 22:38:55', '2022-04-24 00:32:16');
INSERT INTO `user` VALUES (7, '2022041507', '郑鑫', '036b850b3959f43c1dce19f8843efaef', NULL, '', '广东佛山', '男', '313', 2, '12333333333', '2022-04-16 22:38:55', '2022-04-24 00:32:17');
INSERT INTO `user` VALUES (8, '2022041508', '林琳', '2ac0f70be07e11867cd796293e6a1211', NULL, '', '浙江杭州', '女', '313', 2, '12333333333', '2022-04-16 22:38:55', '2022-04-27 17:46:37');
INSERT INTO `user` VALUES (9, '2022041509', '陈曦', 'd3035277c682822f9f72678845bc3979', NULL, NULL, '江西南昌', '女', '313', 2, '12333333333', '2022-04-16 22:38:55', '2022-04-24 00:32:26');
INSERT INTO `user` VALUES (10, '2022041510', '郑天昊', 'e10adc3949ba59abbe56e057f20f883e', NULL, NULL, '湖北武汉', '男', '313', 2, '12333333333', '2022-04-16 22:38:55', '2022-04-24 09:04:38');
INSERT INTO `user` VALUES (11, '2022041511', '郑云', 'aa20cf9a94f300f544d559ee7010730e', NULL, NULL, '江苏无锡', '女', '314', 2, '12333333333', '2022-04-16 22:38:55', '2022-04-24 00:32:27');
INSERT INTO `user` VALUES (12, '2022041512', '郑晓楠', '01a296712c5520aed9812fccb7b90290', NULL, '', '广东惠州', '女', '314', 2, '12333333333', '2022-04-16 22:38:55', '2022-04-24 00:32:27');
INSERT INTO `user` VALUES (13, '2022041513', '陈一二', 'cbd0f33eb1f0698853aa6c8214aa2b52', NULL, '', '广东河源', '女', '314', 2, '12333333333', '2022-04-16 22:38:55', '2022-04-24 00:32:28');
INSERT INTO `user` VALUES (14, '2022041514', '陈旭', 'd3035277c682822f9f72678845bc3979', NULL, NULL, '广东深圳', '男', '314', 2, '12333333333', '2022-04-16 22:38:55', '2022-04-24 00:32:29');
INSERT INTO `user` VALUES (15, '2022041515', '陈欣怡', 'd04208ad5f7984744a7f788bafb5e315', NULL, NULL, '江西南昌', '女', '314', 2, '12333333333', '2022-04-16 22:38:55', '2022-04-24 00:32:29');
INSERT INTO `user` VALUES (16, '2022041516', '李青', '6aaa676fdfa20f981d450ef4e0a5c91e', NULL, NULL, '广东惠州', '女', '314', 2, '12333333333', '2022-04-16 22:38:55', '2022-04-24 00:32:30');
INSERT INTO `user` VALUES (17, '2022041517', '王小丫', '069a4f29aa3147ff7dce53544d72dba0', NULL, NULL, '广东深圳', '女', '314', 2, '12333333333', '2022-04-16 22:38:55', '2022-04-24 00:32:31');
INSERT INTO `user` VALUES (18, '2022041518', '黄奕', 'b443895ca8d5e53060908f3eed7db846', NULL, NULL, '新疆乌鲁木齐', '女', '314', 2, '12333333333', '2022-04-16 22:38:55', '2022-04-24 00:32:32');
INSERT INTO `user` VALUES (19, '2022041519', '陈国强', '8602bfdced748180cf525f4d92c12b79', NULL, NULL, '浙江杭州', '男', '314', 2, '12333333333', '2022-04-16 22:38:55', '2022-04-24 00:32:33');
INSERT INTO `user` VALUES (20, '2022041520', '李毅霖', '3a910377110deea666690f65bdd074d3', NULL, '', '[\"青海省\",\"海东市\",\"平安区\"]', '男', '314', 3, '12333333333', '2022-04-16 22:38:55', '2022-04-27 17:46:03');
INSERT INTO `user` VALUES (21, '2022041521', '庄丹丹', '5c4253f506e88f3b27e840275349db4a', NULL, NULL, '广东佛山', '女', '315', 2, '12333333333', '2022-04-16 22:38:55', '2022-04-24 00:32:34');
INSERT INTO `user` VALUES (22, '2022041522', '林茹茹', 'ff78874bb932ca33ccc49e3e4e8218c1', NULL, NULL, '广东汕头', '女', '315', 2, '12333333333', '2022-04-16 22:38:55', '2022-04-24 00:32:35');
INSERT INTO `user` VALUES (23, '2022041523', '林易', 'd555eb3457826c0efcd65c6f7e870c3b', NULL, NULL, '广东清远', '男', '315', 2, '12333333333', '2022-04-16 22:38:55', '2022-04-24 00:32:36');
INSERT INTO `user` VALUES (72, '2022041625', 'test002', 'e10adc3949ba59abbe56e057f20f883e', NULL, '', 'test', '男', '316', 1, '12333333333', '2022-04-22 09:26:50', '2022-04-24 00:32:37');
INSERT INTO `user` VALUES (122, '2022041626', 'test003', 'e10adc3949ba59abbe56e057f20f883e', NULL, '', '[\"内蒙古自治区\",\"通辽市\",\"库伦旗\"]', '男', '322', 2, '12333333333', '2022-04-23 18:12:19', '2022-04-24 00:32:37');
INSERT INTO `user` VALUES (123, '2022041626	', '陈陈陈', 'e10adc3949ba59abbe56e057f20f883e', NULL, '222222@163.com', '[\"山西省\",\"长治市\",\"潞城区\"]', '男', '315', 2, '1111111111', '2022-04-27 21:26:35', '2022-04-27 21:26:35');
INSERT INTO `user` VALUES (124, '2022041627', 'test110', 'e10adc3949ba59abbe56e057f20f883e', NULL, '222223@163.com', '[\"天津市\",\"市辖区\",\"和平区\"]', '男', '315', 2, '131333333333', '2022-04-27 21:31:38', '2022-04-27 21:31:38');
INSERT INTO `user` VALUES (125, '202222223333', 'test003', 'e10adc3949ba59abbe56e057f20f883e', NULL, '1111112@163.com', '[\"天津市\",\"市辖区\",\"和平区\"]', '男', '315', 2, '131333333336', '2022-04-27 21:42:55', '2022-04-27 21:42:55');
INSERT INTO `user` VALUES (126, '2022222225', '姚同学', 'e10adc3949ba59abbe56e057f20f883e', NULL, '333333@163.com', '[\"河北省\",\"秦皇岛市\",\"海港区\"]', '男', '316', 2, '13133333344', '2022-04-27 21:48:45', '2022-04-27 21:48:45');
INSERT INTO `user` VALUES (127, '2022222226', '姚同学', 'e10adc3949ba59abbe56e057f20f883e', NULL, '333333@163.com', '[\"河北省\",\"秦皇岛市\",\"海港区\"]', '男', '316', 3, '13133333344', '2022-04-27 21:50:15', '2022-04-27 21:50:15');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
