'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1937<T> = T extends (infer U)[]
  ? DeepReadonlyArray1937<U>
  : T extends object
  ? DeepReadonlyObject1937<T>
  : T;

interface DeepReadonlyArray1937<T> extends ReadonlyArray<DeepReadonly1937<T>> {}

type DeepReadonlyObject1937<T> = {
  readonly [P in keyof T]: DeepReadonly1937<T[P]>;
};

type UnionToIntersection1937<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1937<T> = UnionToIntersection1937<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1937<T extends unknown[], V> = [...T, V];

type TuplifyUnion1937<T, L = LastOf1937<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1937<TuplifyUnion1937<Exclude<T, L>>, L>;

type DeepPartial1937<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1937<T[P]> }
  : T;

type Paths1937<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1937<K, Paths1937<T[K], Prev1937[D]>> : never }[keyof T]
  : never;

type Prev1937 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1937<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1937 {
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

type ConfigPaths1937 = Paths1937<NestedConfig1937>;

interface HeavyProps1937 {
  config: DeepPartial1937<NestedConfig1937>;
  path?: ConfigPaths1937;
}

const HeavyComponent1937 = memo(function HeavyComponent1937({ config }: HeavyProps1937) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1937) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1937 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1937: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1937.displayName = 'HeavyComponent1937';
export default HeavyComponent1937;
