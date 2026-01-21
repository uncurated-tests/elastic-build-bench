'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11410<T> = T extends (infer U)[]
  ? DeepReadonlyArray11410<U>
  : T extends object
  ? DeepReadonlyObject11410<T>
  : T;

interface DeepReadonlyArray11410<T> extends ReadonlyArray<DeepReadonly11410<T>> {}

type DeepReadonlyObject11410<T> = {
  readonly [P in keyof T]: DeepReadonly11410<T[P]>;
};

type UnionToIntersection11410<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11410<T> = UnionToIntersection11410<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11410<T extends unknown[], V> = [...T, V];

type TuplifyUnion11410<T, L = LastOf11410<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11410<TuplifyUnion11410<Exclude<T, L>>, L>;

type DeepPartial11410<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11410<T[P]> }
  : T;

type Paths11410<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11410<K, Paths11410<T[K], Prev11410[D]>> : never }[keyof T]
  : never;

type Prev11410 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11410<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11410 {
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

type ConfigPaths11410 = Paths11410<NestedConfig11410>;

interface HeavyProps11410 {
  config: DeepPartial11410<NestedConfig11410>;
  path?: ConfigPaths11410;
}

const HeavyComponent11410 = memo(function HeavyComponent11410({ config }: HeavyProps11410) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11410) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11410 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11410: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11410.displayName = 'HeavyComponent11410';
export default HeavyComponent11410;
