//
//  RootTabManController.swift
//  TabLayout
//
//  Created by Jing tai Piao on 29/11/21.
//  Copyright © 2021 Facebook. All rights reserved.
//

import UIKit
import Tabman
import Pageboy

class RootTabManController: TabmanViewController, PageboyViewControllerDataSource, TMBarDataSource {

  public var viewControllers: [UIViewController] = []
  
  
  public var titles: NSArray = []
  
  
  // MARK: Lifecycle
  
  override func viewDidLoad() {
    super.viewDidLoad()
    
    dataSource = self
    
//    self.isScrollEnabled = false;
    let bar = TMBar.ButtonBar()
    bar.layout.transitionStyle = .snap
    addBar(bar, dataSource: self, at: .top)
  }
  
  // MARK: PageboyViewControllerDataSource
  
  func numberOfViewControllers(in pageboyViewController: PageboyViewController) -> Int {
    return viewControllers.count
  }
  
  func viewController(for pageboyViewController: PageboyViewController, at index: PageboyViewController.PageIndex) -> UIViewController? {
    return viewControllers[index]
  }
  
  func defaultPage(for pageboyViewController: PageboyViewController) -> PageboyViewController.Page? {
    return .at(index: 1)
  }
  
  // MARK: TMBarDataSource
  
  func barItem(for bar: TMBar, at index: Int) -> TMBarItemable {
    var title = String(index)
    if (index > titles.count - 1) {
      return TMBarItem(title: title)
    }
    
    title = titles[index] as! String
    return TMBarItem(title: title)
  }
  
}
