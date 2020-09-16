export class Article {
    // Déclaraction des attributs de nos articles
    id: number ;
    nom: string;
    reference: string ;
    enStock: boolean ;

    // Le constructeur : comme son nom l'indique, nous permet de construire un objet Article.
    constructor(id: number, nom: string, reference: string, enStock: boolean){
      this.id = id ;
      this.nom = nom ;
      this.enStock = enStock ;
      this.reference = reference ;
    }
    // Change la valeur de l'ID.
    setId(value: number){
        this.id = value ;
    }
    // Retourne la valeur de L'ID.
    getId(): number {
        return this.id ;
    }
    setNom(value: string){
        this.nom = value ;
    }
    getNom(): string {
        return this.nom ;
    }

    setEnStock(value: boolean){
        this.enStock = value ;
    }
    isEnStock(): boolean{
        return this.enStock ;
    }

    setReference(value: string){
        this.reference = value ;
    }
    getReference(): string{
        return this.reference ;
    }
}
