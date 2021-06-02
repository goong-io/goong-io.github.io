const puppeteer = require('puppeteer'); // eslint-disable-line
const path = require('path'); // eslint-disable-line
const pack = require('../../goong-js/package.json'); // eslint-disable-line

const fileName = process.argv[2];
const token =
    process.argv[3] || process.env.GOONG_API_KEY || process.env.GoongApiKey;

if (!token || !fileName) {
    throw new Error(
        '\n  Usage: npm run create-image <file-name> <goong-maptiles-api-key>\nExample: npm run create-image 3d-buildings YOUR_API_KEY\n\n'
    );
}

// strip file extension from file name
const fileNameFormatted = fileName.replace('.html', '').replace('.js', '');
// get the example contents/snippet
const snippet = require('fs').readFileSync(
    path.resolve(
        __dirname,
        '..',
        'pages',
        'example',
        `${fileNameFormatted}.html`
    ),
    'utf-8'
);
// create an HTML page to display the example snippet
const html = `<!DOCTYPE html>
<html>
<head>
<meta charset='utf-8' />
<script src='https://cdn.jsdelivr.net/npm/@goongmaps/goong-js@${pack.version}/dist/goong-js.js'></script>
<link href='https://cdn.jsdelivr.net/npm/@goongmaps/goong-js@${pack.version}/dist/goong-js.css' rel='stylesheet' />
<style>
body { margin:0; padding:0; }
#map { position: absolute; top:0; bottom:0; width: 600px; max-height: 300px; }
</style>
</head>
<body>
<script>
goongjs.accessToken = '${token}';
</script>
${snippet}
</body>
</html>`;

// initilize puppeteer
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    // set html for page and then wait until goong-js loads
    await page.setContent(html, { waitUntil: 'networkidle2' }); // eslint-disable-line
    // set viewport and double deviceScaleFactor to get a closer shot of the map
    await page.setViewport({
        width: 600,
        height: 600,
        deviceScaleFactor: 2
    });
    // create screenshot
    await page
        .screenshot({
            path: `./docs/img/src/${fileNameFormatted}.png`,
            type: 'png',
            clip: {
                x: 0,
                y: 0,
                width: 600,
                height: 250
            }
        })
        .then(() =>
            console.log(`Created ./docs/img/src/${fileNameFormatted}.png`)
        )
        .catch((err) => {
            console.log(err);
        });
    await browser.close();
})();
