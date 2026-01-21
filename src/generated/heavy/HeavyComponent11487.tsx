'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11487<T> = T extends (infer U)[]
  ? DeepReadonlyArray11487<U>
  : T extends object
  ? DeepReadonlyObject11487<T>
  : T;

interface DeepReadonlyArray11487<T> extends ReadonlyArray<DeepReadonly11487<T>> {}

type DeepReadonlyObject11487<T> = {
  readonly [P in keyof T]: DeepReadonly11487<T[P]>;
};

type UnionToIntersection11487<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11487<T> = UnionToIntersection11487<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11487<T extends unknown[], V> = [...T, V];

type TuplifyUnion11487<T, L = LastOf11487<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11487<TuplifyUnion11487<Exclude<T, L>>, L>;

type DeepPartial11487<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11487<T[P]> }
  : T;

type Paths11487<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11487<K, Paths11487<T[K], Prev11487[D]>> : never }[keyof T]
  : never;

type Prev11487 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11487<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11487 {
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

type ConfigPaths11487 = Paths11487<NestedConfig11487>;

interface HeavyProps11487 {
  config: DeepPartial11487<NestedConfig11487>;
  path?: ConfigPaths11487;
}

const HeavyComponent11487 = memo(function HeavyComponent11487({ config }: HeavyProps11487) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11487) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11487 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11487: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11487.displayName = 'HeavyComponent11487';
export default HeavyComponent11487;
