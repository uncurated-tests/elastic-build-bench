'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7986<T> = T extends (infer U)[]
  ? DeepReadonlyArray7986<U>
  : T extends object
  ? DeepReadonlyObject7986<T>
  : T;

interface DeepReadonlyArray7986<T> extends ReadonlyArray<DeepReadonly7986<T>> {}

type DeepReadonlyObject7986<T> = {
  readonly [P in keyof T]: DeepReadonly7986<T[P]>;
};

type UnionToIntersection7986<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7986<T> = UnionToIntersection7986<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7986<T extends unknown[], V> = [...T, V];

type TuplifyUnion7986<T, L = LastOf7986<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7986<TuplifyUnion7986<Exclude<T, L>>, L>;

type DeepPartial7986<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7986<T[P]> }
  : T;

type Paths7986<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7986<K, Paths7986<T[K], Prev7986[D]>> : never }[keyof T]
  : never;

type Prev7986 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7986<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7986 {
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

type ConfigPaths7986 = Paths7986<NestedConfig7986>;

interface HeavyProps7986 {
  config: DeepPartial7986<NestedConfig7986>;
  path?: ConfigPaths7986;
}

const HeavyComponent7986 = memo(function HeavyComponent7986({ config }: HeavyProps7986) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7986) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7986 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7986: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7986.displayName = 'HeavyComponent7986';
export default HeavyComponent7986;
