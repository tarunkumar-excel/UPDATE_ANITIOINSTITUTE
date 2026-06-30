'use client';
import { useState } from 'react';
import { CreditCard, Smartphone, Building, CheckCircle, Copy, ExternalLink, Phone, Mail } from 'lucide-react';

const PAYMENT_METHODS = [
  {
    id: 'razorpay',
    icon: CreditCard,
    title: 'Razorpay Gateway',
    desc: 'Pay online via Debit/Credit Card, Net Banking, UPI or EMI',
    color: 'from-blue-500 to-blue-700',
    badge: 'Recommended',
  },
  {
    id: 'upi',
    icon: Smartphone,
    title: 'Direct UPI Payment',
    desc: 'Scan QR or send to UPI ID directly',
    color: 'from-purple-500 to-purple-700',
  },
  {
    id: 'bank',
    icon: Building,
    title: 'Bank Transfer / NEFT',
    desc: 'Transfer directly to our bank account',
    color: 'from-green-500 to-green-700',
  },
];

const UPI_ID = 'anitioinstitute@upi';
const BANK = {
  name: 'ANITIO Information Technology and Skill Development LLP',
  bank: 'Axis Bank / HDFC Bank',
  account: '1234567890123',
  ifsc: 'AXIS0001234',
  branch: 'Uttam Nagar, New Delhi',
};

function copyText(text: string) {
  navigator.clipboard.writeText(text);
}

