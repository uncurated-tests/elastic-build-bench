'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11332<T> = T extends (infer U)[]
  ? DeepReadonlyArray11332<U>
  : T extends object
  ? DeepReadonlyObject11332<T>
  : T;

interface DeepReadonlyArray11332<T> extends ReadonlyArray<DeepReadonly11332<T>> {}

type DeepReadonlyObject11332<T> = {
  readonly [P in keyof T]: DeepReadonly11332<T[P]>;
};

type UnionToIntersection11332<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11332<T> = UnionToIntersection11332<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11332<T extends unknown[], V> = [...T, V];

type TuplifyUnion11332<T, L = LastOf11332<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11332<TuplifyUnion11332<Exclude<T, L>>, L>;

type DeepPartial11332<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11332<T[P]> }
  : T;

type Paths11332<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11332<K, Paths11332<T[K], Prev11332[D]>> : never }[keyof T]
  : never;

type Prev11332 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11332<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11332 {
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

type ConfigPaths11332 = Paths11332<NestedConfig11332>;

interface HeavyProps11332 {
  config: DeepPartial11332<NestedConfig11332>;
  path?: ConfigPaths11332;
}

const HeavyComponent11332 = memo(function HeavyComponent11332({ config }: HeavyProps11332) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11332) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11332 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11332: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11332.displayName = 'HeavyComponent11332';
export default HeavyComponent11332;
