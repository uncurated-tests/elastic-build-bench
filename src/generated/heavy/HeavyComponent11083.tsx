'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11083<T> = T extends (infer U)[]
  ? DeepReadonlyArray11083<U>
  : T extends object
  ? DeepReadonlyObject11083<T>
  : T;

interface DeepReadonlyArray11083<T> extends ReadonlyArray<DeepReadonly11083<T>> {}

type DeepReadonlyObject11083<T> = {
  readonly [P in keyof T]: DeepReadonly11083<T[P]>;
};

type UnionToIntersection11083<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11083<T> = UnionToIntersection11083<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11083<T extends unknown[], V> = [...T, V];

type TuplifyUnion11083<T, L = LastOf11083<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11083<TuplifyUnion11083<Exclude<T, L>>, L>;

type DeepPartial11083<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11083<T[P]> }
  : T;

type Paths11083<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11083<K, Paths11083<T[K], Prev11083[D]>> : never }[keyof T]
  : never;

type Prev11083 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11083<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11083 {
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

type ConfigPaths11083 = Paths11083<NestedConfig11083>;

interface HeavyProps11083 {
  config: DeepPartial11083<NestedConfig11083>;
  path?: ConfigPaths11083;
}

const HeavyComponent11083 = memo(function HeavyComponent11083({ config }: HeavyProps11083) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11083) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11083 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11083: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11083.displayName = 'HeavyComponent11083';
export default HeavyComponent11083;
