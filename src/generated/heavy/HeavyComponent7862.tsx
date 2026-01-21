'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7862<T> = T extends (infer U)[]
  ? DeepReadonlyArray7862<U>
  : T extends object
  ? DeepReadonlyObject7862<T>
  : T;

interface DeepReadonlyArray7862<T> extends ReadonlyArray<DeepReadonly7862<T>> {}

type DeepReadonlyObject7862<T> = {
  readonly [P in keyof T]: DeepReadonly7862<T[P]>;
};

type UnionToIntersection7862<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7862<T> = UnionToIntersection7862<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7862<T extends unknown[], V> = [...T, V];

type TuplifyUnion7862<T, L = LastOf7862<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7862<TuplifyUnion7862<Exclude<T, L>>, L>;

type DeepPartial7862<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7862<T[P]> }
  : T;

type Paths7862<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7862<K, Paths7862<T[K], Prev7862[D]>> : never }[keyof T]
  : never;

type Prev7862 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7862<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7862 {
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

type ConfigPaths7862 = Paths7862<NestedConfig7862>;

interface HeavyProps7862 {
  config: DeepPartial7862<NestedConfig7862>;
  path?: ConfigPaths7862;
}

const HeavyComponent7862 = memo(function HeavyComponent7862({ config }: HeavyProps7862) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7862) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7862 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7862: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7862.displayName = 'HeavyComponent7862';
export default HeavyComponent7862;
