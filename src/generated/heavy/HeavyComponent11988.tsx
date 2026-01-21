'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11988<T> = T extends (infer U)[]
  ? DeepReadonlyArray11988<U>
  : T extends object
  ? DeepReadonlyObject11988<T>
  : T;

interface DeepReadonlyArray11988<T> extends ReadonlyArray<DeepReadonly11988<T>> {}

type DeepReadonlyObject11988<T> = {
  readonly [P in keyof T]: DeepReadonly11988<T[P]>;
};

type UnionToIntersection11988<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11988<T> = UnionToIntersection11988<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11988<T extends unknown[], V> = [...T, V];

type TuplifyUnion11988<T, L = LastOf11988<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11988<TuplifyUnion11988<Exclude<T, L>>, L>;

type DeepPartial11988<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11988<T[P]> }
  : T;

type Paths11988<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11988<K, Paths11988<T[K], Prev11988[D]>> : never }[keyof T]
  : never;

type Prev11988 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11988<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11988 {
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

type ConfigPaths11988 = Paths11988<NestedConfig11988>;

interface HeavyProps11988 {
  config: DeepPartial11988<NestedConfig11988>;
  path?: ConfigPaths11988;
}

const HeavyComponent11988 = memo(function HeavyComponent11988({ config }: HeavyProps11988) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11988) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11988 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11988: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11988.displayName = 'HeavyComponent11988';
export default HeavyComponent11988;
