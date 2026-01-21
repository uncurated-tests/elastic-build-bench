'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12657<T> = T extends (infer U)[]
  ? DeepReadonlyArray12657<U>
  : T extends object
  ? DeepReadonlyObject12657<T>
  : T;

interface DeepReadonlyArray12657<T> extends ReadonlyArray<DeepReadonly12657<T>> {}

type DeepReadonlyObject12657<T> = {
  readonly [P in keyof T]: DeepReadonly12657<T[P]>;
};

type UnionToIntersection12657<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12657<T> = UnionToIntersection12657<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12657<T extends unknown[], V> = [...T, V];

type TuplifyUnion12657<T, L = LastOf12657<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12657<TuplifyUnion12657<Exclude<T, L>>, L>;

type DeepPartial12657<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12657<T[P]> }
  : T;

type Paths12657<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12657<K, Paths12657<T[K], Prev12657[D]>> : never }[keyof T]
  : never;

type Prev12657 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12657<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12657 {
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

type ConfigPaths12657 = Paths12657<NestedConfig12657>;

interface HeavyProps12657 {
  config: DeepPartial12657<NestedConfig12657>;
  path?: ConfigPaths12657;
}

const HeavyComponent12657 = memo(function HeavyComponent12657({ config }: HeavyProps12657) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12657) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12657 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12657: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12657.displayName = 'HeavyComponent12657';
export default HeavyComponent12657;
