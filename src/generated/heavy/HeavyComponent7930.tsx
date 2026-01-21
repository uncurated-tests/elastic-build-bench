'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7930<T> = T extends (infer U)[]
  ? DeepReadonlyArray7930<U>
  : T extends object
  ? DeepReadonlyObject7930<T>
  : T;

interface DeepReadonlyArray7930<T> extends ReadonlyArray<DeepReadonly7930<T>> {}

type DeepReadonlyObject7930<T> = {
  readonly [P in keyof T]: DeepReadonly7930<T[P]>;
};

type UnionToIntersection7930<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7930<T> = UnionToIntersection7930<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7930<T extends unknown[], V> = [...T, V];

type TuplifyUnion7930<T, L = LastOf7930<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7930<TuplifyUnion7930<Exclude<T, L>>, L>;

type DeepPartial7930<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7930<T[P]> }
  : T;

type Paths7930<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7930<K, Paths7930<T[K], Prev7930[D]>> : never }[keyof T]
  : never;

type Prev7930 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7930<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7930 {
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

type ConfigPaths7930 = Paths7930<NestedConfig7930>;

interface HeavyProps7930 {
  config: DeepPartial7930<NestedConfig7930>;
  path?: ConfigPaths7930;
}

const HeavyComponent7930 = memo(function HeavyComponent7930({ config }: HeavyProps7930) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7930) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7930 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7930: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7930.displayName = 'HeavyComponent7930';
export default HeavyComponent7930;
