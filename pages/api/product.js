// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    codigo: 1010,
    descricao: 'Camisa polo feminina',
    tamanho: 'PMG',
    preco: 12.00
  })
}
