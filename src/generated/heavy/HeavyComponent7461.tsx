'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7461<T> = T extends (infer U)[]
  ? DeepReadonlyArray7461<U>
  : T extends object
  ? DeepReadonlyObject7461<T>
  : T;

interface DeepReadonlyArray7461<T> extends ReadonlyArray<DeepReadonly7461<T>> {}

type DeepReadonlyObject7461<T> = {
  readonly [P in keyof T]: DeepReadonly7461<T[P]>;
};

type UnionToIntersection7461<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7461<T> = UnionToIntersection7461<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7461<T extends unknown[], V> = [...T, V];

type TuplifyUnion7461<T, L = LastOf7461<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7461<TuplifyUnion7461<Exclude<T, L>>, L>;

type DeepPartial7461<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7461<T[P]> }
  : T;

type Paths7461<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7461<K, Paths7461<T[K], Prev7461[D]>> : never }[keyof T]
  : never;

type Prev7461 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7461<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7461 {
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

type ConfigPaths7461 = Paths7461<NestedConfig7461>;

interface HeavyProps7461 {
  config: DeepPartial7461<NestedConfig7461>;
  path?: ConfigPaths7461;
}

const HeavyComponent7461 = memo(function HeavyComponent7461({ config }: HeavyProps7461) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7461) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7461 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7461: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7461.displayName = 'HeavyComponent7461';
export default HeavyComponent7461;
