import sys

file_path = r'c:\Users\nihal\OneDrive\文档\Desktop\COURSEMAP.IN\COURSE-MAP\roadmap.html'
with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
    content = f.read()

# Replace empty span
old_span = '<span class="rating-avg"></span>'
new_span = '<span class="rating-avg" style="opacity:0.6;">(No ratings yet)</span>'
content = content.replace(old_span, new_span)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print('Done!')
