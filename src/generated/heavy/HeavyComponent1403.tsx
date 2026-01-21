'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1403<T> = T extends (infer U)[]
  ? DeepReadonlyArray1403<U>
  : T extends object
  ? DeepReadonlyObject1403<T>
  : T;

interface DeepReadonlyArray1403<T> extends ReadonlyArray<DeepReadonly1403<T>> {}

type DeepReadonlyObject1403<T> = {
  readonly [P in keyof T]: DeepReadonly1403<T[P]>;
};

type UnionToIntersection1403<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1403<T> = UnionToIntersection1403<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1403<T extends unknown[], V> = [...T, V];

type TuplifyUnion1403<T, L = LastOf1403<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1403<TuplifyUnion1403<Exclude<T, L>>, L>;

type DeepPartial1403<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1403<T[P]> }
  : T;

type Paths1403<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1403<K, Paths1403<T[K], Prev1403[D]>> : never }[keyof T]
  : never;

type Prev1403 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1403<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1403 {
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

type ConfigPaths1403 = Paths1403<NestedConfig1403>;

interface HeavyProps1403 {
  config: DeepPartial1403<NestedConfig1403>;
  path?: ConfigPaths1403;
}

const HeavyComponent1403 = memo(function HeavyComponent1403({ config }: HeavyProps1403) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1403) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1403 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1403: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1403.displayName = 'HeavyComponent1403';
export default HeavyComponent1403;
