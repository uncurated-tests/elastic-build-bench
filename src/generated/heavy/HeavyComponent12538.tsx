'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12538<T> = T extends (infer U)[]
  ? DeepReadonlyArray12538<U>
  : T extends object
  ? DeepReadonlyObject12538<T>
  : T;

interface DeepReadonlyArray12538<T> extends ReadonlyArray<DeepReadonly12538<T>> {}

type DeepReadonlyObject12538<T> = {
  readonly [P in keyof T]: DeepReadonly12538<T[P]>;
};

type UnionToIntersection12538<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12538<T> = UnionToIntersection12538<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12538<T extends unknown[], V> = [...T, V];

type TuplifyUnion12538<T, L = LastOf12538<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12538<TuplifyUnion12538<Exclude<T, L>>, L>;

type DeepPartial12538<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12538<T[P]> }
  : T;

type Paths12538<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12538<K, Paths12538<T[K], Prev12538[D]>> : never }[keyof T]
  : never;

type Prev12538 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12538<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12538 {
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

type ConfigPaths12538 = Paths12538<NestedConfig12538>;

interface HeavyProps12538 {
  config: DeepPartial12538<NestedConfig12538>;
  path?: ConfigPaths12538;
}

const HeavyComponent12538 = memo(function HeavyComponent12538({ config }: HeavyProps12538) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12538) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12538 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12538: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12538.displayName = 'HeavyComponent12538';
export default HeavyComponent12538;
