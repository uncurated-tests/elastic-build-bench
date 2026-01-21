'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1645<T> = T extends (infer U)[]
  ? DeepReadonlyArray1645<U>
  : T extends object
  ? DeepReadonlyObject1645<T>
  : T;

interface DeepReadonlyArray1645<T> extends ReadonlyArray<DeepReadonly1645<T>> {}

type DeepReadonlyObject1645<T> = {
  readonly [P in keyof T]: DeepReadonly1645<T[P]>;
};

type UnionToIntersection1645<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1645<T> = UnionToIntersection1645<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1645<T extends unknown[], V> = [...T, V];

type TuplifyUnion1645<T, L = LastOf1645<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1645<TuplifyUnion1645<Exclude<T, L>>, L>;

type DeepPartial1645<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1645<T[P]> }
  : T;

type Paths1645<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1645<K, Paths1645<T[K], Prev1645[D]>> : never }[keyof T]
  : never;

type Prev1645 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1645<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1645 {
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

type ConfigPaths1645 = Paths1645<NestedConfig1645>;

interface HeavyProps1645 {
  config: DeepPartial1645<NestedConfig1645>;
  path?: ConfigPaths1645;
}

const HeavyComponent1645 = memo(function HeavyComponent1645({ config }: HeavyProps1645) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1645) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1645 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1645: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1645.displayName = 'HeavyComponent1645';
export default HeavyComponent1645;
