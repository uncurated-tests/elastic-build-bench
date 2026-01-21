'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11140<T> = T extends (infer U)[]
  ? DeepReadonlyArray11140<U>
  : T extends object
  ? DeepReadonlyObject11140<T>
  : T;

interface DeepReadonlyArray11140<T> extends ReadonlyArray<DeepReadonly11140<T>> {}

type DeepReadonlyObject11140<T> = {
  readonly [P in keyof T]: DeepReadonly11140<T[P]>;
};

type UnionToIntersection11140<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11140<T> = UnionToIntersection11140<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11140<T extends unknown[], V> = [...T, V];

type TuplifyUnion11140<T, L = LastOf11140<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11140<TuplifyUnion11140<Exclude<T, L>>, L>;

type DeepPartial11140<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11140<T[P]> }
  : T;

type Paths11140<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11140<K, Paths11140<T[K], Prev11140[D]>> : never }[keyof T]
  : never;

type Prev11140 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11140<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11140 {
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

type ConfigPaths11140 = Paths11140<NestedConfig11140>;

interface HeavyProps11140 {
  config: DeepPartial11140<NestedConfig11140>;
  path?: ConfigPaths11140;
}

const HeavyComponent11140 = memo(function HeavyComponent11140({ config }: HeavyProps11140) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11140) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11140 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11140: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11140.displayName = 'HeavyComponent11140';
export default HeavyComponent11140;
