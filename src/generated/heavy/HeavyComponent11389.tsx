'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11389<T> = T extends (infer U)[]
  ? DeepReadonlyArray11389<U>
  : T extends object
  ? DeepReadonlyObject11389<T>
  : T;

interface DeepReadonlyArray11389<T> extends ReadonlyArray<DeepReadonly11389<T>> {}

type DeepReadonlyObject11389<T> = {
  readonly [P in keyof T]: DeepReadonly11389<T[P]>;
};

type UnionToIntersection11389<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11389<T> = UnionToIntersection11389<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11389<T extends unknown[], V> = [...T, V];

type TuplifyUnion11389<T, L = LastOf11389<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11389<TuplifyUnion11389<Exclude<T, L>>, L>;

type DeepPartial11389<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11389<T[P]> }
  : T;

type Paths11389<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11389<K, Paths11389<T[K], Prev11389[D]>> : never }[keyof T]
  : never;

type Prev11389 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11389<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11389 {
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

type ConfigPaths11389 = Paths11389<NestedConfig11389>;

interface HeavyProps11389 {
  config: DeepPartial11389<NestedConfig11389>;
  path?: ConfigPaths11389;
}

const HeavyComponent11389 = memo(function HeavyComponent11389({ config }: HeavyProps11389) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11389) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11389 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11389: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11389.displayName = 'HeavyComponent11389';
export default HeavyComponent11389;
