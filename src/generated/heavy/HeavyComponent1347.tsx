'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1347<T> = T extends (infer U)[]
  ? DeepReadonlyArray1347<U>
  : T extends object
  ? DeepReadonlyObject1347<T>
  : T;

interface DeepReadonlyArray1347<T> extends ReadonlyArray<DeepReadonly1347<T>> {}

type DeepReadonlyObject1347<T> = {
  readonly [P in keyof T]: DeepReadonly1347<T[P]>;
};

type UnionToIntersection1347<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1347<T> = UnionToIntersection1347<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1347<T extends unknown[], V> = [...T, V];

type TuplifyUnion1347<T, L = LastOf1347<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1347<TuplifyUnion1347<Exclude<T, L>>, L>;

type DeepPartial1347<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1347<T[P]> }
  : T;

type Paths1347<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1347<K, Paths1347<T[K], Prev1347[D]>> : never }[keyof T]
  : never;

type Prev1347 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1347<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1347 {
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

type ConfigPaths1347 = Paths1347<NestedConfig1347>;

interface HeavyProps1347 {
  config: DeepPartial1347<NestedConfig1347>;
  path?: ConfigPaths1347;
}

const HeavyComponent1347 = memo(function HeavyComponent1347({ config }: HeavyProps1347) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1347) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1347 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1347: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1347.displayName = 'HeavyComponent1347';
export default HeavyComponent1347;
