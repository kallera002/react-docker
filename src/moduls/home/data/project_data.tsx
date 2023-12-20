import { VscSymbolEvent } from 'react-icons/vsc';
import { SiChainlink } from 'react-icons/si';
import { IProject } from '../types';

const timelineDetails: IProject[] = [
  {
    timeline_title: 'PPDB Arrisalah',
    timeline_description: 'Sistem pendaftaran siswa baru pada yayasan Waqaf Ar Risalah, Padang',
    timeline_icon: <SiChainlink />,
    timeline_place: 'Padang, Sumatera Barat',
    timeline_date: '29 September 2018',
    timeline_day: 'Saturday',
    timeline_hostedby: '',
    timeline_event_link: 'https://ppdb.arrisalah.sch.id/',
    timeline_tags: [
      { tag: 'Laravel' },
      { tag: 'Framework' },
      { tag: 'PHP' },
      { tag: 'Mysql' },
      { tag: 'Bootstrap' },
      { tag: 'CSS3' },
      { tag: 'HTML' },
      { tag: 'Datatable' },
      { tag: 'JQuery' },
      { tag: 'Ajax' },
    ],
    timeline_card_color: 'orange.400',
  },
  {
    timeline_title: 'Rekam Medis',
    timeline_description: 'Aplikasi Rekam Medis rumah sakit Umu',
    timeline_icon: <VscSymbolEvent />,
    timeline_place: 'Padang, Sumatera Barat',
    timeline_date: '2 Februari 2019',
    timeline_day: 'Saturday',
    timeline_hostedby: '',
    timeline_event_link: '',
    timeline_tags: [
      { tag: 'Laravel' },
      { tag: 'Framework' },
      { tag: 'PHP' },
      { tag: 'Mysql' },
      { tag: 'Bootstrap' },
      { tag: 'CSS3' },
      { tag: 'HTML' },
      { tag: 'Datatable' },
      { tag: 'JQuery' },
      { tag: 'Ajax' },
    ],
    timeline_card_color: 'green.400',
  },
  // {
  //   timeline_title: 'Rekam Medis',
  //   timeline_description: 'Aplikasi Rekam Medis rumah sakit Umu',
  //   timeline_icon: <VscSymbolEvent />,
  //   timeline_place: 'Padang, Sumatera Barat',
  //   timeline_date: '2 Februari 2019',
  //   timeline_day: 'Saturday',
  //   timeline_hostedby: '',
  //   timeline_event_link: '',
  //   timeline_tags: [
  //     { tag: 'Laravel' },
  //     { tag: 'Framework' },
  //     { tag: 'PHP' },
  //     { tag: 'Mysql' },
  //     { tag: 'Bootstrap' },
  //     { tag: 'CSS3' },
  //     { tag: 'HTML' },
  //     { tag: 'Datatable' },
  //     { tag: 'JQuery' },
  //     { tag: 'Ajax' },
  //   ],
  //   timeline_card_color: 'orange.400',
  // }
];

export { timelineDetails };
