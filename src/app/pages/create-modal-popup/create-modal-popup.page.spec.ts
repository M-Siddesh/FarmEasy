import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { CreateModalPopupPage } from './create-modal-popup.page';

describe('CreateModalPopUpPage', () => {
    let component: CreateModalPopupPage;
    let fixture: ComponentFixture<CreateModalPopupPage>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ CreateModalPopupPage ],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(CreateModalPopupPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});