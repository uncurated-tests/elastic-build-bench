'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11654<T> = T extends (infer U)[]
  ? DeepReadonlyArray11654<U>
  : T extends object
  ? DeepReadonlyObject11654<T>
  : T;

interface DeepReadonlyArray11654<T> extends ReadonlyArray<DeepReadonly11654<T>> {}

type DeepReadonlyObject11654<T> = {
  readonly [P in keyof T]: DeepReadonly11654<T[P]>;
};

type UnionToIntersection11654<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11654<T> = UnionToIntersection11654<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11654<T extends unknown[], V> = [...T, V];

type TuplifyUnion11654<T, L = LastOf11654<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11654<TuplifyUnion11654<Exclude<T, L>>, L>;

type DeepPartial11654<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11654<T[P]> }
  : T;

type Paths11654<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11654<K, Paths11654<T[K], Prev11654[D]>> : never }[keyof T]
  : never;

type Prev11654 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11654<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11654 {
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

type ConfigPaths11654 = Paths11654<NestedConfig11654>;

interface HeavyProps11654 {
  config: DeepPartial11654<NestedConfig11654>;
  path?: ConfigPaths11654;
}

const HeavyComponent11654 = memo(function HeavyComponent11654({ config }: HeavyProps11654) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11654) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11654 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11654: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11654.displayName = 'HeavyComponent11654';
export default HeavyComponent11654;
