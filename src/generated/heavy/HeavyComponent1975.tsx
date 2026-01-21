'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1975<T> = T extends (infer U)[]
  ? DeepReadonlyArray1975<U>
  : T extends object
  ? DeepReadonlyObject1975<T>
  : T;

interface DeepReadonlyArray1975<T> extends ReadonlyArray<DeepReadonly1975<T>> {}

type DeepReadonlyObject1975<T> = {
  readonly [P in keyof T]: DeepReadonly1975<T[P]>;
};

type UnionToIntersection1975<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1975<T> = UnionToIntersection1975<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1975<T extends unknown[], V> = [...T, V];

type TuplifyUnion1975<T, L = LastOf1975<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1975<TuplifyUnion1975<Exclude<T, L>>, L>;

type DeepPartial1975<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1975<T[P]> }
  : T;

type Paths1975<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1975<K, Paths1975<T[K], Prev1975[D]>> : never }[keyof T]
  : never;

type Prev1975 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1975<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1975 {
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

type ConfigPaths1975 = Paths1975<NestedConfig1975>;

interface HeavyProps1975 {
  config: DeepPartial1975<NestedConfig1975>;
  path?: ConfigPaths1975;
}

const HeavyComponent1975 = memo(function HeavyComponent1975({ config }: HeavyProps1975) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1975) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1975 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1975: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1975.displayName = 'HeavyComponent1975';
export default HeavyComponent1975;
