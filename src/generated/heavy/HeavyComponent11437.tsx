'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11437<T> = T extends (infer U)[]
  ? DeepReadonlyArray11437<U>
  : T extends object
  ? DeepReadonlyObject11437<T>
  : T;

interface DeepReadonlyArray11437<T> extends ReadonlyArray<DeepReadonly11437<T>> {}

type DeepReadonlyObject11437<T> = {
  readonly [P in keyof T]: DeepReadonly11437<T[P]>;
};

type UnionToIntersection11437<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11437<T> = UnionToIntersection11437<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11437<T extends unknown[], V> = [...T, V];

type TuplifyUnion11437<T, L = LastOf11437<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11437<TuplifyUnion11437<Exclude<T, L>>, L>;

type DeepPartial11437<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11437<T[P]> }
  : T;

type Paths11437<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11437<K, Paths11437<T[K], Prev11437[D]>> : never }[keyof T]
  : never;

type Prev11437 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11437<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11437 {
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

type ConfigPaths11437 = Paths11437<NestedConfig11437>;

interface HeavyProps11437 {
  config: DeepPartial11437<NestedConfig11437>;
  path?: ConfigPaths11437;
}

const HeavyComponent11437 = memo(function HeavyComponent11437({ config }: HeavyProps11437) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11437) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11437 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11437: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11437.displayName = 'HeavyComponent11437';
export default HeavyComponent11437;
