import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient()



export async function deleteProduto(cod: number) {
  console.log('cod: ' + cod)
  try {
    return await prisma.produto.delete({
      where: {
        cod: cod
      }
    })
  } catch (error) {
    console.log('error: ' + error)
  } finally {
    console.log('final deleteValor')    
}
}

export async function deleteValor(id_valor: number) {
    console.log('id_valor: ' + id_valor)
    try {
      return await prisma.valor.delete({
        where: {
          id_valor: id_valor
        }
      })
    } catch (error) {
      console.log('error: ' + error)
    } finally {
      console.log('final deleteValor')    
}
}

export async function deleteVenda(id_venda: number) {
  console.log('id_venda: ' + id_venda)
  try {
    return await prisma.venda.delete({
      where: {
        id_venda: id_venda
      }
    })
  } catch (error) {
    console.log('error: ' + error)
  } finally {
    console.log('final deleteVenda')    
}
}