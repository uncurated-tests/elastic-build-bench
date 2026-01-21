'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11110<T> = T extends (infer U)[]
  ? DeepReadonlyArray11110<U>
  : T extends object
  ? DeepReadonlyObject11110<T>
  : T;

interface DeepReadonlyArray11110<T> extends ReadonlyArray<DeepReadonly11110<T>> {}

type DeepReadonlyObject11110<T> = {
  readonly [P in keyof T]: DeepReadonly11110<T[P]>;
};

type UnionToIntersection11110<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11110<T> = UnionToIntersection11110<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11110<T extends unknown[], V> = [...T, V];

type TuplifyUnion11110<T, L = LastOf11110<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11110<TuplifyUnion11110<Exclude<T, L>>, L>;

type DeepPartial11110<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11110<T[P]> }
  : T;

type Paths11110<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11110<K, Paths11110<T[K], Prev11110[D]>> : never }[keyof T]
  : never;

type Prev11110 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11110<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11110 {
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

type ConfigPaths11110 = Paths11110<NestedConfig11110>;

interface HeavyProps11110 {
  config: DeepPartial11110<NestedConfig11110>;
  path?: ConfigPaths11110;
}

const HeavyComponent11110 = memo(function HeavyComponent11110({ config }: HeavyProps11110) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11110) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11110 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11110: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11110.displayName = 'HeavyComponent11110';
export default HeavyComponent11110;
