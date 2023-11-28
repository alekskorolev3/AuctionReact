import React from 'react'
import styles from '../../styles/CreateAd.module.scss'
import {Button, DatePicker, Form, Input, InputNumber, TreeSelect, Upload} from "antd";

const { TextArea } = Input;

const CreateAd = () => {

    const [form] = Form.useForm();

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Создать лот</h3>

            <Form className={styles.form}
                  hideRequiredMark
                  onFinish={(values) => console.log(values)} form={form}>
                <Form.Item label={<span className={styles.label}>Загрузить фото</span>} className={styles.formItem} name="photos" rules={[{ required: true, message: 'Загрузите минимум 1 фото'}]}>
                    <Upload listType="picture-card">
                        <div>
                            <div style={{ marginTop: 8 }}>Загрузить фото</div>
                        </div>
                    </Upload>
                </Form.Item>

                <Form.Item label={<span className={styles.label}>Название лота</span>} className={styles.formItem} name="title" rules={[{ required: true, message: 'Введите название'}]}>
                    <Input className={styles.input} placeholder='Например, мобильный телефон Samsung'/>
                </Form.Item>

                <Form.Item label={<span className={styles.label}>Выбор категории</span>} className={styles.formItem} name="category" rules={[{ required: true, message: 'Выберите категорию'}]}>
                    <TreeSelect
                        className={styles.input}
                        treeData={[
                            { title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] },
                        ]}
                    />
                </Form.Item>

                <Form.Item label={<span className={styles.label}>Описание</span>} className={styles.formItem} name="description" rules={[{ required: true, message: 'Введите описание'}]}>
                    <TextArea rows={6} />
                </Form.Item>

                <div className={styles.formGroup}>
                    <Form.Item label={<span className={styles.label}>Начальная цена</span>} className={styles.formItem} name="base_price" rules={[{ required: true, message: 'Введите начальную цену'}]}>
                        <InputNumber className={styles.input} min={0} max={1000} placeholder='250'/>
                    </Form.Item>

                    <Form.Item label={<span className={styles.label}>Шаг ставки</span>} className={styles.formItem} name="price_step" rules={[{ required: true, message: 'Введите шаг'}]}>
                        <InputNumber className={styles.input} min={0} max={1000} placeholder='5'/>
                    </Form.Item>
                </div>

                <Form.Item label={<span className={styles.label}>Дата окончания</span>} className={styles.formItem} name="end_date" rules={[{ required: true, message: 'Введите дату окончания'}]}>
                    <DatePicker className={styles.input}/>
                </Form.Item>

                <Button type="primary" htmlType="submit" className={styles.button}>
                    Опубликовать
                </Button>
            </Form>
        </div>
    )
}

export default CreateAd
