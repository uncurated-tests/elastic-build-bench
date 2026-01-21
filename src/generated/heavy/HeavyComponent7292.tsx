'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7292<T> = T extends (infer U)[]
  ? DeepReadonlyArray7292<U>
  : T extends object
  ? DeepReadonlyObject7292<T>
  : T;

interface DeepReadonlyArray7292<T> extends ReadonlyArray<DeepReadonly7292<T>> {}

type DeepReadonlyObject7292<T> = {
  readonly [P in keyof T]: DeepReadonly7292<T[P]>;
};

type UnionToIntersection7292<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7292<T> = UnionToIntersection7292<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7292<T extends unknown[], V> = [...T, V];

type TuplifyUnion7292<T, L = LastOf7292<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7292<TuplifyUnion7292<Exclude<T, L>>, L>;

type DeepPartial7292<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7292<T[P]> }
  : T;

type Paths7292<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7292<K, Paths7292<T[K], Prev7292[D]>> : never }[keyof T]
  : never;

type Prev7292 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7292<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7292 {
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

type ConfigPaths7292 = Paths7292<NestedConfig7292>;

interface HeavyProps7292 {
  config: DeepPartial7292<NestedConfig7292>;
  path?: ConfigPaths7292;
}

const HeavyComponent7292 = memo(function HeavyComponent7292({ config }: HeavyProps7292) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7292) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7292 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7292: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7292.displayName = 'HeavyComponent7292';
export default HeavyComponent7292;
