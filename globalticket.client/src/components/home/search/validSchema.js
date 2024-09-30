import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    beginPoint: Yup.string()
      .test('notEqual', 'error', function(value) {
        const input2Value = this.parent.endPoint;
        return !input2Value || (value && value.toLowerCase() !== input2Value.toLowerCase());
      })
      .required(`Обов'язкове поле!`),
    endPoint: Yup.string()
      .test('notEqual', 'error', function(value) {
        const input1Value = this.parent.beginPoint;
        return !input1Value || (value && value.toLowerCase() !== input1Value.toLowerCase());
      })
      .required(`Обов'язкове поле!`),
  });

export const validSchemaAir = Yup.object().shape({
  beginPoint: Yup.string()
      .test('notEqual', 'error', function(value) {
        const input2Value = this.parent.endPoint;
        return !input2Value || (value && value.toLowerCase() !== input2Value.toLowerCase());
      })
      .required(`Обов'язкове поле!`),
  endPoint: Yup.string()
      .test('notEqual', 'error', function(value) {
        const input1Value = this.parent.beginPoint;
        return !input1Value || (value && value.toLowerCase() !== input1Value.toLowerCase());
      })
      .required(`Обов'язкове поле!`),
  beginDate: Yup.string().required()
})