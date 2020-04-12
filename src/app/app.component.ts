import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  isCollapsed = false;
  homeMenu = {
    name: '首页',
    icon: 'home',
    link: '/home'
  };
  menuGroups = [
    {
      name: '项目',
      icon: 'project',
      menuItem: [
        {
          name: '深大南区',
          key: 'shenzhenUniversity',
          link: '/project/shenzhenUniversity',
          params: {key: 'shenzhenUniversity',}
        }
      ]
    },
    {
      name: '用户管理',
      icon: 'user',
      menuItem: [
        {
          name: '用户列表',
          link: '/user-management',
          params: {}
        }
      ]
    }
  ];
}
