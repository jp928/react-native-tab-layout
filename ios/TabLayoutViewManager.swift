import Tabman
import Pageboy


@objc(TabLayoutViewManager)
class TabLayoutViewManager: RCTViewManager {
  @objc override static func requiresMainQueueSetup() -> Bool {
    return false
  }
  
  override func view() -> (TabLayoutView) {
    return TabLayoutView()
  }
}

class TabLayoutView : UIView {
  private var tabViewController = RootTabManController()
  
  @objc var titles: NSArray! {
    didSet {
      self.tabViewController.titles = titles
    }
  }
  
  @objc override func layoutSubviews() {
    super.layoutSubviews()
    embed()
    
  }
  
  @objc override func didUpdateReactSubviews() {
    for view in self.reactSubviews() {
      let controller = UIViewController()
      tabViewController.viewControllers.append(controller.initWithView(view: view))
    }
  }
  
  
  func embed() {
    addSubview(tabViewController.view)
    tabViewController.view.frame = bounds
  }
  
}
