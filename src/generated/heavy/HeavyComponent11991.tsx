'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11991<T> = T extends (infer U)[]
  ? DeepReadonlyArray11991<U>
  : T extends object
  ? DeepReadonlyObject11991<T>
  : T;

interface DeepReadonlyArray11991<T> extends ReadonlyArray<DeepReadonly11991<T>> {}

type DeepReadonlyObject11991<T> = {
  readonly [P in keyof T]: DeepReadonly11991<T[P]>;
};

type UnionToIntersection11991<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11991<T> = UnionToIntersection11991<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11991<T extends unknown[], V> = [...T, V];

type TuplifyUnion11991<T, L = LastOf11991<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11991<TuplifyUnion11991<Exclude<T, L>>, L>;

type DeepPartial11991<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11991<T[P]> }
  : T;

type Paths11991<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11991<K, Paths11991<T[K], Prev11991[D]>> : never }[keyof T]
  : never;

type Prev11991 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11991<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11991 {
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

type ConfigPaths11991 = Paths11991<NestedConfig11991>;

interface HeavyProps11991 {
  config: DeepPartial11991<NestedConfig11991>;
  path?: ConfigPaths11991;
}

const HeavyComponent11991 = memo(function HeavyComponent11991({ config }: HeavyProps11991) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11991) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11991 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11991: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11991.displayName = 'HeavyComponent11991';
export default HeavyComponent11991;
