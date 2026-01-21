'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11352<T> = T extends (infer U)[]
  ? DeepReadonlyArray11352<U>
  : T extends object
  ? DeepReadonlyObject11352<T>
  : T;

interface DeepReadonlyArray11352<T> extends ReadonlyArray<DeepReadonly11352<T>> {}

type DeepReadonlyObject11352<T> = {
  readonly [P in keyof T]: DeepReadonly11352<T[P]>;
};

type UnionToIntersection11352<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11352<T> = UnionToIntersection11352<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11352<T extends unknown[], V> = [...T, V];

type TuplifyUnion11352<T, L = LastOf11352<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11352<TuplifyUnion11352<Exclude<T, L>>, L>;

type DeepPartial11352<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11352<T[P]> }
  : T;

type Paths11352<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11352<K, Paths11352<T[K], Prev11352[D]>> : never }[keyof T]
  : never;

type Prev11352 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11352<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11352 {
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

type ConfigPaths11352 = Paths11352<NestedConfig11352>;

interface HeavyProps11352 {
  config: DeepPartial11352<NestedConfig11352>;
  path?: ConfigPaths11352;
}

const HeavyComponent11352 = memo(function HeavyComponent11352({ config }: HeavyProps11352) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11352) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11352 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11352: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11352.displayName = 'HeavyComponent11352';
export default HeavyComponent11352;
