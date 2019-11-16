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
  sharePerctColor: string = "dark";
  dividendGainLossColor: string = "dark";
  newProjSPColour: string;
  perctGainLoss: string = "dark";
  yearString = "Number of years";
  maxYears: boolean = false;
  dividendGainLossNegative: boolean = false;

  //input
  cash: number;
  shareCost: number;
  sharePerctExternal: number;
  yearsNum: number;
  dividendPerct: number;
  dividendGainLossExternal: number;
  stockNegative: boolean = false;

  //output
  netCashed: number;
  projReturn: number;
  newStocks: number;

  //calculation
  dividendGainLossInternal: number;
  sharePerctInternal: number;
  numStocks: number;
  dividentReturnsPerStock: number = 0;
  remainingCash: number;
  investedCashInit: number;
  dividendPerctTS: number;
  shareValue: number;
  shareValueIncrease: number;
  totalPoolOfMoney: number;
  frozenNumStocks: number;
  numStocksPurchasedPerQuarter: number;
  constructor() {}

  calculate() {
    this.intitalCheck();
    if (this.yearsNum > 50) {
      this.maxYears = true;
      this.clearEverything();
      this.yearString = "Please reduce number of years of under 50";
    } else {
      this.maxYears = false;
      this.shareValue = this.shareCost;
      this.totalPoolOfMoney = this.cash;
      this.frozenNumStocks = Math.floor(this.totalPoolOfMoney / this.shareCost);
      console.log("Outside of loop");
      if (this.frozenNumStocks >= 1) {
        if (this.yearsNum <= 0) {
          console.log("Years have a problem!");
          this.clearEverything();
        } else {
          //converting from percent to numeric
          this.dividendPerctTS = this.dividendPerct / 100;
          console.log("Divident Percentage: ", this.dividendPerctTS);
          for (var j = 0; j < this.yearsNum; j++) {
            console.log("Loop of year: ", j);

            console.log("totalPoolOfMoney ", this.totalPoolOfMoney);
            this.numStocks = Math.floor(this.totalPoolOfMoney / this.shareCost);
            console.log("Number of stocks: ", this.numStocks);
            this.investedCashInit = this.numStocks * this.shareCost;
            console.log("Cash invested: ", this.investedCashInit);
            this.remainingCash = this.totalPoolOfMoney - this.investedCashInit;
            console.log("Cash Remaining: ", this.remainingCash);

            //////////////////////////////////////////////////////////////////

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
              if (this.dividentReturnsPerStock >= this.shareValue) {
                this.numStocksPurchasedPerQuarter = Math.floor(
                  this.dividentReturnsPerStock / this.shareValue
                );
                console.log(
                  "Stocks value this quarter ",
                  i,
                  ": ",
                  this.shareValue
                );
                console.log(
                  "Number of stocks purchased in quarter ",
                  i,
                  ": ",
                  this.numStocksPurchasedPerQuarter
                );

                this.numStocks =
                  this.numStocks + this.numStocksPurchasedPerQuarter;
                this.dividentReturnsPerStock =
                  this.dividentReturnsPerStock - this.shareValue;

                console.log(
                  "Divident return Per Share end of quarter",
                  i,
                  ": ",
                  this.dividentReturnsPerStock
                );
              }
            }
            this.dividendPerctTS =
              this.dividendPerctTS * (1 + this.dividendGainLossInternal / 100);
            console.log(
              "Divident Percentage % in year ",
              j,
              " ",
              this.dividendPerctTS
            );
            this.shareValue =
              this.shareValue * (1 + this.sharePerctInternal / 100);

            this.investedCashInit =
              Math.round(
                (this.shareValue + this.dividentReturnsPerStock) *
                  this.numStocks *
                  100
              ) / 100;
            console.log(
              "Share Value changed over year: ",
              j,
              ": ",
              this.shareValue
            );
            console.log(
              "Money that you invested has become: ",
              this.investedCashInit
            );
            this.totalPoolOfMoney =
              Math.round((this.remainingCash + this.investedCashInit) * 100) /
              100;
            console.log("NET CASH: ", this.totalPoolOfMoney);
            console.log("totalPoolOfMoney ", this.totalPoolOfMoney);

            //////////////////////////////////////////////////////////////////
          }
          console.log("totalPoolOfMoney ", this.totalPoolOfMoney);

          this.projReturn =
            Math.round((this.totalPoolOfMoney - this.cash) * 100) / 100;
          this.netCashed = this.totalPoolOfMoney;
          this.newStocks = this.numStocks - this.frozenNumStocks;
          this.dividentReturnsPerStock = 0;
        }
      } else {
        console.log("PROBLEM!");

        this.clearEverything();
      }

      /////////////////////////////////////////////////

      //theming
      this.completion = true;
      if (this.netCashed >= this.cash) {
        this.newProjSPColour = "success";
      } else {
        this.netCashed = 0;
        this.newProjSPColour = "danger";
      }
      if (this.newStocks < 1 || this.newStocks == null) {
        this.newStocks = 0;
        this.newStockColour = "dark";
      } else {
        this.newStockColour = "success";
      }
    }
  }

  clearEverything() {
    this.netCashed = this.cash;
    this.projReturn = 0;
    this.newStocks = 0;
    this.dividentReturnsPerStock = 0;
  }

  intitalCheck() {
    if (this.stockNegative == true) {
      this.sharePerctInternal = -this.sharePerctExternal;
      this.sharePerctColor = "danger";
      console.log("checkbox: ", this.stockNegative);
    } else {
      this.sharePerctInternal = this.sharePerctExternal;
      this.sharePerctColor = "dark";
      console.log("checkbox: ", this.stockNegative);
    }

    if (this.dividendGainLossNegative == true) {
      this.dividendGainLossInternal = -this.dividendGainLossExternal;
      this.dividendGainLossColor = "danger";
    } else {
      this.dividendGainLossInternal = this.dividendGainLossExternal;
      this.dividendGainLossColor = "dark";
    }
  }
}
