'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12841<T> = T extends (infer U)[]
  ? DeepReadonlyArray12841<U>
  : T extends object
  ? DeepReadonlyObject12841<T>
  : T;

interface DeepReadonlyArray12841<T> extends ReadonlyArray<DeepReadonly12841<T>> {}

type DeepReadonlyObject12841<T> = {
  readonly [P in keyof T]: DeepReadonly12841<T[P]>;
};

type UnionToIntersection12841<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12841<T> = UnionToIntersection12841<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12841<T extends unknown[], V> = [...T, V];

type TuplifyUnion12841<T, L = LastOf12841<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12841<TuplifyUnion12841<Exclude<T, L>>, L>;

type DeepPartial12841<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12841<T[P]> }
  : T;

type Paths12841<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12841<K, Paths12841<T[K], Prev12841[D]>> : never }[keyof T]
  : never;

type Prev12841 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12841<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12841 {
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

type ConfigPaths12841 = Paths12841<NestedConfig12841>;

interface HeavyProps12841 {
  config: DeepPartial12841<NestedConfig12841>;
  path?: ConfigPaths12841;
}

const HeavyComponent12841 = memo(function HeavyComponent12841({ config }: HeavyProps12841) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12841) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12841 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12841: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12841.displayName = 'HeavyComponent12841';
export default HeavyComponent12841;
