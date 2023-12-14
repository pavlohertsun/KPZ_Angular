import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appAccessControl]',
  standalone: true
})
export class LoginApprovedFailedDirective {
  @Input() set appAccessControl(hasAccess: boolean) {
    if (hasAccess) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}

}
