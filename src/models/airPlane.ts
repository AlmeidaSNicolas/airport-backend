export interface AirPlane {
    id?: number;          // O '?' porque o banco gera automático no INSERT
    modelo: string;       // Ex: "Boeing 737"
    prefixo: string;      // Ex: "PR-NIC" (deve ser único)
    capacidade: number;   // Ex: 180
    companhia: string;    // Ex: "Nicolas Air"
    emManutencao: boolean; // True ou False
}