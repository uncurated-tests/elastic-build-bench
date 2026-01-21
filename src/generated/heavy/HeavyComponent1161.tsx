'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1161<T> = T extends (infer U)[]
  ? DeepReadonlyArray1161<U>
  : T extends object
  ? DeepReadonlyObject1161<T>
  : T;

interface DeepReadonlyArray1161<T> extends ReadonlyArray<DeepReadonly1161<T>> {}

type DeepReadonlyObject1161<T> = {
  readonly [P in keyof T]: DeepReadonly1161<T[P]>;
};

type UnionToIntersection1161<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1161<T> = UnionToIntersection1161<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1161<T extends unknown[], V> = [...T, V];

type TuplifyUnion1161<T, L = LastOf1161<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1161<TuplifyUnion1161<Exclude<T, L>>, L>;

type DeepPartial1161<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1161<T[P]> }
  : T;

type Paths1161<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1161<K, Paths1161<T[K], Prev1161[D]>> : never }[keyof T]
  : never;

type Prev1161 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1161<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1161 {
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

type ConfigPaths1161 = Paths1161<NestedConfig1161>;

interface HeavyProps1161 {
  config: DeepPartial1161<NestedConfig1161>;
  path?: ConfigPaths1161;
}

const HeavyComponent1161 = memo(function HeavyComponent1161({ config }: HeavyProps1161) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1161) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1161 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1161: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1161.displayName = 'HeavyComponent1161';
export default HeavyComponent1161;
