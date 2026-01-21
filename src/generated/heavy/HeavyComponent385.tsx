'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly385<T> = T extends (infer U)[]
  ? DeepReadonlyArray385<U>
  : T extends object
  ? DeepReadonlyObject385<T>
  : T;

interface DeepReadonlyArray385<T> extends ReadonlyArray<DeepReadonly385<T>> {}

type DeepReadonlyObject385<T> = {
  readonly [P in keyof T]: DeepReadonly385<T[P]>;
};

type UnionToIntersection385<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf385<T> = UnionToIntersection385<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push385<T extends unknown[], V> = [...T, V];

type TuplifyUnion385<T, L = LastOf385<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push385<TuplifyUnion385<Exclude<T, L>>, L>;

type DeepPartial385<T> = T extends object
  ? { [P in keyof T]?: DeepPartial385<T[P]> }
  : T;

type Paths385<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join385<K, Paths385<T[K], Prev385[D]>> : never }[keyof T]
  : never;

type Prev385 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join385<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig385 {
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

type ConfigPaths385 = Paths385<NestedConfig385>;

interface HeavyProps385 {
  config: DeepPartial385<NestedConfig385>;
  path?: ConfigPaths385;
}

const HeavyComponent385 = memo(function HeavyComponent385({ config }: HeavyProps385) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 385) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-385 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H385: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent385.displayName = 'HeavyComponent385';
export default HeavyComponent385;
