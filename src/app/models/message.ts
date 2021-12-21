export interface Message {
  subject: string;
  read: boolean;
  starred: boolean;
  labels: [];
  body: string;
  id: number;
}
