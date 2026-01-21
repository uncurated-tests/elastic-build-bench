'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11363<T> = T extends (infer U)[]
  ? DeepReadonlyArray11363<U>
  : T extends object
  ? DeepReadonlyObject11363<T>
  : T;

interface DeepReadonlyArray11363<T> extends ReadonlyArray<DeepReadonly11363<T>> {}

type DeepReadonlyObject11363<T> = {
  readonly [P in keyof T]: DeepReadonly11363<T[P]>;
};

type UnionToIntersection11363<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11363<T> = UnionToIntersection11363<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11363<T extends unknown[], V> = [...T, V];

type TuplifyUnion11363<T, L = LastOf11363<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11363<TuplifyUnion11363<Exclude<T, L>>, L>;

type DeepPartial11363<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11363<T[P]> }
  : T;

type Paths11363<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11363<K, Paths11363<T[K], Prev11363[D]>> : never }[keyof T]
  : never;

type Prev11363 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11363<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11363 {
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

type ConfigPaths11363 = Paths11363<NestedConfig11363>;

interface HeavyProps11363 {
  config: DeepPartial11363<NestedConfig11363>;
  path?: ConfigPaths11363;
}

const HeavyComponent11363 = memo(function HeavyComponent11363({ config }: HeavyProps11363) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11363) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11363 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11363: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11363.displayName = 'HeavyComponent11363';
export default HeavyComponent11363;
