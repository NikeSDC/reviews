# Reviews-Repo
Repo that houses the Just Do It's Review component

# How to use:


# Services:
Endpoints
    api1: '/reviews/',
    api2: '/reviews/recent',
    api3: '/reviews/recent10',
    api4: '/reviews/helpful10',
    api5: '/reviews/highest10',
    api6: '/reviews/user/:id',
    api7: '/reviews/lowest10',
    api8: '/reviews/:id',
    url: 'http://localhost:3003',
    bundle: 'bundle.js'

# bundles:
router.use(service3.api1, createProxyMiddleware({target: service3.url, changeOrigin: true }));
router.use(service3.api2, createProxyMiddleware({target: service3.url, changeOrigin: true }));
router.use(service3.api3, createProxyMiddleware({target: service3.url, changeOrigin: true }));
router.use(service3.api4, createProxyMiddleware({target: service3.url, changeOrigin: true }));
router.use(service3.api5, createProxyMiddleware({target: service3.url, changeOrigin: true }));
router.use(service3.api6, createProxyMiddleware({target: service3.url, changeOrigin: true }));
router.use(service3.api7, createProxyMiddleware({target: service3.url, changeOrigin: true }));
router.use(service3.api8, createProxyMiddleware({target: service3.url, changeOrigin: true }));

