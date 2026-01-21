'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12951<T> = T extends (infer U)[]
  ? DeepReadonlyArray12951<U>
  : T extends object
  ? DeepReadonlyObject12951<T>
  : T;

interface DeepReadonlyArray12951<T> extends ReadonlyArray<DeepReadonly12951<T>> {}

type DeepReadonlyObject12951<T> = {
  readonly [P in keyof T]: DeepReadonly12951<T[P]>;
};

type UnionToIntersection12951<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12951<T> = UnionToIntersection12951<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12951<T extends unknown[], V> = [...T, V];

type TuplifyUnion12951<T, L = LastOf12951<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12951<TuplifyUnion12951<Exclude<T, L>>, L>;

type DeepPartial12951<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12951<T[P]> }
  : T;

type Paths12951<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12951<K, Paths12951<T[K], Prev12951[D]>> : never }[keyof T]
  : never;

type Prev12951 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12951<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12951 {
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

type ConfigPaths12951 = Paths12951<NestedConfig12951>;

interface HeavyProps12951 {
  config: DeepPartial12951<NestedConfig12951>;
  path?: ConfigPaths12951;
}

const HeavyComponent12951 = memo(function HeavyComponent12951({ config }: HeavyProps12951) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12951) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12951 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12951: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12951.displayName = 'HeavyComponent12951';
export default HeavyComponent12951;
