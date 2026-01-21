'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7126<T> = T extends (infer U)[]
  ? DeepReadonlyArray7126<U>
  : T extends object
  ? DeepReadonlyObject7126<T>
  : T;

interface DeepReadonlyArray7126<T> extends ReadonlyArray<DeepReadonly7126<T>> {}

type DeepReadonlyObject7126<T> = {
  readonly [P in keyof T]: DeepReadonly7126<T[P]>;
};

type UnionToIntersection7126<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7126<T> = UnionToIntersection7126<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7126<T extends unknown[], V> = [...T, V];

type TuplifyUnion7126<T, L = LastOf7126<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7126<TuplifyUnion7126<Exclude<T, L>>, L>;

type DeepPartial7126<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7126<T[P]> }
  : T;

type Paths7126<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7126<K, Paths7126<T[K], Prev7126[D]>> : never }[keyof T]
  : never;

type Prev7126 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7126<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7126 {
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

type ConfigPaths7126 = Paths7126<NestedConfig7126>;

interface HeavyProps7126 {
  config: DeepPartial7126<NestedConfig7126>;
  path?: ConfigPaths7126;
}

const HeavyComponent7126 = memo(function HeavyComponent7126({ config }: HeavyProps7126) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7126) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7126 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7126: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7126.displayName = 'HeavyComponent7126';
export default HeavyComponent7126;
