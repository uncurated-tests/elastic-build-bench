'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12979<T> = T extends (infer U)[]
  ? DeepReadonlyArray12979<U>
  : T extends object
  ? DeepReadonlyObject12979<T>
  : T;

interface DeepReadonlyArray12979<T> extends ReadonlyArray<DeepReadonly12979<T>> {}

type DeepReadonlyObject12979<T> = {
  readonly [P in keyof T]: DeepReadonly12979<T[P]>;
};

type UnionToIntersection12979<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12979<T> = UnionToIntersection12979<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12979<T extends unknown[], V> = [...T, V];

type TuplifyUnion12979<T, L = LastOf12979<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12979<TuplifyUnion12979<Exclude<T, L>>, L>;

type DeepPartial12979<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12979<T[P]> }
  : T;

type Paths12979<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12979<K, Paths12979<T[K], Prev12979[D]>> : never }[keyof T]
  : never;

type Prev12979 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12979<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12979 {
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

type ConfigPaths12979 = Paths12979<NestedConfig12979>;

interface HeavyProps12979 {
  config: DeepPartial12979<NestedConfig12979>;
  path?: ConfigPaths12979;
}

const HeavyComponent12979 = memo(function HeavyComponent12979({ config }: HeavyProps12979) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12979) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12979 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12979: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12979.displayName = 'HeavyComponent12979';
export default HeavyComponent12979;
