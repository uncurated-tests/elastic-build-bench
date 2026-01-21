'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11414<T> = T extends (infer U)[]
  ? DeepReadonlyArray11414<U>
  : T extends object
  ? DeepReadonlyObject11414<T>
  : T;

interface DeepReadonlyArray11414<T> extends ReadonlyArray<DeepReadonly11414<T>> {}

type DeepReadonlyObject11414<T> = {
  readonly [P in keyof T]: DeepReadonly11414<T[P]>;
};

type UnionToIntersection11414<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11414<T> = UnionToIntersection11414<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11414<T extends unknown[], V> = [...T, V];

type TuplifyUnion11414<T, L = LastOf11414<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11414<TuplifyUnion11414<Exclude<T, L>>, L>;

type DeepPartial11414<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11414<T[P]> }
  : T;

type Paths11414<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11414<K, Paths11414<T[K], Prev11414[D]>> : never }[keyof T]
  : never;

type Prev11414 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11414<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11414 {
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

type ConfigPaths11414 = Paths11414<NestedConfig11414>;

interface HeavyProps11414 {
  config: DeepPartial11414<NestedConfig11414>;
  path?: ConfigPaths11414;
}

const HeavyComponent11414 = memo(function HeavyComponent11414({ config }: HeavyProps11414) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11414) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11414 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11414: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11414.displayName = 'HeavyComponent11414';
export default HeavyComponent11414;
