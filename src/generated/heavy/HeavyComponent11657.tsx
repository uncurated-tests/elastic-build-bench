'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11657<T> = T extends (infer U)[]
  ? DeepReadonlyArray11657<U>
  : T extends object
  ? DeepReadonlyObject11657<T>
  : T;

interface DeepReadonlyArray11657<T> extends ReadonlyArray<DeepReadonly11657<T>> {}

type DeepReadonlyObject11657<T> = {
  readonly [P in keyof T]: DeepReadonly11657<T[P]>;
};

type UnionToIntersection11657<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11657<T> = UnionToIntersection11657<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11657<T extends unknown[], V> = [...T, V];

type TuplifyUnion11657<T, L = LastOf11657<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11657<TuplifyUnion11657<Exclude<T, L>>, L>;

type DeepPartial11657<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11657<T[P]> }
  : T;

type Paths11657<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11657<K, Paths11657<T[K], Prev11657[D]>> : never }[keyof T]
  : never;

type Prev11657 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11657<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11657 {
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

type ConfigPaths11657 = Paths11657<NestedConfig11657>;

interface HeavyProps11657 {
  config: DeepPartial11657<NestedConfig11657>;
  path?: ConfigPaths11657;
}

const HeavyComponent11657 = memo(function HeavyComponent11657({ config }: HeavyProps11657) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11657) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11657 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11657: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11657.displayName = 'HeavyComponent11657';
export default HeavyComponent11657;
