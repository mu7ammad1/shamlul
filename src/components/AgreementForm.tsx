'use client'
import React from 'react';
import { useState, useEffect } from 'react';

const AgreementForm = () => {
    const [isChecked, setChecked] = useState(false);

    useEffect(() => {
        // قراءة حالة الموافقة من Local Storage عند تحميل المكون
        const isUserAgreed = localStorage.getItem('userAgreed') === 'true';
        setChecked(isUserAgreed);
    }, []);

    const handleCheckboxChange = () => {
        setChecked(!isChecked);
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (isChecked) {
            // حفظ حالة الموافقة في Local Storage
            localStorage.setItem('userAgreed', 'true');

            // قم باتخاذ الإجراءات اللازمة بناءً على الموافقة
            console.log('تم الموافقة!');
        } else {
            // إظهار رسالة خطأ أو اتخذ إجراء آخر
            console.log('يجب الموافقة على الشروط والقوانين.');
        }
    };

    // إذا كان المستخدم قد وافق بالفعل، لا تظهر النموذج
    if (isChecked) {
        return <p>شكرًا للموافقة على الشروط والقوانين.</p>;
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                أوافق على الشروط والقوانين
            </label>
            <button type="submit">موافق</button>
        </form>
    );
};

export default AgreementForm;
