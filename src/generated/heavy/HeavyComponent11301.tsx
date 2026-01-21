'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11301<T> = T extends (infer U)[]
  ? DeepReadonlyArray11301<U>
  : T extends object
  ? DeepReadonlyObject11301<T>
  : T;

interface DeepReadonlyArray11301<T> extends ReadonlyArray<DeepReadonly11301<T>> {}

type DeepReadonlyObject11301<T> = {
  readonly [P in keyof T]: DeepReadonly11301<T[P]>;
};

type UnionToIntersection11301<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11301<T> = UnionToIntersection11301<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11301<T extends unknown[], V> = [...T, V];

type TuplifyUnion11301<T, L = LastOf11301<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11301<TuplifyUnion11301<Exclude<T, L>>, L>;

type DeepPartial11301<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11301<T[P]> }
  : T;

type Paths11301<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11301<K, Paths11301<T[K], Prev11301[D]>> : never }[keyof T]
  : never;

type Prev11301 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11301<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11301 {
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

type ConfigPaths11301 = Paths11301<NestedConfig11301>;

interface HeavyProps11301 {
  config: DeepPartial11301<NestedConfig11301>;
  path?: ConfigPaths11301;
}

const HeavyComponent11301 = memo(function HeavyComponent11301({ config }: HeavyProps11301) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11301) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11301 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11301: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11301.displayName = 'HeavyComponent11301';
export default HeavyComponent11301;
