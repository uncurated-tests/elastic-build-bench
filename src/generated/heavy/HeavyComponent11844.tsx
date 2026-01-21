'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11844<T> = T extends (infer U)[]
  ? DeepReadonlyArray11844<U>
  : T extends object
  ? DeepReadonlyObject11844<T>
  : T;

interface DeepReadonlyArray11844<T> extends ReadonlyArray<DeepReadonly11844<T>> {}

type DeepReadonlyObject11844<T> = {
  readonly [P in keyof T]: DeepReadonly11844<T[P]>;
};

type UnionToIntersection11844<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11844<T> = UnionToIntersection11844<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11844<T extends unknown[], V> = [...T, V];

type TuplifyUnion11844<T, L = LastOf11844<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11844<TuplifyUnion11844<Exclude<T, L>>, L>;

type DeepPartial11844<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11844<T[P]> }
  : T;

type Paths11844<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11844<K, Paths11844<T[K], Prev11844[D]>> : never }[keyof T]
  : never;

type Prev11844 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11844<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11844 {
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

type ConfigPaths11844 = Paths11844<NestedConfig11844>;

interface HeavyProps11844 {
  config: DeepPartial11844<NestedConfig11844>;
  path?: ConfigPaths11844;
}

const HeavyComponent11844 = memo(function HeavyComponent11844({ config }: HeavyProps11844) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11844) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11844 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11844: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11844.displayName = 'HeavyComponent11844';
export default HeavyComponent11844;
