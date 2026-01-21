'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7860<T> = T extends (infer U)[]
  ? DeepReadonlyArray7860<U>
  : T extends object
  ? DeepReadonlyObject7860<T>
  : T;

interface DeepReadonlyArray7860<T> extends ReadonlyArray<DeepReadonly7860<T>> {}

type DeepReadonlyObject7860<T> = {
  readonly [P in keyof T]: DeepReadonly7860<T[P]>;
};

type UnionToIntersection7860<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7860<T> = UnionToIntersection7860<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7860<T extends unknown[], V> = [...T, V];

type TuplifyUnion7860<T, L = LastOf7860<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7860<TuplifyUnion7860<Exclude<T, L>>, L>;

type DeepPartial7860<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7860<T[P]> }
  : T;

type Paths7860<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7860<K, Paths7860<T[K], Prev7860[D]>> : never }[keyof T]
  : never;

type Prev7860 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7860<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7860 {
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

type ConfigPaths7860 = Paths7860<NestedConfig7860>;

interface HeavyProps7860 {
  config: DeepPartial7860<NestedConfig7860>;
  path?: ConfigPaths7860;
}

const HeavyComponent7860 = memo(function HeavyComponent7860({ config }: HeavyProps7860) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7860) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7860 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7860: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7860.displayName = 'HeavyComponent7860';
export default HeavyComponent7860;
