'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11521<T> = T extends (infer U)[]
  ? DeepReadonlyArray11521<U>
  : T extends object
  ? DeepReadonlyObject11521<T>
  : T;

interface DeepReadonlyArray11521<T> extends ReadonlyArray<DeepReadonly11521<T>> {}

type DeepReadonlyObject11521<T> = {
  readonly [P in keyof T]: DeepReadonly11521<T[P]>;
};

type UnionToIntersection11521<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11521<T> = UnionToIntersection11521<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11521<T extends unknown[], V> = [...T, V];

type TuplifyUnion11521<T, L = LastOf11521<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11521<TuplifyUnion11521<Exclude<T, L>>, L>;

type DeepPartial11521<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11521<T[P]> }
  : T;

type Paths11521<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11521<K, Paths11521<T[K], Prev11521[D]>> : never }[keyof T]
  : never;

type Prev11521 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11521<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11521 {
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

type ConfigPaths11521 = Paths11521<NestedConfig11521>;

interface HeavyProps11521 {
  config: DeepPartial11521<NestedConfig11521>;
  path?: ConfigPaths11521;
}

const HeavyComponent11521 = memo(function HeavyComponent11521({ config }: HeavyProps11521) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11521) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11521 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11521: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11521.displayName = 'HeavyComponent11521';
export default HeavyComponent11521;
