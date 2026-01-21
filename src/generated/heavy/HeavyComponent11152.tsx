'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11152<T> = T extends (infer U)[]
  ? DeepReadonlyArray11152<U>
  : T extends object
  ? DeepReadonlyObject11152<T>
  : T;

interface DeepReadonlyArray11152<T> extends ReadonlyArray<DeepReadonly11152<T>> {}

type DeepReadonlyObject11152<T> = {
  readonly [P in keyof T]: DeepReadonly11152<T[P]>;
};

type UnionToIntersection11152<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11152<T> = UnionToIntersection11152<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11152<T extends unknown[], V> = [...T, V];

type TuplifyUnion11152<T, L = LastOf11152<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11152<TuplifyUnion11152<Exclude<T, L>>, L>;

type DeepPartial11152<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11152<T[P]> }
  : T;

type Paths11152<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11152<K, Paths11152<T[K], Prev11152[D]>> : never }[keyof T]
  : never;

type Prev11152 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11152<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11152 {
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

type ConfigPaths11152 = Paths11152<NestedConfig11152>;

interface HeavyProps11152 {
  config: DeepPartial11152<NestedConfig11152>;
  path?: ConfigPaths11152;
}

const HeavyComponent11152 = memo(function HeavyComponent11152({ config }: HeavyProps11152) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11152) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11152 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11152: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11152.displayName = 'HeavyComponent11152';
export default HeavyComponent11152;
