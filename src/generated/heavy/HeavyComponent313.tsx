'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly313<T> = T extends (infer U)[]
  ? DeepReadonlyArray313<U>
  : T extends object
  ? DeepReadonlyObject313<T>
  : T;

interface DeepReadonlyArray313<T> extends ReadonlyArray<DeepReadonly313<T>> {}

type DeepReadonlyObject313<T> = {
  readonly [P in keyof T]: DeepReadonly313<T[P]>;
};

type UnionToIntersection313<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf313<T> = UnionToIntersection313<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push313<T extends unknown[], V> = [...T, V];

type TuplifyUnion313<T, L = LastOf313<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push313<TuplifyUnion313<Exclude<T, L>>, L>;

type DeepPartial313<T> = T extends object
  ? { [P in keyof T]?: DeepPartial313<T[P]> }
  : T;

type Paths313<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join313<K, Paths313<T[K], Prev313[D]>> : never }[keyof T]
  : never;

type Prev313 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join313<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig313 {
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

type ConfigPaths313 = Paths313<NestedConfig313>;

interface HeavyProps313 {
  config: DeepPartial313<NestedConfig313>;
  path?: ConfigPaths313;
}

const HeavyComponent313 = memo(function HeavyComponent313({ config }: HeavyProps313) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 313) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-313 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H313: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent313.displayName = 'HeavyComponent313';
export default HeavyComponent313;
