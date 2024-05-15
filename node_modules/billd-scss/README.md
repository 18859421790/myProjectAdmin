<p align="center">
  <a href="">
    <img
      width="200"
      src="https://resource.hsslive.cn/image/1613141138717Billd.webp"
      alt="Billd-Scss logo"
    />
  </a>
</p>

<h1 align="center">
  Billd-Scss
</h1>

<p align="center">
积累常用的scss集合
</p>

<div align="center">
<a href="https://www.npmjs.com/package/billd-scss"><img src="https://img.shields.io/npm/v/billd-scss.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/billd-scss"><img src="https://img.shields.io/npm/dw/billd-scss.svg" alt="Downloads"></a>
<a href="https://www.npmjs.com/package/billd-scss"><img src="https://img.shields.io/npm/l/billd-scss.svg" alt="License"></a>
</div>

# 简介

积累常用的 scss 集合

# 安装

```sh
npm i billd-scss
```

# 使用

```scss
@import 'billd-scss/src/index.scss';

.cross-ico {
  width: 10px;
  height: 10px;
  @include cross(red, 2px);
}
.flex1 {
  color: red;
  @extend %flexCenter;
}
.flex2 {
  color: blue;
  @extend %flexCenter;
}
.txt {
  font-size: px2vw(20);
}
```

# 源码

[https://github.com/galaxy-s10/billd-scss](https://github.com/galaxy-s10/billd-scss)
