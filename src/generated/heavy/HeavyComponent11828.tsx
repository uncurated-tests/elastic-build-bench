'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11828<T> = T extends (infer U)[]
  ? DeepReadonlyArray11828<U>
  : T extends object
  ? DeepReadonlyObject11828<T>
  : T;

interface DeepReadonlyArray11828<T> extends ReadonlyArray<DeepReadonly11828<T>> {}

type DeepReadonlyObject11828<T> = {
  readonly [P in keyof T]: DeepReadonly11828<T[P]>;
};

type UnionToIntersection11828<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11828<T> = UnionToIntersection11828<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11828<T extends unknown[], V> = [...T, V];

type TuplifyUnion11828<T, L = LastOf11828<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11828<TuplifyUnion11828<Exclude<T, L>>, L>;

type DeepPartial11828<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11828<T[P]> }
  : T;

type Paths11828<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11828<K, Paths11828<T[K], Prev11828[D]>> : never }[keyof T]
  : never;

type Prev11828 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11828<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11828 {
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

type ConfigPaths11828 = Paths11828<NestedConfig11828>;

interface HeavyProps11828 {
  config: DeepPartial11828<NestedConfig11828>;
  path?: ConfigPaths11828;
}

const HeavyComponent11828 = memo(function HeavyComponent11828({ config }: HeavyProps11828) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11828) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11828 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11828: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11828.displayName = 'HeavyComponent11828';
export default HeavyComponent11828;
