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

  //input
  cash: number;
  stockPrice: number;
  sharePerctExternal: number;
  stockNegative: boolean = false;
  numYear: number;
  dividendPerctExternal: number;
  dividendGainLossExternal: number;
  dividendGainLossNegative: boolean = false;

  //output
  netCashed: number;
  projReturn: number;
  newStocks: number;

  //calculation
  something: number;
  dividendGainLossInternal: number;
  sharePerctInternal: number;
  numStocks: number;
  dividentReturnsPerStock: number;
  remainingCash: number;
  investedCashInit: number;
  dividendPerctInternal: number;
  shareValue: number;
  shareValue2: number;
  totalPoolOfMoney: number;
  frozenNumStocks: number;
  numStocksPurchasedPerQuarter: number;
  monthWhenNewStockBought: number;

  constructor() {}

  private calculate() {
    console.log("---------calculate---------");

    if (this.numYear > 50 || this.numYear <= 0) {
      //Number of years are not between 1-50
      this.clearEverything();
      this.numYearIssue();
    } else {
      //transfering external values to internal variables
      this.intitalCheck();
      if (this.frozenNumStocks >= 1) {
        //yearly Loop does yearly Calculations
        this.yearlyLoop();
        //return sents internal values to external view components
        this.yearlyReturns();
      } else {
        console.log("No stocks purchased!");
        this.clearEverything();
      }
      this.theming();
    }
  }

  private yearlyLoop() {
    console.log("---------yearlyLoop---------");

    for (var yearLoop = 1; yearLoop <= this.numYear; yearLoop++) {
      console.log("---------Year", yearLoop, "---------");
      console.log("totalPoolOfMoney: ", this.totalPoolOfMoney);
      console.log("numStocks: ", this.numStocks);
      console.log("investedCashInit: ", this.investedCashInit);
      console.log("remainingCash: ", this.remainingCash);
      console.log("dividendPerctInternal: ", this.dividendPerctInternal);
      ///////////////////////////////////////////////////////////////////
      this.numStocks = Math.floor(this.totalPoolOfMoney / this.stockPrice);
      this.investedCashInit = this.numStocks * this.stockPrice;
      this.remainingCash = this.totalPoolOfMoney - this.investedCashInit;
      this.shareValue2 = this.shareValue / 4;
      console.log("numStocks: ", this.numStocks);
      console.log("totalPoolOfMoney: ", this.totalPoolOfMoney);
      console.log("stockPrice: ", this.stockPrice);
      console.log("investedCashInit: ", this.investedCashInit);
      console.log("remainingCash: ", this.remainingCash);
      console.log("shareValue2: ", this.shareValue2);

      //////////////////////////////////////////////////////////////////
      this.quarterlyLoop();

      this.annualPertChange();

      console.log(
        "Money that you invested has become: ",
        this.investedCashInit
      );
      this.totalPoolOfMoney =
        Math.round((this.remainingCash + this.investedCashInit) * 100) / 100;
      console.log("totalPoolOfMoney ", this.totalPoolOfMoney);
      //////////////////////////////////////////////////////////////////
    }
  }

  private annualPertChange() {
    console.log("---------annualPertChange---------");

    this.dividendPerctInternal =
      this.dividendPerctInternal + this.dividendGainLossInternal;
    console.log(
      "Dividend % changed in year: ",
      "to : ",
      this.dividendPerctInternal
    );
    this.shareValue = this.shareValue * (1 + this.sharePerctInternal);
    console.log("Stocks value changed in year: ", "to : ", this.shareValue);
  }

  private quarterlyLoop() {
    console.log("---------quarterlyLoop---------");

    for (
      var quarterLoop = 3;
      quarterLoop <= 12;
      quarterLoop = quarterLoop + 3
    ) {
      console.log("---------Quarter", quarterLoop / 3, "---------");
      console.log("Dividend: ", this.dividentReturnsPerStock);
      this.reinvesting();
      this.calculateDividend();
      this.quarterlyResults();
    }
  }

  private calculateDividend() {
    console.log("---------calculateDividend---------");
    console.log("dividendPerctInternal: ", this.dividendPerctInternal);
    console.log(
      "dividentReturnsPerStock Before Calcualting Quarterly: ",
      this.dividentReturnsPerStock
    );
    console.log("StockPrice: ", this.stockPrice);
    this.dividentReturnsPerStock = this.dividendPerctInternal * this.stockPrice;
    console.log(
      "dividentReturnsPerStock After Calcualting Quarterly: ",
      this.dividentReturnsPerStock
    );
    if (this.dividentReturnsPerStock < 0) {
      console.log("Negative Dividend: ", this.dividentReturnsPerStock);
      this.dividentReturnsPerStock = 0;
    }
  }

  private reinvesting() {
    if (this.dividentReturnsPerStock >= this.shareValue) {
      console.log("---------Reinvesting---------");
      this.numStocksPurchasedPerQuarter = Math.floor(
        this.dividentReturnsPerStock / this.shareValue
      );
      console.log("Stocks purchased: ", this.numStocksPurchasedPerQuarter);
      this.numStocks = this.numStocks + this.numStocksPurchasedPerQuarter;
      for (var i = this.numStocksPurchasedPerQuarter; (i > 0); i--) {
        console.log(
          "For Counter to reduce the cost of new stocks purchased",
          i
        );
        console.log(
          "numStocksPurchasedPerQuarter: ",
          this.numStocksPurchasedPerQuarter
        );
        console.log("shareValue: ", this.shareValue);
        console.log("dividentReturnsPerStock: ", this.dividentReturnsPerStock);

        this.dividentReturnsPerStock =
          this.dividentReturnsPerStock - this.shareValue;
        console.log("dividentReturnsPerStock: ", this.dividentReturnsPerStock);
        this.numStocksPurchasedPerQuarter =
          this.numStocksPurchasedPerQuarter - 1;
      }
      console.log(
        "numStocksPurchasedPerQuarter: ",
        this.numStocksPurchasedPerQuarter
      );
    }
  }

  private quarterlyResults() {
    console.log("---------quarterlyResults---------");
    this.investedCashInit =
      Math.round(
        (this.shareValue2 + this.dividentReturnsPerStock) * this.numStocks * 100
      ) / 100;
  }

  private yearlyReturns() {
    console.log("---------yearlyReturns---------");

    console.log("totalPoolOfMoney ", this.totalPoolOfMoney);
    console.log("numStocks ", this.numStocks);
    this.projReturn =
      Math.round((this.totalPoolOfMoney - this.cash) * 100) / 100;
    this.netCashed = this.totalPoolOfMoney;
    this.newStocks = this.numStocks - this.frozenNumStocks;
    this.dividentReturnsPerStock = 0;
  }

  private intitalCheck() {
    console.log("---------intitalCheck---------");
    this.internalValueTransfer();
    this.isStockNegative();
    this.isDividendNegative();
  }

  private internalValueTransfer() {
    console.log("---------internalValueTransfer---------");

    this.maxYears = false;
    this.shareValue = this.stockPrice;
    this.totalPoolOfMoney = this.cash;
    this.dividendPerctInternal = this.dividendPerctExternal / 100;
    this.frozenNumStocks = Math.floor(this.totalPoolOfMoney / this.stockPrice);
    this.dividentReturnsPerStock = 0;
    this.investedCashInit = 0;

    console.log("totalPoolOfMoney: ", this.totalPoolOfMoney);
    console.log("shareValue: ", this.shareValue);
    console.log("sharePerctInternal: ", this.sharePerctInternal);
    console.log("numYear: ", this.numYear);
    console.log("dividendPerctInternal: ", this.dividendPerctInternal);
    console.log("frozenNumStocks: ", this.frozenNumStocks);
  }

  private isDividendNegative() {
    console.log("---------isDividendNegative---------");
    console.log("checkbox: ", this.dividendGainLossNegative);

    if (this.dividendGainLossNegative == true) {
      this.dividendGainLossColor = "danger";
      this.dividendGainLossInternal = -this.dividendGainLossExternal / 100;
    } else {
      this.dividendGainLossColor = "dark";
      this.dividendGainLossInternal = this.dividendGainLossExternal;
    }
    console.log(
      "dividendGainLossInternal : ",
      this.dividendGainLossInternal / 100
    );
  }

  private isStockNegative() {
    console.log("---------isStockNegative---------");
    console.log("checkbox: ", this.stockNegative);

    if (this.stockNegative == true) {
      this.sharePerctInternal = -this.sharePerctExternal / 100;
      this.sharePerctColor = "danger";
    } else {
      this.sharePerctInternal = this.sharePerctExternal / 100;
      this.sharePerctColor = "dark";
    }
    console.log("sharePerctInternal: ", this.sharePerctInternal);
  }

  private clearEverything() {
    console.log("---------clearEverything---------");
    this.netCashed = 0;
    this.projReturn = 0;
    this.newStocks = 0;
    this.dividentReturnsPerStock = 0;
  }

  private numYearIssue() {
    console.log("---------numYearIssue---------");

    this.maxYears = true;
    this.yearString = "Please enter Years Between 1-50";
  }

  private theming() {
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
