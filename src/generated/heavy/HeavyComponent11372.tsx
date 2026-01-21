'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11372<T> = T extends (infer U)[]
  ? DeepReadonlyArray11372<U>
  : T extends object
  ? DeepReadonlyObject11372<T>
  : T;

interface DeepReadonlyArray11372<T> extends ReadonlyArray<DeepReadonly11372<T>> {}

type DeepReadonlyObject11372<T> = {
  readonly [P in keyof T]: DeepReadonly11372<T[P]>;
};

type UnionToIntersection11372<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11372<T> = UnionToIntersection11372<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11372<T extends unknown[], V> = [...T, V];

type TuplifyUnion11372<T, L = LastOf11372<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11372<TuplifyUnion11372<Exclude<T, L>>, L>;

type DeepPartial11372<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11372<T[P]> }
  : T;

type Paths11372<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11372<K, Paths11372<T[K], Prev11372[D]>> : never }[keyof T]
  : never;

type Prev11372 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11372<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11372 {
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

type ConfigPaths11372 = Paths11372<NestedConfig11372>;

interface HeavyProps11372 {
  config: DeepPartial11372<NestedConfig11372>;
  path?: ConfigPaths11372;
}

const HeavyComponent11372 = memo(function HeavyComponent11372({ config }: HeavyProps11372) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11372) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11372 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11372: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11372.displayName = 'HeavyComponent11372';
export default HeavyComponent11372;
