'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12152<T> = T extends (infer U)[]
  ? DeepReadonlyArray12152<U>
  : T extends object
  ? DeepReadonlyObject12152<T>
  : T;

interface DeepReadonlyArray12152<T> extends ReadonlyArray<DeepReadonly12152<T>> {}

type DeepReadonlyObject12152<T> = {
  readonly [P in keyof T]: DeepReadonly12152<T[P]>;
};

type UnionToIntersection12152<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12152<T> = UnionToIntersection12152<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12152<T extends unknown[], V> = [...T, V];

type TuplifyUnion12152<T, L = LastOf12152<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12152<TuplifyUnion12152<Exclude<T, L>>, L>;

type DeepPartial12152<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12152<T[P]> }
  : T;

type Paths12152<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12152<K, Paths12152<T[K], Prev12152[D]>> : never }[keyof T]
  : never;

type Prev12152 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12152<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12152 {
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

type ConfigPaths12152 = Paths12152<NestedConfig12152>;

interface HeavyProps12152 {
  config: DeepPartial12152<NestedConfig12152>;
  path?: ConfigPaths12152;
}

const HeavyComponent12152 = memo(function HeavyComponent12152({ config }: HeavyProps12152) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12152) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12152 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12152: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12152.displayName = 'HeavyComponent12152';
export default HeavyComponent12152;
