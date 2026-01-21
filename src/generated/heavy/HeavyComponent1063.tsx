'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1063<T> = T extends (infer U)[]
  ? DeepReadonlyArray1063<U>
  : T extends object
  ? DeepReadonlyObject1063<T>
  : T;

interface DeepReadonlyArray1063<T> extends ReadonlyArray<DeepReadonly1063<T>> {}

type DeepReadonlyObject1063<T> = {
  readonly [P in keyof T]: DeepReadonly1063<T[P]>;
};

type UnionToIntersection1063<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1063<T> = UnionToIntersection1063<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1063<T extends unknown[], V> = [...T, V];

type TuplifyUnion1063<T, L = LastOf1063<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1063<TuplifyUnion1063<Exclude<T, L>>, L>;

type DeepPartial1063<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1063<T[P]> }
  : T;

type Paths1063<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1063<K, Paths1063<T[K], Prev1063[D]>> : never }[keyof T]
  : never;

type Prev1063 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1063<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1063 {
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

type ConfigPaths1063 = Paths1063<NestedConfig1063>;

interface HeavyProps1063 {
  config: DeepPartial1063<NestedConfig1063>;
  path?: ConfigPaths1063;
}

const HeavyComponent1063 = memo(function HeavyComponent1063({ config }: HeavyProps1063) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1063) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1063 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1063: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1063.displayName = 'HeavyComponent1063';
export default HeavyComponent1063;
