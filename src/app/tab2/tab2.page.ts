import { Component } from "@angular/core";
import { variable } from "@angular/compiler/src/output/output_ast";
import { NumberValueAccessor } from "@angular/forms";

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
  stockPrice: number;
  sharePerctExternal: number;
  numYear: number;
  dividendPerctExternal: number;
  dividendGainLossExternal: number;
  stockNegative: boolean = false;

  //output
  netCashed: number;
  projReturn: number;
  newStocks: number;

  //calculation
  something: number;
  dividendGainLossInternal: number;
  sharePerctInternal: number;
  numStocks: number;
  dividentReturnsPerStock: number = 0;
  remainingCash: number;
  investedCashInit: number;
  dividendPerctInternal: number;
  shareValue: number;
  shareValue2: number;
  totalPoolOfMoney: number;
  frozenNumStocks: number;
  numStocksPurchasedPerQuarter: number;
  monthWhenNewStockBought:number;
  
  constructor() {}

  calculate() {
    this.intitalCheck();
    if (this.numYear > 50) {
      this.maxYears = true;
      this.clearEverything();
      this.yearString = "Please reduce number of years of under 50";
    } else {
      this.maxYears = false;
      this.shareValue = this.stockPrice;
      this.totalPoolOfMoney = this.cash;
      this.frozenNumStocks = Math.floor(
        this.totalPoolOfMoney / this.stockPrice
      );

      console.log("frozenNumStocks", this.frozenNumStocks);
      if (this.frozenNumStocks >= 1) {
        if (this.numYear <= 0) {
          console.log("Years have a problem!");
          this.clearEverything();
        } else {
          //converting from percent to numeric
          this.dividendPerctInternal = this.dividendPerctExternal / 100;
          console.log("Divident Percentage: ", this.dividendPerctInternal);

          //year loop
          for (var yearLoop= 0; yearLoop< this.numYear; yearLoop++) {
            console.log("Loop of year: ", yearLoop);

            console.log("totalPoolOfMoney ", this.totalPoolOfMoney);
            this.numStocks = Math.floor(
              this.totalPoolOfMoney / this.stockPrice
            );
            console.log("Number of stocks: ", this.numStocks);
            this.investedCashInit = this.numStocks * this.stockPrice;
            console.log("Cash invested: ", this.investedCashInit);
            this.remainingCash = this.totalPoolOfMoney - this.investedCashInit;
            console.log("Cash Remaining: ", this.remainingCash);

            //////////////////////////////////////////////////////////////////
            // Quarterly loop
            this.shareValue2=this.shareValue/4;
            for (var quarterLoop= 3; quarterLoop<= 12; quarterLoop= quarterLoop+ 3) {
              console.log(
                "Divident return Per Share end of quarter",
                "year: ",
                yearLoop,
                "month: ",
                quarterLoop/ 3,
                ": ",
                this.dividentReturnsPerStock
              );
              if (this.dividentReturnsPerStock >= this.shareValue) {
                this.numStocksPurchasedPerQuarter = Math.floor(
                  this.dividentReturnsPerStock / this.shareValue
                );
        
                console.log(
                  "Number of stocks purchased in quarter ",
                  quarterLoop,
                  ": ",
                  this.numStocksPurchasedPerQuarter
                );

                this.numStocks =
                  this.numStocks + this.numStocksPurchasedPerQuarter;
                this.numStocksPurchasedPerQuarter = 0;
                this.dividentReturnsPerStock =
                  this.dividentReturnsPerStock - this.shareValue;

                /*   console.log(
                  "Divident return Per Share end of quarter",
                  i,
                  ": ",
                  this.dividentReturnsPerStock
                );
                */
              }
              this.dividentReturnsPerStock =
                this.dividentReturnsPerStock +
                this.dividendPerctInternal * this.stockPrice;
              console.log(
                "Divident is still postive, Dividend value: ",
                this.dividentReturnsPerStock
              );
              this.investedCashInit =
              Math.round(
                (this.shareValue2 + this.dividentReturnsPerStock) *
                  this.numStocks *
                  100
              ) / 100;
            }

            this.something =
              this.dividendPerctInternal *
              (1 - this.dividendGainLossInternal / 100);

            console.log("Something: ", this.something);

            ////

            this.dividendPerctInternal =
              this.dividendPerctInternal + this.dividendGainLossInternal;
            if (this.dividendPerctInternal < 0) {
              this.dividendPerctInternal = 0;
            }
            console.log(
              "Divident this year will be, Dividend value: ",
              this.dividentReturnsPerStock
            );

            //dividendGainLossInternal
            ////

            console.log(
              "Divident Percentage % in year ",
              yearLoop,
              " ",
              this.dividendPerctInternal
            );
            this.shareValue =
              this.shareValue * (1 + this.sharePerctInternal / 100);
              console.log(
                "Stocks value changed in year: ",
                quarterLoop,
                "to : ",
                this.shareValue
              );
          
            console.log(
              "Share Value changed over year: ",
              yearLoop,
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

  private dividentNegativeMethod() {
    this.dividendPerctInternal =
      this.dividendPerctInternal * (1 - this.dividendGainLossInternal / 100);
    console.log(
      "Divident is still postive even after minusing, Dividend value: ",
      this.dividentReturnsPerStock
    );
  }

  clearEverything() {
    this.netCashed = 0;
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
      this.dividendGainLossColor = "danger";
      this.dividendGainLossInternal = -this.dividendGainLossExternal;
      console.log("dividendGainLossInternal: ", this.dividendGainLossInternal);
    } else {
      this.dividendGainLossColor = "dark";
      this.dividendGainLossInternal = this.dividendGainLossExternal;
      console.log("dividendGainLossInternal : ", this.dividendGainLossInternal);
    }
  }
}
