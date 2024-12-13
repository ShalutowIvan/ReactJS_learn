from django.urls import path, re_path
from todo_app.views import *


urlpatterns = [
	path('', home, name='home'),
	path('todos/', todos_list, name='todos_list'),






]










