'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12230<T> = T extends (infer U)[]
  ? DeepReadonlyArray12230<U>
  : T extends object
  ? DeepReadonlyObject12230<T>
  : T;

interface DeepReadonlyArray12230<T> extends ReadonlyArray<DeepReadonly12230<T>> {}

type DeepReadonlyObject12230<T> = {
  readonly [P in keyof T]: DeepReadonly12230<T[P]>;
};

type UnionToIntersection12230<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12230<T> = UnionToIntersection12230<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12230<T extends unknown[], V> = [...T, V];

type TuplifyUnion12230<T, L = LastOf12230<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12230<TuplifyUnion12230<Exclude<T, L>>, L>;

type DeepPartial12230<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12230<T[P]> }
  : T;

type Paths12230<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12230<K, Paths12230<T[K], Prev12230[D]>> : never }[keyof T]
  : never;

type Prev12230 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12230<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12230 {
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

type ConfigPaths12230 = Paths12230<NestedConfig12230>;

interface HeavyProps12230 {
  config: DeepPartial12230<NestedConfig12230>;
  path?: ConfigPaths12230;
}

const HeavyComponent12230 = memo(function HeavyComponent12230({ config }: HeavyProps12230) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12230) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12230 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12230: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12230.displayName = 'HeavyComponent12230';
export default HeavyComponent12230;
