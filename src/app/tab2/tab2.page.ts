import { Component } from "@angular/core";
import { variable } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page {
  //theming
  lossProjected: boolean;
  completion: boolean = false;
  newStockColour: string = "dark";
  newProjSPColour: string;
  perctGainLoss: string = "dark";

  //input
  cash;
  shareCost: number;
  sharePerct: number;
  yearsNum: number;
  dividendPerct: number;
  dividendGainLoss: number;

  //output
  netCashed: number;
  projReturn: number;
  newStocks: number;

  //calculation
  numStocks: number;
  dividentReturnsPerStock: number = 0;
  remainingCash: number;
  investedCashInit: number;
  dividendPerctTS: number;
  shareValue: number;
  shareValueIncrease: number;
  totalPoolOfMoney: number;
  frozenNumStocks: number;
  constructor() {}

  calculate() {
    this.shareValue = this.shareCost;
    this.totalPoolOfMoney = this.cash;
    this.frozenNumStocks = Math.floor(this.totalPoolOfMoney / this.shareCost);
    console.log("Outside of loop");

    for (var j = 0; j < this.yearsNum; j++) {
      console.log("Outside of loop");

      console.log("totalPoolOfMoney ",this.totalPoolOfMoney);
      this.numStocks = Math.floor(this.totalPoolOfMoney / this.shareCost);
      console.log("Number of stocks: ", this.numStocks);
      this.investedCashInit = this.numStocks * this.shareCost;
      console.log("Cash invested: ", this.investedCashInit);
      this.remainingCash = this.totalPoolOfMoney - this.investedCashInit;
      console.log("Cash Remaining: ", this.remainingCash);

      //converting from percent to numeric
      this.dividendPerctTS = this.dividendPerct / 100;
      console.log("Divident Percentage: ", this.dividendPerctTS);

      //////////////////////////////////////////////////////////////////
        this.dividendPerctTS =
          this.dividendPerctTS * (1 + this.dividendGainLoss / 100);
        console.log(
          "Divident Percentage % in year ",
          j,
          " ",
          this.dividendPerctTS
        );
        for (var i = 1; i < 4 + 1; i++) {
          this.dividentReturnsPerStock =
            this.dividentReturnsPerStock +
            this.dividendPerctTS * this.shareCost;

          console.log(
            "Divident return Per Share end of quarter",
            i,
            ": ",
            this.dividentReturnsPerStock
          );
        }

        this.shareValue = this.shareValue * (1 + this.sharePerct / 100);
        console.log(
          "Share Value changed over year: ",
          j,
          ": ",
          this.shareValue
        );
        this.investedCashInit =
          Math.round(
            (this.shareValue + this.dividentReturnsPerStock) *
              this.numStocks *
              100
          ) / 100;
        console.log(
          "Money that you invested has become: ",
          this.investedCashInit
        );
        this.totalPoolOfMoney =
          Math.round((this.remainingCash + this.investedCashInit) * 100) / 100;
        console.log("NET CASH: ", this.totalPoolOfMoney);
        console.log("totalPoolOfMoney ",this.totalPoolOfMoney);

      //////////////////////////////////////////////////////////////////
    }
    console.log("totalPoolOfMoney ",this.totalPoolOfMoney);

    this.projReturn =
      Math.round((this.totalPoolOfMoney - this.cash) * 100) / 100;
    this.netCashed = this.totalPoolOfMoney;
    this.newStocks =  this.numStocks-this.frozenNumStocks;
    this.dividentReturnsPerStock=0;
    /////////////////////////////////////////////////

    //theming
    this.completion = true;
    if (this.netCashed >= this.cash) {
  
        this.newProjSPColour = "success";
      
    } else {
      this.newProjSPColour = "danger";
    }
    if (this.newStocks < 1|| this.newStocks==null) {
      this.newStocks = 0;
      this.newStockColour = "dark";
    } else {
      this.newStockColour = "success";
    }
  }
}
//(ionChange)="calculate()"
//<ion-button fill="solid" expand="block" color="success" (click)="calculate()">Calculate</ion-button>
