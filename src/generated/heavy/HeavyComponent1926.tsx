'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1926<T> = T extends (infer U)[]
  ? DeepReadonlyArray1926<U>
  : T extends object
  ? DeepReadonlyObject1926<T>
  : T;

interface DeepReadonlyArray1926<T> extends ReadonlyArray<DeepReadonly1926<T>> {}

type DeepReadonlyObject1926<T> = {
  readonly [P in keyof T]: DeepReadonly1926<T[P]>;
};

type UnionToIntersection1926<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1926<T> = UnionToIntersection1926<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1926<T extends unknown[], V> = [...T, V];

type TuplifyUnion1926<T, L = LastOf1926<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1926<TuplifyUnion1926<Exclude<T, L>>, L>;

type DeepPartial1926<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1926<T[P]> }
  : T;

type Paths1926<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1926<K, Paths1926<T[K], Prev1926[D]>> : never }[keyof T]
  : never;

type Prev1926 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1926<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1926 {
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

type ConfigPaths1926 = Paths1926<NestedConfig1926>;

interface HeavyProps1926 {
  config: DeepPartial1926<NestedConfig1926>;
  path?: ConfigPaths1926;
}

const HeavyComponent1926 = memo(function HeavyComponent1926({ config }: HeavyProps1926) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1926) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1926 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1926: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1926.displayName = 'HeavyComponent1926';
export default HeavyComponent1926;
