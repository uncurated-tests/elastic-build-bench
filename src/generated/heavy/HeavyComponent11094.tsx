'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11094<T> = T extends (infer U)[]
  ? DeepReadonlyArray11094<U>
  : T extends object
  ? DeepReadonlyObject11094<T>
  : T;

interface DeepReadonlyArray11094<T> extends ReadonlyArray<DeepReadonly11094<T>> {}

type DeepReadonlyObject11094<T> = {
  readonly [P in keyof T]: DeepReadonly11094<T[P]>;
};

type UnionToIntersection11094<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11094<T> = UnionToIntersection11094<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11094<T extends unknown[], V> = [...T, V];

type TuplifyUnion11094<T, L = LastOf11094<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11094<TuplifyUnion11094<Exclude<T, L>>, L>;

type DeepPartial11094<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11094<T[P]> }
  : T;

type Paths11094<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11094<K, Paths11094<T[K], Prev11094[D]>> : never }[keyof T]
  : never;

type Prev11094 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11094<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11094 {
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

type ConfigPaths11094 = Paths11094<NestedConfig11094>;

interface HeavyProps11094 {
  config: DeepPartial11094<NestedConfig11094>;
  path?: ConfigPaths11094;
}

const HeavyComponent11094 = memo(function HeavyComponent11094({ config }: HeavyProps11094) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11094) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11094 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11094: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11094.displayName = 'HeavyComponent11094';
export default HeavyComponent11094;
