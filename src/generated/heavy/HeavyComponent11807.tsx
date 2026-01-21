'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11807<T> = T extends (infer U)[]
  ? DeepReadonlyArray11807<U>
  : T extends object
  ? DeepReadonlyObject11807<T>
  : T;

interface DeepReadonlyArray11807<T> extends ReadonlyArray<DeepReadonly11807<T>> {}

type DeepReadonlyObject11807<T> = {
  readonly [P in keyof T]: DeepReadonly11807<T[P]>;
};

type UnionToIntersection11807<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11807<T> = UnionToIntersection11807<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11807<T extends unknown[], V> = [...T, V];

type TuplifyUnion11807<T, L = LastOf11807<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11807<TuplifyUnion11807<Exclude<T, L>>, L>;

type DeepPartial11807<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11807<T[P]> }
  : T;

type Paths11807<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11807<K, Paths11807<T[K], Prev11807[D]>> : never }[keyof T]
  : never;

type Prev11807 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11807<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11807 {
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

type ConfigPaths11807 = Paths11807<NestedConfig11807>;

interface HeavyProps11807 {
  config: DeepPartial11807<NestedConfig11807>;
  path?: ConfigPaths11807;
}

const HeavyComponent11807 = memo(function HeavyComponent11807({ config }: HeavyProps11807) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11807) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11807 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11807: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11807.displayName = 'HeavyComponent11807';
export default HeavyComponent11807;
