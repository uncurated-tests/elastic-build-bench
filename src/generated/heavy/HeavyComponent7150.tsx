'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7150<T> = T extends (infer U)[]
  ? DeepReadonlyArray7150<U>
  : T extends object
  ? DeepReadonlyObject7150<T>
  : T;

interface DeepReadonlyArray7150<T> extends ReadonlyArray<DeepReadonly7150<T>> {}

type DeepReadonlyObject7150<T> = {
  readonly [P in keyof T]: DeepReadonly7150<T[P]>;
};

type UnionToIntersection7150<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7150<T> = UnionToIntersection7150<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7150<T extends unknown[], V> = [...T, V];

type TuplifyUnion7150<T, L = LastOf7150<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7150<TuplifyUnion7150<Exclude<T, L>>, L>;

type DeepPartial7150<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7150<T[P]> }
  : T;

type Paths7150<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7150<K, Paths7150<T[K], Prev7150[D]>> : never }[keyof T]
  : never;

type Prev7150 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7150<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7150 {
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

type ConfigPaths7150 = Paths7150<NestedConfig7150>;

interface HeavyProps7150 {
  config: DeepPartial7150<NestedConfig7150>;
  path?: ConfigPaths7150;
}

const HeavyComponent7150 = memo(function HeavyComponent7150({ config }: HeavyProps7150) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7150) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7150 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7150: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7150.displayName = 'HeavyComponent7150';
export default HeavyComponent7150;
