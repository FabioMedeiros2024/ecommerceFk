import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient()
var produto: Prisma.ValorFindUniqueArgs
var valor: Prisma.ValorFindUniqueArgs
var Venda: Prisma.VendaFindUniqueArgs

export async function readProduto(cod: number) {
  return await prisma.produto.findUnique({
    where: {
      cod: cod
    }
  })}

  export async function readValor(id_valor: number) {
    return await prisma.valor.findUnique({
      where: {
        id_valor: id_valor
      }
    })}
  
    export async function readVenda(id_venda: number) {
      return await prisma.venda.findUnique({
        where: {
          id_venda: id_venda 
        }
      })}