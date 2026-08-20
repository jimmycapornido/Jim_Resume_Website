import { TrainingItem } from '../types/training';
import medicalVaCert from '../assets/img/certificate-medical-va.webp';
import medicalCodingCert from '../assets/img/certificate-medical-coding.webp';
import medicalTranscriptionCert from '../assets/img/certificate-medical-transcription.webp';
import ambulanceCert from '../assets/img/certificate-ambulance-training.webp';
import radiationSafetyCert from '../assets/img/certificate-radiation-safety.webp';
import firstAidBlsCert from '../assets/img/certificate-first-aid-bls.webp';

// Ordered: Medical VA specialization first (most relevant to this role),
// then clinical/safety foundation training.
export const training: TrainingItem[] = [
  {
    id: 'medical-va-training',
    title: 'Medical Virtual Assistant Training',
    provider: 'ClairVoyance',
    date: 'January 2026',
    image: medicalVaCert,
    category: 'medical-va',
    summary:
      'Training covering medical virtual assistance, EHR management, insurance-related workflows, telehealth support, medical transcription, scheduling, and healthcare documentation.',
    certificateCode: 'CVMV-VA105855',
  },
  {
    id: 'medical-coding-training',
    title: 'Medical Coding Training',
    provider: 'ClairVoyance',
    date: 'January 2026',
    image: medicalCodingCert,
    category: 'medical-va',
    summary:
      'Foundational training in diagnostic and procedural coding concepts, healthcare classification systems, and documentation review — not a professional coding certification.',
  },
  {
    id: 'medical-transcription-training',
    title: 'Medical Transcription Training',
    provider: 'ClairVoyance',
    date: 'January 2026',
    image: medicalTranscriptionCert,
    category: 'medical-va',
    summary:
      'Training in medical transcription, terminology, clinical documentation, and accurate patient-record preparation.',
    certificateCode: 'CVMV-VA105855',
  },
  {
    id: 'ambulance-training',
    title: 'Ambulance Training',
    provider: "Cebu Doctors' University Hospital",
    date: 'December 2023',
    image: ambulanceCert,
    category: 'clinical-safety',
    summary:
      'Hospital-conducted training in emergency response awareness, patient transport, and healthcare-team coordination.',
  },
  {
    id: 'radiation-safety',
    title: 'Radiation Safety Refresher Course',
    provider: "Cebu Doctors' University Hospital",
    date: 'September 2023',
    image: radiationSafetyCert,
    category: 'clinical-safety',
    summary:
      'Refresher training in radiation safety, occupational hazard awareness, and clinical safety procedures.',
  },
  {
    id: 'first-aid-bls',
    title: 'Basic First Aid & Basic Life Support Training',
    provider: 'Basic Lifesaving Solutions Training Center (ECSI-Accredited Training Center)',
    date: 'February 2022',
    image: firstAidBlsCert,
    category: 'clinical-safety',
    summary:
      'Coursework in basic first aid and basic life support, referencing current ILCOR and AHA resuscitation guidelines.',
  },
];

export const medicalVaTraining = training.filter((t) => t.category === 'medical-va');
export const clinicalSafetyTraining = training.filter((t) => t.category === 'clinical-safety');
