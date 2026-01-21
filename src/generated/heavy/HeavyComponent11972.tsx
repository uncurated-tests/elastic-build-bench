'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11972<T> = T extends (infer U)[]
  ? DeepReadonlyArray11972<U>
  : T extends object
  ? DeepReadonlyObject11972<T>
  : T;

interface DeepReadonlyArray11972<T> extends ReadonlyArray<DeepReadonly11972<T>> {}

type DeepReadonlyObject11972<T> = {
  readonly [P in keyof T]: DeepReadonly11972<T[P]>;
};

type UnionToIntersection11972<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11972<T> = UnionToIntersection11972<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11972<T extends unknown[], V> = [...T, V];

type TuplifyUnion11972<T, L = LastOf11972<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11972<TuplifyUnion11972<Exclude<T, L>>, L>;

type DeepPartial11972<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11972<T[P]> }
  : T;

type Paths11972<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11972<K, Paths11972<T[K], Prev11972[D]>> : never }[keyof T]
  : never;

type Prev11972 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11972<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11972 {
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

type ConfigPaths11972 = Paths11972<NestedConfig11972>;

interface HeavyProps11972 {
  config: DeepPartial11972<NestedConfig11972>;
  path?: ConfigPaths11972;
}

const HeavyComponent11972 = memo(function HeavyComponent11972({ config }: HeavyProps11972) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11972) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11972 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11972: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11972.displayName = 'HeavyComponent11972';
export default HeavyComponent11972;
