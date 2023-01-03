import { Layout, Row, Typography } from 'antd';
import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import styles from './index.less';

import { request } from '@umijs/max';
import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;
prisma = new PrismaClient();
const allPosts = prisma.post.findMany({ });
console.log(allPosts);



const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <Layout>
      <Row>
        <Typography.Title level={3} className={styles.title}>
          欢迎使用 <strong>{name}</strong> ！
        </Typography.Title>
      </Row>
    </Layout>
    </PageContainer>
  );
};

export default HomePage;
