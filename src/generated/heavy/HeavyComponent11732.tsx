'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11732<T> = T extends (infer U)[]
  ? DeepReadonlyArray11732<U>
  : T extends object
  ? DeepReadonlyObject11732<T>
  : T;

interface DeepReadonlyArray11732<T> extends ReadonlyArray<DeepReadonly11732<T>> {}

type DeepReadonlyObject11732<T> = {
  readonly [P in keyof T]: DeepReadonly11732<T[P]>;
};

type UnionToIntersection11732<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11732<T> = UnionToIntersection11732<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11732<T extends unknown[], V> = [...T, V];

type TuplifyUnion11732<T, L = LastOf11732<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11732<TuplifyUnion11732<Exclude<T, L>>, L>;

type DeepPartial11732<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11732<T[P]> }
  : T;

type Paths11732<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11732<K, Paths11732<T[K], Prev11732[D]>> : never }[keyof T]
  : never;

type Prev11732 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11732<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11732 {
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

type ConfigPaths11732 = Paths11732<NestedConfig11732>;

interface HeavyProps11732 {
  config: DeepPartial11732<NestedConfig11732>;
  path?: ConfigPaths11732;
}

const HeavyComponent11732 = memo(function HeavyComponent11732({ config }: HeavyProps11732) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11732) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11732 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11732: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11732.displayName = 'HeavyComponent11732';
export default HeavyComponent11732;
