// setIncos.ts  
import { UserOutlined ,UserSwitchOutlined,LockOutlined} from '@ant-design/icons-vue';  
  
export function setIncos(app: any) {  
  app.component('UserOutlined', UserOutlined);  
  app.component('UserSwitchOutlined', UserSwitchOutlined);  
  // 这里可以添加更多图标的注册  
  app.component('LockOutlined', LockOutlined);  
}