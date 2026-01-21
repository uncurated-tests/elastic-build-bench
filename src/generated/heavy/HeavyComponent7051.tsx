'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7051<T> = T extends (infer U)[]
  ? DeepReadonlyArray7051<U>
  : T extends object
  ? DeepReadonlyObject7051<T>
  : T;

interface DeepReadonlyArray7051<T> extends ReadonlyArray<DeepReadonly7051<T>> {}

type DeepReadonlyObject7051<T> = {
  readonly [P in keyof T]: DeepReadonly7051<T[P]>;
};

type UnionToIntersection7051<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7051<T> = UnionToIntersection7051<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7051<T extends unknown[], V> = [...T, V];

type TuplifyUnion7051<T, L = LastOf7051<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7051<TuplifyUnion7051<Exclude<T, L>>, L>;

type DeepPartial7051<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7051<T[P]> }
  : T;

type Paths7051<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7051<K, Paths7051<T[K], Prev7051[D]>> : never }[keyof T]
  : never;

type Prev7051 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7051<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7051 {
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

type ConfigPaths7051 = Paths7051<NestedConfig7051>;

interface HeavyProps7051 {
  config: DeepPartial7051<NestedConfig7051>;
  path?: ConfigPaths7051;
}

const HeavyComponent7051 = memo(function HeavyComponent7051({ config }: HeavyProps7051) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7051) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7051 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7051: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7051.displayName = 'HeavyComponent7051';
export default HeavyComponent7051;
