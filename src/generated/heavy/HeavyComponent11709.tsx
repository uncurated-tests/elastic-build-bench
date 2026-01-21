'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11709<T> = T extends (infer U)[]
  ? DeepReadonlyArray11709<U>
  : T extends object
  ? DeepReadonlyObject11709<T>
  : T;

interface DeepReadonlyArray11709<T> extends ReadonlyArray<DeepReadonly11709<T>> {}

type DeepReadonlyObject11709<T> = {
  readonly [P in keyof T]: DeepReadonly11709<T[P]>;
};

type UnionToIntersection11709<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11709<T> = UnionToIntersection11709<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11709<T extends unknown[], V> = [...T, V];

type TuplifyUnion11709<T, L = LastOf11709<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11709<TuplifyUnion11709<Exclude<T, L>>, L>;

type DeepPartial11709<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11709<T[P]> }
  : T;

type Paths11709<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11709<K, Paths11709<T[K], Prev11709[D]>> : never }[keyof T]
  : never;

type Prev11709 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11709<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11709 {
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

type ConfigPaths11709 = Paths11709<NestedConfig11709>;

interface HeavyProps11709 {
  config: DeepPartial11709<NestedConfig11709>;
  path?: ConfigPaths11709;
}

const HeavyComponent11709 = memo(function HeavyComponent11709({ config }: HeavyProps11709) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11709) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11709 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11709: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11709.displayName = 'HeavyComponent11709';
export default HeavyComponent11709;
