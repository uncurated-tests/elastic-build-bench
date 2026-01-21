'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7717<T> = T extends (infer U)[]
  ? DeepReadonlyArray7717<U>
  : T extends object
  ? DeepReadonlyObject7717<T>
  : T;

interface DeepReadonlyArray7717<T> extends ReadonlyArray<DeepReadonly7717<T>> {}

type DeepReadonlyObject7717<T> = {
  readonly [P in keyof T]: DeepReadonly7717<T[P]>;
};

type UnionToIntersection7717<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7717<T> = UnionToIntersection7717<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7717<T extends unknown[], V> = [...T, V];

type TuplifyUnion7717<T, L = LastOf7717<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7717<TuplifyUnion7717<Exclude<T, L>>, L>;

type DeepPartial7717<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7717<T[P]> }
  : T;

type Paths7717<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7717<K, Paths7717<T[K], Prev7717[D]>> : never }[keyof T]
  : never;

type Prev7717 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7717<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7717 {
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

type ConfigPaths7717 = Paths7717<NestedConfig7717>;

interface HeavyProps7717 {
  config: DeepPartial7717<NestedConfig7717>;
  path?: ConfigPaths7717;
}

const HeavyComponent7717 = memo(function HeavyComponent7717({ config }: HeavyProps7717) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7717) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7717 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7717: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7717.displayName = 'HeavyComponent7717';
export default HeavyComponent7717;
