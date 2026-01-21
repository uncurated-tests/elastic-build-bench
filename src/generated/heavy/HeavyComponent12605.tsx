'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12605<T> = T extends (infer U)[]
  ? DeepReadonlyArray12605<U>
  : T extends object
  ? DeepReadonlyObject12605<T>
  : T;

interface DeepReadonlyArray12605<T> extends ReadonlyArray<DeepReadonly12605<T>> {}

type DeepReadonlyObject12605<T> = {
  readonly [P in keyof T]: DeepReadonly12605<T[P]>;
};

type UnionToIntersection12605<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12605<T> = UnionToIntersection12605<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12605<T extends unknown[], V> = [...T, V];

type TuplifyUnion12605<T, L = LastOf12605<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12605<TuplifyUnion12605<Exclude<T, L>>, L>;

type DeepPartial12605<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12605<T[P]> }
  : T;

type Paths12605<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12605<K, Paths12605<T[K], Prev12605[D]>> : never }[keyof T]
  : never;

type Prev12605 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12605<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12605 {
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

type ConfigPaths12605 = Paths12605<NestedConfig12605>;

interface HeavyProps12605 {
  config: DeepPartial12605<NestedConfig12605>;
  path?: ConfigPaths12605;
}

const HeavyComponent12605 = memo(function HeavyComponent12605({ config }: HeavyProps12605) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12605) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12605 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12605: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12605.displayName = 'HeavyComponent12605';
export default HeavyComponent12605;
