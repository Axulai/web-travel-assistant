import React, { useState } from 'react';
import { Select } from 'antd';
import 'antd/dist/reset.css';

const TYPE_OPTIONS = [
  { label: '去海拉尔', icon: '🚩' },
  { label: '海拉尔走', icon: '🏁' },
];
const SEASON_OPTIONS = [
  { label: '春季', icon: '🌸' },
  { label: '夏季', icon: '🌞' },
  { label: '秋季', icon: '🍂' },
  { label: '冬季', icon: '❄️' },
];

// 初始知识库数据
const initialKnowledge = [
  {
    id: 1,
    origin: '厦门',
    destination: '海拉尔',
    type: '飞机',
    flightNo: 'MU1234',
    stopoverCity: '天津',
    transferCity: '杭州',
    transferDuration: 2,
    airportFee: 50,
    fuelFee: 80,
    special: '每周二有航班',
    trainNo: '',
    dateStart: '2023-06-10',
    dateEnd: '2023-06-15',
    priceMin: 1200,
    priceMax: 1500,
    duration: 4,
    remark: '自定义备注',
    lastUpdate: '2024-06-01 12:00',
  },
  {
    id: 2,
    origin: '北京',
    destination: '海拉尔',
    type: '飞机',
    flightNo: 'CA1101',
    stopoverCity: '',
    transferCity: '',
    transferDuration: 0,
    airportFee: 60,
    fuelFee: 90,
    special: '',
    trainNo: '',
    dateStart: '2023-07-01',
    dateEnd: '2023-07-10',
    priceMin: 1300,
    priceMax: 1600,
    duration: 3.5,
    remark: '',
    lastUpdate: '2024-06-02 09:30',
  },
  {
    id: 3,
    origin: '上海',
    destination: '海拉尔',
    type: '飞机',
    flightNo: 'FM8888',
    stopoverCity: '沈阳',
    transferCity: '',
    transferDuration: 0,
    airportFee: 55,
    fuelFee: 85,
    special: '含餐',
    trainNo: '',
    dateStart: '2023-08-05',
    dateEnd: '2023-08-12',
    priceMin: 1400,
    priceMax: 1700,
    duration: 5,
    remark: '',
    lastUpdate: '2024-06-03 14:20',
  },
  {
    id: 4,
    origin: '广州',
    destination: '海拉尔',
    type: '飞机',
    flightNo: 'CZ6666',
    stopoverCity: '北京',
    transferCity: '沈阳',
    transferDuration: 1.5,
    airportFee: 70,
    fuelFee: 100,
    special: '需转机',
    trainNo: '',
    dateStart: '2023-09-01',
    dateEnd: '2023-09-10',
    priceMin: 1500,
    priceMax: 1800,
    duration: 6,
    remark: '',
    lastUpdate: '2024-06-04 10:10',
  },
  {
    id: 5,
    origin: '成都',
    destination: '海拉尔',
    type: '飞机',
    flightNo: '3U1235',
    stopoverCity: '',
    transferCity: '',
    transferDuration: 0,
    airportFee: 65,
    fuelFee: 95,
    special: '',
    trainNo: '',
    dateStart: '2023-10-01',
    dateEnd: '2023-10-08',
    priceMin: 1350,
    priceMax: 1550,
    duration: 4.5,
    remark: '',
    lastUpdate: '2024-06-05 11:00',
  },
  {
    id: 6,
    origin: '哈尔滨',
    destination: '海拉尔',
    type: '高铁',
    flightNo: '',
    stopoverCity: '',
    transferCity: '',
    transferDuration: 0,
    airportFee: 0,
    fuelFee: 0,
    special: '',
    trainNo: 'G1234',
    dateStart: '2023-06-15',
    dateEnd: '2023-06-20',
    priceMin: 400,
    priceMax: 600,
    duration: 7,
    remark: '直达',
    lastUpdate: '2024-06-01 13:00',
  },
  {
    id: 7,
    origin: '沈阳',
    destination: '海拉尔',
    type: '高铁',
    flightNo: '',
    stopoverCity: '',
    transferCity: '',
    transferDuration: 0,
    airportFee: 0,
    fuelFee: 0,
    special: '',
    trainNo: 'G5678',
    dateStart: '2023-07-10',
    dateEnd: '2023-07-15',
    priceMin: 500,
    priceMax: 700,
    duration: 8,
    remark: '',
    lastUpdate: '2024-06-02 10:00',
  },
  {
    id: 8,
    origin: '呼和浩特',
    destination: '海拉尔',
    type: '高铁',
    flightNo: '',
    stopoverCity: '',
    transferCity: '',
    transferDuration: 0,
    airportFee: 0,
    fuelFee: 0,
    special: '沿途风景优美',
    trainNo: 'D2345',
    dateStart: '2023-08-01',
    dateEnd: '2023-08-07',
    priceMin: 600,
    priceMax: 800,
    duration: 9,
    remark: '',
    lastUpdate: '2024-06-03 15:00',
  },
  {
    id: 9,
    origin: '天津',
    destination: '海拉尔',
    type: '飞机',
    flightNo: 'GS9999',
    stopoverCity: '',
    transferCity: '',
    transferDuration: 0,
    airportFee: 60,
    fuelFee: 90,
    special: '',
    trainNo: '',
    dateStart: '2023-09-05',
    dateEnd: '2023-09-12',
    priceMin: 1250,
    priceMax: 1450,
    duration: 4,
    remark: '',
    lastUpdate: '2024-06-04 12:00',
  },
  {
    id: 10,
    origin: '重庆',
    destination: '海拉尔',
    type: '飞机',
    flightNo: 'PN2222',
    stopoverCity: '北京',
    transferCity: '',
    transferDuration: 0,
    airportFee: 70,
    fuelFee: 100,
    special: '',
    trainNo: '',
    dateStart: '2023-10-10',
    dateEnd: '2023-10-17',
    priceMin: 1450,
    priceMax: 1750,
    duration: 5.5,
    remark: '',
    lastUpdate: '2024-06-05 13:00',
  },
  {
    id: 11,
    origin: '南京',
    destination: '海拉尔',
    type: '飞机',
    flightNo: 'HO3333',
    stopoverCity: '',
    transferCity: '北京',
    transferDuration: 2,
    airportFee: 60,
    fuelFee: 90,
    special: '需转机',
    trainNo: '',
    dateStart: '2023-06-20',
    dateEnd: '2023-06-27',
    priceMin: 1350,
    priceMax: 1600,
    duration: 6,
    remark: '',
    lastUpdate: '2024-06-01 14:00',
  },
  {
    id: 12,
    origin: '深圳',
    destination: '海拉尔',
    type: '飞机',
    flightNo: 'ZH4444',
    stopoverCity: '郑州',
    transferCity: '',
    transferDuration: 0,
    airportFee: 75,
    fuelFee: 110,
    special: '',
    trainNo: '',
    dateStart: '2023-07-15',
    dateEnd: '2023-07-22',
    priceMin: 1550,
    priceMax: 1850,
    duration: 6.5,
    remark: '',
    lastUpdate: '2024-06-02 15:00',
  },
  {
    id: 13,
    origin: '济南',
    destination: '海拉尔',
    type: '高铁',
    flightNo: '',
    stopoverCity: '',
    transferCity: '',
    transferDuration: 0,
    airportFee: 0,
    fuelFee: 0,
    special: '',
    trainNo: 'G3456',
    dateStart: '2023-08-10',
    dateEnd: '2023-08-17',
    priceMin: 650,
    priceMax: 900,
    duration: 10,
    remark: '',
    lastUpdate: '2024-06-03 16:00',
  },
  {
    id: 14,
    origin: '大连',
    destination: '海拉尔',
    type: '高铁',
    flightNo: '',
    stopoverCity: '',
    transferCity: '',
    transferDuration: 0,
    airportFee: 0,
    fuelFee: 0,
    special: '',
    trainNo: 'D4567',
    dateStart: '2023-09-15',
    dateEnd: '2023-09-22',
    priceMin: 700,
    priceMax: 950,
    duration: 11,
    remark: '',
    lastUpdate: '2024-06-04 14:00',
  },
  {
    id: 15,
    origin: '郑州',
    destination: '海拉尔',
    type: '飞机',
    flightNo: '8L5555',
    stopoverCity: '',
    transferCity: '',
    transferDuration: 0,
    airportFee: 65,
    fuelFee: 95,
    special: '',
    trainNo: '',
    dateStart: '2023-10-20',
    dateEnd: '2023-10-27',
    priceMin: 1400,
    priceMax: 1700,
    duration: 5,
    remark: '',
    lastUpdate: '2024-06-05 15:00',
  },
  {
    id: 16,
    origin: '青岛',
    destination: '海拉尔',
    type: '飞机',
    flightNo: 'SC6666',
    stopoverCity: '北京',
    transferCity: '',
    transferDuration: 0,
    airportFee: 60,
    fuelFee: 90,
    special: '',
    trainNo: '',
    dateStart: '2023-06-25',
    dateEnd: '2023-07-02',
    priceMin: 1300,
    priceMax: 1550,
    duration: 4.5,
    remark: '',
    lastUpdate: '2024-06-01 16:00',
  },
  {
    id: 17,
    origin: '杭州',
    destination: '海拉尔',
    type: '飞机',
    flightNo: 'JD7777',
    stopoverCity: '',
    transferCity: '北京',
    transferDuration: 2,
    airportFee: 65,
    fuelFee: 95,
    special: '需转机',
    trainNo: '',
    dateStart: '2023-07-20',
    dateEnd: '2023-07-27',
    priceMin: 1450,
    priceMax: 1750,
    duration: 6,
    remark: '',
    lastUpdate: '2024-06-02 16:00',
  },
  {
    id: 18,
    origin: '武汉',
    destination: '海拉尔',
    type: '高铁',
    flightNo: '',
    stopoverCity: '',
    transferCity: '',
    transferDuration: 0,
    airportFee: 0,
    fuelFee: 0,
    special: '',
    trainNo: 'G6789',
    dateStart: '2023-08-20',
    dateEnd: '2023-08-27',
    priceMin: 800,
    priceMax: 1100,
    duration: 12,
    remark: '',
    lastUpdate: '2024-06-03 17:00',
  },
  {
    id: 19,
    origin: '长沙',
    destination: '海拉尔',
    type: '飞机',
    flightNo: 'CZ8888',
    stopoverCity: '郑州',
    transferCity: '',
    transferDuration: 0,
    airportFee: 70,
    fuelFee: 100,
    special: '',
    trainNo: '',
    dateStart: '2023-09-20',
    dateEnd: '2023-09-27',
    priceMin: 1500,
    priceMax: 1800,
    duration: 6.5,
    remark: '',
    lastUpdate: '2024-06-04 15:00',
  },
  {
    id: 20,
    origin: '西安',
    destination: '海拉尔',
    type: '高铁',
    flightNo: '',
    stopoverCity: '',
    transferCity: '',
    transferDuration: 0,
    airportFee: 0,
    fuelFee: 0,
    special: '',
    trainNo: 'D7890',
    dateStart: '2023-10-25',
    dateEnd: '2023-11-01',
    priceMin: 900,
    priceMax: 1200,
    duration: 13,
    remark: '',
    lastUpdate: '2024-06-05 16:00',
  },
];

