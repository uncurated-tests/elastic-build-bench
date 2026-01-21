'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11385<T> = T extends (infer U)[]
  ? DeepReadonlyArray11385<U>
  : T extends object
  ? DeepReadonlyObject11385<T>
  : T;

interface DeepReadonlyArray11385<T> extends ReadonlyArray<DeepReadonly11385<T>> {}

type DeepReadonlyObject11385<T> = {
  readonly [P in keyof T]: DeepReadonly11385<T[P]>;
};

type UnionToIntersection11385<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11385<T> = UnionToIntersection11385<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11385<T extends unknown[], V> = [...T, V];

type TuplifyUnion11385<T, L = LastOf11385<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11385<TuplifyUnion11385<Exclude<T, L>>, L>;

type DeepPartial11385<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11385<T[P]> }
  : T;

type Paths11385<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11385<K, Paths11385<T[K], Prev11385[D]>> : never }[keyof T]
  : never;

type Prev11385 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11385<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11385 {
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

type ConfigPaths11385 = Paths11385<NestedConfig11385>;

interface HeavyProps11385 {
  config: DeepPartial11385<NestedConfig11385>;
  path?: ConfigPaths11385;
}

const HeavyComponent11385 = memo(function HeavyComponent11385({ config }: HeavyProps11385) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11385) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11385 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11385: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11385.displayName = 'HeavyComponent11385';
export default HeavyComponent11385;
