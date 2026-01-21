'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1233<T> = T extends (infer U)[]
  ? DeepReadonlyArray1233<U>
  : T extends object
  ? DeepReadonlyObject1233<T>
  : T;

interface DeepReadonlyArray1233<T> extends ReadonlyArray<DeepReadonly1233<T>> {}

type DeepReadonlyObject1233<T> = {
  readonly [P in keyof T]: DeepReadonly1233<T[P]>;
};

type UnionToIntersection1233<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1233<T> = UnionToIntersection1233<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1233<T extends unknown[], V> = [...T, V];

type TuplifyUnion1233<T, L = LastOf1233<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1233<TuplifyUnion1233<Exclude<T, L>>, L>;

type DeepPartial1233<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1233<T[P]> }
  : T;

type Paths1233<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1233<K, Paths1233<T[K], Prev1233[D]>> : never }[keyof T]
  : never;

type Prev1233 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1233<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1233 {
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

type ConfigPaths1233 = Paths1233<NestedConfig1233>;

interface HeavyProps1233 {
  config: DeepPartial1233<NestedConfig1233>;
  path?: ConfigPaths1233;
}

const HeavyComponent1233 = memo(function HeavyComponent1233({ config }: HeavyProps1233) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1233) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1233 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1233: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1233.displayName = 'HeavyComponent1233';
export default HeavyComponent1233;
