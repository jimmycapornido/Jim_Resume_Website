import sharp from 'sharp';
import { statSync } from 'fs';
import path from 'path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')), '..');
const IMG = path.join(ROOT, 'src/assets/img');

// [inputFile, outputFile, maxWidth, quality]
const jobs = [
  // Certificates - need to stay legible when enlarged in a lightbox
  ['certificateambulancetraining.png', 'certificate-ambulance-training.webp', 1600, 82],
  ['certificatebasicfirstaide.png', 'certificate-first-aid-bls.webp', 1600, 82],
  ['certificatemedicalcodingtraining.jpg', 'certificate-medical-coding.webp', 1600, 82],
  ['certificatemedicaltranscriptiontraining.jpg', 'certificate-medical-transcription.webp', 1600, 82],
  ['certificatemedicalvirtualassistanttraining.jpg', 'certificate-medical-va.webp', 1600, 82],
  ['certificateradiationsafetyrefreshercourse.png', 'certificate-radiation-safety.webp', 1600, 82],
  // Portraits
  ['Jim-Profile.jpg', 'jim-profile.webp', 900, 82],
  // Safe tool marketing splash screens (no PHI - public login/marketing pages)
  ['eclinicalworkstools.png', 'tool-eclinicalworks.webp', 1400, 80],
  ['toolschartswap.png', 'tool-chartswap.webp', 1400, 80],
  // Brand logo (nav lockup)
  ['jimmy-ornido-logo.png', 'jimmy-ornido-logo.webp', 480, 90],
];

for (const [inFile, outFile, maxWidth, quality] of jobs) {
  const inPath = path.join(IMG, inFile);
  const outPath = path.join(IMG, outFile);
  const before = statSync(inPath).size;
  const img = sharp(inPath);
  const meta = await img.metadata();
  const width = Math.min(maxWidth, meta.width ?? maxWidth);
  await img.resize({ width, withoutEnlargement: true }).webp({ quality }).toFile(outPath);
  const after = statSync(outPath).size;
  console.log(`${inFile} (${(before / 1024).toFixed(0)}KB) -> ${outFile} (${(after / 1024).toFixed(0)}KB) @ w=${width}`);
}

console.log('Done.');
