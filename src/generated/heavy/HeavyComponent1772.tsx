'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1772<T> = T extends (infer U)[]
  ? DeepReadonlyArray1772<U>
  : T extends object
  ? DeepReadonlyObject1772<T>
  : T;

interface DeepReadonlyArray1772<T> extends ReadonlyArray<DeepReadonly1772<T>> {}

type DeepReadonlyObject1772<T> = {
  readonly [P in keyof T]: DeepReadonly1772<T[P]>;
};

type UnionToIntersection1772<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1772<T> = UnionToIntersection1772<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1772<T extends unknown[], V> = [...T, V];

type TuplifyUnion1772<T, L = LastOf1772<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1772<TuplifyUnion1772<Exclude<T, L>>, L>;

type DeepPartial1772<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1772<T[P]> }
  : T;

type Paths1772<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1772<K, Paths1772<T[K], Prev1772[D]>> : never }[keyof T]
  : never;

type Prev1772 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1772<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1772 {
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

type ConfigPaths1772 = Paths1772<NestedConfig1772>;

interface HeavyProps1772 {
  config: DeepPartial1772<NestedConfig1772>;
  path?: ConfigPaths1772;
}

const HeavyComponent1772 = memo(function HeavyComponent1772({ config }: HeavyProps1772) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1772) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1772 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1772: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1772.displayName = 'HeavyComponent1772';
export default HeavyComponent1772;
