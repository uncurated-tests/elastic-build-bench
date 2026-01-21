'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7704<T> = T extends (infer U)[]
  ? DeepReadonlyArray7704<U>
  : T extends object
  ? DeepReadonlyObject7704<T>
  : T;

interface DeepReadonlyArray7704<T> extends ReadonlyArray<DeepReadonly7704<T>> {}

type DeepReadonlyObject7704<T> = {
  readonly [P in keyof T]: DeepReadonly7704<T[P]>;
};

type UnionToIntersection7704<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7704<T> = UnionToIntersection7704<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7704<T extends unknown[], V> = [...T, V];

type TuplifyUnion7704<T, L = LastOf7704<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7704<TuplifyUnion7704<Exclude<T, L>>, L>;

type DeepPartial7704<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7704<T[P]> }
  : T;

type Paths7704<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7704<K, Paths7704<T[K], Prev7704[D]>> : never }[keyof T]
  : never;

type Prev7704 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7704<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7704 {
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

type ConfigPaths7704 = Paths7704<NestedConfig7704>;

interface HeavyProps7704 {
  config: DeepPartial7704<NestedConfig7704>;
  path?: ConfigPaths7704;
}

const HeavyComponent7704 = memo(function HeavyComponent7704({ config }: HeavyProps7704) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7704) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7704 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7704: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7704.displayName = 'HeavyComponent7704';
export default HeavyComponent7704;
