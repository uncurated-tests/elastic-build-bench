'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11690<T> = T extends (infer U)[]
  ? DeepReadonlyArray11690<U>
  : T extends object
  ? DeepReadonlyObject11690<T>
  : T;

interface DeepReadonlyArray11690<T> extends ReadonlyArray<DeepReadonly11690<T>> {}

type DeepReadonlyObject11690<T> = {
  readonly [P in keyof T]: DeepReadonly11690<T[P]>;
};

type UnionToIntersection11690<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11690<T> = UnionToIntersection11690<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11690<T extends unknown[], V> = [...T, V];

type TuplifyUnion11690<T, L = LastOf11690<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11690<TuplifyUnion11690<Exclude<T, L>>, L>;

type DeepPartial11690<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11690<T[P]> }
  : T;

type Paths11690<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11690<K, Paths11690<T[K], Prev11690[D]>> : never }[keyof T]
  : never;

type Prev11690 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11690<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11690 {
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

type ConfigPaths11690 = Paths11690<NestedConfig11690>;

interface HeavyProps11690 {
  config: DeepPartial11690<NestedConfig11690>;
  path?: ConfigPaths11690;
}

const HeavyComponent11690 = memo(function HeavyComponent11690({ config }: HeavyProps11690) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11690) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11690 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11690: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11690.displayName = 'HeavyComponent11690';
export default HeavyComponent11690;
