'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7466<T> = T extends (infer U)[]
  ? DeepReadonlyArray7466<U>
  : T extends object
  ? DeepReadonlyObject7466<T>
  : T;

interface DeepReadonlyArray7466<T> extends ReadonlyArray<DeepReadonly7466<T>> {}

type DeepReadonlyObject7466<T> = {
  readonly [P in keyof T]: DeepReadonly7466<T[P]>;
};

type UnionToIntersection7466<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7466<T> = UnionToIntersection7466<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7466<T extends unknown[], V> = [...T, V];

type TuplifyUnion7466<T, L = LastOf7466<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7466<TuplifyUnion7466<Exclude<T, L>>, L>;

type DeepPartial7466<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7466<T[P]> }
  : T;

type Paths7466<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7466<K, Paths7466<T[K], Prev7466[D]>> : never }[keyof T]
  : never;

type Prev7466 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7466<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7466 {
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

type ConfigPaths7466 = Paths7466<NestedConfig7466>;

interface HeavyProps7466 {
  config: DeepPartial7466<NestedConfig7466>;
  path?: ConfigPaths7466;
}

const HeavyComponent7466 = memo(function HeavyComponent7466({ config }: HeavyProps7466) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7466) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7466 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7466: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7466.displayName = 'HeavyComponent7466';
export default HeavyComponent7466;
