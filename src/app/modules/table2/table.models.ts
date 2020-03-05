import { AngularDesignSystemModel } from '../../models/angular-design-system.models';
import { PopoverModel } from '../popover/popover.model';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

/***********************
 * Table Header Models
 ***********************/

export enum TableHeaderTypeEnum {
    DEFAULT = 'default',
    SORT = 'sort',
    CHECKBOX = 'checkbox',
}

export enum TableHeaderSortEnum {
    NONE = 'none',
    ASC = 'asc',
    DESC = 'desc',
}

export class TableHeaderModel extends AngularDesignSystemModel {
    columnKey: string;
    label: string;
    type: TableHeaderTypeEnum = TableHeaderTypeEnum.DEFAULT;

    // Sort Properties
    sort?: TableHeaderSortEnum = TableHeaderSortEnum.NONE;

    // Checkbox Properties
    isChecked ? = false;

    constructor(options: any) {
        super();
        this.setOptions(options);
    }

}

/***********************
 * Table Row Models
 ***********************/

export enum TableCellTypeEnum {
    DEFAULT = 'default',
    BUTTON = 'button',
    CHECKBOX = 'checkbox',
    POPOVER = 'popover',
}

export class TableCellModel extends AngularDesignSystemModel {
    columnKey: string;
    label: string;
    ariaLabel ?: string;
    type ?: TableCellTypeEnum = TableCellTypeEnum.DEFAULT;
    class ? = '';

    // Icon Properties
    icon ?: IconDefinition;
    iconClass ? = '';

    // Button Properties
    disabled ? = false;
    onClick ?: any;

    // Checkbox Properties
    value: string;
    isChecked ? = false;

    // Popover Properties
    popoverModel: PopoverModel;

    instanceRef ?: any;

    constructor(options: any) {
        super();
        this.setOptions(options);
    }

    toggleCheckbox(isChecked) {
        this.isChecked = isChecked;
    }
}

/***********************
 * Table Row Models
 ***********************/

export class TableRowModel extends AngularDesignSystemModel {
    cells: TableCellModel[] = [];

    constructor(options: any) {
        super();
        this.setOptions(options);
    }
}


/***********************
 * Table Pagination Models
 ***********************/

export class TablePaginationModel extends AngularDesignSystemModel {
    isEnabled = true;
    perPage = 10;
    currentPage = 1;

    constructor(options: any) {
        super();
        this.setOptions(options);
    }
}


/***********************
 * Table Model
 ***********************/

export class TableModel extends AngularDesignSystemModel {
    id: string;
    headers: TableHeaderModel[] = [];
    rows: TableRowModel[] = [];
    totalRows: number;
    summary: string;
    class?: string;
    maxRows = 10;
    pagination: TablePaginationModel;
    isLoading: boolean;

    constructor(options: any) {
        super();
        this.setOptions(options);
    }

    toggleSort(columnKey: string): void {
        for (const header of this.headers) {
            if (header.columnKey === columnKey) {
                if (header.sort === TableHeaderSortEnum.NONE || header.sort === TableHeaderSortEnum.ASC) {
                    header.sort = TableHeaderSortEnum.DESC;
                } else {
                    header.sort = TableHeaderSortEnum.ASC;
                }
            } else {
                header.sort = TableHeaderSortEnum.NONE;
            }
        }
    }

    toggleSelectAll(columnKey: string, isChecked: boolean): void {
        // Set isChecked value in model for header
        this.headers.filter(header => header.columnKey === columnKey).map(header => { header.isChecked = isChecked; });

        // Set isChecked value in model for each related cell
        for (const row of this.rows) {
            for (const cell of row.cells) {
                if (cell.columnKey === columnKey) {
                    cell.isChecked = isChecked;
                }
            }
        }
    }

    unselectHeaderCheckbox(columnKey: string): void {
        this.headers.filter(header => header.columnKey === columnKey).map(header => { header.isChecked = false; });
    }
}
