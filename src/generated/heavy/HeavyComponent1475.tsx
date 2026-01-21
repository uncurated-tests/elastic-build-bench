'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1475<T> = T extends (infer U)[]
  ? DeepReadonlyArray1475<U>
  : T extends object
  ? DeepReadonlyObject1475<T>
  : T;

interface DeepReadonlyArray1475<T> extends ReadonlyArray<DeepReadonly1475<T>> {}

type DeepReadonlyObject1475<T> = {
  readonly [P in keyof T]: DeepReadonly1475<T[P]>;
};

type UnionToIntersection1475<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1475<T> = UnionToIntersection1475<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1475<T extends unknown[], V> = [...T, V];

type TuplifyUnion1475<T, L = LastOf1475<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1475<TuplifyUnion1475<Exclude<T, L>>, L>;

type DeepPartial1475<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1475<T[P]> }
  : T;

type Paths1475<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1475<K, Paths1475<T[K], Prev1475[D]>> : never }[keyof T]
  : never;

type Prev1475 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1475<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1475 {
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

type ConfigPaths1475 = Paths1475<NestedConfig1475>;

interface HeavyProps1475 {
  config: DeepPartial1475<NestedConfig1475>;
  path?: ConfigPaths1475;
}

const HeavyComponent1475 = memo(function HeavyComponent1475({ config }: HeavyProps1475) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1475) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1475 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1475: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1475.displayName = 'HeavyComponent1475';
export default HeavyComponent1475;
