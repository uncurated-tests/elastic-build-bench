'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly142<T> = T extends (infer U)[]
  ? DeepReadonlyArray142<U>
  : T extends object
  ? DeepReadonlyObject142<T>
  : T;

interface DeepReadonlyArray142<T> extends ReadonlyArray<DeepReadonly142<T>> {}

type DeepReadonlyObject142<T> = {
  readonly [P in keyof T]: DeepReadonly142<T[P]>;
};

type UnionToIntersection142<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf142<T> = UnionToIntersection142<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push142<T extends unknown[], V> = [...T, V];

type TuplifyUnion142<T, L = LastOf142<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push142<TuplifyUnion142<Exclude<T, L>>, L>;

type DeepPartial142<T> = T extends object
  ? { [P in keyof T]?: DeepPartial142<T[P]> }
  : T;

type Paths142<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join142<K, Paths142<T[K], Prev142[D]>> : never }[keyof T]
  : never;

type Prev142 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join142<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig142 {
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

type ConfigPaths142 = Paths142<NestedConfig142>;

interface HeavyProps142 {
  config: DeepPartial142<NestedConfig142>;
  path?: ConfigPaths142;
}

const HeavyComponent142 = memo(function HeavyComponent142({ config }: HeavyProps142) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 142) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-142 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H142: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent142.displayName = 'HeavyComponent142';
export default HeavyComponent142;
