'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11408<T> = T extends (infer U)[]
  ? DeepReadonlyArray11408<U>
  : T extends object
  ? DeepReadonlyObject11408<T>
  : T;

interface DeepReadonlyArray11408<T> extends ReadonlyArray<DeepReadonly11408<T>> {}

type DeepReadonlyObject11408<T> = {
  readonly [P in keyof T]: DeepReadonly11408<T[P]>;
};

type UnionToIntersection11408<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11408<T> = UnionToIntersection11408<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11408<T extends unknown[], V> = [...T, V];

type TuplifyUnion11408<T, L = LastOf11408<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11408<TuplifyUnion11408<Exclude<T, L>>, L>;

type DeepPartial11408<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11408<T[P]> }
  : T;

type Paths11408<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11408<K, Paths11408<T[K], Prev11408[D]>> : never }[keyof T]
  : never;

type Prev11408 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11408<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11408 {
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

type ConfigPaths11408 = Paths11408<NestedConfig11408>;

interface HeavyProps11408 {
  config: DeepPartial11408<NestedConfig11408>;
  path?: ConfigPaths11408;
}

const HeavyComponent11408 = memo(function HeavyComponent11408({ config }: HeavyProps11408) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11408) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11408 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11408: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11408.displayName = 'HeavyComponent11408';
export default HeavyComponent11408;
