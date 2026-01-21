'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12571<T> = T extends (infer U)[]
  ? DeepReadonlyArray12571<U>
  : T extends object
  ? DeepReadonlyObject12571<T>
  : T;

interface DeepReadonlyArray12571<T> extends ReadonlyArray<DeepReadonly12571<T>> {}

type DeepReadonlyObject12571<T> = {
  readonly [P in keyof T]: DeepReadonly12571<T[P]>;
};

type UnionToIntersection12571<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12571<T> = UnionToIntersection12571<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12571<T extends unknown[], V> = [...T, V];

type TuplifyUnion12571<T, L = LastOf12571<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12571<TuplifyUnion12571<Exclude<T, L>>, L>;

type DeepPartial12571<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12571<T[P]> }
  : T;

type Paths12571<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12571<K, Paths12571<T[K], Prev12571[D]>> : never }[keyof T]
  : never;

type Prev12571 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12571<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12571 {
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

type ConfigPaths12571 = Paths12571<NestedConfig12571>;

interface HeavyProps12571 {
  config: DeepPartial12571<NestedConfig12571>;
  path?: ConfigPaths12571;
}

const HeavyComponent12571 = memo(function HeavyComponent12571({ config }: HeavyProps12571) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12571) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12571 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12571: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12571.displayName = 'HeavyComponent12571';
export default HeavyComponent12571;
