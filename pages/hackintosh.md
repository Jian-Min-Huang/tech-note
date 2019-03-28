# 工欲善其事必先利其器 Hackintosh

### Spec
|||
|---|---|
|CASE|Anidees AI CRYSTAL CUBE AR|
|CPU|Intel i7-8700|
|MB|ASUS ROG STRIX H370-F GAMING|
|VGA|MSI RX570 ARMOR 8G OC|
|SSD|Samsung 970 PRO 512GB|
|RAM|CORSAIR Vengeance RGB PRO D4-3000M C15 16G * 4|
|PSU|CORSAIR RM550X|
|RADIATOR|CORSAIR Hydro Series™ H115i RGB PLATINUM|
|FAN|CORSAIR LL140 * 2|
|FAN|CORSAIR LL120 * 1|
|HEADSET STAND|CORSAIR ST100 RGB Premium Headset Stand with 7.1 Surround Sound|
|KEYBOARD|CORSAIR K70 RGB MK.2 Mechanical Gaming Keyboard — CHERRY® MX Brown|
|MOUSEPAD|CORSAIR MM800 RGB POLARIS Gaming Mouse Pad|
|MOUSE|Apple Magic Mouse 2 - Space Gray|
|TRACKPAD|Apple Magic Trackpad 2 - Space Gray|
|LCD|LG 29UM58-P|
|ACCESSORIES|BCM943602CS|
|ACCESSORIES|TP-Link TL-WN725N|
|ACCESSORIES|aibo Bluetooth V4.0 微型藍芽傳輸器|

### Tools
* Install macOS Mojave.app
* Unibeast 9.1.0
* Clover Configurator 5.2.1.0
* MultiBeast 11.0.1 Mojave Edition

### Install Step & Hint
* 按照 Unibeast 步驟安裝至隨身碟
* fixshutdown打勾, darkwake=1
* add USBInjectAll.kext to /EFI/CLOVER/kexts/Other for solving No entry / Prohibited sign
* 調整 bios, 請參考 https://hackintosher.com/builds/asus-rog-strix-z370-g-hackintosh-guide-matx-build/
* remove /EFI/drivers64/AptioMemoryFix-64.efi, add OsxAptioFix2Drv-64.efi, 請 google mojave_install_freezes_with_2_minutes_left
* 隨身碟開機安裝 -> 重開 -> 進入硬碟 -> 繼續安裝
* 這個狀況 可關機 有網路 沒聲音
* 接下來把隨身碟的/EFI蓋掉硬碟的/EFI
* 按照 Multibeast 的步驟安裝需要的驅動
![](../img/MultiBeast%20Install.png)
* 重灌一定要在 Bios 把上一個硬碟拿掉, 不然會禁止符號

### Checklist
- [x] shutdown
- [x] restart
- [x] sleep
- [x] audio
- [x] ethernet
- [x] wifi
- [x] bluetooth
- [ ] Right Frequency ?
- [ ] iMessage ?
- [ ] FaceTime ?
- [ ] iCloud ?

### Other Hint
* 黑鐵線
* 全模
* 風扇插頭
* 4PIN插頭
* 3PIN插頭
* USB910插頭

### Reference
* Tonymacx86
* InsanelyMac
* Reddit Hackintosh
* 遠景論壇
