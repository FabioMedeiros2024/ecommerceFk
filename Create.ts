import { PrismaClient, Prisma } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';
const prisma = new PrismaClient()

let produto: Prisma.ProdutoCreateInput
let valor: Prisma.ValorCreateInput
let venda: Prisma.VendaCreateInput  


async function create(nome: string, descricao: string, valor_: Decimal, id_vendedor: number)  {
    let produto: Prisma.ProdutoCreateInput
    let valor: Prisma.ValorCreateInput
    let venda: Prisma.VendaCreateInput   
  
    // Check if posts should be included in the query
    valor = {
        valor: valor_
        }

    venda = {
        id_vendedor: id_vendedor
        }

    produto = {
        nome: nome,
        descricao: descricao,
      }



    // Pass 'user' object into query
    const produtosCreate = await prisma.produto.create({ data: produto });
    const valorCreate = await prisma.valor.create({data: valor})
    const vendaCreate = await prisma.venda.create({ data: venda})
}

export{create}