'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11327<T> = T extends (infer U)[]
  ? DeepReadonlyArray11327<U>
  : T extends object
  ? DeepReadonlyObject11327<T>
  : T;

interface DeepReadonlyArray11327<T> extends ReadonlyArray<DeepReadonly11327<T>> {}

type DeepReadonlyObject11327<T> = {
  readonly [P in keyof T]: DeepReadonly11327<T[P]>;
};

type UnionToIntersection11327<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11327<T> = UnionToIntersection11327<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11327<T extends unknown[], V> = [...T, V];

type TuplifyUnion11327<T, L = LastOf11327<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11327<TuplifyUnion11327<Exclude<T, L>>, L>;

type DeepPartial11327<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11327<T[P]> }
  : T;

type Paths11327<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11327<K, Paths11327<T[K], Prev11327[D]>> : never }[keyof T]
  : never;

type Prev11327 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11327<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11327 {
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

type ConfigPaths11327 = Paths11327<NestedConfig11327>;

interface HeavyProps11327 {
  config: DeepPartial11327<NestedConfig11327>;
  path?: ConfigPaths11327;
}

const HeavyComponent11327 = memo(function HeavyComponent11327({ config }: HeavyProps11327) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11327) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11327 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11327: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11327.displayName = 'HeavyComponent11327';
export default HeavyComponent11327;
