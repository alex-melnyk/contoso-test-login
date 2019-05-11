import { NavigationActions, NavigationContainerComponent, NavigationNavigateActionPayload } from "react-navigation";

export class Navigator {
  private static ncc: NavigationContainerComponent;

  public static init(ref: NavigationContainerComponent) {
    Navigator.ncc = ref;
  }

  public static navigate(options: NavigationNavigateActionPayload) {
    Navigator.ncc.dispatch(NavigationActions.navigate(options));
  }
}