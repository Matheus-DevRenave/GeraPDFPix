const { jsPDF } = require("jspdf");
const fs = require("fs");
const path = require("path");

const logoPath = path.join(__dirname, "./assets/AF-Logo-Renave-Facil-Botao-Horizontal.png");
const logoBase64 = fs.readFileSync(logoPath, { encoding: "base64" }); // Converte para base64
const logo = `data:image/png;base64,${logoBase64}`;

const qrCodeBase64 = "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3ehGN7rRjW50oxvd6EY3utGNbp/RrbN+jc331vOWiDz3vQdZia3VXFkZ63lL6le60Y1udKMb3ehGN7rRjW50oxvd6EY3utGNbu/qdkV79Ze9MVfeHdyxBwcrVgpv7di5tx8bpJJzYm7a6UY3utGNbnSjG93oRje60Y1udKMb3ehGN7p9RretT57bObHbiPWAW9ts7pw4+PZjZ8zWqTm3ViV/bEA3utGNbnSjG93oRje60Y1udKMb3ehGN7rR7WbdYh3iXGm4VQqX3MbcYRa7ydg76jy9Sgb4wc6UbnSjG93oRje60Y1udKMb3ehGN7rRjW50o9uzusVas1jlFNsqsaslVXWsf9wqOufcbPlbC7rRjW50oxvd6EY3utGNbnSjG93oRje60Y1udItWinPV3lzxt1VWxn54bq62Hn/L6xKw6EY3utGNbnSjG93oRje60Y1udKMb3ehGN7rR7fhddjRfc8NRUr+WVGyxg7BzYedUjVFIN7rRjW50oxvd6EY3utGNbnSjG93oRje60Y1uq6tzcLE6d87cF831YlfoVpI5ZOfKypJem250oxvd6EY3utGNbnSjG93oRje60Y1udKPbu7qJiPSEbiJCNxERuomI0E1EhG4iInQTEbqJiNBNRIRuIiJ0ExGhm4gI3USEbiIidBMRoZuICN1EROgmIkI3EaGbiAjdREToJiJCNxERuomI0E1EvpN/ADPnp/wB/TPtAAAAAElFTkSuQmCC";
const pixCopiaCola = "00020101021226800014br.gov.bcb.pix2558pix.asaas.com/qr/cobv/b0da11e2-54fe-4099-9be2-42fa56a2a1405204000053039865802BR5925RENAVE FACIL DESENVOLVIME6006Itajai61088830166062070503***6304552E";

const comprador = "Marcos Dias";
const estabelecimento = "40.903.709/0001-11 - POPULAR COMERCIO DE MOTOCICLETA LTDA";
const tipoCobranca = "PIX";
const numeroPedido = "6800";
const produto = "PACOTE DE CREDITOS - SEMINOVOS (LOJ0-10 créditos)";
const vencimento = "15/06/2023";
const valorFatura = "R$ 747,50";
const mensagemRodape = "Seus créditos serão liberados em até 5 minutos após a confirmação do pagamento desta fatura.";

// Função para quebrar texto e ajustar posicionamento
function renderMultilineText (doc, text, x, startY, maxWidth, lineHeight) {
  const lines = doc.splitTextToSize(text, maxWidth);
  let currentY = startY;

  lines.forEach((line) => {
    doc.text(line, x, currentY);
    currentY += lineHeight; // Incrementa para a próxima linha
  })

  return currentY; // Retorna a posição Y final
}

