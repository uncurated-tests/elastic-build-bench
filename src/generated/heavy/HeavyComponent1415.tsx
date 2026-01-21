'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1415<T> = T extends (infer U)[]
  ? DeepReadonlyArray1415<U>
  : T extends object
  ? DeepReadonlyObject1415<T>
  : T;

interface DeepReadonlyArray1415<T> extends ReadonlyArray<DeepReadonly1415<T>> {}

type DeepReadonlyObject1415<T> = {
  readonly [P in keyof T]: DeepReadonly1415<T[P]>;
};

type UnionToIntersection1415<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1415<T> = UnionToIntersection1415<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1415<T extends unknown[], V> = [...T, V];

type TuplifyUnion1415<T, L = LastOf1415<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1415<TuplifyUnion1415<Exclude<T, L>>, L>;

type DeepPartial1415<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1415<T[P]> }
  : T;

type Paths1415<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1415<K, Paths1415<T[K], Prev1415[D]>> : never }[keyof T]
  : never;

type Prev1415 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1415<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1415 {
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

type ConfigPaths1415 = Paths1415<NestedConfig1415>;

interface HeavyProps1415 {
  config: DeepPartial1415<NestedConfig1415>;
  path?: ConfigPaths1415;
}

const HeavyComponent1415 = memo(function HeavyComponent1415({ config }: HeavyProps1415) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1415) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1415 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1415: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1415.displayName = 'HeavyComponent1415';
export default HeavyComponent1415;
