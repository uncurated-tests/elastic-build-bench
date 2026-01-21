'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7108<T> = T extends (infer U)[]
  ? DeepReadonlyArray7108<U>
  : T extends object
  ? DeepReadonlyObject7108<T>
  : T;

interface DeepReadonlyArray7108<T> extends ReadonlyArray<DeepReadonly7108<T>> {}

type DeepReadonlyObject7108<T> = {
  readonly [P in keyof T]: DeepReadonly7108<T[P]>;
};

type UnionToIntersection7108<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7108<T> = UnionToIntersection7108<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7108<T extends unknown[], V> = [...T, V];

type TuplifyUnion7108<T, L = LastOf7108<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7108<TuplifyUnion7108<Exclude<T, L>>, L>;

type DeepPartial7108<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7108<T[P]> }
  : T;

type Paths7108<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7108<K, Paths7108<T[K], Prev7108[D]>> : never }[keyof T]
  : never;

type Prev7108 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7108<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7108 {
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

type ConfigPaths7108 = Paths7108<NestedConfig7108>;

interface HeavyProps7108 {
  config: DeepPartial7108<NestedConfig7108>;
  path?: ConfigPaths7108;
}

const HeavyComponent7108 = memo(function HeavyComponent7108({ config }: HeavyProps7108) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7108) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7108 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7108: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7108.displayName = 'HeavyComponent7108';
export default HeavyComponent7108;
