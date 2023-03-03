import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { OnfieldCountModalPage } from "./onfield-count-modal.page";

describe('NotificationsPage', () => {
    let component: OnfieldCountModalPage;
    let fixture: ComponentFixture<OnfieldCountModalPage>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ OnfieldCountModalPage ],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(OnfieldCountModalPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});