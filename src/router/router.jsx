// 1. استيراد الدوال الأساسية من tanstack
import {
  createRootRoute,   // لإنشاء الراوت الجذري
  createRoute,       // لإنشاء الراوتات الداخلية
  createRouter,      // لبناء الراوتر الكامل
  RouterProvider     // لربط الراوتر مع تطبيق React
} from '@tanstack/react-router'

// 2. استيراد مكون الصفحة – App.jsx هو نفسه فيه الأقسام (Hero, About...)
import App from '../App'

// 3. إنشاء الراوت الجذري – هذا هو الأب لكل الراوتات
const rootRoute = createRootRoute({
  component: App, // المكون الجذري يلي بيحتوي كل شيء
})

// 4. إنشاء راوت رئيسي للمسار "/"
const mainRoute = createRoute({
  getParentRoute: () => rootRoute, // بيقول إنو هاد راوت تابع للجذر
  path: '/',                       // الرابط = الصفحة الرئيسية
  component: App,                  // نفس المكون لأنه عندنا صفحة واحدة
})

// 5. نجمع كل الراوتات في شجرة واحدة
const routeTree = rootRoute.addChildren([
  mainRoute,
])

// 6. نعمل الراوتر من الشجرة
export const router = createRouter({ routeTree })