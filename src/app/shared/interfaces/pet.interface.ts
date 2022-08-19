export interface IPet {
  id: number;
  category: ICategory;
  name: string;
  photoUrls: string[];
  tags: ITag[];
  status: string;
}

export interface ICategory {
  id: number;
  name: string;
}

export interface ITag {
  id: number;
  name: string;
}
