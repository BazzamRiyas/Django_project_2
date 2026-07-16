from django.shortcuts import render, redirect
from .forms import *
from django.http import HttpResponse
from . models import *
from django.contrib.auth. forms import UserCreationForm


# Create your views here.


# def student_list(request):
#     return HttpResponse("List of Students")


def hello_world(request):
     return HttpResponse("Welcome to University Hub!")



def course_list(request):
     all_courses = Course.objects.all()
     context = {
          'courses' : all_courses,
          'page_title' : 'Available Courses'
     }
     return render (request, 'academic/course_list.html', context)




def student_create(request):
    if request.method == 'POST':
        form = StudentForm(request .POST)
        if form.is_valid():
                form. save()
        return redirect( 'course_list')
    
    else:

        form = StudentForm()

    return render(request, 'academic/student_form.html',{'form': form})





def register_user(request):

    if request.method == 'POST':

        form = UserCreationForm(request.POST)

        if form.is_valid():
            form. save()
            return redirect('login')

    else:
        form = UserCreationForm()

    return render(request, 'registration/register.html',{'form': form})

from  rest_framework import viewsets
from .models import Course,Student
from .serializers import CourseSerializer, StudentSerializer

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer