'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7494<T> = T extends (infer U)[]
  ? DeepReadonlyArray7494<U>
  : T extends object
  ? DeepReadonlyObject7494<T>
  : T;

interface DeepReadonlyArray7494<T> extends ReadonlyArray<DeepReadonly7494<T>> {}

type DeepReadonlyObject7494<T> = {
  readonly [P in keyof T]: DeepReadonly7494<T[P]>;
};

type UnionToIntersection7494<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7494<T> = UnionToIntersection7494<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7494<T extends unknown[], V> = [...T, V];

type TuplifyUnion7494<T, L = LastOf7494<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7494<TuplifyUnion7494<Exclude<T, L>>, L>;

type DeepPartial7494<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7494<T[P]> }
  : T;

type Paths7494<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7494<K, Paths7494<T[K], Prev7494[D]>> : never }[keyof T]
  : never;

type Prev7494 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7494<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7494 {
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

type ConfigPaths7494 = Paths7494<NestedConfig7494>;

interface HeavyProps7494 {
  config: DeepPartial7494<NestedConfig7494>;
  path?: ConfigPaths7494;
}

const HeavyComponent7494 = memo(function HeavyComponent7494({ config }: HeavyProps7494) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7494) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7494 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7494: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7494.displayName = 'HeavyComponent7494';
export default HeavyComponent7494;
