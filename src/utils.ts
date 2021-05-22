export const array = (arr:any[]) =>{
    [...arr].sort(()=>Math.random() - 0.5);
}