'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1381<T> = T extends (infer U)[]
  ? DeepReadonlyArray1381<U>
  : T extends object
  ? DeepReadonlyObject1381<T>
  : T;

interface DeepReadonlyArray1381<T> extends ReadonlyArray<DeepReadonly1381<T>> {}

type DeepReadonlyObject1381<T> = {
  readonly [P in keyof T]: DeepReadonly1381<T[P]>;
};

type UnionToIntersection1381<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1381<T> = UnionToIntersection1381<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1381<T extends unknown[], V> = [...T, V];

type TuplifyUnion1381<T, L = LastOf1381<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1381<TuplifyUnion1381<Exclude<T, L>>, L>;

type DeepPartial1381<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1381<T[P]> }
  : T;

type Paths1381<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1381<K, Paths1381<T[K], Prev1381[D]>> : never }[keyof T]
  : never;

type Prev1381 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1381<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1381 {
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

type ConfigPaths1381 = Paths1381<NestedConfig1381>;

interface HeavyProps1381 {
  config: DeepPartial1381<NestedConfig1381>;
  path?: ConfigPaths1381;
}

const HeavyComponent1381 = memo(function HeavyComponent1381({ config }: HeavyProps1381) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1381) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1381 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1381: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1381.displayName = 'HeavyComponent1381';
export default HeavyComponent1381;
