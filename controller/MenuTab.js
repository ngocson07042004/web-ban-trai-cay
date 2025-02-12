function openTab(tabId, tabElement) {
    // Lấy tất cả các tab-content và loại bỏ class "active"
    const tabContents = document.querySelectorAll(".tab-content")
    tabContents.forEach(function(content) {
      content.classList.remove("active")
    })
  
    // Thêm class "active" vào tab content tương ứng
    const activeTab = document.getElementById(tabId)
    activeTab.classList.add("active")
    
    // Lấy tất cả các tab và loại bỏ class "active" khỏi tất cả các tab
    const tabs = document.querySelectorAll(".tab")
    tabs.forEach(function(tab) {
      tab.id = ""
    })
  
    // Thêm class "active" vào tab được chọn
    tabElement.id = "active"
}