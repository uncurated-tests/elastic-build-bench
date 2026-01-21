'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1285<T> = T extends (infer U)[]
  ? DeepReadonlyArray1285<U>
  : T extends object
  ? DeepReadonlyObject1285<T>
  : T;

interface DeepReadonlyArray1285<T> extends ReadonlyArray<DeepReadonly1285<T>> {}

type DeepReadonlyObject1285<T> = {
  readonly [P in keyof T]: DeepReadonly1285<T[P]>;
};

type UnionToIntersection1285<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1285<T> = UnionToIntersection1285<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1285<T extends unknown[], V> = [...T, V];

type TuplifyUnion1285<T, L = LastOf1285<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1285<TuplifyUnion1285<Exclude<T, L>>, L>;

type DeepPartial1285<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1285<T[P]> }
  : T;

type Paths1285<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1285<K, Paths1285<T[K], Prev1285[D]>> : never }[keyof T]
  : never;

type Prev1285 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1285<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1285 {
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

type ConfigPaths1285 = Paths1285<NestedConfig1285>;

interface HeavyProps1285 {
  config: DeepPartial1285<NestedConfig1285>;
  path?: ConfigPaths1285;
}

const HeavyComponent1285 = memo(function HeavyComponent1285({ config }: HeavyProps1285) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1285) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1285 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1285: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1285.displayName = 'HeavyComponent1285';
export default HeavyComponent1285;
