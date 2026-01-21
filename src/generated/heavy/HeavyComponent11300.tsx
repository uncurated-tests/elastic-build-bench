'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11300<T> = T extends (infer U)[]
  ? DeepReadonlyArray11300<U>
  : T extends object
  ? DeepReadonlyObject11300<T>
  : T;

interface DeepReadonlyArray11300<T> extends ReadonlyArray<DeepReadonly11300<T>> {}

type DeepReadonlyObject11300<T> = {
  readonly [P in keyof T]: DeepReadonly11300<T[P]>;
};

type UnionToIntersection11300<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11300<T> = UnionToIntersection11300<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11300<T extends unknown[], V> = [...T, V];

type TuplifyUnion11300<T, L = LastOf11300<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11300<TuplifyUnion11300<Exclude<T, L>>, L>;

type DeepPartial11300<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11300<T[P]> }
  : T;

type Paths11300<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11300<K, Paths11300<T[K], Prev11300[D]>> : never }[keyof T]
  : never;

type Prev11300 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11300<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11300 {
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

type ConfigPaths11300 = Paths11300<NestedConfig11300>;

interface HeavyProps11300 {
  config: DeepPartial11300<NestedConfig11300>;
  path?: ConfigPaths11300;
}

const HeavyComponent11300 = memo(function HeavyComponent11300({ config }: HeavyProps11300) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11300) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11300 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11300: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11300.displayName = 'HeavyComponent11300';
export default HeavyComponent11300;
