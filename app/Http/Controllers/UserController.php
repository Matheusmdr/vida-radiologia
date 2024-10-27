<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
  public function index()
  {
    $users = User::all();
    return Inertia::render('admin/users/index', [
      'users' => $users,
    ]);
  }

  public function create()
  {
    return Inertia::render('admin/users/create');
  }

  public function store(Request $request): RedirectResponse
  {
    $request->validate([
      'name' => 'required|string|max:255',
      'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
      'password' => 'required|between:8,255|confirmed',
      'password_confirmation' => 'required',
    ]);

    User::create([
      'name' => $request->name,
      'email' => $request->email,
      'password' => Hash::make($request->password),
    ]);


    return redirect(route('user.index', absolute: false));
  }

  public function edit($userId)
  {
    $user = User::findOrFail($userId);
    return Inertia::render('admin/users/edit', [
      'user' => $user,
    ]);
  }

  public function update(Request $request, $userId)
  {
    $request->validate([
      'name' => 'required|string|max:255',
      'email' => 'required|email|unique:users,email,' . $userId,
      'password' => 'required|between:8,255|confirmed',
      'password_confirmation' => 'required',
    ]);

    $user = User::findOrFail($userId);
    $user->update($request->all());

    return redirect()->route('user.index')->with('success', 'Usuário atualizado com sucesso.');
  }

  public function destroy($userId)
  {
    $user = User::findOrFail($userId);
    $user->delete();

    return redirect()->route('user.index')->with('success', 'Usuário apagado com sucesso.');
  }
}