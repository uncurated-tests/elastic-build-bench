'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1196<T> = T extends (infer U)[]
  ? DeepReadonlyArray1196<U>
  : T extends object
  ? DeepReadonlyObject1196<T>
  : T;

interface DeepReadonlyArray1196<T> extends ReadonlyArray<DeepReadonly1196<T>> {}

type DeepReadonlyObject1196<T> = {
  readonly [P in keyof T]: DeepReadonly1196<T[P]>;
};

type UnionToIntersection1196<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1196<T> = UnionToIntersection1196<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1196<T extends unknown[], V> = [...T, V];

type TuplifyUnion1196<T, L = LastOf1196<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1196<TuplifyUnion1196<Exclude<T, L>>, L>;

type DeepPartial1196<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1196<T[P]> }
  : T;

type Paths1196<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1196<K, Paths1196<T[K], Prev1196[D]>> : never }[keyof T]
  : never;

type Prev1196 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1196<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1196 {
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

type ConfigPaths1196 = Paths1196<NestedConfig1196>;

interface HeavyProps1196 {
  config: DeepPartial1196<NestedConfig1196>;
  path?: ConfigPaths1196;
}

const HeavyComponent1196 = memo(function HeavyComponent1196({ config }: HeavyProps1196) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1196) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1196 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1196: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1196.displayName = 'HeavyComponent1196';
export default HeavyComponent1196;
