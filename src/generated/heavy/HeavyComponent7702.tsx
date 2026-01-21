'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7702<T> = T extends (infer U)[]
  ? DeepReadonlyArray7702<U>
  : T extends object
  ? DeepReadonlyObject7702<T>
  : T;

interface DeepReadonlyArray7702<T> extends ReadonlyArray<DeepReadonly7702<T>> {}

type DeepReadonlyObject7702<T> = {
  readonly [P in keyof T]: DeepReadonly7702<T[P]>;
};

type UnionToIntersection7702<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7702<T> = UnionToIntersection7702<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7702<T extends unknown[], V> = [...T, V];

type TuplifyUnion7702<T, L = LastOf7702<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7702<TuplifyUnion7702<Exclude<T, L>>, L>;

type DeepPartial7702<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7702<T[P]> }
  : T;

type Paths7702<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7702<K, Paths7702<T[K], Prev7702[D]>> : never }[keyof T]
  : never;

type Prev7702 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7702<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7702 {
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

type ConfigPaths7702 = Paths7702<NestedConfig7702>;

interface HeavyProps7702 {
  config: DeepPartial7702<NestedConfig7702>;
  path?: ConfigPaths7702;
}

const HeavyComponent7702 = memo(function HeavyComponent7702({ config }: HeavyProps7702) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7702) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7702 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7702: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7702.displayName = 'HeavyComponent7702';
export default HeavyComponent7702;
