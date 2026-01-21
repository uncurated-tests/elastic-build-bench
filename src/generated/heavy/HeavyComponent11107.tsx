'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11107<T> = T extends (infer U)[]
  ? DeepReadonlyArray11107<U>
  : T extends object
  ? DeepReadonlyObject11107<T>
  : T;

interface DeepReadonlyArray11107<T> extends ReadonlyArray<DeepReadonly11107<T>> {}

type DeepReadonlyObject11107<T> = {
  readonly [P in keyof T]: DeepReadonly11107<T[P]>;
};

type UnionToIntersection11107<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11107<T> = UnionToIntersection11107<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11107<T extends unknown[], V> = [...T, V];

type TuplifyUnion11107<T, L = LastOf11107<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11107<TuplifyUnion11107<Exclude<T, L>>, L>;

type DeepPartial11107<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11107<T[P]> }
  : T;

type Paths11107<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11107<K, Paths11107<T[K], Prev11107[D]>> : never }[keyof T]
  : never;

type Prev11107 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11107<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11107 {
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

type ConfigPaths11107 = Paths11107<NestedConfig11107>;

interface HeavyProps11107 {
  config: DeepPartial11107<NestedConfig11107>;
  path?: ConfigPaths11107;
}

const HeavyComponent11107 = memo(function HeavyComponent11107({ config }: HeavyProps11107) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11107) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11107 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11107: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11107.displayName = 'HeavyComponent11107';
export default HeavyComponent11107;
