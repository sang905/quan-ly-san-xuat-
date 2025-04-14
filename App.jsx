
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useState } from "react";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-orange-100 flex items-center justify-center p-4">
      {!loggedIn ? (
        <Card className="w-full max-w-sm p-6 bg-white rounded-2xl shadow-xl">
          <CardContent className="space-y-4">
            <img src="/logo-viet-han.png" alt="Logo" className="mx-auto h-16" />
            <h2 className="text-center text-xl font-bold text-orange-600">
              QUẢN LÝ SẢN XUẤT VIỆT HÀN
            </h2>
            <Input placeholder="Tên đăng nhập" />
            <Input type="password" placeholder="Mật khẩu" />
            <Button className="w-full bg-orange-500 hover:bg-orange-600" onClick={() => setLoggedIn(true)}>
              ĐĂNG NHẬP
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Tabs defaultValue="dashboard" className="w-full max-w-5xl mx-auto">
          <TabsList className="flex justify-around bg-white p-2 rounded-xl shadow">
            <TabsTrigger value="dashboard">📊 Dashboard</TabsTrigger>
            <TabsTrigger value="machines">🏭 Máy</TabsTrigger>
            <TabsTrigger value="plans">📋 Kế hoạch</TabsTrigger>
            <TabsTrigger value="report">📈 Báo cáo</TabsTrigger>
            <TabsTrigger value="zalo">📨 Cấu hình Zalo</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <div className="mt-4 space-y-4">
              <Card><CardContent>📦 Đơn hàng: 12 | 🔧 Máy lỗi: 2</CardContent></Card>
              <Card><CardContent>📈 Sản lượng hôm nay: 5.200m</CardContent></Card>
              <Card><CardContent>🎯 Tiến độ trung bình: 85%</CardContent></Card>
            </div>
          </TabsContent>

          <TabsContent value="machines">
            <div className="mt-4 space-y-2">
              {['Máy 01 – Đang chạy 🟢','Máy 02 – Dừng 🔴','Máy 03 – Bảo trì 🟠'].map((text, i) => (
                <Card key={i}><CardContent>{text}</CardContent></Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="plans">
            <Card className="mt-4">
              <CardContent className="space-y-2">
                <p>📄 Đơn hàng 005 – Cat6 FTP</p>
                <p>⏱ 13/04 → 16/04 | 🔧 Máy: 03 – 06 – 09</p>
                <p>✅ Bọc lõi: 80% | ✅ Bện tổng: 60% | ❌ Đóng gói: 0%</p>
                <Input placeholder="Nhập sản lượng (m)" />
                <Button className="bg-red-500 hover:bg-red-600">BÁO LỖI</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="report">
            <Card className="mt-4">
              <CardContent className="space-y-2">
                <p>📊 Báo cáo tuần 14</p>
                <p>Tổng sản lượng: 32.500m</p>
                <p>Phế liệu: 350m (1.1%)</p>
                <p>Giờ máy hoạt động: 152h</p>
                <p>OEE: 86.3%</p>
                <Button variant="outline">📤 Xuất Excel</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="zalo">
            <Card className="mt-4">
              <CardContent className="space-y-4">
                <h3 className="text-lg font-semibold">📨 Cấu hình người nhận cảnh báo Zalo</h3>
                {[1, 2, 3].map((_, index) => (
                  <div key={index} className="grid grid-cols-4 gap-2 items-center">
                    <Input placeholder="Mã máy (VD: M01)" />
                    <Input placeholder="Tên máy" />
                    <Input placeholder="Người nhận Zalo" />
                    <select className="border rounded px-2 py-1">
                      <option>Ca Sáng</option>
                      <option>Ca Chiều</option>
                      <option>Ca Đêm</option>
                    </select>
                  </div>
                ))}
                <Button className="bg-orange-500 hover:bg-orange-600">💾 Lưu cấu hình</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}
