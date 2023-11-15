# Less预处理器

## 变量

### 插值

```css
@topH: 20px;
@height: ~"calc(100vh - var(--jj-height) - @{topH})";

```