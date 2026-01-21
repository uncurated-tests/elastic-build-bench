'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7255<T> = T extends (infer U)[]
  ? DeepReadonlyArray7255<U>
  : T extends object
  ? DeepReadonlyObject7255<T>
  : T;

interface DeepReadonlyArray7255<T> extends ReadonlyArray<DeepReadonly7255<T>> {}

type DeepReadonlyObject7255<T> = {
  readonly [P in keyof T]: DeepReadonly7255<T[P]>;
};

type UnionToIntersection7255<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7255<T> = UnionToIntersection7255<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7255<T extends unknown[], V> = [...T, V];

type TuplifyUnion7255<T, L = LastOf7255<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7255<TuplifyUnion7255<Exclude<T, L>>, L>;

type DeepPartial7255<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7255<T[P]> }
  : T;

type Paths7255<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7255<K, Paths7255<T[K], Prev7255[D]>> : never }[keyof T]
  : never;

type Prev7255 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7255<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7255 {
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

type ConfigPaths7255 = Paths7255<NestedConfig7255>;

interface HeavyProps7255 {
  config: DeepPartial7255<NestedConfig7255>;
  path?: ConfigPaths7255;
}

const HeavyComponent7255 = memo(function HeavyComponent7255({ config }: HeavyProps7255) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7255) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7255 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7255: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7255.displayName = 'HeavyComponent7255';
export default HeavyComponent7255;
