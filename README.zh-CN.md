# 前端工程展示中枢

[English](./README.md)

> 这是前端工程体系的叙事层。

## 这是什么

一个静态站点，用于解释前端工程体系的架构、部署策略和项目管理决策。

## 这不是什么

- ❌ 不是工程控制台
- ❌ 不是管理系统
- ❌ 不连接任何后端 API
- ❌ 不参与工程运行

## 工程角色

| 项目 | 平台 | 角色 |
|------|------|------|
| 工程控制台 | 自建服务器 | 工程运行与观察 |
| **展示中枢（本项目）** | **Vercel** | **工程叙事与展示** |
| CollabBoard | Vercel + Cloudflare | 产品交付 |
| Lumina Flow | Vercel (规划中) | 工程验证 |

## 技术栈

- React 19 + TypeScript
- Vite
- React Router
- Vanilla CSS
- 中英双语

## 本地开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
npm run preview
```

## 许可

MIT
