'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11852<T> = T extends (infer U)[]
  ? DeepReadonlyArray11852<U>
  : T extends object
  ? DeepReadonlyObject11852<T>
  : T;

interface DeepReadonlyArray11852<T> extends ReadonlyArray<DeepReadonly11852<T>> {}

type DeepReadonlyObject11852<T> = {
  readonly [P in keyof T]: DeepReadonly11852<T[P]>;
};

type UnionToIntersection11852<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11852<T> = UnionToIntersection11852<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11852<T extends unknown[], V> = [...T, V];

type TuplifyUnion11852<T, L = LastOf11852<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11852<TuplifyUnion11852<Exclude<T, L>>, L>;

type DeepPartial11852<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11852<T[P]> }
  : T;

type Paths11852<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11852<K, Paths11852<T[K], Prev11852[D]>> : never }[keyof T]
  : never;

type Prev11852 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11852<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11852 {
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

type ConfigPaths11852 = Paths11852<NestedConfig11852>;

interface HeavyProps11852 {
  config: DeepPartial11852<NestedConfig11852>;
  path?: ConfigPaths11852;
}

const HeavyComponent11852 = memo(function HeavyComponent11852({ config }: HeavyProps11852) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11852) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11852 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11852: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11852.displayName = 'HeavyComponent11852';
export default HeavyComponent11852;