function getUnique(arr, key) {
  return Array.from(new Set(arr.map(item => item[key])));
}

function recommend(knowledge, filters) {
  let filtered = knowledge.filter(item => {
    return (
      (!filters.origin || item.origin === filters.origin) &&
      (!filters.destination || item.destination === filters.destination)
    );
  });
  filtered.sort((a, b) => a.duration - b.duration || a.priceMin - b.priceMin);
  return filtered[0] ? [filtered[0]] : [];
}

// 简单Modal组件
function Modal({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.18)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: '#fff', borderRadius: 8, padding: 32, minWidth: 680, boxShadow: '0 4px 24px #aaa', position: 'relative' }}>
        <button onClick={onClose} style={{ position: 'absolute', right: 16, top: 12, border: 'none', background: 'none', fontSize: 22, cursor: 'pointer' }}>×</button>
        {children}
      </div>
    </div>
  );
}

// 新增：必填项校验逻辑
const requiredFields = [
  'origin', 'destination', 'type', 'dateStart', 'dateEnd', 'priceMin', 'priceMax', 'duration'
];
function isFormValid(entry) {
  for (const key of requiredFields) {
    if (!entry[key] && entry[key] !== 0) return false;
  }
  // 车次仅高铁必填
  if (entry.type === '高铁' && !entry.trainNo) return false;
  return true;
}

