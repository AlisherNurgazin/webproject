export class DataService{

  private data: string[] = [ 'Dark Souls 4', 'Mafia Definitive Edition', 'PLAYERUNKNOWNS BATTLEGROUNDS'];
  getData(): string[] {
    return this.data;
  }
  addData(name: string): void{
    this.data.push(name);
  }
}
