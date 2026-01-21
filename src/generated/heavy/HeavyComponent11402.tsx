'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11402<T> = T extends (infer U)[]
  ? DeepReadonlyArray11402<U>
  : T extends object
  ? DeepReadonlyObject11402<T>
  : T;

interface DeepReadonlyArray11402<T> extends ReadonlyArray<DeepReadonly11402<T>> {}

type DeepReadonlyObject11402<T> = {
  readonly [P in keyof T]: DeepReadonly11402<T[P]>;
};

type UnionToIntersection11402<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11402<T> = UnionToIntersection11402<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11402<T extends unknown[], V> = [...T, V];

type TuplifyUnion11402<T, L = LastOf11402<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11402<TuplifyUnion11402<Exclude<T, L>>, L>;

type DeepPartial11402<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11402<T[P]> }
  : T;

type Paths11402<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11402<K, Paths11402<T[K], Prev11402[D]>> : never }[keyof T]
  : never;

type Prev11402 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11402<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11402 {
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

type ConfigPaths11402 = Paths11402<NestedConfig11402>;

interface HeavyProps11402 {
  config: DeepPartial11402<NestedConfig11402>;
  path?: ConfigPaths11402;
}

const HeavyComponent11402 = memo(function HeavyComponent11402({ config }: HeavyProps11402) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11402) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11402 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11402: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11402.displayName = 'HeavyComponent11402';
export default HeavyComponent11402;
