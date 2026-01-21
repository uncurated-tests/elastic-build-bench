'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1966<T> = T extends (infer U)[]
  ? DeepReadonlyArray1966<U>
  : T extends object
  ? DeepReadonlyObject1966<T>
  : T;

interface DeepReadonlyArray1966<T> extends ReadonlyArray<DeepReadonly1966<T>> {}

type DeepReadonlyObject1966<T> = {
  readonly [P in keyof T]: DeepReadonly1966<T[P]>;
};

type UnionToIntersection1966<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1966<T> = UnionToIntersection1966<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1966<T extends unknown[], V> = [...T, V];

type TuplifyUnion1966<T, L = LastOf1966<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1966<TuplifyUnion1966<Exclude<T, L>>, L>;

type DeepPartial1966<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1966<T[P]> }
  : T;

type Paths1966<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1966<K, Paths1966<T[K], Prev1966[D]>> : never }[keyof T]
  : never;

type Prev1966 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1966<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1966 {
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

type ConfigPaths1966 = Paths1966<NestedConfig1966>;

interface HeavyProps1966 {
  config: DeepPartial1966<NestedConfig1966>;
  path?: ConfigPaths1966;
}

const HeavyComponent1966 = memo(function HeavyComponent1966({ config }: HeavyProps1966) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1966) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1966 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1966: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1966.displayName = 'HeavyComponent1966';
export default HeavyComponent1966;
