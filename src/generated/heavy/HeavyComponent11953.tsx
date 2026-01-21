'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11953<T> = T extends (infer U)[]
  ? DeepReadonlyArray11953<U>
  : T extends object
  ? DeepReadonlyObject11953<T>
  : T;

interface DeepReadonlyArray11953<T> extends ReadonlyArray<DeepReadonly11953<T>> {}

type DeepReadonlyObject11953<T> = {
  readonly [P in keyof T]: DeepReadonly11953<T[P]>;
};

type UnionToIntersection11953<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11953<T> = UnionToIntersection11953<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11953<T extends unknown[], V> = [...T, V];

type TuplifyUnion11953<T, L = LastOf11953<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11953<TuplifyUnion11953<Exclude<T, L>>, L>;

type DeepPartial11953<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11953<T[P]> }
  : T;

type Paths11953<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11953<K, Paths11953<T[K], Prev11953[D]>> : never }[keyof T]
  : never;

type Prev11953 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11953<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11953 {
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

type ConfigPaths11953 = Paths11953<NestedConfig11953>;

interface HeavyProps11953 {
  config: DeepPartial11953<NestedConfig11953>;
  path?: ConfigPaths11953;
}

const HeavyComponent11953 = memo(function HeavyComponent11953({ config }: HeavyProps11953) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11953) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11953 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11953: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11953.displayName = 'HeavyComponent11953';
export default HeavyComponent11953;
