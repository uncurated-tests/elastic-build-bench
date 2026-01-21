'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11252<T> = T extends (infer U)[]
  ? DeepReadonlyArray11252<U>
  : T extends object
  ? DeepReadonlyObject11252<T>
  : T;

interface DeepReadonlyArray11252<T> extends ReadonlyArray<DeepReadonly11252<T>> {}

type DeepReadonlyObject11252<T> = {
  readonly [P in keyof T]: DeepReadonly11252<T[P]>;
};

type UnionToIntersection11252<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11252<T> = UnionToIntersection11252<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11252<T extends unknown[], V> = [...T, V];

type TuplifyUnion11252<T, L = LastOf11252<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11252<TuplifyUnion11252<Exclude<T, L>>, L>;

type DeepPartial11252<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11252<T[P]> }
  : T;

type Paths11252<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11252<K, Paths11252<T[K], Prev11252[D]>> : never }[keyof T]
  : never;

type Prev11252 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11252<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11252 {
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

type ConfigPaths11252 = Paths11252<NestedConfig11252>;

interface HeavyProps11252 {
  config: DeepPartial11252<NestedConfig11252>;
  path?: ConfigPaths11252;
}

const HeavyComponent11252 = memo(function HeavyComponent11252({ config }: HeavyProps11252) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11252) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11252 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11252: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11252.displayName = 'HeavyComponent11252';
export default HeavyComponent11252;
