import sharp from 'sharp';
import path from 'path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')), '..');
const IMG = path.join(ROOT, 'src/assets/img');

// Whole-image blur baked permanently into a new file (not CSS) - strong enough that
// no text anywhere in the frame remains legible. Source files never get published.
const jobs = [
  ['ecwchartswapsendingoutcomplete.webp', 'bg-workflow-03.webp'],
  ['ecwsplogging.webp', 'bg-workflow-04.webp'],
  ['sendingoutthruemail.webp', 'bg-workflow-05.webp'],
  ['generatingpce.webp', 'bg-workflow-06.webp'],
  ['folderfinalreviewbundling.webp', 'bg-workflow-07.webp'],
];

const SIGMA = 30;

for (const [inFile, outFile] of jobs) {
  const inPath = path.join(IMG, inFile);
  const outPath = path.join(IMG, outFile);
  await sharp(inPath)
    .resize({ width: 1200, withoutEnlargement: true })
    .blur(SIGMA)
    .webp({ quality: 70 })
    .toFile(outPath);
  console.log(`${inFile} -> ${outFile} (blur sigma=${SIGMA})`);
}

console.log('Done. Review each output file visually before using it.');
