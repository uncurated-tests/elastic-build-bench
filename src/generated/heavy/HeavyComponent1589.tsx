'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1589<T> = T extends (infer U)[]
  ? DeepReadonlyArray1589<U>
  : T extends object
  ? DeepReadonlyObject1589<T>
  : T;

interface DeepReadonlyArray1589<T> extends ReadonlyArray<DeepReadonly1589<T>> {}

type DeepReadonlyObject1589<T> = {
  readonly [P in keyof T]: DeepReadonly1589<T[P]>;
};

type UnionToIntersection1589<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1589<T> = UnionToIntersection1589<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1589<T extends unknown[], V> = [...T, V];

type TuplifyUnion1589<T, L = LastOf1589<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1589<TuplifyUnion1589<Exclude<T, L>>, L>;

type DeepPartial1589<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1589<T[P]> }
  : T;

type Paths1589<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1589<K, Paths1589<T[K], Prev1589[D]>> : never }[keyof T]
  : never;

type Prev1589 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1589<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1589 {
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

type ConfigPaths1589 = Paths1589<NestedConfig1589>;

interface HeavyProps1589 {
  config: DeepPartial1589<NestedConfig1589>;
  path?: ConfigPaths1589;
}

const HeavyComponent1589 = memo(function HeavyComponent1589({ config }: HeavyProps1589) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1589) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1589 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1589: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1589.displayName = 'HeavyComponent1589';
export default HeavyComponent1589;
