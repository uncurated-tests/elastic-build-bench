'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7418<T> = T extends (infer U)[]
  ? DeepReadonlyArray7418<U>
  : T extends object
  ? DeepReadonlyObject7418<T>
  : T;

interface DeepReadonlyArray7418<T> extends ReadonlyArray<DeepReadonly7418<T>> {}

type DeepReadonlyObject7418<T> = {
  readonly [P in keyof T]: DeepReadonly7418<T[P]>;
};

type UnionToIntersection7418<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7418<T> = UnionToIntersection7418<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7418<T extends unknown[], V> = [...T, V];

type TuplifyUnion7418<T, L = LastOf7418<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7418<TuplifyUnion7418<Exclude<T, L>>, L>;

type DeepPartial7418<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7418<T[P]> }
  : T;

type Paths7418<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7418<K, Paths7418<T[K], Prev7418[D]>> : never }[keyof T]
  : never;

type Prev7418 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7418<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7418 {
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

type ConfigPaths7418 = Paths7418<NestedConfig7418>;

interface HeavyProps7418 {
  config: DeepPartial7418<NestedConfig7418>;
  path?: ConfigPaths7418;
}

const HeavyComponent7418 = memo(function HeavyComponent7418({ config }: HeavyProps7418) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7418) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7418 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7418: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7418.displayName = 'HeavyComponent7418';
export default HeavyComponent7418;
