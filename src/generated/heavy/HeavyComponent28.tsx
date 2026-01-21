'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly28<T> = T extends (infer U)[]
  ? DeepReadonlyArray28<U>
  : T extends object
  ? DeepReadonlyObject28<T>
  : T;

interface DeepReadonlyArray28<T> extends ReadonlyArray<DeepReadonly28<T>> {}

type DeepReadonlyObject28<T> = {
  readonly [P in keyof T]: DeepReadonly28<T[P]>;
};

type UnionToIntersection28<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf28<T> = UnionToIntersection28<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push28<T extends unknown[], V> = [...T, V];

type TuplifyUnion28<T, L = LastOf28<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push28<TuplifyUnion28<Exclude<T, L>>, L>;

type DeepPartial28<T> = T extends object
  ? { [P in keyof T]?: DeepPartial28<T[P]> }
  : T;

type Paths28<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join28<K, Paths28<T[K], Prev28[D]>> : never }[keyof T]
  : never;

type Prev28 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join28<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig28 {
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

type ConfigPaths28 = Paths28<NestedConfig28>;

interface HeavyProps28 {
  config: DeepPartial28<NestedConfig28>;
  path?: ConfigPaths28;
}

const HeavyComponent28 = memo(function HeavyComponent28({ config }: HeavyProps28) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 28) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-28 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H28: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent28.displayName = 'HeavyComponent28';
export default HeavyComponent28;
