export default [
  {
    url: `/module/user/login`,
    method: "post",
    response: (req) => {
      return {
        header: {
          code: 0,
          msg: "OK",
        },
        body: {
          name: `${req.body.name}小明`,
          token: "test_token",
          avatar:
            "https://img0.baidu.com/it/u=1570224879,3082274194&fm=253&fmt=auto&app=120&f=JPEG?w=432&h=288",
          roles: ["admin", "集团管理员"],
        },
      };
    },
  },
  {
    url: `/module/user/signout`,
    method: "post",
    response: () => {
      return {
        header: {
          code: 0,
          msg: "OK",
        },
      };
    },
  },
];
