'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12727<T> = T extends (infer U)[]
  ? DeepReadonlyArray12727<U>
  : T extends object
  ? DeepReadonlyObject12727<T>
  : T;

interface DeepReadonlyArray12727<T> extends ReadonlyArray<DeepReadonly12727<T>> {}

type DeepReadonlyObject12727<T> = {
  readonly [P in keyof T]: DeepReadonly12727<T[P]>;
};

type UnionToIntersection12727<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12727<T> = UnionToIntersection12727<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12727<T extends unknown[], V> = [...T, V];

type TuplifyUnion12727<T, L = LastOf12727<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12727<TuplifyUnion12727<Exclude<T, L>>, L>;

type DeepPartial12727<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12727<T[P]> }
  : T;

type Paths12727<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12727<K, Paths12727<T[K], Prev12727[D]>> : never }[keyof T]
  : never;

type Prev12727 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12727<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12727 {
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

type ConfigPaths12727 = Paths12727<NestedConfig12727>;

interface HeavyProps12727 {
  config: DeepPartial12727<NestedConfig12727>;
  path?: ConfigPaths12727;
}

const HeavyComponent12727 = memo(function HeavyComponent12727({ config }: HeavyProps12727) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12727) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12727 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12727: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12727.displayName = 'HeavyComponent12727';
export default HeavyComponent12727;
