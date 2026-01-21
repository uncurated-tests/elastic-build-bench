'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7427<T> = T extends (infer U)[]
  ? DeepReadonlyArray7427<U>
  : T extends object
  ? DeepReadonlyObject7427<T>
  : T;

interface DeepReadonlyArray7427<T> extends ReadonlyArray<DeepReadonly7427<T>> {}

type DeepReadonlyObject7427<T> = {
  readonly [P in keyof T]: DeepReadonly7427<T[P]>;
};

type UnionToIntersection7427<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7427<T> = UnionToIntersection7427<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7427<T extends unknown[], V> = [...T, V];

type TuplifyUnion7427<T, L = LastOf7427<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7427<TuplifyUnion7427<Exclude<T, L>>, L>;

type DeepPartial7427<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7427<T[P]> }
  : T;

type Paths7427<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7427<K, Paths7427<T[K], Prev7427[D]>> : never }[keyof T]
  : never;

type Prev7427 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7427<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7427 {
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

type ConfigPaths7427 = Paths7427<NestedConfig7427>;

interface HeavyProps7427 {
  config: DeepPartial7427<NestedConfig7427>;
  path?: ConfigPaths7427;
}

const HeavyComponent7427 = memo(function HeavyComponent7427({ config }: HeavyProps7427) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7427) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7427 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7427: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7427.displayName = 'HeavyComponent7427';
export default HeavyComponent7427;
