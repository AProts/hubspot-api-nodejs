/**
 * Properties
 * All HubSpot objects store data in default and custom properties. These endpoints provide access to read and modify object properties in HubSpot.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { OptionInput } from './optionInput';

export class PropertyUpdate {
    /**
    * A human-readable property label that will be shown in HubSpot.
    */
    'label'?: string;
    /**
    * The data type of the property.
    */
    'type'?: PropertyUpdate.TypeEnum;
    /**
    * Controls how the property appears in HubSpot.
    */
    'fieldType'?: PropertyUpdate.FieldTypeEnum;
    /**
    * The name of the property group the property belongs to.
    */
    'groupName'?: string;
    /**
    * A description of the property that will be shown as help text in HubSpot.
    */
    'description'?: string;
    /**
    * A list of valid options for the property.
    */
    'options'?: Array<OptionInput>;
    /**
    * Properties are displayed in order starting with the lowest positive integer value. Values of -1 will cause the Property to be displayed after any positive values.
    */
    'displayOrder'?: number;
    /**
    * If true, the property won't be visible and can't be used in HubSpot.
    */
    'hidden'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PropertyUpdate.TypeEnum"
        },
        {
            "name": "fieldType",
            "baseName": "fieldType",
            "type": "PropertyUpdate.FieldTypeEnum"
        },
        {
            "name": "groupName",
            "baseName": "groupName",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "Array<OptionInput>"
        },
        {
            "name": "displayOrder",
            "baseName": "displayOrder",
            "type": "number"
        },
        {
            "name": "hidden",
            "baseName": "hidden",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return PropertyUpdate.attributeTypeMap;
    }
}

export namespace PropertyUpdate {
    export enum TypeEnum {
        String = <any> 'string',
        Number = <any> 'number',
        Date = <any> 'date',
        Datetime = <any> 'datetime',
        Enumeration = <any> 'enumeration'
    }
    export enum FieldTypeEnum {
        Textarea = <any> 'textarea',
        Text = <any> 'text',
        Date = <any> 'date',
        File = <any> 'file',
        Number = <any> 'number',
        Select = <any> 'select',
        Radio = <any> 'radio',
        Checkbox = <any> 'checkbox',
        Booleancheckbox = <any> 'booleancheckbox'
    }
}