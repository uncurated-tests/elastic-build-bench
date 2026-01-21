'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12611<T> = T extends (infer U)[]
  ? DeepReadonlyArray12611<U>
  : T extends object
  ? DeepReadonlyObject12611<T>
  : T;

interface DeepReadonlyArray12611<T> extends ReadonlyArray<DeepReadonly12611<T>> {}

type DeepReadonlyObject12611<T> = {
  readonly [P in keyof T]: DeepReadonly12611<T[P]>;
};

type UnionToIntersection12611<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12611<T> = UnionToIntersection12611<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12611<T extends unknown[], V> = [...T, V];

type TuplifyUnion12611<T, L = LastOf12611<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12611<TuplifyUnion12611<Exclude<T, L>>, L>;

type DeepPartial12611<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12611<T[P]> }
  : T;

type Paths12611<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12611<K, Paths12611<T[K], Prev12611[D]>> : never }[keyof T]
  : never;

type Prev12611 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12611<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12611 {
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

type ConfigPaths12611 = Paths12611<NestedConfig12611>;

interface HeavyProps12611 {
  config: DeepPartial12611<NestedConfig12611>;
  path?: ConfigPaths12611;
}

const HeavyComponent12611 = memo(function HeavyComponent12611({ config }: HeavyProps12611) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12611) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12611 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12611: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12611.displayName = 'HeavyComponent12611';
export default HeavyComponent12611;
