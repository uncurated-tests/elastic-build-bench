'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1888<T> = T extends (infer U)[]
  ? DeepReadonlyArray1888<U>
  : T extends object
  ? DeepReadonlyObject1888<T>
  : T;

interface DeepReadonlyArray1888<T> extends ReadonlyArray<DeepReadonly1888<T>> {}

type DeepReadonlyObject1888<T> = {
  readonly [P in keyof T]: DeepReadonly1888<T[P]>;
};

type UnionToIntersection1888<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1888<T> = UnionToIntersection1888<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1888<T extends unknown[], V> = [...T, V];

type TuplifyUnion1888<T, L = LastOf1888<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1888<TuplifyUnion1888<Exclude<T, L>>, L>;

type DeepPartial1888<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1888<T[P]> }
  : T;

type Paths1888<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1888<K, Paths1888<T[K], Prev1888[D]>> : never }[keyof T]
  : never;

type Prev1888 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1888<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1888 {
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

type ConfigPaths1888 = Paths1888<NestedConfig1888>;

interface HeavyProps1888 {
  config: DeepPartial1888<NestedConfig1888>;
  path?: ConfigPaths1888;
}

const HeavyComponent1888 = memo(function HeavyComponent1888({ config }: HeavyProps1888) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1888) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1888 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1888: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1888.displayName = 'HeavyComponent1888';
export default HeavyComponent1888;
