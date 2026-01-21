'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11324<T> = T extends (infer U)[]
  ? DeepReadonlyArray11324<U>
  : T extends object
  ? DeepReadonlyObject11324<T>
  : T;

interface DeepReadonlyArray11324<T> extends ReadonlyArray<DeepReadonly11324<T>> {}

type DeepReadonlyObject11324<T> = {
  readonly [P in keyof T]: DeepReadonly11324<T[P]>;
};

type UnionToIntersection11324<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11324<T> = UnionToIntersection11324<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11324<T extends unknown[], V> = [...T, V];

type TuplifyUnion11324<T, L = LastOf11324<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11324<TuplifyUnion11324<Exclude<T, L>>, L>;

type DeepPartial11324<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11324<T[P]> }
  : T;

type Paths11324<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11324<K, Paths11324<T[K], Prev11324[D]>> : never }[keyof T]
  : never;

type Prev11324 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11324<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11324 {
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

type ConfigPaths11324 = Paths11324<NestedConfig11324>;

interface HeavyProps11324 {
  config: DeepPartial11324<NestedConfig11324>;
  path?: ConfigPaths11324;
}

const HeavyComponent11324 = memo(function HeavyComponent11324({ config }: HeavyProps11324) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11324) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11324 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11324: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11324.displayName = 'HeavyComponent11324';
export default HeavyComponent11324;
