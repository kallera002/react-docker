import { ITag } from '../../common/_types';

export interface IProject {
  project_title: string;
  project_description: string;
  project_icon: React.ReactElement;
  project_place: string;
  project_date: string;
  project_day: string;
  project_hostedby: string;
  project_event_link: string;
  project_tags: ITag[];
  project_card_color: string;
}
