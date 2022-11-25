import { Component } from '@angular/core';
import html2canvas from 'html2canvas';
const jsPDF = require('jspdf');
@Component({
  selector: 'app-imprimir-parte',
  templateUrl: './imprimir-parte.component.html',
  styleUrls: ['./imprimir-parte.component.css']
})
export class ImprimirParteComponent {
  downloadPDF() {
    // Extraemos el
    const DATA: any = document.getElementById('htmlData');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(DATA, options).then((canvas) => {
      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save('Parte.pdf');/* ${new Date().toISOString()}_ */
    });
  }
}
