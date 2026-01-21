'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11860<T> = T extends (infer U)[]
  ? DeepReadonlyArray11860<U>
  : T extends object
  ? DeepReadonlyObject11860<T>
  : T;

interface DeepReadonlyArray11860<T> extends ReadonlyArray<DeepReadonly11860<T>> {}

type DeepReadonlyObject11860<T> = {
  readonly [P in keyof T]: DeepReadonly11860<T[P]>;
};

type UnionToIntersection11860<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11860<T> = UnionToIntersection11860<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11860<T extends unknown[], V> = [...T, V];

type TuplifyUnion11860<T, L = LastOf11860<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11860<TuplifyUnion11860<Exclude<T, L>>, L>;

type DeepPartial11860<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11860<T[P]> }
  : T;

type Paths11860<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11860<K, Paths11860<T[K], Prev11860[D]>> : never }[keyof T]
  : never;

type Prev11860 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11860<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11860 {
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

type ConfigPaths11860 = Paths11860<NestedConfig11860>;

interface HeavyProps11860 {
  config: DeepPartial11860<NestedConfig11860>;
  path?: ConfigPaths11860;
}

const HeavyComponent11860 = memo(function HeavyComponent11860({ config }: HeavyProps11860) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11860) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11860 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11860: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11860.displayName = 'HeavyComponent11860';
export default HeavyComponent11860;
