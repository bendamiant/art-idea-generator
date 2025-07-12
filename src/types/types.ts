export type PageKey = "generate" | "recents" | "saved";

export type CategoryKey = "animals" | "concepts";

export interface CardData {
    id: string;
    locked: boolean;
    category: CategoryKey;
    word: string | null;
};

export type CardAction =
  | { type: "new"; id: number; category: CategoryKey }
  | { type: "delete"; id: number }              
  | { type: "toggle_lock"; id: number }         
  | { type: "generate" };    

export interface ToolbarAction {
    label: string;
    icon: React.ReactNode;
    onClick(): void;
}