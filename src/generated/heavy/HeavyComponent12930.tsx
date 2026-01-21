'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12930<T> = T extends (infer U)[]
  ? DeepReadonlyArray12930<U>
  : T extends object
  ? DeepReadonlyObject12930<T>
  : T;

interface DeepReadonlyArray12930<T> extends ReadonlyArray<DeepReadonly12930<T>> {}

type DeepReadonlyObject12930<T> = {
  readonly [P in keyof T]: DeepReadonly12930<T[P]>;
};

type UnionToIntersection12930<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12930<T> = UnionToIntersection12930<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12930<T extends unknown[], V> = [...T, V];

type TuplifyUnion12930<T, L = LastOf12930<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12930<TuplifyUnion12930<Exclude<T, L>>, L>;

type DeepPartial12930<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12930<T[P]> }
  : T;

type Paths12930<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12930<K, Paths12930<T[K], Prev12930[D]>> : never }[keyof T]
  : never;

type Prev12930 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12930<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12930 {
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

type ConfigPaths12930 = Paths12930<NestedConfig12930>;

interface HeavyProps12930 {
  config: DeepPartial12930<NestedConfig12930>;
  path?: ConfigPaths12930;
}

const HeavyComponent12930 = memo(function HeavyComponent12930({ config }: HeavyProps12930) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12930) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12930 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12930: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12930.displayName = 'HeavyComponent12930';
export default HeavyComponent12930;
