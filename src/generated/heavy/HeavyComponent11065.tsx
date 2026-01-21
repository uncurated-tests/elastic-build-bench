'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11065<T> = T extends (infer U)[]
  ? DeepReadonlyArray11065<U>
  : T extends object
  ? DeepReadonlyObject11065<T>
  : T;

interface DeepReadonlyArray11065<T> extends ReadonlyArray<DeepReadonly11065<T>> {}

type DeepReadonlyObject11065<T> = {
  readonly [P in keyof T]: DeepReadonly11065<T[P]>;
};

type UnionToIntersection11065<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11065<T> = UnionToIntersection11065<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11065<T extends unknown[], V> = [...T, V];

type TuplifyUnion11065<T, L = LastOf11065<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11065<TuplifyUnion11065<Exclude<T, L>>, L>;

type DeepPartial11065<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11065<T[P]> }
  : T;

type Paths11065<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11065<K, Paths11065<T[K], Prev11065[D]>> : never }[keyof T]
  : never;

type Prev11065 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11065<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11065 {
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

type ConfigPaths11065 = Paths11065<NestedConfig11065>;

interface HeavyProps11065 {
  config: DeepPartial11065<NestedConfig11065>;
  path?: ConfigPaths11065;
}

const HeavyComponent11065 = memo(function HeavyComponent11065({ config }: HeavyProps11065) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11065) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11065 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11065: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11065.displayName = 'HeavyComponent11065';
export default HeavyComponent11065;
