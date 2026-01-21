'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14007<T> = T extends (infer U)[]
  ? DeepReadonlyArray14007<U>
  : T extends object
  ? DeepReadonlyObject14007<T>
  : T;

interface DeepReadonlyArray14007<T> extends ReadonlyArray<DeepReadonly14007<T>> {}

type DeepReadonlyObject14007<T> = {
  readonly [P in keyof T]: DeepReadonly14007<T[P]>;
};

type UnionToIntersection14007<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14007<T> = UnionToIntersection14007<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14007<T extends unknown[], V> = [...T, V];

type TuplifyUnion14007<T, L = LastOf14007<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14007<TuplifyUnion14007<Exclude<T, L>>, L>;

type DeepPartial14007<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14007<T[P]> }
  : T;

type Paths14007<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14007<K, Paths14007<T[K], Prev14007[D]>> : never }[keyof T]
  : never;

type Prev14007 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14007<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14007 {
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

type ConfigPaths14007 = Paths14007<NestedConfig14007>;

interface HeavyProps14007 {
  config: DeepPartial14007<NestedConfig14007>;
  path?: ConfigPaths14007;
}

const HeavyComponent14007 = memo(function HeavyComponent14007({ config }: HeavyProps14007) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14007) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14007 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14007: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14007.displayName = 'HeavyComponent14007';
export default HeavyComponent14007;