function generatePDF() {
  const doc = new jsPDF();

  // Logo
  doc.addImage(logo, 'PNG', 15, 11, 25, 10);

  // Define texto com a cor
  doc.setTextColor("#2c2660")

  // Título
  const pageWidth = doc.internal.pageSize.getWidth();
  const title = "Dados para pagamento de pedido";
  const titleWidth = doc.getStringUnitWidth(title) * doc.internal.getFontSize() / doc.internal.scaleFactor;
  const titleMarginLeft = (pageWidth - titleWidth) / 2;
  doc.setFontSize(14);
  doc.setFont("Helvetica", "bold");
  doc.text(title, titleMarginLeft, 18);

  doc.setFontSize(12);

  // Comprador
  doc.setFont("Helvetica", "normal");
  doc.text("Comprador: ", 20, 35);
  doc.setFont("Helvetica", "bold");
  const compradorEndY = renderMultilineText(doc, comprador, 43.5, 35, 150, 5);

  // Estabelecimento
  doc.setFont("Helvetica", "normal");
  doc.text("Estabelecimento: ", 20, compradorEndY + 5);
  doc.setFont("Helvetica", "bold");
  const estabelecimentoEndY = renderMultilineText(doc, estabelecimento, 53.5, compradorEndY + 5, 150, 5);

  // Produto
  doc.setFont("Helvetica", "normal");
  doc.text("Produto: ", 20, estabelecimentoEndY + 5); // Ajusta a posição vertical
  doc.setFont("Helvetica", "bold");
  const produtoEndY = renderMultilineText(doc, produto, 37.3, estabelecimentoEndY + 5, 150, 5);

  // Ajuste dinâmico de `compradorEndY`, `estabelecimentoEndY` e `produtoEndY`
  const maxEndY = Math.max(compradorEndY, estabelecimentoEndY, produtoEndY);

  // Atribui labels dos demais campos
  doc.setFont("Helvetica", "normal");
  doc.text("Tipo de cobrança: ", 20, maxEndY  + 5);
  doc.text("Nº do pedido: ", 20, maxEndY  + 15);
  doc.text("Vencimento: ", 20, maxEndY  + 25);
  doc.text("Valor da fatura: ", 20, maxEndY  + 35);

  // Atribui valores aos demais campos
  doc.setFont("Helvetica", "bold");
  doc.text(tipoCobranca, 55, maxEndY + 5);
  doc.text(numeroPedido, 47, maxEndY + 15);
  doc.text(vencimento, 44.7, maxEndY + 25);
  doc.text(valorFatura, 50.2, maxEndY + 35);

  const boxX = (pageWidth - 170) / 2; // Centraliza horizontalmente
  const boxStartY = maxEndY + 45; // Inicio após os campos anteriores

  // Desenha a Caixa tracejada do QR Code
  doc.setDrawColor(44, 38, 96); // Convertido #2c2660 para RGB
  doc.setLineWidth(0.5);
  doc.setLineDash([2, 2], 0); // Linha tracejada
  doc.setFillColor(247, 247, 247);
  doc.roundedRect(boxX, boxStartY, 170, 80, 2, 2, "FD"); // Desenha a caixa

  // Texto dentro da caixa
  const boxText = "Escaneie o QR Code ou copie o código PIX abaixo para realizar o pagamento.";
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(11);
  const textWidth = doc.getTextWidth(boxText);
  const textX = (pageWidth - textWidth) / 2; // Centraliza o texto horizontalmente
  doc.text(boxText, textX, boxStartY + 10);

  // Adicionando o QR Code
  const qrCodeX = (pageWidth - 60) / 2; // Centraliza horizontalmente
  doc.addImage(qrCodeBase64, "PNG", qrCodeX, boxStartY + 15, 60, 60);

  // Desenha a Caixa do Pix Copia e Cola
  doc.setDrawColor(44, 38, 96);
  doc.setLineWidth(0.5);
  doc.setLineDash(0, 0, 0);
  doc.setFillColor(247, 247, 247);
  doc.roundedRect(boxX, boxStartY + 85, 170, 20, 2, 2, "FD");

  // Adicionando o Pix Copia e Cola
  doc.setFont("Courier", "normal");
  doc.setFontSize(10);
  doc.text(pixCopiaCola, boxX + 5, boxStartY + 90, { maxWidth: 170 - 10 }); // Alinha o texto com margem dentro da caixa

  // Mensagem no rodapé
  doc.setFont("Helvetica", "italic");
  doc.setFontSize(10);
  doc.text(mensagemRodape, 20, boxStartY + 125, { maxWidth: 170 });

  // Salva o PDF
  const pdfOutput = doc.output();

  // Converte o PDF para base64
  const base64 = Buffer.from(pdfOutput).toString("base64")

  console.log("PDF gerado com sucesso!");
  return base64
}

generatePDF();