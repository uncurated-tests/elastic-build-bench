'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12567<T> = T extends (infer U)[]
  ? DeepReadonlyArray12567<U>
  : T extends object
  ? DeepReadonlyObject12567<T>
  : T;

interface DeepReadonlyArray12567<T> extends ReadonlyArray<DeepReadonly12567<T>> {}

type DeepReadonlyObject12567<T> = {
  readonly [P in keyof T]: DeepReadonly12567<T[P]>;
};

type UnionToIntersection12567<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12567<T> = UnionToIntersection12567<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12567<T extends unknown[], V> = [...T, V];

type TuplifyUnion12567<T, L = LastOf12567<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12567<TuplifyUnion12567<Exclude<T, L>>, L>;

type DeepPartial12567<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12567<T[P]> }
  : T;

type Paths12567<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12567<K, Paths12567<T[K], Prev12567[D]>> : never }[keyof T]
  : never;

type Prev12567 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12567<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12567 {
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

type ConfigPaths12567 = Paths12567<NestedConfig12567>;

interface HeavyProps12567 {
  config: DeepPartial12567<NestedConfig12567>;
  path?: ConfigPaths12567;
}

const HeavyComponent12567 = memo(function HeavyComponent12567({ config }: HeavyProps12567) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12567) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12567 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12567: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12567.displayName = 'HeavyComponent12567';
export default HeavyComponent12567;
