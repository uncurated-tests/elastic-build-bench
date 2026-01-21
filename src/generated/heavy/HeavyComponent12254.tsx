'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12254<T> = T extends (infer U)[]
  ? DeepReadonlyArray12254<U>
  : T extends object
  ? DeepReadonlyObject12254<T>
  : T;

interface DeepReadonlyArray12254<T> extends ReadonlyArray<DeepReadonly12254<T>> {}

type DeepReadonlyObject12254<T> = {
  readonly [P in keyof T]: DeepReadonly12254<T[P]>;
};

type UnionToIntersection12254<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12254<T> = UnionToIntersection12254<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12254<T extends unknown[], V> = [...T, V];

type TuplifyUnion12254<T, L = LastOf12254<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12254<TuplifyUnion12254<Exclude<T, L>>, L>;

type DeepPartial12254<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12254<T[P]> }
  : T;

type Paths12254<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12254<K, Paths12254<T[K], Prev12254[D]>> : never }[keyof T]
  : never;

type Prev12254 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12254<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12254 {
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

type ConfigPaths12254 = Paths12254<NestedConfig12254>;

interface HeavyProps12254 {
  config: DeepPartial12254<NestedConfig12254>;
  path?: ConfigPaths12254;
}

const HeavyComponent12254 = memo(function HeavyComponent12254({ config }: HeavyProps12254) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12254) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12254 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12254: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12254.displayName = 'HeavyComponent12254';
export default HeavyComponent12254;
