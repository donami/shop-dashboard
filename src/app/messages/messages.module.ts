import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared/shared.module';
import { CustomersModule } from '../customers/customers.module';
import { MessagesRoutingModule, routedComponents } from './messages.routing';
import { ThreadListComponent } from './components/thread-list.component';
import { ThreadDetailComponent } from './components/thread-detail.component';
import { ThreadStatusComponent } from './components/thread-status.component';
import { ThreadSelectedComponent } from './containers/thread-selected.component';
import { MessageService } from './message.service';
import { ThreadService } from './thread.service';
import { MessageItemComponent } from './components/message-item/message-item.component';
import { SetStatusComponent } from './components/set-status.component';
import { CustomerPortraitComponent } from './components/customer-portrait.component';
import { MessageFormComponent } from './components/message-form/message-form.component';
import { CollectionEffects } from './effects/collection';
import { ThreadEffects } from './effects/thread';
import { reducers } from './reducers';

@NgModule({
  imports: [
    MessagesRoutingModule,
    SharedModule,
    CustomersModule,
    StoreModule.forFeature('threads', reducers),

    EffectsModule.forFeature([ThreadEffects, CollectionEffects]),
  ],
  declarations: [
    routedComponents,
    MessageItemComponent,
    MessageFormComponent,
    ThreadListComponent,
    ThreadDetailComponent,
    ThreadStatusComponent,
    ThreadSelectedComponent,
    SetStatusComponent,
    CustomerPortraitComponent,
  ],
  exports: [
    MessageItemComponent,
    MessageFormComponent,
  ],
  providers: [
    MessageService,
    ThreadService,
  ],
})
export class MessagesModule { }
