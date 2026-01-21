'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7825<T> = T extends (infer U)[]
  ? DeepReadonlyArray7825<U>
  : T extends object
  ? DeepReadonlyObject7825<T>
  : T;

interface DeepReadonlyArray7825<T> extends ReadonlyArray<DeepReadonly7825<T>> {}

type DeepReadonlyObject7825<T> = {
  readonly [P in keyof T]: DeepReadonly7825<T[P]>;
};

type UnionToIntersection7825<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7825<T> = UnionToIntersection7825<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7825<T extends unknown[], V> = [...T, V];

type TuplifyUnion7825<T, L = LastOf7825<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7825<TuplifyUnion7825<Exclude<T, L>>, L>;

type DeepPartial7825<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7825<T[P]> }
  : T;

type Paths7825<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7825<K, Paths7825<T[K], Prev7825[D]>> : never }[keyof T]
  : never;

type Prev7825 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7825<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7825 {
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

type ConfigPaths7825 = Paths7825<NestedConfig7825>;

interface HeavyProps7825 {
  config: DeepPartial7825<NestedConfig7825>;
  path?: ConfigPaths7825;
}

const HeavyComponent7825 = memo(function HeavyComponent7825({ config }: HeavyProps7825) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7825) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7825 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7825: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7825.displayName = 'HeavyComponent7825';
export default HeavyComponent7825;
