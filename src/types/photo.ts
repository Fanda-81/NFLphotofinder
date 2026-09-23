export type PhotoType = "Game Action" | "Portrait" | "Training" | "Tunnel" | "Sideline" | "Celebration" | "Lifestyle" | "Media Day";
export interface PhotoItem { id:string; imageUrl:string; title:string; player:string; position:string; team:string; photoType:PhotoType; style:string[]; source:string; sourceUrl:string; date:string; tags:string[]; height:"tall"|"wide"|"square"; }
export interface PhotoFilters { query:string; position:string; team:string; photoType:string; style:string; source:string; }
export interface Preferences { positions:string[]; teams:string[]; styles:string[]; }
