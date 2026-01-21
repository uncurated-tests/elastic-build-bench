'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12551<T> = T extends (infer U)[]
  ? DeepReadonlyArray12551<U>
  : T extends object
  ? DeepReadonlyObject12551<T>
  : T;

interface DeepReadonlyArray12551<T> extends ReadonlyArray<DeepReadonly12551<T>> {}

type DeepReadonlyObject12551<T> = {
  readonly [P in keyof T]: DeepReadonly12551<T[P]>;
};

type UnionToIntersection12551<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12551<T> = UnionToIntersection12551<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12551<T extends unknown[], V> = [...T, V];

type TuplifyUnion12551<T, L = LastOf12551<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12551<TuplifyUnion12551<Exclude<T, L>>, L>;

type DeepPartial12551<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12551<T[P]> }
  : T;

type Paths12551<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12551<K, Paths12551<T[K], Prev12551[D]>> : never }[keyof T]
  : never;

type Prev12551 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12551<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12551 {
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

type ConfigPaths12551 = Paths12551<NestedConfig12551>;

interface HeavyProps12551 {
  config: DeepPartial12551<NestedConfig12551>;
  path?: ConfigPaths12551;
}

const HeavyComponent12551 = memo(function HeavyComponent12551({ config }: HeavyProps12551) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12551) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12551 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12551: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12551.displayName = 'HeavyComponent12551';
export default HeavyComponent12551;
