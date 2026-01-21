'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1428<T> = T extends (infer U)[]
  ? DeepReadonlyArray1428<U>
  : T extends object
  ? DeepReadonlyObject1428<T>
  : T;

interface DeepReadonlyArray1428<T> extends ReadonlyArray<DeepReadonly1428<T>> {}

type DeepReadonlyObject1428<T> = {
  readonly [P in keyof T]: DeepReadonly1428<T[P]>;
};

type UnionToIntersection1428<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1428<T> = UnionToIntersection1428<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1428<T extends unknown[], V> = [...T, V];

type TuplifyUnion1428<T, L = LastOf1428<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1428<TuplifyUnion1428<Exclude<T, L>>, L>;

type DeepPartial1428<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1428<T[P]> }
  : T;

type Paths1428<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1428<K, Paths1428<T[K], Prev1428[D]>> : never }[keyof T]
  : never;

type Prev1428 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1428<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1428 {
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

type ConfigPaths1428 = Paths1428<NestedConfig1428>;

interface HeavyProps1428 {
  config: DeepPartial1428<NestedConfig1428>;
  path?: ConfigPaths1428;
}

const HeavyComponent1428 = memo(function HeavyComponent1428({ config }: HeavyProps1428) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1428) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1428 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1428: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1428.displayName = 'HeavyComponent1428';
export default HeavyComponent1428;
