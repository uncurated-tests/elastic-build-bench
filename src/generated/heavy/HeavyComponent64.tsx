'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly64<T> = T extends (infer U)[]
  ? DeepReadonlyArray64<U>
  : T extends object
  ? DeepReadonlyObject64<T>
  : T;

interface DeepReadonlyArray64<T> extends ReadonlyArray<DeepReadonly64<T>> {}

type DeepReadonlyObject64<T> = {
  readonly [P in keyof T]: DeepReadonly64<T[P]>;
};

type UnionToIntersection64<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf64<T> = UnionToIntersection64<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push64<T extends unknown[], V> = [...T, V];

type TuplifyUnion64<T, L = LastOf64<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push64<TuplifyUnion64<Exclude<T, L>>, L>;

type DeepPartial64<T> = T extends object
  ? { [P in keyof T]?: DeepPartial64<T[P]> }
  : T;

type Paths64<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join64<K, Paths64<T[K], Prev64[D]>> : never }[keyof T]
  : never;

type Prev64 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join64<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig64 {
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

type ConfigPaths64 = Paths64<NestedConfig64>;

interface HeavyProps64 {
  config: DeepPartial64<NestedConfig64>;
  path?: ConfigPaths64;
}

const HeavyComponent64 = memo(function HeavyComponent64({ config }: HeavyProps64) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 64) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-64 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H64: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent64.displayName = 'HeavyComponent64';
export default HeavyComponent64;
