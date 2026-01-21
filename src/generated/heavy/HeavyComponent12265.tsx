'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12265<T> = T extends (infer U)[]
  ? DeepReadonlyArray12265<U>
  : T extends object
  ? DeepReadonlyObject12265<T>
  : T;

interface DeepReadonlyArray12265<T> extends ReadonlyArray<DeepReadonly12265<T>> {}

type DeepReadonlyObject12265<T> = {
  readonly [P in keyof T]: DeepReadonly12265<T[P]>;
};

type UnionToIntersection12265<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12265<T> = UnionToIntersection12265<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12265<T extends unknown[], V> = [...T, V];

type TuplifyUnion12265<T, L = LastOf12265<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12265<TuplifyUnion12265<Exclude<T, L>>, L>;

type DeepPartial12265<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12265<T[P]> }
  : T;

type Paths12265<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12265<K, Paths12265<T[K], Prev12265[D]>> : never }[keyof T]
  : never;

type Prev12265 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12265<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12265 {
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

type ConfigPaths12265 = Paths12265<NestedConfig12265>;

interface HeavyProps12265 {
  config: DeepPartial12265<NestedConfig12265>;
  path?: ConfigPaths12265;
}

const HeavyComponent12265 = memo(function HeavyComponent12265({ config }: HeavyProps12265) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12265) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12265 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12265: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12265.displayName = 'HeavyComponent12265';
export default HeavyComponent12265;
