'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1497<T> = T extends (infer U)[]
  ? DeepReadonlyArray1497<U>
  : T extends object
  ? DeepReadonlyObject1497<T>
  : T;

interface DeepReadonlyArray1497<T> extends ReadonlyArray<DeepReadonly1497<T>> {}

type DeepReadonlyObject1497<T> = {
  readonly [P in keyof T]: DeepReadonly1497<T[P]>;
};

type UnionToIntersection1497<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1497<T> = UnionToIntersection1497<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1497<T extends unknown[], V> = [...T, V];

type TuplifyUnion1497<T, L = LastOf1497<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1497<TuplifyUnion1497<Exclude<T, L>>, L>;

type DeepPartial1497<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1497<T[P]> }
  : T;

type Paths1497<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1497<K, Paths1497<T[K], Prev1497[D]>> : never }[keyof T]
  : never;

type Prev1497 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1497<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1497 {
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

type ConfigPaths1497 = Paths1497<NestedConfig1497>;

interface HeavyProps1497 {
  config: DeepPartial1497<NestedConfig1497>;
  path?: ConfigPaths1497;
}

const HeavyComponent1497 = memo(function HeavyComponent1497({ config }: HeavyProps1497) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1497) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1497 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1497: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1497.displayName = 'HeavyComponent1497';
export default HeavyComponent1497;
