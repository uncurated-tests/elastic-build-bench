'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12893<T> = T extends (infer U)[]
  ? DeepReadonlyArray12893<U>
  : T extends object
  ? DeepReadonlyObject12893<T>
  : T;

interface DeepReadonlyArray12893<T> extends ReadonlyArray<DeepReadonly12893<T>> {}

type DeepReadonlyObject12893<T> = {
  readonly [P in keyof T]: DeepReadonly12893<T[P]>;
};

type UnionToIntersection12893<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12893<T> = UnionToIntersection12893<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12893<T extends unknown[], V> = [...T, V];

type TuplifyUnion12893<T, L = LastOf12893<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12893<TuplifyUnion12893<Exclude<T, L>>, L>;

type DeepPartial12893<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12893<T[P]> }
  : T;

type Paths12893<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12893<K, Paths12893<T[K], Prev12893[D]>> : never }[keyof T]
  : never;

type Prev12893 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12893<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12893 {
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

type ConfigPaths12893 = Paths12893<NestedConfig12893>;

interface HeavyProps12893 {
  config: DeepPartial12893<NestedConfig12893>;
  path?: ConfigPaths12893;
}

const HeavyComponent12893 = memo(function HeavyComponent12893({ config }: HeavyProps12893) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12893) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12893 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12893: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12893.displayName = 'HeavyComponent12893';
export default HeavyComponent12893;
