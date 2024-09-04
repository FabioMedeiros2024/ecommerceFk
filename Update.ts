import { PrismaClient, Prisma } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';
const prisma = new PrismaClient()

  export async function updateProduto(cod: number, nome: any, descricao: any) {
    console.log('cod: ' + cod + ' nome: ' + nome + 'descricao: ' + descricao)    
    return await prisma.produto.update({
        where: { cod },
        data: {cod, nome, descricao}
    })
}

export async function updateValor(id_valor: number, valor: Decimal, cod: number) {
  console.log('id_valor: ' + id_valor + ' valor: ' + valor + ' cod: ' + cod)
  return await prisma.valor.update({
      where: { id_valor },
      data: {id_valor, valor, cod}
  })
}

export async function updateVenda(id_venda: number, id_vendedor: any, cod: number) {
  console.log('id_venda: ' + id_venda + ' id_vendedor: ' + id_vendedor + 'cod: ' + cod)
  return await prisma.venda.update({
      where: { id_venda },
      data: {id_venda, id_vendedor, cod}
  })
}