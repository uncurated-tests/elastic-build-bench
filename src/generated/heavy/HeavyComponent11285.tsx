'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11285<T> = T extends (infer U)[]
  ? DeepReadonlyArray11285<U>
  : T extends object
  ? DeepReadonlyObject11285<T>
  : T;

interface DeepReadonlyArray11285<T> extends ReadonlyArray<DeepReadonly11285<T>> {}

type DeepReadonlyObject11285<T> = {
  readonly [P in keyof T]: DeepReadonly11285<T[P]>;
};

type UnionToIntersection11285<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11285<T> = UnionToIntersection11285<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11285<T extends unknown[], V> = [...T, V];

type TuplifyUnion11285<T, L = LastOf11285<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11285<TuplifyUnion11285<Exclude<T, L>>, L>;

type DeepPartial11285<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11285<T[P]> }
  : T;

type Paths11285<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11285<K, Paths11285<T[K], Prev11285[D]>> : never }[keyof T]
  : never;

type Prev11285 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11285<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11285 {
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

type ConfigPaths11285 = Paths11285<NestedConfig11285>;

interface HeavyProps11285 {
  config: DeepPartial11285<NestedConfig11285>;
  path?: ConfigPaths11285;
}

const HeavyComponent11285 = memo(function HeavyComponent11285({ config }: HeavyProps11285) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11285) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11285 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11285: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11285.displayName = 'HeavyComponent11285';
export default HeavyComponent11285;
