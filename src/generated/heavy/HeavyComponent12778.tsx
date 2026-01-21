'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12778<T> = T extends (infer U)[]
  ? DeepReadonlyArray12778<U>
  : T extends object
  ? DeepReadonlyObject12778<T>
  : T;

interface DeepReadonlyArray12778<T> extends ReadonlyArray<DeepReadonly12778<T>> {}

type DeepReadonlyObject12778<T> = {
  readonly [P in keyof T]: DeepReadonly12778<T[P]>;
};

type UnionToIntersection12778<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12778<T> = UnionToIntersection12778<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12778<T extends unknown[], V> = [...T, V];

type TuplifyUnion12778<T, L = LastOf12778<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12778<TuplifyUnion12778<Exclude<T, L>>, L>;

type DeepPartial12778<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12778<T[P]> }
  : T;

type Paths12778<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12778<K, Paths12778<T[K], Prev12778[D]>> : never }[keyof T]
  : never;

type Prev12778 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12778<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12778 {
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

type ConfigPaths12778 = Paths12778<NestedConfig12778>;

interface HeavyProps12778 {
  config: DeepPartial12778<NestedConfig12778>;
  path?: ConfigPaths12778;
}

const HeavyComponent12778 = memo(function HeavyComponent12778({ config }: HeavyProps12778) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12778) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12778 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12778: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12778.displayName = 'HeavyComponent12778';
export default HeavyComponent12778;
