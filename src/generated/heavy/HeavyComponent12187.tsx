'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12187<T> = T extends (infer U)[]
  ? DeepReadonlyArray12187<U>
  : T extends object
  ? DeepReadonlyObject12187<T>
  : T;

interface DeepReadonlyArray12187<T> extends ReadonlyArray<DeepReadonly12187<T>> {}

type DeepReadonlyObject12187<T> = {
  readonly [P in keyof T]: DeepReadonly12187<T[P]>;
};

type UnionToIntersection12187<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12187<T> = UnionToIntersection12187<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12187<T extends unknown[], V> = [...T, V];

type TuplifyUnion12187<T, L = LastOf12187<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12187<TuplifyUnion12187<Exclude<T, L>>, L>;

type DeepPartial12187<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12187<T[P]> }
  : T;

type Paths12187<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12187<K, Paths12187<T[K], Prev12187[D]>> : never }[keyof T]
  : never;

type Prev12187 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12187<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12187 {
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

type ConfigPaths12187 = Paths12187<NestedConfig12187>;

interface HeavyProps12187 {
  config: DeepPartial12187<NestedConfig12187>;
  path?: ConfigPaths12187;
}

const HeavyComponent12187 = memo(function HeavyComponent12187({ config }: HeavyProps12187) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12187) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12187 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12187: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12187.displayName = 'HeavyComponent12187';
export default HeavyComponent12187;
