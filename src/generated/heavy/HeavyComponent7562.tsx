'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7562<T> = T extends (infer U)[]
  ? DeepReadonlyArray7562<U>
  : T extends object
  ? DeepReadonlyObject7562<T>
  : T;

interface DeepReadonlyArray7562<T> extends ReadonlyArray<DeepReadonly7562<T>> {}

type DeepReadonlyObject7562<T> = {
  readonly [P in keyof T]: DeepReadonly7562<T[P]>;
};

type UnionToIntersection7562<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7562<T> = UnionToIntersection7562<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7562<T extends unknown[], V> = [...T, V];

type TuplifyUnion7562<T, L = LastOf7562<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7562<TuplifyUnion7562<Exclude<T, L>>, L>;

type DeepPartial7562<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7562<T[P]> }
  : T;

type Paths7562<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7562<K, Paths7562<T[K], Prev7562[D]>> : never }[keyof T]
  : never;

type Prev7562 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7562<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7562 {
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

type ConfigPaths7562 = Paths7562<NestedConfig7562>;

interface HeavyProps7562 {
  config: DeepPartial7562<NestedConfig7562>;
  path?: ConfigPaths7562;
}

const HeavyComponent7562 = memo(function HeavyComponent7562({ config }: HeavyProps7562) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7562) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7562 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7562: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7562.displayName = 'HeavyComponent7562';
export default HeavyComponent7562;
