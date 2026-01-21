'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7225<T> = T extends (infer U)[]
  ? DeepReadonlyArray7225<U>
  : T extends object
  ? DeepReadonlyObject7225<T>
  : T;

interface DeepReadonlyArray7225<T> extends ReadonlyArray<DeepReadonly7225<T>> {}

type DeepReadonlyObject7225<T> = {
  readonly [P in keyof T]: DeepReadonly7225<T[P]>;
};

type UnionToIntersection7225<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7225<T> = UnionToIntersection7225<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7225<T extends unknown[], V> = [...T, V];

type TuplifyUnion7225<T, L = LastOf7225<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7225<TuplifyUnion7225<Exclude<T, L>>, L>;

type DeepPartial7225<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7225<T[P]> }
  : T;

type Paths7225<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7225<K, Paths7225<T[K], Prev7225[D]>> : never }[keyof T]
  : never;

type Prev7225 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7225<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7225 {
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

type ConfigPaths7225 = Paths7225<NestedConfig7225>;

interface HeavyProps7225 {
  config: DeepPartial7225<NestedConfig7225>;
  path?: ConfigPaths7225;
}

const HeavyComponent7225 = memo(function HeavyComponent7225({ config }: HeavyProps7225) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7225) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7225 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7225: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7225.displayName = 'HeavyComponent7225';
export default HeavyComponent7225;
