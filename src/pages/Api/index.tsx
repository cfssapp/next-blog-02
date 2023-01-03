import { Layout, Row, Typography } from 'antd';
import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import styles from './index.less';

import { PrismaClient } from '@prisma/client'

import services from '@/services/demo';

const { addUser, queryUserList, deleteUser, modifyUser } =
  services.UserController;

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const posts = await prisma.post.findMany();
  console.log(posts);

  return {
    props: { posts },
  };
}

export default ({posts}) => (
  <ul> 
   {posts.map(post => (
     <li key={post.id}>{post.title}</li>
    ))}
  </ul>
);

// const HomePage: React.FC = () => {
//   const { name } = useModel('global');
//   return (
//     <PageContainer ghost>
//       <Layout>
//         <Row>
//           <Typography.Title level={3} className={styles.title}>
//             Testing <strong>API</strong> ！
//           </Typography.Title>
          
//         </Row>
//       </Layout>
//     </PageContainer>
//   );
// };

// export default HomePage;
