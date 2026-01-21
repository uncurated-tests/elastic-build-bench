'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12765<T> = T extends (infer U)[]
  ? DeepReadonlyArray12765<U>
  : T extends object
  ? DeepReadonlyObject12765<T>
  : T;

interface DeepReadonlyArray12765<T> extends ReadonlyArray<DeepReadonly12765<T>> {}

type DeepReadonlyObject12765<T> = {
  readonly [P in keyof T]: DeepReadonly12765<T[P]>;
};

type UnionToIntersection12765<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12765<T> = UnionToIntersection12765<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12765<T extends unknown[], V> = [...T, V];

type TuplifyUnion12765<T, L = LastOf12765<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12765<TuplifyUnion12765<Exclude<T, L>>, L>;

type DeepPartial12765<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12765<T[P]> }
  : T;

type Paths12765<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12765<K, Paths12765<T[K], Prev12765[D]>> : never }[keyof T]
  : never;

type Prev12765 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12765<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12765 {
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

type ConfigPaths12765 = Paths12765<NestedConfig12765>;

interface HeavyProps12765 {
  config: DeepPartial12765<NestedConfig12765>;
  path?: ConfigPaths12765;
}

const HeavyComponent12765 = memo(function HeavyComponent12765({ config }: HeavyProps12765) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12765) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12765 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12765: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12765.displayName = 'HeavyComponent12765';
export default HeavyComponent12765;
