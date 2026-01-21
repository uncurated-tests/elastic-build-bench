'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7103<T> = T extends (infer U)[]
  ? DeepReadonlyArray7103<U>
  : T extends object
  ? DeepReadonlyObject7103<T>
  : T;

interface DeepReadonlyArray7103<T> extends ReadonlyArray<DeepReadonly7103<T>> {}

type DeepReadonlyObject7103<T> = {
  readonly [P in keyof T]: DeepReadonly7103<T[P]>;
};

type UnionToIntersection7103<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7103<T> = UnionToIntersection7103<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7103<T extends unknown[], V> = [...T, V];

type TuplifyUnion7103<T, L = LastOf7103<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7103<TuplifyUnion7103<Exclude<T, L>>, L>;

type DeepPartial7103<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7103<T[P]> }
  : T;

type Paths7103<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7103<K, Paths7103<T[K], Prev7103[D]>> : never }[keyof T]
  : never;

type Prev7103 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7103<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7103 {
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

type ConfigPaths7103 = Paths7103<NestedConfig7103>;

interface HeavyProps7103 {
  config: DeepPartial7103<NestedConfig7103>;
  path?: ConfigPaths7103;
}

const HeavyComponent7103 = memo(function HeavyComponent7103({ config }: HeavyProps7103) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7103) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7103 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7103: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7103.displayName = 'HeavyComponent7103';
export default HeavyComponent7103;
