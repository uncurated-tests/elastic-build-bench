'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12040<T> = T extends (infer U)[]
  ? DeepReadonlyArray12040<U>
  : T extends object
  ? DeepReadonlyObject12040<T>
  : T;

interface DeepReadonlyArray12040<T> extends ReadonlyArray<DeepReadonly12040<T>> {}

type DeepReadonlyObject12040<T> = {
  readonly [P in keyof T]: DeepReadonly12040<T[P]>;
};

type UnionToIntersection12040<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12040<T> = UnionToIntersection12040<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12040<T extends unknown[], V> = [...T, V];

type TuplifyUnion12040<T, L = LastOf12040<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12040<TuplifyUnion12040<Exclude<T, L>>, L>;

type DeepPartial12040<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12040<T[P]> }
  : T;

type Paths12040<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12040<K, Paths12040<T[K], Prev12040[D]>> : never }[keyof T]
  : never;

type Prev12040 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12040<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12040 {
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

type ConfigPaths12040 = Paths12040<NestedConfig12040>;

interface HeavyProps12040 {
  config: DeepPartial12040<NestedConfig12040>;
  path?: ConfigPaths12040;
}

const HeavyComponent12040 = memo(function HeavyComponent12040({ config }: HeavyProps12040) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12040) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12040 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12040: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12040.displayName = 'HeavyComponent12040';
export default HeavyComponent12040;
