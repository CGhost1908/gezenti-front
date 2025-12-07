import React, { useState, useEffect } from 'react';
import RegisterStyle from '../../pages/Register/Register.module.css';
import { 
  Tent, Footprints, Mountain, Sun, 
  Landmark, ScrollText, Building2, Users,
  Utensils, Coffee,
  Camera, ShoppingBag, Music,
  CheckCircle2
} from 'lucide-react';

const CATEGORIES = [
  {
    title: "Doğa & Macera",
    items: [
      { id: 'camping', name: 'Kamp', icon: <Tent size={18} /> },
      { id: 'hiking', name: 'Yürüyüş', icon: <Footprints size={18} /> },
      { id: 'mountain', name: 'Dağcılık', icon: <Mountain size={18} /> },
      { id: 'beach', name: 'Plaj & Deniz', icon: <Sun size={18} /> },
    ]
  },
  {
    title: "Kültür & Şehir",
    items: [
      { id: 'museum', name: 'Müzeler', icon: <Landmark size={18} /> },
      { id: 'history', name: 'Tarih', icon: <ScrollText size={18} /> },
      { id: 'architecture', name: 'Mimari', icon: <Building2 size={18} /> },
      { id: 'local', name: 'Yerel Yaşam', icon: <Users size={18} /> },
    ]
  },
  {
    title: "Yeme & İçme",
    items: [
      { id: 'food', name: 'Gastronomi', icon: <Utensils size={18} /> },
      { id: 'coffee', name: 'Kahve', icon: <Coffee size={18} /> },
    ]
  },
  {
    title: "Aktivite",
    items: [
      { id: 'photo', name: 'Fotoğraf', icon: <Camera size={18} /> },
      { id: 'shopping', name: 'Alışveriş', icon: <ShoppingBag size={18} /> },
      { id: 'music', name: 'Konser', icon: <Music size={18} /> },
    ]
  }
];

export default function Interest({ onChange }) {
  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    if (onChange) {
      onChange(selectedIds);
    }
  }, [selectedIds, onChange]);

  const toggleInterest = (id) => {
    setSelectedIds(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  return (
    <div className={RegisterStyle["interest-container"]}>
        <span className={RegisterStyle["count"]}>({selectedIds.length} seçildi)</span>

        <div className={RegisterStyle["category-list"]}>
        {CATEGORIES.map((cat, index) => (
          <div key={index} className={RegisterStyle["category-group"]}>
            <h3 className={RegisterStyle["category-title"]}>{cat.title}</h3>
            
            <div className={RegisterStyle["grid"]}>
              {cat.items.map((item) => {
                const isSelected = selectedIds.includes(item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => toggleInterest(item.id)}
                    className={`${RegisterStyle["chip"]} ${isSelected ? RegisterStyle["active"] : ''}`}
                  >
                    <span className={RegisterStyle["icon-base"]}>
                        {item.icon}
                    </span>
                    <span>{item.name}</span>
                    {isSelected && (
                      <span className={RegisterStyle["check-icon"]}>
                          <CheckCircle2 size={16} />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}