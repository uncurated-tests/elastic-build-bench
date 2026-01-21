'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7340<T> = T extends (infer U)[]
  ? DeepReadonlyArray7340<U>
  : T extends object
  ? DeepReadonlyObject7340<T>
  : T;

interface DeepReadonlyArray7340<T> extends ReadonlyArray<DeepReadonly7340<T>> {}

type DeepReadonlyObject7340<T> = {
  readonly [P in keyof T]: DeepReadonly7340<T[P]>;
};

type UnionToIntersection7340<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7340<T> = UnionToIntersection7340<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7340<T extends unknown[], V> = [...T, V];

type TuplifyUnion7340<T, L = LastOf7340<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7340<TuplifyUnion7340<Exclude<T, L>>, L>;

type DeepPartial7340<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7340<T[P]> }
  : T;

type Paths7340<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7340<K, Paths7340<T[K], Prev7340[D]>> : never }[keyof T]
  : never;

type Prev7340 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7340<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7340 {
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

type ConfigPaths7340 = Paths7340<NestedConfig7340>;

interface HeavyProps7340 {
  config: DeepPartial7340<NestedConfig7340>;
  path?: ConfigPaths7340;
}

const HeavyComponent7340 = memo(function HeavyComponent7340({ config }: HeavyProps7340) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7340) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7340 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7340: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7340.displayName = 'HeavyComponent7340';
export default HeavyComponent7340;
