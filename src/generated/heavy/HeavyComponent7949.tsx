'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7949<T> = T extends (infer U)[]
  ? DeepReadonlyArray7949<U>
  : T extends object
  ? DeepReadonlyObject7949<T>
  : T;

interface DeepReadonlyArray7949<T> extends ReadonlyArray<DeepReadonly7949<T>> {}

type DeepReadonlyObject7949<T> = {
  readonly [P in keyof T]: DeepReadonly7949<T[P]>;
};

type UnionToIntersection7949<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7949<T> = UnionToIntersection7949<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7949<T extends unknown[], V> = [...T, V];

type TuplifyUnion7949<T, L = LastOf7949<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7949<TuplifyUnion7949<Exclude<T, L>>, L>;

type DeepPartial7949<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7949<T[P]> }
  : T;

type Paths7949<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7949<K, Paths7949<T[K], Prev7949[D]>> : never }[keyof T]
  : never;

type Prev7949 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7949<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7949 {
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

type ConfigPaths7949 = Paths7949<NestedConfig7949>;

interface HeavyProps7949 {
  config: DeepPartial7949<NestedConfig7949>;
  path?: ConfigPaths7949;
}

const HeavyComponent7949 = memo(function HeavyComponent7949({ config }: HeavyProps7949) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7949) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7949 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7949: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7949.displayName = 'HeavyComponent7949';
export default HeavyComponent7949;
