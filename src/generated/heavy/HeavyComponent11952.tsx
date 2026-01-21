'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11952<T> = T extends (infer U)[]
  ? DeepReadonlyArray11952<U>
  : T extends object
  ? DeepReadonlyObject11952<T>
  : T;

interface DeepReadonlyArray11952<T> extends ReadonlyArray<DeepReadonly11952<T>> {}

type DeepReadonlyObject11952<T> = {
  readonly [P in keyof T]: DeepReadonly11952<T[P]>;
};

type UnionToIntersection11952<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11952<T> = UnionToIntersection11952<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11952<T extends unknown[], V> = [...T, V];

type TuplifyUnion11952<T, L = LastOf11952<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11952<TuplifyUnion11952<Exclude<T, L>>, L>;

type DeepPartial11952<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11952<T[P]> }
  : T;

type Paths11952<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11952<K, Paths11952<T[K], Prev11952[D]>> : never }[keyof T]
  : never;

type Prev11952 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11952<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11952 {
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

type ConfigPaths11952 = Paths11952<NestedConfig11952>;

interface HeavyProps11952 {
  config: DeepPartial11952<NestedConfig11952>;
  path?: ConfigPaths11952;
}

const HeavyComponent11952 = memo(function HeavyComponent11952({ config }: HeavyProps11952) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11952) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11952 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11952: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11952.displayName = 'HeavyComponent11952';
export default HeavyComponent11952;
