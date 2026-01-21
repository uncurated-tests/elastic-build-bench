'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7274<T> = T extends (infer U)[]
  ? DeepReadonlyArray7274<U>
  : T extends object
  ? DeepReadonlyObject7274<T>
  : T;

interface DeepReadonlyArray7274<T> extends ReadonlyArray<DeepReadonly7274<T>> {}

type DeepReadonlyObject7274<T> = {
  readonly [P in keyof T]: DeepReadonly7274<T[P]>;
};

type UnionToIntersection7274<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7274<T> = UnionToIntersection7274<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7274<T extends unknown[], V> = [...T, V];

type TuplifyUnion7274<T, L = LastOf7274<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7274<TuplifyUnion7274<Exclude<T, L>>, L>;

type DeepPartial7274<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7274<T[P]> }
  : T;

type Paths7274<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7274<K, Paths7274<T[K], Prev7274[D]>> : never }[keyof T]
  : never;

type Prev7274 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7274<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7274 {
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

type ConfigPaths7274 = Paths7274<NestedConfig7274>;

interface HeavyProps7274 {
  config: DeepPartial7274<NestedConfig7274>;
  path?: ConfigPaths7274;
}

const HeavyComponent7274 = memo(function HeavyComponent7274({ config }: HeavyProps7274) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7274) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7274 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7274: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7274.displayName = 'HeavyComponent7274';
export default HeavyComponent7274;
