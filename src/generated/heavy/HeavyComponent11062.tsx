'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11062<T> = T extends (infer U)[]
  ? DeepReadonlyArray11062<U>
  : T extends object
  ? DeepReadonlyObject11062<T>
  : T;

interface DeepReadonlyArray11062<T> extends ReadonlyArray<DeepReadonly11062<T>> {}

type DeepReadonlyObject11062<T> = {
  readonly [P in keyof T]: DeepReadonly11062<T[P]>;
};

type UnionToIntersection11062<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11062<T> = UnionToIntersection11062<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11062<T extends unknown[], V> = [...T, V];

type TuplifyUnion11062<T, L = LastOf11062<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11062<TuplifyUnion11062<Exclude<T, L>>, L>;

type DeepPartial11062<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11062<T[P]> }
  : T;

type Paths11062<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11062<K, Paths11062<T[K], Prev11062[D]>> : never }[keyof T]
  : never;

type Prev11062 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11062<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11062 {
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

type ConfigPaths11062 = Paths11062<NestedConfig11062>;

interface HeavyProps11062 {
  config: DeepPartial11062<NestedConfig11062>;
  path?: ConfigPaths11062;
}

const HeavyComponent11062 = memo(function HeavyComponent11062({ config }: HeavyProps11062) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11062) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11062 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11062: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11062.displayName = 'HeavyComponent11062';
export default HeavyComponent11062;
