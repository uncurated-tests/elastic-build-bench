'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11304<T> = T extends (infer U)[]
  ? DeepReadonlyArray11304<U>
  : T extends object
  ? DeepReadonlyObject11304<T>
  : T;

interface DeepReadonlyArray11304<T> extends ReadonlyArray<DeepReadonly11304<T>> {}

type DeepReadonlyObject11304<T> = {
  readonly [P in keyof T]: DeepReadonly11304<T[P]>;
};

type UnionToIntersection11304<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11304<T> = UnionToIntersection11304<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11304<T extends unknown[], V> = [...T, V];

type TuplifyUnion11304<T, L = LastOf11304<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11304<TuplifyUnion11304<Exclude<T, L>>, L>;

type DeepPartial11304<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11304<T[P]> }
  : T;

type Paths11304<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11304<K, Paths11304<T[K], Prev11304[D]>> : never }[keyof T]
  : never;

type Prev11304 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11304<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11304 {
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

type ConfigPaths11304 = Paths11304<NestedConfig11304>;

interface HeavyProps11304 {
  config: DeepPartial11304<NestedConfig11304>;
  path?: ConfigPaths11304;
}

const HeavyComponent11304 = memo(function HeavyComponent11304({ config }: HeavyProps11304) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11304) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11304 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11304: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11304.displayName = 'HeavyComponent11304';
export default HeavyComponent11304;
