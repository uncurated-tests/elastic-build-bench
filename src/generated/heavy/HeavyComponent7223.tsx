'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7223<T> = T extends (infer U)[]
  ? DeepReadonlyArray7223<U>
  : T extends object
  ? DeepReadonlyObject7223<T>
  : T;

interface DeepReadonlyArray7223<T> extends ReadonlyArray<DeepReadonly7223<T>> {}

type DeepReadonlyObject7223<T> = {
  readonly [P in keyof T]: DeepReadonly7223<T[P]>;
};

type UnionToIntersection7223<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7223<T> = UnionToIntersection7223<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7223<T extends unknown[], V> = [...T, V];

type TuplifyUnion7223<T, L = LastOf7223<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7223<TuplifyUnion7223<Exclude<T, L>>, L>;

type DeepPartial7223<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7223<T[P]> }
  : T;

type Paths7223<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7223<K, Paths7223<T[K], Prev7223[D]>> : never }[keyof T]
  : never;

type Prev7223 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7223<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7223 {
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

type ConfigPaths7223 = Paths7223<NestedConfig7223>;

interface HeavyProps7223 {
  config: DeepPartial7223<NestedConfig7223>;
  path?: ConfigPaths7223;
}

const HeavyComponent7223 = memo(function HeavyComponent7223({ config }: HeavyProps7223) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7223) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7223 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7223: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7223.displayName = 'HeavyComponent7223';
export default HeavyComponent7223;
