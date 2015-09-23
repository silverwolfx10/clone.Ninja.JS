/**
 * $clone
 * 
 * Cria uma cópia profunda do valor que pode
 * conter (aninhadas) Arrays e objetos, números, strings, booleanos
 * e datas. As funções não são copiadas
 *
 * @module $clone
 * @author Cleber de Moraes Goncalves <cleber.programmer>
 * @example
 *
 *        $clone({ a: 1 });
 *
 */
this.Ninja.module('$clone', [], function () {

  /**
   * Cria uma cópia profunda do valor que pode
   * conter (aninhadas) Arrays e objetos, números, strings, booleanos
   * e datas. As funções não são copiadas
   *
   * @public
   * @method clone
   * @param {Object} a Objeto que sera clonado
   * @return {Object} Novo objeto clonado
   * @example
   *
   *        $clone({ a: 1 });
   *
   */
  function clone(a) {
    return JSON.parse(JSON.stringify(a));
  }

  /**
   * Revelacao do modulo $clone, encapsulando a visibilidade das funcoes
   * privadas
   */
  return clone;

});
