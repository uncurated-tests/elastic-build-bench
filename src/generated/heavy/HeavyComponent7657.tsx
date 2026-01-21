'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7657<T> = T extends (infer U)[]
  ? DeepReadonlyArray7657<U>
  : T extends object
  ? DeepReadonlyObject7657<T>
  : T;

interface DeepReadonlyArray7657<T> extends ReadonlyArray<DeepReadonly7657<T>> {}

type DeepReadonlyObject7657<T> = {
  readonly [P in keyof T]: DeepReadonly7657<T[P]>;
};

type UnionToIntersection7657<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7657<T> = UnionToIntersection7657<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7657<T extends unknown[], V> = [...T, V];

type TuplifyUnion7657<T, L = LastOf7657<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7657<TuplifyUnion7657<Exclude<T, L>>, L>;

type DeepPartial7657<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7657<T[P]> }
  : T;

type Paths7657<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7657<K, Paths7657<T[K], Prev7657[D]>> : never }[keyof T]
  : never;

type Prev7657 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7657<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7657 {
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

type ConfigPaths7657 = Paths7657<NestedConfig7657>;

interface HeavyProps7657 {
  config: DeepPartial7657<NestedConfig7657>;
  path?: ConfigPaths7657;
}

const HeavyComponent7657 = memo(function HeavyComponent7657({ config }: HeavyProps7657) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7657) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7657 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7657: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7657.displayName = 'HeavyComponent7657';
export default HeavyComponent7657;
