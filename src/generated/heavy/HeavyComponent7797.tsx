'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7797<T> = T extends (infer U)[]
  ? DeepReadonlyArray7797<U>
  : T extends object
  ? DeepReadonlyObject7797<T>
  : T;

interface DeepReadonlyArray7797<T> extends ReadonlyArray<DeepReadonly7797<T>> {}

type DeepReadonlyObject7797<T> = {
  readonly [P in keyof T]: DeepReadonly7797<T[P]>;
};

type UnionToIntersection7797<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7797<T> = UnionToIntersection7797<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7797<T extends unknown[], V> = [...T, V];

type TuplifyUnion7797<T, L = LastOf7797<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7797<TuplifyUnion7797<Exclude<T, L>>, L>;

type DeepPartial7797<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7797<T[P]> }
  : T;

type Paths7797<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7797<K, Paths7797<T[K], Prev7797[D]>> : never }[keyof T]
  : never;

type Prev7797 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7797<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7797 {
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

type ConfigPaths7797 = Paths7797<NestedConfig7797>;

interface HeavyProps7797 {
  config: DeepPartial7797<NestedConfig7797>;
  path?: ConfigPaths7797;
}

const HeavyComponent7797 = memo(function HeavyComponent7797({ config }: HeavyProps7797) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7797) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7797 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7797: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7797.displayName = 'HeavyComponent7797';
export default HeavyComponent7797;
