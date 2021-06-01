---
title: Error Code
id: errorcode
description: Goong error code.
contentType: specification
order: 6
layout: page
hideFeedback: true
products:
- Documentation
---

```
"OK"
"BAD_REQUEST": Thông tin request ko hợp lệ ( sai tham số hoặc cách truyền tham số)
"NOT_FOUND" : Không tìm thấy thông tin request yêu cầu ( geocode ko có kết quả, ko tìm được routing giữa các điểm mong muốn)
"ERROR" : Lỗi xử lý phía server, thường là các vấn đề liên quan đến hoạt động của các dịch vụ đang chạy

status_code: 403 : API_KEY_MISSING || API_KEY_INVALID || API_KEY_UNAUTHORIZED (Các lỗi liên quan tới API Key)
status_code: 429: OVER_RATE_LIMIT (Lỗi API Key vượt quá giới hạn request)
status_code: 400: HTTPS_REQUIRED (Lỗi url không chứa https)
```