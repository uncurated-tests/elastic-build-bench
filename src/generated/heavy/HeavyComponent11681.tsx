'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11681<T> = T extends (infer U)[]
  ? DeepReadonlyArray11681<U>
  : T extends object
  ? DeepReadonlyObject11681<T>
  : T;

interface DeepReadonlyArray11681<T> extends ReadonlyArray<DeepReadonly11681<T>> {}

type DeepReadonlyObject11681<T> = {
  readonly [P in keyof T]: DeepReadonly11681<T[P]>;
};

type UnionToIntersection11681<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11681<T> = UnionToIntersection11681<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11681<T extends unknown[], V> = [...T, V];

type TuplifyUnion11681<T, L = LastOf11681<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11681<TuplifyUnion11681<Exclude<T, L>>, L>;

type DeepPartial11681<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11681<T[P]> }
  : T;

type Paths11681<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11681<K, Paths11681<T[K], Prev11681[D]>> : never }[keyof T]
  : never;

type Prev11681 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11681<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11681 {
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

type ConfigPaths11681 = Paths11681<NestedConfig11681>;

interface HeavyProps11681 {
  config: DeepPartial11681<NestedConfig11681>;
  path?: ConfigPaths11681;
}

const HeavyComponent11681 = memo(function HeavyComponent11681({ config }: HeavyProps11681) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11681) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11681 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11681: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11681.displayName = 'HeavyComponent11681';
export default HeavyComponent11681;
