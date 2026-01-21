'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11783<T> = T extends (infer U)[]
  ? DeepReadonlyArray11783<U>
  : T extends object
  ? DeepReadonlyObject11783<T>
  : T;

interface DeepReadonlyArray11783<T> extends ReadonlyArray<DeepReadonly11783<T>> {}

type DeepReadonlyObject11783<T> = {
  readonly [P in keyof T]: DeepReadonly11783<T[P]>;
};

type UnionToIntersection11783<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11783<T> = UnionToIntersection11783<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11783<T extends unknown[], V> = [...T, V];

type TuplifyUnion11783<T, L = LastOf11783<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11783<TuplifyUnion11783<Exclude<T, L>>, L>;

type DeepPartial11783<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11783<T[P]> }
  : T;

type Paths11783<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11783<K, Paths11783<T[K], Prev11783[D]>> : never }[keyof T]
  : never;

type Prev11783 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11783<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11783 {
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

type ConfigPaths11783 = Paths11783<NestedConfig11783>;

interface HeavyProps11783 {
  config: DeepPartial11783<NestedConfig11783>;
  path?: ConfigPaths11783;
}

const HeavyComponent11783 = memo(function HeavyComponent11783({ config }: HeavyProps11783) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11783) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11783 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11783: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11783.displayName = 'HeavyComponent11783';
export default HeavyComponent11783;
