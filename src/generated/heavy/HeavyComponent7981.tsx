'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7981<T> = T extends (infer U)[]
  ? DeepReadonlyArray7981<U>
  : T extends object
  ? DeepReadonlyObject7981<T>
  : T;

interface DeepReadonlyArray7981<T> extends ReadonlyArray<DeepReadonly7981<T>> {}

type DeepReadonlyObject7981<T> = {
  readonly [P in keyof T]: DeepReadonly7981<T[P]>;
};

type UnionToIntersection7981<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7981<T> = UnionToIntersection7981<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7981<T extends unknown[], V> = [...T, V];

type TuplifyUnion7981<T, L = LastOf7981<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7981<TuplifyUnion7981<Exclude<T, L>>, L>;

type DeepPartial7981<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7981<T[P]> }
  : T;

type Paths7981<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7981<K, Paths7981<T[K], Prev7981[D]>> : never }[keyof T]
  : never;

type Prev7981 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7981<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7981 {
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

type ConfigPaths7981 = Paths7981<NestedConfig7981>;

interface HeavyProps7981 {
  config: DeepPartial7981<NestedConfig7981>;
  path?: ConfigPaths7981;
}

const HeavyComponent7981 = memo(function HeavyComponent7981({ config }: HeavyProps7981) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7981) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7981 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7981: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7981.displayName = 'HeavyComponent7981';
export default HeavyComponent7981;
