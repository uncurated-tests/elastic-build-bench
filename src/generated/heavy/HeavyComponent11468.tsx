'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11468<T> = T extends (infer U)[]
  ? DeepReadonlyArray11468<U>
  : T extends object
  ? DeepReadonlyObject11468<T>
  : T;

interface DeepReadonlyArray11468<T> extends ReadonlyArray<DeepReadonly11468<T>> {}

type DeepReadonlyObject11468<T> = {
  readonly [P in keyof T]: DeepReadonly11468<T[P]>;
};

type UnionToIntersection11468<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11468<T> = UnionToIntersection11468<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11468<T extends unknown[], V> = [...T, V];

type TuplifyUnion11468<T, L = LastOf11468<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11468<TuplifyUnion11468<Exclude<T, L>>, L>;

type DeepPartial11468<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11468<T[P]> }
  : T;

type Paths11468<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11468<K, Paths11468<T[K], Prev11468[D]>> : never }[keyof T]
  : never;

type Prev11468 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11468<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11468 {
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

type ConfigPaths11468 = Paths11468<NestedConfig11468>;

interface HeavyProps11468 {
  config: DeepPartial11468<NestedConfig11468>;
  path?: ConfigPaths11468;
}

const HeavyComponent11468 = memo(function HeavyComponent11468({ config }: HeavyProps11468) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11468) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11468 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11468: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11468.displayName = 'HeavyComponent11468';
export default HeavyComponent11468;
