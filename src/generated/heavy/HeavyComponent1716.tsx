'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1716<T> = T extends (infer U)[]
  ? DeepReadonlyArray1716<U>
  : T extends object
  ? DeepReadonlyObject1716<T>
  : T;

interface DeepReadonlyArray1716<T> extends ReadonlyArray<DeepReadonly1716<T>> {}

type DeepReadonlyObject1716<T> = {
  readonly [P in keyof T]: DeepReadonly1716<T[P]>;
};

type UnionToIntersection1716<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1716<T> = UnionToIntersection1716<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1716<T extends unknown[], V> = [...T, V];

type TuplifyUnion1716<T, L = LastOf1716<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1716<TuplifyUnion1716<Exclude<T, L>>, L>;

type DeepPartial1716<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1716<T[P]> }
  : T;

type Paths1716<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1716<K, Paths1716<T[K], Prev1716[D]>> : never }[keyof T]
  : never;

type Prev1716 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1716<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1716 {
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

type ConfigPaths1716 = Paths1716<NestedConfig1716>;

interface HeavyProps1716 {
  config: DeepPartial1716<NestedConfig1716>;
  path?: ConfigPaths1716;
}

const HeavyComponent1716 = memo(function HeavyComponent1716({ config }: HeavyProps1716) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1716) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1716 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1716: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1716.displayName = 'HeavyComponent1716';
export default HeavyComponent1716;
