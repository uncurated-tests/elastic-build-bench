'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11872<T> = T extends (infer U)[]
  ? DeepReadonlyArray11872<U>
  : T extends object
  ? DeepReadonlyObject11872<T>
  : T;

interface DeepReadonlyArray11872<T> extends ReadonlyArray<DeepReadonly11872<T>> {}

type DeepReadonlyObject11872<T> = {
  readonly [P in keyof T]: DeepReadonly11872<T[P]>;
};

type UnionToIntersection11872<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11872<T> = UnionToIntersection11872<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11872<T extends unknown[], V> = [...T, V];

type TuplifyUnion11872<T, L = LastOf11872<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11872<TuplifyUnion11872<Exclude<T, L>>, L>;

type DeepPartial11872<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11872<T[P]> }
  : T;

type Paths11872<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11872<K, Paths11872<T[K], Prev11872[D]>> : never }[keyof T]
  : never;

type Prev11872 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11872<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11872 {
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

type ConfigPaths11872 = Paths11872<NestedConfig11872>;

interface HeavyProps11872 {
  config: DeepPartial11872<NestedConfig11872>;
  path?: ConfigPaths11872;
}

const HeavyComponent11872 = memo(function HeavyComponent11872({ config }: HeavyProps11872) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11872) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11872 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11872: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11872.displayName = 'HeavyComponent11872';
export default HeavyComponent11872;
