'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7795<T> = T extends (infer U)[]
  ? DeepReadonlyArray7795<U>
  : T extends object
  ? DeepReadonlyObject7795<T>
  : T;

interface DeepReadonlyArray7795<T> extends ReadonlyArray<DeepReadonly7795<T>> {}

type DeepReadonlyObject7795<T> = {
  readonly [P in keyof T]: DeepReadonly7795<T[P]>;
};

type UnionToIntersection7795<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7795<T> = UnionToIntersection7795<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7795<T extends unknown[], V> = [...T, V];

type TuplifyUnion7795<T, L = LastOf7795<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7795<TuplifyUnion7795<Exclude<T, L>>, L>;

type DeepPartial7795<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7795<T[P]> }
  : T;

type Paths7795<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7795<K, Paths7795<T[K], Prev7795[D]>> : never }[keyof T]
  : never;

type Prev7795 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7795<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7795 {
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

type ConfigPaths7795 = Paths7795<NestedConfig7795>;

interface HeavyProps7795 {
  config: DeepPartial7795<NestedConfig7795>;
  path?: ConfigPaths7795;
}

const HeavyComponent7795 = memo(function HeavyComponent7795({ config }: HeavyProps7795) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7795) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7795 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7795: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7795.displayName = 'HeavyComponent7795';
export default HeavyComponent7795;
