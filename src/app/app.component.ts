import { Component, enableProdMode, ViewContainerRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { IntegralUIGrid } from '@lidorsystems/integralui-web/bin/integralui/components/integralui.grid';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent  {
    @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;
    @ViewChild('grid') grid: IntegralUIGrid;

    public columns: Array<any>;
    public rows: Array<any>;

    public gridStyle: any = {
        general: {
            normal: 'grid-cbxcol-normal'
        }
    }

    public isCustomCheckBoxActive: boolean = false;

    constructor(){
        this.columns = [
            { id: 2, headerText: "VCF Filename", width: 180 },
            { id: 1, groupText: "True/False", headerAlignment: 'center', contentAlignment: 'center', width: 50, fixedWidth: true },
            { id: 3, headerText: "# o Variants", headerAlignment: "center", contentAlignment: "center", width: 100 },
            { id: 4, headerText: "# of sample", headerAlignment: "center", contentAlignment: "center", width: 100, visible: true },
            { id: 5, headerText: "Parameters", headerAlignment: "center", contentAlignment: "center", width: 75, fixedWidth: true },
            { id: 6, headerText: "Comments", allowGrouping: false, headerAlignment: "center", contentAlignment: "center", width: 120 }
        ];

        this.rows = [
            { 
                id: 1,
                text: "File-1",
                cells: [{ cid: 1, value: true }, { cid: 2, text: "File1" }, { cid: 3, text: "2000" }, { cid: 4, text: "10", icon: "adventure" }, { cid: 5, value:'GQ, AD, DP' }, { cid: 6, text: "TEST" } ]
            },
            { 
                id: 2,
                text: "File-2",
                cells: [{ cid: 1 }, { cid: 2, text: "File2" }, { cid: 3, text: "3000" }, { cid: 4, text: "22", icon: "sci-fi" }, { cid: 5, value: 'GQ, AD, DP' }, { cid: 6, text: "TEST" } ]
            },
            { 
                id: 3,
                text: "File3",
                cells: [{ cid: 1, value: true }, { cid: 2, text: "File3" }, { cid: 3, text: "4000" }, { cid: 4, text: "33", icon: "western" }, { cid: 5, value: 'GQ, AD, DP' }, { cid: 6, text: "TEST" } ]
            },
            { 
                id: 4,
                text: "File4",
                cells: [{ cid: 1, value: true }, { cid: 2, text: "File4" }, { cid: 3, text: "5000" }, { cid: 4, text: "44", icon: "animation" }, { cid: 5, value: 'GQ, AD, DP' }, { cid: 6, text: "TEST" } ]
            },
            
        ];
    }

    ngAfterViewInit(){
    }

    // CheckBox Cell ---------------------------------------------------------------------

    public checkBoxClicked(cell: any){
        if (cell){
            let currentValue = cell.value == true ? true : false;
            cell.value = !currentValue;
        }
    }

    public columnCheckClicked(column: any){
        if (column){
            let currentValue = column.value == true ? true : false;
            column.value = !currentValue;

            let list = this.grid.getList();
            for (let i = 0; i < list.length; i++){
                let cell = this.grid.getCellByColumnId(list[i].cells, 1);
                if (cell)
                    cell.value = column.value;
            }
        }
    }

    onCheckChange(e: any){
        this.grid.updateLayout();
    }
}
