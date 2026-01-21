'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11162<T> = T extends (infer U)[]
  ? DeepReadonlyArray11162<U>
  : T extends object
  ? DeepReadonlyObject11162<T>
  : T;

interface DeepReadonlyArray11162<T> extends ReadonlyArray<DeepReadonly11162<T>> {}

type DeepReadonlyObject11162<T> = {
  readonly [P in keyof T]: DeepReadonly11162<T[P]>;
};

type UnionToIntersection11162<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11162<T> = UnionToIntersection11162<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11162<T extends unknown[], V> = [...T, V];

type TuplifyUnion11162<T, L = LastOf11162<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11162<TuplifyUnion11162<Exclude<T, L>>, L>;

type DeepPartial11162<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11162<T[P]> }
  : T;

type Paths11162<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11162<K, Paths11162<T[K], Prev11162[D]>> : never }[keyof T]
  : never;

type Prev11162 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11162<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11162 {
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

type ConfigPaths11162 = Paths11162<NestedConfig11162>;

interface HeavyProps11162 {
  config: DeepPartial11162<NestedConfig11162>;
  path?: ConfigPaths11162;
}

const HeavyComponent11162 = memo(function HeavyComponent11162({ config }: HeavyProps11162) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11162) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11162 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11162: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11162.displayName = 'HeavyComponent11162';
export default HeavyComponent11162;
