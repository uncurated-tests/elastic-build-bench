'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1903<T> = T extends (infer U)[]
  ? DeepReadonlyArray1903<U>
  : T extends object
  ? DeepReadonlyObject1903<T>
  : T;

interface DeepReadonlyArray1903<T> extends ReadonlyArray<DeepReadonly1903<T>> {}

type DeepReadonlyObject1903<T> = {
  readonly [P in keyof T]: DeepReadonly1903<T[P]>;
};

type UnionToIntersection1903<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1903<T> = UnionToIntersection1903<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1903<T extends unknown[], V> = [...T, V];

type TuplifyUnion1903<T, L = LastOf1903<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1903<TuplifyUnion1903<Exclude<T, L>>, L>;

type DeepPartial1903<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1903<T[P]> }
  : T;

type Paths1903<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1903<K, Paths1903<T[K], Prev1903[D]>> : never }[keyof T]
  : never;

type Prev1903 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1903<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1903 {
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

type ConfigPaths1903 = Paths1903<NestedConfig1903>;

interface HeavyProps1903 {
  config: DeepPartial1903<NestedConfig1903>;
  path?: ConfigPaths1903;
}

const HeavyComponent1903 = memo(function HeavyComponent1903({ config }: HeavyProps1903) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1903) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1903 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1903: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1903.displayName = 'HeavyComponent1903';
export default HeavyComponent1903;
