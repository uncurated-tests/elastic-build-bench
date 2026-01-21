'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1807<T> = T extends (infer U)[]
  ? DeepReadonlyArray1807<U>
  : T extends object
  ? DeepReadonlyObject1807<T>
  : T;

interface DeepReadonlyArray1807<T> extends ReadonlyArray<DeepReadonly1807<T>> {}

type DeepReadonlyObject1807<T> = {
  readonly [P in keyof T]: DeepReadonly1807<T[P]>;
};

type UnionToIntersection1807<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1807<T> = UnionToIntersection1807<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1807<T extends unknown[], V> = [...T, V];

type TuplifyUnion1807<T, L = LastOf1807<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1807<TuplifyUnion1807<Exclude<T, L>>, L>;

type DeepPartial1807<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1807<T[P]> }
  : T;

type Paths1807<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1807<K, Paths1807<T[K], Prev1807[D]>> : never }[keyof T]
  : never;

type Prev1807 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1807<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1807 {
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

type ConfigPaths1807 = Paths1807<NestedConfig1807>;

interface HeavyProps1807 {
  config: DeepPartial1807<NestedConfig1807>;
  path?: ConfigPaths1807;
}

const HeavyComponent1807 = memo(function HeavyComponent1807({ config }: HeavyProps1807) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1807) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1807 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1807: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1807.displayName = 'HeavyComponent1807';
export default HeavyComponent1807;
