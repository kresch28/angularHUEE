import {TestBed} from '@angular/core/testing';
import {TodoService} from './todo.service';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';


describe('TodoService', () => {
    let service: TodoService;
    let firestore: jasmine.SpyObj<AngularFirestore>;

    beforeEach(() => {
        firestore = jasmine.createSpyObj('firestore', ['collection']);
        // firestore = jasmine.createSpyObj('firestore', ['valueChanges']);
        service = new TodoService(firestore as AngularFirestore);
        TestBed.configureTestingModule({
            declarations: [TodoService]
        });
    });

    /*it('should be created', () => {
        expect(service).toBeTruthy();
    });*/
    /*it('should add todo to list and emit added todo object', (done) => {
        service.create('some todo');
        expect(service).not.toBeNull();
        done();
    });*/

});
