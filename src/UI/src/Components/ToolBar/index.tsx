import {
  RiInformation2Fill,
  RiIndentIncrease,
  RiIndentDecrease,
  RiArrowLeftRightFill,
  RiServerFill,
} from 'react-icons/ri';
import { TfiReload } from 'react-icons/tfi';
import { GiCancel } from 'react-icons/gi';
import { TbPlugConnected, TbPlugConnectedX } from 'react-icons/tb';
import React, { useEffect, useState } from 'react';
import { Button, Input, List, Modal, Space } from 'antd';
import { checkAndExecute } from '@constants';
import { useGlobalState } from '@site/GlobalStateContext';
type DataItem = { name: string; host: string; user: string; password: string; port: string };
interface ToolBarProps {
  toggleConnectStatusOpen: () => void;
  toggleLocalFileListOpen: () => void;
  toggleSendStatusOpen: () => void;
  toggleRemoteFileListOpen: () => void;
  handleReload: () => void;
}

const ToolBar: React.FC<ToolBarProps> = ({
  toggleConnectStatusOpen,
  toggleLocalFileListOpen,
  toggleSendStatusOpen,
  toggleRemoteFileListOpen,
  handleReload,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [dataList, setDataList] = useState<DataItem[]>([]);
  const [host, setHost] = useState('127.0.0.1');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [port, setPort] = useState('50051');
  const [user, setUser] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const { setIsLogining, setMessage } = useGlobalState();
  useEffect(() => {
    const fetchData = async () => {
      const response = await window.pywebview.api.read_host();
      setDataList(response || []);
    };
    fetchData();
  }, []);

  const handleAdd = async () => {
    if (host.trim() && user.trim() && password.trim() && port.trim()) {
      const isEditing = dataList.some((item: DataItem) => item.host === host);
      setDataList((prevDataList) => {
        let updatedDataList: DataItem[];
        if (isEditing) {
          updatedDataList = prevDataList.map((item) =>
            item.host === host ? { name, host, user, password, port } : item,
          );
        } else {
          updatedDataList = [
            ...prevDataList,
            { name: name.trim(), host: host.trim(), user, password, port },
          ];
        }
        window.pywebview.api.save_host(updatedDataList);
        console.log('Data saved:', updatedDataList);
        return updatedDataList;
      });
      setHost('');
      setUser('');
      setPassword('');
      setPort('');
      setName('');
    }
  };
  const handleCancel = () => {
    //Cancel the current operation
    console.log('Cancelling...');
    setMessage('Cancelling...');
  };
  const handleLastLogin = () => {
    //Connect to the last connected server
    console.log('Connecting to the last connected server...');
    setMessage('Connecting to the last connected server...');
  };
  const handleDisconnect = async () => {
    const ret: string = await window.pywebview.api.close();
    const data: Record<string, string> = JSON.parse(ret) as Record<string, string>;
    setMessage(data.message);
    setIsLogining(false);
  };
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.getAttribute('id');
    switch (id) {
      case '1':
        toggleConnectStatusOpen();
        break;
      case '2':
        toggleLocalFileListOpen();
        break;
      case '3':
        toggleRemoteFileListOpen();
        break;
      case '4':
        toggleSendStatusOpen();
        break;
      case '5':
        checkAndExecute(handleReload);
        break;
      case '6':
        checkAndExecute(handleCancel);
        break;
      case '7':
        checkAndExecute(handleLastLogin);
        break;
      case '8':
        checkAndExecute(handleDisconnect);
        break;
    }
  };

  const handleEdit = (item: DataItem) => {
    setHost(item.host);
    setName(item.name);
    setUser(item.user);
    setPassword(item.password);
    setPort(item.port);
    setIsEditing(true);
    setIsModalVisible(true);
  };
  const handleConnect = async (item: DataItem) => {
    setIsModalVisible(false);
    console.log(`Connecting to ${item.host}`);
    await checkAndExecute(async () => {
      const ret = await window.pywebview.api.login(item.host, item.port, item.user, item.password);
      const data = JSON.parse(ret);
      if ('error' in data) {
        setMessage(data.error);
      } else {
        setMessage(data.message);
        setIsLogining(true);
      }
    });
  };
  const handleDelete = async (item: DataItem) => {
    const updatedDataList = dataList.filter((i: DataItem) => i.host !== item.host);
    setDataList(updatedDataList);
    await window.pywebview.api.save_host(updatedDataList);
  };
  const onClose = () => {
    setHost('127.0.0.1');
    setUser('');
    setPassword('');
    setPort('50051');
    setName('');
    setIsEditing(false);
    setIsModalVisible(false);
  };

  return (
    <div className='flex flex-row items-center space-x-5 bg-gray-500 border border-white'>
      <div className='flex items-center'>
        <button title='站台管理員' onClick={() => setIsModalVisible(true)}>
          <RiServerFill className='w-12 h-12 lg:w-20 lg:h-20 md:w-16 md:h-16' color='#87A2FF' />
        </button>
        <Modal
          title='保存資料管理'
          open={isModalVisible}
          onCancel={onClose}
          cancelText='關閉'
          okText={name ? '保存' : '新增'}
          onOk={handleAdd}
          destroyOnClose={true}
        >
          <div className='flex flex-row w-full'>
            <div className='w-1/2 text-center flex1 h-[250px] overflow-auto'>
              <List
                dataSource={dataList}
                header={<div>站台列表</div>}
                renderItem={(item: DataItem, index) => (
                  <List.Item
                    key={index}
                    onClick={() => handleEdit(item)}
                    className='w-full text-lg cursor-pointer'
                  >
                    <p>{`${item.name}`}</p>
                    <div>
                      <Button
                        className='ml-2'
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(item);
                        }}
                      >
                        刪除
                      </Button>
                      <Button
                        className='ml-2'
                        onClick={(e) => {
                          e.stopPropagation();
                          handleConnect(item);
                        }}
                      >
                        連線
                      </Button>
                    </div>
                  </List.Item>
                )}
              />
            </div>
            <div className='w-1/2 text-center flex1'>
              <Space direction='vertical'>
                <Input
                  placeholder='名稱'
                  value={name}
                  disabled={isEditing}
                  onChange={(e) => setName(e.target.value)}
                />

                <Input
                  placeholder='主機地址'
                  value={host}
                  defaultValue='127.0.0.1'
                  onChange={(e) => setHost(e.target.value)}
                />
                <Input
                  placeholder='使用者帳號'
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                />
                <Input.Password
                  placeholder='使用者密碼'
                  visibilityToggle={{
                    visible: passwordVisible,
                    onVisibleChange: setPasswordVisible,
                  }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                  placeholder='連接埠'
                  value={port}
                  defaultValue='50051'
                  onChange={(e) => setPort(e.target.value)}
                />
              </Space>
            </div>
          </div>
        </Modal>
      </div>
      <div className='flex items-center gap-1'>
        <button title='連線紀錄' id='1' onClick={handleClick}>
          <RiInformation2Fill
            className='w-12 h-12 lg:w-20 lg:h-20 md:w-16 md:h-16'
            color='#ffc800'
          />
        </button>
        <button title='切換本地目錄樹' id='2' onClick={handleClick}>
          <RiIndentDecrease className='w-12 h-12 lg:w-20 lg:h-20 md:w-16 md:h-16' color='#7acf6a' />
        </button>
        <button title='切換遠端目錄樹' id='3' onClick={handleClick}>
          <RiIndentIncrease className='w-12 h-12 lg:w-20 lg:h-20 md:w-16 md:h-16' color='#87A2FF' />
        </button>
        <button title='檔案傳輸過程' id='4' onClick={handleClick}>
          <RiArrowLeftRightFill
            className='w-12 h-12 lg:w-20 lg:h-20 md:w-16 md:h-16'
            color='#5ba4a4'
          />
        </button>
      </div>
      <div className='flex items-center'>
        <button title='重新整理檔案及資料夾' id='5' onClick={handleClick}>
          <TfiReload className='h-9 w-9 lg:w-16 lg:h-16 md:w-12 md:h-12' color='#99ff99' />
        </button>
        <button title='取消檔案動作' className='ml-2 lg:ml-4 md:ml-3' id='6' onClick={handleClick}>
          <GiCancel className='w-10 h-10 lg:w-20 lg:h-20 md:w-16 md:h-16' color='#cc0000' />
        </button>
        <button title='連接伺服器' className='ml-1 md:ml-2' id='7' onClick={handleClick}>
          <TbPlugConnected className='w-10 h-10 lg:w-20 lg:h-20 md:w-16 md:h-16' color='#99ff33' />
        </button>
        <button title='中斷伺服器' className='-ml-1 md:-ml-2' id='8' onClick={handleClick}>
          <TbPlugConnectedX className='w-10 h-10 lg:w-20 lg:h-20 md:w-16 md:h-16' color='#ff6600' />
        </button>
      </div>
    </div>
  );
};

export default ToolBar;
