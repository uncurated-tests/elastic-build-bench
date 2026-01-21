'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11313<T> = T extends (infer U)[]
  ? DeepReadonlyArray11313<U>
  : T extends object
  ? DeepReadonlyObject11313<T>
  : T;

interface DeepReadonlyArray11313<T> extends ReadonlyArray<DeepReadonly11313<T>> {}

type DeepReadonlyObject11313<T> = {
  readonly [P in keyof T]: DeepReadonly11313<T[P]>;
};

type UnionToIntersection11313<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11313<T> = UnionToIntersection11313<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11313<T extends unknown[], V> = [...T, V];

type TuplifyUnion11313<T, L = LastOf11313<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11313<TuplifyUnion11313<Exclude<T, L>>, L>;

type DeepPartial11313<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11313<T[P]> }
  : T;

type Paths11313<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11313<K, Paths11313<T[K], Prev11313[D]>> : never }[keyof T]
  : never;

type Prev11313 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11313<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11313 {
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

type ConfigPaths11313 = Paths11313<NestedConfig11313>;

interface HeavyProps11313 {
  config: DeepPartial11313<NestedConfig11313>;
  path?: ConfigPaths11313;
}

const HeavyComponent11313 = memo(function HeavyComponent11313({ config }: HeavyProps11313) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11313) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11313 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11313: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11313.displayName = 'HeavyComponent11313';
export default HeavyComponent11313;
