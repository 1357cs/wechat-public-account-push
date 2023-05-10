/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx8231de680e5ebe9a',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'd9864b0fe9b78f978edeb50bc43ca73e',

  PROVINCE: '重庆',
  CITY: '渝北',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oPDmA6cr5A1Agu2F0fd_U41ai52s',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'uo7iKiQhgrnCKtDl4MjfZsByoNqppw3cORHiUVxGdUA',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-20',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '2000', date: '10-20',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '李四', year: '1996', date: '09-31',
        },
        
      ],
      
    
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'uo7iKiQhgrnCKtDl4MjfZsByoNqppw3cORHiUVxGdUA',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oPDmA6cr5A1Agu2F0fd_U41ai52s',
    }
  ],

}

module.exports = USER_CONFIG

