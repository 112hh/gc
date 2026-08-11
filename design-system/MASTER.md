# Engineering Cell UI Design System

This project follows the UI rules extracted from `UI设计规范文档.docx` and the provided reference screen. Future prototype changes should reuse the tokens and component classes in `styles.css` instead of adding per-page visual styles.

## Scope

- Product type: B-side admin/data management system.
- Layout model: Header + Sider + Content, with optional secondary content headers inside pages.
- Visual direction: light blue application shell, white work surfaces, Ant Design blue interactions, dense but readable data tables.

## Core Tokens

```css
:root {
  --primary: #1677FF;
  --primary-hover: #4096FF;
  --primary-active: #0958D9;
  --primary-light: #E6F4FF;
  --success: #52C41A;
  --warning: #FAAD14;
  --danger: #FF4D4F;
  --text-primary: #262626;
  --text-secondary: #595959;
  --text-tertiary: #8C8C8C;
  --text-disabled: #BFBFBF;
  --border-normal: #D9D9D9;
  --border-light: #E8E8E8;
  --divider: #F0F0F0;
  --page-bg: #F5F7FA;
  --panel-bg: #FFFFFF;
  --radius-xs: 4px;
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --shadow-base: 0 2px 8px 0 rgba(0,0,0,0.05);
  --shadow-middle: 0 4px 16px 0 rgba(0,0,0,0.08);
  --shadow-high: 0 4px 8px 2px rgba(0,0,0,0.08),
                 0 8px 16px 2px rgba(0,0,0,0.1),
                 0 16px 32px 2px rgba(0,0,0,0.1);
}
```

## Lanhu Screenshot Constraint

The admin prototype must follow the uploaded Lanhu reference screens for future changes:

- Shell: 200px left sider, 64px top bar, light blue background `#DCEBFF`.
- Work area: bordered rounded frame starting after the sider and top bar, with a 52px breadcrumb row and 16px inner padding.
- Sider: light blue surface, dark 14px text, active child item uses white translucent background and primary blue text.
- Top bar: centered rounded search input, text buttons for 应用/帮助, and rounded user capsule showing `管理员9527`.
- Forms: inline labels with colon, 32px inputs/selects/buttons, 4px radius, primary action `#1F63FF`, secondary action `#F2F4F7`.
- Tables: white surface, 48px header/body rows, header background `#F7F8FA`, borders `#E5E6EB`, compact 14px text, checkbox column, blue text links.
- Pagination: right aligned, `共计 200 条`, page buttons 32px, active page `#E8F3FF`, page-size chip `10条/页`.
- Status tags: success `#00B42A` on `#E9FFEF`, warning `#FF8A00` on `#FFF3DF`, progress `#1F63FF` on `#EAF3FF`, danger `#FF4D4F` on `#FFF0F0`.

## Rules

- Use 8px spacing rhythm: 4, 8, 12, 16, 24, 32, 48.
- Buttons and inputs default to 32px height and 4px radius; primary buttons use `#1677FF`, hover `#4096FF`, active `#0958D9`.
- Cards and content panels use white background, `#E8E8E8` border, 6-8px radius, and shadow level 1 only.
- Data table headers use `#F5F5F5` or `#FAFAFA`; rows use 40-44px rhythm and hover `#FAFAFA`.
- Selected navigation states use `#E6F4FF` background and `#1677FF` text; avoid dark gradient sidebars for this project.
- Use the existing SVG sprite icons. Do not introduce emoji icons for navigation or core actions.
- For new pages, compose with existing shared classes: `.page-section`, `.filter-card`, `.data-table`, `.table-wrap`, `.modal`, `.gene-section-card`, `.toolbar-primary`, `.modal-primary`, `.modal-secondary`.
- Keep dashboard/admin screens work-focused: compact headers, dense grids, no marketing-style hero sections inside the app.
