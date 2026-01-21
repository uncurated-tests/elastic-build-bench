'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1146<T> = T extends (infer U)[]
  ? DeepReadonlyArray1146<U>
  : T extends object
  ? DeepReadonlyObject1146<T>
  : T;

interface DeepReadonlyArray1146<T> extends ReadonlyArray<DeepReadonly1146<T>> {}

type DeepReadonlyObject1146<T> = {
  readonly [P in keyof T]: DeepReadonly1146<T[P]>;
};

type UnionToIntersection1146<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1146<T> = UnionToIntersection1146<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1146<T extends unknown[], V> = [...T, V];

type TuplifyUnion1146<T, L = LastOf1146<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1146<TuplifyUnion1146<Exclude<T, L>>, L>;

type DeepPartial1146<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1146<T[P]> }
  : T;

type Paths1146<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1146<K, Paths1146<T[K], Prev1146[D]>> : never }[keyof T]
  : never;

type Prev1146 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1146<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1146 {
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

type ConfigPaths1146 = Paths1146<NestedConfig1146>;

interface HeavyProps1146 {
  config: DeepPartial1146<NestedConfig1146>;
  path?: ConfigPaths1146;
}

const HeavyComponent1146 = memo(function HeavyComponent1146({ config }: HeavyProps1146) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1146) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1146 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1146: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1146.displayName = 'HeavyComponent1146';
export default HeavyComponent1146;
