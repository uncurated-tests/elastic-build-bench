'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11779<T> = T extends (infer U)[]
  ? DeepReadonlyArray11779<U>
  : T extends object
  ? DeepReadonlyObject11779<T>
  : T;

interface DeepReadonlyArray11779<T> extends ReadonlyArray<DeepReadonly11779<T>> {}

type DeepReadonlyObject11779<T> = {
  readonly [P in keyof T]: DeepReadonly11779<T[P]>;
};

type UnionToIntersection11779<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11779<T> = UnionToIntersection11779<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11779<T extends unknown[], V> = [...T, V];

type TuplifyUnion11779<T, L = LastOf11779<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11779<TuplifyUnion11779<Exclude<T, L>>, L>;

type DeepPartial11779<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11779<T[P]> }
  : T;

type Paths11779<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11779<K, Paths11779<T[K], Prev11779[D]>> : never }[keyof T]
  : never;

type Prev11779 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11779<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11779 {
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

type ConfigPaths11779 = Paths11779<NestedConfig11779>;

interface HeavyProps11779 {
  config: DeepPartial11779<NestedConfig11779>;
  path?: ConfigPaths11779;
}

const HeavyComponent11779 = memo(function HeavyComponent11779({ config }: HeavyProps11779) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11779) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11779 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11779: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11779.displayName = 'HeavyComponent11779';
export default HeavyComponent11779;
