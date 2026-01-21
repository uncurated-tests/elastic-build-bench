'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12854<T> = T extends (infer U)[]
  ? DeepReadonlyArray12854<U>
  : T extends object
  ? DeepReadonlyObject12854<T>
  : T;

interface DeepReadonlyArray12854<T> extends ReadonlyArray<DeepReadonly12854<T>> {}

type DeepReadonlyObject12854<T> = {
  readonly [P in keyof T]: DeepReadonly12854<T[P]>;
};

type UnionToIntersection12854<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12854<T> = UnionToIntersection12854<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12854<T extends unknown[], V> = [...T, V];

type TuplifyUnion12854<T, L = LastOf12854<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12854<TuplifyUnion12854<Exclude<T, L>>, L>;

type DeepPartial12854<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12854<T[P]> }
  : T;

type Paths12854<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12854<K, Paths12854<T[K], Prev12854[D]>> : never }[keyof T]
  : never;

type Prev12854 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12854<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12854 {
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

type ConfigPaths12854 = Paths12854<NestedConfig12854>;

interface HeavyProps12854 {
  config: DeepPartial12854<NestedConfig12854>;
  path?: ConfigPaths12854;
}

const HeavyComponent12854 = memo(function HeavyComponent12854({ config }: HeavyProps12854) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12854) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12854 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12854: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12854.displayName = 'HeavyComponent12854';
export default HeavyComponent12854;
