'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12140<T> = T extends (infer U)[]
  ? DeepReadonlyArray12140<U>
  : T extends object
  ? DeepReadonlyObject12140<T>
  : T;

interface DeepReadonlyArray12140<T> extends ReadonlyArray<DeepReadonly12140<T>> {}

type DeepReadonlyObject12140<T> = {
  readonly [P in keyof T]: DeepReadonly12140<T[P]>;
};

type UnionToIntersection12140<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12140<T> = UnionToIntersection12140<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12140<T extends unknown[], V> = [...T, V];

type TuplifyUnion12140<T, L = LastOf12140<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12140<TuplifyUnion12140<Exclude<T, L>>, L>;

type DeepPartial12140<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12140<T[P]> }
  : T;

type Paths12140<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12140<K, Paths12140<T[K], Prev12140[D]>> : never }[keyof T]
  : never;

type Prev12140 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12140<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12140 {
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

type ConfigPaths12140 = Paths12140<NestedConfig12140>;

interface HeavyProps12140 {
  config: DeepPartial12140<NestedConfig12140>;
  path?: ConfigPaths12140;
}

const HeavyComponent12140 = memo(function HeavyComponent12140({ config }: HeavyProps12140) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12140) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12140 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12140: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12140.displayName = 'HeavyComponent12140';
export default HeavyComponent12140;
