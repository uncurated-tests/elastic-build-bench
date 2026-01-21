'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11050<T> = T extends (infer U)[]
  ? DeepReadonlyArray11050<U>
  : T extends object
  ? DeepReadonlyObject11050<T>
  : T;

interface DeepReadonlyArray11050<T> extends ReadonlyArray<DeepReadonly11050<T>> {}

type DeepReadonlyObject11050<T> = {
  readonly [P in keyof T]: DeepReadonly11050<T[P]>;
};

type UnionToIntersection11050<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11050<T> = UnionToIntersection11050<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11050<T extends unknown[], V> = [...T, V];

type TuplifyUnion11050<T, L = LastOf11050<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11050<TuplifyUnion11050<Exclude<T, L>>, L>;

type DeepPartial11050<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11050<T[P]> }
  : T;

type Paths11050<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11050<K, Paths11050<T[K], Prev11050[D]>> : never }[keyof T]
  : never;

type Prev11050 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11050<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11050 {
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

type ConfigPaths11050 = Paths11050<NestedConfig11050>;

interface HeavyProps11050 {
  config: DeepPartial11050<NestedConfig11050>;
  path?: ConfigPaths11050;
}

const HeavyComponent11050 = memo(function HeavyComponent11050({ config }: HeavyProps11050) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11050) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11050 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11050: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11050.displayName = 'HeavyComponent11050';
export default HeavyComponent11050;
