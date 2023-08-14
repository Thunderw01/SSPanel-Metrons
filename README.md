## SSPanel-Metron-Pro主题
- 深度优化原版metron主题（其他主题已删除）
- 绝大部分js,css资源本地化（原版本的cdn加载太慢，并且部分运营商已墙，会导致系统打开页面错乱）,若需要请在配置.metron_setting.php修改：
```php
$_MT['assets_url']  = $_MT['assets_true']?'https://cdn.jsdelivr.net/gh/mt-theme/metron-assets@'.$_MT['assets_bb'].'/metron' : '/theme/metron';
```
修改为
```php
$_MT['assets_url']  = $_MT['assets_true']?'/gh/mt-theme/metron-assets@'.$_MT['assets_bb'].'/metron' : '/theme/metron';
```
- 解密原版本js（原版本已经加密,个人付费解密），方便后续二次开发及功能定制。
- 导入sql时，自动导入关键的审计规则，减少安装时的工作量（方便小白使用）
- 删除原版换肤功能（个人觉得不好看）

#### 1.登录页/注册页样式修改，功能优化，增加问候功能（自动根据时间出现不同的问候语）
#### 2.用户首页优化 
- 删除原版巨丑的系统logo
- 系统菜单调整，更好的适应移动端，让移动端H5用户体验更友好，优化PC/H5右上角为下拉菜单
- 修改柱形图为饼状图，让页面更加美观
- 修改签到规则，未激活会员的用户不允许签到
- 优化首页排版，更加美观及方便使用。
#### 3.我的钱包原版本的花里胡哨的背景图
#### 4.邀请注册页面优化
#### 5.文档中心优化，样式更美观，使用更便捷，增加各种平台的使用文档及教程，部署后开箱即用，无需在后台编辑。
#### 6.订阅优化，账号编辑优化等等，请自行体验。
#### 7.部分机场主反馈后台数据太多，增加了数据清理功能，避免数据库卡死。
#### 8.增加优惠券删除功能
#### 9.修复特定场景下，用户无法打开注册页面的问题。
#### 10.实现了部分APP对接接口，持续开发中。。。。

