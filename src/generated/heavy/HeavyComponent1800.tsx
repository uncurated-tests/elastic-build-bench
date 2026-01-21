'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1800<T> = T extends (infer U)[]
  ? DeepReadonlyArray1800<U>
  : T extends object
  ? DeepReadonlyObject1800<T>
  : T;

interface DeepReadonlyArray1800<T> extends ReadonlyArray<DeepReadonly1800<T>> {}

type DeepReadonlyObject1800<T> = {
  readonly [P in keyof T]: DeepReadonly1800<T[P]>;
};

type UnionToIntersection1800<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1800<T> = UnionToIntersection1800<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1800<T extends unknown[], V> = [...T, V];

type TuplifyUnion1800<T, L = LastOf1800<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1800<TuplifyUnion1800<Exclude<T, L>>, L>;

type DeepPartial1800<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1800<T[P]> }
  : T;

type Paths1800<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1800<K, Paths1800<T[K], Prev1800[D]>> : never }[keyof T]
  : never;

type Prev1800 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1800<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1800 {
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

type ConfigPaths1800 = Paths1800<NestedConfig1800>;

interface HeavyProps1800 {
  config: DeepPartial1800<NestedConfig1800>;
  path?: ConfigPaths1800;
}

const HeavyComponent1800 = memo(function HeavyComponent1800({ config }: HeavyProps1800) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1800) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1800 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1800: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1800.displayName = 'HeavyComponent1800';
export default HeavyComponent1800;
