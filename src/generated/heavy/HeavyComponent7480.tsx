'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7480<T> = T extends (infer U)[]
  ? DeepReadonlyArray7480<U>
  : T extends object
  ? DeepReadonlyObject7480<T>
  : T;

interface DeepReadonlyArray7480<T> extends ReadonlyArray<DeepReadonly7480<T>> {}

type DeepReadonlyObject7480<T> = {
  readonly [P in keyof T]: DeepReadonly7480<T[P]>;
};

type UnionToIntersection7480<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7480<T> = UnionToIntersection7480<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7480<T extends unknown[], V> = [...T, V];

type TuplifyUnion7480<T, L = LastOf7480<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7480<TuplifyUnion7480<Exclude<T, L>>, L>;

type DeepPartial7480<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7480<T[P]> }
  : T;

type Paths7480<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7480<K, Paths7480<T[K], Prev7480[D]>> : never }[keyof T]
  : never;

type Prev7480 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7480<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7480 {
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

type ConfigPaths7480 = Paths7480<NestedConfig7480>;

interface HeavyProps7480 {
  config: DeepPartial7480<NestedConfig7480>;
  path?: ConfigPaths7480;
}

const HeavyComponent7480 = memo(function HeavyComponent7480({ config }: HeavyProps7480) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7480) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7480 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7480: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7480.displayName = 'HeavyComponent7480';
export default HeavyComponent7480;
