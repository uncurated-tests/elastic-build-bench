'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12814<T> = T extends (infer U)[]
  ? DeepReadonlyArray12814<U>
  : T extends object
  ? DeepReadonlyObject12814<T>
  : T;

interface DeepReadonlyArray12814<T> extends ReadonlyArray<DeepReadonly12814<T>> {}

type DeepReadonlyObject12814<T> = {
  readonly [P in keyof T]: DeepReadonly12814<T[P]>;
};

type UnionToIntersection12814<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12814<T> = UnionToIntersection12814<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12814<T extends unknown[], V> = [...T, V];

type TuplifyUnion12814<T, L = LastOf12814<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12814<TuplifyUnion12814<Exclude<T, L>>, L>;

type DeepPartial12814<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12814<T[P]> }
  : T;

type Paths12814<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12814<K, Paths12814<T[K], Prev12814[D]>> : never }[keyof T]
  : never;

type Prev12814 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12814<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12814 {
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

type ConfigPaths12814 = Paths12814<NestedConfig12814>;

interface HeavyProps12814 {
  config: DeepPartial12814<NestedConfig12814>;
  path?: ConfigPaths12814;
}

const HeavyComponent12814 = memo(function HeavyComponent12814({ config }: HeavyProps12814) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12814) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12814 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12814: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12814.displayName = 'HeavyComponent12814';
export default HeavyComponent12814;
