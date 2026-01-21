'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7386<T> = T extends (infer U)[]
  ? DeepReadonlyArray7386<U>
  : T extends object
  ? DeepReadonlyObject7386<T>
  : T;

interface DeepReadonlyArray7386<T> extends ReadonlyArray<DeepReadonly7386<T>> {}

type DeepReadonlyObject7386<T> = {
  readonly [P in keyof T]: DeepReadonly7386<T[P]>;
};

type UnionToIntersection7386<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7386<T> = UnionToIntersection7386<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7386<T extends unknown[], V> = [...T, V];

type TuplifyUnion7386<T, L = LastOf7386<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7386<TuplifyUnion7386<Exclude<T, L>>, L>;

type DeepPartial7386<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7386<T[P]> }
  : T;

type Paths7386<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7386<K, Paths7386<T[K], Prev7386[D]>> : never }[keyof T]
  : never;

type Prev7386 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7386<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7386 {
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

type ConfigPaths7386 = Paths7386<NestedConfig7386>;

interface HeavyProps7386 {
  config: DeepPartial7386<NestedConfig7386>;
  path?: ConfigPaths7386;
}

const HeavyComponent7386 = memo(function HeavyComponent7386({ config }: HeavyProps7386) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7386) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7386 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7386: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7386.displayName = 'HeavyComponent7386';
export default HeavyComponent7386;
