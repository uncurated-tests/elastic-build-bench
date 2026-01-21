'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11051<T> = T extends (infer U)[]
  ? DeepReadonlyArray11051<U>
  : T extends object
  ? DeepReadonlyObject11051<T>
  : T;

interface DeepReadonlyArray11051<T> extends ReadonlyArray<DeepReadonly11051<T>> {}

type DeepReadonlyObject11051<T> = {
  readonly [P in keyof T]: DeepReadonly11051<T[P]>;
};

type UnionToIntersection11051<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11051<T> = UnionToIntersection11051<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11051<T extends unknown[], V> = [...T, V];

type TuplifyUnion11051<T, L = LastOf11051<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11051<TuplifyUnion11051<Exclude<T, L>>, L>;

type DeepPartial11051<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11051<T[P]> }
  : T;

type Paths11051<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11051<K, Paths11051<T[K], Prev11051[D]>> : never }[keyof T]
  : never;

type Prev11051 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11051<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11051 {
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

type ConfigPaths11051 = Paths11051<NestedConfig11051>;

interface HeavyProps11051 {
  config: DeepPartial11051<NestedConfig11051>;
  path?: ConfigPaths11051;
}

const HeavyComponent11051 = memo(function HeavyComponent11051({ config }: HeavyProps11051) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11051) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11051 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11051: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11051.displayName = 'HeavyComponent11051';
export default HeavyComponent11051;
