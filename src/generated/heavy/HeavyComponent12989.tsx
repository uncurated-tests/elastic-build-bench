'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12989<T> = T extends (infer U)[]
  ? DeepReadonlyArray12989<U>
  : T extends object
  ? DeepReadonlyObject12989<T>
  : T;

interface DeepReadonlyArray12989<T> extends ReadonlyArray<DeepReadonly12989<T>> {}

type DeepReadonlyObject12989<T> = {
  readonly [P in keyof T]: DeepReadonly12989<T[P]>;
};

type UnionToIntersection12989<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12989<T> = UnionToIntersection12989<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12989<T extends unknown[], V> = [...T, V];

type TuplifyUnion12989<T, L = LastOf12989<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12989<TuplifyUnion12989<Exclude<T, L>>, L>;

type DeepPartial12989<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12989<T[P]> }
  : T;

type Paths12989<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12989<K, Paths12989<T[K], Prev12989[D]>> : never }[keyof T]
  : never;

type Prev12989 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12989<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12989 {
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

type ConfigPaths12989 = Paths12989<NestedConfig12989>;

interface HeavyProps12989 {
  config: DeepPartial12989<NestedConfig12989>;
  path?: ConfigPaths12989;
}

const HeavyComponent12989 = memo(function HeavyComponent12989({ config }: HeavyProps12989) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12989) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12989 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12989: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12989.displayName = 'HeavyComponent12989';
export default HeavyComponent12989;
