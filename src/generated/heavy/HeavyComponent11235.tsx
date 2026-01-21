'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11235<T> = T extends (infer U)[]
  ? DeepReadonlyArray11235<U>
  : T extends object
  ? DeepReadonlyObject11235<T>
  : T;

interface DeepReadonlyArray11235<T> extends ReadonlyArray<DeepReadonly11235<T>> {}

type DeepReadonlyObject11235<T> = {
  readonly [P in keyof T]: DeepReadonly11235<T[P]>;
};

type UnionToIntersection11235<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11235<T> = UnionToIntersection11235<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11235<T extends unknown[], V> = [...T, V];

type TuplifyUnion11235<T, L = LastOf11235<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11235<TuplifyUnion11235<Exclude<T, L>>, L>;

type DeepPartial11235<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11235<T[P]> }
  : T;

type Paths11235<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11235<K, Paths11235<T[K], Prev11235[D]>> : never }[keyof T]
  : never;

type Prev11235 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11235<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11235 {
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

type ConfigPaths11235 = Paths11235<NestedConfig11235>;

interface HeavyProps11235 {
  config: DeepPartial11235<NestedConfig11235>;
  path?: ConfigPaths11235;
}

const HeavyComponent11235 = memo(function HeavyComponent11235({ config }: HeavyProps11235) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11235) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11235 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11235: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11235.displayName = 'HeavyComponent11235';
export default HeavyComponent11235;
