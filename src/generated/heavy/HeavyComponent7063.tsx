'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7063<T> = T extends (infer U)[]
  ? DeepReadonlyArray7063<U>
  : T extends object
  ? DeepReadonlyObject7063<T>
  : T;

interface DeepReadonlyArray7063<T> extends ReadonlyArray<DeepReadonly7063<T>> {}

type DeepReadonlyObject7063<T> = {
  readonly [P in keyof T]: DeepReadonly7063<T[P]>;
};

type UnionToIntersection7063<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7063<T> = UnionToIntersection7063<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7063<T extends unknown[], V> = [...T, V];

type TuplifyUnion7063<T, L = LastOf7063<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7063<TuplifyUnion7063<Exclude<T, L>>, L>;

type DeepPartial7063<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7063<T[P]> }
  : T;

type Paths7063<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7063<K, Paths7063<T[K], Prev7063[D]>> : never }[keyof T]
  : never;

type Prev7063 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7063<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7063 {
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

type ConfigPaths7063 = Paths7063<NestedConfig7063>;

interface HeavyProps7063 {
  config: DeepPartial7063<NestedConfig7063>;
  path?: ConfigPaths7063;
}

const HeavyComponent7063 = memo(function HeavyComponent7063({ config }: HeavyProps7063) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7063) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7063 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7063: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7063.displayName = 'HeavyComponent7063';
export default HeavyComponent7063;
