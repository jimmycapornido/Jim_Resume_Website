import { WorkflowItem } from '../types/workflow';
import toolChartSwap from '../assets/img/tool-chartswap.webp';
import toolEclinicalWorks from '../assets/img/tool-eclinicalworks.webp';
import bgWorkflow03 from '../assets/img/bg-workflow-03.webp';
import bgWorkflow04 from '../assets/img/bg-workflow-04.webp';
import bgWorkflow05 from '../assets/img/bg-workflow-05.webp';
import bgWorkflow06 from '../assets/img/bg-workflow-06.webp';
import bgWorkflow07 from '../assets/img/bg-workflow-07.webp';

// Note on visuals: the raw screenshots behind this experience contain real patient
// names, DOBs, addresses, and law-firm/requestor details that could not be reliably
// or consistently redacted (see project privacy review). Rather than publish edited
// screenshots, most workflows below are represented with typography and a step
// diagram instead of an image, so no real record data is ever rendered on this page.
// The two exceptions (below) are each platform's own public login/marketing screen,
// which contains no patient data at all.
export const workflows: WorkflowItem[] = [
  {
    id: 'chartswap-release',
    number: '01',
    title: 'Medical Records Request & Release Workflows',
    tools: ['ChartSwap'],
    summary:
      'Tracking medical-record requests from intake through authorized release — confirming provider and requestor details, requested record types, and service-date ranges before records go out.',
    responsibilities: [
      'Reviewing incoming record requests and requestor information',
      'Confirming requested record types and service-date ranges',
      'Attaching supporting documentation to each request',
      'Tracking request status through to fulfillment',
    ],
    clientValue: [
      'A more organized, consistently tracked record-request queue',
      'Fewer requests left in limbo waiting on a follow-up',
    ],
    image: toolChartSwap,
    imageAlt: "ChartSwap's login screen — the medical-record request and release platform used in this workflow",
    featured: false,
  },
  {
    id: 'ecw-administration',
    number: '02',
    title: 'EHR & Patient Record Administration',
    tools: ['eClinicalWorks (eCW)'],
    summary:
      'Administrative support inside eClinicalWorks — reviewing charts, updating patient information, and keeping encounter documentation organized for the clinical team.',
    responsibilities: [
      'Patient chart review and demographic updates',
      'Encounter and documentation review for completeness',
      'Supporting scheduling and referral administrative tasks',
      'Keeping records organized for fast retrieval',
    ],
    clientValue: [
      'Charts that are consistently organized and up to date',
      'Less routine EHR upkeep landing on clinical staff',
    ],
    image: toolEclinicalWorks,
    imageAlt: 'eClinicalWorks’ login screen — the EHR platform used in this workflow',
    featured: false,
  },
  {
    id: 'end-to-end-fulfillment',
    number: '03',
    title: 'End-to-End Medical Record Request Fulfillment',
    tools: ['eClinicalWorks', 'ChartSwap'],
    summary:
      'Coordinating a record request across both systems — from verifying the patient in the EHR to organizing and releasing the completed record set in ChartSwap.',
    responsibilities: [
      'Verifying patient identity and requested service dates',
      'Reviewing the EHR chart against the request scope',
      'Retrieving and organizing the relevant documentation',
      'Tracking the request through to fulfillment',
    ],
    clientValue: [
      'One consistent process spanning both the EHR and the release platform',
      'Fewer handoff gaps between chart review and record release',
    ],
    bgImage: bgWorkflow03,
    flowSteps: [
      'Request Received',
      'Patient Verified',
      'EHR Reviewed',
      'Service Dates Confirmed',
      'Records Retrieved',
      'Documentation Organized',
      'Request Fulfilled',
    ],
    featured: true,
  },
  {
    id: 'encounter-tracking',
    number: '04',
    title: 'Patient Encounter & Medical Records Tracking',
    tools: ['eClinicalWorks', 'Microsoft Lists / SharePoint'],
    summary:
      'Moving encounter and record-request details from the EHR into a shared Microsoft Lists tracker, so requests, providers, and status stay visible to the whole team.',
    responsibilities: [
      'Logging encounters, providers, and procedures from the EHR',
      'Recording medical-record request references and requestor details',
      'Keeping status and submission notes current',
      'Flagging items that need follow-up',
    ],
    clientValue: [
      'A single, shared view of where every request stands',
      'Consistent follow-through without relying on memory or email threads',
    ],
    bgImage: bgWorkflow04,
    featured: true,
  },
  {
    id: 'records-communication',
    number: '05',
    title: 'Medical Records Delivery & Requestor Communication',
    tools: ['Microsoft Outlook'],
    summary:
      'Professional, confidentiality-conscious correspondence around completed record packages — confirming attachments, following up with requestors, and documenting receipt.',
    responsibilities: [
      'Verifying attachments before a record package goes out',
      'Sending and following up on requestor correspondence',
      'Confirming receipt and logging communication',
    ],
    clientValue: [
      'Clear, professional communication with requestors',
      'A documented trail for every completed request',
    ],
    bgImage: bgWorkflow05,
    featured: false,
  },
  {
    id: 'pce-preparation',
    number: '06',
    title: 'Procedure Cost Estimate Preparation',
    tools: ['Administrative documentation'],
    summary:
      'Verifying patient and procedure details and preparing Procedure Cost Estimate documentation for administrative review — separate from Patient Care Encounter documentation.',
    responsibilities: [
      'Verifying patient information and planned service date',
      'Reviewing procedure and service-code information',
      'Preparing estimate documentation for review',
    ],
    clientValue: [
      'Consistent, well-organized estimate paperwork',
      'Administrative support that does not touch pricing or clinical decisions',
    ],
    bgImage: bgWorkflow06,
    featured: false,
  },
  {
    id: 'record-compilation-qa',
    number: '07',
    title: 'Medical Record Compilation, Bundling & Final Review',
    tools: ['ChartSwap', 'PDF tools', 'File organization'],
    summary:
      'Compiling a patient’s records into a single, verified package before release — checking dates of service, page counts, and scope against the original request.',
    responsibilities: [
      'Organizing patient folders and compiling documents',
      'Bundling records into a single reviewable file',
      'Checking dates of service and page counts against the request',
      'Flagging duplicates or gaps before final release',
    ],
    clientValue: [
      'A final quality check before anything goes out the door',
      'Fewer follow-up requests caused by incomplete record sets',
    ],
    bgImage: bgWorkflow07,
    featured: true,
  },
];
