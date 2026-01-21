'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1817<T> = T extends (infer U)[]
  ? DeepReadonlyArray1817<U>
  : T extends object
  ? DeepReadonlyObject1817<T>
  : T;

interface DeepReadonlyArray1817<T> extends ReadonlyArray<DeepReadonly1817<T>> {}

type DeepReadonlyObject1817<T> = {
  readonly [P in keyof T]: DeepReadonly1817<T[P]>;
};

type UnionToIntersection1817<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1817<T> = UnionToIntersection1817<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1817<T extends unknown[], V> = [...T, V];

type TuplifyUnion1817<T, L = LastOf1817<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1817<TuplifyUnion1817<Exclude<T, L>>, L>;

type DeepPartial1817<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1817<T[P]> }
  : T;

type Paths1817<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1817<K, Paths1817<T[K], Prev1817[D]>> : never }[keyof T]
  : never;

type Prev1817 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1817<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1817 {
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

type ConfigPaths1817 = Paths1817<NestedConfig1817>;

interface HeavyProps1817 {
  config: DeepPartial1817<NestedConfig1817>;
  path?: ConfigPaths1817;
}

const HeavyComponent1817 = memo(function HeavyComponent1817({ config }: HeavyProps1817) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1817) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1817 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1817: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1817.displayName = 'HeavyComponent1817';
export default HeavyComponent1817;
