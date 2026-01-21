'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11409<T> = T extends (infer U)[]
  ? DeepReadonlyArray11409<U>
  : T extends object
  ? DeepReadonlyObject11409<T>
  : T;

interface DeepReadonlyArray11409<T> extends ReadonlyArray<DeepReadonly11409<T>> {}

type DeepReadonlyObject11409<T> = {
  readonly [P in keyof T]: DeepReadonly11409<T[P]>;
};

type UnionToIntersection11409<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11409<T> = UnionToIntersection11409<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11409<T extends unknown[], V> = [...T, V];

type TuplifyUnion11409<T, L = LastOf11409<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11409<TuplifyUnion11409<Exclude<T, L>>, L>;

type DeepPartial11409<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11409<T[P]> }
  : T;

type Paths11409<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11409<K, Paths11409<T[K], Prev11409[D]>> : never }[keyof T]
  : never;

type Prev11409 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11409<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11409 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths11409 = Paths11409<NestedConfig11409>;

interface HeavyProps11409 {
  config: DeepPartial11409<NestedConfig11409>;
  path?: ConfigPaths11409;
}

const HeavyComponent11409 = memo(function HeavyComponent11409({ config }: HeavyProps11409) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11409) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11409 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11409: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11409.displayName = 'HeavyComponent11409';
export default HeavyComponent11409;
