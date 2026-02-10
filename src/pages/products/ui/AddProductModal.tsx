import type { FC } from 'react';

import { Modal, Form, Input, InputNumber, Button } from 'antd';

import { type CreateProductDto } from '../model/types';

type AddProductModalProps = {
  open: boolean;
  closeModal: () => void;
  addProduct: (product: CreateProductDto) => void;
};

export const AddProductModal: FC<AddProductModalProps> = ({ open, closeModal, addProduct }) => {
  const [form] = Form.useForm();

  const handleFinish = (values: CreateProductDto) => {
    addProduct(values);
    form.resetFields();
    closeModal();
  };

  return (
    <Modal title='Добавить товар' open={open} onCancel={closeModal} footer={null}>
      <Form form={form} layout='vertical' onFinish={handleFinish} requiredMark={true}>
        <Form.Item label='Наименование' name='title' rules={[{ required: true, message: 'Введите название товара' }]}>
          <Input />
        </Form.Item>
        <Form.Item label='Цена' name='price' rules={[{ required: true, message: 'Введите цену' }]}>
          <InputNumber style={{ width: '100%' }} min={0} />
        </Form.Item>
        <Form.Item label='Вендор' name='brand' rules={[{ required: true, message: 'Введите вендора' }]}>
          <Input />
        </Form.Item>
        <Form.Item label='Артикул' name='sku' rules={[{ required: true, message: 'Введите артикул' }]}>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit' block>
            Добавить
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
