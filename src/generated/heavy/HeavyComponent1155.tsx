'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1155<T> = T extends (infer U)[]
  ? DeepReadonlyArray1155<U>
  : T extends object
  ? DeepReadonlyObject1155<T>
  : T;

interface DeepReadonlyArray1155<T> extends ReadonlyArray<DeepReadonly1155<T>> {}

type DeepReadonlyObject1155<T> = {
  readonly [P in keyof T]: DeepReadonly1155<T[P]>;
};

type UnionToIntersection1155<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1155<T> = UnionToIntersection1155<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1155<T extends unknown[], V> = [...T, V];

type TuplifyUnion1155<T, L = LastOf1155<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1155<TuplifyUnion1155<Exclude<T, L>>, L>;

type DeepPartial1155<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1155<T[P]> }
  : T;

type Paths1155<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1155<K, Paths1155<T[K], Prev1155[D]>> : never }[keyof T]
  : never;

type Prev1155 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1155<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1155 {
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

type ConfigPaths1155 = Paths1155<NestedConfig1155>;

interface HeavyProps1155 {
  config: DeepPartial1155<NestedConfig1155>;
  path?: ConfigPaths1155;
}

const HeavyComponent1155 = memo(function HeavyComponent1155({ config }: HeavyProps1155) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1155) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1155 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1155: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1155.displayName = 'HeavyComponent1155';
export default HeavyComponent1155;
