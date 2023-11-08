package com.nycollas.backend.exercicio;


import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import lombok.Getter;

public class Calculator {
    @Getter
    private static Scanner scanner = new Scanner(System.in);
    
    static void Exercise01() {
        float[] notas = {10, 7.5f, 4, 2};
        float mean = 0;
        
        for (float nota : notas) {
            mean += nota;
        }
        mean /= notas.length;
        System.out.println("A média é: " + mean);
        
        if (mean >= 9 ){
            System.out.println("Parabens");
        } else if (mean >= 7) {
            System.out.println("Aprovado");
        } else if (mean >= 4) {
            System.out.println("Recuperação");
        } else if (mean < 3){
            System.out.println("Reprovado");
        }
    }
    static void Exercise02() {
        // Crie um programa que leia um array e retorne a soma dos resultados
        System.out.println("Exercicio 02");

        int sum  = 0;
        ArrayList<Integer> array = new ArrayList<>();
        boolean isRunning = true;
        while (isRunning) {
            try {
                System.out.println("Insira um numero ou qualquer letra para parar");
                array.add( scanner.nextInt()) ;
            } catch (Exception e) {
                isRunning = false;
                System.out.println("Ocorreu um erro" + e.getMessage());
            }
        }
        for (int i : array) {
            sum += i;
        }

        System.out.println("A soma é: " + sum);

    }
    static void Exercise03() {
        // Crie um programa que leia um list e retorne a média dos resultados
        System.out.println("Exercicio 03");

        ArrayList<Integer> list = new ArrayList<>();
        boolean isRunning = true;

        while (isRunning) {
            try {
                System.out.println("Insira um numero ou qualquer letra para parar");
                list.add( scanner.nextInt());
            } catch (Exception e) {
                isRunning = false;
            }
        }

        float sum = 0;
        for (int i : list) 
            sum += i;
        
        System.out.println("A média é: " + sum/list.size());

    }
    static void Exercise04() {
        System.out.println("Exercicio 04");
        // Informar todos os números de 1000 a 1999 que quando divididos por 11 obtemos resto = 5.
        int qtd = 0;
        for (int i = 1000; i < 1999; i++) {
            if (i % 11 == 5) {
                System.out.println(i);
                qtd++;
            }
        }
        System.out.println("Quantidade de numeros: " + qtd);
    }
    static void Exercise05() {
        //Informar todos os números de 0 a 1000 que são pares e quantos são impares.
        int par = 0, impar = 0;
        for(int i = 0; i < 1000; i++){
            if (i % 2 == 0)
                par++;
            else 
                impar++;
        }

        System.out.println("Quantidade de numeros pares: " + par);
        System.out.println("Quantidade de numeros impares: " + impar);

    }
    static void Exercise06() {
        // Crie três, classes Pessoas, Funcionário e Usuário, 
        //onde Funcionário e Usuário herdam os atributos de Pessoa, 
        //e depois crie 2 objetos de cada classe e mostre na tela cada objeto

        Pessoa pessoa = new Pessoa();
        pessoa.nome = "João";
        pessoa.cpf = "123.456.789-10";
        Funcionario funcionario = new Funcionario();
        funcionario.nome = "Maria";
        funcionario.cpf = "987.654.321-10";
        funcionario.cargo = "Gerente";
        funcionario.salario = 10000;
        Usuario usuario = new Usuario();
        usuario.nome = "Pedro";
        usuario.cpf = "123.456.789-10";
        usuario.login = "pedro123";
        usuario.senha = "pedrinho123";

        System.out.println("Pessoa: " + pessoa.nome + " - " + pessoa.cpf);
        System.out.println("Funcionario: " + funcionario.nome + " - " + funcionario.cpf + " - " + funcionario.cargo + " - " + funcionario.salario);
        System.out.println("Usuario: " + usuario.nome + " - " + usuario.cpf + " - " + usuario.login + " - " + usuario.senha);
    }
    static void Exercise07() {
        //Crie um vetor e uma lista do tipo Funcionário e insira 
        //com objetos de Funcionários e mostre na tela
        ArrayList<Funcionario> trabalhadores = new ArrayList<Funcionario>();

        trabalhadores.add(new Funcionario(){
            {
                nome = "João";
                cpf = "123.456.789-10";
                cargo = "Gerente";
                salario = 10000;
            }
        });
        trabalhadores.add(new Funcionario(){
            {
                nome = "Irineu";
                cpf = "123.654.999-10";
                cargo = "Gerente";
                salario = 9000;
            }
        });
        trabalhadores.add(new Funcionario(){
            {
                nome = "Hemerson";
                cpf = "321.333.789-10";
                cargo = "Estagiário";
                salario = 1000;
            }
        });

        System.out.println("Funcionarios: ");
        for (Funcionario funcionario : trabalhadores) {
            System.out.println(funcionario.nome);
        }
    }
    static void Exercise08() {
        // Crei uma lista que recebe valores do usuário
        //e retorne qual o maior valor da lista, o tamanho 
        //da lista será informado pelo usuário
        int arrayLength = 0;
        System.out.println("Insira o tamanho do array:");
        arrayLength = scanner.nextInt();
        int[] list = new int[arrayLength];
        int max = 0;

        for (int i = 0; i < arrayLength; i++) {
            System.out.println("Insira um numero no index" + i+ ":");
            list[i] = scanner.nextInt();
        }

        for (int i : list) {
            if (i > max)
                max = i;
        }

        System.out.println("O maior numero é: " + max);
    }
}


