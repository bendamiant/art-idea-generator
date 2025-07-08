export type PageKey = "generate" | "recents" | "saved";
export type CategoryKey = "animals" | "concepts";

export interface Card {
    id: Number;
    locked: Boolean;
    category: String;
    word: String;
};

export type CardAction =
  | { type: "new"; id: Number; category: CategoryKey }
  | { type: "delete"; id: Number }              
  | { type: "toggle_lock"; id: Number }         
  | { type: "generate" };    