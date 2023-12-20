import { ITag } from '../../common/_types';

export interface IProject {
  timeline_title: string;
  timeline_description: string;
  timeline_icon: React.ReactElement;
  timeline_place: string;
  timeline_date: string;
  timeline_day: string;
  timeline_hostedby: string;
  timeline_event_link: string;
  timeline_tags: ITag[];
  timeline_card_color: string;
}
