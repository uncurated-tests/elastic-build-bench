'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7600<T> = T extends (infer U)[]
  ? DeepReadonlyArray7600<U>
  : T extends object
  ? DeepReadonlyObject7600<T>
  : T;

interface DeepReadonlyArray7600<T> extends ReadonlyArray<DeepReadonly7600<T>> {}

type DeepReadonlyObject7600<T> = {
  readonly [P in keyof T]: DeepReadonly7600<T[P]>;
};

type UnionToIntersection7600<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7600<T> = UnionToIntersection7600<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7600<T extends unknown[], V> = [...T, V];

type TuplifyUnion7600<T, L = LastOf7600<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7600<TuplifyUnion7600<Exclude<T, L>>, L>;

type DeepPartial7600<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7600<T[P]> }
  : T;

type Paths7600<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7600<K, Paths7600<T[K], Prev7600[D]>> : never }[keyof T]
  : never;

type Prev7600 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7600<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7600 {
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

type ConfigPaths7600 = Paths7600<NestedConfig7600>;

interface HeavyProps7600 {
  config: DeepPartial7600<NestedConfig7600>;
  path?: ConfigPaths7600;
}

const HeavyComponent7600 = memo(function HeavyComponent7600({ config }: HeavyProps7600) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7600) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7600 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7600: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7600.displayName = 'HeavyComponent7600';
export default HeavyComponent7600;
