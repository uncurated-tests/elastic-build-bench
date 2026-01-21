'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11827<T> = T extends (infer U)[]
  ? DeepReadonlyArray11827<U>
  : T extends object
  ? DeepReadonlyObject11827<T>
  : T;

interface DeepReadonlyArray11827<T> extends ReadonlyArray<DeepReadonly11827<T>> {}

type DeepReadonlyObject11827<T> = {
  readonly [P in keyof T]: DeepReadonly11827<T[P]>;
};

type UnionToIntersection11827<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11827<T> = UnionToIntersection11827<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11827<T extends unknown[], V> = [...T, V];

type TuplifyUnion11827<T, L = LastOf11827<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11827<TuplifyUnion11827<Exclude<T, L>>, L>;

type DeepPartial11827<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11827<T[P]> }
  : T;

type Paths11827<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11827<K, Paths11827<T[K], Prev11827[D]>> : never }[keyof T]
  : never;

type Prev11827 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11827<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11827 {
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

type ConfigPaths11827 = Paths11827<NestedConfig11827>;

interface HeavyProps11827 {
  config: DeepPartial11827<NestedConfig11827>;
  path?: ConfigPaths11827;
}

const HeavyComponent11827 = memo(function HeavyComponent11827({ config }: HeavyProps11827) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11827) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11827 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11827: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11827.displayName = 'HeavyComponent11827';
export default HeavyComponent11827;
