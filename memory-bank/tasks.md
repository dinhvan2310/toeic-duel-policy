# Tasks

## Danh sách nhiệm vụ

| ID  | Mô tả nhiệm vụ                                                                                | Trạng thái | Người phụ trách | Ghi chú |
| --- | --------------------------------------------------------------------------------------------- | ---------- | --------------- | ------- |
| 1   | Thiết kế UI/UX tổng thể                                                                       | Đang làm   |                 |         |
| 2   | Xây dựng chức năng từ điển tra cứu                                                            | Hoàn thành |                 |         |
| 3   | Xây dựng chức năng luyện tập Part 1                                                           | Hoàn thành |                 |         |
| 4   | Xây dựng chức năng luyện tập Part 2                                                           | Hoàn thành |                 |         |
| 5   | Xây dựng chức năng luyện tập Part 3                                                           | Hoàn thành |                 |         |
| 6   | Xây dựng chức năng luyện tập Part 4                                                           | Hoàn thành |                 |         |
| 7   | Xây dựng chức năng luyện tập Part 5                                                           | Hoàn thành |                 |         |
| 8   | Xây dựng chức năng luyện tập Part 6                                                           | Hoàn thành |                 |         |
| 9   | Xây dựng chức năng luyện tập Part 7                                                           | Hoàn thành |                 |         |
| 10  | Tích hợp chấm điểm tự động, lưu lịch sử luyện tập                                             | Hoàn thành |                 |         |
| 11  | Hiển thị kết quả, phản hồi chi tiết, thống kê tiến độ                                         | Hoàn thành |                 |         |
| 12  | Viết test cho module luyện tập                                                                | Hoàn thành |                 |         |
| 13  | Kiểm thử, tối ưu hiệu năng, UX/UI cho luyện tập                                               | Hoàn thành |                 |         |
| 23  | Xây dựng chức năng điểm danh hằng ngày (Daily Streak) & Hiển thị thời gian luyện tập mỗi ngày | Hoàn thành |                 |         |
| 14  | Xây dựng chức năng chatbot (Rasa Pro)                                                         | Chưa làm   |                 |         |
| 15  | Xây dựng hệ thống bài giảng                                                                   | Đang làm   |                 |         |
| 16  | Xây dựng chức năng quản lý hồ sơ                                                              | Hoàn thành |                 |         |
| 22  | Thêm filter câu hỏi theo topics và trạng thái (đã trả lời/chưa trả lời) ở list                | Hoàn thành |                 |         |
| 24  | Xây dựng trang settings                                                                       | Hoàn thành |                 |         |

# 22: Enhancement Plan: Thêm filter câu hỏi theo topics và trạng thái

**Status**: Paused
**Priority**: Medium
**Estimated Effort**: Medium

### Description

Thêm chức năng lọc câu hỏi theo chủ đề (topics) và trạng thái (đã trả lời/chưa trả lời) trong danh sách câu hỏi các phần luyện tập.

### Requirements

-   Cho phép người dùng lọc câu hỏi theo chủ đề (topic)
-   Cho phép lọc theo trạng thái: đã trả lời/chưa trả lời
-   UI filter dễ sử dụng, phù hợp với thiết kế hiện tại
-   Kết quả lọc cập nhật ngay trên giao diện

### Subtasks

-   [x] Xác định vị trí hiển thị filter trong UI danh sách câu hỏi
-   [x] Thiết kế UI component cho filter
-   [ ] Cập nhật logic lọc dữ liệu trong state/service
-   [ ] Kết nối UI filter với logic lọc

### Notes

-   Ưu tiên hiệu năng khi lọc danh sách lớn
-   Đảm bảo UI filter đồng bộ với thiết kế tổng thể

### Progress

