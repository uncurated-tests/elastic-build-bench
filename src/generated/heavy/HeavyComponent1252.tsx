'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1252<T> = T extends (infer U)[]
  ? DeepReadonlyArray1252<U>
  : T extends object
  ? DeepReadonlyObject1252<T>
  : T;

interface DeepReadonlyArray1252<T> extends ReadonlyArray<DeepReadonly1252<T>> {}

type DeepReadonlyObject1252<T> = {
  readonly [P in keyof T]: DeepReadonly1252<T[P]>;
};

type UnionToIntersection1252<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1252<T> = UnionToIntersection1252<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1252<T extends unknown[], V> = [...T, V];

type TuplifyUnion1252<T, L = LastOf1252<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1252<TuplifyUnion1252<Exclude<T, L>>, L>;

type DeepPartial1252<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1252<T[P]> }
  : T;

type Paths1252<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1252<K, Paths1252<T[K], Prev1252[D]>> : never }[keyof T]
  : never;

type Prev1252 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1252<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1252 {
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

type ConfigPaths1252 = Paths1252<NestedConfig1252>;

interface HeavyProps1252 {
  config: DeepPartial1252<NestedConfig1252>;
  path?: ConfigPaths1252;
}

const HeavyComponent1252 = memo(function HeavyComponent1252({ config }: HeavyProps1252) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1252) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1252 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1252: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1252.displayName = 'HeavyComponent1252';
export default HeavyComponent1252;
