import { Layout, Row, Typography } from 'antd';
import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import styles from './index.less';

// import { request } from '@umijs/max';
// import { PrismaClient } from '@prisma/client';

// export async function getStaticProps() {
//   const prisma = new PrismaClient()
//   const allposts = await prisma.post.findMany()

//   console.log(allposts);
//   return {
//     props : { allposts }
//   }
// }



const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <Layout>
      <Row>
        <Typography.Title level={3} className={styles.title}>
          Testing <strong>API</strong> ！
        </Typography.Title>
      </Row>
    </Layout>
    </PageContainer>
  );
};

export default HomePage;
