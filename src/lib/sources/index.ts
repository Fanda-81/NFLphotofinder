export {mockPhotos} from "./mock";
export interface PhotoSource { name:string; search(query:string):Promise<import("@/types/photo").PhotoItem[]>; }
export const configuredSources=["NFL","Team galleries","Sports media","Community"];
