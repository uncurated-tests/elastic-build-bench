'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7666<T> = T extends (infer U)[]
  ? DeepReadonlyArray7666<U>
  : T extends object
  ? DeepReadonlyObject7666<T>
  : T;

interface DeepReadonlyArray7666<T> extends ReadonlyArray<DeepReadonly7666<T>> {}

type DeepReadonlyObject7666<T> = {
  readonly [P in keyof T]: DeepReadonly7666<T[P]>;
};

type UnionToIntersection7666<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7666<T> = UnionToIntersection7666<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7666<T extends unknown[], V> = [...T, V];

type TuplifyUnion7666<T, L = LastOf7666<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7666<TuplifyUnion7666<Exclude<T, L>>, L>;

type DeepPartial7666<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7666<T[P]> }
  : T;

type Paths7666<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7666<K, Paths7666<T[K], Prev7666[D]>> : never }[keyof T]
  : never;

type Prev7666 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7666<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7666 {
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

type ConfigPaths7666 = Paths7666<NestedConfig7666>;

interface HeavyProps7666 {
  config: DeepPartial7666<NestedConfig7666>;
  path?: ConfigPaths7666;
}

const HeavyComponent7666 = memo(function HeavyComponent7666({ config }: HeavyProps7666) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7666) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7666 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7666: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7666.displayName = 'HeavyComponent7666';
export default HeavyComponent7666;
