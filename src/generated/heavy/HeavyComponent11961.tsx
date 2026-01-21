'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11961<T> = T extends (infer U)[]
  ? DeepReadonlyArray11961<U>
  : T extends object
  ? DeepReadonlyObject11961<T>
  : T;

interface DeepReadonlyArray11961<T> extends ReadonlyArray<DeepReadonly11961<T>> {}

type DeepReadonlyObject11961<T> = {
  readonly [P in keyof T]: DeepReadonly11961<T[P]>;
};

type UnionToIntersection11961<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11961<T> = UnionToIntersection11961<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11961<T extends unknown[], V> = [...T, V];

type TuplifyUnion11961<T, L = LastOf11961<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11961<TuplifyUnion11961<Exclude<T, L>>, L>;

type DeepPartial11961<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11961<T[P]> }
  : T;

type Paths11961<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11961<K, Paths11961<T[K], Prev11961[D]>> : never }[keyof T]
  : never;

type Prev11961 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11961<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11961 {
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

type ConfigPaths11961 = Paths11961<NestedConfig11961>;

interface HeavyProps11961 {
  config: DeepPartial11961<NestedConfig11961>;
  path?: ConfigPaths11961;
}

const HeavyComponent11961 = memo(function HeavyComponent11961({ config }: HeavyProps11961) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11961) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11961 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11961: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11961.displayName = 'HeavyComponent11961';
export default HeavyComponent11961;
