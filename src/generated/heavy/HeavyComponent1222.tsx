'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1222<T> = T extends (infer U)[]
  ? DeepReadonlyArray1222<U>
  : T extends object
  ? DeepReadonlyObject1222<T>
  : T;

interface DeepReadonlyArray1222<T> extends ReadonlyArray<DeepReadonly1222<T>> {}

type DeepReadonlyObject1222<T> = {
  readonly [P in keyof T]: DeepReadonly1222<T[P]>;
};

type UnionToIntersection1222<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1222<T> = UnionToIntersection1222<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1222<T extends unknown[], V> = [...T, V];

type TuplifyUnion1222<T, L = LastOf1222<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1222<TuplifyUnion1222<Exclude<T, L>>, L>;

type DeepPartial1222<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1222<T[P]> }
  : T;

type Paths1222<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1222<K, Paths1222<T[K], Prev1222[D]>> : never }[keyof T]
  : never;

type Prev1222 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1222<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1222 {
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

type ConfigPaths1222 = Paths1222<NestedConfig1222>;

interface HeavyProps1222 {
  config: DeepPartial1222<NestedConfig1222>;
  path?: ConfigPaths1222;
}

const HeavyComponent1222 = memo(function HeavyComponent1222({ config }: HeavyProps1222) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1222) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1222 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1222: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1222.displayName = 'HeavyComponent1222';
export default HeavyComponent1222;
