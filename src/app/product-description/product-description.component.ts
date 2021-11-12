import { Component, OnInit } from '@angular/core';
import { AlbumStorePage } from '../../../e2e/app.po';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
 albumInfo;

  constructor( private _productService: ProductService) {
    
   }

   ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getAlbum(1);
    }
  }

  getProduct(id: number): void {
    this._productService.getAlbum(1).subscribe({
      next: response => this.albumInfo = response,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}

}
