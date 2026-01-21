'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1162<T> = T extends (infer U)[]
  ? DeepReadonlyArray1162<U>
  : T extends object
  ? DeepReadonlyObject1162<T>
  : T;

interface DeepReadonlyArray1162<T> extends ReadonlyArray<DeepReadonly1162<T>> {}

type DeepReadonlyObject1162<T> = {
  readonly [P in keyof T]: DeepReadonly1162<T[P]>;
};

type UnionToIntersection1162<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1162<T> = UnionToIntersection1162<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1162<T extends unknown[], V> = [...T, V];

type TuplifyUnion1162<T, L = LastOf1162<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1162<TuplifyUnion1162<Exclude<T, L>>, L>;

type DeepPartial1162<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1162<T[P]> }
  : T;

type Paths1162<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1162<K, Paths1162<T[K], Prev1162[D]>> : never }[keyof T]
  : never;

type Prev1162 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1162<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1162 {
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

type ConfigPaths1162 = Paths1162<NestedConfig1162>;

interface HeavyProps1162 {
  config: DeepPartial1162<NestedConfig1162>;
  path?: ConfigPaths1162;
}

const HeavyComponent1162 = memo(function HeavyComponent1162({ config }: HeavyProps1162) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1162) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1162 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1162: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1162.displayName = 'HeavyComponent1162';
export default HeavyComponent1162;
