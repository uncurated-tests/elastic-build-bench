'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11364<T> = T extends (infer U)[]
  ? DeepReadonlyArray11364<U>
  : T extends object
  ? DeepReadonlyObject11364<T>
  : T;

interface DeepReadonlyArray11364<T> extends ReadonlyArray<DeepReadonly11364<T>> {}

type DeepReadonlyObject11364<T> = {
  readonly [P in keyof T]: DeepReadonly11364<T[P]>;
};

type UnionToIntersection11364<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11364<T> = UnionToIntersection11364<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11364<T extends unknown[], V> = [...T, V];

type TuplifyUnion11364<T, L = LastOf11364<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11364<TuplifyUnion11364<Exclude<T, L>>, L>;

type DeepPartial11364<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11364<T[P]> }
  : T;

type Paths11364<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11364<K, Paths11364<T[K], Prev11364[D]>> : never }[keyof T]
  : never;

type Prev11364 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11364<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11364 {
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

type ConfigPaths11364 = Paths11364<NestedConfig11364>;

interface HeavyProps11364 {
  config: DeepPartial11364<NestedConfig11364>;
  path?: ConfigPaths11364;
}

const HeavyComponent11364 = memo(function HeavyComponent11364({ config }: HeavyProps11364) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11364) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11364 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11364: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11364.displayName = 'HeavyComponent11364';
export default HeavyComponent11364;
