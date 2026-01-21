'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7308<T> = T extends (infer U)[]
  ? DeepReadonlyArray7308<U>
  : T extends object
  ? DeepReadonlyObject7308<T>
  : T;

interface DeepReadonlyArray7308<T> extends ReadonlyArray<DeepReadonly7308<T>> {}

type DeepReadonlyObject7308<T> = {
  readonly [P in keyof T]: DeepReadonly7308<T[P]>;
};

type UnionToIntersection7308<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7308<T> = UnionToIntersection7308<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7308<T extends unknown[], V> = [...T, V];

type TuplifyUnion7308<T, L = LastOf7308<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7308<TuplifyUnion7308<Exclude<T, L>>, L>;

type DeepPartial7308<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7308<T[P]> }
  : T;

type Paths7308<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7308<K, Paths7308<T[K], Prev7308[D]>> : never }[keyof T]
  : never;

type Prev7308 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7308<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7308 {
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

type ConfigPaths7308 = Paths7308<NestedConfig7308>;

interface HeavyProps7308 {
  config: DeepPartial7308<NestedConfig7308>;
  path?: ConfigPaths7308;
}

const HeavyComponent7308 = memo(function HeavyComponent7308({ config }: HeavyProps7308) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7308) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7308 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7308: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7308.displayName = 'HeavyComponent7308';
export default HeavyComponent7308;
