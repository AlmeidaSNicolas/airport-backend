
export interface Fligth{
    id: number;
    numeroVoo: string;
    origem: string;
    destino: string;
    horarioPartida: string;
    horarioChegada: string;
    portao: string;
    status: "Confirmado" | "Embarcando" | "Cancelado"  | "Atrasado";
}