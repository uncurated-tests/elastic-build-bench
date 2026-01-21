'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1370<T> = T extends (infer U)[]
  ? DeepReadonlyArray1370<U>
  : T extends object
  ? DeepReadonlyObject1370<T>
  : T;

interface DeepReadonlyArray1370<T> extends ReadonlyArray<DeepReadonly1370<T>> {}

type DeepReadonlyObject1370<T> = {
  readonly [P in keyof T]: DeepReadonly1370<T[P]>;
};

type UnionToIntersection1370<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1370<T> = UnionToIntersection1370<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1370<T extends unknown[], V> = [...T, V];

type TuplifyUnion1370<T, L = LastOf1370<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1370<TuplifyUnion1370<Exclude<T, L>>, L>;

type DeepPartial1370<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1370<T[P]> }
  : T;

type Paths1370<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1370<K, Paths1370<T[K], Prev1370[D]>> : never }[keyof T]
  : never;

type Prev1370 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1370<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1370 {
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

type ConfigPaths1370 = Paths1370<NestedConfig1370>;

interface HeavyProps1370 {
  config: DeepPartial1370<NestedConfig1370>;
  path?: ConfigPaths1370;
}

const HeavyComponent1370 = memo(function HeavyComponent1370({ config }: HeavyProps1370) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1370) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1370 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1370: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1370.displayName = 'HeavyComponent1370';
export default HeavyComponent1370;