export default function App() {
  const [knowledge, setKnowledge] = useState(initialKnowledge);
  const [filters, setFilters] = useState({
    origin: '',
    destination: '',
    season: SEASON_OPTIONS[0].label,
    travelerType: '',
  });
  const [activeTab, setActiveTab] = useState('recommend');
  const [queryResult, setQueryResult] = useState([]);
  const [queried, setQueried] = useState(false);

  // 弹窗相关
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add'); // 'add' or 'edit'
  const [editId, setEditId] = useState(null);
  const emptyEntry = {
    origin: '',
    destination: '',
    type: '飞机',
    flightNo: '',
    stopoverCity: '',
    transferCity: '',
    transferDuration: '',
    airportFee: '',
    fuelFee: '',
    special: '',
    trainNo: '',
    dateStart: '',
    dateEnd: '',
    priceMin: '',
    priceMax: '',
    duration: '',
    remark: '',
    lastUpdate: '',
  };
  const [modalEntry, setModalEntry] = useState(emptyEntry);
  const [formError, setFormError] = useState('');

  // 城市和游客类型由知识库动态提供（无"全部"选项）
  const originIconOptions = getUnique(knowledge, 'origin').map(opt => ({ label: opt, value: opt, icon: '🏙️' }));
  const destinationIconOptions = getUnique(knowledge, 'destination').map(opt => ({ label: opt, value: opt, icon: '📍' }));
  const travelerTypeIconOptions = getUnique(knowledge, 'travelerType').map(opt => ({ label: opt, value: opt, icon: '🧑‍🤝‍🧑' }));

  function handleFilterChange(name, value) {
    setFilters(f => ({ ...f, [name]: value }));
  }

  function handleTabChange(tab) {
    setActiveTab(tab);
    setQueried(false);
    setQueryResult([]);
  }

  function handleQuery() {
    setQueryResult(recommend(knowledge, filters));
    setQueried(true);
  }

  // Modal相关
  function openAddModal() {
    setModalMode('add');
    setModalEntry(emptyEntry);
    setModalOpen(true);
  }
  function openEditModal(item) {
    setModalMode('edit');
    setEditId(item.id);
    setModalEntry({ ...item });
    setModalOpen(true);
  }
  function closeModal() {
    setModalOpen(false);
    setEditId(null);
  }
  function handleModalChange(e) {
    const { name, value } = e.target;
    setModalEntry(ne => ({ ...ne, [name]: value }));
  }
  function handleModalSubmit() {
    if (!isFormValid(modalEntry)) {
      setFormError('请填写所有必填项');
      return;
    }
    setFormError('');
    const now = new Date();
    const lastUpdate = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')} ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
    if (modalMode === 'add') {
      setKnowledge(k => [
        ...k,
        { ...modalEntry, id: Date.now(), duration: Number(modalEntry.duration), priceMin: Number(modalEntry.priceMin), priceMax: Number(modalEntry.priceMax), airportFee: Number(modalEntry.airportFee), fuelFee: Number(modalEntry.fuelFee), transferDuration: Number(modalEntry.transferDuration), lastUpdate }
      ]);
    } else if (modalMode === 'edit') {
      setKnowledge(k => k.map(item => item.id === editId ? { ...modalEntry, id: editId, duration: Number(modalEntry.duration), priceMin: Number(modalEntry.priceMin), priceMax: Number(modalEntry.priceMax), airportFee: Number(modalEntry.airportFee), fuelFee: Number(modalEntry.fuelFee), transferDuration: Number(modalEntry.transferDuration), lastUpdate } : item));
    }
    closeModal();
  }
  function handleDeleteEntry(id) {
    setKnowledge(k => k.filter(item => item.id !== id));
  }

  // 顶部导航栏样式
  const navStyle = {
    position: 'sticky',
    top: 0,
    background: '#fff',
    zIndex: 100,
    borderBottom: '1px solid #e5e6eb',
    minHeight: 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  };
  const navInnerStyle = {
    maxWidth: 1800,
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    padding: '0 0',
  };
  // 内容区样式
  const contentStyle = {
    flex: 1,
    overflow: 'auto',
    background: '#f5f6fa',
    minHeight: 0,
    padding: '0 0 32px 0',
    display: 'flex',
    justifyContent: 'center',
  };
  // 卡片风格
  const cardStyle = {
    background: '#fff',
    borderRadius: 8,
    boxShadow: '0 2px 8px 0 rgba(0,0,0,0.04)',
    padding: '32px 32px 40px 32px',
    width: '100%',
    maxWidth: 1800,
    margin: '24px auto',
    minHeight: 320,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  const optionRowsWrapStyle = {
    display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 24, width: '100%',
  };
  const optionRowStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    marginBottom: 16,
  };
  const optionLabelStyle = {
    color: '#222',
    fontWeight: 500,
    fontSize: 15,
    marginBottom: 8,
    textAlign: 'center',
  };
  const cardButtonWrapStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
    width: '100%',
  };
  const queryBtnRowStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 32,
  };
  // 选项卡片风格（后台风格）
  const optionCardStyle = (active) => ({
    minWidth: 100, height: 44, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    borderRadius: 8, border: active ? '2px solid #1677ff' : '1.5px solid #e5e6eb', background: active ? '#e6f0ff' : '#fff', color: active ? '#1677ff' : '#222', cursor: 'pointer', fontWeight: active ? 600 : 400, fontSize: 16, boxShadow: 'none', transition: 'all 0.18s', marginRight: 0, marginLeft: 0, outline: 'none', userSelect: 'none', padding: '0 20px', gap: 8, borderColor: active ? '#1677ff' : '#e5e6eb',
  });
  // 查询按钮风格
  const queryBtnStyle = { padding: '0 36px', background: '#1677ff', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 600, fontSize: 16, height: 44, boxShadow: 'none', cursor: 'pointer', transition: 'all 0.18s', boxSizing: 'border-box', marginLeft: 0 };
  // 表格按钮风格
  const tableBtnStyle = { marginRight: 6, padding: '2px 10px', border: 'none', borderRadius: 4, fontWeight: 500, fontSize: 13, height: 32 };

  // 弹窗表单两列布局
  const modalFormRowStyle = { display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 0 };
  const modalFieldStyle = { flex: '1 1 45%', display: 'flex', flexDirection: 'column', marginBottom: 16 };
  const modalLabelStyle = { marginBottom: 6, color: '#333', fontWeight: 500, fontSize: 15 };
  const modalInputStyle = { padding: '8px 12px', borderRadius: 6, border: '1px solid #e5e6eb', fontSize: 15 };

  // 推荐助手和知识库管理标题样式
  const sectionTitleStyle = {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 700,
    color: '#222',
    margin: '0 0 24px 0',
    position: 'sticky',
    top: 60, // 顶部导航高度
    background: '#fff',
    zIndex: 10,
    padding: '16px 0 8px 0',
  };

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* 顶部导航栏 */}
      <div style={navStyle}>
        <div style={navInnerStyle}>
          <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: '#222' }}>旅游定制师工具</h2>
          <div style={{ display: 'flex', gap: 12 }}>
            <button onClick={() => handleTabChange('recommend')} style={{ padding: '7px 20px', background: activeTab === 'recommend' ? '#1677ff' : '#f5f6fa', color: activeTab === 'recommend' ? '#fff' : '#222', border: 'none', borderRadius: 6, fontWeight: 600, fontSize: 15 }}>出行推荐助手</button>
            <button onClick={() => handleTabChange('kb')} style={{ padding: '7px 20px', background: activeTab === 'kb' ? '#1677ff' : '#f5f6fa', color: activeTab === 'kb' ? '#fff' : '#222', border: 'none', borderRadius: 6, fontWeight: 600, fontSize: 15 }}>知识库管理</button>
          </div>
        </div>
      </div>
      {/* 选择区/内容区 */}
      <div style={contentStyle}>
        {activeTab === 'recommend' && (
          <div style={cardStyle}>
            <div style={sectionTitleStyle}>出行推荐助手</div>
            <div style={optionRowsWrapStyle}>
              <div style={optionRowStyle}>
                <span style={optionLabelStyle}>始发地</span>
                <Select
                  showSearch
                  allowClear
                  style={{ minWidth: 220, height: 44 }}
                  placeholder="请选择始发地"
                  optionFilterProp="children"
                  value={filters.origin || undefined}
                  onChange={value => handleFilterChange('origin', value)}
                  filterOption={(input, option) =>
                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                  }
                  options={originIconOptions}
                />
              </div>
              <div style={optionRowStyle}>
                <span style={optionLabelStyle}>目的地</span>
                <Select
                  showSearch
                  allowClear
                  style={{ minWidth: 220, height: 44 }}
                  placeholder="请选择目的地"
                  optionFilterProp="children"
                  value={filters.destination || undefined}
                  onChange={value => handleFilterChange('destination', value)}
                  filterOption={(input, option) =>
                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                  }
                  options={destinationIconOptions}
                />
              </div>
              <div style={optionRowStyle}>
                <span style={optionLabelStyle}>季节</span>
                <div style={cardButtonWrapStyle}>
                  {SEASON_OPTIONS.map(opt => (
                    <div key={opt.label} style={optionCardStyle(filters.season === opt.label)} onClick={() => handleFilterChange('season', opt.label)}>
                      <span>{opt.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={optionRowStyle}>
                <span style={optionLabelStyle}>游客类型</span>
                <div style={cardButtonWrapStyle}>
                  {travelerTypeIconOptions.length === 0 ? <span style={{ color: '#aaa' }}>无</span> : null}
                  {travelerTypeIconOptions.map(opt => (
                    <div key={opt.label} style={optionCardStyle(filters.travelerType === opt.value)} onClick={() => handleFilterChange('travelerType', opt.value)}>
                      <span>{opt.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div style={queryBtnRowStyle}>
              <button onClick={handleQuery} style={queryBtnStyle}>查询</button>
            </div>
            {/* 推荐结果区 */}
            {queried && (
              <div style={{ marginBottom: 32, marginTop: 32 }}>
                <h3 style={{ fontSize: 17, fontWeight: 600, color: '#222' }}>推荐方案</h3>
                {queryResult.length === 0 ? <div style={{ color: '#888', fontSize: 15 }}>暂无推荐</div> : (
                  <table border="1" cellPadding="6" style={{ width: '100%', background: '#fff', borderRadius: 8, overflow: 'hidden', fontSize: 15 }}>
                    <thead>
                      <tr style={{ background: '#f5f6fa', color: '#222' }}>
                        <th>始发地</th><th>目的地</th><th>出行方式</th><th>航班号</th><th>车次</th><th>日期区间</th><th>价格区间</th><th>行驶时间</th><th>经停城市</th><th>转机城市</th><th>转机时间</th><th>机建费</th><th>燃油费</th><th>特殊情况</th><th>备注</th><th>最后修改</th>
                      </tr>
                    </thead>
                    <tbody>
                      {queryResult.map(item => (
                        <tr key={item.id}>
                          <td>{item.origin}</td>
                          <td>{item.destination}</td>
                          <td>{item.type}</td>
                          <td>{item.flightNo}</td>
                          <td>{item.trainNo}</td>
                          <td>{item.dateStart} ~ {item.dateEnd}</td>
                          <td>{item.priceMin}元 ~ {item.priceMax}元</td>
                          <td>{item.duration}小时</td>
                          <td>{item.stopoverCity}</td>
                          <td>{item.transferCity}</td>
                          <td>{item.transferDuration}小时</td>
                          <td>{item.airportFee}元</td>
                          <td>{item.fuelFee}元</td>
                          <td>{item.special}</td>
                          <td>{item.remark}</td>
                          <td>{item.lastUpdate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            )}
          </div>
        )}
        {activeTab === 'kb' && (
          <div style={cardStyle}>
            <div style={sectionTitleStyle}>知识库管理</div>
            <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 0 }}>
              <span>知识库管理</span>
              <button onClick={openAddModal} style={{ padding: '6px 18px', background: '#1677ff', color: '#fff', border: 'none', borderRadius: 6, fontWeight: 600, fontSize: 16 }}>添加</button>
            </h3>
            <table border="1" cellPadding="4" style={{ marginBottom: 12, width: '100%', background: '#fff', borderRadius: 8, overflow: 'hidden', fontSize: 15 }}>
              <thead>
                <tr>
                  <th>始发地</th><th>目的地</th><th>类型</th><th>航班号</th><th>车次</th><th>日期区间</th><th>价格区间</th><th>行驶时间</th><th>经停城市</th><th>转机城市</th><th>转机时间</th><th>机建费</th><th>燃油费</th><th>特殊情况</th><th>备注</th><th>最后修改</th><th>操作</th>
                </tr>
              </thead>
              <tbody>
                {knowledge.map(item => (
                  <tr key={item.id}>
                    <td>{item.origin}</td>
                    <td>{item.destination}</td>
                    <td>{item.type}</td>
                    <td>{item.flightNo}</td>
                    <td>{item.trainNo}</td>
                    <td>{item.dateStart} ~ {item.dateEnd}</td>
                    <td>{item.priceMin}元 ~ {item.priceMax}元</td>
                    <td>{item.duration}小时</td>
                    <td>{item.stopoverCity}</td>
                    <td>{item.transferCity}</td>
                    <td>{item.transferDuration}小时</td>
                    <td>{item.airportFee}元</td>
                    <td>{item.fuelFee}元</td>
                    <td>{item.special}</td>
                    <td>{item.remark}</td>
                    <td>{item.lastUpdate}</td>
                    <td style={{ minWidth: 100 }}>
                      <button onClick={() => openEditModal(item)} style={{ ...tableBtnStyle, background: '#ffb300', color: '#fff' }}>编辑</button>
                      <button onClick={() => handleDeleteEntry(item.id)} style={{ ...tableBtnStyle, background: '#ff4d4f', color: '#fff', marginRight: 0 }}>删除</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* 弹窗 */}
            <Modal open={modalOpen} onClose={closeModal}>
              <h3 style={{ marginTop: 0, marginBottom: 16 }}>{modalMode === 'add' ? '添加信息' : '编辑信息'}</h3>
              <div style={modalFormRowStyle}>
                <div style={modalFieldStyle}>
                  <label style={modalLabelStyle}>始发地<span style={{color:'red'}}>*</span></label>
                  <input name="origin" placeholder="始发地" value={modalEntry.origin} onChange={handleModalChange} style={modalInputStyle} />
                </div>
                <div style={modalFieldStyle}>
                  <label style={modalLabelStyle}>目的地<span style={{color:'red'}}>*</span></label>
                  <input name="destination" placeholder="目的地" value={modalEntry.destination} onChange={handleModalChange} style={modalInputStyle} />
                </div>
                <div style={modalFieldStyle}>
                  <label style={modalLabelStyle}>类型<span style={{color:'red'}}>*</span></label>
                  <select name="type" value={modalEntry.type} onChange={handleModalChange} style={modalInputStyle}>
                    <option value="飞机">飞机</option>
                    <option value="高铁">高铁</option>
                  </select>
                </div>
                {/* 飞机专属字段，仅当选择飞机时显示 */}
                {modalEntry.type === '飞机' && (
                  <>
                    <div style={modalFieldStyle}>
                      <label style={modalLabelStyle}>航班号</label>
                      <input name="flightNo" placeholder="航班号" value={modalEntry.flightNo} onChange={handleModalChange} style={modalInputStyle} />
                    </div>
                    <div style={modalFieldStyle}>
                      <label style={modalLabelStyle}>经停城市</label>
                      <input name="stopoverCity" placeholder="经停城市" value={modalEntry.stopoverCity} onChange={handleModalChange} style={modalInputStyle} />
                    </div>
                    <div style={modalFieldStyle}>
                      <label style={modalLabelStyle}>转机城市</label>
                      <input name="transferCity" placeholder="转机城市" value={modalEntry.transferCity} onChange={handleModalChange} style={modalInputStyle} />
                    </div>
                    <div style={modalFieldStyle}>
                      <label style={modalLabelStyle}>转机时间</label>
                      <input name="transferDuration" type="number" placeholder="转机时间" value={modalEntry.transferDuration} onChange={handleModalChange} style={modalInputStyle} />
                    </div>
                    <div style={modalFieldStyle}>
                      <label style={modalLabelStyle}>机建费</label>
                      <input name="airportFee" type="number" placeholder="机建费" value={modalEntry.airportFee} onChange={handleModalChange} style={modalInputStyle} />
                    </div>
                    <div style={modalFieldStyle}>
                      <label style={modalLabelStyle}>燃油费</label>
                      <input name="fuelFee" type="number" placeholder="燃油费" value={modalEntry.fuelFee} onChange={handleModalChange} style={modalInputStyle} />
                    </div>
                    <div style={modalFieldStyle}>
                      <label style={modalLabelStyle}>特殊情况</label>
                      <input name="special" placeholder="特殊情况" value={modalEntry.special} onChange={handleModalChange} style={modalInputStyle} />
                    </div>
                  </>
                )}
                {/* 高铁专属字段，仅当选择高铁时显示 */}
                {modalEntry.type === '高铁' && (
                  <div style={modalFieldStyle}>
                    <label style={modalLabelStyle}>车次<span style={{color:'red'}}>*</span></label>
                    <input name="trainNo" placeholder="车次" value={modalEntry.trainNo} onChange={handleModalChange} style={modalInputStyle} />
                  </div>
                )}
                <div style={modalFieldStyle}>
                  <label style={modalLabelStyle}>日期区间<span style={{color:'red'}}>*</span></label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <input name="dateStart" type="date" placeholder="起始日" value={modalEntry.dateStart} onChange={handleModalChange} style={modalInputStyle} />
                    <span>~</span>
                    <input name="dateEnd" type="date" placeholder="结束日" value={modalEntry.dateEnd} onChange={handleModalChange} style={modalInputStyle} />
                  </div>
                </div>
                <div style={modalFieldStyle}>
                  <label style={modalLabelStyle}>价格区间<span style={{color:'red'}}>*</span></label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <input name="priceMin" type="number" placeholder="最低价格" value={modalEntry.priceMin} onChange={handleModalChange} style={modalInputStyle} />
                    <span>~</span>
                    <input name="priceMax" type="number" placeholder="最高价格" value={modalEntry.priceMax} onChange={handleModalChange} style={modalInputStyle} />
                  </div>
                </div>
                <div style={modalFieldStyle}>
                  <label style={modalLabelStyle}>行驶时间<span style={{color:'red'}}>*</span></label>
                  <input name="duration" type="number" placeholder="行驶时间" value={modalEntry.duration} onChange={handleModalChange} style={modalInputStyle} />
                </div>
                <div style={modalFieldStyle}>
                  <label style={modalLabelStyle}>备注</label>
                  <input name="remark" placeholder="备注" value={modalEntry.remark} onChange={handleModalChange} style={modalInputStyle} />
                </div>
              </div>
              {formError && <div style={{color:'red',margin:'8px 0 0 0',fontSize:15}}>{formError}</div>}
              <div style={{ textAlign: 'right', marginTop: 8 }}>
                <button onClick={handleModalSubmit} style={{ padding: '10px 36px', background: '#1677ff', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 600, fontSize: 16 }}> {modalMode === 'add' ? '添加' : '保存'} </button>
              </div>
            </Modal>
          </div>
        )}
      </div>
    </div>
  );
}
