'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11419<T> = T extends (infer U)[]
  ? DeepReadonlyArray11419<U>
  : T extends object
  ? DeepReadonlyObject11419<T>
  : T;

interface DeepReadonlyArray11419<T> extends ReadonlyArray<DeepReadonly11419<T>> {}

type DeepReadonlyObject11419<T> = {
  readonly [P in keyof T]: DeepReadonly11419<T[P]>;
};

type UnionToIntersection11419<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11419<T> = UnionToIntersection11419<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11419<T extends unknown[], V> = [...T, V];

type TuplifyUnion11419<T, L = LastOf11419<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11419<TuplifyUnion11419<Exclude<T, L>>, L>;

type DeepPartial11419<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11419<T[P]> }
  : T;

type Paths11419<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11419<K, Paths11419<T[K], Prev11419[D]>> : never }[keyof T]
  : never;

type Prev11419 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11419<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11419 {
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

type ConfigPaths11419 = Paths11419<NestedConfig11419>;

interface HeavyProps11419 {
  config: DeepPartial11419<NestedConfig11419>;
  path?: ConfigPaths11419;
}

const HeavyComponent11419 = memo(function HeavyComponent11419({ config }: HeavyProps11419) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11419) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11419 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11419: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11419.displayName = 'HeavyComponent11419';
export default HeavyComponent11419;
