'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1140<T> = T extends (infer U)[]
  ? DeepReadonlyArray1140<U>
  : T extends object
  ? DeepReadonlyObject1140<T>
  : T;

interface DeepReadonlyArray1140<T> extends ReadonlyArray<DeepReadonly1140<T>> {}

type DeepReadonlyObject1140<T> = {
  readonly [P in keyof T]: DeepReadonly1140<T[P]>;
};

type UnionToIntersection1140<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1140<T> = UnionToIntersection1140<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1140<T extends unknown[], V> = [...T, V];

type TuplifyUnion1140<T, L = LastOf1140<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1140<TuplifyUnion1140<Exclude<T, L>>, L>;

type DeepPartial1140<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1140<T[P]> }
  : T;

type Paths1140<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1140<K, Paths1140<T[K], Prev1140[D]>> : never }[keyof T]
  : never;

type Prev1140 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1140<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1140 {
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

type ConfigPaths1140 = Paths1140<NestedConfig1140>;

interface HeavyProps1140 {
  config: DeepPartial1140<NestedConfig1140>;
  path?: ConfigPaths1140;
}

const HeavyComponent1140 = memo(function HeavyComponent1140({ config }: HeavyProps1140) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1140) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1140 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1140: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1140.displayName = 'HeavyComponent1140';
export default HeavyComponent1140;
