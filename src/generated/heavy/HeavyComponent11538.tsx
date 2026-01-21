'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11538<T> = T extends (infer U)[]
  ? DeepReadonlyArray11538<U>
  : T extends object
  ? DeepReadonlyObject11538<T>
  : T;

interface DeepReadonlyArray11538<T> extends ReadonlyArray<DeepReadonly11538<T>> {}

type DeepReadonlyObject11538<T> = {
  readonly [P in keyof T]: DeepReadonly11538<T[P]>;
};

type UnionToIntersection11538<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11538<T> = UnionToIntersection11538<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11538<T extends unknown[], V> = [...T, V];

type TuplifyUnion11538<T, L = LastOf11538<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11538<TuplifyUnion11538<Exclude<T, L>>, L>;

type DeepPartial11538<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11538<T[P]> }
  : T;

type Paths11538<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11538<K, Paths11538<T[K], Prev11538[D]>> : never }[keyof T]
  : never;

type Prev11538 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11538<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11538 {
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

type ConfigPaths11538 = Paths11538<NestedConfig11538>;

interface HeavyProps11538 {
  config: DeepPartial11538<NestedConfig11538>;
  path?: ConfigPaths11538;
}

const HeavyComponent11538 = memo(function HeavyComponent11538({ config }: HeavyProps11538) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11538) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11538 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11538: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11538.displayName = 'HeavyComponent11538';
export default HeavyComponent11538;
