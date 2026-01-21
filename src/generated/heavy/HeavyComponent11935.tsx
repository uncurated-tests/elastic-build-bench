'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11935<T> = T extends (infer U)[]
  ? DeepReadonlyArray11935<U>
  : T extends object
  ? DeepReadonlyObject11935<T>
  : T;

interface DeepReadonlyArray11935<T> extends ReadonlyArray<DeepReadonly11935<T>> {}

type DeepReadonlyObject11935<T> = {
  readonly [P in keyof T]: DeepReadonly11935<T[P]>;
};

type UnionToIntersection11935<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11935<T> = UnionToIntersection11935<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11935<T extends unknown[], V> = [...T, V];

type TuplifyUnion11935<T, L = LastOf11935<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11935<TuplifyUnion11935<Exclude<T, L>>, L>;

type DeepPartial11935<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11935<T[P]> }
  : T;

type Paths11935<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11935<K, Paths11935<T[K], Prev11935[D]>> : never }[keyof T]
  : never;

type Prev11935 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11935<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11935 {
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

type ConfigPaths11935 = Paths11935<NestedConfig11935>;

interface HeavyProps11935 {
  config: DeepPartial11935<NestedConfig11935>;
  path?: ConfigPaths11935;
}

const HeavyComponent11935 = memo(function HeavyComponent11935({ config }: HeavyProps11935) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11935) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11935 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11935: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11935.displayName = 'HeavyComponent11935';
export default HeavyComponent11935;
