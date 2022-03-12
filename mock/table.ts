export default [
  {
    url: `/module/table/list1`,
    method: "post",
    response: () => {
      return {
        header: {
          code: 0,
          msg: "OK",
        },
        body: {
          data: [
            {
              id: "1",
              name: "小明1",
              role: "管理员",
            },
            {
              id: "2",
              name: "小明2",
              role: "管理员",
            },
            {
              id: "3",
              name: "小明3",
              role: "管理员",
            },
            {
              id: "4",
              name: "小明4",
              role: "管理员",
            },
            {
              id: "5",
              name: "小明5",
              role: "管理员",
            },
            {
              id: "6",
              name: "小明6",
              role: "管理员",
            },
            {
              id: "7",
              name: "小明7",
              role: "管理员",
            },
            {
              id: "8",
              name: "小明8",
              role: "管理员",
            },
            {
              id: "9",
              name: "小明9",
              role: "管理员",
            },
            {
              id: "10",
              name: "小明10",
              role: "管理员",
            },
          ],
          totalCount: 14,
        },
      };
    },
  },
  {
    url: `/module/table/list2`,
    method: "post",
    response: (req) => {
      const data = [
          {
            id: "1",
            name: "小明1",
            role: "管理员",
          },
          {
            id: "2",
            name: "小明2",
            role: "管理员",
          },
          {
            id: "3",
            name: "小明3",
            role: "管理员",
          },
          {
            id: "4",
            name: "小明4",
            role: "管理员",
          },
          {
            id: "5",
            name: "小明5",
            role: "管理员",
          },
          {
            id: "6",
            name: "小明6",
            role: "管理员",
          },
          {
            id: "7",
            name: "小明7",
            role: "管理员",
          },
          {
            id: "8",
            name: "小明8",
            role: "管理员",
          },
          {
            id: "9",
            name: "小明9",
            role: "管理员",
          },
          {
            id: "10",
            name: "小明10",
            role: "管理员",
          },
          {
            id: "11",
            name: "小明10",
            role: "管理员",
          },
          {
            id: "12",
            name: "小明10",
            role: "管理员",
          },
          {
            id: "13",
            name: "小明10",
            role: "管理员",
          },
          {
            id: "14",
            name: "小明10",
            role: "管理员",
          },
        ],
        pageNo = req.body.pageNo,
        pageSize = req.body.pageSize;
      const end = pageNo * pageSize;
      return {
        header: {
          code: 0,
          msg: "OK",
        },
        body: {
          data: data.slice(end - pageSize, end),
          totalCount: data.length,
        },
      };
    },
  },
  {
    url: `/module/table/itemInfo`,
    method: "post",
    response: (req) => {
      return {
        header: {
          code: 0,
          msg: "OK",
        },
        body: {
          data: {
            id: req.body.id,
            name: "小明",
            role: "管理员",
          },
        },
      };
    },
  },
];
