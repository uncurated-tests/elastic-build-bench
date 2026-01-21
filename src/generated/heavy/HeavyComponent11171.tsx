'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11171<T> = T extends (infer U)[]
  ? DeepReadonlyArray11171<U>
  : T extends object
  ? DeepReadonlyObject11171<T>
  : T;

interface DeepReadonlyArray11171<T> extends ReadonlyArray<DeepReadonly11171<T>> {}

type DeepReadonlyObject11171<T> = {
  readonly [P in keyof T]: DeepReadonly11171<T[P]>;
};

type UnionToIntersection11171<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11171<T> = UnionToIntersection11171<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11171<T extends unknown[], V> = [...T, V];

type TuplifyUnion11171<T, L = LastOf11171<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11171<TuplifyUnion11171<Exclude<T, L>>, L>;

type DeepPartial11171<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11171<T[P]> }
  : T;

type Paths11171<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11171<K, Paths11171<T[K], Prev11171[D]>> : never }[keyof T]
  : never;

type Prev11171 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11171<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11171 {
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

type ConfigPaths11171 = Paths11171<NestedConfig11171>;

interface HeavyProps11171 {
  config: DeepPartial11171<NestedConfig11171>;
  path?: ConfigPaths11171;
}

const HeavyComponent11171 = memo(function HeavyComponent11171({ config }: HeavyProps11171) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11171) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11171 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11171: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11171.displayName = 'HeavyComponent11171';
export default HeavyComponent11171;
