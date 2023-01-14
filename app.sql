create database lang_admin;

use lang_admin;

-- 用户表
create table `user`(
    `id` int not null auto_increment,
    `username` varchar(20) default null comment '用户名',
    `password` varchar(64) default null comment '密码',
    `createTime` timestamp default null comment '创建时间',
    `updateTime` timestamp default null comment '更新时间',
    primary key(`id`)
)engine=InnoDB auto_increment=1 default charset=utf8 comment="用户表";

-- 项目表
create table `project`(
    `id` int not null auto_increment,
    `name` varchar(50) default null comment '项目名称',
    `description` varchar(150) default null comment '项目简介',
    `createUser` int not null comment '用户id，项目创建人',
    `createTime` timestamp default null comment '创建时间',
    `updateTime` timestamp default null comment '更新时间',
    primary key(`id`)
)engine=InnoDB auto_increment=1 default charset=utf8 comment="项目表";

-- 项目用户表
create table `user_project`(
    `id` int not null auto_increment,
    `projectId` int not null comment '项目id',
    `userId` int not null comment '用户id',
    `role` int not null default 0 comment '权限，0 查看 1 编辑 2 发布',
    `createTime` timestamp default null comment '创建时间',
    `updateTime` timestamp default null comment '更新时间',
    primary key(`id`)
)engine=InnoDB auto_increment=1 default charset=utf8 comment="项目表";

-- 多语言文案表
create table `language`(
    `id` int not null auto_increment,
    `projectId` int not null comment '项目id',
    `key` varchar(200) default null comment '多语言key',
    `status` int not null default 0 comment '状态：0未发布 1已发布',
    `countryKey` varchar(20) default null comment '国家缩写，比如zh-CN，en',
    `translate` varchar(500) default null comment '翻译文案',
    `lastTranslate` varchar(500) default null comment '上一次发布的翻译文案',
    `createTime` timestamp default null comment '创建时间',
    `updateTime` timestamp default null comment '更新时间',
    primary key(`id`)
)engine=InnoDB auto_increment=1 default charset=utf8 comment="多语言文案表";
