/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { CalendarDays, Check, Users, Clock, Mail, Phone, User, Notebook, CalendarClock } from "lucide-react";
import { Language, translations, Reservation } from "../types";

interface ReservationFormProps {
  language: Language;
}

export default function ReservationForm({ language }: ReservationFormProps) {
  const t = translations[language].reservation;
  
  // Form values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState("2");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("13:30");
  const [specialRequests, setSpecialRequests] = useState("");
  
  // Validation / status
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<Reservation | null>(null);

  const validateForm = () => {
    const err: Record<string, string> = {};
    if (!name.trim()) err.name = t.form.errorName;
    
    // Simple email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) err.email = t.form.errorEmail;
    
    // Simple phone format checking for Spanish or general (+34 or 9 digits)
    if (phone.trim().length < 9) err.phone = t.form.errorPhone;
    
    const guestNum = parseInt(guests, 10);
    if (isNaN(guestNum) || guestNum < 1 || guestNum > 20) err.guests = t.form.errorGuests;
    
    if (!date) {
      err.date = t.form.errorDate;
    } else {
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0,0,0,0);
      if (selectedDate < today) {
        err.date = t.form.errorDate;
      }
    }

    if (!time) {
      err.time = t.form.errorTime;
    } else {
      const [hours] = time.split(":").map(Number);
      if (hours < 12 || hours > 23) {
        err.time = t.form.errorTime;
      }
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      const bookingCode = `SA-${Math.floor(1000 + Math.random() * 9000)}`;
      const newReservation: Reservation = {
        id: Math.random().toString(36).substr(2, 9),
        name,
        email,
        phone,
        guests: parseInt(guests, 10),
        date,
        time,
        specialRequests,
        status: "confirmed",
        bookingCode,
      };

      // Save to localStorage
      let list = [];
      try {
        const existing = localStorage.getItem("savannah_reservations");
        list = existing ? JSON.parse(existing) : [];
      } catch (e) {
        console.error("Error parsing existing reservations", e);
      }
      list.push(newReservation);
      try {
        localStorage.setItem("savannah_reservations", JSON.stringify(list));
      } catch (e) {
        console.warn("localStorage not accessible to save reservations:", e);
      }

      setIsSubmitting(false);
      setConfirmedBooking(newReservation);

      // Clear Form
      setName("");
      setEmail("");
      setPhone("");
      setGuests("2");
      setDate("");
      setTime("13:30");
      setSpecialRequests("");
    }, 1500);
  };

  return (
    <section 
      id="reservations" 
      className="relative bg-cream text-dark-charcoal py-24 overflow-hidden border-b border-gold-500/10"
    >
      {/* Decorative patterns in back */}
      <div className="absolute inset-0 z-0 opacity-5 bg-[radial-gradient(#6b4423_2px,transparent_2px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-sans text-xs font-bold tracking-[0.25em] text-gold-600 uppercase flex items-center justify-center gap-2">
            <CalendarClock className="h-4 w-4" />
            {t.badge}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-dark-charcoal mt-3 tracking-wide">
            {t.title}
          </h2>
          <p className="font-sans text-sm text-warm-brown-800 mt-4 max-w-xl mx-auto font-light leading-relaxed">
            {t.subtitle}
          </p>
          <div className="mx-auto mt-4 h-[1px] w-16 bg-gold-500/30" />
        </div>

        {/* Reservation Form Card */}
        <div className="rounded-xl bg-white border border-warm-brown-500/15 p-6 sm:p-10 shadow-xl max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Name Field */}
              <div className="space-y-1.5">
                <label className="block font-sans text-xs font-bold tracking-wider uppercase text-warm-brown-800">
                  {t.form.name}
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-warm-brown-500 pointer-events-none" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors(prev => ({ ...prev, name: "" }));
                    }}
                    className={`w-full bg-warm-brown-50/30 border rounded px-10 py-3 text-sm text-dark-charcoal placeholder-warm-brown-400 focus:outline-none focus:ring-1 focus:ring-gold-500/20 transition-colors ${
                      errors.name ? "border-red-500" : "border-warm-brown-500/20 focus:border-gold-500"
                    }`}
                  />
                </div>
                {errors.name && <p className="text-red-500 text-xs font-sans mt-1">{errors.name}</p>}
              </div>

              {/* Email Field */}
              <div className="space-y-1.5">
                <label className="block font-sans text-xs font-bold tracking-wider uppercase text-warm-brown-800">
                  {t.form.email}
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-warm-brown-500 pointer-events-none" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors(prev => ({ ...prev, email: "" }));
                    }}
                    className={`w-full bg-warm-brown-50/30 border rounded px-10 py-3 text-sm text-dark-charcoal placeholder-warm-brown-400 focus:outline-none focus:ring-1 focus:ring-gold-500/20 transition-colors ${
                      errors.email ? "border-red-500" : "border-warm-brown-500/20 focus:border-gold-500"
                    }`}
                  />
                </div>
                {errors.email && <p className="text-red-500 text-xs font-sans mt-1">{errors.email}</p>}
              </div>

              {/* Phone Field */}
              <div className="space-y-1.5">
                <label className="block font-sans text-xs font-bold tracking-wider uppercase text-warm-brown-800">
                  {t.form.phone}
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-warm-brown-500 pointer-events-none" />
                  <input
                    type="tel"
                    placeholder="+34 600 000 000"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors(prev => ({ ...prev, phone: "" }));
                    }}
                    className={`w-full bg-warm-brown-50/30 border rounded px-10 py-3 text-sm text-dark-charcoal placeholder-warm-brown-400 focus:outline-none focus:ring-1 focus:ring-gold-500/20 transition-colors ${
                      errors.phone ? "border-red-500" : "border-warm-brown-500/20 focus:border-gold-500"
                    }`}
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-xs font-sans mt-1">{errors.phone}</p>}
              </div>

              {/* Guest Count Field */}
              <div className="space-y-1.5">
                <label className="block font-sans text-xs font-bold tracking-wider uppercase text-warm-brown-800">
                  {t.form.guests}
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-warm-brown-500 pointer-events-none" />
                  <select
                    value={guests}
                    onChange={(e) => {
                      setGuests(e.target.value);
                      if (errors.guests) setErrors(prev => ({ ...prev, guests: "" }));
                    }}
                    className={`w-full bg-warm-brown-50/30 border focus:ring-1 focus:ring-gold-500/20 rounded px-10 py-3 text-sm text-dark-charcoal focus:outline-none appearance-none cursor-pointer ${
                      errors.guests ? "border-red-500" : "border-warm-brown-500/20 focus:border-gold-500"
                    }`}
                  >
                    {[...Array(12)].map((_, i) => (
                      <option key={i} value={i + 1}>
                        {i + 1} {i === 0 ? (language === "en" ? "Guest" : "Persona") : (language === "en" ? "Guests" : "Personas")}
                      </option>
                    ))}
                    <option value="15">13 - 15 (Large Group)</option>
                    <option value="20">16 - 20 (Large Group)</option>
                  </select>
                </div>
                {errors.guests && <p className="text-red-500 text-xs font-sans mt-1">{errors.guests}</p>}
              </div>

              {/* Date Selection */}
              <div className="space-y-1.5">
                <label className="block font-sans text-xs font-bold tracking-wider uppercase text-warm-brown-800">
                  {t.form.date}
                </label>
                <div className="relative">
                  <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-warm-brown-500 pointer-events-none" />
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => {
                      setDate(e.target.value);
                      if (errors.date) setErrors(prev => ({ ...prev, date: "" }));
                    }}
                    className={`w-full bg-warm-brown-50/30 border rounded pl-10 pr-3 py-3 text-sm text-dark-charcoal focus:outline-none focus:ring-1 focus:ring-gold-500/20 transition-colors ${
                      errors.date ? "border-red-500" : "border-warm-brown-500/20 focus:border-gold-500"
                    }`}
                  />
                </div>
                {errors.date && <p className="text-red-500 text-xs font-sans mt-1">{errors.date}</p>}
              </div>

              {/* Time Selection */}
              <div className="space-y-1.5">
                <label className="block font-sans text-xs font-bold tracking-wider uppercase text-warm-brown-800">
                  {t.form.time}
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-warm-brown-500 pointer-events-none" />
                  <select
                    value={time}
                    onChange={(e) => {
                      setTime(e.target.value);
                      if (errors.time) setErrors(prev => ({ ...prev, time: "" }));
                    }}
                    className={`w-full bg-warm-brown-50/30 border focus:ring-1 focus:ring-gold-500/20 rounded px-10 py-3 text-sm text-dark-charcoal focus:outline-none appearance-none cursor-pointer ${
                      errors.time ? "border-red-500" : "border-warm-brown-500/20 focus:border-gold-500"
                    }`}
                  >
                    <option value="12:00">12:00 PM</option>
                    <option value="12:30">12:30 PM</option>
                    <option value="13:00">13:00 PM</option>
                    <option value="13:30">13:30 PM</option>
                    <option value="14:00">14:00 PM</option>
                    <option value="14:30">14:30 PM</option>
                    <option value="15:00">15:00 PM</option>
                    <option value="18:30">18:30 PM</option>
                    <option value="19:00">19:00 PM</option>
                    <option value="19:30">19:30 PM</option>
                    <option value="20:00">20:00 PM</option>
                    <option value="20:30">20:30 PM</option>
                    <option value="21:00">21:00 PM</option>
                    <option value="21:30">21:30 PM</option>
                    <option value="22:00">22:00 PM</option>
                  </select>
                </div>
                {errors.time && <p className="text-red-500 text-xs font-sans mt-1">{errors.time}</p>}
              </div>

            </div>

            {/* Special Requests */}
            <div className="space-y-1.5">
              <label className="block font-sans text-xs font-bold tracking-wider uppercase text-warm-brown-800">
                {t.form.specialRequests}
              </label>
              <div className="relative">
                <Notebook className="absolute left-3 top-4 h-4 w-4 text-warm-brown-500 pointer-events-none" />
                <textarea
                  rows={3}
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full bg-warm-brown-50/30 border border-warm-brown-500/20 focus:border-gold-500 focus:ring-1 focus:ring-gold-500/20 rounded pl-10 pr-4 py-3 text-sm text-dark-charcoal focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-gold-500 hover:bg-gold-400 active:scale-95 text-black font-sans font-bold uppercase tracking-wider rounded shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <span className="inline-block h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  <span>{t.form.submitting}</span>
                </>
              ) : (
                <span>{t.form.btnSubmit}</span>
              )}
            </button>
          </form>
        </div>

        {/* Confirmation Modal overlay */}
        {confirmedBooking && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4">
            <div className="relative w-full max-w-lg bg-white border border-warm-brown-500/15 rounded-xl p-6 sm:p-8 text-dark-charcoal shadow-2xl animate-fade-in">
              
              {/* Success Badge header */}
              <div className="flex flex-col items-center text-center mb-6">
                <div className="h-12 w-12 bg-green-500/10 rounded-full border border-green-500/30 flex items-center justify-center text-green-600 mb-4 animate-bounce">
                  <Check className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-gold-600 font-bold">
                  {t.modal.title}
                </h3>
                <p className="font-sans text-sm text-warm-brown-800 mt-1">
                  {t.modal.greeting.replace("{name}", confirmedBooking.name)}
                </p>
              </div>

              {/* Booking Details Summary box */}
              <div className="bg-warm-brown-50/50 rounded-lg p-5 border border-warm-brown-500/10 space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-warm-brown-500/15">
                  <span className="font-sans text-xs text-warm-brown-600 uppercase tracking-wider">{t.modal.code}</span>
                  <span className="font-mono text-sm font-bold text-gold-600 bg-gold-500/10 px-2 py-0.5 rounded border border-gold-500/20">{confirmedBooking.bookingCode}</span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm font-sans">
                  <div>
                    <span className="block text-[11px] text-warm-brown-600 uppercase tracking-wider">{t.modal.guests}</span>
                    <span className="font-semibold text-dark-charcoal mt-1 block">{confirmedBooking.guests}</span>
                  </div>
                  <div>
                    <span className="block text-[11px] text-warm-brown-600 uppercase tracking-wider">{t.modal.status}</span>
                    <span className="text-green-600 font-semibold mt-1 flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-green-500 inline-block" />
                      {t.modal.statusConfirmed}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[11px] text-warm-brown-600 uppercase tracking-wider">{t.modal.date}</span>
                    <span className="font-semibold text-dark-charcoal mt-1 block">{confirmedBooking.date}</span>
                  </div>
                  <div>
                    <span className="block text-[11px] text-warm-brown-600 uppercase tracking-wider">{t.modal.time}</span>
                    <span className="font-semibold text-dark-charcoal mt-1 block">{confirmedBooking.time}</span>
                  </div>
                </div>

                {confirmedBooking.specialRequests && (
                  <div className="border-t border-warm-brown-500/10 pt-3">
                    <span className="block text-[11px] text-warm-brown-600 uppercase tracking-wider mb-1">
                      {language === "en" ? "Your Request" : "Tu Petición"}
                    </span>
                    <p className="text-xs text-warm-brown-800 italic font-light bg-white p-2.5 rounded border border-warm-brown-500/10">
                      {confirmedBooking.specialRequests}
                    </p>
                  </div>
                )}
              </div>

              <p className="font-sans text-[11px] text-warm-brown-800/80 leading-relaxed text-center my-6">
                {t.modal.note}
              </p>

              {/* Close CTA */}
              <button
                onClick={() => setConfirmedBooking(null)}
                className="w-full py-3.5 bg-gold-500 hover:bg-gold-400 active:scale-95 text-black font-sans font-bold uppercase tracking-wider text-xs rounded transition-all cursor-pointer"
              >
                {t.modal.btnClose}
              </button>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
