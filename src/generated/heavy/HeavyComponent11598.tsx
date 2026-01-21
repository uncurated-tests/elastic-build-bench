'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11598<T> = T extends (infer U)[]
  ? DeepReadonlyArray11598<U>
  : T extends object
  ? DeepReadonlyObject11598<T>
  : T;

interface DeepReadonlyArray11598<T> extends ReadonlyArray<DeepReadonly11598<T>> {}

type DeepReadonlyObject11598<T> = {
  readonly [P in keyof T]: DeepReadonly11598<T[P]>;
};

type UnionToIntersection11598<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11598<T> = UnionToIntersection11598<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11598<T extends unknown[], V> = [...T, V];

type TuplifyUnion11598<T, L = LastOf11598<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11598<TuplifyUnion11598<Exclude<T, L>>, L>;

type DeepPartial11598<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11598<T[P]> }
  : T;

type Paths11598<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11598<K, Paths11598<T[K], Prev11598[D]>> : never }[keyof T]
  : never;

type Prev11598 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11598<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11598 {
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

type ConfigPaths11598 = Paths11598<NestedConfig11598>;

interface HeavyProps11598 {
  config: DeepPartial11598<NestedConfig11598>;
  path?: ConfigPaths11598;
}

const HeavyComponent11598 = memo(function HeavyComponent11598({ config }: HeavyProps11598) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11598) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11598 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11598: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11598.displayName = 'HeavyComponent11598';
export default HeavyComponent11598;
