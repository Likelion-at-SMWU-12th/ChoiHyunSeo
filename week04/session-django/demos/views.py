from django.shortcuts import render
from django.http import HttpResponse

def helloBabyLion(request):
    # return HttpResponse('아기사자들 첫 장고 입문!')
    return render(request, 'babylion.html')