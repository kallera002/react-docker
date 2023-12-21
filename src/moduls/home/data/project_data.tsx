import { VscPerson, VscSymbolEvent, VscSymbolFile } from 'react-icons/vsc';
import { SiChainlink } from 'react-icons/si';
import { IProject } from '../types';

const projectDetails: IProject[] = [
  {
    project_title: 'PPDB Arrisalah',
    project_description: 'Sistem pendaftaran siswa baru pada yayasan Waqaf Ar Risalah, Padang',
    project_icon: <SiChainlink />,
    project_place: 'Padang, Sumatera Barat',
    project_date: '29 September 2018',
    project_day: 'Saturday',
    project_hostedby: '',
    project_event_link: 'https://ppdb.arrisalah.sch.id/',
    project_tags: [
      { tag: 'Laravel 5' },
      { tag: 'PHP Framework' },
      { tag: 'PHP' },
      { tag: 'Mysql' },
      { tag: 'Bootstrap' },
      { tag: 'CSS3' },
      { tag: 'HTML' },
      { tag: 'Datatable' },
      { tag: 'JQuery' },
      { tag: 'Ajax' },
    ],
    project_card_color: 'orange.400',
  },
  {
    project_title: 'Rekam Medis',
    project_description: 'Aplikasi Rekam Medis rumah sakit Umu',
    project_icon: <VscSymbolEvent />,
    project_place: 'Padang, Sumatera Barat',
    project_date: '2 Februari 2019',
    project_day: 'Saturday',
    project_hostedby: '',
    project_event_link: '',
    project_tags: [
      { tag: 'Codeigniter 3' },
      { tag: 'PHP Framework' },
      { tag: 'PHP' },
      { tag: 'Mysql' },
      { tag: 'Bootstrap' },
      { tag: 'CSS3' },
      { tag: 'HTML' },
      { tag: 'Datatable' },
      { tag: 'JQuery' },
      { tag: 'Ajax' },
    ],
    project_card_color: 'green.400',
  },
  {
    project_title: 'Linov HR',
    project_description: 'Human resource management system ',
    project_icon: <VscPerson />,
    project_place: 'Jakarta',
    project_date: '2 Februari 2019',
    project_day: 'Saturday',
    project_hostedby: '',
    project_event_link: '',
    project_tags: [
      { tag: 'Laravel' },
      { tag: 'PHP Framework' },
      { tag: 'PHP' },
      { tag: 'Postgres SQL' },
      { tag: 'Javascript Framework' },
      { tag: 'Angular 5' },
      { tag: 'primeNG' },
    ],
    project_card_color: 'blue.400',
  },
  {
    project_title: 'INARTS (Inti Artistika Solusitama )',
    project_description: 'InAct  Document Management System and Procurement ',
    project_icon: <VscSymbolFile />,
    project_place: 'Jakarta',
    project_date: '2 Februari 2019',
    project_day: 'Saturday',
    project_hostedby: '',
    project_event_link: '',
    project_tags: [
      { tag: 'Laravel' },
      { tag: 'PHP Framework' },
      { tag: 'PHP' },
      { tag: 'Mysql' },
      { tag: 'HTML' },
      { tag: 'Datatable' },
      { tag: 'JQuery' },
      { tag: 'Ajax' },
    ],
    project_card_color: 'red.400',
  },
];

export { projectDetails };