免费技术交流群：[https://t.me/+1VzMNdj10noxYmU1](https://t.me/+1VzMNdj10noxYmU1)

## 部署手册
#### 1.连接 SSH 安装宝塔面板

#### 2.宝塔面板安装环境, 推荐使用 PHP 7.7、MySQL 5.7、Nginx 1.16

#### 3.宝塔面板创建网站, 域名等信息自行填写

#### 4.登录你的系统服务器下载源码
- `cd /www/wwwroot/你的网站文件夹`
- `git init` 
- `git clone https://xxxxxx.  ./`

#### 5.使用composer安装依赖


```shell
wget https://getcomposer.org/installer -O composer.phar && php composer.phar && php composer.phar install
```


#### 6.复制配置文件

```shell

cp config/.config.example.php config/.config.php

cp config/.metron_setting.example.php config/.metron_setting.php

cp config/appprofile.example.php config/appprofile.php
```

.config.php设置后执行`php xcat Tool initQQWry` 下载IP解析库

#### 8.网站设置

打开 宝塔面版 > 网站 > 你的网站


    在 网站目录 里取消勾选 防跨站攻击，运行目录里面选择 /public，点击保存。

在 伪静态 中填入下面内容，然后保存


```shell
location / {
try_files $uri /index.php$is_args$args;
}
```

#### 9.在SSH里的网站目录下执行，给网站文件755权限

```shell
cd ../
chmod -R 755 你的文件夹名/
chown -R www:www 你的文件夹名/
```

#### 10.数据库操作

首次部署: 导入网站目录下的`sql/glzjin_all.sql`，文件中已包含常用的审计规则。

### 使用宝塔面板的计划任务配置
```
每日任务 (必须)
任务类型：Shell 脚本
任务名称：自行填写
执行周期：每天 0 小时 0 分钟
脚本内容：php /www/wwwroot/你的网站目录/xcat Job DailyJob

检测任务 (必须)
任务类型：Shell 脚本
任务名称：自行填写
执行周期：N分钟 1 分钟
脚本内容：php /www/wwwroot/你的网站目录/xcat Job CheckJob

用户账户相关任务 (必须)
任务类型：Shell 脚本
任务名称：自行填写
执行周期：每小时
脚本内容：php /www/wwwroot/你的网站目录/xcat Job UserJob

检查用户会员等级过期任务 (必须)
任务类型：Shell 脚本
任务名称：自行填写
执行周期：每分钟
脚本内容：php /www/wwwroot/你的网站目录/xcat Job CheckUserClassExpire

检查账号过期任务 (必须)
任务类型：Shell 脚本
任务名称：自行填写
执行周期：每小时
脚本内容：php /www/wwwroot/你的网站目录/xcat Job CheckUserExpire

定时检测邮件队列 (必须)
任务类型：Shell 脚本
任务名称：自行填写
执行周期：N分钟 1 分钟
脚本内容：php /www/wwwroot/你的网站目录/xcat Job SendMail

每日流量报告 (给开启每日邮件的用户发送邮件)
任务类型：Shell 脚本
任务名称：自行填写
执行周期：每天 0 小时 0 分钟
脚本内容：php /www/wwwroot/你的网站目录/xcat SendDiaryMail

审计封禁 (建议设置)
任务类型：Shell 脚本
任务名称：自行填写
执行周期：N分钟 1 分钟
脚本内容：php /www/wwwroot/你的网站目录/xcat DetectBan

检测节点被墙 (可选)
任务类型：Shell 脚本
任务名称：自行填写
执行周期：N分钟 1 分钟
脚本内容：php /www/wwwroot/你的网站目录/xcat DetectGFW

检测中转服务器 (可选)
任务类型：Shell 脚本
任务名称：自行填写
执行周期：N分钟 5 分钟
脚本内容：php /www/wwwroot/你的网站目录/xcat DetectTransfer

Radius (可选)
synclogin
任务类型：Shell 脚本
任务名称：自行填写
执行周期：N分钟 1 分钟
脚本内容：php /www/wwwroot/你的网站目录/xcat SyncRadius synclogin

syncvpn
任务类型：Shell 脚本
任务名称：自行填写
执行周期：N分钟 1 分钟
脚本内容：php /www/wwwroot/你的网站目录/xcat SyncRadius syncvpn

syncnas
任务类型：Shell 脚本
任务名称：自行填写
执行周期：N分钟 1 分钟
脚本内容：php /www/wwwroot/你的网站目录/xcat SyncRadius syncnas
自动备份 (可选)

整体备份
任务类型：Shell 脚本
任务名称：自行填写
执行周期：自己设置, 可以设置每30分钟左右
脚本内容：php /www/wwwroot/你的网站目录/xcat Backup full

只备份核心数据
任务类型：Shell 脚本
任务名称：自行填写
执行周期：自己设置, 可以设置每30分钟左右
脚本内容：php /www/wwwroot/你的网站目录/xcat Backup simple
财务报表 (可选)

日报
任务类型：Shell 脚本
任务名称：自行填写
执行周期：每天 0 小时 0 分钟
脚本内容：php /www/wwwroot/你的网站目录/xcat FinanceMail day

周报
任务类型：Shell 脚本
任务名称：自行填写
执行周期：每星期 周日 0 小时 0 分钟
脚本内容：php /www/wwwroot/你的网站目录/xcat FinanceMail week

月报
任务类型：Shell 脚本
任务名称：自行填写
执行周期：每月 1 日 0 小时 0 分钟
脚本内容：php /www/wwwroot/你的网站目录/xcat FinanceMail month
```


## 免责声明：使用本项目的用户须知

### 感谢您使用项目。在使用之前，请仔细阅读以下免责声明，以了解您在使用本项目时需要考虑的事项。

#### 1. 使用风险：本项目仅供技术研究和学习目的使用，不保证其适用于特定用途或对所有用户均有效。使用本项目可能涉及与互联网通信和数据传输相关的风险，包括但不限于数据泄露、网络攻击、不可预测的连接问题等。用户应自行承担使用本项目的所有风险。

#### 2. 法律遵从：用户应遵守所在地区的法律法规。本项目不对用户违反法律法规所引起的后果负责。用户需自行确定是否符合当地法律。

#### 3. 隐私保护：本项目会尽力保护用户隐私，但不对用户因使用本项目而产生的隐私问题负责。使用者应自行采取适当的措施保护其个人隐私和数据。

#### 4. 代码安全性：尽管我们努力确保项目的代码安全性，但不能保证项目免受潜在的漏洞、错误或恶意行为的影响。用户使用本项目时，应自行进行代码审查和安全性评估。

#### 5. 无担保：本项目按“原样”提供，不提供任何明示或暗示的担保，包括但不限于适销性、特定用途适用性和非侵权性的担保。

#### 6. 免责：本项目的作者和贡献者对因使用本项目而引起的任何损害或损失，不承担任何责任。无论是合同、侵权还是其他方面的行为，亦不负责任何直接、间接、偶然、特殊、惩戒性或后果性的损害赔偿。
