'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1104<T> = T extends (infer U)[]
  ? DeepReadonlyArray1104<U>
  : T extends object
  ? DeepReadonlyObject1104<T>
  : T;

interface DeepReadonlyArray1104<T> extends ReadonlyArray<DeepReadonly1104<T>> {}

type DeepReadonlyObject1104<T> = {
  readonly [P in keyof T]: DeepReadonly1104<T[P]>;
};

type UnionToIntersection1104<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1104<T> = UnionToIntersection1104<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1104<T extends unknown[], V> = [...T, V];

type TuplifyUnion1104<T, L = LastOf1104<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1104<TuplifyUnion1104<Exclude<T, L>>, L>;

type DeepPartial1104<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1104<T[P]> }
  : T;

type Paths1104<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1104<K, Paths1104<T[K], Prev1104[D]>> : never }[keyof T]
  : never;

type Prev1104 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1104<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1104 {
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

type ConfigPaths1104 = Paths1104<NestedConfig1104>;

interface HeavyProps1104 {
  config: DeepPartial1104<NestedConfig1104>;
  path?: ConfigPaths1104;
}

const HeavyComponent1104 = memo(function HeavyComponent1104({ config }: HeavyProps1104) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1104) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1104 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1104: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1104.displayName = 'HeavyComponent1104';
export default HeavyComponent1104;
