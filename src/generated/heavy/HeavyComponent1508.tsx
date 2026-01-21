'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1508<T> = T extends (infer U)[]
  ? DeepReadonlyArray1508<U>
  : T extends object
  ? DeepReadonlyObject1508<T>
  : T;

interface DeepReadonlyArray1508<T> extends ReadonlyArray<DeepReadonly1508<T>> {}

type DeepReadonlyObject1508<T> = {
  readonly [P in keyof T]: DeepReadonly1508<T[P]>;
};

type UnionToIntersection1508<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1508<T> = UnionToIntersection1508<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1508<T extends unknown[], V> = [...T, V];

type TuplifyUnion1508<T, L = LastOf1508<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1508<TuplifyUnion1508<Exclude<T, L>>, L>;

type DeepPartial1508<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1508<T[P]> }
  : T;

type Paths1508<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1508<K, Paths1508<T[K], Prev1508[D]>> : never }[keyof T]
  : never;

type Prev1508 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1508<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1508 {
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

type ConfigPaths1508 = Paths1508<NestedConfig1508>;

interface HeavyProps1508 {
  config: DeepPartial1508<NestedConfig1508>;
  path?: ConfigPaths1508;
}

const HeavyComponent1508 = memo(function HeavyComponent1508({ config }: HeavyProps1508) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1508) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1508 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1508: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1508.displayName = 'HeavyComponent1508';
export default HeavyComponent1508;
