const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/future/DARK-labs/Projects/static-stripe-shop/Static-Stripe-shop/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/future/DARK-labs/Projects/static-stripe-shop/Static-Stripe-shop/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/future/DARK-labs/Projects/static-stripe-shop/Static-Stripe-shop/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/future/DARK-labs/Projects/static-stripe-shop/Static-Stripe-shop/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/home/future/DARK-labs/Projects/static-stripe-shop/Static-Stripe-shop/src/pages/page-2.js"))),
  "component---src-pages-shop-js": hot(preferDefault(require("/home/future/DARK-labs/Projects/static-stripe-shop/Static-Stripe-shop/src/pages/shop.js"))),
  "component---src-pages-submit-js": hot(preferDefault(require("/home/future/DARK-labs/Projects/static-stripe-shop/Static-Stripe-shop/src/pages/submit.js")))
}

