'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12650<T> = T extends (infer U)[]
  ? DeepReadonlyArray12650<U>
  : T extends object
  ? DeepReadonlyObject12650<T>
  : T;

interface DeepReadonlyArray12650<T> extends ReadonlyArray<DeepReadonly12650<T>> {}

type DeepReadonlyObject12650<T> = {
  readonly [P in keyof T]: DeepReadonly12650<T[P]>;
};

type UnionToIntersection12650<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12650<T> = UnionToIntersection12650<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12650<T extends unknown[], V> = [...T, V];

type TuplifyUnion12650<T, L = LastOf12650<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12650<TuplifyUnion12650<Exclude<T, L>>, L>;

type DeepPartial12650<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12650<T[P]> }
  : T;

type Paths12650<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12650<K, Paths12650<T[K], Prev12650[D]>> : never }[keyof T]
  : never;

type Prev12650 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12650<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12650 {
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

type ConfigPaths12650 = Paths12650<NestedConfig12650>;

interface HeavyProps12650 {
  config: DeepPartial12650<NestedConfig12650>;
  path?: ConfigPaths12650;
}

const HeavyComponent12650 = memo(function HeavyComponent12650({ config }: HeavyProps12650) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12650) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12650 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12650: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12650.displayName = 'HeavyComponent12650';
export default HeavyComponent12650;
