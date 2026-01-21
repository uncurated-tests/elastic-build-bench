'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12851<T> = T extends (infer U)[]
  ? DeepReadonlyArray12851<U>
  : T extends object
  ? DeepReadonlyObject12851<T>
  : T;

interface DeepReadonlyArray12851<T> extends ReadonlyArray<DeepReadonly12851<T>> {}

type DeepReadonlyObject12851<T> = {
  readonly [P in keyof T]: DeepReadonly12851<T[P]>;
};

type UnionToIntersection12851<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12851<T> = UnionToIntersection12851<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12851<T extends unknown[], V> = [...T, V];

type TuplifyUnion12851<T, L = LastOf12851<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12851<TuplifyUnion12851<Exclude<T, L>>, L>;

type DeepPartial12851<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12851<T[P]> }
  : T;

type Paths12851<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12851<K, Paths12851<T[K], Prev12851[D]>> : never }[keyof T]
  : never;

type Prev12851 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12851<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12851 {
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

type ConfigPaths12851 = Paths12851<NestedConfig12851>;

interface HeavyProps12851 {
  config: DeepPartial12851<NestedConfig12851>;
  path?: ConfigPaths12851;
}

const HeavyComponent12851 = memo(function HeavyComponent12851({ config }: HeavyProps12851) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12851) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12851 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12851: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12851.displayName = 'HeavyComponent12851';
export default HeavyComponent12851;
