'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11101<T> = T extends (infer U)[]
  ? DeepReadonlyArray11101<U>
  : T extends object
  ? DeepReadonlyObject11101<T>
  : T;

interface DeepReadonlyArray11101<T> extends ReadonlyArray<DeepReadonly11101<T>> {}

type DeepReadonlyObject11101<T> = {
  readonly [P in keyof T]: DeepReadonly11101<T[P]>;
};

type UnionToIntersection11101<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11101<T> = UnionToIntersection11101<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11101<T extends unknown[], V> = [...T, V];

type TuplifyUnion11101<T, L = LastOf11101<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11101<TuplifyUnion11101<Exclude<T, L>>, L>;

type DeepPartial11101<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11101<T[P]> }
  : T;

type Paths11101<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11101<K, Paths11101<T[K], Prev11101[D]>> : never }[keyof T]
  : never;

type Prev11101 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11101<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11101 {
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

type ConfigPaths11101 = Paths11101<NestedConfig11101>;

interface HeavyProps11101 {
  config: DeepPartial11101<NestedConfig11101>;
  path?: ConfigPaths11101;
}

const HeavyComponent11101 = memo(function HeavyComponent11101({ config }: HeavyProps11101) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11101) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11101 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11101: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11101.displayName = 'HeavyComponent11101';
export default HeavyComponent11101;
