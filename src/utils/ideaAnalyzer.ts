import { Hypothesis, Prototype } from '../types';

export function generateHypothesis(idea: string): Hypothesis {
  // 这里可以后续接入更复杂的逻辑或AI来生成更准确的假设
  const hypotheses = {
    '技术新闻网站': {
      broad: '在所有技术人员中有5%的开发人员会订阅这个新闻网站',
      narrow: '前端社区中有2%的开发者会订阅这个新闻网站'
    },
    '书店': {
      broad: '社区内20%的居民每月至少会购买一本书',
      narrow: '社区内5%的年轻人每周会来书店学习或购书'
    }
  };

  // 简单的关键词匹配
  const match = Object.entries(hypotheses).find(([key]) => 
    idea.includes(key)
  );

  return match ? match[1] : {
    broad: '预计目标市场中有10%的用户会使用这个产品或服务',
    narrow: '在核心用户群中有3%的早期采用者会立即使用这个产品或服务'
  };
}

export function generatePrototype(idea: string): Prototype {
  // 这里可以后续接入更复杂的逻辑或AI来生成更准确的原型方案
  const prototypes = {
    '技术新闻网站': {
      description: '创建一个简单的落地页来验证想法',
      steps: [
        '创建一个简单的订阅页面',
        '投放小规模广告到技术社区',
        '统计访问量和订阅转化率',
        '收集用户反馈和建议'
      ]
    },
    '书店': {
      description: '通过临时展位测试市场反应',
      steps: [
        '在目标街道设置临时书籍展示区',
        '统计驻足和询问的人数',
        '记录热门书籍类别',
        '收集潜在客户联系方式'
      ]
    }
  };

  const match = Object.entries(prototypes).find(([key]) => 
    idea.includes(key)
  );

  return match ? match[1] : {
    description: '创建最小可行产品(MVP)来验证想法',
    steps: [
      '制作产品/服务的简单原型',
      '找到10-20个目标用户进行测试',
      '收集使用数据和反馈',
      '根据反馈快速迭代改进'
    ]
  };
}

export async function analyzeIdea(idea: string): Promise<{ hypothesis: Hypothesis, prototype: Prototype }> {
  const result = await fetch(`http://127.0.0.1:3004/product-suggestion/suggest?idea=${idea}`, {
    method: 'GET',
  });
  return result.json();
}