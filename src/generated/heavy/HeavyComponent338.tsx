'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly338<T> = T extends (infer U)[]
  ? DeepReadonlyArray338<U>
  : T extends object
  ? DeepReadonlyObject338<T>
  : T;

interface DeepReadonlyArray338<T> extends ReadonlyArray<DeepReadonly338<T>> {}

type DeepReadonlyObject338<T> = {
  readonly [P in keyof T]: DeepReadonly338<T[P]>;
};

type UnionToIntersection338<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf338<T> = UnionToIntersection338<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push338<T extends unknown[], V> = [...T, V];

type TuplifyUnion338<T, L = LastOf338<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push338<TuplifyUnion338<Exclude<T, L>>, L>;

type DeepPartial338<T> = T extends object
  ? { [P in keyof T]?: DeepPartial338<T[P]> }
  : T;

type Paths338<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join338<K, Paths338<T[K], Prev338[D]>> : never }[keyof T]
  : never;

type Prev338 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join338<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig338 {
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

type ConfigPaths338 = Paths338<NestedConfig338>;

interface HeavyProps338 {
  config: DeepPartial338<NestedConfig338>;
  path?: ConfigPaths338;
}

const HeavyComponent338 = memo(function HeavyComponent338({ config }: HeavyProps338) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 338) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-338 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H338: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent338.displayName = 'HeavyComponent338';
export default HeavyComponent338;
