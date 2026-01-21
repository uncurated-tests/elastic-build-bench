'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7814<T> = T extends (infer U)[]
  ? DeepReadonlyArray7814<U>
  : T extends object
  ? DeepReadonlyObject7814<T>
  : T;

interface DeepReadonlyArray7814<T> extends ReadonlyArray<DeepReadonly7814<T>> {}

type DeepReadonlyObject7814<T> = {
  readonly [P in keyof T]: DeepReadonly7814<T[P]>;
};

type UnionToIntersection7814<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7814<T> = UnionToIntersection7814<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7814<T extends unknown[], V> = [...T, V];

type TuplifyUnion7814<T, L = LastOf7814<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7814<TuplifyUnion7814<Exclude<T, L>>, L>;

type DeepPartial7814<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7814<T[P]> }
  : T;

type Paths7814<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7814<K, Paths7814<T[K], Prev7814[D]>> : never }[keyof T]
  : never;

type Prev7814 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7814<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7814 {
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

type ConfigPaths7814 = Paths7814<NestedConfig7814>;

interface HeavyProps7814 {
  config: DeepPartial7814<NestedConfig7814>;
  path?: ConfigPaths7814;
}

const HeavyComponent7814 = memo(function HeavyComponent7814({ config }: HeavyProps7814) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7814) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7814 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7814: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7814.displayName = 'HeavyComponent7814';
export default HeavyComponent7814;
