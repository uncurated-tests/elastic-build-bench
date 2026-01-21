'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7310<T> = T extends (infer U)[]
  ? DeepReadonlyArray7310<U>
  : T extends object
  ? DeepReadonlyObject7310<T>
  : T;

interface DeepReadonlyArray7310<T> extends ReadonlyArray<DeepReadonly7310<T>> {}

type DeepReadonlyObject7310<T> = {
  readonly [P in keyof T]: DeepReadonly7310<T[P]>;
};

type UnionToIntersection7310<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7310<T> = UnionToIntersection7310<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7310<T extends unknown[], V> = [...T, V];

type TuplifyUnion7310<T, L = LastOf7310<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7310<TuplifyUnion7310<Exclude<T, L>>, L>;

type DeepPartial7310<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7310<T[P]> }
  : T;

type Paths7310<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7310<K, Paths7310<T[K], Prev7310[D]>> : never }[keyof T]
  : never;

type Prev7310 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7310<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7310 {
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

type ConfigPaths7310 = Paths7310<NestedConfig7310>;

interface HeavyProps7310 {
  config: DeepPartial7310<NestedConfig7310>;
  path?: ConfigPaths7310;
}

const HeavyComponent7310 = memo(function HeavyComponent7310({ config }: HeavyProps7310) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7310) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7310 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7310: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7310.displayName = 'HeavyComponent7310';
export default HeavyComponent7310;
