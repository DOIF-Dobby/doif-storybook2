import React, {
  ChangeEvent,
  RefObject,
  useCallback,
  useRef,
  useState,
} from 'react';
import useOutsideAlerter from '../../hooks/useOutsideAlerter';
import { DoifDataProps } from '../../props/DoifCommonProps';
import { DoifColorType } from '../../styles/themes/DoifThemeProps';
import Icon from '../icon/Icon';
import Input from '../input/Input';
import { StyledSelectContainer } from './Select.style';
import _ from 'lodash';

export interface SelectProps {
  /** 보여줄 데이터 배열입니다. { code: string, name: string } */
  data: Array<DoifDataProps>;
  /** 선택할 데이터 code 값입니다. */
  value: string;
  /** placeholder를 설정합니다. */
  placeholder?: string;
  /** Selectbox의 모양을 설정합니다. */
  variant: 'outline' | 'underline';
  /** 데이터의 색상을 정합니다. */
  color: DoifColorType;
  /** Selectbox의 넓이를 설정합니다. */
  width: string | number;
  /** Selectbox의 높이를 설정합니다. */
  height: string | number;
  /** Selectbox를 비활성화 시킵니다. */
  disabled: boolean;
  /** Selectbox의 defaultValue를 설정합니다. */
  defaultValue?: DoifDataProps;
  /** id 속성입니다. */
  id?: string;
  /** name 속성입니다. */
  name?: string;
  /** validation 메시지 */
  validation?: string;
  /** Selectbox의 값이 바뀔 때 실행되는 콜백 함수입니다. */
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

/**
 * `Select` 컴포넌트는 여러 개의 값 중 하나를 선택할 때 사용합니다.
 */
const Select = ({
  data,
  value,
  placeholder,
  variant,
  color,
  width,
  height,
  disabled,
  defaultValue,
  id,
  name,
  validation,
  onChange,
}: SelectProps) => {
  // input 스타일 설정
  const inputStyle = {
    cursor: disabled ? 'auto' : 'pointer',
  };

  // defaultValue 있으면 제일 앞에 위치시킨다.
  const initData: Array<DoifDataProps> = defaultValue
    ? [defaultValue, ...data]
    : data;

  // value가 null 이면 제일 앞에있는 값으로 설정한다.
  value = value === null ? initData[0].code : value;

  // state 설정
  const [visible, setVisible] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [dataList, setDataList] = useState(initData);

  // 선택된 데이터의 코드를 저장하는 inputRef
  const selectedRef: RefObject<HTMLSelectElement> = useRef(null);

  // Selectbox 바깥 쪽 클릭했을 때 selectbox 닫히게 하는 함수
  const selectboxContainerRef: RefObject<HTMLDivElement> = useRef(null);
  useOutsideAlerter(
    selectboxContainerRef,
    useCallback(() => setVisible(false), []),
  );

  // Input 클릭 했을 때 Selectbox 열고 닫히게 하기
  const onClick = useCallback(() => {
    setVisible((visible) => !visible);
  }, []);

  // Selectbox에서 데이터 검색할 때 타자 칠 때마다 바뀌면 눈이 아프니깐 debounce 함수로 onChange 함수를 만든다.
  const onDebounceChangeData = _.debounce((target: HTMLInputElement) => {
    setDataList(
      data.filter((d) =>
        d.name.toUpperCase().includes(target.value.toUpperCase()),
      ),
    );
  }, 200);

  const onChangeData = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    onDebounceChangeData(e.target);
  }, []);

  // Selectbox의 값을 선택했을 때 실행되는 함수
  // div 클릭 이벤트가 발생했을 때 <select> 태그의 value 값을 변경시키고 select의 event를 트리거한다.
  const onSelect = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      setVisible(false);
      const { code } = e.currentTarget.dataset;

      if (selectedRef && selectedRef.current) {
        selectedRef.current.value = code || '';
        const event = new Event('change', { bubbles: true });

        selectedRef.current.dispatchEvent(event);
      }
    },
    [],
  );

  return (
    <StyledSelectContainer
      ref={selectboxContainerRef}
      color={color}
      disabled={disabled}
      width={width}
      height={height}
    >
      <Input
        value={initData.find((d) => d.code === value)?.name}
        color={color}
        variant={variant}
        disabled={disabled}
        placeholder={placeholder}
        readOnly
        backIcon={<Icon icon="downArrow" color={color} />}
        validation={validation}
        style={inputStyle}
        onClick={onClick}
      />
      {visible && (
        <div className="select-container">
          <div className="search-input-container">
            <input
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={onChangeData}
              className="search-input"
            />
          </div>
          <div className="list-container">
            {dataList.map((d) => {
              return (
                <div
                  key={d.code}
                  data-code={d.code}
                  onClick={onSelect}
                  className={d.code === value ? 'selected' : ''}
                  style={{ textAlign: 'left' }}
                >
                  {d.render ? d.render : d.name}
                </div>
              );
            })}
          </div>
        </div>
      )}
      <select
        onChange={onChange}
        ref={selectedRef}
        title={placeholder}
        id={id}
        name={name}
      >
        {dataList.map((d) => {
          return (
            <option key={d.code} value={d.code} title={d.name}>
              {d.name}
            </option>
          );
        })}
      </select>
    </StyledSelectContainer>
  );
};

Select.defaultProps = {
  variant: 'outline',
  color: 'primary',
  disabled: false,
  width: '100%',
  height: '10rem',
};

export default React.memo(Select);
