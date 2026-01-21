'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11787<T> = T extends (infer U)[]
  ? DeepReadonlyArray11787<U>
  : T extends object
  ? DeepReadonlyObject11787<T>
  : T;

interface DeepReadonlyArray11787<T> extends ReadonlyArray<DeepReadonly11787<T>> {}

type DeepReadonlyObject11787<T> = {
  readonly [P in keyof T]: DeepReadonly11787<T[P]>;
};

type UnionToIntersection11787<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11787<T> = UnionToIntersection11787<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11787<T extends unknown[], V> = [...T, V];

type TuplifyUnion11787<T, L = LastOf11787<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11787<TuplifyUnion11787<Exclude<T, L>>, L>;

type DeepPartial11787<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11787<T[P]> }
  : T;

type Paths11787<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11787<K, Paths11787<T[K], Prev11787[D]>> : never }[keyof T]
  : never;

type Prev11787 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11787<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11787 {
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

type ConfigPaths11787 = Paths11787<NestedConfig11787>;

interface HeavyProps11787 {
  config: DeepPartial11787<NestedConfig11787>;
  path?: ConfigPaths11787;
}

const HeavyComponent11787 = memo(function HeavyComponent11787({ config }: HeavyProps11787) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11787) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11787 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11787: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11787.displayName = 'HeavyComponent11787';
export default HeavyComponent11787;