export default function PaymentPage() {
  const [method, setMethod] = useState('razorpay');
  const [copied, setCopied] = useState('');

  const handleCopy = (text: string, key: string) => {
    copyText(text);
    setCopied(key);
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="page-hero">
        <div className="container-custom">
          <div className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">Secure Payment</div>
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-3">Pay <span className="text-gold-400">Fee Online</span></h1>
          <p className="text-gray-300 text-sm max-w-xl">Securely pay your course fee using your preferred payment method. All transactions are 100% safe and encrypted.</p>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Payment Method Selection */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="font-display font-bold text-gray-900 text-xl mb-4">Choose Payment Method</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {PAYMENT_METHODS.map(({ id, icon: Icon, title, desc, color, badge }) => (
                  <button key={id} onClick={() => setMethod(id)}
                    className={`text-left p-4 rounded-2xl border-2 transition-all ${method === id ? 'border-primary-600 bg-primary-50 shadow-blue' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
                    <div className={`w-10 h-10 bg-gradient-to-r ${color} rounded-xl flex items-center justify-center mb-3`}>
                      <Icon size={18} className="text-white" />
                    </div>
                    <div className="font-semibold text-gray-900 text-sm">{title}</div>
                    <div className="text-xs text-gray-500 mt-1 leading-relaxed">{desc}</div>
                    {badge && <span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full mt-2 inline-block">{badge}</span>}
                  </button>
                ))}
              </div>
            </div>

            {/* Razorpay */}
            {method === 'razorpay' && (
              <div className="card p-6 border border-blue-200">
                <h3 className="font-display font-bold text-gray-900 text-lg mb-2">Pay via Razorpay</h3>
                <p className="text-gray-500 text-sm mb-5">Click below to open the secure Razorpay payment page. You can pay via UPI, Net Banking, Debit/Credit Card or EMI.</p>
                <div className="bg-blue-50 rounded-xl p-4 mb-5 text-sm text-blue-800 border border-blue-200">
                  ℹ️ After payment, share your <strong>payment receipt</strong> on WhatsApp: <a href="https://wa.me/919289438428" className="underline">+91 92894 38428</a> for enrollment confirmation.
                </div>
                <a href="https://rzp.io/l/anitioinstitute" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-colors text-base">
                  <CreditCard size={18} /> Pay Now via Razorpay <ExternalLink size={14} />
                </a>
                <p className="text-xs text-gray-400 text-center mt-3">🔒 100% Secure | SSL Encrypted | Powered by Razorpay</p>
              </div>
            )}

            {/* UPI */}
            {method === 'upi' && (
              <div className="card p-6 border border-purple-200">
                <h3 className="font-display font-bold text-gray-900 text-lg mb-4">Pay via UPI</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-44 h-44 bg-gray-100 rounded-2xl mx-auto mb-3 flex items-center justify-center border-2 border-gray-200">
                      <div className="text-xs text-gray-500 text-center p-3">QR Code<br />(Place actual QR here)</div>
                    </div>
                    <p className="text-xs text-gray-500">Scan with any UPI app</p>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                      <div className="text-xs text-gray-500 mb-1">UPI ID</div>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-primary-700 text-sm">{UPI_ID}</span>
                        <button onClick={() => handleCopy(UPI_ID, 'upi')} className="text-gray-400 hover:text-primary-600 transition-colors">
                          {copied === 'upi' ? <CheckCircle size={16} className="text-green-500" /> : <Copy size={16} />}
                        </button>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Open PhonePe, Google Pay, Paytm or any UPI app → Send Money → Enter UPI ID → Enter amount → Pay
                    </p>
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-800">
                      ⚠️ After payment, share screenshot on WhatsApp for confirmation.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Bank Transfer */}
            {method === 'bank' && (
              <div className="card p-6 border border-green-200">
                <h3 className="font-display font-bold text-gray-900 text-lg mb-4">Bank Transfer / NEFT / IMPS</h3>
                <div className="space-y-3">
                  {[
                    { label: 'Account Name', value: BANK.name, key: 'name' },
                    { label: 'Bank',         value: BANK.bank, key: 'bank' },
                    { label: 'Account No.',  value: BANK.account, key: 'acc' },
                    { label: 'IFSC Code',    value: BANK.ifsc, key: 'ifsc' },
                    { label: 'Branch',       value: BANK.branch, key: 'branch' },
                  ].map(({ label, value, key }) => (
                    <div key={key} className="flex items-center justify-between bg-gray-50 rounded-xl p-4 border border-gray-200">
                      <div>
                        <div className="text-xs text-gray-500">{label}</div>
                        <div className="font-semibold text-gray-900 text-sm mt-0.5">{value}</div>
                      </div>
                      <button onClick={() => handleCopy(value, key)} className="text-gray-400 hover:text-primary-600 ml-3">
                        {copied === key ? <CheckCircle size={16} className="text-green-500" /> : <Copy size={16} />}
                      </button>
                    </div>
                  ))}
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4 text-xs text-amber-800">
                  ⚠️ After transfer, share transaction ID and screenshot on WhatsApp: <strong>+91 92894 38428</strong> for admission confirmation.
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="card p-6 border border-gray-200">
              <h3 className="font-display font-bold text-gray-900 mb-4">Need Help?</h3>
              <div className="space-y-3">
                <a href="https://wa.me/919289438428?text=Hello%20ANITIO%2C%20I%20need%20help%20with%20fee%20payment."
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl p-3 hover:bg-green-100 transition-colors">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-900">WhatsApp</div>
                    <div className="text-[10px] text-gray-500">+91 92894 38428</div>
                  </div>
                </a>
                <a href="tel:+919289438428" className="flex items-center gap-3 bg-blue-50 border border-blue-200 rounded-xl p-3 hover:bg-blue-100 transition-colors">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={14} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-900">Call Us</div>
                    <div className="text-[10px] text-gray-500">+91 92894 38428</div>
                  </div>
                </a>
                <a href="mailto:anitioinstitute@gmail.com" className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl p-3 hover:bg-gray-100 transition-colors">
                  <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={14} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-900">Email</div>
                    <div className="text-[10px] text-gray-500">anitioinstitute@gmail.com</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="card p-6 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200">
              <h3 className="font-display font-bold text-gray-900 mb-3">Payment Steps</h3>
              <ol className="space-y-2">
                {['Choose your payment method', 'Complete the payment securely', 'Take a screenshot / note transaction ID', 'Share on WhatsApp: +91 92894 38428', 'Receive enrollment confirmation within 2 hours'].map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-gray-700">
                    <span className="w-5 h-5 bg-green-500 text-white rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0">{i+1}</span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
