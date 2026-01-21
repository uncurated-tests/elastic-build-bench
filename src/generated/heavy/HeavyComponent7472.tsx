'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7472<T> = T extends (infer U)[]
  ? DeepReadonlyArray7472<U>
  : T extends object
  ? DeepReadonlyObject7472<T>
  : T;

interface DeepReadonlyArray7472<T> extends ReadonlyArray<DeepReadonly7472<T>> {}

type DeepReadonlyObject7472<T> = {
  readonly [P in keyof T]: DeepReadonly7472<T[P]>;
};

type UnionToIntersection7472<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7472<T> = UnionToIntersection7472<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7472<T extends unknown[], V> = [...T, V];

type TuplifyUnion7472<T, L = LastOf7472<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7472<TuplifyUnion7472<Exclude<T, L>>, L>;

type DeepPartial7472<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7472<T[P]> }
  : T;

type Paths7472<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7472<K, Paths7472<T[K], Prev7472[D]>> : never }[keyof T]
  : never;

type Prev7472 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7472<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7472 {
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

type ConfigPaths7472 = Paths7472<NestedConfig7472>;

interface HeavyProps7472 {
  config: DeepPartial7472<NestedConfig7472>;
  path?: ConfigPaths7472;
}

const HeavyComponent7472 = memo(function HeavyComponent7472({ config }: HeavyProps7472) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7472) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7472 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7472: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7472.displayName = 'HeavyComponent7472';
export default HeavyComponent7472;
