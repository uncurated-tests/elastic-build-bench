'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1255<T> = T extends (infer U)[]
  ? DeepReadonlyArray1255<U>
  : T extends object
  ? DeepReadonlyObject1255<T>
  : T;

interface DeepReadonlyArray1255<T> extends ReadonlyArray<DeepReadonly1255<T>> {}

type DeepReadonlyObject1255<T> = {
  readonly [P in keyof T]: DeepReadonly1255<T[P]>;
};

type UnionToIntersection1255<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1255<T> = UnionToIntersection1255<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1255<T extends unknown[], V> = [...T, V];

type TuplifyUnion1255<T, L = LastOf1255<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1255<TuplifyUnion1255<Exclude<T, L>>, L>;

type DeepPartial1255<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1255<T[P]> }
  : T;

type Paths1255<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1255<K, Paths1255<T[K], Prev1255[D]>> : never }[keyof T]
  : never;

type Prev1255 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1255<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1255 {
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

type ConfigPaths1255 = Paths1255<NestedConfig1255>;

interface HeavyProps1255 {
  config: DeepPartial1255<NestedConfig1255>;
  path?: ConfigPaths1255;
}

const HeavyComponent1255 = memo(function HeavyComponent1255({ config }: HeavyProps1255) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1255) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1255 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1255: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1255.displayName = 'HeavyComponent1255';
export default HeavyComponent1255;
