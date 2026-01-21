'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11800<T> = T extends (infer U)[]
  ? DeepReadonlyArray11800<U>
  : T extends object
  ? DeepReadonlyObject11800<T>
  : T;

interface DeepReadonlyArray11800<T> extends ReadonlyArray<DeepReadonly11800<T>> {}

type DeepReadonlyObject11800<T> = {
  readonly [P in keyof T]: DeepReadonly11800<T[P]>;
};

type UnionToIntersection11800<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11800<T> = UnionToIntersection11800<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11800<T extends unknown[], V> = [...T, V];

type TuplifyUnion11800<T, L = LastOf11800<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11800<TuplifyUnion11800<Exclude<T, L>>, L>;

type DeepPartial11800<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11800<T[P]> }
  : T;

type Paths11800<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11800<K, Paths11800<T[K], Prev11800[D]>> : never }[keyof T]
  : never;

type Prev11800 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11800<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11800 {
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

type ConfigPaths11800 = Paths11800<NestedConfig11800>;

interface HeavyProps11800 {
  config: DeepPartial11800<NestedConfig11800>;
  path?: ConfigPaths11800;
}

const HeavyComponent11800 = memo(function HeavyComponent11800({ config }: HeavyProps11800) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11800) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11800 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11800: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11800.displayName = 'HeavyComponent11800';
export default HeavyComponent11800;
