from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

# router = DefaultRouter()

# router.register(r'login', views.login_user)
# router.register(r'signup', views.signup_user)
# router.register(r'profile', views.update_profile)


# urlpatterns = [
#     path("api/", include(router.urls))
# ]


urlpatterns = [
    path('login/', views.login_user, name='login'),
    path('signup/', views.signup_user, name='signup'),
    path('user/', views.get_user, name='get_all_user'),
    path('profile/', views.update_profile, name='profile'), 
    path('get-profile/', views.get_user_profile, name='get-profile')
]
