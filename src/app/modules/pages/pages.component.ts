import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ICustomer } from "../../shared/interfaces/customer.interface";
import { ClientService } from "../../services/client.service";
import { MetaService } from "../../services/meta.service";
import { UtilsService } from "src/app/services/utils.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-pages",
  templateUrl: "./pages.component.html",
  styleUrls: ["./pages.component.scss"]
})
export class PagesComponent implements OnInit, OnDestroy {
  public data: ICustomer | any;
  client: Subscription;

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private meta: MetaService,
    private router: Router,
    private utilsService: UtilsService,
    ) {
      
  }

  ngOnInit(): void {
    const user: any = this.route.snapshot.paramMap.get("user") || location.pathname.substring(1);    
    this.getData(user);
    console.log('[customer]', location.pathname, user);
  }

  private getData(user?: string) {
    this.client = this.clientService.getClients().subscribe((response) =>{
      this.data = response.find((e: any) => e.slug === user);
      if (this.data) {
        this.meta.updateTitle(this.data.meta?.title ? this.data.meta?.title : this.data.name, this.data.setting.isWhiteBrand ?? true);
        this.meta.updateMetaInfo(
          this.data.meta?.description ? this.data.meta?.description : this.data.name, 
          this.data.owner ? this.data.owner?.name : this.data.name, 
          this.data.meta?.keyword
        );
      } else {
        this.router.navigate(['/'])
      }
    });
  }

  ngOnDestroy(): void {
      this.data = {};
      this.client.unsubscribe();
  }
}
