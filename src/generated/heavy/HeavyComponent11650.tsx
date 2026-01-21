'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11650<T> = T extends (infer U)[]
  ? DeepReadonlyArray11650<U>
  : T extends object
  ? DeepReadonlyObject11650<T>
  : T;

interface DeepReadonlyArray11650<T> extends ReadonlyArray<DeepReadonly11650<T>> {}

type DeepReadonlyObject11650<T> = {
  readonly [P in keyof T]: DeepReadonly11650<T[P]>;
};

type UnionToIntersection11650<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11650<T> = UnionToIntersection11650<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11650<T extends unknown[], V> = [...T, V];

type TuplifyUnion11650<T, L = LastOf11650<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11650<TuplifyUnion11650<Exclude<T, L>>, L>;

type DeepPartial11650<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11650<T[P]> }
  : T;

type Paths11650<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11650<K, Paths11650<T[K], Prev11650[D]>> : never }[keyof T]
  : never;

type Prev11650 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11650<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11650 {
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

type ConfigPaths11650 = Paths11650<NestedConfig11650>;

interface HeavyProps11650 {
  config: DeepPartial11650<NestedConfig11650>;
  path?: ConfigPaths11650;
}

const HeavyComponent11650 = memo(function HeavyComponent11650({ config }: HeavyProps11650) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11650) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11650 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11650: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11650.displayName = 'HeavyComponent11650';
export default HeavyComponent11650;
