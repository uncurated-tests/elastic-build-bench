'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7764<T> = T extends (infer U)[]
  ? DeepReadonlyArray7764<U>
  : T extends object
  ? DeepReadonlyObject7764<T>
  : T;

interface DeepReadonlyArray7764<T> extends ReadonlyArray<DeepReadonly7764<T>> {}

type DeepReadonlyObject7764<T> = {
  readonly [P in keyof T]: DeepReadonly7764<T[P]>;
};

type UnionToIntersection7764<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7764<T> = UnionToIntersection7764<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7764<T extends unknown[], V> = [...T, V];

type TuplifyUnion7764<T, L = LastOf7764<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7764<TuplifyUnion7764<Exclude<T, L>>, L>;

type DeepPartial7764<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7764<T[P]> }
  : T;

type Paths7764<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7764<K, Paths7764<T[K], Prev7764[D]>> : never }[keyof T]
  : never;

type Prev7764 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7764<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7764 {
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

type ConfigPaths7764 = Paths7764<NestedConfig7764>;

interface HeavyProps7764 {
  config: DeepPartial7764<NestedConfig7764>;
  path?: ConfigPaths7764;
}

const HeavyComponent7764 = memo(function HeavyComponent7764({ config }: HeavyProps7764) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7764) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7764 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7764: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7764.displayName = 'HeavyComponent7764';
export default HeavyComponent7764;