[####----] 50% Complete

# 23: Enhancement Plan: Xây dựng chức năng điểm danh hằng ngày (Daily Streak) & Hiển thị thời gian luyện tập mỗi ngày

**Status**: Paused
**Priority**: High
**Estimated Effort**: Medium-High

### Description

Xây dựng chức năng điểm danh hằng ngày (Daily Streak) cho phép người dùng check-in mỗi ngày, theo dõi chuỗi streak, đồng thời hiển thị lịch sử và tổng thời gian luyện tập từng ngày dưới dạng Bar Chart trực quan. Thời gian luyện tập mỗi ngày được tính là **tổng thời gian app ở trạng thái foreground (user mở app), không chỉ khi làm bài**. Người dùng có thể xem tiến trình streak, tổng thời gian luyện tập, thời gian luyện tập hôm nay và chi tiết từng ngày.

### Requirements

-   Cho phép người dùng điểm danh mỗi ngày (check-in)
-   Hiển thị số ngày streak liên tiếp
-   Hiển thị lịch sử điểm danh và thời gian luyện tập từng ngày bằng Bar Chart
-   Thời gian luyện tập mỗi ngày = tổng thời gian app ở trạng thái foreground (user mở app)
-   Nút điểm danh chỉ hiện khi chưa check-in hôm nay
-   Thông báo khi điểm danh thành công/thất bại
-   Hiển thị tổng thời gian luyện tập và thời gian hôm nay
-   Tooltip/label chi tiết khi bấm vào từng cột Bar Chart
-   Xử lý múi giờ chính xác
-   Reset streak nếu bỏ lỡ ngày
-   Đảm bảo không thể điểm danh nhiều lần/ngày
-   Đảm bảo đồng bộ dữ liệu khi offline/online

### Subtasks

-   [x] Cập nhật model dữ liệu backend để lưu thời gian luyện tập từng ngày, từng user
-   [x] Tạo hàm service frontend để lưu thời gian luyện tập từng ngày, từng user, áp dụng vào app
-   [x] Thiết kế và triển khai services trả về thời gian luyện tập từng ngày, từng user
-   [x] Tạo UI component Bar Chart hiển thị lịch sử luyện tập (TrainingBarChart)
-   [x] Tích hợp widget Bar Chart và điểm danh vào màn hình problems

### Notes

-   Thời gian luyện tập được tính bằng tổng thời gian app ở trạng thái foreground (user mở app), frontend cần lắng nghe AppState và gửi duration lên backend mỗi lần app chuyển background.
-   Ưu tiên UX đơn giản, dễ dùng
-   Đảm bảo Bar Chart dễ nhìn, không rối mắt, responsive
-   Đảm bảo Bar Chart không chiếm quá nhiều diện tích, dễ thao tác

### Progress

-   Đã hoàn thành:
    -   Model dữ liệu backend (user_daily_training)
    -   Service lưu thời gian luyện tập từng ngày, từng user
    -   Service lấy lịch sử luyện tập từng ngày, từng user
    -   Component TrainingBarChart hiển thị Bar Chart lịch sử luyện tập
-   Chưa hoàn thành:
    -   Tích hợp Bar Chart và điểm danh vào UI chính
    -   Xử lý múi giờ, edge case, feedback
    -   Kiểm thử tổng thể, hoàn thiện UI/UX

### Status

-   Done

### Gợi ý cấu trúc dữ liệu cho Bar Chart

```js
const data = [
    { value: 120, label: "01/05", frontColor: "#6a5acd" },
    { value: 45, label: "02/05", frontColor: "#6a5acd" },
    // ...
];
```

-   `value`: thời gian luyện tập (phút/giờ)
-   `label`: ngày
-   `frontColor`: màu sắc cột (có thể đổi màu nếu là ngày streak)

### Tài liệu tham khảo

-   https://github.com/Abhinandan-Kushwaha/react-native-gifted-charts#barchart
-   https://github.com/Abhinandan-Kushwaha/react-native-gifted-charts/blob/master/docs/BarChart/BarChartProps.md

# 14: Enhancement Plan: Xây dựng chức năng chatbot (Rasa Pro)

**Status**: Not Started
**Priority**: High
**Estimated Effort**: High

### Description

Tích hợp chatbot thông minh sử dụng Rasa Pro vào ứng dụng TOEIC Duel App. Chatbot hỗ trợ người dùng tra cứu từ vựng, giải thích ngữ pháp, đề xuất chủ đề trò chuyện, nhắc nhở học tập, và trả lời các câu hỏi liên quan đến luyện thi TOEIC. Chatbot cần hoạt động realtime, thân thiện với người dùng Việt Nam, dễ mở rộng kịch bản hội thoại.

### Requirements

-   Tích hợp Rasa Pro backend (hosted/cloud hoặc self-hosted).
-   Giao tiếp giữa app và Rasa qua API (REST/websocket).
-   UI chat thân thiện, hỗ trợ gửi/nhận tin nhắn, hiển thị quick reply, nút, hình ảnh.
-   Hỗ trợ các intent chính: tra cứu từ vựng, giải thích ngữ pháp, nhắc nhở học, hỏi đáp TOEIC, small talk.
-   Hỗ trợ tiếng Việt, tiếng Anh.
-   Lưu lịch sử hội thoại
-   Thông báo nhắc nhở học tập qua chatbot

### Subtasks

-   [ ] Thiết kế kịch bản hội thoại (intent, entity, flow chính cho TOEIC).
-   [ ] Cấu hình và triển khai Rasa Pro server (cloud/self-hosted).
-   [ ] Tạo API proxy hoặc kết nối trực tiếp từ app tới Rasa (REST/websocket).
-   [ ] Xây dựng UI chat (component Chatbot, quick reply, loading, ...).
-   [ ] Tích hợp gửi/nhận tin nhắn giữa app và Rasa.
-   [ ] Xử lý các intent chính: từ vựng, ngữ pháp, nhắc nhở, small talk.
-   [ ] Lưu lịch sử hội thoại (local hoặc cloud, nếu cần).
-   [ ] Kiểm thử hội thoại, UX, edge case.
-   [ ] Tối ưu hiệu năng, UX/UI chat.

### Potential Challenges

-   Đảm bảo độ trễ thấp, realtime khi chat.
-   Xử lý tiếng Việt tự nhiên, phân biệt ngữ cảnh.
-   Bảo mật API, xác thực user khi chat.
-   Tối ưu UI chat cho mobile, hỗ trợ nhiều loại message (text, button, image).
-   Dễ mở rộng intent, flow mới.

### Testing Strategy

-   Kiểm thử intent, entity, flow hội thoại với nhiều kịch bản.
-   Test UX/UI chat trên nhiều thiết bị.
-   Test lỗi mạng, reconnect, timeout.
-   Đánh giá độ chính xác intent, phản hồi của chatbot.

### Progress

-   Chưa bắt đầu.

# 24: Enhancement Plan: Xây dựng trang Settings

**Status**: In Progress
**Priority**: Medium  
**Estimated Effort**: Medium

### Description

Xây dựng trang Settings cho ứng dụng TOEIC Duel App, cho phép người dùng tùy chỉnh các thiết lập cá nhân, ngôn ngữ, thông báo, quyền riêng tư, và các tuỳ chọn khác liên quan đến trải nghiệm sử dụng app.

### Requirements

-   Hiển thị các mục cài đặt cơ bản: tài khoản, ngôn ngữ, thông báo, quyền riêng tư, theme (nếu có).
-   Cho phép thay đổi ngôn ngữ (Việt/Anh).
-   Cho phép bật/tắt thông báo.
-   Cho phép chỉnh sửa thông tin cá nhân (nếu cần).
-   Giao diện thân thiện, đồng bộ với thiết kế tổng thể.
-   Lưu các thay đổi vào local storage hoặc backend (nếu cần).
-   Xử lý edge case: lỗi lưu, lỗi mạng, rollback khi thất bại.
-   **Trang Settings bao gồm:**
    1. **Cài đặt cá nhân** (settings)
    2. **Quản lý từ vựng đã lưu** (collections)
    3. **Thống kê kết quả luyện thi** (số câu đã trả lời, đúng/sai từng part, tổng kết quá trình luyện tập)

### Notes

-   Ưu tiên UX đơn giản, dễ thao tác.
-   Đảm bảo đồng bộ settings giữa các thiết bị (nếu dùng backend).
-   Có thể mở rộng thêm các mục settings trong tương lai.
-   **Collections:** Cho phép người dùng lưu, xem, quản lý từ vựng đã lưu, phân loại theo folder/collection.
-   **Thống kê:** Hiển thị tổng số câu đã trả lời, đúng/sai, thống kê theo từng part TOEIC, biểu đồ tiến bộ, tổng thời gian luyện tập, v.v.

#### Đề xuất các mục cài đặt cho trang Settings:

1. **Cài đặt cá nhân**
    - Đổi mật khẩu
    - Đăng xuất
2. **Ngôn ngữ**
    - Chọn ngôn ngữ giao diện (Tiếng Việt / Tiếng Anh)
3. **Thông báo**
    - Bật/tắt thông báo nhắc nhở học tập (nếu có)
4. **Chủ đề giao diện (Theme)**
    - Chọn chế độ sáng/tối (Light/Dark Mode)
    - Theo hệ thống
5. **Quyền riêng tư & bảo mật**
    - Quản lý quyền truy cập dữ liệu cá nhân
    - Xóa tài khoản
6. **Quản lý từ vựng đã lưu (Collections)**
    - Xem, tìm kiếm, phân loại, xóa/sửa từ vựng đã lưu
7. **Thống kê kết quả luyện thi**
    - Tổng số câu đã trả lời, đúng/sai
    - Thống kê theo từng part TOEIC
    - Biểu đồ tiến bộ, tổng thời gian luyện tập
8. **Khác**
    - Giới thiệu ứng dụng
    - Gửi phản hồi/hỗ trợ
    - Điều khoản sử dụng & chính sách bảo mật
    - Phiên bản ứng dụng

### Progress

[----------] 0% Complete

# Task: Danh sách chủ điểm ngữ pháp TOEIC (group_id = 9)

## Description
Hiển thị danh sách các chủ điểm ngữ pháp TOEIC (group_id = 9) lấy từ API Supabase trên màn hình learn/index.tsx. Người dùng có thể tìm kiếm, bấm vào từng chủ điểm để xem chi tiết (dạng văn bản). Không cần chatbot Rasa trên màn hình này.

## Complexity
Level: 3
Type: Feature

## Technology Stack
- Framework: React Native (Expo)
- Build Tool: Expo
- Language: TypeScript
- Storage: Supabase (Postgres)

## Technology Validation Checkpoints
- [x] Project initialization command verified
- [x] Required dependencies identified and installed
- [x] Build configuration validated
- [x] Hello world verification completed
- [ ] Test build passes successfully

## Status
- [x] Initialization complete
- [x] Planning complete
- [ ] Technology validation complete
- [ ] Implementation steps

## Implementation Plan
1. Tạo service/hook gọi API Supabase để lấy danh sách chủ điểm ngữ pháp (group_id = 9)
   - [ ] Định nghĩa type GrammarTopic (id, name, description)
   - [ ] Viết hàm getGrammarTopics() sử dụng Supabase JS client
2. Sửa app/(protected)/(tabs)/learn/index.tsx
   - [ ] Xóa toàn bộ phần chatbot Rasa
   - [ ] Thêm FlatList hiển thị danh sách chủ điểm ngữ pháp
   - [ ] Mỗi item có nút bấm xem chi tiết (có thể dùng BottomSheetModal hoặc navigation)
   - [ ] (Tùy chọn) Thêm TextInput filter theo tên
3. Kết nối navigation/modal cho màn chi tiết chủ điểm
   - [ ] Tạo màn chi tiết hiển thị name, description
4. Đảm bảo UI đồng bộ theme, responsive
5. Test trên nhiều thiết bị, kiểm tra lỗi API

## Creative Phases Required
- [x] 🎨 UI/UX Design (danh sách, chi tiết, filter)
- [ ] 🏗️ Architecture Design (không cần phức tạp)
- [ ] ⚙️ Algorithm Design (không cần phức tạp)

## Dependencies
- Supabase JS client
- React Native, FlatList, navigation, theme

## Challenges & Mitigations
- API fail: Hiển thị thông báo lỗi, thử lại
- Tìm kiếm nhanh: Dùng filter/memoization

## Testing Strategy
- Test fetch API, hiển thị danh sách, filter, navigation/modal
- Test lỗi khi API fail hoặc không có dữ liệu

## Documentation Plan
- Ghi chú cách thêm/sửa chủ điểm ngữ pháp (chỉnh bảng topics trên Supabase)
- Hướng dẫn sử dụng màn hình ngữ pháp

# Task: Statistics – Thống kê quá trình học & luyện tập TOEIC

## Description
Hiển thị thống kê quá trình học và luyện tập của người dùng, bao gồm:
- Số bài đã làm theo từng Part (Part 1–7 TOEIC)
- Số bài đã làm theo từng Topic (chủ điểm ngữ pháp, từ vựng, ...)
- Số ngày hoạt động app (active days, streak, ngày đầu tiên, ngày gần nhất)
- Số bài giải mỗi ngày (biểu đồ số lượng theo ngày, 7 ngày gần nhất, 30 ngày gần nhất, ...)
- Tổng số bài đã làm, tổng số chủ điểm đã học

## Complexity
Level: 3
Type: Feature

## Technology Stack
- Framework: React Native (Expo)
- Build Tool: Expo
- Language: TypeScript
- Storage: Supabase (Postgres)
- Chart: react-native-svg-charts hoặc victory-native

## Requirements Analysis
- Thống kê số bài đã làm theo từng Part (1–7)
- Thống kê số bài đã làm theo từng Topic
- Thống kê số ngày hoạt động, streak, ngày đầu/ cuối
- Thống kê số bài giải mỗi ngày (7/30 ngày gần nhất)
- Tổng số bài đã làm, tổng số chủ điểm đã học

## Components Affected
- Màn hình mới: /app/(protected)/(tabs)/profile/statistics/index.tsx
- API/Service: statisticsApi (lấy dữ liệu tổng hợp từ Supabase)
- UI Components: Card, Chart, ProgressBar, Badge, ...

## Architecture Considerations
- Ưu tiên tổng hợp dữ liệu phía server (SQL view/function Supabase)
- Chỉ fetch số liệu cần thiết, tối ưu hiệu suất
- Không cần realtime, chỉ fetch khi vào màn hình

## Implementation Steps
1. Thiết kế UI wireframe/statistics card (tổng quan, chi tiết, biểu đồ)
2. Tạo API service trả về dữ liệu tổng hợp (byPart, byTopic, byDate, activeDays, streak, ...)
3. Tạo màn hình UI: Card tổng quan, Bar chart, Table/chart theo Part/Topic
4. Tối ưu UI/UX: loading, empty state, hiệu ứng động
5. Test, kiểm tra số liệu

## Dependencies
- Supabase JS client
- react-query
- react-native-svg-charts hoặc victory-native

## Challenges & Mitigations
- Tổng hợp dữ liệu nhiều chiều: Ưu tiên tổng hợp phía server
- Hiển thị biểu đồ đẹp, mượt: Chọn thư viện chart phù hợp
- Dữ liệu lớn: Chỉ lấy 7/30 ngày gần nhất, phân trang nếu cần

## Creative Phases Required
- [x] 🎨 UI/UX Design (card, chart, badge, streak)
- [ ] 🏗️ Architecture Design (nếu cần SQL view/function phức tạp)

## Testing Strategy
- Test fetch API, hiển thị card, chart, table
- Test lỗi khi API fail hoặc không có dữ liệu

## Documentation Plan
- Ghi chú cách tổng hợp dữ liệu thống kê trên Supabase
- Hướng dẫn sử dụng màn hình thống kê
