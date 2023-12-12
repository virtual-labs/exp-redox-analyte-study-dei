importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"cd2bcc63369f82702340cbc2281c38d1","url":"assets/js/assessment_v2.js"},{"revision":"0c6c2d6c8bd1ff223774dc9689ee7788","url":"assets/js/assessment.js"},{"revision":"cd2a84a9d406609b6af31751adb582ca","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"55a56c3ee7c02b65ca63f5f6027a4a56","url":"feedback.html"},{"revision":"35f1c9df6595ba4acc1342a96111d576","url":"images/theory.png"},{"revision":"0b04a597e4852d2532fb35bd4c33502d","url":"index.html"},{"revision":"303fefc39b5c30a20c8a1e3321c5113d","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"c4d97832e7d03b07ad5a7e7dccb7abde","url":"posttest.html"},{"revision":"6757524a013de7081d821ef88f512802","url":"posttest.json"},{"revision":"7963f3aaccf3ed878d3e311362f0ebaa","url":"pretest.html"},{"revision":"b3d1d494eb83b3ff11a4f10d97f6aa55","url":"pretest.json"},{"revision":"07500442e5801a55f30fe425b486cb79","url":"procedure.html"},{"revision":"19da31043c0e822da5fe4e85cc15c878","url":"references.html"},{"revision":"57fc5f2c431250f9e742f42efa910302","url":"simulation.html"},{"revision":"b742f39bacc9b18af09256b117da8039","url":"simulation/css/main.css"},{"revision":"1d1e5fe980e6baebceca7a043fe3a6b7","url":"simulation/images/counterE.png"},{"revision":"2df614ddd2e48a9f2f9f45be9b632251","url":"simulation/images/electrode-icon.png"},{"revision":"d2beca4d1fb26698639e1d105c45f831","url":"simulation/images/GCE-E.jpg"},{"revision":"f2a236f394948dfa4042ad47efe2b782","url":"simulation/images/graph-combind-icon-old.png"},{"revision":"07a3b70f610d4141995428c774a96dda","url":"simulation/images/graph-combind-icon.png"},{"revision":"3ec720d9fd364686960349fcf6757b43","url":"simulation/images/graph-icon-old.png"},{"revision":"cdb9669822b8b48d7cc8f188c68e9888","url":"simulation/images/graph-icon.png"},{"revision":"0e003ba94d175bbf128ca560c15cce4b","url":"simulation/images/graph4.png"},{"revision":"bc0cb9ebeaa9188a821900aeb847646b","url":"simulation/images/graph6.png"},{"revision":"404ff6fb3606ec2709950354fac6edb0","url":"simulation/images/Icon-A.jpg"},{"revision":"a7d8a81a3dff8d2c8f865dfa8bc16680","url":"simulation/images/Icon-B.jpg"},{"revision":"be7d547ba39d1b07e7e4c5c8c65eb1d3","url":"simulation/images/IconA+B.jpg"},{"revision":"886007787d37420319a7a1930e6a736e","url":"simulation/images/Mod-GCE.jpg"},{"revision":"732a0f5b20582be3b82a9281f05caa94","url":"simulation/images/part0.png"},{"revision":"7b5f544c5c1846ab10067d61433c92e7","url":"simulation/images/part10.png"},{"revision":"7b5f544c5c1846ab10067d61433c92e7","url":"simulation/images/part8.png"},{"revision":"5033d9845d2a81796199a3d0155172c6","url":"simulation/images/referenceE.png"},{"revision":"a3d53b84e078d14f472d7350c5055e52","url":"simulation/images/Screen-Print-Electrode.jpg"},{"revision":"59abfe98a34a643c985b03b8a80f5a8e","url":"simulation/images/solution-a-icon.png"},{"revision":"ba79e1133a11da723f50c0c994df517a","url":"simulation/images/solution-b-icon.png"},{"revision":"5b3e78e22f171588c9432813ac7b7da9","url":"simulation/images/solution-c-icon.png"},{"revision":"4e48730be8586d2820db614f9bfec459","url":"simulation/images/solution-d-icon.png"},{"revision":"cc7918fe72604c3233ed40921590759a","url":"simulation/index.html"},{"revision":"8fb8fee4fcc3cc86ff6c724154c49c42","url":"simulation/js/jquery-3.6.0.min.js"},{"revision":"a6a1c58056e6d7519d6078c4452f3047","url":"simulation/js/jquery.canvasjs.min.js"},{"revision":"cbe21ee49f13dc9256c5e51e3bd11b8a","url":"simulation/js/main.js"},{"revision":"39c1b017d53c44039a6c4a0c030f03fb","url":"theory.html"},{"revision":"b3c099a42624fa4e21a149b82e4eb880","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );