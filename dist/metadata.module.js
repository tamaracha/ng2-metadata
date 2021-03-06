import { NgModule } from '@angular/core';
import { PageTitlePositioning } from './models/page-title-positioning';
import { METADATA_SETTINGS } from './models/metadata-settings';
import { MetadataService } from './metadata.service';
export var MetadataModule = (function () {
    function MetadataModule() {
    }
    MetadataModule.forRoot = function (metadataSettings) {
        if (!metadataSettings) {
            metadataSettings = {
                pageTitlePositioning: PageTitlePositioning.PrependPageTitle,
                defaults: {}
            };
        }
        if (!metadataSettings.pageTitlePositioning) {
            metadataSettings.pageTitlePositioning = PageTitlePositioning.PrependPageTitle;
        }
        if (!metadataSettings.defaults) {
            metadataSettings.defaults = {};
        }
        return {
            ngModule: MetadataModule,
            providers: [
                MetadataService,
                { provide: METADATA_SETTINGS, useValue: metadataSettings }
            ]
        };
    };
    MetadataModule.decorators = [
        { type: NgModule },
    ];
    MetadataModule.ctorParameters = [];
    return MetadataModule;
}());
