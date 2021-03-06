/**
 * LinkedSalesObjectsPublicService
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { DisplayOption } from './displayOption';

export class CardDisplayProperty {
    'name': string;
    'label': string;
    'dataType': CardDisplayProperty.DataTypeEnum;
    'options': Array<DisplayOption>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        },
        {
            "name": "dataType",
            "baseName": "dataType",
            "type": "CardDisplayProperty.DataTypeEnum"
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "Array<DisplayOption>"
        }    ];

    static getAttributeTypeMap() {
        return CardDisplayProperty.attributeTypeMap;
    }
}

export namespace CardDisplayProperty {
    export enum DataTypeEnum {
        BOOLEAN = <any> 'BOOLEAN',
        CURRENCY = <any> 'CURRENCY',
        DATE = <any> 'DATE',
        DATETIME = <any> 'DATETIME',
        EMAIL = <any> 'EMAIL',
        LINK = <any> 'LINK',
        NUMERIC = <any> 'NUMERIC',
        STRING = <any> 'STRING',
        STATUS = <any> 'STATUS'
    }
}
