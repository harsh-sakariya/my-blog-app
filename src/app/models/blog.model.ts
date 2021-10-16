export class Blog {
  public id: number;
  public title: string;
  public description: string;
  public imageUrl: string;
  public tags: { ['tag_id']: number; ['tag_text']: string }[];
  public author: string;
  public date?: Date;
  public publishBy?: number;

  constructor(
    id: number,
    title: string,
    description: string,
    imageUrl: string,
    author: string,
    tags: { ['tag_id']: number; ['tag_text']: string }[],
    date: Date,
    publishBy: number = null
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.tags = tags;
    this.author = author;
    this.date = date;
    this.publishBy = publishBy;
  }
}
