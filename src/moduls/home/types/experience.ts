import { ITag } from '../../common/_types';

export interface IExperience {
  company_name: string;
  location: string;
  business_fields: string;
  start_date: string;
  end_date: string;
  paklaring_url: string;
  short_description: string;
  description: string;
  position: string;
  web_url: string;
  app_stack: ITag[];
}
