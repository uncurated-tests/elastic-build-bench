'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7001<T> = T extends (infer U)[]
  ? DeepReadonlyArray7001<U>
  : T extends object
  ? DeepReadonlyObject7001<T>
  : T;

interface DeepReadonlyArray7001<T> extends ReadonlyArray<DeepReadonly7001<T>> {}

type DeepReadonlyObject7001<T> = {
  readonly [P in keyof T]: DeepReadonly7001<T[P]>;
};

type UnionToIntersection7001<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7001<T> = UnionToIntersection7001<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7001<T extends unknown[], V> = [...T, V];

type TuplifyUnion7001<T, L = LastOf7001<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7001<TuplifyUnion7001<Exclude<T, L>>, L>;

type DeepPartial7001<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7001<T[P]> }
  : T;

type Paths7001<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7001<K, Paths7001<T[K], Prev7001[D]>> : never }[keyof T]
  : never;

type Prev7001 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7001<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7001 {
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

type ConfigPaths7001 = Paths7001<NestedConfig7001>;

interface HeavyProps7001 {
  config: DeepPartial7001<NestedConfig7001>;
  path?: ConfigPaths7001;
}

const HeavyComponent7001 = memo(function HeavyComponent7001({ config }: HeavyProps7001) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7001) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7001 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7001: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7001.displayName = 'HeavyComponent7001';
export default HeavyComponent7001;
