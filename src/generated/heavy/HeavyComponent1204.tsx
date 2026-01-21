'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1204<T> = T extends (infer U)[]
  ? DeepReadonlyArray1204<U>
  : T extends object
  ? DeepReadonlyObject1204<T>
  : T;

interface DeepReadonlyArray1204<T> extends ReadonlyArray<DeepReadonly1204<T>> {}

type DeepReadonlyObject1204<T> = {
  readonly [P in keyof T]: DeepReadonly1204<T[P]>;
};

type UnionToIntersection1204<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1204<T> = UnionToIntersection1204<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1204<T extends unknown[], V> = [...T, V];

type TuplifyUnion1204<T, L = LastOf1204<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1204<TuplifyUnion1204<Exclude<T, L>>, L>;

type DeepPartial1204<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1204<T[P]> }
  : T;

type Paths1204<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1204<K, Paths1204<T[K], Prev1204[D]>> : never }[keyof T]
  : never;

type Prev1204 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1204<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1204 {
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

type ConfigPaths1204 = Paths1204<NestedConfig1204>;

interface HeavyProps1204 {
  config: DeepPartial1204<NestedConfig1204>;
  path?: ConfigPaths1204;
}

const HeavyComponent1204 = memo(function HeavyComponent1204({ config }: HeavyProps1204) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1204) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1204 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1204: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1204.displayName = 'HeavyComponent1204';
export default HeavyComponent1204;
