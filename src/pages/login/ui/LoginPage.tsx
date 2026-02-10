import { type FC } from 'react';

import { Button, Checkbox, Form, Input, Typography, App, Flex } from 'antd';
import { useNavigate } from 'react-router-dom';

import { EyeIcon, EyeOffIcon, LockIcon, UserIcon } from 'shared/icons';
import { Logo } from 'shared/ui';

import styles from './LoginPage.module.scss';
import { type LoginVariables, useLogin } from '../model/useLogin.ts';

const { Title, Text, Link } = Typography;

export const LoginPage: FC = () => {
  const navigate = useNavigate();

  const { message } = App.useApp();

  const { mutate: loginMutate, isPending } = useLogin();

  const onFinish = (values: LoginVariables) => {
    loginMutate(values, {
      onSuccess: () => {
        message.success('Вход успешен!');
        navigate('/products', { replace: true });
      },
      onError: (error) => {
        message.error(error.message);
      },
    });
  };

  return (
    <Flex className={styles.loginCard}>
      <Flex vertical gap={32} className={styles.shadowContainer}>
        <Flex vertical align='center' gap={32}>
          <Logo />
          <Flex vertical align='center' gap={12}>
            <Title level={1} className={styles.title}>
              Добро пожаловать!
            </Title>
            <Text className={styles.text}>Пожалуйста, авторизируйтесь</Text>
          </Flex>
        </Flex>
        <Form
          name='login'
          layout='vertical'
          onFinish={onFinish}
          validateTrigger='onBlur'
          initialValues={{ remember: false }}
        >
          <Form.Item
            label={<span className={styles.inputLabel}>Логин</span>}
            name='username'
            rules={[{ required: true, message: 'Введите логин' }]}
          >
            <Input prefix={<UserIcon />} placeholder='Логин' className={styles.input} />
          </Form.Item>
          <Form.Item
            label={<span className={styles.inputLabel}>Пароль</span>}
            name='password'
            rules={[{ required: true, message: 'Введите пароль' }]}
          >
            <Input.Password
              prefix={<LockIcon />}
              placeholder='Пароль'
              iconRender={(visible) => (visible ? <EyeIcon /> : <EyeOffIcon />)}
              className={styles.input}
            />
          </Form.Item>
          <Form.Item name='remember' valuePropName='checked'>
            <Checkbox className={styles.checkboxText}>Запомнить данные</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit' block loading={isPending} className={styles.button}>
              Войти
            </Button>
          </Form.Item>
          <Flex align='center' className={styles.divider}>
            <span>или</span>
          </Flex>
        </Form>
        <Text className={styles.noAccountText}>
          Нет аккаунта? <Link className={styles.link}>Создать</Link>
        </Text>
      </Flex>
    </Flex>
  );
};
