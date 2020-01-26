import { Component, ɵrenderComponent, Injector, ɵLifecycleHooksFeature as LifecycleHooksFeature } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private injector: Injector) { }

  loadFeature() {
    import('./feature/feature.component')
      .then(({ FeatureComponent }) => {
        ɵrenderComponent(FeatureComponent,
          { injector: this.injector, hostFeatures: [LifecycleHooksFeature] }
          );
      });
  }
  
}
