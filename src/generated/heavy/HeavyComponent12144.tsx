'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12144<T> = T extends (infer U)[]
  ? DeepReadonlyArray12144<U>
  : T extends object
  ? DeepReadonlyObject12144<T>
  : T;

interface DeepReadonlyArray12144<T> extends ReadonlyArray<DeepReadonly12144<T>> {}

type DeepReadonlyObject12144<T> = {
  readonly [P in keyof T]: DeepReadonly12144<T[P]>;
};

type UnionToIntersection12144<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12144<T> = UnionToIntersection12144<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12144<T extends unknown[], V> = [...T, V];

type TuplifyUnion12144<T, L = LastOf12144<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12144<TuplifyUnion12144<Exclude<T, L>>, L>;

type DeepPartial12144<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12144<T[P]> }
  : T;

type Paths12144<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12144<K, Paths12144<T[K], Prev12144[D]>> : never }[keyof T]
  : never;

type Prev12144 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12144<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12144 {
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

type ConfigPaths12144 = Paths12144<NestedConfig12144>;

interface HeavyProps12144 {
  config: DeepPartial12144<NestedConfig12144>;
  path?: ConfigPaths12144;
}

const HeavyComponent12144 = memo(function HeavyComponent12144({ config }: HeavyProps12144) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12144) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12144 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12144: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12144.displayName = 'HeavyComponent12144';
export default HeavyComponent12144;
