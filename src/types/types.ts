export type PageKey = "generate" | "recents" | "saved";

export type CategoryKey = "animals" | "concepts";

export interface CardData {
    id: string;
    locked: boolean;
    category: CategoryKey | null;
    word: string | null;
};

export type CardAction =
  | { type: "new" }
  | { type: "delete"; id: string }              
  | { type: "toggle_lock"; id: string }         
  | { type: "generate" }
  | { type: "set_category"; id: string; category: CategoryKey };