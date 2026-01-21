'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1409<T> = T extends (infer U)[]
  ? DeepReadonlyArray1409<U>
  : T extends object
  ? DeepReadonlyObject1409<T>
  : T;

interface DeepReadonlyArray1409<T> extends ReadonlyArray<DeepReadonly1409<T>> {}

type DeepReadonlyObject1409<T> = {
  readonly [P in keyof T]: DeepReadonly1409<T[P]>;
};

type UnionToIntersection1409<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1409<T> = UnionToIntersection1409<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1409<T extends unknown[], V> = [...T, V];

type TuplifyUnion1409<T, L = LastOf1409<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1409<TuplifyUnion1409<Exclude<T, L>>, L>;

type DeepPartial1409<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1409<T[P]> }
  : T;

type Paths1409<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1409<K, Paths1409<T[K], Prev1409[D]>> : never }[keyof T]
  : never;

type Prev1409 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1409<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1409 {
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

type ConfigPaths1409 = Paths1409<NestedConfig1409>;

interface HeavyProps1409 {
  config: DeepPartial1409<NestedConfig1409>;
  path?: ConfigPaths1409;
}

const HeavyComponent1409 = memo(function HeavyComponent1409({ config }: HeavyProps1409) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1409) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1409 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1409: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1409.displayName = 'HeavyComponent1409';
export default HeavyComponent1409;
