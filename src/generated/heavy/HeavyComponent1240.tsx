'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1240<T> = T extends (infer U)[]
  ? DeepReadonlyArray1240<U>
  : T extends object
  ? DeepReadonlyObject1240<T>
  : T;

interface DeepReadonlyArray1240<T> extends ReadonlyArray<DeepReadonly1240<T>> {}

type DeepReadonlyObject1240<T> = {
  readonly [P in keyof T]: DeepReadonly1240<T[P]>;
};

type UnionToIntersection1240<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1240<T> = UnionToIntersection1240<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1240<T extends unknown[], V> = [...T, V];

type TuplifyUnion1240<T, L = LastOf1240<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1240<TuplifyUnion1240<Exclude<T, L>>, L>;

type DeepPartial1240<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1240<T[P]> }
  : T;

type Paths1240<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1240<K, Paths1240<T[K], Prev1240[D]>> : never }[keyof T]
  : never;

type Prev1240 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1240<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1240 {
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

type ConfigPaths1240 = Paths1240<NestedConfig1240>;

interface HeavyProps1240 {
  config: DeepPartial1240<NestedConfig1240>;
  path?: ConfigPaths1240;
}

const HeavyComponent1240 = memo(function HeavyComponent1240({ config }: HeavyProps1240) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1240) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1240 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1240: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1240.displayName = 'HeavyComponent1240';
export default HeavyComponent1240;
