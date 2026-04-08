import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import setting from '../../../setting.json'
import EditorJSComponent from '../../../components/EditorJSComponent'
import { useNavigate } from 'react-router-dom'
import {
  CCard,
  CCardBody,
  CForm,
  CFormInput,
  CFormSelect,
  CButton,
  CRow,
  CCol,
  CCardHeader,
  CFormCheck,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from '@coreui/react'
import secureLocalStorage from 'react-secure-storage'

const schema = yup.object().shape({
  title: yup.string().required('Title is required'),
  price: yup.string().required('Price is required'),
})

const Product = () => {
  const navigate = useNavigate()

  const [slugEdited, setSlugEdited] = useState(false)
  const [editingNews, setEditingNews] = useState(null)
  const [newsList, setNewsList] = useState([])
  const [categoriesList, setCategoryList] = useState([])
  const [content, setContent] = useState({})

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: '',
      price: '',
      categories: [],
      thumbnail: null,
    },
  })

  const formDataValues = watch()

  const toggleCategory = (id) => {
    const alreadySelected = formDataValues.categories.includes(id)
    const newCategories = alreadySelected
      ? formDataValues.categories.filter((c) => c !== id)
      : [...formDataValues.categories, id]
    setValue('categories', newCategories)
  }

  const getAllCategory = async () => {
    await fetch(setting.api + '/api/categories/getAllCategory', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + JSON.parse(secureLocalStorage.getItem('logininfo')).token,
      },
    })
      .then((response) => response.json())
      .then((u) => {
        if (u.status == false) {
          secureLocalStorage.clear()
          navigate('/login')
        } else {
          setCategoryList(u.data)
          console.log(u.data)
        }
      })
  }

  useEffect(() => {
    getAllCategory()
  }, [])

  const saveProduct = async (data) => {
    const formData = new FormData()

    formData.append('title', data.title)
    formData.append('price', data.price)
    formData.append('categories', JSON.stringify(data.categories))
    formData.append('content', JSON.stringify(content))
    if (data.thumbnail?.[0]) {
      formData.append('thumbnail', data.thumbnail[0])
    }

    const endpoint = '/api/products/saveProduct'

    const res = await fetch(setting.api + endpoint, {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: 'Bearer ' + JSON.parse(secureLocalStorage.getItem('logininfo')).token,
      },
    })

    const result = await res.json()
    if (result.success === true) {
      reset({})
      navigate('/ProductList')
    }
    console.log('API Response:', result)
  }

  return (
    <div className="d-flex flex-column flex-lg-row gap-4">
      <CCol lg={12}>
        <CCard className="shadow border-0 rounded-4">
          <CCardHeader className="bg-dark text-white fw-bold px-4 py-3 shadow-sm">
            <h5 className="mb-0">{editingNews ? 'Update Product' : 'Create Product'}</h5>
          </CCardHeader>

          <CCardBody>
            <CForm onSubmit={handleSubmit(saveProduct)}>
              <CRow className="mb-2">
                <CCol md={6}>
                  <CFormInput
                    type="text"
                    label="Title"
                    placeholder="Enter Title"
                    {...register('title')}
                    onChange={(e) => {
                      setValue('title', e.target.value)
                      setSlugEdited(false)
                    }}
                  />
                  {errors.title && <small className="text-danger">{errors.title.message}</small>}
                </CCol>
                <CCol md={6}>
                  <CFormInput
                    type="number"
                    label="Price"
                    placeholder="Enter Price"
                    {...register('price')}
                    onChange={(e) => {
                      setValue('price', e.target.value)
                      setSlugEdited(false)
                    }}
                  />
                  {errors.price && <small className="text-danger">{errors.price.message}</small>}
                </CCol>
              </CRow>

              <CRow></CRow>

              <CRow>
                <CCol md={12} className="mb-2">
                  <p className="mb-2 ">Select Categories</p>
                  <CDropdown>
                    <CDropdownToggle color="secondary">
                      {formDataValues.categories.length > 0
                        ? categoriesList
                            .filter((cat) => formDataValues.categories.includes(cat._id))
                            .map((cat) => cat.name)
                            .join(', ')
                        : 'Select Categories'}
                    </CDropdownToggle>
                    <CDropdownMenu>
                      {categoriesList.map((cat) => {
                        const isSelected = formDataValues.categories.includes(cat._id)
                        return (
                          <CDropdownItem key={cat.id}>
                            <CFormCheck
                              id={`cat-${cat._id}`}
                              label={cat.name}
                              checked={isSelected}
                              onChange={() => toggleCategory(cat._id)}
                            />
                          </CDropdownItem>
                        )
                      })}
                    </CDropdownMenu>
                  </CDropdown>
                </CCol>
              </CRow>

              <CRow>
                <CCol md={12} className="mb-2">
                  <div
                    style={{
                      width: '100%',
                      height: '250px',
                      margin: '0 auto',

                      padding: '10px',
                      borderRadius: '8px',
                      overflowY: 'auto',
                    }}
                  >
                    <label className="fw-semibold mb-2">Description</label>
                    <EditorJSComponent data={content} onChange={setContent} />
                  </div>

                  <CCol md={12} className="mb-3">
                    <CFormInput
                      type="file"
                      label="Preview Image"
                      accept="image/*"
                      {...register('thumbnail')}
                    />
                  </CCol>
                </CCol>
              </CRow>

              <div className="d-flex justify-content-end mt-4">
                <CButton color="primary" type="submit">
                  {editingNews ? 'Update' : 'Publish'}
                </CButton>
              </div>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </div>
  )
}

export default Product
