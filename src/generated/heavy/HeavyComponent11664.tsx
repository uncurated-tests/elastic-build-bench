'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11664<T> = T extends (infer U)[]
  ? DeepReadonlyArray11664<U>
  : T extends object
  ? DeepReadonlyObject11664<T>
  : T;

interface DeepReadonlyArray11664<T> extends ReadonlyArray<DeepReadonly11664<T>> {}

type DeepReadonlyObject11664<T> = {
  readonly [P in keyof T]: DeepReadonly11664<T[P]>;
};

type UnionToIntersection11664<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11664<T> = UnionToIntersection11664<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11664<T extends unknown[], V> = [...T, V];

type TuplifyUnion11664<T, L = LastOf11664<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11664<TuplifyUnion11664<Exclude<T, L>>, L>;

type DeepPartial11664<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11664<T[P]> }
  : T;

type Paths11664<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11664<K, Paths11664<T[K], Prev11664[D]>> : never }[keyof T]
  : never;

type Prev11664 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11664<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11664 {
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

type ConfigPaths11664 = Paths11664<NestedConfig11664>;

interface HeavyProps11664 {
  config: DeepPartial11664<NestedConfig11664>;
  path?: ConfigPaths11664;
}

const HeavyComponent11664 = memo(function HeavyComponent11664({ config }: HeavyProps11664) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11664) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11664 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11664: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11664.displayName = 'HeavyComponent11664';
export default HeavyComponent11664;
