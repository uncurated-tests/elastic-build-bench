'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14379<T> = T extends (infer U)[]
  ? DeepReadonlyArray14379<U>
  : T extends object
  ? DeepReadonlyObject14379<T>
  : T;

interface DeepReadonlyArray14379<T> extends ReadonlyArray<DeepReadonly14379<T>> {}

type DeepReadonlyObject14379<T> = {
  readonly [P in keyof T]: DeepReadonly14379<T[P]>;
};

type UnionToIntersection14379<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14379<T> = UnionToIntersection14379<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14379<T extends unknown[], V> = [...T, V];

type TuplifyUnion14379<T, L = LastOf14379<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14379<TuplifyUnion14379<Exclude<T, L>>, L>;

type DeepPartial14379<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14379<T[P]> }
  : T;

type Paths14379<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14379<K, Paths14379<T[K], Prev14379[D]>> : never }[keyof T]
  : never;

type Prev14379 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14379<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14379 {
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

type ConfigPaths14379 = Paths14379<NestedConfig14379>;

interface HeavyProps14379 {
  config: DeepPartial14379<NestedConfig14379>;
  path?: ConfigPaths14379;
}

const HeavyComponent14379 = memo(function HeavyComponent14379({ config }: HeavyProps14379) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14379) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14379 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14379: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14379.displayName = 'HeavyComponent14379';
export default HeavyComponent14379;
