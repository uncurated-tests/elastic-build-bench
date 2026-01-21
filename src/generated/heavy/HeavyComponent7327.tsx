'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7327<T> = T extends (infer U)[]
  ? DeepReadonlyArray7327<U>
  : T extends object
  ? DeepReadonlyObject7327<T>
  : T;

interface DeepReadonlyArray7327<T> extends ReadonlyArray<DeepReadonly7327<T>> {}

type DeepReadonlyObject7327<T> = {
  readonly [P in keyof T]: DeepReadonly7327<T[P]>;
};

type UnionToIntersection7327<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7327<T> = UnionToIntersection7327<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7327<T extends unknown[], V> = [...T, V];

type TuplifyUnion7327<T, L = LastOf7327<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7327<TuplifyUnion7327<Exclude<T, L>>, L>;

type DeepPartial7327<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7327<T[P]> }
  : T;

type Paths7327<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7327<K, Paths7327<T[K], Prev7327[D]>> : never }[keyof T]
  : never;

type Prev7327 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7327<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7327 {
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

type ConfigPaths7327 = Paths7327<NestedConfig7327>;

interface HeavyProps7327 {
  config: DeepPartial7327<NestedConfig7327>;
  path?: ConfigPaths7327;
}

const HeavyComponent7327 = memo(function HeavyComponent7327({ config }: HeavyProps7327) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7327) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7327 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7327: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7327.displayName = 'HeavyComponent7327';
export default HeavyComponent7327;
