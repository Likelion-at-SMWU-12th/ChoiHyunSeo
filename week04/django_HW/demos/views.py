from django.shortcuts import render
from django.http import HttpResponse

def helloBabyLion(request):
    # return HttpResponse('메인화면입니다~!')
    return render(request, 'babylion.html')

def myHobby(request):
    return render(request, 'hobby.html')
