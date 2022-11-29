# parcel build a site depending on ArcGIS JS API

This repo is a small proof of concept to try a couple of things:

1. Can [Parcel](https://parceljs.org) be used to build a multi-page app?
2. Can Parcel be used to build an app that uses the [ArcGIS JS API](https://developers.arcgis.com/javascript/latest/)?

In both cases, the answer appears to be **yes**. Build optimizations, hashing, dep traversal, it all seems to be there. The simple little map brings down lots of JS, around 3.3MB uncompressed. This matches my experience using the API within the Angular toolchain.

This would definitely be a viable toolchain for a simple app. For production, we'd want to configure our web server to take care of some concerns for us. A reasonable configuration would take advantage of the build hashing to cache our static resources. For example, we may use a `cache-control: max-age=0,must-revalidate` on all `index.html` files, and aggressively cache the hashed JS/CSS assets, since they're essentially immutable. Additionally, we'd want to re-write the URL `/explore` to point to `/explore/index.html` or vice versa, to make things more human friendly. I'm sure there are other concerns we'd want to address, and a web server like nginx or iis should be plenty for this simple app.