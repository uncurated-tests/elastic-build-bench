'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11870<T> = T extends (infer U)[]
  ? DeepReadonlyArray11870<U>
  : T extends object
  ? DeepReadonlyObject11870<T>
  : T;

interface DeepReadonlyArray11870<T> extends ReadonlyArray<DeepReadonly11870<T>> {}

type DeepReadonlyObject11870<T> = {
  readonly [P in keyof T]: DeepReadonly11870<T[P]>;
};

type UnionToIntersection11870<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11870<T> = UnionToIntersection11870<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11870<T extends unknown[], V> = [...T, V];

type TuplifyUnion11870<T, L = LastOf11870<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11870<TuplifyUnion11870<Exclude<T, L>>, L>;

type DeepPartial11870<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11870<T[P]> }
  : T;

type Paths11870<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11870<K, Paths11870<T[K], Prev11870[D]>> : never }[keyof T]
  : never;

type Prev11870 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11870<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11870 {
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

type ConfigPaths11870 = Paths11870<NestedConfig11870>;

interface HeavyProps11870 {
  config: DeepPartial11870<NestedConfig11870>;
  path?: ConfigPaths11870;
}

const HeavyComponent11870 = memo(function HeavyComponent11870({ config }: HeavyProps11870) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11870) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11870 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11870: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11870.displayName = 'HeavyComponent11870';
export default HeavyComponent11870;
