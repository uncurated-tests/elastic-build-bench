'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly273<T> = T extends (infer U)[]
  ? DeepReadonlyArray273<U>
  : T extends object
  ? DeepReadonlyObject273<T>
  : T;

interface DeepReadonlyArray273<T> extends ReadonlyArray<DeepReadonly273<T>> {}

type DeepReadonlyObject273<T> = {
  readonly [P in keyof T]: DeepReadonly273<T[P]>;
};

type UnionToIntersection273<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf273<T> = UnionToIntersection273<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push273<T extends unknown[], V> = [...T, V];

type TuplifyUnion273<T, L = LastOf273<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push273<TuplifyUnion273<Exclude<T, L>>, L>;

type DeepPartial273<T> = T extends object
  ? { [P in keyof T]?: DeepPartial273<T[P]> }
  : T;

type Paths273<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join273<K, Paths273<T[K], Prev273[D]>> : never }[keyof T]
  : never;

type Prev273 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join273<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig273 {
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

type ConfigPaths273 = Paths273<NestedConfig273>;

interface HeavyProps273 {
  config: DeepPartial273<NestedConfig273>;
  path?: ConfigPaths273;
}

const HeavyComponent273 = memo(function HeavyComponent273({ config }: HeavyProps273) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 273) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-273 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H273: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent273.displayName = 'HeavyComponent273';
export default HeavyComponent273;
