'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11377<T> = T extends (infer U)[]
  ? DeepReadonlyArray11377<U>
  : T extends object
  ? DeepReadonlyObject11377<T>
  : T;

interface DeepReadonlyArray11377<T> extends ReadonlyArray<DeepReadonly11377<T>> {}

type DeepReadonlyObject11377<T> = {
  readonly [P in keyof T]: DeepReadonly11377<T[P]>;
};

type UnionToIntersection11377<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11377<T> = UnionToIntersection11377<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11377<T extends unknown[], V> = [...T, V];

type TuplifyUnion11377<T, L = LastOf11377<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11377<TuplifyUnion11377<Exclude<T, L>>, L>;

type DeepPartial11377<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11377<T[P]> }
  : T;

type Paths11377<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11377<K, Paths11377<T[K], Prev11377[D]>> : never }[keyof T]
  : never;

type Prev11377 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11377<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11377 {
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

type ConfigPaths11377 = Paths11377<NestedConfig11377>;

interface HeavyProps11377 {
  config: DeepPartial11377<NestedConfig11377>;
  path?: ConfigPaths11377;
}

const HeavyComponent11377 = memo(function HeavyComponent11377({ config }: HeavyProps11377) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11377) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11377 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11377: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11377.displayName = 'HeavyComponent11377';
export default HeavyComponent11377;
