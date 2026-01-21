'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11649<T> = T extends (infer U)[]
  ? DeepReadonlyArray11649<U>
  : T extends object
  ? DeepReadonlyObject11649<T>
  : T;

interface DeepReadonlyArray11649<T> extends ReadonlyArray<DeepReadonly11649<T>> {}

type DeepReadonlyObject11649<T> = {
  readonly [P in keyof T]: DeepReadonly11649<T[P]>;
};

type UnionToIntersection11649<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11649<T> = UnionToIntersection11649<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11649<T extends unknown[], V> = [...T, V];

type TuplifyUnion11649<T, L = LastOf11649<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11649<TuplifyUnion11649<Exclude<T, L>>, L>;

type DeepPartial11649<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11649<T[P]> }
  : T;

type Paths11649<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11649<K, Paths11649<T[K], Prev11649[D]>> : never }[keyof T]
  : never;

type Prev11649 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11649<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11649 {
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

type ConfigPaths11649 = Paths11649<NestedConfig11649>;

interface HeavyProps11649 {
  config: DeepPartial11649<NestedConfig11649>;
  path?: ConfigPaths11649;
}

const HeavyComponent11649 = memo(function HeavyComponent11649({ config }: HeavyProps11649) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11649) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11649 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11649: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11649.displayName = 'HeavyComponent11649';
export default HeavyComponent11649;
