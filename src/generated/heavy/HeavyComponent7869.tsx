'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7869<T> = T extends (infer U)[]
  ? DeepReadonlyArray7869<U>
  : T extends object
  ? DeepReadonlyObject7869<T>
  : T;

interface DeepReadonlyArray7869<T> extends ReadonlyArray<DeepReadonly7869<T>> {}

type DeepReadonlyObject7869<T> = {
  readonly [P in keyof T]: DeepReadonly7869<T[P]>;
};

type UnionToIntersection7869<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7869<T> = UnionToIntersection7869<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7869<T extends unknown[], V> = [...T, V];

type TuplifyUnion7869<T, L = LastOf7869<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7869<TuplifyUnion7869<Exclude<T, L>>, L>;

type DeepPartial7869<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7869<T[P]> }
  : T;

type Paths7869<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7869<K, Paths7869<T[K], Prev7869[D]>> : never }[keyof T]
  : never;

type Prev7869 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7869<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7869 {
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

type ConfigPaths7869 = Paths7869<NestedConfig7869>;

interface HeavyProps7869 {
  config: DeepPartial7869<NestedConfig7869>;
  path?: ConfigPaths7869;
}

const HeavyComponent7869 = memo(function HeavyComponent7869({ config }: HeavyProps7869) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7869) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7869 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7869: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7869.displayName = 'HeavyComponent7869';
export default HeavyComponent7869;
