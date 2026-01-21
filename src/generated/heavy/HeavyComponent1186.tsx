'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1186<T> = T extends (infer U)[]
  ? DeepReadonlyArray1186<U>
  : T extends object
  ? DeepReadonlyObject1186<T>
  : T;

interface DeepReadonlyArray1186<T> extends ReadonlyArray<DeepReadonly1186<T>> {}

type DeepReadonlyObject1186<T> = {
  readonly [P in keyof T]: DeepReadonly1186<T[P]>;
};

type UnionToIntersection1186<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1186<T> = UnionToIntersection1186<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1186<T extends unknown[], V> = [...T, V];

type TuplifyUnion1186<T, L = LastOf1186<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1186<TuplifyUnion1186<Exclude<T, L>>, L>;

type DeepPartial1186<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1186<T[P]> }
  : T;

type Paths1186<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1186<K, Paths1186<T[K], Prev1186[D]>> : never }[keyof T]
  : never;

type Prev1186 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1186<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1186 {
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

type ConfigPaths1186 = Paths1186<NestedConfig1186>;

interface HeavyProps1186 {
  config: DeepPartial1186<NestedConfig1186>;
  path?: ConfigPaths1186;
}

const HeavyComponent1186 = memo(function HeavyComponent1186({ config }: HeavyProps1186) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1186) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1186 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1186: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1186.displayName = 'HeavyComponent1186';
export default HeavyComponent1186;
