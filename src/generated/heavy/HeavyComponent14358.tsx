'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14358<T> = T extends (infer U)[]
  ? DeepReadonlyArray14358<U>
  : T extends object
  ? DeepReadonlyObject14358<T>
  : T;

interface DeepReadonlyArray14358<T> extends ReadonlyArray<DeepReadonly14358<T>> {}

type DeepReadonlyObject14358<T> = {
  readonly [P in keyof T]: DeepReadonly14358<T[P]>;
};

type UnionToIntersection14358<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14358<T> = UnionToIntersection14358<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14358<T extends unknown[], V> = [...T, V];

type TuplifyUnion14358<T, L = LastOf14358<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14358<TuplifyUnion14358<Exclude<T, L>>, L>;

type DeepPartial14358<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14358<T[P]> }
  : T;

type Paths14358<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14358<K, Paths14358<T[K], Prev14358[D]>> : never }[keyof T]
  : never;

type Prev14358 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14358<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14358 {
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

type ConfigPaths14358 = Paths14358<NestedConfig14358>;

interface HeavyProps14358 {
  config: DeepPartial14358<NestedConfig14358>;
  path?: ConfigPaths14358;
}

const HeavyComponent14358 = memo(function HeavyComponent14358({ config }: HeavyProps14358) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14358) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14358 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14358: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14358.displayName = 'HeavyComponent14358';
export default HeavyComponent14358;
