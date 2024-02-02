import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  locale: 'zh', // 默认语言
  messages: {
    en: {
      users: 'Users',
      chat: 'Chat room',
      gallery: 'Gallery',
      AiPa:'Ai Painting',
      VedioGe: 'Vedio Generation',
      profile: 'profile',
      setting: 'setting',
      login: 'login',
      email: 'email',
      password: 'password',
      forget: 'forget password',
      login_8: 'Login now!',
      login_9:'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationemquasi. In deleniti eaque aut repudiandae et a id nisi.',
      chatHome:'chatHome'
    },
    zh: {
      users: '个人中心',
      chat: '聊 天 室',
      gallery: '画廊',
      AiPa: 'ai 绘画',
      VedioGe:'视频生成',
      profile:'形象',
      setting:'设置',
      login:'登录',
      email: '邮箱',
      password: '密码',
      forget: '忘记密码',
      login_8: '立即登录',
      login_9:'基于AIGC的多模态数字创作与交互平台。基于预训练语言模型以及图像模型的跨模态合成与转换能力,该平台将提供身临其境的AI创作与交互体验环境。',
      chatHome:'形象仓库'
    }
  }
});

export default i18n;
