'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11889<T> = T extends (infer U)[]
  ? DeepReadonlyArray11889<U>
  : T extends object
  ? DeepReadonlyObject11889<T>
  : T;

interface DeepReadonlyArray11889<T> extends ReadonlyArray<DeepReadonly11889<T>> {}

type DeepReadonlyObject11889<T> = {
  readonly [P in keyof T]: DeepReadonly11889<T[P]>;
};

type UnionToIntersection11889<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11889<T> = UnionToIntersection11889<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11889<T extends unknown[], V> = [...T, V];

type TuplifyUnion11889<T, L = LastOf11889<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11889<TuplifyUnion11889<Exclude<T, L>>, L>;

type DeepPartial11889<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11889<T[P]> }
  : T;

type Paths11889<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11889<K, Paths11889<T[K], Prev11889[D]>> : never }[keyof T]
  : never;

type Prev11889 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11889<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11889 {
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

type ConfigPaths11889 = Paths11889<NestedConfig11889>;

interface HeavyProps11889 {
  config: DeepPartial11889<NestedConfig11889>;
  path?: ConfigPaths11889;
}

const HeavyComponent11889 = memo(function HeavyComponent11889({ config }: HeavyProps11889) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11889) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11889 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11889: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11889.displayName = 'HeavyComponent11889';
export default HeavyComponent11889;
