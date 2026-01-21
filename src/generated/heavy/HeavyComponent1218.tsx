'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1218<T> = T extends (infer U)[]
  ? DeepReadonlyArray1218<U>
  : T extends object
  ? DeepReadonlyObject1218<T>
  : T;

interface DeepReadonlyArray1218<T> extends ReadonlyArray<DeepReadonly1218<T>> {}

type DeepReadonlyObject1218<T> = {
  readonly [P in keyof T]: DeepReadonly1218<T[P]>;
};

type UnionToIntersection1218<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1218<T> = UnionToIntersection1218<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1218<T extends unknown[], V> = [...T, V];

type TuplifyUnion1218<T, L = LastOf1218<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1218<TuplifyUnion1218<Exclude<T, L>>, L>;

type DeepPartial1218<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1218<T[P]> }
  : T;

type Paths1218<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1218<K, Paths1218<T[K], Prev1218[D]>> : never }[keyof T]
  : never;

type Prev1218 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1218<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1218 {
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

type ConfigPaths1218 = Paths1218<NestedConfig1218>;

interface HeavyProps1218 {
  config: DeepPartial1218<NestedConfig1218>;
  path?: ConfigPaths1218;
}

const HeavyComponent1218 = memo(function HeavyComponent1218({ config }: HeavyProps1218) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1218) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1218 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1218: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1218.displayName = 'HeavyComponent1218';
export default HeavyComponent1218;
