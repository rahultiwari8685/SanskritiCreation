import React, { useState, useEffect } from 'react'
import { CCard, CCardBody, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import setting from '../../setting.json'
import {
  cilPeople,
  cilUser,
  cilUserX,
  cilMoney,
  cilBriefcase,
  cilLibrary,
  cilSchool,
  cilNewspaper,
  cilCommentBubble,
} from '@coreui/icons'
import secureLocalStorage from 'react-secure-storage'

const userRole = JSON.parse(secureLocalStorage.getItem('logininfo')).role

const Dashboard = () => {
  const [statsAdmin1, setStatsAdmin] = useState({})
  const [statsContent1, setStatsContent] = useState({})
  const [stastOperator1, setStatsOperator] = useState({})

  // const getDashboardWidgetData = async () => {
  //   const res = await fetch(setting.api + '/api/getDashboardWidgetData', {
  //     headers: {
  //       // 'Content-Type': 'application/json',
  //       // Authorization:
  //       //   'Bearer ' + JSON.parse(secureLocalStorage.getItem('logininfo')).token,
  //     },
  //   })
  //   const json = await res.json()
  //   if (json.result === 'false') {
  //     secureLocalStorage.clear()
  //     navigate('/login')
  //   } else {
  //     setStatsAdmin(json.data)
  //     setStatsContent(json.data)
  //     setStatsOperator(json.data)
  //   }
  // }

  useEffect(() => {
    getDashboardWidgetData()
  }, [])

  const statsAdmin = [
    // {
    //   title: 'Total Service',
    //   count: statsAdmin1.total_service,
    //   icon: cilBriefcase,
    //   label: 'Service',
    //   color: '#dc3545',
    // },
    {
      title: 'Total Service',
      count: 16,
      icon: cilSchool,
      label: 'University',
      color: '#198754',
    },
    {
      title: 'Total Product',
      count: 25,
      icon: cilLibrary,
      label: 'Course',
      color: '#fd7e14',
    },
    {
      title: 'Total Orders',
      count: 10,
      icon: cilNewspaper,
      label: 'Blog',
      color: '#0d6efd',
    },
  ]
  const statsContent = [
    {
      title: 'Total Orders',
      count: 10,
      icon: cilNewspaper,
      label: 'Blog',
      color: '#0d6efd',
    },
    {
      title: 'Total Query',
      count: 5,
      icon: cilCommentBubble,
      label: 'Query',
      color: '#fd7e14',
    },
  ]
  const statsOperator = [
    // {
    //   title: 'Total Service',
    //   count: stastOperator1.total_service,
    //   icon: cilBriefcase,
    //   label: 'Service',
    //   color: '#dc3545',
    // },
    {
      title: 'Total Service',
      count: 20,
      icon: cilSchool,
      label: 'University',
      color: '#198754',
    },
    {
      title: 'Total Product',
      count: 25,
      icon: cilLibrary,
      label: 'Course',
      color: '#fd7e14',
    },
  ]

  const data =
    userRole === '1'
      ? statsAdmin
      : userRole === '2'
        ? statsContent
        : userRole === '3'
          ? statsOperator
          : []

  return (
    <div className="p-4">
      <h3 className="mb-4">Dashboard</h3>
      <CRow className="g-4">
        {data.map((item, index) => (
          <CCol md={6} lg={3} sm={12} key={index}>
            <CCard
              className="text-white shadow"
              style={{
                backgroundColor: item.color,
                borderRadius: '1rem',
              }}
            >
              <CCardBody className="d-flex justify-content-between align-items-center py-4">
                <div>
                  <div style={{ fontSize: '1rem', opacity: 0.9 }}>{item.title}</div>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>{item.count}</div>
                </div>
                <div className="text-center">
                  <CIcon icon={item.icon} size="xxl" />
                  <div style={{ fontSize: '0.75rem', marginTop: '0.25rem' }}>{item.label}</div>
                </div>
              </CCardBody>
            </CCard>
          </CCol>
        ))}
      </CRow>
    </div>
  )
}

export default Dashboard
