const nomes = ["Luiza", "Bella", "Isabel", "Sophia", "Lia", "Maya", "Rosa"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)