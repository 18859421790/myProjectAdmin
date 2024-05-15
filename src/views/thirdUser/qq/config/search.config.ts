import { IForm } from '@/components/Base/Form';
import { useOrder } from '@/hooks/use-order';
import { FormTypeEnum, ISearch, IThirdUser } from '@/interface';

import { columnsConfig } from './columns.config';

export const searchFormConfig: IForm<ISearch<IThirdUser>> = {
  gridSpan: 8,
  labelPlacement: 'left',
  formStyle: {
    justifyContent: 'center',
  },
  formItems: [
    {
      field: 'id',
      type: FormTypeEnum.input,
      label: 'id',
      placeholder: '请输入id',
    },
    {
      field: 'keyWord',
      type: FormTypeEnum.input,
      label: '关键字',
      placeholder: '请输入关键字',
    },
    {
      field: 'rangTimeType',
      type: FormTypeEnum.datePicker,
      label: '时间范围',
      placeholder: '请选择时间范围',
    },
    ...useOrder(columnsConfig),
  ],
};
