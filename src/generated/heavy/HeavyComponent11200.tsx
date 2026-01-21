'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11200<T> = T extends (infer U)[]
  ? DeepReadonlyArray11200<U>
  : T extends object
  ? DeepReadonlyObject11200<T>
  : T;

interface DeepReadonlyArray11200<T> extends ReadonlyArray<DeepReadonly11200<T>> {}

type DeepReadonlyObject11200<T> = {
  readonly [P in keyof T]: DeepReadonly11200<T[P]>;
};

type UnionToIntersection11200<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11200<T> = UnionToIntersection11200<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11200<T extends unknown[], V> = [...T, V];

type TuplifyUnion11200<T, L = LastOf11200<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11200<TuplifyUnion11200<Exclude<T, L>>, L>;

type DeepPartial11200<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11200<T[P]> }
  : T;

type Paths11200<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11200<K, Paths11200<T[K], Prev11200[D]>> : never }[keyof T]
  : never;

type Prev11200 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11200<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11200 {
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

type ConfigPaths11200 = Paths11200<NestedConfig11200>;

interface HeavyProps11200 {
  config: DeepPartial11200<NestedConfig11200>;
  path?: ConfigPaths11200;
}

const HeavyComponent11200 = memo(function HeavyComponent11200({ config }: HeavyProps11200) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11200) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11200 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11200: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11200.displayName = 'HeavyComponent11200';
export default HeavyComponent11200;
