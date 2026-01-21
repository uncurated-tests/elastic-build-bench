'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7493<T> = T extends (infer U)[]
  ? DeepReadonlyArray7493<U>
  : T extends object
  ? DeepReadonlyObject7493<T>
  : T;

interface DeepReadonlyArray7493<T> extends ReadonlyArray<DeepReadonly7493<T>> {}

type DeepReadonlyObject7493<T> = {
  readonly [P in keyof T]: DeepReadonly7493<T[P]>;
};

type UnionToIntersection7493<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7493<T> = UnionToIntersection7493<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7493<T extends unknown[], V> = [...T, V];

type TuplifyUnion7493<T, L = LastOf7493<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7493<TuplifyUnion7493<Exclude<T, L>>, L>;

type DeepPartial7493<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7493<T[P]> }
  : T;

type Paths7493<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7493<K, Paths7493<T[K], Prev7493[D]>> : never }[keyof T]
  : never;

type Prev7493 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7493<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7493 {
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

type ConfigPaths7493 = Paths7493<NestedConfig7493>;

interface HeavyProps7493 {
  config: DeepPartial7493<NestedConfig7493>;
  path?: ConfigPaths7493;
}

const HeavyComponent7493 = memo(function HeavyComponent7493({ config }: HeavyProps7493) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7493) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7493 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7493: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7493.displayName = 'HeavyComponent7493';
export default HeavyComponent7493;
