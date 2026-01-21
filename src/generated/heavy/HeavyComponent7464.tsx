'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7464<T> = T extends (infer U)[]
  ? DeepReadonlyArray7464<U>
  : T extends object
  ? DeepReadonlyObject7464<T>
  : T;

interface DeepReadonlyArray7464<T> extends ReadonlyArray<DeepReadonly7464<T>> {}

type DeepReadonlyObject7464<T> = {
  readonly [P in keyof T]: DeepReadonly7464<T[P]>;
};

type UnionToIntersection7464<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7464<T> = UnionToIntersection7464<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7464<T extends unknown[], V> = [...T, V];

type TuplifyUnion7464<T, L = LastOf7464<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7464<TuplifyUnion7464<Exclude<T, L>>, L>;

type DeepPartial7464<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7464<T[P]> }
  : T;

type Paths7464<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7464<K, Paths7464<T[K], Prev7464[D]>> : never }[keyof T]
  : never;

type Prev7464 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7464<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7464 {
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

type ConfigPaths7464 = Paths7464<NestedConfig7464>;

interface HeavyProps7464 {
  config: DeepPartial7464<NestedConfig7464>;
  path?: ConfigPaths7464;
}

const HeavyComponent7464 = memo(function HeavyComponent7464({ config }: HeavyProps7464) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7464) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7464 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7464: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7464.displayName = 'HeavyComponent7464';
export default HeavyComponent7464;
