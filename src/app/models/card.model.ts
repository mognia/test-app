export class CardModel {
  imageUrl?: string;
  targetUrl?: string;
  postedBy?: PostedByModel
}

export interface PostedByModel {
  name?: string;
  avatarUrl?: string

}
