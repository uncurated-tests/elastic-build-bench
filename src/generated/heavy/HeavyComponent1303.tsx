'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1303<T> = T extends (infer U)[]
  ? DeepReadonlyArray1303<U>
  : T extends object
  ? DeepReadonlyObject1303<T>
  : T;

interface DeepReadonlyArray1303<T> extends ReadonlyArray<DeepReadonly1303<T>> {}

type DeepReadonlyObject1303<T> = {
  readonly [P in keyof T]: DeepReadonly1303<T[P]>;
};

type UnionToIntersection1303<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1303<T> = UnionToIntersection1303<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1303<T extends unknown[], V> = [...T, V];

type TuplifyUnion1303<T, L = LastOf1303<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1303<TuplifyUnion1303<Exclude<T, L>>, L>;

type DeepPartial1303<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1303<T[P]> }
  : T;

type Paths1303<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1303<K, Paths1303<T[K], Prev1303[D]>> : never }[keyof T]
  : never;

type Prev1303 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1303<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1303 {
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

type ConfigPaths1303 = Paths1303<NestedConfig1303>;

interface HeavyProps1303 {
  config: DeepPartial1303<NestedConfig1303>;
  path?: ConfigPaths1303;
}

const HeavyComponent1303 = memo(function HeavyComponent1303({ config }: HeavyProps1303) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1303) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1303 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1303: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1303.displayName = 'HeavyComponent1303';
export default HeavyComponent1303;
