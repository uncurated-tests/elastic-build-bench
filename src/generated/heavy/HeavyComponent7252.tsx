'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7252<T> = T extends (infer U)[]
  ? DeepReadonlyArray7252<U>
  : T extends object
  ? DeepReadonlyObject7252<T>
  : T;

interface DeepReadonlyArray7252<T> extends ReadonlyArray<DeepReadonly7252<T>> {}

type DeepReadonlyObject7252<T> = {
  readonly [P in keyof T]: DeepReadonly7252<T[P]>;
};

type UnionToIntersection7252<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7252<T> = UnionToIntersection7252<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7252<T extends unknown[], V> = [...T, V];

type TuplifyUnion7252<T, L = LastOf7252<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7252<TuplifyUnion7252<Exclude<T, L>>, L>;

type DeepPartial7252<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7252<T[P]> }
  : T;

type Paths7252<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7252<K, Paths7252<T[K], Prev7252[D]>> : never }[keyof T]
  : never;

type Prev7252 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7252<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7252 {
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

type ConfigPaths7252 = Paths7252<NestedConfig7252>;

interface HeavyProps7252 {
  config: DeepPartial7252<NestedConfig7252>;
  path?: ConfigPaths7252;
}

const HeavyComponent7252 = memo(function HeavyComponent7252({ config }: HeavyProps7252) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7252) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7252 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7252: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7252.displayName = 'HeavyComponent7252';
export default HeavyComponent7252;
